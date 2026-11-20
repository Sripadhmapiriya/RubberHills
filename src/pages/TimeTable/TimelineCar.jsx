import React, { useEffect, useRef, useState } from 'react';
import './TimelineCar.css';

/**
 * A little red toy race car that drives along a dashed line through the six
 * Time Table moments (1 → 6), following the zig-zag between the cards and
 * milestone dots. The route is built from the real positions of the cards
 * and dots, so it adapts to any desktop screen width.
 *
 * The car drives underneath each card (the cards sit on top of it). While
 * the car is under a card, that card's icon jumps; as soon as the car comes
 * out from under the card, the icon stops.
 */

const SPEED_PX_PER_SEC = 80; // driving speed (lower = slower)
const PARK_MS = 1600; // pause at the finish before starting again
const CAR_SCALE = 1; // size of the car (1 = about 27 x 17 px)
const EDGE = 12; // how far inside the card edge the car drives
const TURN = 14; // corner radius of the car's turns

function relRect(el, base) {
  const r = el.getBoundingClientRect();
  return {
    left: r.left - base.left,
    top: r.top - base.top,
    right: r.right - base.left,
    bottom: r.bottom - base.top,
    width: r.width,
    height: r.height,
    cx: r.left - base.left + r.width / 2,
    cy: r.top - base.top + r.height / 2,
  };
}

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/**
 * Route across one card: along its left edge, then along its bottom (or top)
 * edge to the middle, then out through the bottom (or top) centre.
 * Starts at (x0, y0), which is already on the card's left edge.
 */
function acrossCard(card, y0, exitsDown) {
  const x = card.left + EDGE;
  const yEdge = exitsDown ? card.bottom - EDGE : card.top + EDGE;
  const v = exitsDown ? 1 : -1; // vertical direction of travel
  return [
    `L ${x} ${yEdge - v * TURN}`,
    `Q ${x} ${yEdge} ${x + TURN} ${yEdge}`,
    `L ${card.cx - TURN} ${yEdge}`,
    `Q ${card.cx} ${yEdge} ${card.cx} ${yEdge + v * TURN}`,
    `L ${card.cx} ${exitsDown ? card.bottom : card.top}`,
  ];
}

function buildMobileRoad(wrapper) {
  const base = wrapper.getBoundingClientRect();
  const nodes = [...wrapper.querySelectorAll('.mobile-milestone-node')].map((n) => relRect(n, base));
  const cards = [...wrapper.querySelectorAll('.mobile-moment-card')].map((c) => relRect(c, base));
  if (nodes.length < 2) return null;

  // The track line x is aligned with the center of the milestone nodes
  const trackX = nodes[0].cx;
  const startY = Math.max(0, nodes[0].top - 20);
  const lastNode = nodes[nodes.length - 1];
  const endY = lastNode.bottom + 25;

  return {
    d: `M ${trackX} ${startY} L ${trackX} ${endY}`,
    width: base.width,
    height: base.height,
    nodes,
    cards,
    isMobile: true,
  };
}

