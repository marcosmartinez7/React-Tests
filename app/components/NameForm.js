var React = require('react')

class NameForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:'',
            role:''
        };
        this.submitFunction = this.submitFunction.bind(this);
        this.changeNameFunction = this.changeNameFunction.bind(this);
        this.changeRoleFunction = this.changeRoleFunction.bind(this);
        
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Previous state"+ JSON.stringify(prevState));
        console.log("Actual state"+ JSON.stringify(this.state));
        
    }

    submitFunction(event){
        console.log("Submited name: "+this.state.name);
        console.log("Submited role: "+this.state.role);
        event.preventDefault();
    }

    changeNameFunction(event){
        this.setState(
            {name: event.target.value.toLowerCase()}
        );
    }

    changeRoleFunction(event){
        this.setState(
            {role: event.target.value}  
        );
    }

    render(){
        return(
            <form onSubmit={this.submitFunction}>
                <label>Nombre:</label>
                <input id="name" type="text" onChange={this.changeNameFunction} value={this.state.name}/>
                <select value={this.state.role} onChange={this.changeRoleFunction}>
                    <option selected value="user">User</option> 
                    <option value="user">Admin</option> 
                    <option value="user">Mod</option> 
                </select>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

module.exports = NameForm;