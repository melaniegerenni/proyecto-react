import React, { useContext } from "react";
import useFirebase from "../../hook/useFirebase";
import Spinner from "../Spinner/Spinner";
import "./LogIn.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { GlobalContext } from "../../context/GlobalContext";

const LogIn = () => {
  const { loading } = useContext(GlobalContext);
  const { show, logOut, userInfo } = useFirebase();

  return (
    <div>
      {show ? (
        <div className="registro">
          <SignIn />
          <SignUp />
        </div>
      ) : loading ? (
        <Spinner />
      ) : (
        <div className="logOut">
          {userInfo && <h2>Hola {userInfo.nombre}!</h2>}
          <button onClick={logOut} className="btnAzul px-3 m-3">
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default LogIn;
