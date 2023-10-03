import React from "react";
import "./Alert.css";

const Alert = ({ message, bgColor }) => {
  console.log("Received message:", message);
  console.log("Received bgColor:", bgColor);
  return (
    <div className="alert">
      {console.log({ bgColor })}
      {bgColor === "true" ? (
        <p className="bg-danger text-light">{message}</p>
      ) : (
        <p className="bg-success text-light">{message}</p>
      )}
    </div>
  );
};

export default Alert;
