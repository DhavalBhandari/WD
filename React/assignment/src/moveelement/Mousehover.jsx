import React from "react";
import { useState, useEffect } from "react";

const Mousehover = () => {
  // State to store the x and y coordinates of the mouse
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Function to update the position when the mouse moves
  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Set up an event listener for mouse movement
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: "200px",
        height: "200px",
        backgroundColor: "#7ED4AD",
        border:"25px solid #608BC1",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)", // Centers the element at the mouse
      }}
    />
  );
};

export default Mousehover;
