import React from 'react';
import RMRangeSelector from '../../components/RMRangeSelector'
import RMCheck from '../../components/RMCheck'
import RMLabel from '../../components/RMLabel'

export const getClasses = (selectedIndex, index) => {
  if (!selectedIndex) {
      return "RMHOContentTable RMHide";
  }
  let clzz = "RMHOContentTable RMHide";
  if (selectedIndex === index) {
    clzz = "RMHOContentTable"
  }
  return clzz;
}

const onChange = () => {
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
      <div key = { 'x' + value.id } className = 'RMHOContentRow' >
        <div className='RMHOContentCell' ><RMLabel clzz="RMHOLabel" id={'y' + value.id} label={value.displayName}/></div >
        <RMRangeSelector label="x" clzz="RMSelector" range={value.range} direction={value.direction} />
      </div >
    )
  } else {
    return (
      <div key={'x' + value.id} className='RMHOContentRow'>
        <div className='RMHOContentCell'><RMLabel clzz="RMHOLabel" id={'y' + value.id} label={value.displayName}/></div>
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
