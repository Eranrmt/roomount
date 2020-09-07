import React from 'react';
import './RMStaticPane.css'
import '../containers/HomePage/RMHome.css'
import { getContent } from './content/FAQ'
import Parser from 'html-react-parser';
export function RMFAQ() {
  let cont = getContent();
  return (
      <div className="RMStaticPage">
          <label className="RMStaticHeader">FAQ</label>
          <div className="RMStaticTextArea">{Parser(cont)}</div>
      </div>
    )
}
 
export default RMFAQ;
