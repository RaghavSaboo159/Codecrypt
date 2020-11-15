import React,{useState} from "react";
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

function Quiz1(){
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionnum, setQuestionNum] = useState(1);
    const [showScore, setShowScore] = useState(false);

    const question_data = [
		{
            question_id :1,
			questionText: 'What is a naming system given to different computers which adapt to human-readable domain names.',
			answerOptions: [
				{ answerText: 'HTTP', isCorrect: false },
				{ answerText: 'DNS', isCorrect: true },
				{ answerText: 'WWW', isCorrect: false  },
				{ answerText: 'ISP', isCorrect: false },
			],
		},
		{
            question_id :2,
			questionText: 'DNS stands for ______',
			answerOptions: [
				{ answerText: 'Data Name System', isCorrect: false },
				{ answerText: 'Domain Name Server', isCorrect: false },
				{ answerText: 'Domain Name System', isCorrect: true  },
				{ answerText: 'Domain’s Naming System', isCorrect: false },
			],
		},
		{
            question_id :3,
			questionText: 'Some security issues might exist owing to misconfigured __________________ which can direct to disclosure of information regarding the domain.',
			answerOptions: [
				{ answerText: 'DNS names', isCorrect: true },
            { answerText: 'HTTP setup', isCorrect: false },
				{ answerText: 'ISP setup', isCorrect: false },
				{ answerText: 'FTP-unsecured', isCorrect: false },
			],
		},
		
    ];
    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < question_data.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    // const question_data = {
    //     questions: [
    //       {
    //         n:1,
    //         q:"What is a naming system given to different computers which adapt to human-readable domain names.",
    //         a:"HTTP",
    //         b:"DNS",
    //         c:"WWW",
    //         d:"ISP",
    //         ans:"b",
    //       },
    //       {
    //         n:2,
    //         q:"DNS stands for ______",
    //         a:"Data Name System",
    //         b:"Domain Name Server",
    //         c:"Domain Name System",
    //         d:"Domain’s Naming System",
    //         ans:"c",
    //       },
    //       {
    //         n:3,
    //         q:"Some security issues might exist owing to misconfigured __________________ which can direct to disclosure of information regarding the domain.",
    //         a:"DNS names",
    //         b:"HTTP setup",
    //         c:"ISP setup",
    //         d:"FTP-unsecured",
    //         ans:"a",
    //       },
    //     ],
    //   };
 
//     return (
//         <React.Fragment>
//     <div style={{fontSize:"300%" ,marginTop:"2%"}}>
//         DNS Spoofing Quiz
//     </div>
//      <div>
//     {question_data.map((question) => {
//          if( question.question_id == questionnum  )
//          return(
//             <div> 
//                 {question.questionText}
//                 <form>

//                 </form>
//             </div>
//          )
    

//         {question.answerOptions.map((answerOption) => (
//             <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
//         ))}
    


      
//          })};
// </div> 
// </React.Fragment>
//     );
return(
    <React.Fragment>
        <div >
            {question_data[currentQuestion].questionText}</div>
            <div >
						{question_data[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
    </React.Fragment>
)
  
}
export default Quiz1;
