import React from "react";
import { SignInButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "transparent",
        color: "white",
        marginTop: 0,
      }}
    >
      <div style={{ fontSize: "30px", fontWeight: "bold", color: "black" }}>
        Quiz<span style={{ color: "#4a88d9" }}>ify</span>
      </div>

      <div>
        <SignInButton
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#4a88d9",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          className="hover:bg-blue-700 hover:scale-105 transition-transform"
          mode="redirect"
          forceRedirectUrl="/dashboard"
        />
       
      </div>
    </nav>
  );
};

export default Navbar;
