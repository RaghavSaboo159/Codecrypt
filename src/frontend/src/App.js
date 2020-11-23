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
import Quiz3 from"./components/layout/Quiz3"
import Quiz4 from"./components/layout/Quiz4"
import Quiz5 from"./components/layout/Quiz5"
import Quiz6 from"./components/layout/Quiz6"
import Quiz7 from"./components/layout/Quiz7"
import Quiz8 from"./components/layout/Quiz8"
import Quiz9 from"./components/layout/Quiz9"



// import Quiz2 from"./components/layout/Quiz2"

import Lab from"./components/layout/Lab"
import Labrep from"./components/layout/Labrep"

import first from "./components/layout/first"
import Labpage from "./components/layout/Labpage"
import firstrep from "./components/layout/firstrep"


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
              <Route exact path="/Quiz3" component = {Quiz3}/>
              <Route exact path="/Quiz4" component = {Quiz4}/>
              <Route exact path="/Quiz5" component = {Quiz5}/>
              <Route exact path="/Quiz6" component = {Quiz6}/>
              <Route exact path="/Quiz7" component = {Quiz7}/>
              <Route exact path="/Quiz8" component = {Quiz8}/>
              <Route exact path="/Quiz9" component = {Quiz9}/>

              <Route exact path="/Labpage" component = {Labpage}/>
              <Route exact path="/Lab" component = {Lab}/>
              <Route exact path="/Labrep" component = {Labrep}/>
              <Route exact path="/firstrep" component = {firstrep}/>

              <Route exact path="/first" component = {first}/>

              



          
            </div>
          </div>
        </Router>
      </Suspense>
    );
  }
}

export default App;
