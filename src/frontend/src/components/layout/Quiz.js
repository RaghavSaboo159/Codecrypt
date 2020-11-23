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
import { useTranslation } from "react-i18next";

function Quiz(){
    const { t, i18n } = useTranslation();
    return (
      <React.Fragment>
    <p style={{fontSize:"300%" ,marginTop:"2%",color:"black"}}>
    {t("navigation.3")}
    </p>

<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"3%"}}>
    <Card style={{marginRight:"1rem" , backgroundColor:"pink"}}>
  <a href="/Quiz1">
<Card.Body  style={{color:"Black" ,fontSize:"300%"}} >
{t("quiz1.topic")}
</Card.Body>
</a>
</Card>
<Card style={{marginRight:"2 rem" ,backgroundColor:"pink"}}>

<a href="/Quiz2">
<Card.Body  style={{color:"Black" ,fontSize:"300%"}} >
{t("quiz2.topic")}
</Card.Body>
</a>
</Card>
<Card style={{backgroundColor:"pink"}}>

<a href="/Quiz3">
<Card.Body  style={{color:"Black" ,fontSize:"300%"}} >
{t("quiz3.topic")}
</Card.Body>
</a>
</Card>

</CardDeck>
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7bj8p7kzkp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"3%" , marginBottom:"3%"}}>
    <Card style={{marginRight:"1rem" ,backgroundColor:"pink"}}>
 
    <a href="/Quiz4">
<Card.Body  style={{color:"Black" ,fontSize:"300%"}} >
{t("quiz4.topic")}
</Card.Body>
</a>
</Card>
<Card style={{marginRight:"2 rem", backgroundColor:"pink"}}>

<a href="/Quiz5">
<Card.Body  style={{color:"Black" ,fontSize:"300%"}} >
{t("quiz5.topic")}
</Card.Body>
</a>
</Card>
<Card style={{marginRight:"2 rem", backgroundColor:"pink"}}>

<a href="/Quiz6">
<Card.Body  style={{color:"Black" ,fontSize:"300%"}} >
{t("quiz6.topic")}
</Card.Body>
</a>
</Card>
</CardDeck>



{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7bj8p7kzkp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
<CardDeck style={{marginRight:"2rem " ,marginLeft:"2rem" ,marginTop:"3%" , marginBottom:"3%"}}>
    <Card style={{marginRight:"1rem" ,backgroundColor:"pink"}}>
 
    <a href="/Quiz7">
<Card.Body  style={{color:"Black" ,fontSize:"300%"}} >
{t("quiz7.topic")}
</Card.Body>
</a>
</Card>
<Card style={{marginRight:"2 rem", backgroundColor:"pink"}}>

<a href="/Quiz8">
<Card.Body  style={{color:"Black" ,fontSize:"300%"}} >
{t("quiz8.topic")}
</Card.Body>
</a>
</Card>
<Card style={{marginRight:"2 rem", backgroundColor:"pink"}}>

<a href="/Quiz9">
<Card.Body  style={{color:"Black" ,fontSize:"300%"}} >
{t("quiz9.topic")}
</Card.Body>
</a>
</Card>
</CardDeck>
      </React.Fragment>
    );
  
}
export default Quiz;
