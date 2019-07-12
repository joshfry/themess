import React from 'react';

import './ContainerInner.scss';

const ContainerInner = props => {
  const { children, narrow, superNarrow } = props;
  return (
    <div
      className={`ContainerInner${narrow ? ' ContainerInner--narrow' : ''}${
        superNarrow ? ' ContainerInner--super-narrow' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default ContainerInner;
