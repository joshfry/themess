import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Container from 'components/Container';
import ContainerInner from 'components/ContainerInner';

const IndexPage = pageQuery => {
  const { realities, worthFightingFor } = pageQuery.data;
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <ContainerInner superNarrow>
          <div>
            <h2>Worth Fighting For - Out Now</h2>
            <Img fluid={worthFightingFor.childImageSharp.fluid} />
            <br />
            <div className="linkto">
              <Link to="/music/worth-fighting-for">
                Stream &ldquo;Worth&nbsp;Fighting&nbsp;For&rdquo;
              </Link>
            </div>
          </div>
          <div>
            <h2>Realities</h2>
            <Img fluid={realities.childImageSharp.fluid} />
            <br />
            <div className="linkto">
              <Link to="/music/realities">Stream &ldquo;Realities&rdquo;</Link>
            </div>
          </div>
        </ContainerInner>
      </Container>
    </Layout>
  );
};

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 500, maxHeight: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    realities: file(relativePath: { eq: "images/realities-cover.jpg" }) {
      ...squareImage
    }
    worthFightingFor: file(
      relativePath: { eq: "images/worth-fighting-for-cover.jpg" }
    ) {
      ...squareImage
    }
  }
`;

export default IndexPage;
