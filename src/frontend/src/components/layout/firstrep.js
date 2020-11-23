import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../css/Lab.css";
import { useHistory } from "react-router-dom";

import { Button} from 'react-bootstrap';

import {Jumbotron } from "react-bootstrap";



function firstrep(){    
  const history = useHistory();
 
  const routeChange=()=> {
    let path = `./Lab`;
    history.push(path);
  }

  const mystyle = {
      color: "black",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
  }
  
      return (
        <div>        
        <Button variant="primary" size="sm" style={{height:"100%", width:"10%"}} onClick={routeChange}>Logout</Button>{' '}
        <h4 style={mystyle}>Hello, world!</h4>
        <Jumbotron style={{color:"pink", backgroundColor:"#BEBEBE", height:"100%", width:"50%",marginLeft:"25%"}}>
        <div style={{color:"black", fontSize:"100%"}}> 
        Now as you can see you are logged into your account!
        </div>
    </Jumbotron>
    </div>

        )
  
}
export default firstrep;
