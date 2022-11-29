import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <button className="cart">
      <i className="cartIcon fa-solid fa-cart-shopping fa-xl"></i>
      <div className="cartNumber">
        <p className="cartQty">0</p>
      </div>
    </button>
  );
};

export default CartWidget;
