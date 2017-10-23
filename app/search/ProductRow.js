var React = require('React');

class ProductRow extends React.Component{

    render(){
        return(
            <tr>
                <td>
                    {this.props.name}
                </td>
                <td>
                    {this.props.price}
                </td>
            </tr>
        )
    }
}

module.exports = ProductRow;