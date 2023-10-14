import React from 'react';
import { SocialIcon } from 'react-social-icons';
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

          <div className="social-icons">
            <SocialIcon url="https://github.com/mihikakrishna" target="_blank" bgColor="#fff" fgColor="#8445f7" style={{ height: 35, width: 35, marginRight: '10px'}} />
            <SocialIcon url="https://linkedin.com/in/mihika-krishna/" target="_blank" bgColor="#fff" fgColor="#8445f7" style={{ height: 35, width: 35, marginRight: '10px' }} />
            <SocialIcon url="mailto:krishna.mihika@gmail.com" target="_blank" bgColor="#fff" fgColor="#8445f7" style={{ height: 35, width: 35, marginRight: '10px' }} />
          </div>       
      </div>
  );
}
