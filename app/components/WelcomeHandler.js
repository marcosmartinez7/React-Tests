var React = require('react');
var Welcome = require('./Welcome')

class WelcomeHandler extends React.Component{
    render(){
        let cant = this.props.cant;  
        let welcomes = [];
        for(let i=0; i<cant; i++){
            welcomes.push(<Welcome key={i} name="Pedro"/>)
        }
        return(
            <div>
              {welcomes}
            </div>
        );
    }
}

module.exports = WelcomeHandler;