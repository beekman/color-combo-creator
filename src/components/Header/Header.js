import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>PalettePicker</h1>
    </header>
  );
};

Header.propTypes = {};

export default Header;
