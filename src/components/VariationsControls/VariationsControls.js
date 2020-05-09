import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LivePalette from '../LivePalette/LivePalette';
import styles from '../VariationsControls/VariationsControls.css';
var convert = require('color-convert');


const VariationsControls = (color) => {
  const [harmonies, setHarmonies] = useState('2');
  const [inverses, setInverses] = useState('0');
  const [lighters, setLighters] = useState('0');
  const [darkers, setDarkers] = useState('0');


  useEffect(() => {
    console.log(color.color);
    const base = color.color;
    let baseR = base.r;
    let baseG = base.g;
    let baseB = base.b;
    let colorString = base.r + ', ' + base.g + ', ' + base.b;

    console.log(colorString);
    let hsl = convert.rgb.hsl(colorString);
    console.log(hsl);
    console.log(harmonies + ' ' + inverses + ' ' + lighters + ' ' + darkers);
  });


  return (
    <>
      <section className={styles.ColorMatches}>
      </section>
      <div className={styles.VariationsControls}>
        <label htmlFor="harmonies">Harmonies</label><input type="number" id="harmonies" value={harmonies} onChange={({ target }) => setHarmonies(target.value)} />
        <label htmlFor="inverse">Inverses</label><input type="number" id="inverses" value={inverses} onChange={({ target }) => setInverses(target.value)} />
        <label htmlFor="lighter">Lighter</label><input type="number" id="lighter" value={lighters} onChange={({ target }) => setLighters(target.value)} />
        <label htmlFor="darker">Darker</label><input type="number" id="darker" value={darkers} onChange={({ target }) => setDarkers(target.value)} />
      </div >
    </>
  );
};

LivePalette.propTypes = {
  harmonies: PropTypes.string.isRequired,
  inverses: PropTypes.string.isRequired,
  lighters: PropTypes.string.isRequired,
  darkers: PropTypes.string.isRequired,
};

export default VariationsControls;
