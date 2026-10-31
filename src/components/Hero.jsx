import React from 'react';

export default function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>
          Where big <span className="a">ideas</span> start <span className="b">small</span>.
        </h1>
        <p>
          A warm, play-based kindergarten and creche for children aged 2.5 to 6, set among rubber trees and green hills, where children learn, play and grow in fresh air.
        </p>
      </div>
      <img
        className="photo"
        src="/assets/hero-building.jpg"
        alt="The yellow and glass Rubber Hills Kindergarten building with its colourful sign"
      />
    </div>
  );
}

