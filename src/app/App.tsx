import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { AboutUsPage } from "./screens/aboutUsPage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { BlogPage } from "./screens/blogPage";
import { HelpPage } from "./screens/helpPage";
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

function App() {
  const location = useLocation();

  const getNavbar = () => {
    if (location.pathname === "/about") {
      return <AboutUsNavbar />;
    } else if (location.pathname === "/products") {
      return <ProductsNavbar />;
    } else if (location.pathname === "/orders") {
      return <OrdersNavbar />;
    } else if (location.pathname === "/blog-page") {
      return <BlogNavbar />;
    } else if (location.pathname === "/help-page") {
      return <HelpNavbar />;
    } else if (location.pathname === "/user-page") {
      return <UserNavbar />;
    } else if (location.pathname === "/") {
      return <HomeNavbar />;
    }
  };

  return (
    <>
      {getNavbar()}
      <Switch>
        <Route path="/about">
          <AboutUsPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/blog-page">
          <BlogPage />
        </Route>
        <Route path="/help-page">
          <HelpPage />
        </Route>
        <Route path="/user-page">
          <UsersPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
