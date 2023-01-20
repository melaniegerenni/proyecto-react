import { useState, useEffect, useContext } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  getDoc,
  getDocs,
  query,
  where,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { GlobalContext } from "../context/GlobalContext";

const useFirebase = () => {
  const {setLoading} = useContext(GlobalContext);
  const current = auth.currentUser;
  const [show, setShow] = useState(false);
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({})
  const [filtrados, setFiltrados] = useState([]);
  const [category, setCategory] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [exito, setExito] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  useEffect(() => {
    if (current) {
      getUser(current.uid);
    } else {
      setUserInfo(null);
    }
    // eslint-disable-next-line
  }, [current]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const prodCol = collection(db, "productos");
      const data = await getDocs(prodCol);
      const response = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProductos(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (id) => {
    setLoading(true);
    try {
      const document = doc(db, "productos", id);
      const response = await getDoc(document);
      const result = response.data();
      setProducto({id,...result});
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const filtroCategoria = async (category) => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "productos"),
        where("category", "==", category)
      );
      const data = await getDocs(q);
      const response = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFiltrados(response);
      setCategory(category.charAt(0).toUpperCase() + category.slice(1));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const placeOrder = async (datos) => {
    setLoading(true);
    try {
      const ordersCol = collection(db, "orders");
      await addDoc(ordersCol, datos);
      setLoading(false);
      setExito(true);
    } catch (error) {
      console.log(error);
    }
  }

  const getUser = async (id) => {
    setLoading(true)
    try {
      const document = doc(db, "users", id);
      const response = await getDoc(document);
      const result = response.data();
      setUserInfo(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async () => {
    const txtNombre = document.getElementById("nombre").value;
    const txtApellido = document.getElementById("apellido").value;
    const txtEmail = document.getElementById("emailSignUp").value;
    const txtPassword = document.getElementById("passwSignUp").value;
    const data = {
      nombre: txtNombre,
      apellido: txtApellido,
      email: txtEmail
    };
    
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        txtEmail,
        txtPassword
      );
      await setDoc(doc(db, "users", userCredential.user.uid), data);
    } catch (error) {
      console.log(error);
    }
  };

  const logIn = async () => {
    const txtEmail = document.getElementById("emailSignIn").value;
    const txtPassword = document.getElementById("passwSignIn").value;
    try {
      await signInWithEmailAndPassword(
        auth,
        txtEmail,
        txtPassword
      );
      setErrorLogin(false);
    } catch (error) {
      console.log(error);
      setErrorLogin(true);
    }
  };

  const monitorAuthState = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  };

  useEffect(() => {
    monitorAuthState();
    return () => {};
  }, []);

  const logOut = async () => {
    await signOut(auth);
  };

  return {
    productos,
    producto,
    filtrados,
    category,
    getProducts,
    getProduct,
    filtroCategoria,
    placeOrder,
    getUser,
    userInfo,
    createUser,
    setShow,
    show,
    logIn,
    logOut,
    exito,
    errorLogin
  };
};

export default useFirebase;
