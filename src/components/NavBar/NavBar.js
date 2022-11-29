import React from "react";
import CartWidget from "../Cartwidget/CartWidget";
import "./NavBar.css";
import logoElectro from "./logoElectroOnline.svg";

const NavBar = () => {
  return (
    <nav className="navbar-dark navbar-expand-lg">
      <div className="container-fluid header d-lg-flex justify-content-lg-between">
        <a className="navbar-brand me-3" href="#">
          <img src={logoElectro} className="logoElectro" alt="" />
        </a>
        <button
          className="navbar-toggler ms-3 me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-lg-end me-3"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link activo" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categorías
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
