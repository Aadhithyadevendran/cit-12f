import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDescription, setQuizDescription] = useState("");
  const [questions, setQuestions] = useState([
    {
      questionText: "",
      type: "multiple-choice",
      options: ["", "", "", ""],
      correctAnswer: "",
    },
  ]);

  const navigate = useNavigate();

  const handleQuestionChange = (index, event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][event.target.name] = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (index, optionIndex, event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options[optionIndex] = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: "",
        type: "multiple-choice",
        options: ["", "", "", ""],
        correctAnswer: "",
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const quizData = {
      title: quizTitle,
      description: quizDescription,
      questions: questions,
    };

    try {
      const response = await fetch("http://localhost:5001/api/quizzes/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quizData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Quiz created successfully!");
        navigate("/yourQuiz", { replace: true });
        setQuizTitle("");
        setQuizDescription("");
        setQuestions([
          {
            questionText: "",
            type: "multiple-choice",
            options: ["", "", "", ""],
            correctAnswer: "",
          },
        ]);
      } else {
        alert("Failed to create quiz. Please try again.");
      }
    } catch (error) {
      console.error("Error creating quiz:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
        <h2 className="text-2xl font-semibold text-center mb-4">Create a New Quiz</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700">Quiz Title:</label>
            <input
              type="text"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Quiz Description:</label>
            <textarea
              value={quizDescription}
              onChange={(e) => setQuizDescription(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md h-24"
            />
          </div>
          
          <h3 className="text-lg font-semibold">Questions</h3>
          {questions.map((question, index) => (
            <div key={index} className="space-y-3 border p-3 rounded-md">
              <div>
                <label className="block text-lg font-medium text-gray-700">Question Text:</label>
                <input
                  type="text"
                  name="questionText"
                  value={question.questionText}
                  onChange={(e) => handleQuestionChange(index, e)}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700">Question Type:</label>
                <select
                  name="type"
                  value={question.type}
                  onChange={(e) => handleQuestionChange(index, e)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                >
                  <option value="multiple-choice">Multiple Choice</option>
                </select>
              </div>

              {question.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <label className="block text-lg font-medium text-gray-700">Option {optionIndex + 1}:</label>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, optionIndex, e)}
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
              ))}

              <div>
                <label className="block text-lg font-medium text-gray-700">Correct Answer:</label>
                <input
                  type="text"
                  name="correctAnswer"
                  value={question.correctAnswer}
                  onChange={(e) => handleQuestionChange(index, e)}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <button
                type="button"
                onClick={() => handleRemoveQuestion(index)}
                className="mt-2 px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md"
              >
                Remove
              </button>
            </div>
          ))}

          <button type="button" onClick={handleAddQuestion} className="px-3 py-1 bg-green-500 text-white hover:bg-green-600 rounded-md w-full">
            Add Question
          </button>

          <button type="submit" className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md w-full">
            Submit Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateQuiz;
