import React, { useEffect, useState } from 'react';
import VariationsControls from '../components/VariationsControls/VariationsControls';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


import {
  getBaseAndHarmonies, getAnalogousColors, getOppositeDegree,
  getInverses, getBaseHarmoniesInverseAndAnalogousColorList,
  getLighters, getDarkers, getDesaturateds
} from '../utils/colorUtils';
import {
  hslToRgb, hslToHex, hslToString, rgbToString
} from '../utils/colorConverters';
import {
  getPostcssValuesVariables, getCssClasses
} from '../utils/paletteExporters';

import useDarkMode from 'use-dark-mode';
import './App.css';
export default function App() {
  const [color, setColor] = useState({
    h: 0,
    s: 1,
    l: .5,
    a: 1,
  });
  const [harmonyQuantity, setHarmonyQuantity] = useState(0);
  const [inverseQuantity, setInverseQuantity] = useState(0);
  const [inverseMax, setInverseMax] = useState(1);
  const [analogousQuantity, setAnalogousQuantity] = useState(0);
  const [lighterQuantity, setLighterQuantity] = useState(0);
  const [darkerQuantity, setDarkerQuantity] = useState(0);
  const [desaturatedQuantity, setDesaturatedQuantity] = useState(0);
  const [swatchToggled, setSwatchToggled] = useState(false);
  const [postcssExportText, setPostcssExportText] = useState('');
  const [cssExportText, setCssExportText] = useState('');
  const [cssExportToggled, setCssExportToggled] = useState(true);
  const [postcssExportToggled, setPostcssExportToggled] = useState(true);
  const [exportHexToggled, setExportHexToggled] = useState(true);
  const [exportRgbToggled, setExportRgbToggled] = useState(false);
  const [exportHslToggled, setExportHslToggled] = useState(false);
  const [swatchSize, setSwatchSize] = useState(5);
  const handleShowColorsClick = () => setSwatchToggled((toggled) => !toggled);
  const handleSwatchClick = () => setSwatchToggled((toggled) => !toggled);
  const handleExportHexClick = () => setExportHexToggled((toggled) => !toggled);
  const handleExportRgbClick = () => setExportRgbToggled((toggled) => !toggled);
  const handleExportHslClick = () => setExportHslToggled((toggled) => !toggled);
  const handleCssExportClick = () => setCssExportToggled((toggled) => !toggled);
  const handlePostcssExportClick = () => setPostcssExportToggled((toggled) => !toggled);
  const darkMode = useDarkMode(false);

  return (
    <>
      <Header color={color} setColor={setColor} />
      <VariationsControls color={color}
        harmonyQuantity={harmonyQuantity}
        inverseQuantity={inverseQuantity}
        inverseMax={inverseMax}
        analogousQuantity={analogousQuantity}
        lighterQuantity={lighterQuantity}
        darkerQuantity={darkerQuantity}
        desaturatedQuantity={desaturatedQuantity}
        swatchToggled={swatchToggled}
        postcssExportText={postcssExportText}
        postcssExportToggled={postcssExportToggled}
        cssExportText={cssExportText}
        cssExportToggled={cssExportToggled}
        exportHexToggled={exportHexToggled}
        exportRgbToggled={exportRgbToggled}
        exportHslToggled={exportHslToggled}
        swatchSize={swatchSize}
        darkMode={darkMode}
        setHarmonyQuantity={setHarmonyQuantity}
        setInverseQuantity={setInverseQuantity}
        setInverseMax={setInverseMax}
        setPostcssExportText={setPostcssExportText}
        setCssExportText={setCssExportText}
        setColor={setColor}
        setAnalogousQuantity={setAnalogousQuantity}
      />
      <Footer color={color} />
    </>
  );
}
