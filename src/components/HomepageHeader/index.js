import React from 'react';
import styles from './styles.module.css';

const HomepageHeader = () => {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <p className="text--left">🙌 Hello there!</p>
        <h1 className={styles.heroTitle}>
          안녕하세요, <code>&nbsp;______&nbsp;</code>
          <br />
          프론트엔드 개발자&nbsp;
          <strong>김동규</strong>입니다.
        </h1>
      </div>
    </header>
  );
};

export default HomepageHeader;
