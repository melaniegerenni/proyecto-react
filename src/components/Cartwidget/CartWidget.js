import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);

  return (
    <button className="cart">
      <i className="cartIcon fa-solid fa-cart-shopping fa-xl"></i>

      {carrito.length > 0 ? (
        <div className="cartNumber">
          <p className="cartQty">{carrito.length}</p>{" "}
        </div>
      ) : null}
    </button>
  );
};

export default CartWidget;
