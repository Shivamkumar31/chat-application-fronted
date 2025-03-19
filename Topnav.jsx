import React from 'react';
import  '../index.css';

const TopNav = ({ style = {} }) => {
  return (
    <nav className="top-nav" style={style}>
      <div className="logo">
        <span className="logo-kon">KON</span>
        <span className="logo-nect">NECT</span>
      </div>
    </nav>
  );
};

export default TopNav;
