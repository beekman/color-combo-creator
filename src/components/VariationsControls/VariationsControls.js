import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../VariationsControls/VariationsControls.css';
import { getHarmonies, getInverses, getBaseHarmoniesAndInversesColorList, getLighters, getDarkers } from '../../utils/colorUtils';

const VariationsControls = (color) => {
  const [harmonyQuantity, setHarmonyQuantity] = useState('2');
  const [inverseQuantity, setInverseQuantity] = useState('0');
  const [lighterQuantity, setLighterQuantity] = useState('1');
  const [darkerQuantity, setDarkerQuantity] = useState('1');



  useEffect(() => {
    const hslHarmonies = getHarmonies(color.hsl, harmonyQuantity);
    console.log('Harmonic colors:');
    console.log(hslHarmonies);

    const hslInverses = getInverses(color.hsl, hslHarmonies, inverseQuantity);
    console.log('Inverse colors:');
    console.log(hslInverses);

    let baseHarmoniesAndInversesColorList = getBaseHarmoniesAndInversesColorList(color.hsl, hslHarmonies, hslInverses);
    console.log('Base, Harmonies, and Inverses Color List:');
    console.log(baseHarmoniesAndInversesColorList);

    const hslLighters = getLighters(baseHarmoniesAndInversesColorList, lighterQuantity);
    console.log('Lighter colors:');
    console.log(hslLighters);



    const hslDarkers = getDarkers(baseHarmoniesAndInversesColorList, darkerQuantity);
    console.log('Darker colors:');
    console.log(hslDarkers);
  });

  const makeColorSwatches = (colorSet) => {
    if(colorSet.length) {
      return colorSet.map(color, i => {
        return (
          <div key={i} style={{ background: `linear-gradient(#cccccc, ${color})` }} className={styles.Swatch}>
            Color
          </div >
        );
      });
    }
  };


  return (
    <>
      <section className={styles.ColorMatches}>

      </section>
      <div className={styles.VariationsControls}>
        <label htmlFor="harmonyQuantity">Harmonies</label><input type="number" id="harmonyQuantity" value={harmonyQuantity} onChange={({ target }) => setHarmonyQuantity(target.value)} />
        <label htmlFor="inverseQuantity">Inverses</label><input type="number" id="inverseQuantity" value={inverseQuantity} onChange={({ target }) => setInverseQuantity(target.value)} />
        <label htmlFor="lighterQuantity">Lighter</label><input type="number" id="lighterQuantity" value={lighterQuantity} onChange={({ target }) => setLighterQuantity(target.value)} />
        <label htmlFor="darkerQuantity">Darker</label><input type="number" id="darkerQuantity" value={darkerQuantity} onChange={({ target }) => setDarkerQuantity(target.value)} />
      </div >
    </>
  );
};

export default VariationsControls;
