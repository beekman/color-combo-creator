import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../VariationsControls/VariationsControls.css';



const VariationsControls = () => {
  const [harmonies, setHarmonies] = useState('2');
  const [inverses, setInverses] = useState('0');
  const [lighters, setLighters] = useState('0');
  const [darkers, setDarkers] = useState('0');

  return (
    <>
      <div className={styles.ColorMatches}>
        <LivePalette harmonies={harmonies} inverses={inverses} lighters={lighters} darkers={darkers} />
      </div>
      <div className={styles.VariationsControls}>
        <label htmlFor="harmonies">Harmonies</label><input type="number" id="harmonies" value={harmonies} onChange={({ target }) => setHarmonies(target.value)} />
        <label htmlFor="inverse">Inverses</label><input type="number" id="inverses" value={inverses} onChange={({ target }) => setInverses(target.value)} />
        <label htmlFor="lighter">Lighter</label><input type="number" id="lighter" value={lighters} onChange={({ target }) => setLighters(target.value)} />
        <label htmlFor="darker">Darker</label><input type="number" id="darker" value={darkers} onChange={({ target }) => setDarkers(target.value)} />
      </div >
    </>
  );
};

VariationsControls.propTypes = {};

export default VariationsControls;
