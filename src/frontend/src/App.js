import React from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from "axios";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormLabel from "@material-ui/core/FormLabel";
// import StyledRadio from "@material-ui/core/Radio";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                {/* <Link to="." className="nav-link"> */}
                  SignIn
                {/* </Link> */}
              </li>
              <li className="navbar-item">
                {/* <Link to="." className="nav-link"> */}
                  SignUp
                {/* </Link> */}
              </li>
            </ul>
          </div>
        </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
