import React from 'react';

export default function FloatingLeaves() {
  return (
    <div
      className="floating-leaves-container"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {/* Top Left Leaf */}
      <svg
        className="animate-float"
        style={{
          position: 'absolute',
          top: '40px',
          left: '-15px',
          width: '75px',
          height: '75px',
          opacity: 0.85,
        }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M10 50C10 50 40 20 85 25C95 65 60 90 20 85C15 75 10 50 10 50Z"
          fill="#76B82A"
          opacity="0.8"
        />
        <path
          d="M10 50C35 55 60 50 85 25"
          stroke="#4D8018"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Top Right Leaf */}
      <svg
        className="animate-float-slow"
        style={{
          position: 'absolute',
          top: '120px',
          right: '20px',
          width: '65px',
          height: '65px',
          opacity: 0.75,
        }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M85 20C85 20 60 60 20 65C10 25 45 5 80 15C85 18 85 20 85 20Z"
          fill="#DFF0C9"
        />
        <path
          d="M85 20C60 35 40 45 20 65"
          stroke="#76B82A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Mid Left Leaf Pair */}
      <svg
        className="animate-float"
        style={{
          position: 'absolute',
          top: '48%',
          left: '15px',
          width: '55px',
          height: '55px',
          opacity: 0.7,
        }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M20 70C20 70 30 30 75 25C80 65 55 85 25 80L20 70Z"
          fill="#76B82A"
          opacity="0.75"
        />
      </svg>

      {/* Mid Right Leaf */}
      <svg
        className="animate-float-slow"
        style={{
          position: 'absolute',
          top: '55%',
          right: '-10px',
          width: '80px',
          height: '80px',
          opacity: 0.8,
        }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M90 60C90 60 60 20 15 25C5 70 40 95 80 85L90 60Z"
          fill="#DFF0C9"
        />
      </svg>
    </div>
  );
}
