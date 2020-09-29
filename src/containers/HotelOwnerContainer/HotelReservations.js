import "./HotelOwnerContainer.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { getClasses } from '../App/RoommountUtil.js';
import RMTable from '../../components/RMTable';

const INDEX = "4";

const content = {
  item: {
        key: "reservations", topic: "Reservations", headers: [{ name: "ID" }, { name: "Stay Price" }, { name: "Time Submitted" }, { name: "Hotel Response" }, { name: "Check In" }, { name: "Check Out" }, { name: "Num Rooms" }, { name: "Adults" }, { name: "Children" }, { name: "Extra Beds" }, { name: "Canceled" }, { name: "No Show" }, { name: "View" }, { name: "Confirmed" }, { name: "Problem" }], items:
          [{
          key: "Res1",
        id: "yyyyyyy",
        stay_price: "",
        time_submitted: "",
        hotel_response: false,
        res_required: false,
        check_in: "",
        check_out: "",
        num_rooms: "",
        adults: "",
        children: "",
        extra_beds: "",
        canceled: "",
        no_show: "",
        view: "",
        confirmed: "",
        problem: "",
      }
      ]
  }
}

class HotelReservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    }

  }

    getTabels = (item) => {
        let fields = ["id", "stay_price", "time_submitted", "hotel_response", "check_in", "check_out", "num_rooms",
            "adults", "children", "extra_beds", "canceled", "no_show", "view", "confirmed", "problem"];
    let map = [];
        map.push(<RMTable fields={fields} tabledata={item} />);
    return map;
  }

    render() {
        let displayClass = getClasses(this.props.selected, INDEX);
        return (
            <div className={displayClass}>
                {this.getTabels(content.item)}
                <button className="RMHOActionButton">Save</button>
            </div>
        );
  }
}

ReactDOM.render(<HotelReservations />, document.getElementById('root'));

export default HotelReservations;
