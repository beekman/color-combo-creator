import React, { useEffect, useState } from 'react';
import styles from './VariationsControls.css';
import { makeColorSwatches } from '../../utils/colorSwatches';
import {
  isGrayscale, isDark,
  getHarmonies, getOppositeDegree,
  getInverses, getBaseHarmoniesAndInversesColorList,
  getLighters, getDarkers, getDesaturateds
} from '../../utils/colorUtils';
import { getPostcssValuesVariables, getCssClasses } from '../../utils/styleExporters';
import { MdInvertColors, MdBrightnessLow, MdFormatColorReset } from 'react-icons/md';
import { IoIosColorFilter } from 'react-icons/io';
import { TiAdjustBrightness } from 'react-icons/ti';



const VariationsControls = (props) => {
  const [color, setColor] = useState(props.color);
  const [harmonyQuantity, setHarmonyQuantity] = useState(props.harmonyQuantity);
  const [inverseQuantity, setInverseQuantity] = useState(props.inverseQuantity);
  const [inverseMax, setInverseMax] = useState(props.inverseMax);
  const [lighterQuantity, setLighterQuantity] = useState(props.lighterQuantity);
  const [darkerQuantity, setDarkerQuantity] = useState(darkerQuantity);
  const [desaturatedQuantity, setDesaturatedQuantity] = useState(desaturatedQuantity);
  const [postcssExportText, setPostcssExportText] = useState(props.postcssExportText);
  const [cssExportText, setCssExportText] = useState(props.cssExportText);
  const [swatchToggled, setSwatchToggled] = useState(props.swatchToggled);
  const handleSwatchClick = () => setSwatchToggled((toggled) => !toggled);

  let hslHarmonies = getHarmonies(color, harmonyQuantity);
  let hslInverses = getInverses(color, hslHarmonies, inverseQuantity);
  let baseHarmoniesAndInversesColorList = getBaseHarmoniesAndInversesColorList(color, hslHarmonies, hslInverses);
  let hslLighters = getLighters(baseHarmoniesAndInversesColorList, lighterQuantity);
  let hslDarkers = getDarkers(baseHarmoniesAndInversesColorList, darkerQuantity);
  let hslDesaturateds = getDesaturateds(baseHarmoniesAndInversesColorList, desaturatedQuantity);

  let harmonySwatches = makeColorSwatches(hslHarmonies);
  let inverseSwatches = makeColorSwatches(hslInverses);
  let lighterSwatches = makeColorSwatches(hslLighters);
  let darkerSwatches = makeColorSwatches(hslDarkers);
  let desaturatedSwatches = makeColorSwatches(hslDesaturateds);



  useEffect(() => {
    setInverseMax(Number(harmonyQuantity) + 1);
    const hslHarmonies = getHarmonies(color, harmonyQuantity);
    const hslInverses = getInverses(color, hslHarmonies, inverseQuantity);
    baseHarmoniesAndInversesColorList = getBaseHarmoniesAndInversesColorList(color, hslHarmonies, hslInverses);
    hslLighters = getLighters(baseHarmoniesAndInversesColorList, lighterQuantity);
    hslDarkers = getDarkers(baseHarmoniesAndInversesColorList, darkerQuantity);
    hslDesaturateds = getDesaturateds(baseHarmoniesAndInversesColorList, desaturatedQuantity);
    makeColorSwatches(hslHarmonies);
    makeColorSwatches(hslInverses);
    makeColorSwatches(hslLighters);
    makeColorSwatches(hslDarkers);
    makeColorSwatches(hslDesaturateds);
    const postcssValuesVariables = (getPostcssValuesVariables(hslHarmonies)) + (getPostcssValuesVariables(hslInverses)) + (getPostcssValuesVariables(hslLighters)) + (getPostcssValuesVariables(hslDarkers)) + (getPostcssValuesVariables(hslDesaturateds));
    const cssClasses = (getCssClasses(color)) + (getCssClasses(hslHarmonies)) + (getCssClasses(hslInverses)) + (getCssClasses(hslLighters)) + (getCssClasses(hslDarkers)) + (getCssClasses(hslDesaturateds));
    setPostcssExportText(postcssValuesVariables);
    setCssExportText(cssClasses);
    console.log(cssClasses);
  });

  return (
    <>
      <div className={styles.VariationsControls} style={{ background: `hsl(${(color.h)}, ${color.s * 100}%, ${color.l * 150}%)`, borderWidth: '2px', borderColor: `hsl(${(getOppositeDegree(color.h))}, ${color.s * 100}%, ${color.l * 100}%)`, borderStyle: 'solid' }}>
        <label htmlFor="harmonyQuantity" title="Complementary colors, evenly spaced around the color wheel, relative to the base hue. 2 will give you a split complementary triad scheme, 3 will return a color from each quarter of the color wheel."><IoIosColorFilter /><span className={styles.textLabel}>Harmonies</span></label><input type="number" id="harmonyQuantity" value={harmonyQuantity} min="0" max="36" onChange={({ target }) => setHarmonyQuantity(target.value)} />
        <label htmlFor="inverseQuantity" title="Colors opposite from the base & harmonic colors on the color wheel. First color is inverted base, subsequent colors are inverted harmonies."><MdInvertColors /><span className={styles.textLabel}>Inverses</span></label><input type="number" id="inverseQuantity" min="0" max={inverseMax} value={inverseQuantity} onChange={({ target }) => setInverseQuantity(target.value)} />
        <label htmlFor="lighterQuantity" title="Lighter color sets to generate from the base, harmonies, and inverses, with each increment stepping closer to white."><MdBrightnessLow /><span className={styles.textLabel}>Lighter</span> &times;<input type="number" id="lighterQuantity" value={lighterQuantity} min="0" max="20" onChange={({ target }) => setLighterQuantity(target.value)} /></label>
        <label htmlFor="darkerQuantity" title="Darker color sets to generate from the base, harmonies, and inverses,with each increment stepping closer to black."> <TiAdjustBrightness /><span className={styles.textLabel}>Darker</span> &times;<input type="number" id="darkerQuantity" min="0" max="20" value={darkerQuantity} onChange={({ target }) => setDarkerQuantity(target.value)} /></label>
        <label htmlFor="desaturatedQuantity" title="Less saturated color sets to generate from the base, harmonies, and inverses, with each increment stepping closer to grayscale."><MdFormatColorReset /><span className={styles.textLabel}>Desaturated</span> &times;<input type="number" id="desaturatedQuantity" value={desaturatedQuantity} min="0" max="20" onChange={({ target }) => setDesaturatedQuantity(target.value)} /></label>
      </div>

      <section className={styles.ColorMatches}>
        {harmonySwatches}
        {inverseSwatches}
        {lighterSwatches}
        {darkerSwatches}
        {desaturatedSwatches}
      </section>
      <section className={styles.export}>
        <h2>Palette Export Options</h2>
        <h3><a href="https://github.com/css-modules/css-modules/blob/master/docs/values-variables.md" target="_blank">PostCSS Values Variables</a> color list</h3>
        <textarea className={styles.cssOutputText} value={postcssExportText} onChange={({ postcssValuesVariables }) => setPostcssExportText(postcssValuesVariables)} />
        <h3>CSS stylesheet</h3>
        <textarea className={styles.cssOutputText} value={cssExportText} onChange={({ cssClasses }) => setCssExportText(cssClasses)} />
      </section>
    </>
  );
};


export default VariationsControls;
