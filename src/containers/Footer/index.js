import React from 'react';
import PropTypes from 'prop-types';
import RMLink from '../../components/RMLink';

function Footer() {
  return
  (<div className="RMLinkBar">
    <RMLink clzz="linkItem" label="Privacy Policy" xhref="policy" />
    <RMLink clzz="linkItem" label="Terms of use" xhref="terms" />
    <RMLink clzz="linkItem" label="FAQ" xhref="faq" />
    <RMLink clzz="linkItem" label="Contact us" xhref="contact" />
  </div>);
}

Footer.propTypes = {};

export default Footer; 
