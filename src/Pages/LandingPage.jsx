import React from "react";
import HeroSection from "../components/landingComponents/landingHero";
import Navbar from "../components/landingComponents/navbar";
import Footer from "../components/LandingComponents/footer";
import dash_img from "../assets/landing_background.webp";
import { SignInButton } from "@clerk/clerk-react";

function LandingPage() {
  return (
    <>
      <div
        className="Background"
        style={{
          backgroundColor: "white",
          height: "100vh",
          width: "100vw",
          margin: 0,
        }}
      >
        <Navbar />
        <HeroSection />
        <div className="text-center my-10 flex flex-col items-center gap-5">
          <h1 className="text-2xl font-bold text-gray-800 max-w-2xl">
            Join us to{" "}
            <span className="text-blue-800">attend, create, edit quizzes</span>,{" "}
            and sharpen your skills with{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-500 text-transparent bg-clip-text">
              Quizify
            </span>{" "}
            – your ultimate learning companion!
          </h1>
          <img
            src={dash_img}
            alt="Dashboard Design"
            className="w-4/5 max-w-4xl rounded-lg shadow-lg transition-transform hover:scale-105"
          />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default LandingPage;
