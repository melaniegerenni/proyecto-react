import React from "react";

const UserDetail = (props) => {

    const {user} = props;
    const {nombre, apellido, email} = user;
  return (
    <div>
      <h4 className="font-weight-bold">Mis datos</h4>
      <h5>Nombre: {nombre}</h5>
      <h5>Apellido: {apellido}</h5>
      <h5>Email: {email}</h5>
    </div>
  );
};

export default UserDetail;
