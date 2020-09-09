import React from 'react';
import RMRangeSelector from '../../components/RMRangeSelector'
import RMCheck from '../../components/RMCheck'
import RMLabel from '../../components/RMLabel'

export const getClasses = (selectedIndex, index) => {
    if (!selectedIndex) {
        return "RMHOContentTable RMHide";
    }
    if (index === -1) {
        return "RMHOContentTable";
    }
    let clzz = "RMHOContentTable RMHide";
    if (selectedIndex === index) {
        clzz = "RMHOContentTable"
    }
    return clzz;
}

const onChange = () => {
}
const getMultipleChoiceList = (choices) => {
    let map = [];
    choices.selectionList.forEach((value => {
        map.push(
        <RMCheck label={value.display_name} clzz="RMCheck" defaultValue="true" id="t1" />
        );
    }));
    return map;
}

const getContentRow = (value) => {
    if (value.type == "check") {
        return (
            <div key={'x' + value.id} className='RMHOContentRow' >
                <div className='RMHOContentCell' ><span key={'y' + value.id}></span></div >
                <RMCheck label={value.displayName} clzz="RMCheck" defaultValue="true" id="t1" />
            </div >
        )
    }
    else if (value.type == "range") {
        return (
            <div key={'x' + value.id} className='RMHOContentRow' >
                <div className='RMHOContentCell' ><RMLabel clzz="RMHOLabel" id={'y' + value.id} label={value.displayName} /></div >
                <RMRangeSelector label="x" clzz="RMSelector" range={value.range} direction={value.direction} />
            </div >
        )
    }
    else if (value.type == "MultiplSelectionList") {
        return (<div><label>Features & Amenities</label>
            <div className="RMMultipleChoiceContainer">
                {getMultipleChoiceList(value.choices)}
            </div></div>)
    }
    else {
        return (
            <div key={'x' + value.id} className='RMHOContentRow'>
                <div className='RMHOContentCell'><RMLabel clzz="RMHOLabel" id={'y' + value.id} label={value.displayName} /></div>
                <div className='RMHOContentCell'><input className="HOItemInputCell" key={'z' + value.id} onChange={onChange} type="text" value='' /></div>
            </div>
        )
    }
}

export const createForm = (content) => {
    let map = [];

    content.forEach((value) => {
        map.push(
            getContentRow(value)
        );
    });

    return map;
}
