import React from 'react';

const learningCards = [
  {
    theme: 'c1',
    title: 'Linguistic',
    desc: 'Children meet the alphabet and learn letter sounds through phonics. They practise vowels and consonants by listening, speaking and playing with words.',
  },
  {
    theme: 'c2',
    title: 'Numeracy',
    desc: 'Children learn to count, recognise numbers and understand early math ideas such as more, less, shapes and patterns, using hands-on activities.',
  },
  {
    theme: 'c3',
    title: 'Social development',
    desc: 'Children learn about the world around them: their home, school and community. They also learn to share, cooperate and be kind to others.',
  },
  {
    theme: 'c4',
    title: 'Art',
    desc: 'Children try drawing, painting, colouring and other art forms, and learn to express their ideas and feelings with colour and shape.',
  },
  {
    theme: 'c1',
    title: 'Craft',
    desc: 'Simple do-it-yourself projects where children cut, fold, paste and build. They grow creative thinking and fine motor skills as they make something of their own.',
  },
  {
    theme: 'c2',
    title: 'Games',
    desc: 'Playground and park games that keep children active, build strength and balance, and teach teamwork and fair play.',
  },
  {
    theme: 'c3',
    title: 'Library',
    desc: 'A cosy reading corner where children explore picture books and stories. Reading more helps them think more and builds a lasting love of books.',
  },
  {
    theme: 'c4',
    title: 'Puzzles',
    desc: 'Puzzles and matching games that help children focus, solve problems and stay with a task until it is done.',
  },
  {
    theme: 'c1',
    title: 'Events and celebrations',
    desc: 'Special days and celebrations through the year that make school fun, so children look forward to coming every morning.',
  },
];

export default function Learning() {
  return (
    <section id="learn" className="fade-in-section">
      <h2>How children learn here</h2>
      <p className="lead">
        Every day mixes play, stories, movement and quiet time, so children build skills without feeling hurried.
      </p>
      <div className="grid">
        {learningCards.map((card, index) => (
          <div key={index} className={`card ${card.theme}`}>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

