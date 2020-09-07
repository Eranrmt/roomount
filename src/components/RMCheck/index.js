import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import RMLabel from '../RMLabel';

function RMCheck({ label, clzz, defaultValue,id }) {
  return (
    <Container>
      <input id={id} type="checkbox" className={clzz} value={defaultValue}/>
      <RMLabel label={label} clzz="RMHOLabel"/>
    </Container>
  );
}

RMCheck.propTypes = { 
  label: PropTypes.string,
  clzz: PropTypes.string,
  defaultValue: PropTypes.string,
  id: PropTypes.string
};

export default RMCheck;
