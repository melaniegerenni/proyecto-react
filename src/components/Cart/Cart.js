import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./Cart.css";
import useFirebase from "../../hook/useFirebase";
import ItemCart from "./ItemCart";
import SignIn from "../LogIn/SignIn";
import SignUp from "../LogIn/SignUp";
import Spinner from "../Spinner/Spinner";
import UserDetail from "./UserDetail";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const { userInfo, loading, placeOrder, exito } = useFirebase();
  const totalCarrito = carrito.reduce(
    (prev, curr) => prev + curr.cantidad * curr.price,
    0
  );
  const datos = {
    ...userInfo,
    productos: [...carrito],
  };

  const finalizar = (datos) => {
    placeOrder(datos);
    vaciarCarrito();
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : exito ? (
        <div className="d-flex flex-column align-items-center gap-3 mt-3">
        <h1 className="text-center">Compra realizada con éxito!</h1>
        <i className="checkIcon fa-solid fa-circle-check fa-4x"></i>
        <button className="btnAzul" onClick={() => navigate('/')}>Volver a comprar</button>
        </div>
      ) : (
        <div className="cartBody">
          <h2 className="text-center mb-4">Carrito</h2>
          {carrito.length > 0 ? (
            <div className="detailCart">
              <div className="cartContainer">
                {carrito.map((item) => {
                  return <ItemCart key={item.id} item={item} />;
                })}
                <div className="d-flex align-items-center justify-content-between">
                <button className="btnIcon" onClick={vaciarCarrito}><i className="fa-solid fa-trash fa-xl"></i></button>
                <h4 className="text-end">Total: ${totalCarrito}</h4>
                </div>
              </div>
              <div>
                {userInfo ? (
                  <div className="userDetail">
                    <UserDetail user={userInfo} />
                    <button
                      className="btnAzul mt-3"
                      onClick={() => finalizar(datos)}
                    >
                      Finalizar compra
                    </button>
                  </div>
                ) : (
                  <div>
                    <h6 className="text-center mt-3">
                      Inicia sesión o regístrate para finalizar la compra
                    </h6>
                    <div className="registro">
                      <SignIn />
                      <SignUp />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center gap-3">
            <h3 className="text-center">El carrito está vacío</h3>
            <i className="fa-solid fa-thumbs-down fa-4x"></i>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
