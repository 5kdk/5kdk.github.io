import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '꼼꼼하게 제품을 개발하는',
    Svg: require('@site/static/img/clumsy.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: '꾸준한 성장을 즐기는',
    Svg: require('@site/static/img/jumping.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: '동료와 소통이 원활한',
    Svg: require('@site/static/img/zombieing.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: '꼼꼼하게 제품을 개발하는',
    Svg: require('@site/static/img/clumsy.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: '꾸준한 성장을 즐기는',
    Svg: require('@site/static/img/meditating.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: '동료와 소통이 원활한',
    Svg: require('@site/static/img/zombieing.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

const Feature = ({ Svg, title, description }) => {
  return (
    <div className="col col--4 padding-vert--md">
      <div className="card shadow--md">
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const HomepageFeatures = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
