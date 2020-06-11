import React, { useEffect, useState } from 'react';
import styles from './VariationsControls.css';
import {
  getHarmonies, getOppositeDegree,
  getInverses, getBaseHarmoniesAndInversesColorList,
  getLighters, getDarkers, getDesaturateds
} from '../../utils/colorUtils';
import {
  hslToRgb, hslToHex
} from '../../utils/colorConverters';
import { MdInvertColors, MdBrightnessLow, MdFormatColorReset } from 'react-icons/md';
import { IoIosColorFilter } from 'react-icons/io';
import { TiAdjustBrightness } from 'react-icons/ti';
import { GiAbstract074 } from 'react-icons/gi';
import useDarkMode from 'use-dark-mode';
import Toggle from '../Toggle';
import DarkModeToggle from 'react-dark-mode-toggle';

const VariationsControls = (color) => {

  const [harmonyQuantity, setHarmonyQuantity] = useState(0);
  const [inverseQuantity, setInverseQuantity] = useState(0);
  const [inverseMax, setInverseMax] = useState(1);
  const [lighterQuantity, setLighterQuantity] = useState(0);
  const [darkerQuantity, setDarkerQuantity] = useState(0);
  const [desaturatedQuantity, setDesaturatedQuantity] = useState(0);
  const [analogousQuantity, setAnalogousQuantity] = useState(0);
  const [swatchToggled, setSwatchToggled] = useState(true);
  const handleShowColorsClick = () => setSwatchToggled((toggled) => !toggled);
  const handleSwatchClick = () => setSwatchToggled((toggled) => !toggled);
  const [postcssExportText, setPostcssExportText] = useState('');
  const [cssExportText, setCssExportText] = useState('');
  const [cssExportToggled, setCssExportToggled] = useState(true);
  const [postcssExportToggled, setPostcssExportToggled] = useState(true);
  const [exportHexToggled, setExportHexToggled] = useState(false);
  const handleExportHexClick = () => setExportHexToggled((toggled) => !toggled);
  const [exportHslToggled, setExportHslToggled] = useState(true);
  const handleExportHslClick = () => setExportHslToggled((toggled) => !toggled);
  const [exportRgbToggled, setExportRgbToggled] = useState(true);
  const handleExportRgbClick = () => setExportRgbToggled((toggled) => !toggled);
  const handleCssExportClick = () => setCssExportToggled((toggled) => !toggled);

  const handlePostcssExportClick = () => setPostcssExportToggled((toggled) => !toggled);
  const darkMode = useDarkMode(false);

  useEffect(() => {
    setInverseMax(Number(harmonyQuantity) + 1);
    const hslHarmonies = getHarmonies(color.color, harmonyQuantity);
    const hslInverses = getInverses(color.color, hslHarmonies, inverseQuantity);
    baseHarmoniesAndInversesColorList = getBaseHarmoniesAndInversesColorList(color.color, hslHarmonies, hslInverses);
    hslLighters = getLighters(baseHarmoniesAndInversesColorList, lighterQuantity);
    hslDarkers = getDarkers(baseHarmoniesAndInversesColorList, darkerQuantity);
    hslDesaturateds = getDesaturateds(baseHarmoniesAndInversesColorList, desaturatedQuantity);
    const postcssValuesVariables = ((getPostcssValuesVariables(hslHarmonies, exportHexToggled, exportHslToggled, exportRgbToggled))) + (((getPostcssValuesVariables(hslInverses, exportHexToggled, exportHslToggled, exportRgbToggled)))) + ((getPostcssValuesVariables(hslLighters, exportHexToggled, exportHslToggled, exportRgbToggled))) + ((getPostcssValuesVariables(hslDarkers, exportHexToggled, exportHslToggled, exportRgbToggled))) + ((getPostcssValuesVariables(hslDesaturateds, exportHexToggled, exportRgbToggled, exportHslToggled)));

    const cssClasses = (getCssClasses(color.color, exportHexToggled, exportRgbToggled, exportHslToggled)) + (getCssClasses(hslHarmonies, exportHexToggled, exportHslToggled, exportRgbToggled)) + (getCssClasses(hslInverses, exportHexToggled, exportHslToggled, exportRgbToggled)) + (getCssClasses(hslLighters, exportHexToggled, exportHslToggled, exportRgbToggled)) + (getCssClasses(hslDarkers, exportHexToggled, exportHslToggled, exportRgbToggled)) + (getCssClasses(hslDarkers, exportHexToggled, exportHslToggled, exportRgbToggled));

    makeColorSwatches(hslHarmonies);
    makeColorSwatches(hslInverses);
    makeColorSwatches(hslLighters);
    makeColorSwatches(hslDarkers);
    makeColorSwatches(hslDesaturateds);
    setPostcssExportText(postcssValuesVariables);
    setCssExportText(cssClasses);
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
        const key = (color.matchType + (Number(i) + 1));
        const rgb = hslToRgb(color.h, color.s, color.l);
        const hex = hslToHex(color.h, color.s, color.l);

        return (
          <div key={key} style={{ background: `hsl(${color.h}, ${color.s * 100}%, ${color.l * 100}%)` }} className={styles.Swatch} onClick={handleSwatchClick}>
            <aside className={`${styles.details} ${swatchToggled && styles.hidden}`}>
              <strong>{(color.matchType)}</strong>
              {exportHexToggled &&
                <p className={`${styles.hexValues}`}>{hex}</p>
              }
              {exportRgbToggled &&
                <p className={`${styles.rgbValues}`}>rgb({rgb[0]}, {rgb[1]}, {rgb[2]})</p>
              }
              {exportHslToggled &&
                <p className={`${styles.hslValues}`}>hsl({(color.h).toFixed(1)}, {(color.s * 100).toFixed(2)}%, {(color.l * 100).toFixed(2)}%)
                </p>
              }
            </aside>
          </div>
        );
      });
    }
  };


  const getPostcssValuesVariables = (colorSet, exportHexToggled, exportHslToggled, exportRgbToggled) => {
    let postCSSVariables = '';
    if(colorSet.length > 0) {
      colorSet.map((color) => {
        const key = (color.matchType);
        let colorString;
        if(exportHslToggled) {
          colorString = ('hsl(' + (color.h).toFixed(0) + ', ' + (color.s * 100).toFixed(2) + '%, ' + ((color.l * 100).toFixed(2)) + '%;');
        }
        if(exportRgbToggled) {
          const rgb = hslToRgb((color.h / 360.00), color.s, color.l);
          console.log(rgb);
          const r = rgb[0];
          const g = rgb[1];
          const b = rgb[2];
          colorString = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        }
        if(exportHexToggled) {
          colorString = hslToHex(color.h, color.s, color.l);
        }
        const line = `@value ${key}: ${colorString}\n`;
        postCSSVariables += line;
      });
    }
    return postCSSVariables;
  };

  const getCssClasses = (colorSet, exportHexToggled, exportHslToggled, exportRgbToggled) => {
    let styles = '';
    if(colorSet.length > 0) {
      colorSet.map((color) => {
        const key = color.matchType;
        let colorString = '';
        if(exportRgbToggled) {
          const rgb = hslToRgb((color.h / 360.00), color.s, color.l);
          const r = rgb[0];
          const g = rgb[1];
          const b = rgb[2];
          colorString = 'rgb(' + r + ', ' + g + ', ' + b + ');';
        }
        if(exportHslToggled) {
          colorString = ('hsl(' + (color.h).toFixed(0) + ', ' + (color.s * 100).toFixed(2) + '%, ' + ((color.l * 100).toFixed(2)) + '%;');
        }
        if(exportHexToggled) {
          colorString = hslToHex(color.h, color.s, color.l);
        }

        if(!exportHexToggled) { }
        let line = `.${key}-color {\ncolor: ${colorString} \n}\n`;
        line = line + `.${key}-bg {\nbackground-color: hsl(${(color.h).toFixed(0)}, ${(color.s * 100).toFixed(2)}%, ${(color.l * 100).toFixed(2)}%);\n}\n`;
        line = line + `.${key}-border {\nborder-color: hsl(${(color.h).toFixed(0)}, ${(color.s * 100).toFixed(2)}%, ${(color.l * 100).toFixed(2)}%);\n}\n`;
        styles += line;

      });
    }
    return styles;
  };

  let harmonySwatches = makeColorSwatches(hslHarmonies);
  let inverseSwatches = makeColorSwatches(hslInverses);
  let lighterSwatches = makeColorSwatches(hslLighters);
  let darkerSwatches = makeColorSwatches(hslDarkers);
  let desaturatedSwatches = makeColorSwatches(hslDesaturateds);

  return (
    <>
      <div className={styles.VariationsControls} style={{ background: `hsl(${(color.color.h)}, ${color.color.s * 100}%, ${color.color.l * 150}%)`, borderWidth: '2px', borderColor: `hsl(${(getOppositeDegree(color.color.h))}, ${color.color.s * 100}%, ${color.color.l * 100}%)`, borderStyle: 'solid' }}>
        <label htmlFor="harmonyQuantity" title="Complementary colors, evenly spaced around the color wheel, relative to the base hue. 2 will give you a split complementary triad scheme, 3 will return a color from each quarter of the color wheel."><IoIosColorFilter /><span className={styles.textLabel}>Harmonies</span></label><input type="number" id="harmonyQuantity" value={harmonyQuantity} min="0" max="36" onChange={({ target }) => setHarmonyQuantity(target.value)} />
        <label htmlFor="inverseQuantity" title="Colors opposite from the base & harmonic colors on the color wheel. First color is inverted base, subsequent colors are inverted harmonies."><MdInvertColors /><span className={styles.textLabel}>Inverses</span></label><input type="number" id="inverseQuantity" min="0" max={inverseMax} value={inverseQuantity} onChange={({ target }) => setInverseQuantity(target.value)} />
        <label htmlFor="lighterQuantity" title="Lighter color sets to generate from the base, harmonies, and inverses, with each increment stepping closer to white."><MdBrightnessLow /><span className={styles.textLabel}>Lighter</span> &times;<input type="number" id="lighterQuantity" value={lighterQuantity} min="0" max="20" onChange={({ target }) => setLighterQuantity(target.value)} /></label>
        <label htmlFor="darkerQuantity" title="Darker color sets to generate from the base, harmonies, and inverses,with each increment stepping closer to black."> <TiAdjustBrightness /><span className={styles.textLabel}>Darker</span> &times;<input type="number" id="darkerQuantity" min="0" max="20" value={darkerQuantity} onChange={({ target }) => setDarkerQuantity(target.value)} /></label>
        <label htmlFor="desaturatedQuantity" title="Less saturated color sets to generate from the base, harmonies, and inverses, with each increment stepping closer to grayscale."><MdFormatColorReset /><span className={styles.textLabel}>Desaturated</span> &times;<input type="number" id="desaturatedQuantity" value={desaturatedQuantity} min="0" max="20" onChange={({ target }) => setDesaturatedQuantity(target.value)} /></label>
      </div>
      <section className={styles.colorFormats}>
        <div className={`${styles.exportFormatToggle} ${(!swatchToggled) && styles.toggled}`} onClick={handleShowColorsClick}>View Colors As:</div>
        <div className={`${styles.exportFormatToggle} ${exportHexToggled && styles.toggled}`} onClick={handleExportHexClick}>Hex</div>
        <div className={`${styles.exportFormatToggle} ${exportRgbToggled && styles.toggled}`} onClick={handleExportRgbClick}>RGB</div>
        <div className={`${styles.exportFormatToggle} ${exportHslToggled && styles.toggled}`} onClick={handleExportHslClick}>HSL</div>
      </section>

      <section className={styles.ColorMatches}>
        {harmonySwatches}
        {inverseSwatches}
        {lighterSwatches}
        {darkerSwatches}
        {desaturatedSwatches}
      </section>

      <section className={styles.export}>
        <h2>Palette Export Options</h2>
        <h3 className={`${styles.postcssExportToggler} ${postcssExportToggled && styles.expandable}`} onClick={handlePostcssExportClick}>PostCSS Values Variables color list<a href="https://github.com/css-modules/css-modules/blob/master/docs/values-variables.md" target="_blank">*</a></h3>

        <textarea className={`${styles.postcssOutputText} ${postcssExportToggled && styles.hidden}`} style={{ color: `${(darkMode ? '#000000' : '#FFFFFF')}`, backgroundColor: `${(darkMode ? '#FFFFFF' : '#000000')}` }} value={postcssExportText} onChange={({ postcssValuesVariables }) => setPostcssExportText(postcssValuesVariables)} />
        <h3 className={`${styles.cssExportToggler} ${cssExportToggled && styles.expandable}`} onClick={handleCssExportClick}>CSS stylesheet</h3>
        <textarea className={`${styles.cssOutputText} ${cssExportToggled && styles.hidden}`} style={{ color: `${(darkMode ? '#FFFFFF' : '#000000')}`, backgroundColor: `${(darkMode ? '#000000' : '#FFFFFF')}` }} value={cssExportText} onChange={({ cssClasses }) => setCssExportText(cssClasses)} />
      </section>
    </>
  );
};

export default VariationsControls;
