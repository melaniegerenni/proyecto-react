import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const { id, img, title, price, freeShip } = props;
  return (
    <Link className={"cardLink"} to={`/item/${id}`}>
      <div className="card cardDiv">
        <img src={img} className="card-img-top imgCard" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${price}</p>
          <p className="textLlega">Llega {freeShip && "GRATIS"} mañana</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
