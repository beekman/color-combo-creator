import React from 'react';
import styles from './Header.css';

const Header = (color) => {
  return (
    <header style={{ background: `hsl(${color.h}, ${color.s * 100}%, ${color.l * 100}%)` }}>
      <h1>Color Combo Calculator</h1>
    </header>
  );
};

export default Header;
