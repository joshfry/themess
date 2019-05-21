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
      <Link to="/">
        <div style={{ width: `90px` }}>
          <VisuallyHidden>
            <h1>{siteTitle}</h1>
          </VisuallyHidden>
          <Logo color={COLOR.yellow} />
        </div>
      </Link>
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
