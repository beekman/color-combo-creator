import { React, useState, useEffect } from 'react';
import reactCSS from 'reactcss';
import Header from '../components//Header/Header';
import LivePalette from '../components/LivePalette/LivePalette';
import ScratchPalette from '../components/ScratchPalette/ScratchPalette';
import Footer from '../components/Footer/Footer';
import Picker from '../components/Picker/Picker';

const PalettePicker = () => {
  const [harmonies, setHarmonies] = useState(2);
  const [inverses, setInverses] = useState(0);
  const [lighters, setLighters] = useState(0);
  const [darkers, setDarkers] = useState(0);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [baseColor, setBaseColor] = useState({
    r: '241',
    g: '112',
    b: '19',
    a: '1',
  });

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };


  const styles = reactCSS({
    'default': {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return (
    <>
      <Header />
      <Picker color={this.state.color} />
      <label>Matches
        <LivePalette />
      </label>
      <div className={styles.VariationsControls}>
        <label htmlFor="harmonies">Harmonies</label><input type="number" id="harmonies" value={harmonies} onChange={({ target }) => setHarmonies(target.value)} />
        <label htmlFor="inverse">Inverses</label><input type="number" id="inverses" value={inverses} onChange={({ target }) => setInverses(target.value)} />
        <label htmlFor="lighter">Lighter</label><input type="number" id="lighter" value={lighters} onChange={({ target }) => setLighters(target.value)} />
        <label htmlFor="darker">Darker</label><input type="number" id="darker" value={darkers} onChange={({ target }) => setDarkers(target.value)} />
      </div >
      <Footer />
    </>
  );
};

export default PalettePicker;
