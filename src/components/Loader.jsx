import React from "react";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-bloom">
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
      </div>
    </div>
  );
};

export default Loader;
