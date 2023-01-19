import React from "react";
import useFirebase from "../../hook/useFirebase";
import Spinner from "../Spinner/Spinner";
import "./LogIn.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LogIn = () => {
  const { show, logOut, userInfo, loading } = useFirebase();

  return (
    <div className="d-flex w-100">
      {show === null ? (
        <div className="body">
          <Spinner />
        </div>
      ) : show ? (
        <>
          <SignIn />
          <SignUp />
        </>
      ) : loading ? (
        <div className="body">
          <Spinner />
        </div>
      ) : (
        <div className="logOut">
          {userInfo && <h2>Hola {userInfo.nombre}!</h2>}
          <button onClick={logOut} className="btnLogOut">
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default LogIn;
