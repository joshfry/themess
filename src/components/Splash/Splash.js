import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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
        <OutboundLink href="https://www.facebook.com/official.the.mess/">
          <Icon name="Facebook" color="#f1c15d" />
        </OutboundLink>
      </div>
      <div className="Splash__social-links__item">
        <OutboundLink href="https://www.instagram.com/themessofficial">
          <Icon name="Instagram" color="#f1c15d" />
        </OutboundLink>
      </div>
      <div className="Splash__social-links__item">
        <OutboundLink href="https://shop.spreadshirt.com/the-mess">
          <Icon name="Shop" color="#f1c15d" />
        </OutboundLink>
      </div>
    </div>
  </div>
);

export default Splash;
