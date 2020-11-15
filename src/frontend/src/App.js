import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";

import Home from "./components/layout/Home"
import Video from "./components/layout/Videos"
import Experiment from "./components/layout/Experiments"
import Quiz from"./components/layout/Quiz"
import Quiz1 from"./components/layout/Quiz1"
import Quiz2 from"./components/layout/Quiz2"
import Lab from"./components/layout/Lab"



class App extends Component {
  render() {
    return (
      <Suspense>
        <Router>
          <div className="App" style={{ height: "100%" }}>
            <NavigationBar />
            {/* <SideNavbar /> */}
            {/* <button style={{ marginTop: "-15rem" }}> HELLO </button> */}
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/Videos" component={Video} />
              <Route exact path="/Experiments" component={Experiment} />
              <Route exact path="/Quiz" component = {Quiz}/>
              <Route exact path="/Quiz1" component = {Quiz1}/>
              <Route exact path="/Quiz2" component = {Quiz2}/>
              <Route exact path="/Lab" component = {Lab}/>
              



          
            </div>
          </div>
        </Router>
      </Suspense>
    );
  }
}

export default App;
