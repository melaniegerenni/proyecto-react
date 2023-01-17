import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import Counter from "../Counter/Counter";
import './Cart.css';

const Cart = () => {
  const { carrito } = useContext(CarritoContext);
 
  return (
    <div>
      <h2>Carrito</h2>
      {carrito.length > 0 ? <ul>
        {carrito.map((item) => {
          const { id, title, price, cantidad } = item;
          return (
            <li key={id} className="itemCart">
              <h4>{title}</h4> 
              <p className="priceCart">${price}</p>
              <Counter item={item} initialValue={cantidad} btnText="Actualizar carrito" />
              <h5>${price*cantidad}</h5>
            </li>
          );
        })}
      </ul> : <h3>El carrito está vacío</h3>}
    </div>
  );
};

export default Cart;
