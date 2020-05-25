import React, { useEffect, useState } from 'react';
import styles from './PalettePopulator.css';
import VariationsControls from '../components/VariationsControls/VariationsControls';
import Footer from '../components/Footer/Footer';
import { PhotoshopPicker, HuePicker } from 'react-color';
import { IoMdColorPalette } from 'react-icons/io';
import { DarkModeToggle } from '../components/DarkModeToggle';
import {
  isGrayscale, isDark,
  getHarmonies, getOppositeDegree,
  getInverses, getBaseHarmoniesAndInversesColorList,
  getLighters, getDarkers, getDesaturateds
} from '../utils/colorUtils';
import { getPostcssValuesVariables, getCssClasses } from '../utils/styleExporters';
import { hslToRgb, hslToObject } from '../utils/colorConverters';
import { createPopper } from '@popperjs/core';

const PalettePickerFn = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({ h: 0, s: 1, l: .5, a: 1, matchType: 'base', step: '' });
  const [harmonyQuantity, setHarmonyQuantity] = useState(0);
  const [inverseQuantity, setInverseQuantity] = useState(0);
  const [inverseMax, setInverseMax] = useState(1);
  const [lighterQuantity, setLighterQuantity] = useState(0);
  const [darkerQuantity, setDarkerQuantity] = useState(0);
  const [desaturatedQuantity, setDesaturatedQuantity] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [swatchToggled, setSwatchToggled] = useState(true);
  const handleSwatchClick = () => setSwatchToggled((toggled) => !toggled);
  const [postcssExportText, setPostcssExportText] = useState('base: hsl(0, 100%, 50%);');
  const [cssExportText, setCssExportText] = useState('.base{\nhsl(0, 100%, 50%);\n}');

  const handleClick = () => {
    setDisplayColorPicker({ displayColorPicker: !displayColorPicker });
  };

  const handleClose = () => {
    setDisplayColorPicker({ displayColorPicker: false });
  };

  const handleChange = (color) => {
    setColor({ color: color.hsl });
  };

  useEffect(() => {});

  return (
    <>
      <div className={styles.wrapper} style={{ background: `hsl(${(color.h)}, ${color.s * 100}%, ${color.l * 100}%)` }}>
        <header onClick={handleClick} style={styles.header}>
          <h1 className={styles.logo}> <IoMdColorPalette />Live Palette Populator</h1>
        </header>
        <div className={styles.flex}>
          <div className={styles.swatch} onClick={handleClick}>
            <label htmlFor='baseColor' className={styles.label}>Set Base Color</label>
            <div id='baseColor' className={styles.color}>
            </div>
            {displayColorPicker ? <div style={styles.popover}>
              <div className={styles.cover} onClick={handleClose} />
              <PhotoshopPicker color={color} onChange={handleChange} />
            </div> : null}
          </div>
          <div className={styles.hueBox}><HuePicker color={color} onChange={handleChange} height={'100%'} width={'100%'} /></div>
        </div>
      </div>
      
      <VariationsControls color={color} harmonyQuantity={harmonyQuantity} inverseQuantity={inverseQuantity} inverseMax={inverseMax} lighterQuantity={lighterQuantity} darkerQuantity={darkerQuantity} desaturatedQuantity={desaturatedQuantity} postcssExportText={postcssExportText} cssExportText={cssExportText} swatchToggled={swatchToggled} onChange={handleChange} />
      <Footer color={color} />
    </>
  );
};

export default PalettePickerFn;
