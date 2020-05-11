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
    console.log(color.hsl);
    const hsl = color.hsl;
    console.log(hsl);
    getHarmonies(color.hsl, harmonies);
    console.log(harmonies + ' ' + inverses + ' ' + lighters + ' ' + darkers);
  });

  const getHarmonies = (hsl, harmonies) => {
    harmonies = parseFloat(harmonies) + 1;
    console.log(harmonies);
    const degreeShift = 360 / harmonies;
    console.log(degreeShift);
  
    let current = hsl.h;
    let harmonicHues = [];
    console.log(hsl.h);
    console.log(current);
    console.log(degreeShift);
    while((current - degreeShift) > 0) {
      current = current - degreeShift;
      harmonicHues.push(current);
    }
    current = hsl.h;
    while((current + degreeShift) < 360) {
      current = current + degreeShift;
      harmonicHues.push(current);
    }
    console.log(harmonicHues);
    return harmonicHues;
  };

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

export default VariationsControls;
