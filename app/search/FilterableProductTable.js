var React = require('react');
var SearchBar = require('./SearchBar');
var ProductTable = require('./ProductTable');


class FilterableProductTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {products: props.products, nameFilter: "", stockOnly : false};
        this.applySearch = this.applySearch.bind(this);
        this.inStockFunction = this.inStockFunction.bind(this);
        this.filterIntersection = this.filterIntersection.bind(this);


    }

    applySearch(e){
        this.setState({nameFilter: e.target.value});
        this.filterIntersection(e.target.value, this.state.stockOnly);
    }

    inStockFunction(e){
        let stock = e.target.checked;
        this.setState({stockOnly: stock});
        this.filterIntersection(this.state.nameFilter, stock);
    }

    filterIntersection(name, stock){
         let nameProd = this.filterProductsByName(name, this.props.products);
         let stockProd = this.filterProductsByStock(stock, this.props.products);
         let intersect = nameProd.filter((n) => stockProd.includes(n))
          this.setState({products: intersect});
    }

    filterProductsByStock(stocked, prods){
        if(stocked){
            return prods.filter((p)=>{
               return p.stocked === stocked;
             });
        }else{
            return prods;
        }
       
    }
    filterProductsByName(name, prods){
        return prods.filter((p)=>{
            return p.name.startsWith(name);
        });
    }
    

    render(){
        return(
            <div>
              <SearchBar searchFunction={this.applySearch} inStockFunction={this.inStockFunction}/>
              <ProductTable products={this.state.products}/>
            </div>
        )
    }
}

module.exports = FilterableProductTable;