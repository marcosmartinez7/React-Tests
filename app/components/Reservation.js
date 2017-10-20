var React = require('react');

class Reservation extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            accepted: true,
            numOfGuests : 2
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        let valueProp;
        if(event.target.type === 'checkbox'){
            valueProp = event.target.checked;
        }else{
            valueProp = event.target.value;
        }
        this.setState(
            {
                [event.target.name] : valueProp
            }
        )
        // Esto es equivalente a crear un estado parcial y mandarlo a mergear
        /*
         let partialState = {};
        partialState[event.target.name] = valueProp;
        this.setState(partialState);
        */
        
    
    }

    render(){
        return(
            <form>
                 <label> accepted <input name="accepted" type="checkbox" checked={this.state.accepted} onChange={this.handleInputChange}/>
</label>
                 <label> number of guests <input name="numOfGuests" type="number" value={this.state.numOfGuests} onChange={this.handleInputChange}/>
</label>
            </form>
           
            
        );
    }
}

module.exports = Reservation;