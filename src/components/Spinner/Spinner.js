import React from "react";

const Spinner = () => {
  return (
    <div className="bg-light d-flex justify-content-center align-items-center w-100 h-50" style={{opacity: "0.8"}}>
      <div className="spinner-border" style={{width: "5rem", height: "5rem", margin: "2rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;