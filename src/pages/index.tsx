import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlogHome from '@site/src/widgets/home/ui/blog-home';

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <BlogHome />
    </Layout>
  );
};

export default Home;
