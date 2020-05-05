import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>Developed by Ben Beekman, 2020.</p>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
