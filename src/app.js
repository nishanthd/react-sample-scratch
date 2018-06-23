import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="centerd">
                <h1>Welcome! {localStorage.getItem('username')}</h1>
            </div>
        );
    }

}

export default App