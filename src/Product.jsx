import AddToCart from "./AddToCart";
import img1 from "./assets/images/mouce.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { featchProducts } from "./redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchProducts());
  }, []);

  const selector = useSelector((state) => state.products.items);

  console.log(selector);
  return (
    <>
      <div className="card shadow-sm mb-4 mt-6">
        <div className="row g-0 align-items-center">
          {/* RIGHT SIDE - IMAGE */}
          <div className="col-md-5 text-center">
            <img
              src={img1}
              className="img-fluid rounded-end p-3"
              alt="Product"
              style={{ height: "250px", width: "auto" }}
            />
          </div>

          {/* LEFT SIDE - DETAILS */}
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">Wireless Headphones</h5>
              <p className="card-text text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <h4 className="text-success mb-3">₹2,999</h4>

              <button
                onClick={() => dispatch(addItem(1))}
                className="btn btn-primary"
              >
                <i className="bi bi-cart-plus me-2"></i>
                Add to Cart
              </button>

              <button
                onClick={() => dispatch(removeItem(1))}
                className="btn btn-warning ms-3"
              >
                <i className="bi bi-cart-remove me-2"></i>
                Remove Item From Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
