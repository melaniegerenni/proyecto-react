import React, { useEffect } from "react";
import CartWidget from "../Cartwidget/CartWidget";
import "./NavBar.css";
import logoElectro from "./logoElectroOnline.svg";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "../../hook/useFirebase";
import MenuCategorias from "../Categorias/MenuCategorias";
import LogInIcon from "../LogInIcon/LogInIcon";

const NavBar = () => {
  const { userInfo, productos, getProducts } = useFirebase();

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <nav className="navBar">
      <NavLink className="logoApp" to="/">
        <img src={logoElectro} className="logoElectro" alt="" />
      </NavLink>
      <div className="d-flex justify-content-end gap-3">
      <MenuCategorias productos={productos} />
      <Link to="/cart">
        <CartWidget />
      </Link>
      <Link to="/login">
        <LogInIcon user={userInfo} />
      </Link>
      </div>
    </nav>
  );
};

export default NavBar;
