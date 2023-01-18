import { useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const useFirebase = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    

    const getProducts = async () => {
        setLoading(true)
        try {
            const prodCol = collection(db, 'productos');
            await getDocs(prodCol).then((snapshot) => {
                if(snapshot.size === 0) {
                    console.log('base de datos está vacío');
                }
                setProductos(snapshot.docs.map((doc) => {
                    return {id:doc.id , ...doc.data()}
                }))
            })
            setLoading(false);    
        } catch (error) {
            console.log(error);
        }
    }

  return {productos, loading, getProducts}
}

export default useFirebase