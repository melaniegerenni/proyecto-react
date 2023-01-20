import React from "react";
import useFirebase from "../../hook/useFirebase";

const SignIn = () => {
  const { logIn, errorLogin } = useFirebase();

  return (
    <form className="sign">
        <h5 className="text-center">Iniciar sesión</h5>
      <label>
        Email
        <input type="email" placeholder="me@hello.com" id="emailSignIn" />
      </label>
      <label>
        Password
        <input type="password" placeholder="******" id="passwSignIn" />
      </label>
      {errorLogin && <p className="text-danger">El email y/o la contraseña son incorrectos</p>}
      <input type="submit" value="Sign In" className="btnAzul" onClick={(e) => {
        e.preventDefault();
        logIn();
      }} />
    </form>
  );
};

export default SignIn;
