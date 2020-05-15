import React, { useEffect, useState } from 'react';
import styles from './VariationsControls.css';
import { getHarmonies, getInverses, getBaseHarmoniesAndInversesColorList, getLighters, getDarkers } from '../../utils/colorUtils';
import { MdInvertColors, MdBrightnessLow } from 'react-icons/md';
import { IoIosColorFilter } from 'react-icons/io';
import { TiAdjustBrightness } from 'react-icons/ti';

const VariationsControls = (color) => {
  const [harmonyQuantity, setHarmonyQuantity] = useState('0');
  const [inverseQuantity, setInverseQuantity] = useState('0');
  const [lighterQuantity, setLighterQuantity] = useState('0');
  const [darkerQuantity, setDarkerQuantity] = useState('0');

  useEffect(() => {
    const hslHarmonies = getHarmonies(color.hsl, harmonyQuantity);
    makeColorSwatches(hslHarmonies);

    const hslInverses = getInverses(color.hsl, hslHarmonies, inverseQuantity);
    makeColorSwatches(hslInverses);

    baseHarmoniesAndInversesColorList = getBaseHarmoniesAndInversesColorList(color.hsl, hslHarmonies, hslInverses);
    hslLighters = getLighters(baseHarmoniesAndInversesColorList, lighterQuantity);
    makeColorSwatches(hslLighters);
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
      return colorSet.map((color, i) => {
        console.log(color);
        return (
          <div key={i} style={{ background: `hsl(${color.h}, ${color.s * 100}%, ${color.l * 100}%)` }} className={styles.Swatch}>
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
  const baseSwatch = makeColorSwatches(color.hsl);
  const harmonySwatches = makeColorSwatches(hslHarmonies);
  const inverseSwatches = makeColorSwatches(hslInverses);
  const lighterSwatches = makeColorSwatches(hslLighters);
  const darkerSwatches = makeColorSwatches(hslDarkers);

  return (
    <>
      <div className={styles.VariationsControls} style={{ background: `hsl(${color.h}, ${color.s * 100}%, ${color.l * 100}%)` }}>
        <label htmlFor="harmonyQuantity" title="Complementary colors to generate, evenly spaced around the color wheel. Best results are found between 2 (for a triadic color scheme) and 5"><IoIosColorFilter />Harmonies</label><input type="number" id="harmonyQuantity" value={harmonyQuantity} onChange={({ target }) => setHarmonyQuantity(target.value)} />
        <label htmlFor="inverseQuantity" title="Colors opposite from the base & harmonic colors on the color wheel"><MdInvertColors />Inverses</label><input type="number" id="inverseQuantity" value={inverseQuantity} onChange={({ target }) => setInverseQuantity(target.value)} />
        <label htmlFor="lighterQuantity" title="Lighter color sets to generate from the base, harmonies, and inverses"><MdBrightnessLow />Lighter x</label><input type="number" id="lighterQuantity" value={lighterQuantity} onChange={({ target }) => setLighterQuantity(target.value)} />
        <label htmlFor="darkerQuantity"><TiAdjustBrightness />Darker x</label><input type="number" id="darkerQuantity" value={darkerQuantity} onChange={({ target }) => setDarkerQuantity(target.value)} />
      </div>

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
