import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../css/Lab.css";
import {Component} from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
// import React, { useState } from 'react';
// import { Jumbotron } from 'react-bootstrap';
import "../css/Quiz.css";
// import { useTranslation } from "react-i18next";


export default class Lab extends Component {
    
    
  constructor(props) {
      super(props);

      this.state = {
          username: '',
          email: ''
      }

      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChangeUsername(event) {
      this.setState({ username: event.target.value });
  }

  onChangeEmail(event) {
      this.setState({ email: event.target.value });
  }

  onSubmit(e) {
      e.preventDefault();

      const newUser = {
          username: this.state.username,
          password: this.state.email
      }
      console.log(newUser);
      axios.post('http://localhost:5000/auth', newUser,{headers: {
        "Access-Control-Allow-Origin": "*",
// 'Access-Control-Allow-Methods': 'POST'
      }
    }
)
           .then(res => {console.log(res.data);
            if(res.data=="correct")
            {
              this.props.history.push("./first");

            }
            else{
              alert("incorrect");
            }
            
          });

      this.setState({
          username: '',
          email: ''
      });
  }

  render() {
      return (
          <div>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Username: </label>
                      <input type="text" 
                            placeholder="Username"
                             className="form-control" 
                             value={this.state.username}
                             onChange={this.onChangeUsername}
                             />
                  </div>
                  <div className="form-group">
                      <label>Email: </label>
                      <input type="text" 
                             placeholder="Password"
                             className="form-control" 
                             value={this.state.email}
                             onChange={this.onChangeEmail}
                             />  
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Sign In" className="btn btn-primary"/>
                  </div>
              </form>
               <Jumbotron style={{color:"pink", backgroundColor:"#BEBEBE", height:"100%", width:"50%",marginLeft:"25%"}}>
                   <div style={{color:"black", fontSize:"100%"}}> 
                   Enter the Username as test and password as test and click on sign in
                   </div>
               </Jumbotron>

          </div>
    // <Jumbotron>

    // </Jumbotron>
      );
  }
}