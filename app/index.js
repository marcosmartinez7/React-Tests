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


var ProductsApp = require('./components/ProductsApp');

const app7 = <ProductsApp />
ReactDOM.render(
app7,
document.getElementById('app7')
);


var Calculator = require('./components/Calculator');

const app8 = <Calculator />
ReactDOM.render(
app8,
document.getElementById('app8')
);

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

var FilterableProductTable = require('./search/FilterableProductTable');

const app9 = <FilterableProductTable products = {products} />
ReactDOM.render(
app9,
document.getElementById('app9')
);










