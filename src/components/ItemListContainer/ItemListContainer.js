import React, { useEffect } from "react";
import Card from "../Card/Card";
// import products from "../../products.json";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import useFirebase from "../../hook/useFirebase";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = () => {
  const { categoryid } = useParams();
  const { productos, loading, getProducts } = useFirebase();

  useEffect(() => {
    getProducts();
  }, []);

  const cards = productos;
  const filtroCategoria = categoryid
    ? cards.filter((item) => item.category === categoryid)
    : cards;

  /* let marcas = filtroCategoria.map(item => item.marca);
  marcas = marcas.filter((item, index) => marcas.indexOf(item) === index); */

  return (
    <>
      {loading ? (
        <div className="body">
          <Spinner />
        </div>
      ) : (
        <div className="cards">
          {filtroCategoria.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
