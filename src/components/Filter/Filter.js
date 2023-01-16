import React from "react";
import "./Filter.css";

const Filter = (props) => {
  const { category /*, marcas */ } = props;

  return (
    <div>
      <h2>{category ? category.toUpperCase() : "FILTROS"}</h2>
      {/* {marcas.map((item, index) => (
        <div className="marca" key={index}>
          <input type={"checkbox"} />
          <h3>{item}</h3>
        </div>
      ))} */}
    </div>
  );
};

export default Filter;
