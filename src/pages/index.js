import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Space from '@site/src/components/Space';

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="디자이너 출신 프론트엔드 개발자 김동규의 개발 블로그 입니다.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
