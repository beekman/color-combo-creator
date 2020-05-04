import React from 'react';
import Header from './Header/Header';
import VariationsControls from './VariationsControls/VariationsControls';
import ColorPicker from '@mapbox/react-colorpickr';
import { SketchPicker } from 'react-color';
import LivePalette from './LivePalette/LivePalette';
import ScratchPalette from './ScratchPalette/ScratchPalette';
import Footer from './Footer/Footer';


class App extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <SketchPicker />
        <VariationsControls />
        <LivePalette />
        <ScratchPalette />
        <Footer />
      </>
    );
  }
}

export default App;
