import React from 'react';
import FadingImage from '../components/FadingImage';

export default function Home() {
  return (
      <div>
          <h1>Home</h1>
          <div className="container">
            <FadingImage src="sample.jpeg" alt="sample_image_3" />
            <FadingImage src="sample.jpeg" alt="sample_image_1" />
            <FadingImage src="sample.jpeg" alt="sample_image_2" />
            <FadingImage src="sample.jpeg" alt="sample_image_3" />
          </div>
      </div>
  );
}