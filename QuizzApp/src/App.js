import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import data from "./data";
import "./App.css"; // Make sure to include your styles here

function App() {
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const totalQuestions = data.length; // Get total number of questions from the data

  return (
    <div className="App">
      <h1 className="app-title">Join the Sihle Quiz!</h1>
      {!isQuizFinished ? (
        <Quiz setScore={setScore} finishQuiz={() => setIsQuizFinished(true)} />
      ) : (
        <Result score={score} totalQuestions={totalQuestions} />
      )}
    </div>
  );
}

export default App;
