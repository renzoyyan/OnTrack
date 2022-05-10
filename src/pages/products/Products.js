import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/global/Layout";
import ProductsCard from "../../components/products/ProductsCard";
import ProductsTable from "../../components/products/ProductsTable";
import Container from "../../components/ui/Container";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useUserAuth } from "../../context/AuthContext";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUserAuth();

  console.log(user);
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
  return (
    <Layout>
      <Container>
        <div className="flex items-center justify-between mt-8 mb-20">
          <h1 className="text-3xl text-gray-700 ">Products</h1>
          <Link
            to="/products/new"
            className="px-6 py-2 text-sm font-medium text-white transition duration-150 bg-indigo-700 rounded-md focus:ring-offset-2 ring-2 ring-indigo-700 font-open-sans hover:bg-indigo-700/95 hover:ring-indigo-700/95"
          >
            + Add Product
          </Link>
        </div>
        <ProductsTable>
          {products?.map((prod) => (
            <ProductsCard
              key={prod.id}
              name={prod.name}
              brand={prod.brand}
              category={prod.category}
              sizes={prod.sizes}
              colors={prod.colors}
              price={prod.price}
              stocks={prod.stocks}
            />
          ))}
        </ProductsTable>
        {isLoading && (
          <p className="text-sm text-center mt-20 text-gray-400">Loading..</p>
        )}

        {products.length <= 0 && !isLoading && (
          <p className="text-gray-400 text-sm font-medium text-center mt-20">
            No products found
          </p>
        )}
      </Container>
    </Layout>
  );
};

export default ProductsPage;
