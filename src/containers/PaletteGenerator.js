import React from 'react';
import Header from '../components//Header/Header';
import VariationsControls from '../components/VariationsControls/VariationsControls';
import Footer from '../components/Footer/Footer';
import { HuePicker } from 'react-color';

class PalettePicker extends React.Component {
  state = {
    color: {
      r: '255',
      g: '0',
      b: '0',
      a: '1',
    },
    hsl: {
      h: '0',
      s: '1',
      l: '.5',
      a: '1',
    },
  };



  handleChange = (color) => {
    this.setState({ color: color.rgb });
    this.setState({ hsl: color.hsl });
  };

  render() {
    return (
      <>
        <Header />
        <HuePicker color={this.state.color} onChange={this.handleChange} />
        <VariationsControls color={this.state.color} hsl={this.state.hsl} onChange={this.handleChange} />
        <Footer />
      </>
    );
  }
}

export default PalettePicker;
