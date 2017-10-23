var React = require('react');
var createReactClass = require('create-react-class');
var ProductList = require('./ProductList');
var Total = require('./Total');


var ProductsApp = createReactClass({

    getInitialState(){
        return {name: "", price: 0, productsArray : [{name: "Android", price: 200},{name: "Nokia", price: 100},{name: "Apple", price: 300}]};
    },

    handleCange(e){
        let who = e.target.name;
        this.setState({
            [who] : e.target.value
        });
    },

    submit(e){
        e.preventDefault();
        this.setState((prevState, prevProps) =>{
            let actualElements = prevState.productsArray;
            actualElements.push({name: this.state.name, price: this.state.price})
            return { productsArray : actualElements}
        });
    },

    render(){
         let productsArray = this.state.productsArray;
         return(
              <div>
                    <h1> Products </h1>
                    <form onSubmit ={this.submit}>
                        <input name="name" type="text" placeholder="Enter product name" onChange={this.handleCange}/>
                        <input name="price" type="number" placeholder="Enter product price" onChange={this.handleCange}/>
                        <br></br>
                        <button>Save </button>
                    </form>
                   
                    <hr/>
                     <ProductList products={productsArray} />

               </div>
         )
     }

     
 }
);

module.exports = ProductsApp;