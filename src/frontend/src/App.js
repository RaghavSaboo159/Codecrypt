import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";

import Home from "./components/layout/Home"
import Video from "./components/layout/Videos"
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

          
            </div>
          </div>
        </Router>
      </Suspense>
    );
  }
}

export default App;
