import React, { createContext, useState } from "react";

export const CarritoContext = createContext("");

const CarritoContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addCarrito = (item) => {
    const encontrado = carrito.find((obj) => obj.id === item.id);
    const i = carrito.indexOf(encontrado);
    console.log(encontrado);
    console.log(i);
    if (encontrado) {
      const i = carrito.indexOf(encontrado);
      carrito[i].cantidad = item.cantidad;
    } else {
      setCarrito([...carrito, item]);
    }
  };

  return (
    <CarritoContext.Provider value={{ carrito, addCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider;
