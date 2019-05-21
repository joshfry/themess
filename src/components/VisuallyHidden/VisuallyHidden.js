import React from 'react';

import './VisuallyHidden.scss';

const VisuallyHidden = props => {
  const { children } = props;
  return <div className="VisuallyHidden">{children}</div>;
};

export default VisuallyHidden;
