var React = require('react');

class Comment extends React.Component{
    render(){
        return(
            <div>
                <div style={{textAlign:'justify', fontStyle:"italic"}}>
                    {this.props.text}
                </div>
                <div style={{float:'right'}}>
                <span> {this.props.date}.</span>
                </div>
            </div>  
        );
    }
}

module.exports = Comment;