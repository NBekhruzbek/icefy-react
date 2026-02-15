import { Routes, Route } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import { CartItem } from "../../../lib/types/search";
import "../../../css/products.css";

interface ProductsPageProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}

export function ProductsPage(props: ProductsPageProps) {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = props;

  return (
    <div style={{ background: "#F9E7FA" }}>
      <Routes>
        <Route index element={<Products onAdd={onAdd} />} />
        <Route
          path=":productId"
          element={
            <ChosenProduct
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />
          }
        />
      </Routes>
    </div>
  );
}
