import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CarritoContextProvider from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";
import LogIn from "./components/LogIn/LogIn";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";

function App() { 

  return (
    <BrowserRouter>
      <CarritoContextProvider className="App">
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryid"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
      </CarritoContextProvider>
    </BrowserRouter>
  );
}

export default App;
