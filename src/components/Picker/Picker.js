import React from 'react';
import reactCSS from 'reactcss';
import { PhotoshopPicker } from 'react-color';
const Color = require('color');


class Picker extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
    hsv: {
      h: '340',
      s: '100',
      v: '.5',
      a: '1'
    }
  };




  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
    let color1 = Color.rgb((this.state.color.r), (this.state.color.g), (this.state.color.b));
    console.log(color1);
    console.log(this.state.color.g);
    console.log(this.state.color.b);
  };

  getHsv = (color) => {
    console.log(color.r);
  };
  render() {
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: '1px',
          background: '#000',
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
      <div style={styles.color}>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? <div style={styles.popover}>
          <div style={styles.cover} onClick={this.handleClose} />
          <PhotoshopPicker color={this.state.color} onChange={this.handleChange} />
        </div> : null}

      </div>
    );
  }
}

export default Picker;
