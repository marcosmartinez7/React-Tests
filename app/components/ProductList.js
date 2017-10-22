var React = require('react');
var createReactClass = require('create-react-class');
var Product = require('./Product');
var Total = require('./Total');


var ProductList = createReactClass({
    getInitialState(){
        return {total : 0};
    },

    render(){
         return(
             <div>
                <Product name="Android" price={120} onBuy ={this.addItem} />
                <Product name="Apple" price={110} onBuy ={this.addItem} />
                <Product name="Nokia" price={100} onBuy ={this.addItem} />
                <Total total={this.state.total}/>
            </div>
         )
     },

     addItem(price){
         this.setState(function(prevState, prevProps){
            return { total : (prevState.total + price)};
         })
     }

 }
);

module.exports = ProductList;