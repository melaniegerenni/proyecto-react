import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-50" style={{backgroundColor: "white"}}>
      <div className="spinner-border" style={{width: "5rem", height: "5rem", margin: "3rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;