import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);
  console.log(carrito);
  return (
    <button className="cart">
      <i className="cartIcon fa-solid fa-cart-shopping fa-xl"></i>
      <div className="cartNumber">
        <p className="cartQty">{carrito.length}</p>
      </div>
    </button>
  );
};

export default CartWidget;
