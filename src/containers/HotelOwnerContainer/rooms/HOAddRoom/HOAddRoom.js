import React from 'react';
import ReactDOM from 'react-dom';
import { createForm} from '../../../App/RoommountUtil.js';


const selectionList = [{ name: "air_condition", display_name: "Air Condition" },
    { name: "bath_or_shower", display_name: "Bath or Shower" },
    { name: "bathrobe", display_name: "Bathrobe" },
    { name: "bathtub or Shower", display_name: "bathtub or Shower" },
    { name: "Cable Channels", display_name: "Cable Channels" },
]

const content = [
    { id: "art11", displayName: 'Room Type' },
    { id: "art12", displayName: 'Remarks', },
    { id: "art13", displayName: 'Max occupancy', },
    { id: "art14", type: "MultiplSelectionList", choices:{selectionList}, displayName: 'Features & Amenities', },
];



class HOAddRoom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
        }
    }

    render() {
        let displayClass = "RMHOContentTable";
        return (
            <div className={displayClass}>
                {createForm(content)}
                <button className="RMHOActionButton">Save</button>
            </div>
        );
    }
}


ReactDOM.render(<HOAddRoom />, document.getElementById('root'));

export default HOAddRoom;