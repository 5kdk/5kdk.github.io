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
        항상 사용자의 입장에서 생각하며, 웹 애플리케이션을 개발해요. 사용자가
        편리하고 쾌적한 경험을 할 수 있는 환경을 최우선으로 생각합니다.
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
        코드를 작성할 때 가독성과 유지보수성을 고려해요. 깔끔하고 효율적인
        코드를 작성하여 애플리케이션의 안정성을 높이고, 개발 과정을 원활하게
        만들기 위해 노력하고 있어요.
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
        끊임없이 변화하는 프론트엔드 생태계에서 살아남기 위해 지속적인 학습을
        통해 발전하는 것을 즐겨요. 최신 기술과 도구를 적극적으로 채택하여
        도입해보며 성장하는 것을 즐깁니다.
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
        프론트엔드 팀원들과의 협업을 중요시하며, 서로의 의견을 존중하며 솔직하게
        소통하려고 노력하고 있어요. 동료들과의 원활한 관계를 유지하며, 팀원들의
        성장을 도와주고 서로를 지원하고자해요.
      </>
    ),
  },
  {
    title: '배워서 남주는',
    svg: {
      light: '/img/messy-light.svg',
      dark: '/img/messy-dark.svg',
    },
    description: (
      <>
        알고 있는 지식이나 새로운 지식을 다른 이들과 나누고 공유하여 함께
        성장하고 발전하는 것은 매우 즐겁습니다! FE 아티클 스터디 등을 통해
        지식을 공유하며 함께 성장하고 있어요.
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
        디자인 전문 지식을 활용해 사용자 친화적이며 시각적으로 매력적으로 느낄
        수 있는 웹 애플리케이션을 구현해요. 기획 및 디자이너분들과 함께 고민하며
        최고의 UX,UI를 만들어 가요.
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
