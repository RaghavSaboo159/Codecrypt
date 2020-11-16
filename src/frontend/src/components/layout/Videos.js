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

function Video(){
 
    return (
      <React.Fragment>
     {/* <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/> */}
<img src="v1.png" width="100%" height="700rem"></img>


<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"5%"}}>
    <Card style={{marginRight:"1rem"}}>
<iframe   height="315" src="https://www.youtube.com/embed/IeibsR-saH0" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
<Card.Body  style={{color:"black"}}>
Introduction to Quantum Computing-Part I
</Card.Body>
</Card>
<Card style={{marginRight:"2 rem"}}>

<iframe  height="315" src="https://www.youtube.com/embed/FvARB99hDc0" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
        <Card.Body  style={{color:"black"}}>
Introduction to Quantum Computing-Part II
</Card.Body>
        
</Card>
<Card >
<iframe  height="315" src="https://www.youtube.com/embed/5uky3CiGfi0" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
        <Card.Body  style={{color:"black"}}>
   
        Representing Qubit States
</Card.Body>
</Card>
</CardDeck>





<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"5%"}}>
    <Card style={{marginRight:"1rem"}}>
<iframe   height="315" src="https://www.youtube.com/embed/XwmP4ymXRvE" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
<Card.Body  style={{color:"black"}}>
Single Qubit Gate
</Card.Body>
</Card>
<Card style={{marginRight:"2 rem"}}>

<iframe  height="315" src="https://www.youtube.com/embed/o8N0Iclnw58" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
        <Card.Body  style={{color:"black"}}>
        Rotational Operators
</Card.Body>
        
</Card>
<Card >
<iframe  height="315" src="https://www.youtube.com/embed/s4fjVb4D2y8" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
        <Card.Body  style={{color:"black"}}>
   
        Multi-Qubit States
</Card.Body>
</Card>
</CardDeck>




<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"5%"}}>
    <Card style={{marginRight:"1rem"}}>
<iframe   height="315" src="https://www.youtube.com/embed/nChKUbVVFlo" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
<Card.Body  style={{color:"black"}}>
Classical computation on Quantum Computer
</Card.Body>
</Card>
<Card style={{marginRight:"2 rem"}}>

<iframe  height="315" src="https://www.youtube.com/embed/gbg4gB9C4dU" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
        <Card.Body  style={{color:"black"}}>
        Quantum Foureir Transform Part-I
</Card.Body>
        
</Card>
<Card >
<iframe  height="315" src="https://www.youtube.com/embed/UFnp6wYa-gI" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
        <Card.Body  style={{color:"black"}}>
        Quantum Foureir Transform Part-II
</Card.Body>
</Card>
</CardDeck>





<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"5%"}}>
    <Card style={{marginRight:"1rem"}}>
<iframe   height="315" src="https://www.youtube.com/embed/nveFTcRt-5c" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
<Card.Body  style={{color:"black"}}>
Quantum Key Distribution
</Card.Body>
</Card>
<Card style={{marginRight:"2 rem"}}>

<iframe  height="315" src="https://www.youtube.com/embed/4GQrMzep-ZU"  allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
        <Card.Body  style={{color:"black"}}>
        Quantum Phase Estimation
</Card.Body>
        
</Card>
<Card >
<iframe  height="315" src="https://www.youtube.com/embed/uRpD7hcHybg" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
        <Card.Body  style={{color:"black"}}>
        Noisy vs Noiseless channels
</Card.Body>
</Card>
</CardDeck>








<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"5%"}}>
    <Card style={{marginRight:"1rem"}}>
<iframe   height="315" src="https://www.youtube.com/embed/Ni4vb7wgmpg" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
<Card.Body  style={{color:"black"}}>
    INTRODUCTION : Beginning of Encryption.
</Card.Body>
</Card>
<Card style={{marginRight:"2 rem"}}>

<iframe  height="315" src="https://www.youtube.com/embed/0Z2da9iFYDs" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
        
</Card>
<Card >
<iframe  height="315" src="https://www.youtube.com/embed/nrMO0M5zpBY" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        Representing qubit states msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
        <Card.Body  style={{color:"black"}}>
    Primitive Ciphers
</Card.Body>
</Card>
</CardDeck>
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7bj8p7kzkp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"3%" , marginBottom:"3%"}}>
    <Card style={{marginRight:"1rem"}}>
    <iframe height="315" src="https://www.youtube.com/embed/7gYRa54-Wus" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
<Card.Body  style={{color:"black"}}>
    Basic Cryptography Protocols
</Card.Body>
</Card>
<Card style={{marginRight:"2 rem"}}>
<iframe height="315" src="https://www.youtube.com/embed/7bj8p7kzkp4" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
<Card.Body  style={{color:"black"}}>
  Crypto Soutions To Oblivious Transfers
</Card.Body>
</Card>

<Card >
<iframe height="315" src="https://www.youtube.com/embed/5c6gV4fDdu4" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"frameborder="0"></iframe>
<Card.Body  style={{color:"black"}}>
  Oblivious Transfers
  </Card.Body></Card>
</CardDeck>
      </React.Fragment>
    );
  
}
export default Video;
