import React from 'react';
import reactCSS from 'reactcss';
import VariationsControls from '../components/VariationsControls/VariationsControls';
import Footer from '../components/Footer/Footer';
import { ChromePicker, HuePicker } from 'react-color';
import { IoMdColorPalette } from 'react-icons/io';
import { DarkModeToggle } from '../components/DarkModeToggle';
import autoprefixer from 'autoprefixer';

class PalettePicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      h: 0,
      s: 1,
      l: .5,
      a: 1,
    },
    harmonyQuantity: 0,
    inverseQuantity: 0,
    inverseMax: 1,
    lighterQuantity: 0,
    darkerQuantity: 0,
    desaturatedQuantity: 0,
    swatchToggled: true,
    postcssExportText: '',
    cssExportText: '',
    cssExportToggled: true,
    exportHexToggled: true,
    exportHslToggled: false,
    exportRgbToggled: false,
    postcssExportToggled: true,
    darkMode: true
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
          backgroundColor: `hsl(${this.state.color.h}, ${this.state.color.s * 100}%, ${this.state.color.l * 100}%)`,
        },
        header: {
          cursor: 'pointer',
          display: 'flex'
        },
        logo: {
          textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
          color: '#FFFFFF',
          padding: '0.5rem 0 0 0.5rem',
          margin: '0',
          lineHeight: '2',
          fontFamily: 'Dosis, sans-serif',
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
          fontSize: '0.85rem',
          paddingTop: '.25rem',
          paddingLeft: '.5rem',
          paddingRight: '.5rem',
          textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
          color: '#FFFFFF',
          cursor: 'pointer',
        },
        color: {
          width: '6rem',
          height: '1.5rem',
          borderRadius: '2px',
          margin: '1rem auto 0',
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
          zIndex: '1',
        },
      },
    });


    return (
      <div style={{
        backgroundColor: '#dfdfdf',
        color: '#10171d',
        width: '100%',
        height: 'auto'
      }}>
        <div style={styles.wrapper}>
          <header onClick={this.handleClick} style={styles.header}>

            <h1 style={styles.logo}> <IoMdColorPalette />Live Palette Populator</h1>
            <div id='baseColor' style={styles.color}><label htmlFor='baseColor' style={styles.label}>Set Base Color</label>
            </div>
          </header>
          <div style={styles.flex}>
            <div style={styles.swatch} onClick={this.handleClick}>
              {this.state.displayColorPicker ? <div style={styles.popover}>

                <div style={styles.cover} onClick={this.handleClose} />
                <ChromePicker color={this.state.color} disableAlpha={true} onChange={this.handleChange} />
              </div> : null}
            </div>
            <div style={styles.hueBox}>
              <HuePicker color={this.state.color} onChange={this.handleChange} height={'100%'} width={'100%'} /></div>
          </div>
        </div>
        <VariationsControls color={this.state.color}
          harmonyQuantity={this.state.harmonyQuantity}
          inverseQuantity={this.state.inverseQuantity}
          inverseMax={this.state.inverseMax}
          lighterQuantity={this.state.lighterQuantity}
          darkerQuantity={this.state.darkerQuantity}
          desaturatedQuantity={this.state.desaturatedQuantity}
          swatchToggled={this.state.swatchToggled}
          postcssExportText={this.state.postcssExportText}
          cssExportText={this.state.cssExportText}
          cssExportToggled={this.state.cssExportToggled}
          postcssExportToggled={this.state.postcssExportToggled}
          exportHexToggled={this.state.exportHexToggled}
          exportHslToggled={this.state.exportHslToggled}
          exportRgbToggled={this.state.exportRgbToggled}
          darkMode={this.state.darkMode}
          onChange={this.handleChange} />

        <Footer color={this.state.color} />
      </div>
    );
  }
}

export default PalettePicker;
