import React, {useState} from "react";
import useFirebase from "../../hook/useFirebase";

const SignUp = () => {
const [alert, setAlert] = useState(false);
  const { createUser } = useFirebase();

  const showAlert = () => {
    setAlert(true);
  };

  return (
    <form className="sign">
      <h5 className="text-center">No tenés cuenta? Registrate ahora!</h5>
      <label>
        Nombre <span className="text-danger">*</span>
        <input type="text" placeholder="nombre" id="nombre" required={true}/>
      </label>
      <label>
        Apellido <span className="text-danger">*</span>
        <input type="text" placeholder="apellido" id="apellido" required={true}/>
      </label>
      <label>
        Email <span className="text-danger">*</span>
        <input type="email" placeholder="me@hello.com" id="emailSignUp" required={true}/>
      </label>
      <label>
        Password <span className="text-danger">*</span>
        <input
          type="password"
          placeholder="******"
          id="passwSignUp"
          required={true}
        />
        {alert && <small className="d-block text-danger">Mínimo 6 caractéres</small>}
      </label>
      <input
        type="submit"
        value="Sign Up"
        className="btnAzul"
        onClick={(e) => {
          e.preventDefault();
          if(document.getElementById("passwSignUp").value.length < 6){
            showAlert();
          }
          createUser();
        }}
      />
      <p className="text-danger">* Campos obligatorios</p>
    </form>
  );
};

export default SignUp;
