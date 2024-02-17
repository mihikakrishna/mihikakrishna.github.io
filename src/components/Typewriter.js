import React, { useRef, useEffect } from 'react';

function Typewriter({ text, style = {}, ...props }) {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const element = typewriterRef.current;
    element.textContent = '';

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <h4 ref={typewriterRef} style={style} {...props}>Loading...</h4>
  );
}

export default Typewriter;
