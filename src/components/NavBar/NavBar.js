import React from "react";
import CartWidget from "../Cartwidget/CartWidget";
import "./NavBar.css";
import logoElectro from "./logoElectroOnline.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-dark navbar-expand-lg">
      <div className="container-fluid header d-lg-flex justify-content-lg-between">
        <div className="d-flex justify-content-between align-items-center">
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
          <NavLink className="navbar-brand me-3" to="/">
            <img src={logoElectro} className="logoElectro" alt="" />
          </NavLink>

          <CartWidget />
        </div>
        <div
          className="collapse navbar-collapse justify-content-lg-end me-3"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </NavLink>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <NavLink className="dropdown-item" to="/category/accesorios">
                    Accesorios
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/category/celulares">
                    Celulares
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/category/electrodomesticos"
                  >
                    Electrodomésticos
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/category/televisores">
                    Televisores
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
