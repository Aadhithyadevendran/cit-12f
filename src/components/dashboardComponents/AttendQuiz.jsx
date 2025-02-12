
import React, { useState, useEffect } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AttendQuiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const navigate = useNavigate();

  const handleback = () => {
    navigate("/dashboard");
  };

  const { width, height } = useWindowSize();

  const { state } = useLocation(); 
  const { quizId } = state || {}; 

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/quizzes/${quizId}`
        );
        if (response.data.success) {
          setQuiz(response.data.quiz);
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    if (quizId) {
      fetchQuiz();
    }
  }, [quizId]);

  if (!quiz) {
    return <p className="text-center text-lg font-medium">Loading quiz...</p>;
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedOption("");

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const getEmoji = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "🎉🥳";
    if (percentage >= 75) return "😊👍";
    if (percentage >= 50) return "😌👌";
    return "😢👎";
  };

  if (isQuizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <Confetti width={width} height={height} />
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Quiz Completed!
        </h1>
        <h2 className="text-xl font-medium mb-2">
          Your Score: {score}/{quiz.questions.length}{" "}
          {getEmoji(score, quiz.questions.length)}
        </h2>
        <p className="text-gray-600 mb-6">Thank you for taking the quiz!</p>
        <button
          onClick={handleback}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-dvh flex-col max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">{quiz.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-sm text-gray-500 mb-4">
          Question {currentQuestionIndex + 1} of {quiz.questions.length}
        </p>
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          {currentQuestion.questionText}
        </h3>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <label
              key={index}
              className={`block border rounded-lg px-4 py-2 cursor-pointer ${
                selectedOption === option
                  ? option === currentQuestion.correctAnswer
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="hidden"
              />
              {option}
            </label>
          ))}
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendQuiz;
