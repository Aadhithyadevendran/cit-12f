import React from "react";
import { useNavigate } from "react-router-dom";
import quizImage from "../../assets/quizbg.jpg"; // Adjust the relative path

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();

  const handleTakeQuiz = () => {
    navigate("/attendQuiz", { state: { quizId: quiz._id } });
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 w-72 h-fit flex flex-col space-y-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      {/* Image inside the box */}
      <div className="w-full h-36 mb-4 overflow-hidden rounded-lg">
        <img
          src={quizImage} // Use the imported local image
          alt={quiz.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
        {quiz.title}
      </h3>
      <p className="text-gray-700 text-sm h-auto mb-4">{quiz.description}</p>

      <button
        onClick={handleTakeQuiz}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-200"
      >
        Take Quiz
      </button>
    </div>
  );
};

export default QuizCard;
