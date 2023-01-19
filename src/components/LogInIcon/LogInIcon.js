import React from 'react';
import './LogInIcon.css';

const LogInIcon = ({user}) => {
  return (
    <button className="user">
      <i className="userIcon fa-solid fa-user fa-xl"></i>

      
        <div className={"userDot " + (user ? "userAc" : "userDeac")}>
        </div>
    
    </button>
  )
}

export default LogInIcon