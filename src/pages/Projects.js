import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

import Btree from '../assets/images/btree.png';
import GpaAalysis from '../assets/images/davis-gpa-analysis.png';
import HealthTracker from '../assets/images/health-tracker-project.png';
import SlidingPuzzle from '../assets/images/sliding-puzzle-project.png';
import HandGestureRecognizer from '../assets/images/hand-gesture-project.png';

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <Carousel>
        <div>
          <img src={HealthTracker} alt="Health Tracker Project" width="400px" height="400px" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={HandGestureRecognizer} alt="Hand Gesture Recognizer Project" width="400px" height="400px" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={Btree} alt="Btree Project" width="400px" height="400px"/>
            <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={GpaAalysis} alt="Davis GPA Analysis Project" width="400px" height="400px" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={SlidingPuzzle} alt="Sliding Puzzle Project" width="400px" height="400px" />
          <p className="legend">Legend 1</p>
        </div>
        {/* Add more carousel items as needed */}
      </Carousel>
    </div>
  );
}
