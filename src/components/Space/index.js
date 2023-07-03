import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Space = () => {
  return (
    <div className={styles.space}>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
      <img src={useBaseUrl('/img/space-glow.svg')} className={styles.glow} />
    </div>
  );
};

export default Space;
