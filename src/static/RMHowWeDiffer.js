import React from 'react';
import './RMStaticPane.css'
import '../containers/HomePage/RMHome.css'
import { getContent } from './content/RMHowWeDiffer'
import Parser from 'html-react-parser';
export function RMHowWeDiffer() {
    let cont = getContent();
    return (
        <div className="RMStaticPage">
            <label className="RMStaticHeader">RMHowWeDiffer</label>
            <div className="RMStaticTextArea">{Parser(cont)}</div>
        </div>
    )
}

export default RMHowWeDiffer;