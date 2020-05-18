import React from 'react';
import reactCSS from 'reactcss';
import VariationsControls from '../components/VariationsControls/VariationsControls';
import Footer from '../components/Footer/Footer';
import { PhotoshopPicker, HuePicker } from 'react-color';
import { IoMdColorPalette } from 'react-icons/io';

class PalettePicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
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
    this.setState({ color: color.hsl });
  };

  render() {

    const styles = reactCSS({
      'default': {
        wrapper: {
          display: 'block',
          background: `hsl(${this.state.color.h}, ${this.state.color.s * 100}%, ${this.state.color.l * 100}%)`,
        },
        header: {
          cursor: 'pointer',
        },
        logo: {
          textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
          color: '#FFFFFF',
          padding: '0.5rem 0 0 0.5rem',
          margin: '0',
          lineHeight: '1'
        },
        flex: {
          display: 'flex',
        },
        hueBox: {
          width: '100%',
          height: '17px',
          paddingTop: '3px',
        },
        label: {
          position: 'absolute',
          fontSize: '0.666rem',
          paddingTop: '.25rem',
          paddingLeft: '.5rem',
          textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
          color: '#FFFFFF',
          cursor: 'pointer',
        },
        color: {
          width: '6rem',
          height: '1.5rem',
          borderRadius: '2px',
          background: `hsl(${this.state.color.h}, ${this.state.color.s * 100}%, ${this.state.color.l * 100}%)`,
        },
        swatch: {
          padding: '0px',
          background: '#fff',
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

        <div style={styles.wrapper}>
          <header onClick={this.handleClick} style={styles.header}>

            <h1 style={styles.logo}> <IoMdColorPalette />Live Palette Populator</h1>
          </header>
          <div style={styles.flex}>
            <div style={styles.swatch} onClick={this.handleClick}>
              <label htmlFor='baseColor' style={styles.label}>Set Base Color</label>
              <div id='baseColor' style={styles.color}>
              </div>
              {this.state.displayColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={this.handleClose} />
                <PhotoshopPicker color={this.state.color} onChange={this.handleChange} />
              </div> : null}
            </div>
            <div style={styles.hueBox}>
              <HuePicker color={this.state.color} onChange={this.handleChange} height={'100%'} width={'100%'} /></div>
          </div>
        </div>
        <VariationsControls color={this.state.color} onChange={this.handleChange} />

        <Footer color={this.state.color} />
      </>
    );
  }
}

export default PalettePicker;
