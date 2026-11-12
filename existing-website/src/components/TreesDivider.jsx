import React from 'react';

export default function TreesDivider() {
  return (
    <svg className="trees" aria-hidden="true">
      <defs>
        <pattern
          id="rt"
          width="46"
          height="90"
          patternUnits="userSpaceOnUse"
        >
          <rect className="tk" x="21" y="30" width="4" height="60" />
          <ellipse className="tr" cx="23" cy="26" rx="18" ry="24" />
        </pattern>
      </defs>
      <rect width="100%" height="90" fill="url(#rt)" />
    </svg>
  );
}

