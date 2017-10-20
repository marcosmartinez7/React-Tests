var React = require('react');
var ReactDOM = require('react-dom');

/*
var WelcomeHandler = require('./components/WelcomeHandler');


const element = <WelcomeHandler cant="3"/>

ReactDOM.render(
    element,
    document.getElementById('app')
);

*/

/**
 * var App = require('./components/App');

    const app = <App />;    
    ReactDOM.render(
        app,
        document.getElementById('app')
    );
 */

 /**
  * var LoginController = require('./components/LoginController');

    const app = <LoginController />;    
    ReactDOM.render(
        app,
        document.getElementById('app')
    );
  */

  /**
   * var Page = require('./components/Page');

        const app = <Page />;
        ReactDOM.render(
            app,
            document.getElementById('app')
        );
   */

   /*
   var NumberList = require('./components/NumberList');

   const app = <NumberList numbers={[1,2,3,4]}/>
   ReactDOM.render(
        app,
        document.getElementById('app')
    );

   */

   /**
    *    var NameForm = require('./components/NameForm');

            const app = <NameForm />
            ReactDOM.render(
                    app,
                    document.getElementById('app')
                );

    */

/**
 *  var Reservation = require('./components/Reservation');
    
       const app = <Reservation />
       ReactDOM.render(
            app,
            document.getElementById('app')
        );
 */
   
    
        ReactDOM.render(<input value="hi" />,  document.getElementById('app'));
        
        setTimeout(function() {
          ReactDOM.render(<input value={null} />,  document.getElementById('app'));
        }, 3000);







