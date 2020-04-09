import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from 'components/Container';
import Logo from 'components/Logo';
import VisuallyHidden from 'components/VisuallyHidden';
import COLOR from 'constants/color';

import './Header.scss';

const Header = ({ siteTitle }) => (
  <header className="Header">
    <Container>
      {/* <div className="Header__top-bar">
          <span>•&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>•&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>•&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>•</span>
        </div> */}
      <div className="Header__nav-bar">
        <Link to="/" className="Header__branding">
          <VisuallyHidden>
            <h1>{siteTitle}</h1>
          </VisuallyHidden>
          <Logo color={COLOR.yellow} />
        </Link>

        {/* <nav className="Header__nav">
            <span className="Header__nav__item">Link</span>
            <span className="Header__nav__item">Link</span>
            <span className="Header__nav__item">Link</span>
            <span className="Header__nav__item">Link</span>
          </nav> */}
      </div>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
