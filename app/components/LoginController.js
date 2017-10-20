let React = require('react');

class LoginController extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loggedIn : false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);  
    }

    render(){
        let logged = this.state.loggedIn;
        let button = logged ? <LogoutButton logoutFunction={this.handleLogout}/> : <LoginButton loginFunction={this.handleLogin}/>;
        return (
            <div>
                 <Greeting loggedIn = {logged}/>
                 {button}
            </div>
        );
    }

    handleLogin(){
        this.setState({loggedIn: true})
    }

    handleLogout(){
        this.setState({loggedIn: false})        
    }
}

function GuestGreeting(props){
    return <h2> Please login </h2>;
}

function UserGreeting(props){
    return <h2> Welcome </h2>
}

function Greeting(props){
    if(props.loggedIn){
        return <UserGreeting/>
    }else{
        return <GuestGreeting/>
    }
}

function LoginButton(props){
    return (
        <button onClick = {props.loginFunction}>Login</button>
    );
}

function LogoutButton(props){
    return(
        <button onClick = {props.logoutFunction}> Logout </button>
    );
}

module.exports = LoginController;