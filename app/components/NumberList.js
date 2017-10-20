var React = require('react');

function ListItem(props) {
    return <li>{props.value}</li>;
  }
class NumberList extends React.Component{

    render(){
        const numbers = this.props.numbers;

        // A
        /**
         const listItems = numbers.map(
            (num) => (<li key={num.toString()}> {num} </li>)
            return (
            <ul> {listItems} </ul>
           )
        );
         */
        // B
        /**
        let listItems = [];
        numbers.forEach((number)=>{
            listItems.push(<li key={number}>{number}</li>);
            return (
                 <ul> {listItems} </ul>
             )
        })
       
         */
        //C mapeo directo retornando elemento react
        return (
            <ul>
                {numbers.map((num)=> {
                    return <li key={num}>{num}</li>
                })}
            </ul>
        )
    }
}

module.exports = NumberList;