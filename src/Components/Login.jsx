import React, {Component} from 'react'


// create a parent class for all the buttons
// counter component

class Login extends Component{


    render() {
        return <div className = "Login">
            <LoginComponent/>
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
            showMessage: true

        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked(this)
    }
    render() {
        return(
            <div>
                <div>Invalid Credentials</div>
                <div>Login Successful</div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    loginClicked() {
        if (this.state.username === "xuying" && this.state.password === "password")
            this.setState({showMessage:true})
        this.setState({hasLoginFailed:false})
        else{
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
export default Login;
