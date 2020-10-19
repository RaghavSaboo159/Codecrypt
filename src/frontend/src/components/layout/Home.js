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

const AnyReactComponent = ({ text }) => <div>{text}</div>;
function sendEmail(e) {
  e.preventDefault();
  console.log("Email called");
  emailjs
    .sendForm(
      "gmail",
      "template_qg8s9nn",
      e.target,
      "user_v3Kqw0l8MNfUQCciridJ3"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully");
      },
      (error) => {
        console.log(error.text);
        alert("We are currently unavailable. Please try again in some time");
      }
    );
  e.target.reset();
}
function Home(){
 
    return (
      <React.Fragment>
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="KS1.png"
            alt="First slide"
            height="800 rem"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Info.png"
            alt="Third slide"
            height="800rem"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="b3.jpeg"
            alt="Third slide"
            height="700rem"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      <Jumbotron
        style={{
          backgroundColor: "#d6d6d4",
        }}
      >
          <p
          style={{
            
            fontSize: "200%",
            marginTop: "-2%",
            marginBottom: "2%",
          }}
        >
          EXPERIMENTS COVERED
        </p>
        <CardDeck
        style={{
          // marginRight: "36%",
          marginLeft: "2%",
          marginTop: "3%",
          marginRight:"2%",
          marginBottom: "3%",
        }}
      >
        <Card style={{height :"10rem" ,marginRight:"3rem"}}>
         
          <a href="http://localhost:3000/FAC">
            <Card.Body style={{backgroundColor:"#e8bcd8"}}>
              <p style={{ fontSize: "220%", color: "black" }}>
                {" "}
                SQL INJECTION
              </p>
              <hr></hr>
              <p style={{  color: "black" }}>
                {" "}
                SQL injection is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.
              </p>
             
            </Card.Body>
          </a>
        </Card>
        <Card style={{height :"10rem" ,marginRight:"3rem"}}>
         
          <a href="http://localhost:3000/FAC">
            <Card.Body style={{backgroundColor:"#e8bcd8"}}>
              <p style={{ fontSize: "220%", color: "black" }}>
                {" "}
                DNS spoofing
              </p>
              <hr></hr>
              <p style={{  color: "black" }}>
                {" "}
              DNS spoofing, also referred to as DNS cache poisoning, is a form of computer security hacking in which corrupt Domain Name System data is introduced into the DNS resolver's cache, causing the name server to return an incorrect result record, e.g. an IP address.
              </p>
             
            </Card.Body>
          </a>
        </Card>
        <Card style={{height :"10rem" ,marginRight:"3rem"}}>
         
          <a href="http://localhost:3000/FAC">
            <Card.Body style={{backgroundColor:"#e8bcd8"}}>
              <p style={{ fontSize: "220%", color: "black" }}>
                {" "}
                CSRF
              </p>
              <hr></hr>
              <p style={{  color: "black" }}>
                {" "}
                Cross-site request forgery (also known as CSRF) is a web security vulnerability that allows an attacker to induce users to perform actions that they do not intend to perform. It allows an attacker to partly circumvent the same origin policy, which is designed to prevent different websites from interfering with each other.
              </p>
             
            </Card.Body>
          </a>
        </Card>
        <Card style={{height :"10rem" }}>
         
          <a href="http://localhost:3000/FAC">
            <Card.Body style={{backgroundColor:"#e8bcd8"}}>
              <p style={{ fontSize: "220%", color: "black" }}>
                {" "}
                SQL INJECTION
              </p>
              <hr></hr>
              <p style={{  color: "black" }}>
                {" "}
                SQL injection is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.
              </p>
             
            </Card.Body>
          </a>
        </Card>
      
       
       
      </CardDeck>

      <CardDeck
        style={{
          // marginRight: "36%",
          marginLeft: "2%",
          marginTop: "8%",
          marginRight:"2%",
          marginBottom: "5%",
        }}
      >
        <Card style={{height :"10rem" ,marginRight:"3rem"}}>
         
          <a href="http://localhost:3000/FAC">
            <Card.Body style={{backgroundColor:"#e8bcd8"}}>
              <p style={{ fontSize: "220%", color: "black" }}>
                {" "}
                SQL INJECTION
              </p>
              <hr></hr>
              <p style={{  color: "black" }}>
                {" "}
                SQL injection is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.
              </p>
             
            </Card.Body>
          </a>
        </Card>
        <Card style={{height :"10rem" ,marginRight:"3rem"}}>
         
          <a href="http://localhost:3000/FAC">
            <Card.Body style={{backgroundColor:"#e8bcd8"}}>
              <p style={{ fontSize: "220%", color: "black" }}>
                {" "}
                SQL INJECTION
              </p>
              <hr></hr>
              <p style={{  color: "black" }}>
                {" "}
                SQL injection is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.
              </p>
             
            </Card.Body>
          </a>
        </Card>
        <Card style={{height :"10rem" ,marginRight:"3rem"}}>
         
          <a href="http://localhost:3000/FAC">
            <Card.Body style={{backgroundColor:"#e8bcd8"}}>
              <p style={{ fontSize: "220%", color: "black" }}>
                {" "}
                DDOS ATTACK
              </p>
              <hr></hr>
              <p style={{  color: "black" }}>
                {" "}
                A DDoS attack is a malicious attempt to disrupt the normal traffic of a targeted server by overwhelming the target with a flood of Internet traffic.
              </p>
             
            </Card.Body>
          </a>
        </Card>
        <Card style={{height :"10rem" }}>
         
          <a href="http://localhost:3000/FAC">
            <Card.Body style={{backgroundColor:"#e8bcd8"}}>
              <p style={{ fontSize: "220%", color: "black" }}>
                {" "}
                SQL INJECTION
              </p>
              <hr></hr>
              <p style={{  color: "black" }}>
                {" "}
                SQL injection is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.
              </p>
             
            </Card.Body>
          </a>
        </Card>
      
       
       
      </CardDeck>
        </Jumbotron>

        <Jumbotron
        style={{
          marginTop: "-3%",
          marginBottom: "-2%",
        }}
      >
        <p
          style={{
            color: "black",
            fontSize: "200%",
            marginTop: "-2%",
          }}
        >
          CONTACT US
        </p>
        <MDBContainer
          style={{
            //   backgroundColor: "black",
            marginRight: "0%",
            marginLeft: "5%",
            marginTop: "2%",
          }}
        >
          <MDBRow>
            <MDBCol md="8">
              <div style={{ marginRight: "5%" }}>
                <MDBCard>
                  <MDBCardBody>
                    <form onSubmit={sendEmail}>
                      <p className="h5 text-center mb-4">Write to us</p>
                      <div className="grey-text">
                        <MDBInput
                          name="Name"
                          label="Your name"
                          icon="user"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          containerClass="text-left"
                        />
                        <MDBInput
                          name="Email"
                          label="Your email"
                          icon="envelope"
                          group
                          type="email"
                          validate
                          error="wrong"
                          success="right"
                          containerClass="text-left"
                        />

                        <MDBInput
                          name="Message"
                          type="textarea"
                          rows="2"
                          label="Your message"
                          icon="pencil-alt"
                          containerClass="text-left"
                        />
                      </div>
                      <div className="text-center">
                        <MDBBtn outline color="info" type="submit">
                          Send
                          <MDBIcon far icon="paper-plane" className="ml-1" />
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard>
                <div style={{ height: "43vh", width: "39vw" }}>
                  <GoogleMapReact
                    // bootstrapURLKeys={{
                      // key: "AIzaSyCqLwhAw3T_ndonYW1WovillsjPttODRpY",
                    // }}
                    defaultCenter={{ lat: 17.4448, lng: 78.3498 }}
                    defaultZoom={17}
                  >
                    <AnyReactComponent
                      lat={17.4448}
                      lng={78.3498}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Jumbotron>
      </React.Fragment>
    );
  
}
export default Home;
