import React from 'react';
import FadingImage from '../components/FadingImage';
import Typewriter from '../components/Typewriter';

export default function Home() {
  return (
      <div>
          <Typewriter 
            text="Hello World, I'm Mihika !" 
            className="typewriter" 
            style={{ color: '#d4c7ec', fontSize: '200%' }} 
          />
          <h4>Computer Science and Engineering student at UC Davis <br></br>& aspiring software engineer</h4>
          <div className="container">
            <FadingImage src="sample.jpeg" alt="sample_image_3" />
            <FadingImage src="sample.jpeg" alt="sample_image_1" />
            <FadingImage src="sample.jpeg" alt="sample_image_2" />
            <FadingImage src="sample.jpeg" alt="sample_image_3" />
          </div>
      </div>
  );
}