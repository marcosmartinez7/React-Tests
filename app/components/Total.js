var React = require('react');
var createReactClass = require('create-react-class');

var Total = createReactClass({
    render(){
         return(
                 <h3> Total cash: {this.props.total}</h3>
         )
     }
 }
);

module.exports = Total;