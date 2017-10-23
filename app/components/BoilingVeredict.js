let React = require('react');


class BoilingVeredict extends React.Component{
    render(){
        if(this.props.temperature >= this.props.maxvalue){
            return (<p>The water would boil.</p>);
        }else{
           return (<p>The water would not boil.</p>);

        }
    }
}

module.exports = BoilingVeredict;