import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>&copy; Engineered by Ben Beekman, 2021.</p>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
