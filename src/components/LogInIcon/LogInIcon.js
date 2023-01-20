import React from 'react';
import './LogInIcon.css';

const LogInIcon = ({user}) => {
  return (
    <button className="btnIcon">
      <i className="fa-solid fa-user fa-xl" style={{color: "white"}}></i>

      
        <div className={"userDot " + (user ? "userAc" : "userDeac")}>
        </div>
    
    </button>
  )
}

export default LogInIcon