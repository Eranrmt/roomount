import "./HotelOwnerContainer.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { createForm, getClasses} from '../App/RoommountUtil.js';

const content = [
  { id: "hp11", displayName: 'Name' },
  { id: "hp12", displayName: 'Notice period of free of charge cancellation (in days)', },
  { id: "hp13", displayName: 'No breakfast is available', type:"check"},
  { id: "hp14", displayName: 'I want to have the option to offer "breakfast included" in room rate', type:"check"},
  { id: "hp15", displayName: 'Breakfast available at additional cost when not included', type: "check"},
  { id: "hp16", displayName: 'Breakfast additional cost', },
  { id: "hp17", displayName: 'Breakfast cost is', },
  { id: "hp18", displayName: 'Check-in time - from', },
  { id: "hp19", displayName: 'Check-in time - to', },
  { id: "hp21", displayName: 'Check-out time - from', },
  { id: "hp22", displayName: 'Check-out time - to', },
  { id: "hp23", displayName: 'Late cancellation charge', },
  { id: "hp24", displayName: 'No show charge', },
  { id: "hp25", displayName: 'There is minimum stay', type:"check"},
  { id: "hp26", displayName: 'Minimum stay (number of nights)', },
  { id: "hp27", displayName: 'Extra beds are available', type:"check"},
  { id: "hp28", displayName: 'Cost of extra bed', },
  { id: "hp29", displayName: 'Maximum number of extra beds per room', },
  { id: "hp30", displayName: 'Costs available', type:"check" },
  { id: "hp31", displayName: 'Pets allowed', type:"check" },
  { id: "hp32", displayName: 'Additional info', },
  { id: "hp33", displayName: 'Services at additional cost', },
  { id: "hp34", displayName: 'Children are welcome', type:"check" },
  { id: "hp35", displayName: 'Children stay for free in some cases', type:"check" },
  { id: "hp36", displayName: 'Children stay for free in some cases', type:"check" },

  { id: "hp37", displayName: 'Maximum number of unpaid children per room',   },
  { id: "hp38", displayName: 'Top age for free stay',   },
  { id: "hp39", displayName: 'Rate for any additional child',   },
  { id: "hp40", displayName: 'op age for child at additional cost',   },
];

const INDEX = "6";

class HotelPolicies extends React.Component {
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

ReactDOM.render(<HotelPolicies />, document.getElementById('root'));

export default HotelPolicies;
