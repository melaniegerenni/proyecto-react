import React, { useEffect } from "react";
import useFirebase from "../../hook/useFirebase";
import Spinner from "../Spinner/Spinner";
import "./LogIn.css";

const LogIn = () => {
  const { createUser, show, logIn, logOut } = useFirebase();


  return (
    <div className="d-flex w-100">
      {show === null ? (
        <div className="body">
          <Spinner />
        </div>
      ) : show ? (
        <>
          <div className="d-flex flex-column">
            <label>
              Email
              <input type="email" placeholder="me@hello.com" id="emailSignIn" />
            </label>
            <label>
              Password
              <input type="password" placeholder="****" id="passwSignIn" />
            </label>
            <button onClick={logIn}>Sign In</button>
          </div>

          <div className="d-flex flex-column">
            <label>
              Nombre
              <input type="text" placeholder="nombre" id="nombre" />
            </label>
            <label>
              Apellido
              <input type="text" placeholder="apellido" id="apellido" />
            </label>
            <label>
              Email
              <input type="email" placeholder="me@hello.com" id="emailSignUp" />
            </label>
            <label>
              Password
              <input type="password" placeholder="****" id="passwSignUp" />
            </label>
            <button onClick={createUser}>Sing Up</button>
          </div>
        </>
      ) : (
        <button onClick={logOut}>Log Out</button>
      )}
    </div>
  );
};

export default LogIn;
