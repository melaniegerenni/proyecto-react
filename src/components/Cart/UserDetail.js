import React from "react";

const UserDetail = (props) => {
  const { user } = props;
  const { nombre, apellido, email } = user;
  return (
    <div className="w-100">
      <h4>Mis datos</h4>
      <div className="bg-light mt-2 p-2 w-100">
        <h5>Nombre: {nombre}</h5>
        <h5>Apellido: {apellido}</h5>
        <h5>Email: {email}</h5>
      </div>
    </div>
  );
};

export default UserDetail;
