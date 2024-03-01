import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, clearCart } from "../../app/cartSlice";
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
  const [paymentMethodError, setPaymentMethodError] = useState("");
  const [showSpinner, setShowSpinner] = useState(false); // State to control spinner visibility

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pincode: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pincode: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message for the field being changed
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleMakePurchase = () => {
    const formErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim().length < 5) {
        formErrors[key] = `${key} must be at least 5 characters`;
      }
    });

    if (!/^\d{10}$/.test(formData.phone.trim())) {
      formErrors.phone = "Phone number must be 10 digits";
    }

    if (
      !/^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test(
        formData.email.trim()
      )
    ) {
      formErrors.email = "Enter a valid email address";
    }

    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      if (paymentMethod === "") {
        setPaymentMethodError("Please select a payment method");
      } else if (paymentMethod === "cashOnDelivery") {
        setShowSpinner(true); // Show the spinner
        setTimeout(() => {
          setShowSpinner(false); // Hide the spinner after 5 seconds
          setShowModal(true); // Show the modal
        }, 5000);
      } else {
        navigate("/payment");
      }
    }
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setPaymentMethodError(""); // Clear any previous errors
  };

  // Generate random order number
  const generateOrderNumber = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let result = "";
    for (let i = 0; i < 3; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result;
  };

  const orderNumber = generateOrderNumber(); // Generate order number

  return (
    <div className="container mt-5 mb-5">
      {showSpinner && (
        <div className="overlay">
          <div class="loading"></div>
          <h4 className="text-white"> Processing...</h4>
        </div>
      )}

      <div className="row ">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header py-3 bg-dark text-white">
              <h5 className="mb-0">Biling Details</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="firstName">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={`form-control ${
                          errors.firstName ? "is-invalid" : ""
                        }`}
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">
                          {errors.firstName}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="lastName">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={`form-control ${
                          errors.lastName ? "is-invalid" : ""
                        }`}
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className={`form-control ${
                      errors.address ? "is-invalid" : ""
                    }`}
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>
                <div className="d-flex gap-5">
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="cityInput">
                      City
                    </label>
                    <input
                      type="text"
                      id="cityInput"
                      name="city"
                      className={`form-control ${
                        errors.city ? "is-invalid" : ""
                      }`}
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && (
                      <div className="invalid-feedback">{errors.city}</div>
                    )}
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="pincodeInput">
                      Pin Code
                    </label>
                    <input
                      type="text"
                      id="pincodeInput"
                      name="pincode"
                      className={`form-control ${
                        errors.pincode ? "is-invalid" : ""
                      }`}
                      value={formData.pincode}
                      onChange={handleChange}
                    />
                    {errors.pincode && (
                      <div className="invalid-feedback">{errors.pincode}</div>
                    )}
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
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
                    className={`form-check-input ${
                      paymentMethodError ? "is-invalid" : ""
                    }`}
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
                    className={`form-check-input ${
                      paymentMethodError ? "is-invalid" : ""
                    }`}
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
              {paymentMethodError && (
                <div className="invalid-feedback d-block">
                  {paymentMethodError}
                </div>
              )}

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
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
          setFormData({
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            pincode: "",
            email: "",
            phone: "",
          });
          dispatch(clearCart());
        }}
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: "37px" }}>
            Purchase Confirmed
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Confirm
            name={`${formData.firstName} ${formData.lastName}`}
            address={formData.address}
            orderNumber={orderNumber}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => navigate("/track")}>
            Track
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CheckoutAlt;
