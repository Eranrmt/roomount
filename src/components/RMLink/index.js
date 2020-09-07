import React from 'react';
import PropTypes from 'prop-types';
import {Container } from './styles';

function RMLink({ label, clzz, xhref }) {
  return (
    <Container>
      <a className={clzz} href={xhref}>{label}</a>
    </Container>
  );
}

RMLink.propTypes = { 
  label: PropTypes.string,
  clzz: PropTypes.string,
  xhref: PropTypes.string,
};

export default RMLink;
