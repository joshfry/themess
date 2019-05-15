import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from 'components/Logo';
import COLOR from 'constants/color';

import './Header.scss';

const Header = ({ siteTitle }) => (
  <header style={{ height: `100px`, display: `flex`, alignItems: `center` }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1em`,
      }}
    >
      <Link to="/">
        <div style={{ width: `100px` }}>
          <Logo color={COLOR.black} />
        </div>
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
