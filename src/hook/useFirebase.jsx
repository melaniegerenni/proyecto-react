import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  getDoc,
  getDocs,
  query,
  where,
  doc,
  setDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const useFirebase = () => {
  const current = auth.currentUser;
  const [show, setShow] = useState(null);
  const [productos, setProductos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(auth.currentUser);
  const [user, setUser] = useState(current);
  const [userInfo, setUserInfo] = useState(null);

  console.log(user);
  console.log(userInfo);

  useEffect(() => {
    if (current) {
      getUser(current.uid);
    } else {
      setUser(null);
      setUserInfo(null);
    }
    return () => {};
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

  const getUser = async (id) => {
    try {
      const document = doc(db, "users", id);
      const response = await getDoc(document);
      const result = response.data();
      setUserInfo(result);
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async () => {
    const txtNombre = document.getElementById("nombre").value;
    const txtApellido = document.getElementById("apellido").value;
    const data = {
      nombre: txtNombre,
      apellido: txtApellido,
    };
    const txtEmail = document.getElementById("emailSignUp").value;
    const txtPassword = document.getElementById("passwSignUp").value;
    try {
      const usersCol = collection(db, "users");
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        txtEmail,
        txtPassword
      );
      console.log(userCredential.user.uid);
      setUser(userCredential.user);
    } catch (error) {
      console.log(error);
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
    loading,
    filtrados,
    category,
    getProducts,
    filtroCategoria,
    getUser,
    userInfo,
    createUser,
    setShow,
    show,
    logIn,
    logOut,
  };
};

export default useFirebase;
