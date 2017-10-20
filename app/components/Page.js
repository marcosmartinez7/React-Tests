var React = require('react');
var WarningBanner = require('./WarningBanner');

class Page extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            showWarn : false
        }
    }

    render(){
       return(
            <div>
                <WarningBanner showWarn={this.state.showWarn}/>
                <button onClick={this.handleClick}>Click me</button>
            </div>
       );
    }

    handleClick(){
        this.setState(
            function(prevState, props){
                return {showWarn : !prevState.showWarn};
            }
        );
    }
}

module.exports = Page;