import { useSelector } from "react-redux";

const AddToCart = () => {
  const selector = useSelector((state) => state.cart.value);

  return (
    <>
      <button className="btn btn-outline-light position-relative">
        <i className="bi bi-cart3 fs-5"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {selector}
        </span>
      </button>
    </>
  );
};

export default AddToCart;
