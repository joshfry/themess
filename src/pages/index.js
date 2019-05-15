import React from 'react';
import Helmet from 'react-helmet';

import SEO from 'components/SEO';
import Splash from 'components/Splash';

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <style>{`
        html {
          background-color: #151515;
        }
    `}</style>
    </Helmet>
    <SEO title="Home" />
    <Splash />
  </React.Fragment>
);

export default IndexPage;
