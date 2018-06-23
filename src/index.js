import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './login';

console.log("Hello world");

if (localStorage.getItem("username")) {
    ReactDOM.render(<App />, document.getElementById('root'));
} else {
    ReactDOM.render(<Login />, document.getElementById('root'));
}