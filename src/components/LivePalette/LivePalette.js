import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const Color = require('color');

const LivePalette = (color, harmonies, inverses, lighters, darkers) => {
  let rgb = Color.rgb((color.color.r), (color.color.g), (color.color.b));
  console.log(rgb.string());
  let hsl = rgb.hsl();
  console.log(hsl.string());

  return (
    <>
      Palettte
    </>
  );
};

LivePalette.propTypes = {
  color: PropTypes.array.isRequired,
  harmonies: PropTypes.number.isRequired,
  inverses: PropTypes.number.isRequired,
  lighters: PropTypes.number.isRequired,
  darkers: PropTypes.number.isRequired,
};

export default LivePalette;
