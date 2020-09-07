import React from 'react';
import ReactDOM from 'react-dom';


export class RMSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            label: this.props.label,
            choices: this.props.choices,
        }

        this.getChoices = this.getChoices.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = () => {

    }

    doTranslate = (t, key) => {
        if (!t) {
            return "k"+key;
        }
        return t(key);
    }

    getChoices = () => {
        const { t } = this.props;
        let map = [];
        if (!this.state.choices) {
            return map;
        }
        let choices = JSON.parse(this.state.choices);
        choices.children.forEach((value) => {
            let displayValue = this.doTranslate(t, value.key);
            map.push(<option key={value.key} className="HSCSFieldOption">{displayValue}</option>)
        }) 
        return map;
    }

    render() {
        return (
            <div className="HSCSCell HSCSFieldContainer">
                <label className="HSCSFieldLabel">{this.state.label}</label>
                 <select onChange={this.onChange} id="HSCSLang" key="HSCSLang" className="HSCSFieldInput HSCSSelect">
                        {this.getChoices()}
                    </select>
            </div>
        );
    }
}

ReactDOM.render(<RMSelect />, document.getElementById('root'));

export default (RMSelect);