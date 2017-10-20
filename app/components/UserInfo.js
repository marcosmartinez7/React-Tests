var React = require('react');
var Avatar = require('./Avatar');


class UserInfo extends React.Component{
    render(){
        return(
            <div style={{textAlign:'center'}}>
                <div>
                    <Avatar src="https://cdn3.iconfinder.com/data/icons/medical-avatars/128/13-128.png"/> 
                </div>
                <div style={{textAlign:'center'}}>
                    <span style={{fontWeight:'bold'}} >{this.props.user}</span>
                </div>
            </div>
        )
    }
}

module.exports = UserInfo;