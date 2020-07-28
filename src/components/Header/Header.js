import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';
import { ChromePicker, HuePicker } from 'react-color';
import { IoMdColorPalette } from 'react-icons/io';

const Header = (color) => {
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>

        <h1 style={styles.logo}> <IoMdColorPalette />Live Palette Populator</h1>
        <div id='baseColor' style={styles.color}><label htmlFor='baseColor' style={styles.label}>Set Base Color</label>
        </div>
      </header>
      <div style={styles.flex}>
        <div style={styles.swatch}>
          {displayColorPicker ? <div style={styles.popover}>

            <div style={styles.cover} onClick={this.handleClose} />
            <ChromePicker color={color} disableAlpha={true} onChange={this.handleChange} onClick={this.handleClick} />
          </div> : null}
        </div>
        <div style={styles.hueBox}>
          <HuePicker color={color} onChange={handleColorChange} height={'100%'} width={'100%'} /></div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
