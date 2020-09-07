import React from 'react';
import PropTypes from 'prop-types';
import {Container } from './styles';


const getYesNo = (boolvalue) => {
  if (boolvalue) {
    return "Yes";
  }
  return "No";
}

const getHeaderContent = (headers) => {
    let map = [];
    headers.forEach((head) => {
        map.push(<div className="RMSectionCell">{head.name}</div>)
    });

    return map
}

const getHeader = (headers) => {
  let map = [];
    map.push(<div className="RMSectionHeader">{getHeaderContent(headers)}</div>);
  return map;
}

const getData = (rowdata,rowDataKeys) => {
    let map = [];
    let key = 1;
    Object.keys(rowdata).forEach((name) => {
        let mKey = rowdata[name] + key;
        if (rowDataKeys.indexOf(name) != -1) {
            map.push(<div key={mKey} className="RMSectionCell">{rowdata[name]}</div>);
        }
      key++;
  });
  return map;
}

const getRow = (rowdata,keys) => {
    let map = [];
    map.push(<div className="RMSectionRow">{getData(rowdata,keys)}</div>);
   
  return map;
}

const getInitTable = (item,keys) => {
    let map = [];
    let r = getHeader(item.headers);
    map.push(r);
    item.items.forEach((value) => {
        map.push(getRow(value,keys));
    });
    return map;
}

const getTable = (item,index,keys) => {
  let map = [];
  let lkey = "index_"+index;
    map.push(<div key={lkey} className="RMSectionTable">{getInitTable(item,keys)}</div>);
  
  return map;
}

function RMTable({ tabledata, keys }) {
  return (
    <Container>
          {getTable(tabledata, tabledata.key, ["display_name"] )}
    </Container>
  );
}

export default RMTable;
