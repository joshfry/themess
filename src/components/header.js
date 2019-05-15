import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from 'components/Logo';

const Header = ({ siteTitle }) => (
  <header style={{ height: `100px`, display: `flex`, alignItems: `center` }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1em`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#eee`,
            textDecoration: `none`,
          }}
        >
          <div style={{ width: `100px` }}>
            <Logo />
          </div>
        </Link>
      </h1>
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
