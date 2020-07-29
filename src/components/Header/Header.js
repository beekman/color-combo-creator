import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';
import ColorPicker from '@radial-color-picker/react-color-picker';
import '@radial-color-picker/react-color-picker/dist/react-color-picker.min.css';
import { ChromePicker, HuePicker } from 'react-color';
import { IoMdColorPalette } from 'react-icons/io';

const Header = (color, setColor) => {
  const handleHexChange = e => {
    e.preventDefault();
    setColor(e.target.value);
  };

  const onInput = hue => {
    setColor(prev => {
      return {
        ...prev,
        hue,
      };
    });
  };
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <h1 style={styles.logo}> <IoMdColorPalette />Live Palette Populator</h1>


        <div id='baseColor' style={styles.color}><label htmlFor='baseColor' style={styles.label}>Set Base Color</label>
        </div>
      </header>
      <ColorPicker {...color} onChange={onInput} initiallyCollapsed={true} />
      <div style={styles.hueBox}>
        <HuePicker color={color} onChange={handleHexChange} /></div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
