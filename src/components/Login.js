import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './App.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ username: event.target.value })
    }

    submit(e) {
        localStorage.setItem('username', this.state.username);
        ReactDOM.render(<App />, document.getElementById('root'));
    }

    LoginButton(props) {
        return (
            <button onClick={props.onClick} className="btn btn-primary btn-lg btn-block" style={{ marginTop: '5px' }} >Login</button>
        );
    }


    render() {
        return (
            <div className="col-md-3 centerd">
                <form>
                    Username <input className="form-control" value={this.state.username} onChange={this.handleChange} type="text" />
                    Password <input className="form-control" type="password" />
                    <this.LoginButton onClick={(e) => this.submit(e)} />
                </form>
            </div>
        );
    }
}

export default Login;