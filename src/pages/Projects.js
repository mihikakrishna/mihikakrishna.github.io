import React, { useEffect } from "react";
import GpaAalysis from '../assets/images/davis-gpa-analysis.png';
import HealthTracker from '../assets/images/health-tracker-project.png';
import SlidingPuzzle from '../assets/images/sliding-puzzle-project.png';
import HandGestureRecognizer from '../assets/images/hand-gesture-project.png';

const ProjectSection = ({ image, altText, href, description, backgroundColor, textColor }) => (
    <div className="section" style={{ backgroundColor: backgroundColor }}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={altText} />
        <div className="description" style={{ color: textColor }}>
          <p>{description}</p>
        </div>
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
          description="A web Application designed to track your fitness journey."
          backgroundColor="#57e2e5"
          textColor="#FFFFFF"
        />
        <ProjectSection 
          image={HandGestureRecognizer} 
          altText="Hand Gesture Recognizer Project" 
          href="https://github.com/mihikakrishna/Hand-Gesture-Recognizer" 
          description="A web application that accurately recognizes and categorizes various hand gestures in real-time."
          backgroundColor="#e08dac"
          textColor="#FFFFFF"
        />
        <ProjectSection 
          image={SlidingPuzzle} 
          altText="Sliding Puzzle Project" 
          href="https://github.com/mihikakrishna/sliding-puzzle"
          description="A program that solves any manually shuffled sliding puzzle configuration using DFS, BFS, and A*, and compares stats."
          backgroundColor="#45cb85"
          textColor="#FFFFFF"
        />
        <ProjectSection 
          image={GpaAalysis} 
          altText="Davis GPA Analysis Project" 
          href="https://github.com/mihikakrishna/UC-Davis-GPA-Analysis-Tool"
          description="A Python script for scraping and extracting UC Davis GPA data."
          backgroundColor="#f0abff"
          textColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
