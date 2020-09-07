import React from 'react';
import { Text } from 'evergreen-ui';
import { Outer, Wrapper, FooterLink, BlogLink } from './styles';

export const Footer = () => (
  <Outer>
    <Wrapper>
      <FooterLink to="/privacy-policy"><Text>Privacy policy</Text></FooterLink>
      <FooterLink to="/terms-of-use"><Text>Terms of use</Text></FooterLink>
      <FooterLink to="/faq"><Text>FAQ</Text></FooterLink>
      <FooterLink to="/contact-us"><Text>Contact Us</Text></FooterLink>
      <BlogLink to="/blog"><Text id="a">Blog</Text></BlogLink>
     </Wrapper>
        
  </Outer>
);
