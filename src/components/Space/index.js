import React from 'react';
import styles from './styles.module.css';

const Space = () => {
  return (
    <div className={styles.heroSpace}>
      <div className={styles.heroStars}></div>
      <div className={styles.heroStars}></div>
      <div className={styles.heroStars}></div>
      <div className={styles.heroStars}></div>
      <div className={styles.heroStars}></div>
      <div className={styles.heroStars}></div>
    </div>
  );
};

export default Space;
