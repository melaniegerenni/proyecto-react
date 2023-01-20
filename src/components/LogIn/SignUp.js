import React from "react";
import useFirebase from "../../hook/useFirebase";
//import './LogIn.css';

const SignUp = () => {
  const { createUser } = useFirebase();

  return (
    <div className="sign">
      <h5 className="text-center">No tenés cuenta? Registrate ahora!</h5>
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
        <input type="password" placeholder="******" id="passwSignUp" />
      </label>
      <button className="btnAzul" onClick={createUser}>Sing Up</button>
    </div>
  );
};

export default SignUp;
