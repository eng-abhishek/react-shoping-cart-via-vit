import AddToCart from "./AddToCart";
import img1 from "./assets/images/mouce.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { featchProducts } from "./redux/productSlice";
import Rating from "./Rating";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchProducts());
  }, []);

  const productSelector = useSelector((state) => state.products.items);
  //   const cartSelector = useSelector((state) => state.cart.items);
  const cartSelector = useSelector((state) => state.cart.items);

  //   console.log(cartSelector);

  //   console.log(cartSelector);
  return (
    <>
      <div className="container">
        <div className="row">
          {productSelector.length > 0 &&
            productSelector.map((item) => (
              <div className="col-sm-4 pt-2" key={item.id}>
                <div className="card">
                  <img src={item.thumbnail} className="card-img-top" alt="11" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <strong className="text-danger">Price: {item.price}</strong>

                    {cartSelector.some(
                      (cartItem) => cartItem.id === item.id
                    ) ? (
                      <button
                        onClick={() => dispatch(removeItem(item))}
                        className="btn btn-danger ms-5"
                      >
                        Remove From Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => dispatch(addItem(item))}
                        className="btn btn-primary ms-5"
                      >
                        Add To Cart
                      </button>
                    )}

                    {/* {cartSelector.find(
                      ((cartItem) => cartItem.id === item.id) ? (
                        <a
                          href="javaScript:void(0)"
                          className="btn btn-primary ms-5"
                        >
                          Added In Cart
                        </a>
                      ) : (
                        <a
                          href="javaScript:void(0)"
                          onClick={() => dispatch(addItem(item))}
                          className="btn btn-primary ms-5"
                        >
                          Add To Cart
                        </a>
                      )
                    )} */}
                    <Rating rating={item.rating} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Product;
