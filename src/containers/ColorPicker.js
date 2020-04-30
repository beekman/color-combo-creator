import React from 'react';
import VariationsControls from '../components/VariationsControls/VariationsControls';
import Picker from '../components/Picker/Picker';
import Palette from '../components/Palette/Palette';
export default function ColorPicker() {
  return (
    <>
      <Picker />
      <Palette />
      <VariationsControls />
    </>
  );
}
