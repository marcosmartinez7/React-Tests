var React = require('react');
var createReactClass = require('create-react-class');

var Product = createReactClass({
    
    getInitialState(){
        return { count : 0};
    },

    buy(){
        this.setState((prevState, prevProps)=>{
            return {count: prevState.count +1 }
        });
        this.props.onBuy(this.props.price);
    },
     
    render(){
         return(
             <div>
                 <p>{this.props.name} - ${this.props.price}</p>                 
                 <button onClick={this.buy}> Buy </button>
                 <span>{this.state.count}</span>
                 <hr/>
            </div>
         )
     }
 }
);

module.exports = Product;