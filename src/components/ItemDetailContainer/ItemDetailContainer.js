import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import Counter from "../Counter/Counter";
import useFirebase from "../../hook/useFirebase";
import Spinner from "../Spinner/Spinner";
import { CarritoContext } from "../../context/CarritoContext";

const ItemDetailContainer = () => {
  const { carrito } = useContext(CarritoContext);
  const { id } = useParams();
  const { producto, getProduct, loading } = useFirebase();
  const { img, title, price, logo, stock } = producto;

  const prodCarrito = carrito.find((item) => item.id === id);

  useEffect(() => {
    getProduct(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <div className="body">
          <Spinner />
        </div>
      ) : (
        <div className="itemDetail">
          <div className="divImg">
            <img src={img} alt="" />
          </div>

          <div className="divTitle">
            <img src={logo} alt="" />
            <h5>{title}</h5>
            <p className="price">${price}</p>
            <Counter
              item={producto}
              initialValue={prodCarrito ? prodCarrito.cantidad : 0}
            />
            <p className="text-center">Disponibles: {stock}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
