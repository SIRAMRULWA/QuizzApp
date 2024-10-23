import React from "react";

function Result({ score, totalQuestions }) {
  const percentage = ((score / totalQuestions) * 100).toFixed(2); // Calculate percentage with 2 decimal places

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f0f8ff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ color: "#4CAF50", fontSize: "2.5rem" }}>Quiz Finished!</h2>
      <p style={{ fontSize: "1.2rem" }}>
        You scored {score} out of {totalQuestions} questions.
      </p>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        That's a {percentage}% score!
      </p>
      {percentage >= 80 && (
        <p
          style={{
            color: "#4CAF50",
            fontWeight: "bold",
            fontSize: "1.8rem",
            marginTop: "20px",
            border: "2px solid #4CAF50",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          🎉 Congratulations! You scored 80% and above! 🎉
        </p>
      )}
    </div>
  );
}

export default Result;
