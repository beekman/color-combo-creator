import React from 'react';
import PalettePicker from '../containers/PalettePicker';
import VariationsControls from './VariationsControls/VariationsControls';
import Picker from './Picker/Picker';
import LivePalette from './LivePalette/LivePalette';
import ScratchPalette from './ScratchPalette/ScratchPalette';
export default function App() {
  return (
    <>
      <Picker />
      <VariationsControls />
      <LivePalette />
      <ScratchPalette />
    </>
  );
}
