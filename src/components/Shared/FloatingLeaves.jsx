import React from 'react';
import './FloatingLeaves.css';

export default function FloatingLeaves() {
  return (
    <div className="floating-leaves-container" aria-hidden="true">
      {/* Top Left Leaf - Authentic Brand Left Leaf */}
      <img
        src="/svgs/leaf-left.png"
        alt=""
        className="floating-leaf floating-leaf-top-left animate-float"
      />

      {/* Top Right Leaf - Authentic Brand Right Leaf */}
      <img
        src="/svgs/leaf-right.png"
        alt=""
        className="floating-leaf floating-leaf-top-right animate-float-slow"
      />

      {/* Mid Left Leaf Pair - Authentic Brand Double-Leaf */}
      <img
        src="/svgs/leaf.png"
        alt=""
        className="floating-leaf floating-leaf-mid-left animate-float"
      />

      {/* Mid Right Leaf - Authentic Brand Right Leaf */}
      <img
        src="/svgs/leaf-right.png"
        alt=""
        className="floating-leaf floating-leaf-mid-right animate-float-slow"
      />
    </div>
  );
}
