import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import products from "../../products.json";
import "./ItemListContainer.css";
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const {categoryid} = useParams();

  const [cards, setCards] = useState([]);

  const getCards = () => {
    const filtroCategoria = products.cards.filter(item => item.category === categoryid);
    filtroCategoria.length > 0 ? setCards(filtroCategoria) : setCards(products.cards);
  }

  useEffect(() => {
    getCards();
  
    return () => {
      setCards([]);
    }
  }, [categoryid])
  

  return (
    <div className="cards">
      {cards.map(({ id, img, title, price }) => (
          <Card key={id} id={id} img={img} title={title} price={price} />
      ))}
    </div>
  );
};

export default ItemListContainer;
