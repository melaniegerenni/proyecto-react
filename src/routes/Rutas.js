import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import LogIn from "../components/LogIn/LogIn";
import Footer from "../components/Footer/Footer";

const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryid" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Rutas;
