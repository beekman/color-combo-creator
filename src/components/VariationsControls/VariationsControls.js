import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './VariationsControls.css';
import { getHarmonies, getInverses, getBaseHarmoniesAndInversesColorList, getLighters, getDarkers } from '../../utils/colorUtils';

const VariationsControls = (color) => {
  const [harmonyQuantity, setHarmonyQuantity] = useState('2');
  const [inverseQuantity, setInverseQuantity] = useState('0');
  const [lighterQuantity, setLighterQuantity] = useState('1');
  const [darkerQuantity, setDarkerQuantity] = useState('1');



  useEffect(() => {
    const hslHarmonies = getHarmonies(color.hsl, harmonyQuantity);
    makeColorSwatches(hslHarmonies);

    const hslInverses = getInverses(color.hsl, hslHarmonies, inverseQuantity);
    makeColorSwatches(hslInverses);

    baseHarmoniesAndInversesColorList = getBaseHarmoniesAndInversesColorList(color.hsl, hslHarmonies, hslInverses);


    hslLighters = getLighters(baseHarmoniesAndInversesColorList, lighterQuantity);
    console.log('Lighter colors:');
    console.log(hslLighters);


    baseHarmoniesAndInversesColorList = getBaseHarmoniesAndInversesColorList(color.hsl, hslHarmonies, hslInverses);
    hslDarkers = getDarkers(baseHarmoniesAndInversesColorList, darkerQuantity);
    makeColorSwatches(hslDarkers);
  });

  let hslHarmonies = getHarmonies(color.hsl, harmonyQuantity);
  let hslInverses = getInverses(color.hsl, hslHarmonies, inverseQuantity);
  let baseHarmoniesAndInversesColorList = getBaseHarmoniesAndInversesColorList(color.hsl, hslHarmonies, hslInverses);
  let hslLighters = getLighters(baseHarmoniesAndInversesColorList, lighterQuantity);
  let hslDarkers = getDarkers(baseHarmoniesAndInversesColorList, darkerQuantity);

  const makeColorSwatches = (colorSet) => {
    if(colorSet.length) {
      return colorSet.map(color => {
        console.log(color);
        return (
          <div key={color.h} style={{ background: `hsl(${color.h}, ${color.s * 100}%, ${color.l * 100}%)` }} className={styles.Swatch}>
            <div className={styles.details}>
              <p>
                h:{color.h}<br />
                s:{color.s}<br />
                l:{color.l}
              </p>
            </div>

          </div >
        );
      });
    }
  };
  const harmonySwatches = makeColorSwatches(hslHarmonies);
  const inverseSwatches = makeColorSwatches(hslInverses);
  const lighterSwatches = makeColorSwatches(hslLighters);
  const darkerSwatches = makeColorSwatches(hslDarkers);

  return (
    <>

      <div className={styles.VariationsControls}>
        <label htmlFor="harmonyQuantity">Harmonies</label><input type="number" id="harmonyQuantity" value={harmonyQuantity} onChange={({ target }) => setHarmonyQuantity(target.value)} />
        <label htmlFor="inverseQuantity">Inverses</label><input type="number" id="inverseQuantity" value={inverseQuantity} onChange={({ target }) => setInverseQuantity(target.value)} />
        <label htmlFor="lighterQuantity">Lighter</label><input type="number" id="lighterQuantity" value={lighterQuantity} onChange={({ target }) => setLighterQuantity(target.value)} />
        <label htmlFor="darkerQuantity">Darker</label><input type="number" id="darkerQuantity" value={darkerQuantity} onChange={({ target }) => setDarkerQuantity(target.value)} />
      </div >
      <section className={styles.ColorMatches}>
        {harmonySwatches}
        {inverseSwatches}
        {lighterSwatches}
        {darkerSwatches}
      </section>
    </>
  );
};

export default VariationsControls;
