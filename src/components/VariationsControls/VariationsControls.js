import React from 'react';
import PropTypes from 'prop-types';
import styles from '../VariationsControls/VariationsControls.css';

const VariationsControls = () => {
  return (
    <div className={styles.VariationsControls}>
      <label htmlFor="harmonies">Harmonies</label><input type="number" id="harmonies" value="0" />
      <label htmlFor="inverse">Inverses</label><input type="number" id="inverses" value="0" />
      <label htmlFor="lighter">Lighter</label><input type="number" id="lighter" value="0" />
      <label htmlFor="darker">Darker</label><input type="number" id="darker" value="0" />
    </div >
  );
};
VariationsControls.propTypes = {};

export default VariationsControls;
