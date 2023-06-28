import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container text--left">
        <p>Hello there.</p>
        <h1 className="hero__title">
          직관적이고 효율적인
          <br />
          UX/UI를 지향하고,
          <br />
          동료와 명확한 의사소통이 될 수 있는
          <br />
          코드 품질을 중요시하는
          <br />
          프론트엔드 개발자 김동규 입니다.
        </h1>
      </div>
    </header>
  );
};

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="5kdk의 개발 블로그"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
