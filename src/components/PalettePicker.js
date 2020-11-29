import React from 'react';
import reactCSS from 'reactcss';
import VariationsControls from './VariationsControls/VariationsControls';
import Footer from './Footer/Footer';
import { ChromePicker, HuePicker } from 'react-color';
import { IoMdColorPalette } from 'react-icons/io';


class PalettePicker extends React.Component {
  state = {
    displayColorPicker: false,
    baseColor: {
      h: 0,
      s: 1,
      l: .5,
      a: 1,
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (baseColor) => {
    this.setState({ baseColor: baseColor.hsl });
  };

  render() {

    const styles = reactCSS({
      'default': {
        wrapper: {
          display: 'block',
          backgroundColor: `hsl(${this.state.baseColor.h}, ${this.state.baseColor.s * 100}%, ${this.state.baseColor.l * 100}%)`,
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
          fontSize: '1rem',
          paddingTop: '1.4rem',
          paddingLeft: '1rem',
          right: '2.25rem',
          textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
          color: '#FFFFFF',
          cursor: 'pointer',
        },
        color: {
          width: '6rem',
          height: '1.5rem',
          borderRadius: '2px',
          margin: '1rem auto 0',
          background: `hsl(${this.state.baseColor.h}, ${this.state.baseColor.s * 100}%, ${this.state.baseColor.l * 100}%)`,
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

      <div style={{ height: '100vh' }}>
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
                <ChromePicker color={this.state.baseColor} disableAlpha={true} onChange={this.handleChange} onClick={this.handleClick} />
              </div> : null}
            </div>
            <div style={styles.hueBox}>
              <HuePicker color={this.state.baseColor} onChange={this.handleChange} height={'100%'} width={'100%'} /></div>
          </div>
        </div>
        <VariationsControls baseColor={this.state.baseColor} onChange={this.handleChange} />
        <Footer baseColor={this.state.baseColor} />
      </div>
    );
  }
}

export default PalettePicker;
