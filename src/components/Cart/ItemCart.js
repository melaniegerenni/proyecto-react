import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import Counter from "../Counter/Counter";

const ItemCart = (props) => {
  const { deleteCarrito } = useContext(CarritoContext);
  const { item } = props;
  const { img, title, price, cantidad } = item;
  return (
    <div className="itemCart">
      <img className="imgItem" src={img} alt="" />
      <h6 className="titleItem">{title}</h6>
      <p className="priceCart">${price}</p>
      <div className="counterItem"><Counter item={item} initialValue={cantidad} btnText="Actualizar" /></div>
      <h5 className="itemTotal text-center">${price * cantidad}</h5>
      <button className="btnIcon" onClick={() => deleteCarrito(item)}>
        <i className="fa-solid fa-trash fa-xl text-danger" ></i>
      </button>
    </div>
  );
};

export default ItemCart;
