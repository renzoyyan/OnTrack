import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/global/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import BrandsPage from "./pages/brands/Brands";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import NewProductPage from "./pages/products/NewProduct";
import ProductsPage from "./pages/products/Products";
import RegisterPage from "./pages/Register";
import UsersPage from "./pages/Users";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" name="Login" element={<LoginPage />} />
        <Route
          exact
          path="/signup"
          name="Register"
          element={<RegisterPage />}
        />
        <Route
          exact
          path="/dashboard"
          name="Dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/users"
          name="Users"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/products"
          name="Products"
          element={
            <PrivateRoute>
              <ProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/products/new"
          name="New Product"
          element={
            <PrivateRoute>
              <NewProductPage />
            </PrivateRoute>
          }
        />
        <Route exact path="/brands" name="Brands" element={<BrandsPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
