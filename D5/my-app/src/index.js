import React from 'react';
//import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import {Router, Link} from "@reach/router";
import './index.css';
import Menu from './components/Menu';
import data from "./data/recipes.json";
import * as serviceWorker from './serviceWorker';

let Home = () =><div>Home</div>;
let Dashboard = () => <div>Dashboard</div>;

const App = ({children}) => (
<div>
    <nav>
        <Link to ="/">Home</Link> 
        <Link to = "dashboard">Dashboard</Link>
    </nav>
    <Router>
        <Home path = "/"/>
        <Dashboard path = "/dashboard" />
        <Menu recipes = {data} />
    </Router>
</div>);
ReactDOM.render(<App />, document.getElementById('root'));
//render(...);
//ReactDOM.render(<Menu recipes={data} />,document.getElementById('root') );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
