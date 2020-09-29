import React from 'react';
import ReactDOM from 'react-dom';
import { createForm} from '../../../App/RoommountUtil.js';


const selectionList = [{ name: "wifi", display_name: "WiFi" },
{ name: "air_conditioning", display_name: "Air Conditioning" },
{ name: "fan", display_name: "Fan" },
{ name: "heating", display_name: "Heating" },
{ name: "accessibility facilities  for disabled guests", display_name: "Accessibility Facilities   for Disabled Guests" },
{ name: "soundproofing", display_name: "Soundproofing" },
{ name: "allergy free room", display_name: "Allergy free room" },
{ name: "smoke alarm", display_name: "Smoke alarm" },
{ name: "bath_or_shower", display_name: "Bath or Shower" },
{ name: "bathrobe", display_name: "Bathrobe" },
{ name: "private bathroom", display_name: "Private bathroom" },
{ name: "linen", display_name: "Linen" },
{ name: "towels", display_name: "Towels" },
{ name: "emergency cord in bathroom", display_name: "Emergency cord in bathroom" },
{ name: "toilet", display_name: "Toilet" },
{ name: "toilet paper", display_name: "Toilet paper" },
{ name: "desk", display_name: "Desk" },
{ name: "wardrobe or closet", display_name: "Wardrobe or Closet" },
{ name: "safety deposit box", display_name: "Safety deposit box" },
{ name: "sofa", display_name: "Sofa" },
{ name: "sitting area", display_name: "Sitting area" },
{ name: "minibar", display_name: "Minibar" },
{ name: "tv", display_name: "TV" },
{ name: "cable tv / satellite tv / streaming", display_name: "Cable TV / Satellite TV / Streaming" },
{ name: "ironing facilities", display_name: "Ironing facilities" },
{ name: "hair dryer", display_name: "Hair dryer" },
{ name: "kitchen / kitchenette", display_name: "Kitchen / Kitchenette" },
{ name: "kitchenware", display_name: "Kitchenware" },
{ name: "electric kettle", display_name: "Electric kettle" },
{ name: "oven", display_name: "Oven" },
{ name: "refrigerator", display_name: "Refrigerator" },
{ name: "stovetop", display_name: "Stovetop" },
{ name: "toaster", display_name: "Toaster" },
{ name: "dishwasher", display_name: "Dishwasher" },
{ name: "telephone", display_name: "Telephone" },
{ name: "toiletries", display_name: "Toiletries" },
{ name: "slippers", display_name: "Slippers" },
{ name: "carpeted", display_name: "Carpeted" },
{ name: "wooden  / parquete floor", display_name: "Wooden  / Parquete floor" },
{ name: "extra long beds", display_name: "Extra Long beds" },
{ name: "view", display_name: "View" },
{ name: "private entrance", display_name: "Private Entrance" },
{ name: "private pool", display_name: "Private pool" },
{ name: "balcony / terrace", display_name: "Balcony / Terrace" },
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