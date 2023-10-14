import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
          <a href="https://github.com/mihikakrishna/HealthTracker" target="_blank" rel="noopener noreferrer">
            <p className="legend">Source Code</p>
          </a>
        </div>
        <div>
          <img src={HandGestureRecognizer} alt="Hand Gesture Recognizer Project" width="400px" height="400px" />
          <a href="https://github.com/mihikakrishna/Hand-Gesture-Recognizer" target="_blank" rel="noopener noreferrer">
            <p className="legend">Source Code</p>
          </a>
        </div>
        <div>
          <img src={Btree} alt="Btree Project" width="400px" height="400px"/>
          <a href="https://github.com/mihikakrishna/Btree" target="_blank" rel="noopener noreferrer">
            <p className="legend">Source Code</p>
          </a>
        </div>
        <div>
          <img src={GpaAalysis} alt="Davis GPA Analysis Project" width="400px" height="400px" />
          <a href="https://github.com/mihikakrishna/UC-Davis-GPA-Analysis-Tool" target="_blank" rel="noopener noreferrer">
            <p className="legend">Source Code</p>
          </a>
        </div>
        <div>
          <img src={SlidingPuzzle} alt="Sliding Puzzle Project" width="400px" height="400px" />
          <a href="https://github.com/mihikakrishna/sliding-puzzle" target="_blank" rel="noopener noreferrer">
            <p className="legend">Source Code</p>
          </a>
        </div>
      </Carousel>
    </div>
  );
}
