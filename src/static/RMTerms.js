import React from 'react';
import './RMStaticPane.css';
import './RMStaticPane.css'
import '../containers/HomePage/RMHome.css'
import { getContent } from './content/Terms'
import Parser from 'html-react-parser';

export function RMTerms() {
    let cont = getContent(); 
  return (
      <div className="RMStaticPage">
          <label className="RMStaticHeader">Terms</label>
          <div className="RMStaticTextArea">{Parser(cont)}</div>
      </div>
  );
}

export default RMTerms;
