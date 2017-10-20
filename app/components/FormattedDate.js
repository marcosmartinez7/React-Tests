let React = require('react');

class FormattedDate extends React.Component{
    
    render(){
        return(
          <span>Actual time: {this.props.date.toLocaleTimeString()}</span>
        );
    }
}

module.exports = FormattedDate;