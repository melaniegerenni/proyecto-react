import "./App.css";
import CarritoContextProvider from "./context/CarritoContext";
import GlobalContextProvider from "./context/GlobalContext";
import Rutas from "./routes/Rutas";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <GlobalContextProvider>
      <CarritoContextProvider>
        <Rutas />
      </CarritoContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
