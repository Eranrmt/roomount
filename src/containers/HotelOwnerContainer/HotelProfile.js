import "./HotelOwnerContainer.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { createForm, getClasses} from '../App/RoommountUtil.js'; 

const content = [
  { id: "hpr1", displayName: 'Name' },
  { id: "hpr2", displayName: 'Location', },
  { id: "hpr3", displayName: 'Street', },
  { id: "hprl4", displayName: 'House', },
  { id: "hprl5", displayName: 'City', },
  { id: "hprl6", displayName: 'State', },
  { id: "hpr7", displayName: 'Country', },
  { id: "hprl8", displayName: 'Zip', },
  { id: "hprl9", displayName: 'Continent', },
  { id: "hpr10", displayName: 'Alternative address', },
  { id: "hpr11", displayName: 'Email for reservations', },
  { id: "hpr12", displayName: 'Remarks', },
  { id: "hpr13", displayName: 'Chain', },
  { id: "hpr14", displayName: 'Owner', },
  { id: "hpr15", displayName: 'Owner registration number', },
  { id: "hpr16", displayName: 'Total rooms', },
  { id: "hpr17", displayName: 'Currency', },
];

const INDEX = "5";

class ProfileHotel extends React.Component {

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


ReactDOM.render(<ProfileHotel />, document.getElementById('root'));

export default ProfileHotel;
