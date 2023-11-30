import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

const FeatureList = [
  {
    title: '사용자에게 관심이 많은',
    svg: {
      light: '/img/doogie-light.svg',
      dark: '/img/doogie-dark.svg',
    },
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
  {
    title: '코드의 품질을 중요시하는',
    svg: {
      light: '/img/coffee-light.svg',
      dark: '/img/coffee-dark.svg',
    },
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
  {
    title: '꾸준한 성장을 즐기는',
    svg: {
      light: '/img/dancing-light.svg',
      dark: '/img/dancing-dark.svg',
    },
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
  {
    title: '동료를 소중히하는',
    svg: {
      light: '/img/loving-light.svg',
      dark: '/img/loving-dark.svg',
    },
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
  {
    title: '지식 나눔을 좋아하는',
    svg: {
      light: '/img/messy-light.svg',
      dark: '/img/messy-dark.svg',
    },
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
  {
    title: '디자인 감각을 갖춘',
    svg: {
      light: '/img/plant-light.svg',
      dark: '/img/plant-dark.svg',
    },
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
];

const Feature = ({ svg, title, description }) => {
  return (
    <div className="col col--4">
      <div className="text--center">
        <ThemedImage
          className={styles.featureSvg}
          alt={`${title} 설명 이미지`}
          sources={{
            light: useBaseUrl(svg.light),
            dark: useBaseUrl(svg.dark),
          }}
        />
      </div>
      <div className={clsx('text--center', styles.textContainer)}>
        <h3>{title}</h3>
        <p>{description}</p>
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
