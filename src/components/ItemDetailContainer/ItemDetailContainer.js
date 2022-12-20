import React from "react";
import { useParams } from "react-router-dom";
import products from "../../products.json";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [{ img, title, price }] = products.cards.filter(
    (item) => item.id === id
  );

  console.log(title);

  return (
    <div className="itemDetail">
      <div className="divImg">
        <img src={img} alt="" />
      </div>

      <div className="divTitle">
        <h5>{title}</h5>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
