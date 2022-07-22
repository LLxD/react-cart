import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const removeFromCart = (product) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  const addToCart = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="grid items-center justify-center h-screen">
      <img
        src={reactLogo}
        className="w-20 animate-spin-slow"
        alt="React logo"
      />
      <div className="grid col-span-8 grid-flow-col gap-10">
        <ProductList addToCart={addToCart} />
        <Cart removeFromCart={removeFromCart} cardProducts={products} />
      </div>
    </div>
  );
}

export default App;
