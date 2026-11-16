import React from 'react';

export default function ScallopedBadge({
  topText = 'AGES',
  mainText = '2.5–6',
  className = '',
  style = {},
}) {
  return (
    <div
      className={`scalloped-badge ${className}`}
      style={{
        position: 'relative',
        width: '118px',
        height: '118px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'drop-shadow(0 8px 18px rgba(245, 184, 0, 0.4))',
        zIndex: 10,
        ...style,
      }}
    >
      {/* 16-Lobe Scalloped Rosette SVG Background */}
      <svg
        viewBox="0 0 120 120"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <path
          d="M 108.00 60.00 A 10 10 0 0 1 104.35 78.37 A 10 10 0 0 1 93.94 93.94 A 10 10 0 0 1 78.37 104.35 A 10 10 0 0 1 60.00 108.00 A 10 10 0 0 1 41.63 104.35 A 10 10 0 0 1 26.06 93.94 A 10 10 0 0 1 15.65 78.37 A 10 10 0 0 1 12.00 60.00 A 10 10 0 0 1 15.65 41.63 A 10 10 0 0 1 26.06 26.06 A 10 10 0 0 1 41.63 15.65 A 10 10 0 0 1 60.00 12.00 A 10 10 0 0 1 78.37 15.65 A 10 10 0 0 1 93.94 26.06 A 10 10 0 0 1 104.35 41.63 A 10 10 0 0 1 108.00 60.00 Z"
          fill="#FFD21C"
          stroke="#F5B800"
          strokeWidth="1.5"
        />
      </svg>

      {/* Badge Content */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#1E3A2B',
          lineHeight: 1.1,
          paddingTop: '2px',
        }}
      >
        <span
          style={{
            fontSize: '0.78rem',
            fontWeight: '800',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#1E3A2B',
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          {topText}
        </span>

        <span
          style={{
            fontSize: '1.55rem',
            fontWeight: '900',
            fontFamily: "'Outfit', 'Fredoka', sans-serif",
            color: '#064B25',
            margin: '1px 0',
            letterSpacing: '-0.02em',
          }}
        >
          {mainText}
        </span>

        {/* Little Green Sprout */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#064B25"
          style={{ marginTop: '1px' }}
        >
          <path d="M12 22v-7c0-2.2-1.8-4-4-4H4v-1c0-3.3 2.7-6 6-6h1c.6 0 1 .4 1 1v2c0 2.8 2.2 5 5 5h1c.6 0 1 .4 1 1v1c0 3.3-2.7 6-6 6h-1c-.6 0-1-.4-1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1v6z" />
          <path d="M7 11c0-1.7 1.3-3 3-3h1v1c0 1.7-1.3 3-3 3H7v-1z" fill="#76B82A" />
        </svg>
      </div>
    </div>
  );
}
