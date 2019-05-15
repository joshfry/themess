import React from 'react';
import { Link } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>WHAT A MESS!</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Let&#39;s go back home</Link>
  </Layout>
);

export default NotFoundPage;
