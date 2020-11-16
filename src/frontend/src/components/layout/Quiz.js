import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
// import { Carousel, Jumbotron, Figure } from "react-bootstrap";

import { Button } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

import "mdbreact/dist/css/mdb.css";

import "../css/Home.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBInput,
  MDBCardBody,
} from "mdbreact";

import emailjs from "emailjs-com";
import GoogleMapReact from "google-map-react";

function Quiz(){
 
    return (
      <React.Fragment>
    <p style={{fontSize:"300%" ,marginTop:"2%",color:"black"}}>
        QUIZZES
    </p>

<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"3%"}}>
    <Card style={{marginRight:"1rem" , backgroundColor:"pink"}}>
  
<Card.Body  style={{color:"Black" ,fontSize:"300%"}} >
Advanced Encryption Standard 
</Card.Body>
</Card>
<Card style={{marginRight:"2 rem" ,backgroundColor:"pink"}}>

<Card.Body style={{color:"Black" ,fontSize:"300%"}}>DNS Spoofing</Card.Body>
</Card>
<Card style={{backgroundColor:"pink"}}>

        <Card.Body style={{color:"Black" ,fontSize:"300%"}}>Cross Site Request Forgery</Card.Body>
</Card>

</CardDeck>
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7bj8p7kzkp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"3%" , marginBottom:"3%"}}>
    <Card style={{marginRight:"1rem" ,backgroundColor:"pink"}}>
 
<Card.Body style={{color:"Black" ,fontSize:"300%"}}>
    Cross Site Scripting
</Card.Body>
</Card>
<Card style={{marginRight:"2 rem", backgroundColor:"pink"}}>

<Card.Body style={{color:"Black" ,fontSize:"300%"}}>
  SQL Injection
</Card.Body>
</Card>

<Card style={{backgroundColor:"pink"}}>
<Card.Body>
  </Card.Body></Card>
</CardDeck>
      </React.Fragment>
    );
  
}
export default Quiz;
