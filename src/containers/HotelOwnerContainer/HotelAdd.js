import "./HotelOwnerContainer.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { createForm, getClasses} from '../App/RoommountUtil.js';

const content = [
  { id: "ah11", displayName: 'Name' },
  { id: "ah121", type: "check", displayName: "Location same as Name" },
  { id: "ah12", displayName: 'Location', },
  { id: "ah13", displayName: 'Street', },
  { id: "ah14", displayName: 'House', },
  { id: "ah15", displayName: 'City', },
  { id: "ah16", displayName: 'State', },
  { id: "ah17", displayName: 'Country', },
  { id: "ah18", displayName: 'Zip', },
  { id: "ah19", displayName: 'Continent', },
  { id: "ah20", displayName: 'Alternative address', },
  { id: "ah21", displayName: 'Email for reservations', },
  { id: "ah22", displayName: 'Remarks', },
  { id: "ah23", displayName: 'Chains', },
  { id: "ah24", displayName: 'Owner', },
  { id: "ah25", displayName: 'Owner registration number', },
  { id: "ah26", displayName: 'Total rooms', },
  { id: "ah27", displayName: 'Currency', },
];

const INDEX = "2";

class AddHotel extends React.Component {

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

ReactDOM.render(<AddHotel />, document.getElementById('root'));

export default AddHotel;
