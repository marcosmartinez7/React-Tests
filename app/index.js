var React = require('react');
var ReactDOM = require('react-dom');


var WelcomeHandler = require('./components/WelcomeHandler');


const element = <WelcomeHandler cant="3"/>

ReactDOM.render(
    element,
    document.getElementById('app')
);



  var App = require('./components/App');

    const app1 = <App />;    
    ReactDOM.render(
        app1,
        document.getElementById('app1')
    );

   var LoginController = require('./components/LoginController');

    const app2 = <LoginController />;    
    ReactDOM.render(
        app2,
        document.getElementById('app2')
    );

    var Page = require('./components/Page');

        const app3 = <Page />;
        ReactDOM.render(
            app3,
            document.getElementById('app3')
        );

   var NumberList = require('./components/NumberList');

   const app4 = <NumberList numbers={[1,2,3,4]}/>
   ReactDOM.render(
        app4,
        document.getElementById('app4')
    );


  var NameForm = require('./components/NameForm');

            const app5 = <NameForm />
            ReactDOM.render(
                    app5,
                    document.getElementById('app5')
                );

    

 var Reservation = require('./components/Reservation');
    
       const app6 = <Reservation />
       ReactDOM.render(
            app6,
            document.getElementById('app6')
        );

   
    






