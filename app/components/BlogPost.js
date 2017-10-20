let React = require('react');
let UserInfo = require('./UserInfo');
let Comment = require('./Comment');


class BlogPost extends React.Component{
    render(){
        return(
            <div style={{marginBottom:'20px', marginTop: '20px'}}>
                <UserInfo user="Pedro"/>
                <Comment text="Dolore aute dolor est amet Lorem sunt Lorem esse aute nisi laborum reprehenderit veniam. Pariatur elit magna velit magna quis veniam. Officia occaecat Lorem deserunt qui reprehenderit dolor reprehenderit est est incididunt veniam minim. Fugiat reprehenderit irure qui qui voluptate. Qui excepteur tempor deserunt in. Quis Lorem aliqua ex exercitation velit esse cupidatat culpa enim fugiat in ullamco. Irure magna Lorem aliquip quis incididunt aliqua exercitation sunt." date="19/10/2017"/>
            </div>
        );
    }
}

module.exports = BlogPost;