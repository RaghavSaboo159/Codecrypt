import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// import {BrowserRouter as Router} from react-router-dom;
import App from "./App";
import "./i18next";
ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();
// ReactDOM.render(
//       <Suspense fallback={<div> Loading </div>}>
//     <App />,
//        </Suspense>,
//     document.getElementById("root")
//   );
