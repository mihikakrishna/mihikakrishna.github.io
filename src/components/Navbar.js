import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React  from 'react';

export default function Navbar() {
  return (
    <nav className="nav">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/experience">Experience</CustomLink>
      <CustomLink to="/projects">Projects</CustomLink>
    </nav>
  )
}

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  let pageClass = to.replace('/', ''); // Remove leading slash to get page name

  if (pageClass === '') {
    pageClass = 'home';
  }

  return (
    <div className={`nav-link ${isActive ? 'active' : ''} ${pageClass}`}>
      <Link to={to}>
        {children}
      </Link>
    </div>
  );
}



