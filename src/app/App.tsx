import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { AboutUsPage } from "./screens/aboutUsPage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { BlogPage } from "./screens/blogPage";
import { HelpPage } from "./screens/helpPage";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import { UsersPage } from "./screens/userPage";
import "../css/app.css";
import "../css/navbar.css";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
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
