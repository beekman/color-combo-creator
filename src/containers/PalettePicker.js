import React from 'react';
import '../components/styles.css';
import VariationsControls from '../components/VariationsControls/VariationsControls';
import Picker from '../components/Picker/Picker';
import LivePalette from '../components/LivePalette/LivePalette';
import ScratchPalette from '../components/ScratchPalette/ScratchPalette';
export default function PalettePicker() {
  return (
    <>
      <Picker />
      <VariationsControls />
      <LivePalette />
      <ScratchPalette />
    </>
  );
}
