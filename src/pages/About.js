import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <div className="glassmorphism-effect">
        <div className="content-box">
          <h4>👋 Hello World, I'm Mihika!</h4>
          <p>I'm kinda obsessed with coding. Not in the "I dream in binary" way, but more like "I love making cool stuff happen on a screen." It's where I get to flex my problem-solving muscles and let my creativity run wild.</p>
          <p>A few things about me:</p>
          <ul style={{ textAlign: 'left' }}>
              <li>🚀 Coding: Started because I wanted to make video games in highschool. Now, I can't get enough of turning ideas into reality.</li>
              <li>🎸 Guitar: I love jamming out to my favorite songs. It helps me relax when I'm stressed.</li>
              <li>♟️ Chess: It's the perfect break from screens. Plus, I'm trying to get to 1000 elo.</li>
              <li>✍️ Drawing: It’s where I zone out and let my hands do the thinking.</li>
              <li>🧶 Crocheting: Some people meditate; I crochet. Same calm, plus you get a cute plushie!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
