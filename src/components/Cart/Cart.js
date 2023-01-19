import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import Counter from "../Counter/Counter";
import "./Cart.css";

const Cart = () => {
  const { carrito, deleteCarrito } = useContext(CarritoContext);
  const totalCarrito = carrito.reduce((prev,curr) => prev + (curr.cantidad * curr.price), 0);

  return (
    <div className="cartBody">
      <h2 className="text-center mb-4">Carrito</h2>
      {carrito.length > 0 ? (
        <div className="cartContainer">
          {carrito.map((item) => {
            const { id, title, price, cantidad, img } = item;
            return (
              <div key={id} className="itemCart">
                <img className="imgItem" src={img} alt="" />          
                <h6>{title}</h6>
                <p className="priceCart">${price}</p>
                <Counter item={item} initialValue={cantidad} />
                <h5 className="text-center">${price * cantidad}</h5>
                <button className="trash" onClick={() => deleteCarrito(item)}>
                  <i className="trashIcon fa-solid fa-trash fa-xl"></i>
                </button>
              </div>
            );
          })}
          <h4 className="text-end">Total: ${totalCarrito}</h4>
          <button>Checkout</button>
        </div>
      ) : (
        <h3>El carrito está vacío</h3>
      )}
    </div>
  );
};

export default Cart;
