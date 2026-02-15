import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { AboutUsPage } from "./screens/aboutUsPage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { BlogPage } from "./screens/blogPage";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import Footer from "./components/footer";
import { UsersPage } from "./screens/userPage";
import { AboutUsNavbar } from "./components/headers/AboutUsNavbar";
import { ProductsNavbar } from "./components/headers/ProductsNavbar";
import { OrdersNavbar } from "./components/headers/OrdersNavbar";
import { BlogNavbar } from "./components/headers/BlogNavbar";
import { HelpNavbar } from "./components/headers/HelpNavbar";
import { UserNavbar } from "./components/headers/UserNavbar";
import "../css/app.css";
import "../css/navbar.css";
import HelpPage from "./screens/helpPage";
import { CartItem } from "../lib/types/search";
import useBasket from "./hooks/useBasket";

function App() {
  const location = useLocation();

  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();

  const getNavbar = () => {
    if (location.pathname === "/about") {
      return (
        <AboutUsNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      );
    } else if (location.pathname === "/products") {
      return (
        <ProductsNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      );
    } else if (location.pathname === "/orders") {
      return (
        <OrdersNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      );
    } else if (location.pathname === "/blog-page") {
      return (
        <BlogNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      );
    } else if (location.pathname === "/help-page") {
      return (
        <HelpNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      );
    } else if (location.pathname === "/user-page") {
      return (
        <UserNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      );
    } else if (location.pathname === "/") {
      return (
        <HomeNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      );
    }
  };

  return (
    <>
      {getNavbar()}
      <Routes>
        <Route path="/about" element={<AboutUsPage />} />
        <Route
          path="/products/*"
          element={
            <ProductsPage
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />
          }
        />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/help-page" element={<HelpPage />} />
        <Route path="/user-page" element={<UsersPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