/** Build the route path (SVG "d" string) through all cards and dots. */
function buildRoad(wrapper, isMobile = false) {
  if (isMobile || wrapper.classList.contains('timeline-mobile-wrapper')) {
    return buildMobileRoad(wrapper);
  }

  const base = wrapper.getBoundingClientRect();
  const cards = [...wrapper.querySelectorAll('.moment-card')].map((c) => relRect(c, base));
  const dots = [...wrapper.querySelectorAll('.milestone-node')].map((d) => relRect(d, base));
  if (cards.length < 2 || cards.length !== dots.length) return null;

  // Start on the first card's left edge, just under its time badge
  const first = cards[0];
  const startY = first.top + Math.min(70, first.height * 0.3);
  const parts = [`M ${first.left + EDGE} ${startY}`, ...acrossCard(first, startY, true)];

  for (let i = 0; i < cards.length; i += 1) {
    const dot = dots[i];
    const exitsDown = i % 2 === 0; // top-row cards exit at the bottom, bottom-row cards at the top

    // From the card's exit straight to its milestone dot
    parts.push(`L ${dot.cx} ${dot.cy}`);

    const next = cards[i + 1];
    if (!next) break;

    // Turn the corner and drive to the left edge of the next card
    const entryY = exitsDown
      ? clamp(Math.max(dot.cy + 70, next.top + next.height * 0.62), next.top + 40, next.bottom - 40)
      : clamp(Math.min(dot.cy - 70, next.top + next.height * 0.36), next.top + 40, next.bottom - 40);
    const dir = exitsDown ? 1 : -1;
    const r = Math.max(8, Math.min(40, Math.abs(entryY - dot.cy) / 2, (next.left - dot.cx) / 2));
    const x = next.left + EDGE;
    parts.push(
      `L ${dot.cx} ${entryY - dir * r}`,
      `Q ${dot.cx} ${entryY} ${dot.cx + r} ${entryY}`,
      // onto the card, then turn along its left edge (next card exits the opposite way)
      `L ${x - TURN} ${entryY}`,
      `Q ${x} ${entryY} ${x} ${entryY - dir * TURN}`,
      ...acrossCard(next, entryY, !exitsDown)
    );
  }

  return {
    d: parts.join(' '),
    width: base.width,
    height: base.height,
    cards,
    isMobile: false,
  };
}

/* Original little toy race car seen from above (facing right, centred on 0,0).
   Body is about 26 x 14 units. */
function ToyCar() {
  return (
    <g className="toy-car">
      {/* wheels */}
      <rect x="-10" y="-8.5" width="6" height="3" rx="1.2" fill="#263238" />
      <rect x="4" y="-8.5" width="6" height="3" rx="1.2" fill="#263238" />
      <rect x="-10" y="5.5" width="6" height="3" rx="1.2" fill="#263238" />
      <rect x="4" y="5.5" width="6" height="3" rx="1.2" fill="#263238" />
      {/* rear spoiler */}
      <rect x="-14" y="-7" width="3" height="14" rx="1.2" fill="#B91C1C" />
      {/* body */}
      <path
        d="M -12 -5.5 C -12 -7 -10.5 -7 -9 -7 L 6 -7 C 10 -7 13 -4 13 0 C 13 4 10 7 6 7 L -9 7 C -10.5 7 -12 7 -12 5.5 Z"
        fill="#E53935"
        stroke="#9F1D1D"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      {/* racing stripe */}
      <path d="M -12 0 L 12.5 0" stroke="#FFD21C" strokeWidth="2" strokeLinecap="round" />
      {/* windscreen + roof */}
      <path d="M 1 -4.6 C 4 -4.2 5 -2 5 0 C 5 2 4 4.2 1 4.6 Z" fill="#BFE6FF" stroke="#9F1D1D" strokeWidth="0.6" />
      <rect x="-6" y="-4.2" width="7" height="8.4" rx="2" fill="#D32F2F" stroke="#9F1D1D" strokeWidth="0.6" />
      <path d="M -6 0 L 1 0" stroke="#FFD21C" strokeWidth="1.6" />
      {/* headlights */}
      <circle cx="11.6" cy="-3.6" r="1.1" fill="#FFF59D" />
      <circle cx="11.6" cy="3.6" r="1.1" fill="#FFF59D" />
    </g>
  );
}

