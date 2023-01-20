import React, { createContext, useState } from "react";

export const CarritoContext = createContext("");

const CarritoContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addCarrito = (item) => {
    const encontrado = carrito.find((obj) => obj.id === item.id);
    const i = carrito.indexOf(encontrado);
    if (encontrado) {
      carrito[i].cantidad = item.cantidad;
      setCarrito([...carrito]);
    } else if(item.cantidad > 0) {
      setCarrito([...carrito, item]);
    }
  };

  const deleteCarrito = (item) => {
      const encontrado = carrito.find((obj) => obj.id === item.id);
      const i = carrito.indexOf(encontrado);
      if(encontrado) {
        carrito.splice(i, 1);
        setCarrito([...carrito])
      }
  };

  const vaciarCarrito = () => {
    if(carrito.length > 0){
      setCarrito([]);
    }
  }

  return (
    <CarritoContext.Provider value={{ carrito, addCarrito, deleteCarrito, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider;
