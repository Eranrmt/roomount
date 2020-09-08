import "./HotelOwnerContainer.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { createForm, getClasses } from '../App/RoommountUtil.js';


const content = [{ key:"inv1", id: "invoice1", displayName: 'Year', type: "range", range: "2010-2040", direction: "desc"},
    { key:"inv2", id: "invoice2", displayName: 'Month', type: "range", range: "1-12" }];

const INDEX = "1";

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
    }
  }

    render() {
        let displayClass = getClasses(this.props.selected, INDEX);
        return (
            <div className={displayClass}>
                {createForm(content)}
                <button className="RMHOActionButton">Save</button>
            </div>
                        );
  }
}

ReactDOM.render(<Invoice />, document.getElementById('root'));

export default Invoice;

