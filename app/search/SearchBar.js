var React = require('react');

class SearchBar extends React.Component{

    render(){
        return(
            <div>
               <input type="text" placeholder="Search..." onChange = {this.props.searchFunction}/>
               <input type="checkbox" onChange = {this.props.inStockFunction}/>
            </div>
        )
    }
}

module.exports = SearchBar;