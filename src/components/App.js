import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Profile from './Profile';

class App extends Component {

    constructor(props) {
        super(props);
    }

    Header(props) {
        return (<h1>Welcome! {localStorage.getItem('username')}</h1>);
    }

    Menu(props) {
        return (
            <ul>
                <li><a href="">Home</a></li>
                <li><div><Link to="/profile">Profile</Link></div></li>
                <li><a href="">Help</a></li>
            </ul >
        );
    }

    render() {
        return (
            <div className="centerd">
                <this.Header></this.Header>
                <this.Menu></this.Menu>
            </div>
        );
    }

}

export default App
