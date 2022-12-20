import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const { id, img, title, price } = props;
  return (
    <Link className={"cardLink"} to={`/item/detail/${id}`}>
      <div className="card cardDiv" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top imgCard" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${price}</p>
          <Link to="/" className="btn btn-primary">
            Agregar al carrito
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Card;
