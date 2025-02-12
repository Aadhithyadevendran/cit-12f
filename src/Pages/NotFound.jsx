import React from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-dvh gap-y-5">
      <p>Error 404, Wrong Route</p>
      <div>
        <Link
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
          to="/"
        >
          {"Go back :("}
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
