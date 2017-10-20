var React = require('react');

class Avatar extends React.Component{
    render(){
        return(
            <img src={this.props.src}/>            
        );
    }
};

module.exports = Avatar;