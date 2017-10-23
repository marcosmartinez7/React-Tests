var React = require('react');
var ProductCategoryRow = require('./ProductCategoryRow');
var ProductRow = require('./ProductRow');


class ProductTable extends React.Component{

    render(){
        let lastCategory = null;
        let tableRows = [];
        this.props.products.forEach((product)=>{
            if(lastCategory !== product.category){
                lastCategory = product.category;
                tableRows.push(<ProductCategoryRow key={lastCategory} category={lastCategory}/>);
            }
            tableRows.push(<ProductRow key ={product.name} name={product.name} stocked ={product.stocked} price ={product.price}/>);
        });
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        )
    }
}

module.exports = ProductTable;