import React from "react";
import useFirebase from "../../hook/useFirebase";

const SignIn = () => {
  const { logIn } = useFirebase();

  return (
    <div className="sign">
        <h5>Iniciar sesión</h5>
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
  );
};

export default SignIn;
