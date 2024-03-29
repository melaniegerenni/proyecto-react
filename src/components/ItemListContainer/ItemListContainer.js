import React, { useEffect, useContext } from "react";
import Card from "../Card/Card";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import useFirebase from "../../hook/useFirebase";
import Spinner from "../Spinner/Spinner";
import { GlobalContext } from "../../context/GlobalContext";

const ItemListContainer = () => {
  const { categoryid } = useParams();
  const { loading } = useContext(GlobalContext);
  const { productos, filtrados, category, getProducts, filtroCategoria } =
    useFirebase();

  useEffect(() => {
    if (categoryid) {
      filtroCategoria(categoryid);
    } else {
      getProducts();
    }
    // eslint-disable-next-line
  }, [categoryid]);

  const cards = categoryid ? filtrados : productos;

  return (
    <>
      {loading ? (
        <div className="body">
          <Spinner />
        </div>
      ) : (
        <div className="bodyItem">
          <h2>{categoryid ? category : "Productos"}</h2>
          <div className="cards">
            {cards.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
