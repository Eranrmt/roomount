import "./HotelOwnerContainer.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { getClasses } from '../App/RoommountUtil.js';
import RMTable from '../../components/RMTable';
const INDEX = "7";

const content = {
    data: [{
        topic: "Public Area", headers: [
            { name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
            [{ key: "1", display_name: "Elevator", name: "elevator", available: false, free: false, res_required: false },
            { key: "2", display_name: "Air conditioning", name: "air_conditioning", available: false, free: false, res_required: false },
            { key: "3", display_name: "Lounge / TV area ", name: "lounge_tv_area", available: false, free: false, res_required: false },
            { key: "4", display_name: "Designated smoking area", name: "designated_smoking_area", available: false, free: false, res_required: false },
            { key: "5", display_name: "Games room", name: "games_room", available: false, free: false, res_required: false },
            { key: "6", display_name: "Garden", name: "garden", available: false, free: false, res_required: false },
            ]
    },
        {
            topic: "Reception Services", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "7", display_name: "24/7 front desk ", name: "24/7 front desk ", available: false, free: false, res_required: false },
                    { key: "8", display_name: "Private check-in / check-out ", name: "private check-in / check-out ", available: false, free: false, res_required: false },
                    { key: "9", display_name: "Luggage storage ", name: "luggage storage ", available: false, free: false, res_required: false },
                    { key: "10", display_name: "Express check-in / check-out ", name: "express check-in / check-out ", available: false, free: false, res_required: false },
                    { key: "11", display_name: "ATM / Cash machine on site", name: "atm / cash machine on site", available: false, free: false, res_required: false },
                ]
        },



        {
            topic: "Parking & Transportation", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "11", display_name: "Parking", name: "parking", available: false, free: false, res_required: false },
                    { key: "12", display_name: "Accessible parking ", name: "accessible parking ", available: false, free: false, res_required: false },
                    { key: "13", display_name: "Secured parking ", name: "secured parking ", available: false, free: false, res_required: false },
                    { key: "14", display_name: "Street Parking", name: "street parking", available: false, free: false, res_required: false },
                    { key: "15", display_name: "Valet parking", name: "valet parking", available: false, free: false, res_required: false },
                    { key: "16", display_name: "Car Charging Point", name: "car charging Point", available: false, free: false, res_required: false },
                    { key: "17", display_name: "Airport shuttle", name: "airport shuttle", available: false, free: false, res_required: false },
                ]
        },



        {
            topic: "Food & Drink", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "18", display_name: "Bar", name: "bar", available: false, free: false, res_required: false },
                    { key: "19", display_name: "Restaurant", name: "restaurant", available: false, free: false, res_required: false },
                    { key: "20", display_name: "BBQ Facilities", name: "bbq facilities", available: false, free: false, res_required: false },
                    { key: "21", display_name: "Breakfast in room", name: "breakfast in room", available: false, free: false, res_required: false },
                    { key: "22", display_name: "Children meals ", name: "children meals ", available: false, free: false, res_required: false },
                    { key: "23", display_name: "Children-friendly buffet", name: "children-friendly buffet", available: false, free: false, res_required: false },
                    { key: "24", display_name: "On-site coffee house ", name: "on-site coffee house ", available: false, free: false, res_required: false },
                ]
        },



        {
            topic: "Accessibility / Disabled Facilities (in some rooms)", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "25", display_name: "Wheelchair accessible", name: "wheelchair accessible", available: false, free: false, res_required: false },
                    { key: "26", display_name: "Ground Floor Room", name: "ground floor room", available: false, free: false, res_required: false },
                    { key: "27", display_name: "Upper Floor Rooms Accessible by Elevator", name: "upper floor rooms accessible by elevator", available: false, free: false, res_required: false },
                    { key: "28", display_name: "Toilet with grab rails", name: "toilet with grab rails", available: false, free: false, res_required: false },
                    { key: "29", display_name: "Raised toilet", name: "raised toilet", available: false, free: false, res_required: false },
                    { key: "30", display_name: "Lowered sink", name: "lowered sink", available: false, free: false, res_required: false },
                    { key: "31", display_name: "Adapted Bath", name: "adapted bath", available: false, free: false, res_required: false },
                    { key: "32", display_name: "Roll-in Shower", name: "roll-in shower", available: false, free: false, res_required: false },
                    { key: "33", display_name: "Shower Chair", name: "shower chair", available: false, free: false, res_required: false },
                    { key: "34", display_name: "Bathroom emergency cord", name: "bathroom emergency cord", available: false, free: false, res_required: false },
                    { key: "35", display_name: "Braille aids or tactile signs", name: "braille aids or tactile signs", available: false, free: false, res_required: false },
                    { key: "36", display_name: "Auditory guidance ", name: "auditory guidance ", available: false, free: false, res_required: false },
                ]
        },



        {
            topic: "Internet", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "37", display_name: "In-room WiFi", name: "in-room wifi", available: false, free: false, res_required: false },
                    { key: "38", display_name: "Public-areas WiFi", name: "public-areas wifi", available: false, free: false, res_required: false },
                    { key: "39", display_name: "In-room  wired Internet", name: "in-room  wired internet", available: false, free: false, res_required: false },
                ]
        },



        {
            topic: "Entertainment and Family services", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "40", display_name: "Casino", name: "casino", available: false, free: false, res_required: false },
                    { key: "41", display_name: "Evening entertainment", name: "evening entertainment", available: false, free: false, res_required: false },
                    { key: "42", display_name: "Children playground", name: "children playground", available: false, free: false, res_required: false },
                    { key: "43", display_name: "Children television networks", name: "children television networks", available: false, free: false, res_required: false },
                    { key: "44", display_name: "Babysitting service", name: "babysitting service", available: false, free: false, res_required: false },
                    { key: "45", display_name: "Children's club / play room", name: "children's club / play room", available: false, free: false, res_required: false },
                    { key: "46", display_name: "Cribs available", name: "cribs available", available: false, free: false, res_required: false },
                ]
        },



        {
            topic: "Wellness / Fitness", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "47", display_name: "Fitness Center / Gym", name: "fitness center / gym", available: false, free: false, res_required: false },
                    { key: "48", display_name: "Indoor Pool", name: "indoor pool", available: false, free: false, res_required: false },
                    { key: "49", display_name: "Outdoor Pool", name: "outdoor pool", available: false, free: false, res_required: false },
                    { key: "50", display_name: "Heated Pool", name: "heated pool", available: false, free: false, res_required: false },
                    { key: "51", display_name: "Spa", name: "spa", available: false, free: false, res_required: false },
        { key: "52", display_name: "Sauna", name: "sauna", available: false, free: false, res_required: false },
        { key: "53", display_name: "Wellness Center", name: "wellness center", available: false, free: false, res_required: false },
                    { key: "54", display_name: "In-room Jaccuzi / Hot tub", name: "in-room jaccuzi / hot tub", available: false, free: false, res_required: false },
                ]
        },



        {
            topic: "Business facilities", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost"}, { name: "Reservation Required" }], items:
 [
                    { key: "55", display_name: "Meeting facilities", name: "meeting facilities", available: false, free: false, res_required: false },
                    { key: "56", display_name: "Business Centre", name: "business centre", available: false, free: false, res_required: false },
                ]
        },



        {
            topic: "Activities", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "57", display_name: "Bowling", name: "bowling", available: false, free: false, res_required: false },
                    { key: "58", display_name: "Billiard", name: "billiard", available: false, free: false, res_required: false },
                    { key: "59", display_name: "Golf", name: "golf", available: false, free: false, res_required: false },
                    { key: "60", display_name: "Mini Golf", name: "mini golf", available: false, free: false, res_required: false },
                    { key: "61", display_name: "Table Tennis", name: "table tennis", available: false, free: false, res_required: false },
                    { key: "62", display_name: "Tennis Court", name: "tennis court", available: false, free: false, res_required: false },
                    { key: "63", display_name: "Bicycle", name: "bicycle", available: false, free: false, res_required: false },
                    { key: "64", display_name: "Water Park on site", name: "water park on site", available: false, free: false, res_required: false },
                    { key: "65", display_name: "Water sport facilities on site", name: "water sport facilities on site", available: false, free: false, res_required: false },
                ]
        },



        {
            topic: "Available Meals", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "66", display_name: "All Inclusive", name: "all inclusive", available: false, free: false, res_required: false },
                    { key: "67", display_name: "Breakfast", name: "breakfast", available: false, free: false, res_required: false },
                    { key: "68", display_name: "Half Board", name: "half board", available: false, free: false, res_required: false },
                    { key: "69", display_name: "Full Board", name: "full board", available: false, free: false, res_required: false },
                ]
        },

        {
            topic: "General", headers: [{ name: "Name" }, { name: "Available" }, { name: "Free" }, { name: "At additional cost" }, { name: "Reservation Required" }], items:
                [
                    { key: "70", display_name: "Non-smoking throughout", name: "non-smoking throughout", available: false, free: false, res_required: false },
                    { key: "71", display_name: "Non-smoking rooms available", name: "non-smoking rooms available", available: false, free: false, res_required: false },
                    { key: "72", display_name: "Soundproof rooms available", name: "soundproof rooms available", available: false, free: false, res_required: false },
                    { key: "73", display_name: "Allergy free room available", name: "allergy free room available", available: false, free: false, res_required: false },
                    { key: "74", display_name: "Room service ", name: "room service ", available: false, free: false, res_required: false },
                    { key: "75", display_name: "Bridal suite", name: "bridal suite", available: false, free: false, res_required: false },
                    { key: "76", display_name: "Concierge Service", name: "concierge service", available: false, free: false, res_required: false },
                    { key: "77", display_name: "Tour desk", name: "tour desk", available: false, free: false, res_required: false },
                    { key: "78", display_name: "Currency exchange", name: "currency exchange", available: false, free: false, res_required: false },
                    { key: "79", display_name: "Laundry", name: "laundry", available: false, free: false, res_required: false },
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
    content.data.forEach((item) => {
      if (item.topic !== "") {
        map.push(
            <div key={item.topic} className="RMHOTableTopic">{item.topic}</div>)
        map.push(<RMTable tabledata={item}/>)
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
