import "./HotelOwnerContainer.css"
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ReactDOM from 'react-dom';


class HOHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      selectedIndex: "1",
    }
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick = (event) => {
    let inx = event.target.getAttribute("index");
    this.setState({ "selectedIndex": ""+inx });
    if (typeof this.state.doClick === "function") {
      event.preventDefault();
      this.props.doClick(event);
    }
  }

    render() {
      debugger;
    let selectedIndex = this.state.selectedIndex;
  return (
    <div className="RMHOHeaderRow">
      <div index="1" isselected={""+(selectedIndex === "1")}  key="invoice"     id="invoice" onClick={this.handleClick} className="RMHOHeaderItem"> <FormattedMessage {...messages.invoice} /></div>
      <div index="2" isselected={"" + (selectedIndex === "2")}  key="add"         id="add" onClick={this.handleClick} className="RMHOHeaderItem"> <FormattedMessage {...messages.add_hotel} /></div>
      <div index="3" isselected={"" + (selectedIndex === "3")}  key="rooms"       id="rooms" onClick={this.handleClick} className="RMHOHeaderItem"> <FormattedMessage {...messages.rooms} /></div>
      <div index="4" isselected={"" + (selectedIndex === "4")}  key="reservation" id="reservation" onClick={this.handleClick} className="RMHOHeaderItem"> <FormattedMessage {...messages.reservations} /></div>
      <div index="5" isselected={"" + (selectedIndex === "5")}  key="profile"     id="profile" onClick={this.handleClick} className="RMHOHeaderItem"> <FormattedMessage {...messages.profile} /></div>
      <div index="6" isselected={"" + (selectedIndex === "6")}  key="policies"    id="policies" onClick={this.handleClick} className="RMHOHeaderItem"> <FormattedMessage {...messages.policies} /></div>
      <div index="7" isselected={"" + (selectedIndex === "7")}  key="facilities"  id="facilities" onClick={this.handleClick} className="RMHOHeaderItem"> <FormattedMessage {...messages.facilities} /></div>
    </div>
  );
}
};

ReactDOM.render(<HOHeader />, document.getElementById('root'));

export default HOHeader;
