
import React from 'react';
import './RMStaticPane.css'
import '../containers/HomePage/RMHome.css'
import { getContent } from './content/Contact'

import Parser from 'html-react-parser';

export function RMContact() {
  let cont = getContent();
  return (
      <div className="RMStaticPage">
          <label className="RMStaticHeader">Contact</label>
          <div className="RMStaticTextArea">{Parser(cont)}</div>
      </div>)
 
}

export default RMContact;
