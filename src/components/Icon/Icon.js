import React from 'react';
import PropTypes from 'prop-types';
import icons from './icons';

const Icons = props => {
  const { name } = props;
  const Icon = icons[name] ? icons[name] : icons.Close;
  return <Icon {...props} />;
};

Icons.propTypes = {
  name: PropTypes.string,
};

export default Icons;
