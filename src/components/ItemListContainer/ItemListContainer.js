import React from "react";

const ItemListContainer = (props) => {
  const { greeting } = props;
  return <h1 className="mt-3">{greeting}</h1>;
};

export default ItemListContainer;
