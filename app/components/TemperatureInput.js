let React = require('react');
let BoilingVeredict = require('./BoilingVeredict');


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTempChange(e);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
        <BoilingVeredict temperature={this.props.temperature} maxvalue = {this.props.maxvalue}/>
      </fieldset>
    );
  }
}

module.exports = TemperatureInput;