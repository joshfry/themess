import React from 'react';
import { Link } from 'gatsby';

import Layout from 'components/layout';
import SEO from 'components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Develop" />
    <h1>Hi from the Develop page</h1>
    <p>Welcome to the develop page.</p>
    <Link to="/about">About</Link>
  </Layout>
);

export default SecondPage;
