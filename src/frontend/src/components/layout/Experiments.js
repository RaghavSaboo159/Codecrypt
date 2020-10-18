import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
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

function Experiment(){
 
    return (
      <React.Fragment>
    <p style={{fontSize:"300%" ,marginTop:"2%"}}>
        EXPERIMENTS
    </p>

<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"3%"}}>
    <Card style={{marginRight:"1rem"}}>
<iframe   height="315" src="https://www.youtube.com/embed/Ni4vb7wgmpg"  allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0" ></iframe>
<Card.Body>
    INTRODUCTION : Beginning of Encryption.
</Card.Body>
</Card>
<Card style={{marginRight:"2 rem"}}>

<iframe  height="315" src="https://www.youtube.com/embed/0Z2da9iFYDs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Card>
<Card >
<iframe  height="315" src="https://www.youtube.com/embed/nrMO0M5zpBY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Card>
</CardDeck>
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7bj8p7kzkp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"3%" , marginBottom:"3%"}}>
    <Card style={{marginRight:"1rem"}}>
    <iframe height="315" src="https://www.youtube.com/embed/7gYRa54-Wus" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<Card.Body>
    Basic Cryptography Protocols
</Card.Body>
</Card>
<Card style={{marginRight:"2 rem"}}>
<iframe height="315" src="https://www.youtube.com/embed/7bj8p7kzkp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<Card.Body>
  Crypto Soutions To Oblivious Transfers
</Card.Body>
</Card>

<Card >
<iframe height="315" src="https://www.youtube.com/embed/5c6gV4fDdu4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<Card.Body>
  Oblivious Transfers
  </Card.Body></Card>
</CardDeck>
      </React.Fragment>
    );
  
}
export default Experiment;
