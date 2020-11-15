import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import "../css/Quiz.css";
function Quiz2() {
	const questions = [
		{
			questionText: ' __________ is a naming system given to different computers which adapt to human-readable domain names.',
			answerOptions: [
				{ answerText: 'HTTP', isCorrect: false },
				{ answerText: 'DNS', isCorrect: true },
				{ answerText: 'WWW', isCorrect: false  },
				{ answerText: 'ISP', isCorrect: false },
			],
		},
		{
            questionText: 'DNS stands for ____________',
			answerOptions: [
				{ answerText: 'Data Name System', isCorrect: false },
				{ answerText: 'Domain Name Server', isCorrect: false },
				{ answerText: 'Domain Name System', isCorrect: true  },
				{ answerText: 'Domain’s Naming System', isCorrect: false },
			],
		},
		{
			questionText: 'Some security issues might exist owing to misconfigured __________________ which can direct to disclosure of information regarding the domain.',
			answerOptions: [
				{ answerText: 'DNS names', isCorrect: true },
            { answerText: 'HTTP setup', isCorrect: false },
				{ answerText: 'ISP setup', isCorrect: false },
				{ answerText: 'FTP-unsecured', isCorrect: false },
			],
		},
		{
			questionText: ' ______________ is a form of nasty online attack in which a user gets redirects queries to a DNS because of override of system’s TCP/IP settings.',
			answerOptions: [
				{ answerText: 'DNS mal-functioning', isCorrect: false },
				{ answerText: 'DNS cracking', isCorrect: false },
				{ answerText: 'DNS redirecting', isCorrect: false },
				{ answerText: 'DNS hijacking', isCorrect: true },
			],
        },
        {
            questionText: ' _____________ can be attained by the use of malware or by changing the server’s settings.',
			answerOptions: [
				{ answerText: 'DNS poisoning', isCorrect: false },
				{ answerText: ' DNS cracking', isCorrect: false },
				{ answerText: ' DNS hijacking', isCorrect: true  },
				{ answerText: ' DNS redirecting', isCorrect: false },
			],
        },
        {
			questionText: 'There are _________ main types of DNS hijacking.',
			answerOptions: [
				{ answerText: '4', isCorrect: false },
				{ answerText: '2', isCorrect: true },
				{ answerText: '3', isCorrect: false  },
				{ answerText: '5', isCorrect: false },
			],
        },
        {
            questionText:' DNS trojans are used for performing a type of DNS hijacking.',
            answerOptions:[
                { answerText:'True', isCorrect:true},
                { answerText:'False', isCorrect:false},

            ]
        },
        {
			questionText: 'The _______________ matches and maps to the user friendly domain name.',
			answerOptions: [
				{ answerText: 'HTTP', isCorrect: false },
				{ answerText: 'DNS', isCorrect: true },
				{ answerText: 'WWW', isCorrect: false  },
				{ answerText: 'ISP', isCorrect: false },
			],
        },
        {
			questionText: 'Which of the following is not an example of DNS hijacking?',
			answerOptions: [
				{ answerText: 'ISP DNS hijacking', isCorrect: false },
				{ answerText: 'DNS hijacking for phishing', isCorrect: false },
				{ answerText: 'DNS hijacking for pharming', isCorrect: false },
				{ answerText: 'HTTP-based DNS hacking', isCorrect: true },
			],
        },
        {
			questionText: ' A ______________ is essentially a text file residing on the server that hosts different domain containing entries for dissimilar resource records.',
			answerOptions: [
				{ answerText: 'Zone file', isCorrect: true },
                { answerText: 'Robot file', isCorrect: false },
				{ answerText: 'Bot file', isCorrect: false },
				{ answerText: 'DNS file', isCorrect: false },
			],
        },
        {
			questionText: ' ______________ which is also termed as DNS spoofing, is a kind of attack which uses DNS based vulnerabilities for diverting the traffic of the internet.',
			answerOptions: [
				{ answerText: 'DNS poisoning', isCorrect: true },
                { answerText: 'DNS re-routing', isCorrect: false },
				{ answerText: 'DNS cracking', isCorrect: false },
				{ answerText: 'Domain link poisoning', isCorrect: false },
			],
        },
        {
			questionText: 'DNS poisoning is very dangerous because it can extend its reach from one ___________ to another.',
			answerOptions: [
				{ answerText: 'ISP server', isCorrect: false },
				{ answerText: 'DNS server', isCorrect: true },
				{ answerText: 'Linux server', isCorrect: false  },
				{ answerText: 'Domain user', isCorrect: false },
			],
        },
        {
            questionText: ' A _________________ can be poisoned if it is having an erroneous entry where the invader gets to organize the DNS server & change different kinds of information on it.',
			answerOptions: [
				{ answerText: 'Server data', isCorrect: false },
				{ answerText: ' Domain name', isCorrect: false },
				{ answerText: ' DNS cache', isCorrect: true  },
				{ answerText: ' System file', isCorrect: false },
			],
        },
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <Jumbotron style={{color:"pink", backgroundColor:"pink", height:"800px"}}>
            <div style={{color:"black", fontSize:"500%"}}>DNS Spoofing Quiz</div>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<div>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}/{questions.length}</span>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</div>
			)}
		</div>
        </Jumbotron>
	);
}
export default Quiz2;