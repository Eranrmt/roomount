import "./HotelOwnerContainer.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { getClasses } from '../App/RoommountUtil.js';
import RMTable from '../../components/RMTable';
const INDEX = "3";

const content = {
    data: [{
        key: "room_types" ,topic: "Room Types", headers: [
            { name: "Type" }, { name: "Beds" }, { name: "Remarks" }, { name: "Features & Amenities" },
            { name: "Room" }, { name: "Rate plans" }, { name: "Quantity" }, { name: "Delete" }],
        items:
            [{ key: "Room1", type: "Double", beds: "2", remarks: "", features: "Bathrobe", room: "ref", rate: "ref", quantity: "ref", delete: "ref" },
            ]
    }]
}
class HotelRooms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
        }
    }

    getTables = () => {
        let map = [];
        let fields = ["type", "beds","remarks","features","room","rate","quantity","delete"];
        content.data.forEach((item) => {
            if (item.topic !== "") {
                map.push(
                    <div key={item.key} className="RMHOTableTopic">{item.topic}</div>)
                map.push(<RMTable tabledata={item} fields={fields}/>)
            }
        });
        return map;
    }

    render() {
        let displayClass = getClasses(this.props.selected, INDEX);
        return (
            <div className={displayClass}>{this.getTables()}</div>
        )
    }
}

ReactDOM.render(<HotelRooms />, document.getElementById('root'));

export default HotelRooms;

