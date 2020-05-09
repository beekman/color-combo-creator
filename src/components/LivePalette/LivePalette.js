import React from 'react';
import PropTypes from 'prop-types';
const Color = require('color');

const LivePalette = (color, harmonies, inverses, lighters, darkers) => {
  console.log(color.color);
  return (
    <>
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
