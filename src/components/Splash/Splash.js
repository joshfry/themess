import React from 'react';

import './Splash.scss';
import logo from 'images/the-mess-logo.svg';

const Splash = () => (
  <div className="Splash">
    <div className="Splash__inner">
      <h1 className="Splash__title">The Mess</h1>
      <img className="Splash__logo" src={logo} alt="The Mess" />
      <h2 className="Splash__description">Coming Soon</h2>
    </div>
  </div>
);

export default Splash;
