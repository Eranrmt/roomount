import React from 'react';
import './RMStaticPane.css'
import '../containers/App/colors.css'
import '../containers/HomePage/RMHome.css'
import { getContent } from './content/Policy'
import Parser from 'html-react-parser';


export function RMPolicy() {
  let cont = getContent();
  return (
      <div className="RMStaticPage">
          <label className="RMStaticHeader">Privacy Policy</label>
          <div className="RMStaticTextArea">{Parser(cont)}</div>
      </div>
   )
}


export default RMPolicy;
