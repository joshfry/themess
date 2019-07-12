import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Container from 'components/Container';
import ContainerInner from 'components/ContainerInner';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <ContainerInner superNarrow>
        <div>
          <h2>Worth Fighting For - Out Now</h2>
          <div className="linkto">
            <StaticQuery
              query={graphql`
                query {
                  placeholderImage: file(
                    relativePath: { eq: "images/worth-fighting-for-cover.jpg" }
                  ) {
                    childImageSharp {
                      fluid(maxWidth: 500) {
                        base64
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                        originalImg
                        originalName
                        presentationWidth
                        presentationHeight
                      }
                    }
                  }
                }
              `}
              render={data => (
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              )}
            />
            <br />
            <Link to="/music/worth-fighting-for">
              Stream &ldquo;Worth&nbsp;Fighting&nbsp;For&rdquo;
            </Link>
          </div>
        </div>
        <div>
          <h2>Realities</h2>
          <div className="linkto">
            <StaticQuery
              query={graphql`
                query {
                  placeholderImage: file(
                    relativePath: { eq: "images/realities-cover.jpg" }
                  ) {
                    childImageSharp {
                      fluid(maxWidth: 500) {
                        base64
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                        originalImg
                        originalName
                        presentationWidth
                        presentationHeight
                      }
                    }
                  }
                }
              `}
              render={data => (
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              )}
            />
            <br />
            <Link to="/music/realities">Stream &ldquo;Realities&rdquo;</Link>
          </div>
        </div>
      </ContainerInner>
    </Container>
  </Layout>
);

export default IndexPage;
