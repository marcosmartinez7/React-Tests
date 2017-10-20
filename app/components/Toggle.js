let React = require('react');


class Toggle extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            toggled: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    
    handleClick(){
        this.setState(function(prevState, props){
            return {
                toggled : !prevState.toggled
            }
        });
    }

    render(){
        return(
            <button onClick={this.handleClick}>{this.state.toggled ? "Si" : "No"}</button>
        );
    }

}

module.exports = Toggle;