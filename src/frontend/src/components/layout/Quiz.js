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
    <p style={{fontSize:"300%" ,marginTop:"2%"}}>
        EXPERIMENTS
    </p>

<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"3%"}}>
    <Card style={{marginRight:"1rem"}}>
    <iframe  height="315" src="https://www.youtube.com/embed/40CbxiIbz3U" frameborder="0"allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
{/* <iframe   height="315" src="https://www.youtube.com/watch?v=40CbxiIbz3U"  allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0" ></iframe> */}
<Card.Body>
    DDOS Attack
</Card.Body>
</Card>
<Card style={{marginRight:"2 rem"}}>
<iframe  height="315" src="https://www.youtube.com/embed/m0ZO3OoCpxU" frameborder="0" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
<Card.Body>DNS Spoofing</Card.Body>
</Card>
<Card >
<iframe  height="315" src="https://www.youtube.com/embed/8gYFbBSkh24" frameborder="0" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
        <Card.Body>Cross Site Request Forgery</Card.Body>
</Card>

</CardDeck>
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7bj8p7kzkp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"3%" , marginBottom:"3%"}}>
    <Card style={{marginRight:"1rem"}}>
    <iframe  height="315" src="https://www.youtube.com/embed/5wG1yLrpprc" frameborder="0" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
<Card.Body>
    Cross Site Scripting
</Card.Body>
</Card>
<Card style={{marginRight:"2 rem"}}>
<iframe  height="315" src="https://www.youtube.com/embed/ZjEJxn_aGdo" frameborder="0" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
<Card.Body>
  SQL Injection
</Card.Body>
</Card>

<Card >
<Card.Body>
  </Card.Body></Card>
</CardDeck>
      </React.Fragment>
    );
  
}
export default Quiz;
