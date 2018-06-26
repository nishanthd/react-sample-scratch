import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import Profile from './components/Profile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

console.log("Hello world");

if (localStorage.getItem("username")) {
    ReactDOM.render( <Router>
        <div>
                <Route exact={true} path="/" component={App} />
                <Route path="/profile" component={Profile} />
            </div>
      </Router>, document.getElementById('root'));
} else {
    ReactDOM.render(<Login />, document.getElementById('root'));
}