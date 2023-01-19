import React, { useState } from "react";
import Categoria from "./Categoria";

const MenuCategorias = (props) => {
  const { productos } = props;
  const [categorias, setCategorias] = useState([]);

  productos.forEach(({ category }) => {
    const encontrado = categorias.find((cat) => cat === category);
    if (!encontrado) {
      setCategorias([...categorias, category]);
    }
  });

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categorías
      </button>
      <ul className="dropdown-menu">
        {categorias.map((category, index) => (
          <Categoria category={category} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default MenuCategorias;
