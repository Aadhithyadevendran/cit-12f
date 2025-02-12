import React from "react";
import { Routes, Route } from "react-router-dom";
import SidebarComponent from "../components/dashboardComponents/sidenav";
import YourQuiz from "../components/dashboardComponents/YourQuiz";
import Profile from "../components/dashboardComponents/profile"; // Correct import
import TakeQuiz from "../components/dashboardComponents/TakeQuiz";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <SidebarComponent />

      <div className="flex-1 p-6 bg-gray-100">
        <Routes>
          <Route path="/" element={<TakeQuiz />} />
          <Route path="/yourQuiz" element={<YourQuiz />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
