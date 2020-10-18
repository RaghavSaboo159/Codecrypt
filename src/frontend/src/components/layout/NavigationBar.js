import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import axios from "axios";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
// import ls from "local-storage";

import { useTranslation } from "react-i18next";

function NavigationBar() {
  const [scrolled, setScrolled] = useState(0);
  const [query,setQuery] = useState("");
  const[queryResult,setQueryResult] = useState("");

  const { t, i18n } = useTranslation();
  const history = useHistory();
  // const routeChange = () =>{
  //   console.log("1")
  //   console.log(query)
  //   let path = "/search" + query;
  //   console.log(path)
  //   history.push(path);
  // }
  function searchFunction()
  {
    console.log("callled")
    setQuery(document.getElementById("queryform").value)
    let path = "/search/" + document.getElementById("queryform").value
    // console.log(document.getElementById("queryform").value)
    // axios
    // .get('http://localhost:5000/api/factories/search',{params:{query :document.getElementById("queryform").value}})
    // .then((res) => console.log(res.data))
    // .catch((error) => console.log(error));
    // console.log(queryResult)
    // let path = "/search/" + 
    history.push(path);

    // routeChange()
   

  }
  function searchFunction1()
  {
    console.log("callled")
    setQuery(document.getElementById("queryform1").value)
    let path = "/search/" + document.getElementById("queryform1").value
    // console.log(document.getElementById("queryform").value)
    // axios
    // .get('http://localhost:5000/api/factories/search',{params:{query :document.getElementById("queryform").value}})
    // .then((res) => console.log(res.data))
    // .catch((error) => console.log(error));
    // console.log(queryResult)
    // let path = "/search/" + 
    history.push(path);

    // routeChange()
   

  }
  function handleClick() {
    i18n.changeLanguage(t("ChangeLang.1"));
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
    // setScrolled(window.scrollY);
    // console.log(window.scrollY)
    // console.log(scrolled);
    // console.log(window.pageYOffset);
    if (window.scrollY > 120) setScrolled(1)
    if (window.scrollY <= 120) setScrolled(0)
    
// console.log("!")
    // const prev = flagID;
   
    // if (flagID != prev) setviewport(mapdata.maps[flagID - 1]);
// 
    });
  });
  return (
    <React.Fragment>
    <Navbar
      sticky="top"
      bg="dark"
      variant="dark"
    >
     
      <Navbar.Brand href="/">KnowledgeSecure</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Factories">About</Nav.Link>
        <Nav.Link href="/Videos">Videos</Nav.Link>
        <Nav.Link href="/Experiments">Experiments</Nav.Link>
        <Nav.Link href="#pricing">Quizzes</Nav.Link>
  
      </Nav>
    </Navbar>

  
    
   
   
   
  

    </React.Fragment>

   
  );
}

export default NavigationBar;
