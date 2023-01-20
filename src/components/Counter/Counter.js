import React, { useContext, useState, useEffect } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./Counter.css";

const Counter = (props) => {
  const { carrito, addCarrito, deleteCarrito } = useContext(CarritoContext);
  const { item, initialValue, btnText } = props;
  const [counter, setCounter] = useState(initialValue);
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    if(counter === item.cantidad){
      setEnable(false);
    }
    // eslint-disable-next-line
  }, [carrito])
  
  const suma = () => {
    if(counter < item.stock){
      const newCounter = counter + 1
      setCounter(newCounter);
      if(newCounter === item.cantidad || newCounter === 0){
        setEnable(false);
      } else {
        setEnable(true)
      }
    }
  };

  const resta = () => {
    if (counter > 0) {
      const newCounter = counter - 1
      setCounter(newCounter);
      if(newCounter === item.cantidad || newCounter === 0){
        setEnable(false);
      } else {
        setEnable(true)
      }
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
      <div>
      {(initialValue > 0 && counter === 0) ?  
      <button className="btnAgregar eliminar" onClick={() => deleteCarrito(producto)}>
       Eliminar del carrito
      </button>
      : 
      <button className={enable ? "btnAgregar" : "btnDis"} onClick={() => addCarrito(producto)} disabled={!enable}>
        {btnText}
      </button>
      }
      </div>
    </div>
  );
};

export default Counter;
