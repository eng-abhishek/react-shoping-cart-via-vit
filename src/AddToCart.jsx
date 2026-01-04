import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <>
      <Link to="/cart">
        <button className="btn btn-outline-light position-relative">
          <i className="bi bi-cart3 fs-5"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartSelector.length ? cartSelector.length : 0}
          </span>
        </button>
      </Link>
    </>
  );
};

export default AddToCart;
