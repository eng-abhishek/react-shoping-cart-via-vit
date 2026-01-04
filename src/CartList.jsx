import { useDispatch, useSelector } from "react-redux";

export default function CartList() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);

  const handleManageQty = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="container mt-4">
        <h3 className="mb-4">Shopping Cart</h3>

        <div className="row">
          <div className="col-lg-8">
            {cartItem.map((cartListItem) => (
              <div className="card mb-3">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3">
                    <img
                      src={cartListItem.thumbnail}
                      className="img-fluid rounded-start"
                      alt={cartListItem.title}
                    />
                  </div>

                  <div className="col-md-5">
                    <div className="card-body">
                      <h6 className="card-title">{cartListItem.title}</h6>
                      <p className="text-muted mb-1">₹{cartListItem.price}</p>
                    </div>
                  </div>

                  {/* <div className="col-md-2 text-center">
                    <button className="btn btn-outline-secondary btn-sm">
                      −
                    </button>
                    <span className="mx-2">1</span>
                    <button className="btn btn-outline-secondary btn-sm">
                      +
                    </button>
                  </div> */}
                  <div className="col-md-2 text-center">
                    <input
                      type="number"
                      name="productQty"
                      id="productQty"
                      className="form-control"
                      onChange={handleManageQty}
                    />
                  </div>

                  <div className="col-md-2 text-center">
                    <button className="btn btn-danger btn-sm">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="card p-3">
              <h5>Price Details</h5>
              <hr />

              <div className="d-flex justify-content-between">
                <span>Wireless Mouse</span>
                <span>₹699</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>Bluetooth Headphones</span>
                <span>₹2,998</span>
              </div>

              <hr />

              <h6 className="d-flex justify-content-between">
                <span>Total</span>
                <span className="text-success">
                  ₹{cartItem.reduce((sum, item) => sum + item.price, 0)}
                </span>
              </h6>

              <button className="btn btn-success w-100 mt-3">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
