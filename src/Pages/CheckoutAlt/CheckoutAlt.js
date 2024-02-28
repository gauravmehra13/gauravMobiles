import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../app/cartSlice";
import { useNavigate } from "react-router-dom";
import Confirm from "../../Components/ConfirmationPopup/Confirm";
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap modal components

const CheckoutAlt = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // Calculate the total quantity and price when cart changes
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleMakePurchase = () => {
    if (paymentMethod === "cashOnDelivery") {
      setShowModal(true); // Display modal if payment method is "Cash On Delivery"
    } else {
      navigate("/payment"); // Navigate to "/payment" if payment method is "Pay with card"
    }
  };

  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header py-3 bg-dark text-white">
              <h5 className="mb-0">Biling details</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" for="form7Example1">
                        First name
                      </label>
                      <input
                        type="text"
                        id="form7Example1"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" for="form7Example2">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="form7Example2"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" for="form7Example4">
                    Address
                  </label>
                  <input
                    type="text"
                    id="form7Example4"
                    className="form-control"
                  />
                </div>
                <div className="d-flex gap-5">
                  <div className="form-outline mb-4">
                    <label className="form-label" for="cityInput">
                      City
                    </label>
                    <input
                      type="text"
                      id="cityInput"
                      className="form-control"
                      placeholder="Enter your city"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="pincodeInput">
                      Pin Code
                    </label>
                    <input
                      type="text"
                      id="pincodeInput"
                      className="form-control"
                      placeholder="Enter your pincode"
                    />
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form7Example5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="form7Example5"
                    className="form-control"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" for="form7Example6">
                    Phone
                  </label>
                  <input
                    type="phone"
                    id="form7Example6"
                    className="form-control"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card mb-4">
            <div className="card-header py-3 bg-dark text-white">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {/* <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>$53.98</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li> */}
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center px-0"
                  >
                    {item.title} ({item.quantity})
                    <span>Rs {(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong> Total Quantity</strong>
                  </div>
                  <span>
                    <strong>{totalQuantity}</strong>
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>Rs {totalPrice}</strong>
                  </span>
                </li>
              </ul>
              {/* 
              <button type="button" className="btn btn-primary btn-lg btn-block">
                Make purchase
              </button> */}
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header py-3 bg-dark text-white">
              <h5 className="mb-0">Payment Method</h5>
            </div>
            <div className="card-body">
              <div className="d-flex gap-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    id="cashOnDelivery"
                    checked={paymentMethod === "cashOnDelivery"}
                    onChange={() => handlePaymentMethodChange("cashOnDelivery")}
                  />
                  <label className="form-check-label" htmlFor="cashOnDelivery">
                    Cash On Delivery
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    value="payWithCard"
                    id="payWithCard"
                    checked={paymentMethod === "payWithCard"}
                    onChange={() => handlePaymentMethodChange("payWithCard")}
                  />
                  <label className="form-check-label" htmlFor="payWithCard">
                    Pay with card
                  </label>
                </div>
              </div>
              <button
                onClick={handleMakePurchase}
                type="button"
                className="btn btn-light btn-lg btn-block mt-3"
                style={{ background: "#ff5e14", color: "white" }}
              >
                Make purchase
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Purchase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Confirm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Track
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CheckoutAlt;
