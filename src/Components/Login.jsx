import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

class Login extends Component{


    render() {
        return <div className = "Login">
            <Router>
                <Route path="/" exact component={LoginComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/welcome" component={WelcomeComponent}/>
            </Router>
        </div>
    }
}

class LoginComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            hasLoginFailed: false,
            showMessage: false

        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    render() {
        return(
            <div>
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showMessage && <div>Login Successful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    loginClicked() {
        if (this.state.username === "xuying" && this.state.password === "password") {
            this.setState({showMessage:true})
            this.setState({hasLoginFailed:false})
        } else {
            this.setState({showMessage:false})
            this.setState({hasLoginFailed:true})
        }


    }

    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }
}

class WelcomeComponent extends Component{
    render() {
        return <div> Welcome to Vi-project</div>
    }
}


export default Login;
