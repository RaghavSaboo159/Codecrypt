import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import "../css/Quiz.css";
import { useTranslation } from "react-i18next";

function Quiz5() {
    const { t, i18n } = useTranslation();
	const questions = [
		{
			questionText:t("quiz5.Q1.ques"),
			answerOptions: [
				{ answerText: t("quiz5.Q1.a"), isCorrect: false },
				{ answerText: t("quiz5.Q1.b"), isCorrect: false },
				{ answerText: t("quiz5.Q1.c"), isCorrect: true  },
				{ answerText: t("quiz5.Q1.d"), isCorrect: false},
			],
		},
		{
            questionText:t("quiz5.Q2.ques"),
			answerOptions: [
				{ answerText: t("quiz5.Q2.a"), isCorrect: false },
				{ answerText: t("quiz5.Q2.b"), isCorrect: true },
				{ answerText: t("quiz5.Q2.c"), isCorrect: false},
				{ answerText: t("quiz5.Q2.d"), isCorrect: false},
			],
		},
		{
			questionText:t("quiz5.Q3.ques"),
			answerOptions: [
				{ answerText: t("quiz5.Q3.a"), isCorrect: false },
				{ answerText: t("quiz5.Q3.b"), isCorrect: false },
				{ answerText: t("quiz5.Q3.c"), isCorrect: false },
				{ answerText: t("quiz5.Q3.d"), isCorrect: true },
			],
		},
		{
			questionText:t("quiz5.Q4.ques"),
			answerOptions: [
				{ answerText: t("quiz5.Q4.a"), isCorrect: false },
				{ answerText: t("quiz5.Q4.b"), isCorrect: true },
				{ answerText: t("quiz5.Q4.c"), isCorrect: false  },
				{ answerText: t("quiz5.Q4.d"), isCorrect: false },
			],
        },
        {
            questionText:t("quiz5.Q5.ques"),
			answerOptions: [
				{ answerText: t("quiz5.Q5.a"), isCorrect: true },
                { answerText: t("quiz5.Q5.b"), isCorrect: false },
				{ answerText: t("quiz5.Q5.c"), isCorrect: false },
				{ answerText: t("quiz5.Q5.d"), isCorrect: false },
                
			
			],
        },
        {
			questionText:t("quiz5.Q6.ques"),
			answerOptions: [
				{ answerText: t("quiz5.Q6.a"), isCorrect: false },
				{ answerText: t("quiz5.Q6.b"), isCorrect: false },
				{ answerText: t("quiz5.Q6.c"), isCorrect: false },
				{ answerText: t("quiz5.Q6.d"), isCorrect: true },
			],
        },
        {
			questionText:t("quiz5.Q7.ques"),
			answerOptions: [
				{ answerText: t("quiz5.Q7.a"), isCorrect: false },
				{ answerText: t("quiz5.Q7.b"), isCorrect: false },
				{ answerText: t("quiz5.Q7.c"), isCorrect: false  },
				{ answerText: t("quiz5.Q7.d"), isCorrect: true },
			],
        },
        {
			questionText:t("quiz5.Q8.ques"),
			answerOptions: [
				{ answerText: t("quiz5.Q8.a"), isCorrect: false },
				{ answerText: t("quiz5.Q8.b"), isCorrect: false },
				{ answerText: t("quiz5.Q8.c"), isCorrect: true  },
				{ answerText: t("quiz5.Q8.d"), isCorrect: false },
			],
        },
        {
			questionText:t("quiz5.Q9.ques"),
			answerOptions: [
				{ answerText: t("quiz5.Q9.a"), isCorrect: false },
				{ answerText: t("quiz5.Q9.b"), isCorrect: false },
				{ answerText: t("quiz5.Q9.c"), isCorrect: true  },
				{ answerText: t("quiz5.Q9.d"), isCorrect: false },
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
            <div style={{color:"black", fontSize:"500%"}}>{t("quiz5.topic")}</div>
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
export default Quiz5;