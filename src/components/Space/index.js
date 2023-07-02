import React from 'react';
import styles from './styles.module.css';

const Space = () => {
  return (
    <div className={styles.space}>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
    </div>
  );
};

export default Space;
