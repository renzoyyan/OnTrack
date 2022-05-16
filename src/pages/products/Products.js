import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/global/Layout";
import ProductsCard from "../../components/products/ProductsCard";
import ProductsTable from "../../components/products/ProductsTable";
import Container from "../../components/ui/Container";

import useProducts from "../../utils/product";

const ProductsPage = () => {
  const { products, isLoading, getCurrentProduct } = useProducts();

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
              id={prod.id}
              name={prod.name}
              brand={prod.brand}
              category={prod.category}
              sizes={prod.sizes}
              colors={prod.colors}
              price={prod.price}
              stocks={prod.stocks}
              release_date={prod.release_date}
              editProduct={() => getCurrentProduct(prod.id)}
            />
          ))}
        </ProductsTable>
        {isLoading && (
          <p className="mt-20 text-sm text-center text-gray-400">Loading..</p>
        )}

        {products.length <= 0 && !isLoading && (
          <p className="mt-20 text-sm font-medium text-center text-gray-400">
            No products found
          </p>
        )}
      </Container>
    </Layout>
  );
};

export default ProductsPage;
