import React from 'react';
import PropTypes from 'prop-types';

function RMLabel({ label, clzz, id}) {
  return (
    <span key={id} id={id} className={clzz} >{label}</span>
  );
}

RMLabel.propTypes = { 
  label: PropTypes.string,
  clzz: PropTypes.string,
  id: PropTypes.string,
};

export default RMLabel;
