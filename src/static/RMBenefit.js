import React from 'react';
import './RMStaticPane.css'
import '../containers/HomePage/RMHome.css'
import { getContent } from './content/RMBenefit'
import Parser from 'html-react-parser';
export function RMBenefit() {
    let cont = getContent();
    return (
        <div className="RMStaticPage">
            <label className="RMStaticHeader">RMBenefit</label>
            <div className="RMStaticTextArea">{Parser(cont)}</div>
        </div>
    )
}

export default RMBenefit;