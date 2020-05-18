import React, { useEffect, useState } from 'react';
import styles from './VariationsControls.css';
import { getHarmonies, getOppositeDegree, getInverses, getBaseHarmoniesAndInversesColorList, getLighters, getDarkers, getDesaturateds } from '../../utils/colorUtils';
import { MdInvertColors, MdBrightnessLow, MdFormatColorReset } from 'react-icons/md';
import { IoIosColorFilter } from 'react-icons/io';
import { TiAdjustBrightness } from 'react-icons/ti';

const VariationsControls = (color) => {
  const [harmonyQuantity, setHarmonyQuantity] = useState('0');
  const [inverseQuantity, setInverseQuantity] = useState('0');
  const [lighterQuantity, setLighterQuantity] = useState('0');
  const [darkerQuantity, setDarkerQuantity] = useState('0');
  const [desaturatedQuantity, setDesaturatedQuantity] = useState('0');
  const [swatchToggled, setSwatchToggled] = useState(true);
  const handleSwatchClick = () => setSwatchToggled((toggled) => !toggled);

  useEffect(() => {
    const hslHarmonies = getHarmonies(color.color, harmonyQuantity);
    makeColorSwatches(hslHarmonies);

    const hslInverses = getInverses(color.color, hslHarmonies, inverseQuantity);
    makeColorSwatches(hslInverses);

    baseHarmoniesAndInversesColorList = getBaseHarmoniesAndInversesColorList(color.color, hslHarmonies, hslInverses);
    hslLighters = getLighters(baseHarmoniesAndInversesColorList, lighterQuantity);
    makeColorSwatches(hslLighters);
    hslDarkers = getDarkers(baseHarmoniesAndInversesColorList, darkerQuantity);
    makeColorSwatches(hslDarkers);
    hslDesaturateds = getDesaturateds(baseHarmoniesAndInversesColorList, desaturatedQuantity);
    makeColorSwatches(hslDesaturateds);
  });

  let hslHarmonies = getHarmonies(color.color, harmonyQuantity);
  let hslInverses = getInverses(color.color, hslHarmonies, inverseQuantity);
  let baseHarmoniesAndInversesColorList = getBaseHarmoniesAndInversesColorList(color.color, hslHarmonies, hslInverses);
  let hslLighters = getLighters(baseHarmoniesAndInversesColorList, lighterQuantity);
  let hslDarkers = getDarkers(baseHarmoniesAndInversesColorList, darkerQuantity);
  let hslDesaturateds = getDesaturateds(baseHarmoniesAndInversesColorList, desaturatedQuantity);


  const makeColorSwatches = (colorSet) => {
    if(colorSet.length) {
      return colorSet.map((color, i) => {
        return (
          <div key={i} style={{ background: `hsl(${color.h}, ${color.s * 100}%, ${color.l * 100}%)` }} className={styles.Swatch} onClick={handleSwatchClick}>
            <aside className={`${styles.details} ${swatchToggled && styles.hidden}`}>
              hsl({(color.h).toFixed(1)}, {(color.s * 100).toFixed(1)}%, {(color.l * 100).toFixed(1)}%)
            </aside>
          </div>
        );
      });
    }
  };

  let harmonySwatches = makeColorSwatches(hslHarmonies);
  let inverseSwatches = makeColorSwatches(hslInverses);
  let lighterSwatches = makeColorSwatches(hslLighters);
  let darkerSwatches = makeColorSwatches(hslDarkers);
  let desaturatedSwatches = makeColorSwatches(hslDesaturateds);

  return (
    <>
      <div className={styles.VariationsControls} style={{ background: `hsl(${(color.color.h)}, ${color.color.s * 100}%, ${color.color.l * 150}%)`, borderWidth: '2px', borderColor: `hsl(${(getOppositeDegree(color.color.h))}, ${color.color.s * 100}%, ${color.color.l * 100}%)`, borderStyle: 'solid' }}>
        <label htmlFor="harmonyQuantity" title="Complementary colors to generate, evenly spaced around the color wheel. Best results are found between 2 (for a triadic color scheme) and 5"><IoIosColorFilter />Harmonies</label><input type="number" id="harmonyQuantity" value={harmonyQuantity} min="0" max="9" onChange={({ target }) => setHarmonyQuantity(target.value)} />
        <label htmlFor="inverseQuantity" title="Colors opposite from the base & harmonic colors on the color wheel"><MdInvertColors />Inverses x</label><input type="number" id="inverseQuantity" min="0" max="1" value={inverseQuantity} onChange={({ target }) => setInverseQuantity(target.value)} />
        <label htmlFor="lighterQuantity" title="Lighter color sets to generate from the base, harmonies, and inverses"><MdBrightnessLow />Lighter x</label><input type="number" id="lighterQuantity" value={lighterQuantity} onChange={({ target }) => setLighterQuantity(target.value)} />
        <label htmlFor="darkerQuantity"><TiAdjustBrightness />Darker x</label><input type="number" id="darkerQuantity" min="0" max="9" value={darkerQuantity} onChange={({ target }) => setDarkerQuantity(target.value)} />
        <label htmlFor="desaturatedQuantity"><MdFormatColorReset />Desaturated x</label><input type="number" id="desaturatedQuantity" value={desaturatedQuantity} min="0" max="9" onChange={({ target }) => setDesaturatedQuantity(target.value)} />
      </div>

      <section className={styles.ColorMatches}>
        {harmonySwatches}
        {inverseSwatches}
        {lighterSwatches}
        {darkerSwatches}
        {desaturatedSwatches}
      </section>
    </>
  );
};

export default VariationsControls;
