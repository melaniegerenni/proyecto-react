import React, { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export const GlobalContext = createContext("");

const GlobalContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showToast = (text, type) => {
    const datos = {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    };

    if(type === "success") {
      return toast.success(text, datos);
    } else if (type === "info") {
      return toast.info(text, datos);
    }
  }
    

  return (
    <GlobalContext.Provider value={{ loading, setLoading, showToast }}>
      <ToastContainer />
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
