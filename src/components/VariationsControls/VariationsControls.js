import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../VariationsControls/VariationsControls.css';
import { getHarmonies, getInverses } from '../../utils/colorUtils';

const VariationsControls = (color) => {
  const [harmonyQuantity, setHarmonyQuantity] = useState('2');
  const [inverseQuantity, setInverseQuantity] = useState('0');
  const [lighterQuantity, setLighterQuantity] = useState('0');
  const [darkerQuantity, setDarkerQuantity] = useState('0');

  useEffect(() => {
    const hslHarmonies = getHarmonies(color.hsl, harmonyQuantity);
    const hslInverses = getInverses(color.hsl, hslHarmonies, inverseQuantity);
  });

  return (
    <>
      <section className={styles.ColorMatches}>
      </section>
      <div className={styles.VariationsControls}>
        <label htmlFor="harmonyQuantity">Harmonies</label><input type="number" id="harmonyQuantity" value={harmonyQuantity} onChange={({ target }) => setHarmonyQuantity(target.value)} />
        <label htmlFor="inverseQuantity">Inverses</label><input type="number" id="inverseQuantity" value={inverseQuantity} onChange={({ target }) => setInverseQuantity(target.value)} />
        <label htmlFor="lighterQuantity">Lighter</label><input type="number" id="lighterQuantity" value={lighterQuantity} onChange={({ target }) => setLighterQuantity(target.value)} />
        <label htmlFor="darkerQuantity">Darker</label><input type="number" id="darkerQuantity" value={darkerQuantity} onChange={({ target }) => setDarkerQuantity(target.value)} />
      </div >
    </>
  );
};

export default VariationsControls;
