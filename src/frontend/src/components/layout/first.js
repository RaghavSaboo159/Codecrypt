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

import {Component} from 'react';
import axios from 'axios';


export default class first extends Component {

  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      [font-size] : "100px"
    };
      return (
        <h4 style={mystyle}>Hello, world!</h4>
      )
  }
}