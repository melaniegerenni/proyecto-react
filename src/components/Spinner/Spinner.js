import React from "react";

const Spinner = () => {
  return (
    <div className="bg-secondary d-flex justify-content-center align-items-center w-100 h-100" style={{opacity: "0.8"}}>
      <div className="spinner-border" style={{width: "10rem", height: "10rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;