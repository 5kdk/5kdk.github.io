import React from 'react';
import Layout from '@theme/Layout';

const AboutMe = () => {
  return (
    <Layout title="AboutMe" description="Hello there">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <h1>👷 Blog under maintenance. Please bear with me!</h1>
      </div>
    </Layout>
  );
};

export default AboutMe;
