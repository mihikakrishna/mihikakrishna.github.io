import React, { useRef, useEffect } from 'react';

export default function About() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const element = typewriterRef.current;
    const fullText = element.textContent;
    element.textContent = '';

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        element.textContent += fullText[i];
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); 

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
      <h1>About</h1>
      <div className="glassmorphism-effect">
        <div className="content-box">
          <h4 ref={typewriterRef} className="typewriter" style={{ color: '#d4c7ec', fontSize: '200%'}}>Hello World, I'm Mihika !</h4>
          <p style={{ letterSpacing: '1px'}}>I'm obsessed with coding. Not in a "I dream in binary" way, but more like "I love making cool stuff happen on a screen." It's where I get to flex my problem-solving muscles and let my creativity run wild.</p>
          <p>A few things about me:</p>
          <ul style={{ textAlign: 'left', color: '#d4c7ec', listStyleType: 'none'}}>
          <li>
          🚀 Coding:
              Started because I wanted to make video games in highschool. <br></br>
            <div style={{marginLeft: '1.5em'}}>
              Now, I can't get enough of turning ideas into reality!
            </div>
          </li>
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
