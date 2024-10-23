import React from "react";
import "./Question.css"; // Ensure this is included for styles

function Question({ question, handleAnswer, selectedAnswer }) {
  return (
    <div className="question-block">
      <h2 className="welcome-title">🏡 Welcome to Sihle Quiz! 🏡</h2>
      <h3 className="question-text">{question.text}</h3>
      <p className="instruction emphasized">
        Select one option and proceed. Once selected, you cannot change your
        answer.
      </p>
      <ul className="options-container">
        {question.options.map((option, index) => {
          const isCorrect =
            selectedAnswer === option && option === question.correctAnswer;
          const isWrong =
            selectedAnswer === option && option !== question.correctAnswer;

          return (
            <li
              key={index}
              className={`option-item ${isCorrect ? "correct" : ""} ${
                isWrong ? "wrong" : ""
              }`}
            >
              <label className="custom-checkbox">
                <input
                  type="radio"
                  name="quiz-options"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswer(option)}
                  disabled={!!selectedAnswer}
                />
                {option}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Question;
