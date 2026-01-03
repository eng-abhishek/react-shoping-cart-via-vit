import { useState } from "react";
import Header from "./Header";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { clearAllItems } from "./redux/slice";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <button
        onClick={() => dispatch(clearAllItems())}
        className="btn btn-danger ms-3"
      >
        <i className="bi bi-cart-remove me-2"></i>
        Remove All Items From Cart
      </button>
      <Product />
    </>
  );
}

export default App;
