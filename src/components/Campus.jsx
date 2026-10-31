import React from 'react';

export default function Campus() {
  return (
    <section id="campus" className="fade-in-section">
      <h2>Our campus</h2>
      <p className="lead">
        Bright classrooms, a garden walkway and a play court, all surrounded by rubber trees.
      </p>
      <div className="gallery">
        <figure>
          <img
            src="/assets/campus-walkway.jpg"
            alt="Stone walkway with grass lines beside the yellow school building"
            loading="lazy"
          />
          <figcaption>Garden walkway to the classrooms</figcaption>
        </figure>
        <figure>
          <img
            src="/assets/campus-court.jpg"
            alt="White-walled play court with tall rubber trees behind it"
            loading="lazy"
          />
          <figcaption>Play court under the rubber trees</figcaption>
        </figure>
        <figure>
          <img
            src="/assets/campus-entrance.jpg"
            alt="Yellow school building seen from the gate with a paved driveway"
            loading="lazy"
          />
          <figcaption>Main building and entrance</figcaption>
        </figure>
        <figure>
          <img
            src="/assets/campus-ramp.jpg"
            alt="Paved ramp leading down to the school entrance"
            loading="lazy"
          />
          <figcaption>Ramp to the classrooms</figcaption>
        </figure>
      </div>
    </section>
  );
}

