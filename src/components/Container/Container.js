import React from 'react';

import './Container.scss';

const Container = props => {
  const { children } = props;
  return <div className="Container">{children}</div>;
};

export default Container;
