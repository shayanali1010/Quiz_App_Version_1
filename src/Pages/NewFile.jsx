/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";

const App = () => {
  // State variables
  const [name, setName] = useState(""); // User ka naam
  const [score, setScore] = useState(0); // User ka score
  const [questions] = useState([
    // Quiz ke questions
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question ka index
  const [userAnswer, setUserAnswer] = useState(""); // User ka input answer
  const [quizStarted, setQuizStarted] = useState(false); // Quiz shuru hua ya nahi

  // Component mount hone par pichle users ko dikhana
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length) {
      alert(`Previous users: ${users.map((user) => user.name).join(", ")}`); // Pichle users ka naam alert me dikhana
    }
  }, []);

  // User ka naam submit karne ka function
  const handleNameSubmit = (e) => {
    e.preventDefault(); // Default form submission ko rokena
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Check karna agar user already exist na kare
    if (!users.find((user) => user.name === name)) {
      users.push({ name, score: 0 }); // Naya user add karna
      localStorage.setItem("users", JSON.stringify(users)); // Local storage me store karna
      setQuizStarted(true); // Quiz shuru karna
    } else {
      alert("User already exists!"); // Agar user pehle se hai toh alert dikhana
    }
  };

  // User ka answer submit karne ka function
  const handleAnswerSubmit = (e) => {
    e.preventDefault(); // Default form submission ko rokena
    // Check karna agar answer sahi hai
    if (userAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1); // Score badhana
    }
    setUserAnswer(""); // Input field ko clear karna
    setCurrentQuestionIndex((prev) => prev + 1); // Agle question par jana
    // Agar yeh aakhri question hai toh quiz khatam karna
    if (currentQuestionIndex === questions.length - 1) finishQuiz();
  };

  // Quiz finish karne ka function
  const finishQuiz = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    // Update karna user ka score
    const updatedUsers = users.map((user) =>
      user.name === name ? { ...user, score } : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // Updated users ko local storage me store karna
    alert(`Quiz finished! Your score is: ${score}`); // Final score dikhana
    resetQuiz(); // Quiz ko reset karna
  };

  // Quiz ko reset karne ka function
  const resetQuiz = () => {
    setQuizStarted(false); // Quiz ko band karna
    setScore(0); // Score ko reset karna
    setCurrentQuestionIndex(0); // Question index ko reset karna
    setName(""); // User ka naam clear karna
  };

  return (
    <Container className="mt-5">
      <h1>Quiz App</h1>
      {!quizStarted ? ( // Agar quiz nahi shuru hua
        <Form onSubmit={handleNameSubmit}>
          <Form.Group>
            <Form.Label>Enter your name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // Input me naam set karna
              required
            />
          </Form.Group>
          <Button type="submit">Start Quiz</Button>
          {/* // Quiz shuru karne ka button */}
        </Form>
      ) : (
        // Agar quiz shuru ho chuka hai
        <div>
          <h2>Welcome, {name}!</h2>
          <p>{questions[currentQuestionIndex].question}</p>
          {/* // Current question dikhana */}
          <Form onSubmit={handleAnswerSubmit}>
            <Form.Control
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)} // User ka answer set karna
              required
            />
            <Button type="submit">Submit Answer</Button>
            {/* // Answer submit karne ka button */}
          </Form>
        </div>
      )}
    </Container>
  );
};

export default App;