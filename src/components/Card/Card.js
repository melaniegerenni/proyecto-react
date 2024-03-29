import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import Counter from "../Counter/Counter";
import "./Card.css";

const Card = (props) => {
  const { carrito } = useContext(CarritoContext);
  const { item } = props;
  const { id, img, title, price, stock } = item;
  const find = carrito.find((obj) => obj.id === id);
  return (
    <div className="card cardDiv cardLink">
      <Link className="link" to={`/item/${id}`}>
        <img src={img} className="card-img-top imgCard" alt="..." />
        <h5 className="card-title cardTitle">{title}</h5>
      </Link>
      <div className="card-body">
        <p className="card-text cardPrice">${price}</p>
        <Counter item={find || item} initialValue={find ? find.cantidad : 0} btnText={find ? "Actualizar carrito" : "Agregar al carrito"} />
        <p className="text-center">Disponibles: {stock}</p>
      </div>
    </div>
  );
};

export default Card;
