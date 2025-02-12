import React from "react";
import { Link, useLocation } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const SideNavBar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="card w-60 bg-white p-5 shadow-md shadow-purple-200/50 rounded-md h-full">
      <h1 className="text-[30px] mb-5 font-bold bg-gradient-to-r from-blue-800 to-blue-400 text-transparent bg-clip-text">
        Quizify
      </h1>
      <ul className="w-full flex flex-col gap-2">
        <Link
          to="/dashboard"
          className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap"
        >
          <button
            className={`p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-xl bg-cover ${
              isActive("/")
                ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white"
                : "text-gray-700 hover:bg-blue-200"
            } transition-all ease-linear`}
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop-analytics"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
              <path d="M7 20h10" />
              <path d="M9 16v4" />
              <path d="M15 16v4" />
              <path d="M9 12v-4" />
              <path d="M12 12v-1" />
              <path d="M15 12v-2" />
              <path d="M12 12v-1" />
            </svg>
            Dashboard
          </button>
        </Link>

        <Link
          to="/yourQuiz"
          className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap"
        >
          <button
            className={`p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-xl bg-cover ${
              isActive("/yourQuiz")
                ? "bg-gradient-to-r from-purple-400 to-purple-600 text-white"
                : "text-gray-700 hover:bg-blue-200"
            } transition-all ease-linear`}
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-bulb"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
              <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
              <path d="M9.7 17l4.6 0" />
            </svg>
            Your Quizzes
          </button>
        </Link>

        <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
          <button
            className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-xl bg-cover hover:bg-blue-200 hover:shadow-inner focus:bg-gradient-to-r from-purple-400 to-purple-600 focus:text-white text-gray-700 transition-all ease-linear"
            onClick={() => handleSignOut()}
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-logout-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
              <path d="M15 12h-12l3 -3" />
              <path d="M6 15l-3 -3" />
            </svg>
            Sign out
          </button>
        </li>

        <Link
          to="/profile"
          className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap mt-[440px]"
        >
          <button className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-xl bg-cover hover:bg-blue-200 hover:shadow-inner focus:bg-gradient-to-r from-purple-400 to-purple-600 focus:text-white text-gray-700 transition-all ease-linear">
            <UserButton />
            Profile
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default SideNavBar;
