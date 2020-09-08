import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

import { Icon } from 'react-icons-kit'
import { pencil } from 'react-icons-kit/fa/pencil'

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

const getParent = (tag, target) => {
    if (target === null) {
        return null;
    } 
    if (!target) {
        return null;
    }
    if (target.tagName.toLowerCase().trim() === tag.toLowerCase().trim()) {
        return target;
    }
    debugger;
    return getParent(tag, target.parentElement);
}

const refClick = (e) => {
    let ele = getParent("button ", e.target);
    if (ele == null) {
        return;
    }
    let href = ele.getAttribute("href");
    window.location.href = "./" + href;
}

const getData = (rowdata, rowDataKeys) => {
    let map = [];
    let key = 1;
    Object.keys(rowdata).forEach((name) => {
        let mKey = rowdata.key + key;
        if (rowDataKeys.indexOf(name) != -1) {
            let val = rowdata[name];
            if (typeof val === "object") {
                let json = JSON.parse(val[0]);
                let href = json.href;
                map.push(
                    <div key={mKey} className="RMSectionCell">
                        <button href={href} onClick={refClick} className="RMRefIconButtonWrapper" >
                            <Icon href={href} className="RMRefIconLink" icon={pencil}/>
                        </button>
                    </div>);
            } else {
                map.push(<div key={mKey} className="RMSectionCell">{rowdata[name]}</div>);
            }
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

function RMTable({ tabledata, fields }) {
  return (
    <Container>
          {getTable(tabledata, tabledata.key, fields )}
    </Container>
  );
}

RMTable.propTypes = {
    tabledata: PropTypes.object,
    fields: PropTypes.array
};

export default RMTable;
