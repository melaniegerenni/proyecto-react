import React, { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./Counter.css";

const Counter = (props) => {
  const { addCarrito, deleteCarrito } = useContext(CarritoContext);
  const { item, initialValue } = props;
  const [counter, setCounter] = useState(initialValue);


  const suma = () => {
    setCounter(counter + 1);
  };

  const resta = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const producto = {
    ...item,
    cantidad: counter,
  };

  return (
    <div className="divAgregar">
      <div className="divCounter">
        <button onClick={resta} className="btnCounter">
          -
        </button>
        <p>{counter}</p>
        <button onClick={suma} className="btnCounter">
          +
        </button>
      </div>
      {(initialValue > 0 && counter === 0) ?  
      <button className="btnAgregar eliminar" onClick={() => deleteCarrito(producto)}>
       Eliminar del carrito
      </button>
      : 
      <button className="btnAgregar" onClick={() => addCarrito(producto)}>
       Agregar al carrito
      </button>
      }
    </div>
  );
};

export default Counter;
