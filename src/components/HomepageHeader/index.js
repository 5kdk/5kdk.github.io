import React from 'react';
import styles from './styles.module.css';

const HomepageHeader = () => {
  return (
    <header className={styles.heroBanner}>
      <div className="container text--left">
        <p className="margin-bottom--md">👋 Hello there.</p>
        <h1 className={styles.heroTitle}>
          직관적이고 효율적인
          <br />
          UX/UI를 지향하고,
          <br />
          동료와 명확한 의사소통이 될 수 있는
          <br />
          코드의 품질을 중요시하는
          <br />
          프론트엔드 개발자 <strong>김동규</strong> 입니다.
        </h1>
      </div>
    </header>
  );
};

export default HomepageHeader;
