import "./HotelOwnerContainer.css"
import React from 'react';
import ReactDOM from 'react-dom';

import HOHeader from './HOHeader';
import Invoice from './Invoice';
import AddHotel from './HotelAdd'
import ProfileHotel from './HotelProfile'
import HotelRooms from './HotelRooms'
import HotelPolicies from './HotelPolicies'
import HotelFacilities from './HotelFacilities'
import HotelReservations from './HotelReservations'

export class HOMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            selectedPage: "1",
            height: "0",
            width: "0",
        }

        this.onclick = this.onclick.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    onclick = (event) => {
        this.setState({ "selectedPage": event.target.getAttribute("index") });
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        let constHeight = this.state.height - 180;
        let size = { height: constHeight,  maxHeight: constHeight};
        return (
            <div className="RMHotelContainer">
                <HOHeader h="0" doClick={this.onclick} />
                <div style={size} className="RMHOWorkarea">
                    <Invoice key="I1" selected={this.state.selectedPage} />
                    <AddHotel key="I2" selected={this.state.selectedPage} />
                    <HotelRooms key="I3" selected={this.state.selectedPage} />
                    <HotelReservations key="I4" selected={this.state.selectedPage} />
                    <ProfileHotel key="I5" selected={this.state.selectedPage} />
                    <HotelPolicies key="I6" selected={this.state.selectedPage} />
                    <HotelFacilities key="I7" selected={this.state.selectedPage} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<HOMain />, document.getElementById('root'));

export default HOMain;
