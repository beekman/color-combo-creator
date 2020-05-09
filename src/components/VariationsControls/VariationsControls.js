import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LivePalette from '../LivePalette/LivePalette';
import styles from '../VariationsControls/VariationsControls.css';

const VariationsControls = (color) => {
  const [harmonies, setHarmonies] = useState('2');
  const [inverses, setInverses] = useState('0');
  const [lighters, setLighters] = useState('0');
  const [darkers, setDarkers] = useState('0');


  useEffect(() => {
    console.log(color.color);
    console.log(harmonies);
  });
  console.log(color.color);


  return (
    <>
      <section className={styles.ColorMatches}>
      </section>
      <div className={styles.VariationsControls}>
        <label htmlFor="harmonies">Harmonies</label><input type="number" id="harmonies" value={harmonies} onChange={({ target }) => setHarmonies(target.value)} />
        <label htmlFor="inverse">Inverses</label><input type="number" id="inverses" value={inverses} onChange={({ target }) => setInverses(target.value)} />
        <label htmlFor="lighter">Lighter</label><input type="number" id="lighter" value={lighters} onChange={({ target }) => setLighters(target.value)} />
        <label htmlFor="darker">Darker</label><input type="number" id="darker" value={darkers} onChange={({ target }) => setDarkers(target.value)} />
      </div >
    </>
  );
};

LivePalette.propTypes = {
  harmonies: PropTypes.string.isRequired,
  inverses: PropTypes.string.isRequired,
  lighters: PropTypes.string.isRequired,
  darkers: PropTypes.string.isRequired,
};

export default VariationsControls;
