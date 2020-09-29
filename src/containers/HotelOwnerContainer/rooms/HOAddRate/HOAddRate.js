import React from 'react';
import ReactDOM from 'react-dom';
import RMTable from '../../../../components/RMTable';

const content = {
    data: [{
        key: "rates_types", topic: "Room Rates", headers: [
            { name: "Plan" }, { name: "Start Date" }, { name: "End Date" }, { name: "Occupancy" },
            { name: "Breakfast included" }, { name: "Free Of Charge" }, { name: "Price" }, { name: "Weekly Price" }, { name: "Edit" }, { name: "Delete" }],
        items:
            [{
                key: "Plan259", Plan: "259", start_date: "1/1/2020", end_date: "31/12/2020", occupancy: "100", breakfest_included: "true", free_of_charge: "false",price: "0",weekly_price: "100",
                edit: ['{"type": "ref",         "href": "HOEditRates"         }'],
                delete: ['{"type":"ref",        "href": "HODeleteRate"  }']
            },
            ]
    }]
}

class HOAddRate extends React.Component {
    getTables = () => {
        let map = [];
        let fields = ["Plan", "start_date", "end_date", "occupancy", "breakfest_included", "free_of_charge", "price", "weekly_price", "edit","delete"];
        content.data.forEach((item) => {
            if (item.topic !== "") {
                map.push(
                    <div key={item.key} className="RMHOTableTopic">{item.topic}</div>)
                map.push(<RMTable tabledata={item} fields={fields} />)
            }
        });
        return map;
    }

    render() {
        let displayClass = "RMHOContentTable";
        return (
            <div className={displayClass}>{this.getTables()}</div>
        )
    }
}

ReactDOM.render(<HOAddRate />, document.getElementById('root'));

export default HOAddRate;