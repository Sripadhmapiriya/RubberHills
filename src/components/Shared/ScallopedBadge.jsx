import React from 'react';

export default function ScallopedBadge({
  topText = 'AGES',
  mainText = '2.5–6',
  bottomIcon = 'leaf', // 'leaf' | 'heart' | 'grad'
  className = '',
  style = {},
}) {
  return (
    <div
      className={`scalloped-badge ${className}`}
      style={{
        position: 'relative',
        width: '124px',
        height: '124px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFD21C',
        borderRadius: '50%',
        boxShadow: '0 8px 24px rgba(245, 184, 0, 0.45)',
        border: '3px dashed #F5B800',
        padding: '8px',
        textAlign: 'center',
        color: '#064B25',
        zIndex: 5,
        ...style,
      }}
    >
      {topText && (
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: '800',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            lineHeight: 1.1,
          }}
        >
          {topText}
        </span>
      )}
      <span
        style={{
          fontSize: '1.45rem',
          fontWeight: '900',
          lineHeight: 1.1,
          fontFamily: "'Outfit', sans-serif",
          margin: '2px 0',
        }}
      >
        {mainText}
      </span>
      {bottomIcon === 'leaf' && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#064B25">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
        </svg>
      )}
      {bottomIcon === 'heart' && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#064B25">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )}
      {bottomIcon === 'grad' && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#064B25">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
        </svg>
      )}
    </div>
  );
}
