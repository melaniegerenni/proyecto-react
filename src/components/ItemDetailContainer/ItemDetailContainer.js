import React from "react";
import { useParams } from "react-router-dom";
import products from "../../products.json";
import "./ItemDetailContainer.css";
import Counter from "../Counter/Counter";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [{ img, title, price, freeShip }] = products.cards.filter(
    (item) => item.id === id
  );

  return (
    <div className="itemDetail">
      <div className="divImg">
        <img src={img} alt="" />
      </div>

      <div className="divTitle">
        <div>
          <h5>{title}</h5>
          <p className="price">${price}</p>
        </div>
        <p className="textLlega">Llega {freeShip && "GRATIS"} mañana</p>
        <Counter />
        <button className="btnComprar">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
