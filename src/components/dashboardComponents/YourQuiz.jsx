

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const YourQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/quizzes"); 
        const data = await response.json();
        if (data.success) {
          setQuizzes(data.quizzes); 
        }
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  const handleCreateQuiz = () => {
    navigate("/CreateQuiz");
  };

  const handleEditQuiz = (quizId) => {
    navigate(`/EditQuiz/${quizId}`); 
  };

  const handleDeleteQuiz = async (quizId) => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/quizzes/${quizId}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (result.success) {
        setQuizzes(quizzes.filter((quiz) => quiz._id !== quizId)); 
        alert("Quiz deleted successfully!");
      } else {
        alert("Failed to delete quiz. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting quiz:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="p-6 flex justify-center items-center h-screen flex-col bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Create or Edit Your Quiz Here!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div
            key={quiz._id}
            className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {quiz.title}
            </h3>
            <p className="text-gray-600 mb-4">{quiz.description}</p>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleEditQuiz(quiz._id)}
                className=" flex flex-row items-center gap-x-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                  <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                  <path d="M16 5l3 3" />
                </svg>
                Edit
              </button>
              <button
                onClick={() => handleDeleteQuiz(quiz._id)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleCreateQuiz}
        className=" flex flex-row items-center gap-x-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold mt-8 transition-all duration-300 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-copy-plus"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
          <path d="M4.012 16.737a2 2 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
          <path d="M11 14h6" />
          <path d="M14 11v6" />
        </svg>
        Create Quiz
      </button>
    </div>
  );
};

export default YourQuiz;
