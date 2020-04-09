import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'components/Container';
import ContainerInner from 'components/ContainerInner';
import Splash from 'components/Splash';
import './Footer.scss';

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <footer className="Footer">
      <Container>
        <div className="Footer__inner">
          <div className="Footer__copyright">
            &copy; {new Date().getFullYear()} {site.siteMetadata.title}
          </div>
          <Splash />
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
