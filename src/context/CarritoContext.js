import React, { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";
import { GlobalContext } from "./GlobalContext";

export const CarritoContext = createContext("");

const CarritoContextProvider = ({ children }) => {
  const {showToast} = useContext(GlobalContext);
  const [carrito, setCarrito] = useState([]);

  const addCarrito = (item) => {
    const encontrado = carrito.find((obj) => obj.id === item.id);
    const i = carrito.indexOf(encontrado);
    if (encontrado) {
      carrito[i].cantidad = item.cantidad;
      setCarrito([...carrito]);
      showToast("Se actualizó el item!", "success");
    } else if (item.cantidad > 0) {
      setCarrito([...carrito, item]);
      showToast("Se agregó el item!", "success");
    }
  };

  const deleteCarrito = (item) => {
    const encontrado = carrito.find((obj) => obj.id === item.id);
    const i = carrito.indexOf(encontrado);
    if (encontrado) {
      carrito.splice(i, 1);
      setCarrito([...carrito]);
      showToast("Se eliminó el item", "info");
    }
  };

  const vaciarCarrito = () => {
    if (carrito.length > 0) {
      Swal.fire({
        title: "Seguro quieres vaciar el carrito?",
        icon: "question",
        //iconColor: "#FF0000",
        showCancelButton: true,
        confirmButtonColor: "#001833",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sí!",
      }).then((result) => {
        if (result.isConfirmed) {
          setCarrito([]);
          Swal.fire({
            title: "Se ha vaciado el carrito",
            icon: "success",
            confirmButtonColor: "#001833"
          });
        }
      });
    }
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, addCarrito, deleteCarrito, vaciarCarrito, setCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider;
