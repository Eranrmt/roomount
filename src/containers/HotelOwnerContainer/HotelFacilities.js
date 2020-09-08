import "./HotelOwnerContainer.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { getClasses } from '../App/RoommountUtil.js';
import RMTable from '../../components/RMTable';
const INDEX = "7";

const content = {
    data: [{
        key: "public_area", topic: "Public Area", headers: [
            { name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
            [{ key: "F1", display_name: "Elevator", name: "elevator", available: false, free: false, res_required: false, at_add_cost: false },
                { key: "F2", display_name: "Air conditioning", name: "air_conditioning", available: false, free: false, res_required: false, at_add_cost: false },
                { key: "F3", display_name: "Lounge / TV area ", name: "lounge_tv_area", available: false, free: false, res_required: false, at_add_cost: false },
                { key: "F4", display_name: "Designated smoking area", name: "designated_smoking_area", available: false, free: false, res_required: false, at_add_cost: false },
                { key: "F5", display_name: "Games room", name: "games_room", available: false, free: false, res_required: false, at_add_cost: false },
                { key: "F6", display_name: "Garden", name: "garden", available: false, free: false, res_required: false, at_add_cost: false },
            ]
    },
        {
            key: "reception_services", topic: "Reception Services", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "F7", display_name: "24/7 front desk ", name: "24/7 front desk ", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F8", display_name: "Private check-in / check-out ", name: "private check-in / check-out ", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F9", display_name: "Luggage storage ", name: "luggage storage ", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F10", display_name: "Express check-in / check-out ", name: "express check-in / check-out ", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F11", display_name: "ATM / Cash machine on site", name: "atm / cash machine on site", available: false, free: false, res_required: false, at_add_cost: false },
                ]
        },

        {
            key: "parking", topic: "Parking & Transportation", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "F12", display_name: "Parking", name: "parking", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F13", display_name: "Accessible parking ", name: "accessible parking ", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F14", display_name: "Secured parking ", name: "secured parking ", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F15", display_name: "Street Parking", name: "street parking", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F16", display_name: "Valet parking", name: "valet parking", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F17", display_name: "Car Charging Point", name: "car charging Point", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F18", display_name: "Airport shuttle", name: "airport shuttle", available: false, free: false, res_required: false, at_add_cost: false },
                ]
        },
        {
            key: "food", topic: "Food & Drink", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "F19", display_name: "Bar", name: "bar", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F20", display_name: "Restaurant", name: "restaurant", available: false, free: false, res_required: false, at_add_cost: false },
        { key: "F21", display_name: "BBQ Facilities", name: "bbq facilities", available: false, free: false, res_required: false, at_add_cost: false },
    { key: "F22", display_name: "Breakfast in room", name: "breakfast in room", available: false, free: false, res_required: false , at_add_cost: false},
{ key: "F23", display_name: "Children meals ", name: "children meals ", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F24", display_name: "Children-friendly buffet", name: "children-friendly buffet", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F25", display_name: "On-site coffee house ", name: "on-site coffee house ", available: false, free: false, res_required: false, at_add_cost: false },
                ]
        },



        {
            key: "accessibility", topic: "Accessibility / Disabled Facilities (in some rooms)", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "F26", display_name: "Wheelchair accessible", name: "wheelchair accessible", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F27", display_name: "Ground Floor Room", name: "ground floor room", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F28", display_name: "Upper Floor Rooms Accessible by Elevator", name: "upper floor rooms accessible by elevator", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F29", display_name: "Toilet with grab rails", name: "toilet with grab rails", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F30", display_name: "Raised toilet", name: "raised toilet", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F31", display_name: "Lowered sink", name: "lowered sink", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F32", display_name: "Adapted Bath", name: "adapted bath", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F33", display_name: "Roll-in Shower", name: "roll-in shower", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F34", display_name: "Shower Chair", name: "shower chair", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F35", display_name: "Bathroom emergency cord", name: "bathroom emergency cord", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F36", display_name: "Braille aids or tactile signs", name: "braille aids or tactile signs", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F37", display_name: "Auditory guidance ", name: "auditory guidance ", available: false, free: false, res_required: false, at_add_cost: false},
                ]
        },
        {
            key: "internet", topic: "Internet", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "F38", display_name: "In-room WiFi", name: "in-room wifi", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F39", display_name: "Public-areas WiFi", name: "public-areas wifi", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F40", display_name: "In-room  wired Internet", name: "in-room  wired internet", available: false, free: false, res_required: false, at_add_cost: false},
                ]
        },



        {
            key: "entertainment", topic: "Entertainment and Family services", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "F41", display_name: "Casino", name: "casino", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F42", display_name: "Evening entertainment", name: "evening entertainment", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F43", display_name: "Children playground", name: "children playground", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F44", display_name: "Children television networks", name: "children television networks", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F45", display_name: "Babysitting service", name: "babysitting service", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F46", display_name: "Children's club / play room", name: "children's club / play room", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F47", display_name: "Cribs available", name: "cribs available", available: false, free: false, res_required: false, at_add_cost: false },
                ]
        },
        {
            key: "fitness", topic: "Wellness / Fitness", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "F48", display_name: "Fitness Center / Gym", name: "fitness center / gym", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F49", display_name: "Indoor Pool", name: "indoor pool", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F50", display_name: "Outdoor Pool", name: "outdoor pool", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F51", display_name: "Heated Pool", name: "heated pool", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F52", display_name: "Spa", name: "spa", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F53", display_name: "Sauna", name: "sauna", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F54", display_name: "Wellness Center", name: "wellness center", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F55", display_name: "In-room Jaccuzi / Hot tub", name: "in-room jaccuzi / hot tub", available: false, free: false, res_required: false, at_add_cost: false},
                ]
        },



        {
            key: "business", topic: "Business facilities", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost"}, { name: "Reservation Required" }], items:
 [
                    { key: "F56", display_name: "Meeting facilities", name: "meeting facilities", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F57", display_name: "Business Centre", name: "business centre", available: false, free: false, res_required: false, at_add_cost: false },
                ]
        },
        {
            key: "activities", topic: "Activities", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "F58", display_name: "Bowling", name: "bowling", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F59", display_name: "Billiard", name: "billiard", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F60", display_name: "Golf", name: "golf", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F61", display_name: "Mini Golf", name: "mini golf", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F62", display_name: "Table Tennis", name: "table tennis", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F63", display_name: "Tennis Court", name: "tennis court", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F64", display_name: "Bicycle", name: "bicycle", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F65", display_name: "Water Park on site", name: "water park on site", available: false, free: false, res_required: false, at_add_cost: false },
                    { key: "F66", display_name: "Water sport facilities on site", name: "water sport facilities on site", available: false, free: false, res_required: false, at_add_cost: false},
                ]
        },

        {
            key: "meals", topic: "Available Meals", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "F67", display_name: "All Inclusive", name: "all inclusive", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F68", display_name: "Breakfast", name: "breakfast", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F69", display_name: "Half Board", name: "half board", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F70", display_name: "Full Board", name: "full board", available: false, free: false, res_required: false, at_add_cost: false},
                ]
        },

        {
            key: "general", topic: "General", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "F71", display_name: "Non-smoking throughout", name: "non-smoking throughout", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F72", display_name: "Non-smoking rooms available", name: "non-smoking rooms available", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F73", display_name: "Soundproof rooms available", name: "soundproof rooms available", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F74", display_name: "Allergy free room available", name: "allergy free room available", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F75", display_name: "Room service ", name: "room service ", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F76", display_name: "Bridal suite", name: "bridal suite", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F77", display_name: "Concierge Service", name: "concierge service", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F78", display_name: "Tour desk", name: "tour desk", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F79", display_name: "Currency exchange", name: "currency exchange", available: false, free: false, res_required: false, at_add_cost: false},
                    { key: "F80", display_name: "Laundry", name: "laundry", available: false, free: false, res_required: false, at_add_cost: false},
                ]
        },
    
  ]
}
class HotelFacilities extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
    }
  }

  getTables = () => {
      let map = [];
      let fields = ["display_name", "available", "free","at_add_cost","res_required"];
    content.data.forEach((item) => {
      if (item.topic !== "") {
        map.push(
            <div key={item.topic} className="RMHOTableTopic">{item.topic}</div>)
          map.push(<RMTable tabledata={item} fields={fields}/>)
      }
    });
    return map;
  }

  render() {
    let displayClass = getClasses(this.props.selected, INDEX);
    return (
      <div className={displayClass}>{ this.getTables() }</div>
    )
  }
}

ReactDOM.render(<HotelFacilities />, document.getElementById('root'));

export default HotelFacilities;
