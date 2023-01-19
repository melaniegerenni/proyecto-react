import React from "react";
import { NavLink } from "react-router-dom";

const Categoria = (props) => {
  const { category } = props;

  return (
    <li>
      <NavLink className="dropdown-item" to={`/category/${category}`}>
        {category.toUpperCase()}
      </NavLink>
    </li>
  );
};

export default Categoria;
