import React, { useState } from "react";
import data from "../data";
import Question from "./Question";
import "./Quiz.css"; // Ensure you import your CSS file

function Quiz({ setScore, finishQuiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [error, setError] = useState(""); // State to track error message

  const handleAnswer = (answer) => {
    if (answer === data[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedAnswer(answer);
  };

  const nextQuestion = () => {
    if (selectedAnswer === null) {
      setError("Please select an answer before proceeding."); // Set error message
    } else {
      setError(""); // Clear error message
      if (currentQuestion + 1 < data.length) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        finishQuiz();
      }
    }
  };

  return (
    <div className="quiz-container">
      <Question
        question={data[currentQuestion]}
        handleAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
      />
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error message */}
      <button className="next-button" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default Quiz;
