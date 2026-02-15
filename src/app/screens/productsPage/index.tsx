import { Routes, Route } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import { CartItem } from "../../../lib/types/search";
import "../../../css/products.css";

interface ProductsPageProps {
  onAdd: (item: CartItem) => void;
  cartItems: CartItem[];
}

export function ProductsPage(props: ProductsPageProps) {
  const { onAdd, cartItems } = props;

  return (
    <div style={{ background: "#F9E7FA" }}>
      <Routes>
        <Route index element={<Products onAdd={onAdd} />} />
        <Route
          path=":productId"
          element={<ChosenProduct onAdd={onAdd} cartItems={cartItems} />}
        />
      </Routes>
    </div>
  );
}
