import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../app/cartSlice";

import "./CartpageStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
const Cartpage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const tax = (19 / 100) * totalPrice;
  const totalbill = totalPrice + tax;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart,dispatch]);

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart Items : {cart.length} </h5>
                </div>
                <div className="card-body" style={{ minHeight: "400px" }}>
                  {cart.length === 0 ? (
                    <h3>Cart is Empty...</h3>
                  ) : (
                    <>
                      {cart?.map((data) => (
                        <div className="row">
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={data.img}
                                className="w-100"
                                alt="imageMissing"
                              />
                            </div>
                          </div>

                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <p>
                              <strong>{data.title}</strong>
                            </p>

                            <button
                              type="button"
                              className="btn btn-primary btn-sm me-1 mb-2"
                              data-mdb-toggle="tooltip"
                              title="Remove item"
                              onClick={() => dispatch(removeItem(data.id))}
                            >
                              {/* <i className="fas fa-trash"></i> */}
                              <FontAwesomeIcon icon={faTrash} />
                            </button>

                            <button
                              type="button"
                              className="btn btn-danger btn-sm mb-2"
                              data-mdb-toggle="tooltip"
                              title="Move to the wish list"
                            >
                              <i className="bi bi-heart"></i>
                            </button>
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div
                              className="d-flex mb-4"
                              style={{ maxWidth: "300px" }}
                            >
                              <button
                                className="btn btn-primary px-3 me-2"
                                onClick={() =>
                                  dispatch(decreaseItemQuantity(data.id))
                                }
                              >
                                {/* <i className="fas fa-minus"></i> */}
                                <FontAwesomeIcon
                                  icon={faMinus}
                                ></FontAwesomeIcon>
                              </button>

                              <div className="form-outline">
                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={data.quantity}
                                  style={{ textAlign: "center" }}
                                  type="number"
                                  className="form-control"
                                  onChange={() => null}
                                />
                              </div>

                              <button
                                className="btn btn-primary px-3 ms-2"
                                onClick={() =>
                                  dispatch(increaseItemQuantity(data.id))
                                }
                              >
                                {/* <i className="fas fa-plus"></i> */}
                                <FontAwesomeIcon
                                  icon={faPlus}
                                ></FontAwesomeIcon>
                              </button>
                            </div>

                            <p className="text-start text-md-center">
                              <strong>Rs {data.price}</strong>
                            </p>
                          </div>
                        </div>
                      ))}
                      {/* <hr className="my-4" /> */}
                    </>
                  )}
                </div>
              </div>

              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>Rs : {totalPrice}</strong>
                      </span>
                    </li>
                  </ul>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <Link
                      to="/product"
                      type="button"
                      className="btn btn-success btn-lg "
                    >
                      Continue Shopping
                    </Link>

                    <Link
                      to="/checkout"
                      type="button"
                      className="btn btn-primary btn-lg "
                    >
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Cartpage;
