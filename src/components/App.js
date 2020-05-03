import React from 'react';
import Header from './Header/Header';
import VariationsControls from './VariationsControls/VariationsControls';
import ColorPicker from '@mapbox/react-colorpickr';
import LivePalette from './LivePalette/LivePalette';
import ScratchPalette from './ScratchPalette/ScratchPalette';
import Footer from './Footer/Footer';
import './colorpickr.css';


class App extends React.PureComponent {
  onChange = color => {
    console.log(color);
  };
  render() {
    return (
      <>
        <Header />
        <ColorPicker onChange={this.onChange} />
        <VariationsControls />
        <LivePalette />
        <ScratchPalette />
        <Footer />
      </>
    )
  }
}

export default App;
