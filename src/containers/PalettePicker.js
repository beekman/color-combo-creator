import React from 'react';
import reactCSS from 'reactcss';
import Header from '../components//Header/Header';
import VariationsControls from '../components/VariationsControls/VariationsControls';
import Footer from '../components/Footer/Footer';
import { PhotoshopPicker } from 'react-color';

class PalettePicker extends React.Component {
  state = {
    displayColorPicker: false,
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

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
    this.setState({ hsl: color.hsl });
  };

  render() {

    const styles = reactCSS({
      'default': {
        main: {
          display: 'flex',
        },
        inline: {
          display: i
        }
        label: {
          position: 'absolute',
          fontSize: '0.666rem',
          paddingTop: '.25rem',
          paddingLeft: '.25rem',
        },
        color: {
          width: '14rem',
          height: '2rem',
          borderRadius: '2px',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <>
        <Header />
        <div style={styles.inline}>
          <div style={styles.swatch} onClick={this.handleClick}>
            <label htmlFor='baseColor' style={styles.label}>Base</label>
            <div id='baseColor' style={styles.color} />
          </div>
          {this.state.displayColorPicker ? <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <PhotoshopPicker color={this.state.color} onChange={this.handleChange} />
          </div> : null}
        </div>
        <PhotoshopPicker color={this.state.color} onChange={this.handleChange} />
        <VariationsControls color={this.state.color} hsl={this.state.hsl} onChange={this.handleChange} />
        <Footer />
      </>
    );
  }
}

export default PalettePicker;
