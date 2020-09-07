import React from 'react';
import ReactDOM from 'react-dom';
import { withNamespaces } from 'react-i18next';

class RMButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      label: this.props.label,
      clzz: this.props.label.className,
    }
  }

  render() {
    return (<button className={this.state.clzz}>{this.state.label}</button>
    );
  }
}

ReactDOM.render(<RMButton />, document.getElementById('root'));

export default withNamespaces()(RMButton);
