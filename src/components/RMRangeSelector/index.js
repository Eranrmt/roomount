import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const createOptions = (range,direction) => {
  let arr = range.split("-");
  let start = Number(arr[0]);
  let end = Number(arr[1]);
  let options = [];
  if (direction==="desc") {
    for (let i = end; i >= start; i--) {
      options.push(<option key={"option_"+i}>{i}</option>);
    }
    return options;
  }
  for (let i = start; i <= end; i++) {
    options.push(<option key={"option_" + i}>{i}</option>);
  }
  return options;
}

function RMRangeSelector({ label, range, clzz, direction }) {

  return (
    <Container>
      <select name="1" id="1" className={clzz}>
        {createOptions(range, direction)}
      </select>
    </Container>
  );
}

RMRangeSelector.propTypes = {
  label: PropTypes.string,
  range: PropTypes.string,
  direction: PropTypes.string,
  clzz: PropTypes.string,
};

export default RMRangeSelector;
