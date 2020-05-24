import React, { useEffect, useState } from 'react';

const PalettePickerFn = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
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
  const [color, setColor] = useState({ h: 0, s: 1, l: .5, a: 1, matchType: 'base', step: '' });

  const handleClick = () => {
    setDisplayColorPicker({ displayColorPicker: !this.state.displayColorPicker });
  };

  const handleClose = () => {
    setDisplayColorPicker({ displayColorPicker: false });
  };

  const handleChange = (color) => {
    setColor({ color: color.hsl });
  };

  return (
    <>

      <div style={styles.wrapper}>
        <header onClick={handleClick} style={styles.header}>

          <h1 style={styles.logo}> <IoMdColorPalette />Live Palette Populator</h1>
        </header>
        <div style={styles.flex}>
          <div style={styles.swatch} onClick={handleClick}>
            <label htmlFor='baseColor' style={styles.label}>Set Base Color</label>
            <div id='baseColor' style={styles.color}>
            </div>
            {this.state.displayColorPicker ? <div style={styles.popover}>
              <div style={styles.cover} onClick={handleClose} />
              <PhotoshopPicker color={color} onChange={handleChange} />
            </div> : null}
          </div>
          <div style={styles.hueBox}>
            <HuePicker color={color} onChange={handleChange} height={'100%'} width={'100%'} /></div>
        </div>
      </div>
      <VariationsControls color={color} onChange={handleChange} />

      <Footer color={color} />
    </>
  );
}
  ;
PalettePickerFn.propTypes = {};

export default PalettePickerFn;
