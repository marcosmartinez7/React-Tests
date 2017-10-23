let React = require('react');
let TemperatureInput = require('./TemperatureInput');

class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.changeCelsius = this.changeCelsius.bind(this);
        this.changeFarenheit = this.changeFarenheit.bind(this);
        this.state = {temperatureC: 0, temperatureF : 0 };
     }

    toCelsius(fahrenheit) {
       return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
       return (celsius * 9 / 5) + 32;
    }

    changeCelsius(e) {
      let f = this.toFahrenheit(this.state.temperatureC);
      this.setState({temperatureC: e.target.value, temperatureF: f});
    }

     changeFarenheit(e) {
      let c = this.toCelsius(this.state.temperatureF);
      this.setState({temperatureC: c, temperatureF: e.target.value});
    }


     render() {
        const temperature = this.state.temperature;
        return (
            <div>
                 <TemperatureInput scale="c" temperature = {this.state.temperatureC} maxvalue={100} onTempChange={this.changeCelsius}/>
                 <TemperatureInput scale="f" temperature = {this.state.temperatureF} maxvalue={100} onTempChange={this.changeFarenheit}/>
            </div>
            
        );
  }
}

module.exports = Calculator;