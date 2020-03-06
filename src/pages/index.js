import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Container from 'components/Container';
import ContainerInner from 'components/ContainerInner';

import './index.scss';

const IndexPage = pageQuery => {
  const {
    realities,
    worthFightingFor,
    follow,
    heartless,
    monsterInTheMirror,
  } = pageQuery.data;
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <ContainerInner>
          <div className="albums">
            <div className="album">
              <Link to="/music/monster-in-the-mirror">
                <Img
                  fluid={monsterInTheMirror.childImageSharp.fluid}
                  alt="Stream - Heartless - Out Now"
                />
              </Link>
            </div>
            <div className="album">
              <Link to="/music/heartless">
                <Img
                  fluid={heartless.childImageSharp.fluid}
                  alt="Stream - Heartless - Out Now"
                />
              </Link>
            </div>
            <div className="album">
              <Link to="/music/follow">
                <Img
                  fluid={follow.childImageSharp.fluid}
                  alt="Stream - Follow"
                />
              </Link>
            </div>
            <div className="album">
              <Link to="/music/worth-fighting-for">
                <Img
                  fluid={worthFightingFor.childImageSharp.fluid}
                  alt="Stream - Worth Fighting For"
                />
              </Link>
            </div>
            <div className="album">
              <Link to="/music/realities">
                <Img
                  fluid={realities.childImageSharp.fluid}
                  alt="Stream - Realities"
                />
              </Link>
            </div>
            <div className="album"></div>
          </div>
        </ContainerInner>
      </Container>
    </Layout>
  );
};

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 800) {
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
    follow: file(relativePath: { eq: "images/follow-cover.jpg" }) {
      ...squareImage
    }
    heartless: file(relativePath: { eq: "images/heartless-cover.jpg" }) {
      ...squareImage
    }
    monsterInTheMirror: file(
      relativePath: { eq: "images/monster-in-the-mirror.jpg" }
    ) {
      ...squareImage
    }
  }
`;

export default IndexPage;
