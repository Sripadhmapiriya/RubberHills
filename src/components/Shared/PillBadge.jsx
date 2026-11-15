import React from 'react';

export default function PillBadge({ text, className = '' }) {
  return (
    <div
      className={`pill-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 18px',
        backgroundColor: '#EAF4DC',
        border: '1.5px solid #76B82A',
        borderRadius: '9999px',
        color: '#064B25',
        fontSize: '0.82rem',
        fontWeight: '800',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        boxShadow: '0 2px 8px rgba(6, 75, 37, 0.05)',
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#76B82A"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
      </svg>
      <span>{text}</span>
    </div>
  );
}
