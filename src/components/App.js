import React from 'react';
import Header from './Header/Header';
import VariationsControls from './VariationsControls/VariationsControls';
import Picker from './Picker/Picker';
import LivePalette from './LivePalette/LivePalette';
import ScratchPalette from './ScratchPalette/ScratchPalette';
import Footer from './Footer/Footer';
export default function App() {
  return (
    <>
      <Header />
      <Picker />
      <VariationsControls />
      <LivePalette />
      <ScratchPalette />
      <Footer />
    </>
  );
}
