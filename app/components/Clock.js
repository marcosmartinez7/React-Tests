let React = require('react');
let FormattedDate = require('./FormattedDate')

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }

    componentDidMount(){
        console.log("Clock mount");
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
        
    }


    componentWillUnmount(){
        Console.log("Clock unmount")
        clearInterval(this.timerId);
    }

    /*
        Cada vez que cambie el state del reloj, en este caso el atributo "date" se va 
        llamar al render, entonces va a volver a renderizar el FormattedDate porque
        este tuvo un cambio en sus props.
    */

    render(){
        return(
            <div style={{marginBottom:'20px', textAlign:'right'}}>
                <FormattedDate date={this.state.date}/>
            </div>
        );
    }
}

module.exports = Clock;