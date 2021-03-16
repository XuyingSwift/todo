import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Welcome from "./Welcome";
import LogOutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ErrorComponent from "./ErrorComponent";
import LoginComponent from "./LoginComponent";
import ListToDosComponent from "./ListToDosComponent";
import AuthenticatedRoute from "./AuthenticationRoute";



class Todo extends Component{
    render() {
        return <div className = "todo">
            <Router>
                <HeaderComponent/>
                <Switch>
                    <Route path="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <AuthenticatedRoute path="/welcome/:name" component={Welcome}/>
                    <AuthenticatedRoute  path="/todos" component={ListToDosComponent }/>
                    <Route path="/logout" component={LogOutComponent}/>
                    <Route component={ErrorComponent}/>
                </Switch>
                <FooterComponent/>
            </Router>
        </div>
    }
}

export default Todo;
