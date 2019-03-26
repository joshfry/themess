import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import logo from '../images/the-mess-logo.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      style={{
        opacity: `0`,
        position: `fixed`,
        top: `0`,
        left: `0`,
        height: `0`,
        margin: `0`,
      }}
    >
      The Mess
    </h1>
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        padding: `5vw`,
        height: `90vh`,
      }}
    >
      <div
        style={{
          width: `100%`,
          maxWidth: `600px`,
          margin: `0 auto`,
        }}
      >
        <img src={logo} alt="" />
      </div>
      <h2
        style={{
          fontSize: `40px`,
        }}
      >
        Coming Soon
      </h2>
    </div>
  </Layout>
);

export default IndexPage;
