import React, { useEffect } from "react";
import Btree from '../assets/images/btree.png';
import GpaAalysis from '../assets/images/davis-gpa-analysis.png';
import HealthTracker from '../assets/images/health-tracker-project.png';
import SlidingPuzzle from '../assets/images/sliding-puzzle-project.png';
import HandGestureRecognizer from '../assets/images/hand-gesture-project.png';

const ProjectSection = ({ image, altText, href, description, backgroundColor }) => (
  <div className="section" style={{ backgroundColor: backgroundColor }}>
    <div className="section-content">
      <img src={image} alt={altText} />
    </div>
    <p>{description}</p>
    <a href={href} target="_blank" rel="noopener noreferrer" className="source-link">
      <p className="legend">Source Code</p>
    </a>
  </div>
);



export default function Projects() {
  useEffect(() => {
    const handleScroll = () => {
      const innerDiv = document.querySelector(".parallax-inner");
      const scrolledValue = window.scrollY;
      innerDiv.style.transform = `translate3d(0, ${scrolledValue * 0.5}px, 0)`;
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <nav className="sticky-nav"></nav>
      <div className="parallax-inner">
        <ProjectSection 
          image={HealthTracker} 
          altText="Health Tracker Project" 
          href="https://github.com/mihikakrishna/HealthTracker" 
          description="A comprehensive health tracker for individuals."
          backgroundColor="#57e2e5"
        />
        <ProjectSection 
          image={HandGestureRecognizer} 
          altText="Hand Gesture Recognizer Project" 
          href="https://github.com/mihikakrishna/Hand-Gesture-Recognizer" 
          backgroundColor="#e08dac"
        />
        <ProjectSection 
          image={Btree} 
          altText="Btree Project" 
          href="https://github.com/mihikakrishna/Btree"
          backgroundColor="#6a7fdb"
        />
        <ProjectSection 
          image={GpaAalysis} 
          altText="Davis GPA Analysis Project" 
          href="https://github.com/mihikakrishna/UC-Davis-GPA-Analysis-Tool" 
          backgroundColor="#45cb85"
        />
        <ProjectSection 
          image={SlidingPuzzle} 
          altText="Sliding Puzzle Project" 
          href="https://github.com/mihikakrishna/sliding-puzzle" 
          backgroundColor="#153131"
        />
      </div>
    </div>
  );
}
