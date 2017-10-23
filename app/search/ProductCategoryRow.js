var React = require('React');

class ProductCategoryRow extends React.Component{

    render(){
        return(
            <tr>
                <td colSpan={2} style={{fontWeight: "bold"}}>
                    {this.props.category}
                </td>
            </tr>
        )
    }
}

module.exports = ProductCategoryRow;