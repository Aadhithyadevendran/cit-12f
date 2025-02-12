import React from "react";
import { SignInButton } from "@clerk/clerk-react";
import backgroundImage from "../../assets/citbg.jpg"; // Adjust path as needed

const LandingHero = () => {
  return (
    <div 
      className="text-center flex flex-col justify-center items-center min-h-screen w-full px-5 bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-7xl font-extrabold text-white">
        Welcome to{" "}
        <span className="text-[#df654c] bg-gradient-to-r from-[#df654c] to-orange-500 bg-clip-text text-transparent">
          CIT Talos 4.0
        </span>
      </h1>
      <p className="text-3xl text-black mt-6">
        "Unlock Knowledge, One Question at a Time!"
      </p>
      <div className="mt-10 flex gap-6">
        <SignInButton
          className="px-8 py-4 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-transform transform hover:scale-105"
          mode="redirect"
          forceRedirectUrl="/dashboard"
        >
          Lets Begin
        </SignInButton>
        <button className="px-8 py-4 text-white border-2 border-white rounded-lg shadow-md hover:bg-blue-100 hover:shadow-lg transition-transform transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LandingHero;
