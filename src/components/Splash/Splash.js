import React from 'react';

import Logo from 'components/Logo';
import Icon from 'components/Icon';

import './Splash.scss';

const Splash = () => (
  <div className="Splash">
    <h1 className="Splash__title">The Mess</h1>
    <div className="Splash__logo">
      <Logo />
    </div>
    <div className="Splash__social-links">
      <div className="Splash__social-links__item">
        <a href="https://www.facebook.com/official.the.mess/">
          <Icon name="Facebook" color="#f1c15d" />
        </a>
      </div>
      <div className="Splash__social-links__item">
        <a href="https://www.instagram.com/themessofficial">
          <Icon name="Instagram" color="#f1c15d" />
        </a>
      </div>
      <div className="Splash__social-links__item">
        <a href="https://shop.spreadshirt.com/the-mess">
          <Icon name="Shop" color="#f1c15d" />
        </a>
      </div>
    </div>
  </div>
);

export default Splash;
