import React, { useState, useEffect } from 'react';

import { SketchPicker } from 'react-color';
import styles from './Picker.css';

const Picker = () => {
  const [color, setColor] = useState({ background: '#fff' });

  const handleChangeComplete = (color) => {
    setColor({ background: color.hex });
  };

  return (
    <SketchPicker
      color={color} onChangeComplete={handleChangeComplete}
    />
  );
};
export default Picker;
