
import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";

const TakeQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/quizzes/");
        const data = await response.json();
        if (data.success && data.quizzes) {
          setQuizzes(data.quizzes); 
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="flex gap-x-5 gap-y-4 flex-wrap h-full justify-start bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg border-2 border-black-800">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz._id} quiz={quiz} />
      ))}
    </div>
  );
};

export default TakeQuiz;
