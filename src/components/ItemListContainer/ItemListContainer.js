import React from "react";
import Card from "../Card/Card";
import products from "../../products.json";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoryid } = useParams();

  const cards = products.cards;
  const filtroCategoria = categoryid
    ? cards.filter((item) => item.category === categoryid)
    : cards;

  return (
    <div className="cards">
      {filtroCategoria.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemListContainer;
