let React = require('react');
let BlogPost = require('./BlogPost');
let Clock = require('./Clock');
let Toggle = require('./Toggle');


class App extends React.Component{
    render(){
        let allPosts = [];
        for(let i=0; i<4; i++){
            allPosts.push(<BlogPost key={i}/>);
        }
        return(
            <div>
                <Toggle />
                <Clock />
                {allPosts}
            </div>
        );
    }
}

module.exports = App;