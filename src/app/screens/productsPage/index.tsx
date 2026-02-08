import { Routes, Route } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import "../../../css/products.css";

export function ProductsPage() {
  return (
    <div style={{ background: "#F9E7FA" }}>
      <Routes>
        <Route index element={<Products />} />
        <Route path=":productId" element={<ChosenProduct />} />
      </Routes>
    </div>
  );
}
