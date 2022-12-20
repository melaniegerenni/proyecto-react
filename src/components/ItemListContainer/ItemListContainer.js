import React from "react";
import Card from "../Card/Card";
import products from "../../products.json";
import "./ItemListContainer.css";
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const {categoryid} = useParams();

  const cards = products.cards;
  const filtroCategoria = categoryid ? cards.filter(item => item.category === categoryid) : cards;

  return (
    <div className="cards">
      {filtroCategoria.map(({ id, img, title, price, freeShip }) => (
          <Card key={id} id={id} img={img} title={title} price={price} freeShip={freeShip} />
      ))}
    </div>
  );
};

export default ItemListContainer;
