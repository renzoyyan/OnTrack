import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const productsLength = products?.length;

  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        setProducts((prev) => [...prev, { id: doc.id, ...doc.data() }]);
        setIsLoading(false);
      });
    };

    getProducts();
  }, []);

  const getCurrentProduct = async (id) => {
    const productsRef = doc(db, "products", id);
    try {
      const docSnap = await getDoc(productsRef);

      if (docSnap.exists()) {
        const data = { id: docSnap.id, ...docSnap.data() };
        navigate(`/products/edit/${id}`);
        return data;
      }
      return null;
    } catch (error) {
      console.log(error.message);
    }
  };

  return { products, isLoading, getCurrentProduct, productsLength };
};

export default useProducts;
