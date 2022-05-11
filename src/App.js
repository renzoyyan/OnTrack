import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./components/global/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import BrandsPage from "./pages/brands/Brands";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import EditProductPage from "./pages/products/EditProduct";
import NewProductPage from "./pages/products/NewProduct";
import ProductsPage from "./pages/products/Products";
import RegisterPage from "./pages/Register";
import UsersPage from "./pages/Users";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/signup" element={<RegisterPage />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
          <Route exact path="/users" element={<UsersPage />} />
          <Route exact path="/products" element={<ProductsPage />} />
          <Route exact path="/products/new" element={<NewProductPage />} />
          <Route
            exact
            path="/products/edit/:id"
            element={<EditProductPage />}
          />
          <Route exact path="/brands" element={<BrandsPage />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
