var React = require('react');
var createReactClass = require('create-react-class');
var Product = require('./Product');
var Total = require('./Total');


var ProductList = createReactClass({
    getInitialState(){
        return {total : 0};
    },

    render(){
        let productsArray = this.props.products.map((product)=>{
            return <Product key={product.name} name={product.name} price={product.price} onBuy={this.addItem}/>
        });
       
         return(
             <div>
                {productsArray}
                <Total total={this.state.total}/>
            </div>
         )
     },

     addItem(price){
         this.setState(function(prevState, prevProps){
            return { total : prevState.total + (+price)};
         })
     }

 }
);

module.exports = ProductList;