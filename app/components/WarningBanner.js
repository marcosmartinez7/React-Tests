var React = require('react');

class WarningBanner extends React.Component{
    render(){
        if(this.props.showWarn){
            return(
                <div style={{width:'100%',height:'50px', backgroundColor:'red'}}>
                    Warning
                </div>
            )
        }else{
            return null;
        }
       
    }
}

module.exports = WarningBanner;