export default function TimelineCar({ wrapperRef, isMobile = false }) {
  const [road, setRoad] = useState(null);
  const pathRef = useRef(null);
  const carRef = useRef(null);

  // (Re)build the road whenever the layout changes size
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return undefined;

    let frame = 0;
    const rebuild = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (wrapper.offsetParent === null) return; // hidden layout
        setRoad(buildRoad(wrapper, isMobile));
      });
    };

    // Build straight away, then again whenever sizes change
    if (wrapper.offsetParent !== null) setRoad(buildRoad(wrapper, isMobile));
    const ro = new ResizeObserver(rebuild);
    ro.observe(wrapper);
    const targetCards = isMobile ? '.mobile-moment-card' : '.moment-card';
    wrapper.querySelectorAll(targetCards).forEach((c) => ro.observe(c));
    if (isMobile) {
      wrapper.querySelectorAll('.mobile-milestone-node').forEach((n) => ro.observe(n));
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(rebuild);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [wrapperRef, isMobile]);

  // Drive the car along the road
  useEffect(() => {
    const path = pathRef.current;
    const car = carRef.current;
    const wrapper = wrapperRef.current;
    if (!road || !path || !car || !wrapper) return undefined;

    const total = path.getTotalLength();
    const driveSpeed = road.isMobile ? 120 : SPEED_PX_PER_SEC;
    const carScale = road.isMobile ? 0.95 : CAR_SCALE;

    let raf = 0;
    let startTs = null;
    let visiting = -1;

    const setVisiting = (idx) => {
      if (idx === visiting) return;
      const cardEls = road.isMobile
        ? [...wrapper.querySelectorAll('.mobile-moment-card')]
        : [...wrapper.querySelectorAll('.moment-card')];
      const nodeEls = road.isMobile
        ? [...wrapper.querySelectorAll('.mobile-milestone-node')]
        : [];

      if (visiting >= 0) {
        if (cardEls[visiting]) cardEls[visiting].classList.remove('is-visiting');
        if (nodeEls[visiting]) nodeEls[visiting].classList.remove('is-visiting');
      }
      if (idx >= 0) {
        if (cardEls[idx]) cardEls[idx].classList.add('is-visiting');
        if (nodeEls[idx]) nodeEls[idx].classList.add('is-visiting');
      }
      visiting = idx;
    };

    const tick = (ts) => {
      if (startTs === null) startTs = ts;
      const driveMs = (total / driveSpeed) * 1000;
      const elapsed = (ts - startTs) % (driveMs + PARK_MS);
      const dist = Math.min(total, (elapsed / driveMs) * total);

      const p = path.getPointAtLength(dist);
      const ahead = path.getPointAtLength(Math.min(total, dist + 2));
      const behind = path.getPointAtLength(Math.max(0, dist - 2));
      const angle = (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI;
      car.setAttribute('transform', `translate(${p.x} ${p.y}) rotate(${angle}) scale(${carScale})`);

      // Fade in at the start and out while parked at the finish
      const parkedFor = elapsed - driveMs;
      car.style.opacity = parkedFor > PARK_MS - 400 ? String(Math.max(0, (PARK_MS - parkedFor) / 400)) : '1';

      // Highlight the card/node the car is currently visiting
      const inside = road.isMobile
        ? road.nodes.findIndex((n) => Math.abs(p.y - n.cy) < 55)
        : road.cards.findIndex(
            (c) => p.x > c.left + 4 && p.x < c.right - 4 && p.y > c.top + 4 && p.y < c.bottom - 4
          );
      setVisiting(inside);

      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        startTs = null;
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('visibilitychange', onVisibility);
      setVisiting(-1);
    };
  }, [road, wrapperRef]);

  if (!road) return null;

  return (
    <>
      {/* The route line (behind everything) */}
      <svg
        className="timeline-line-svg"
        width={road.width}
        height={road.height}
        viewBox={`0 0 ${road.width} ${road.height}`}
        aria-hidden="true"
      >
        <path ref={pathRef} d={road.d} className="timeline-route-line" />
      </svg>

      {/* The car (above the line and dots, below the cards) */}
      <svg
        className="timeline-car-svg"
        width={road.width}
        height={road.height}
        viewBox={`0 0 ${road.width} ${road.height}`}
        aria-hidden="true"
      >
        <g ref={carRef}>
          <ToyCar />
        </g>
      </svg>
    </>
  );
}
