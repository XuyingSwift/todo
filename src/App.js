import './App.css';
import React ,{Component} from 'react'
import Login from "./Components/Todo";
import './bootstrap.css'

class App extends Component{
    render() {
        return (
            <div className="App">
                <Login/>
            </div>
        );
    }
}

export default App;
