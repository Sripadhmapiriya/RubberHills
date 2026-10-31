import React from 'react';

export default function About() {
  return (
    <section id="about" className="fade-in-section">
      <h2>About us</h2>
      <div className="about">
        <div>
          <p>
            Rubber Hills Kindergarten is part of the Rubber Hills Group, named for the lush rubber trees and honey-rich land where we belong.
          </p>
          <p>
            It was founded by Ajin George, a retired Navy veteran, and Luie Femila, a seasoned educator. After retirement, they chose to stay in service and devote their time to shaping young minds.
          </p>
          <p>
            Our aim is a nurturing place where every child can grow and thrive, in the classroom and on the sports field.
          </p>
        </div>
        <div className="people">
          <div className="person">
            <h3>Ajin George</h3>
            <p>Founder. Retired Navy veteran.</p>
          </div>
          <div className="person">
            <h3>Luie Femila</h3>
            <p>
              Founder and educator. Experience in Navy kindergarten schools and Kendriya Vidyalayas, and as a business analyst with Barclays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

