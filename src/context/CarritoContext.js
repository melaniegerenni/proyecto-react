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
    } else {
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

  return (
    <CarritoContext.Provider value={{ carrito, addCarrito, deleteCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider;
