import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, FormControl } from "react-bootstrap";
// import { Carousel, Jumbotron, Figure } from "react-bootstrap";

import { Button } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

import "mdbreact/dist/css/mdb.css";
import {Form} from "react-bootstrap";
// import {FormControl} from "react-bootstrap";
import "../css/Lab.css";


function Lab(){
    
return(
    <React.Fragment>
        
        <div class="login-form">
			<h1>Login Form</h1>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Enter username" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
            
		</div>
    </React.Fragment>
);
  
}
export default Lab;
