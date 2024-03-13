import React, { useState } from "react";
import "./PaymentPageStyles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const navigate = useNavigate();

  const [cardHolder, setCardHolder] = useState("");
  const [expirationMM, setExpirationMM] = useState("");
  const [expirationYY, setExpirationYY] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCVC] = useState("");
  const [formError, setFormError] = useState("");
  const [processingPayment, setProcessingPayment] = useState(false); // State for showing the spinner

  const isFormValid = () => {
    return (
      cardHolder.trim().split(" ").length === 2 &&
      expirationMM.length === 2 &&
      expirationYY.length === 2 &&
      cardNumber.replace(/\s/g, "").length === 16 &&
      cvc.length === 3
    );
  };

  const handlePay = () => {
    if (isFormValid()) {
      setProcessingPayment(true);
      setTimeout(() => {
        setProcessingPayment(false);
        // dispatch(clearCart());
        navigate("/track");
      }, 5000);
    } else {
      setFormError("Please fill in the form correctly");
    }
  };
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 16);
    value = value.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(value);
  };

  const handleExpirationMMChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 2);
    setExpirationMM(value);
  };

  const handleExpirationYYChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 2);
    setExpirationYY(value);
  };

  const handleCVCChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCVC(value);
  };

  return (
    <div>
      {processingPayment && (
        <div className="overlay">
          <div class="loading"></div>
          <h4 className="text-white"> Processing Payment...</h4>
        </div>
      )}
      <main className="page payment-page">
        <section className="payment-form">
          <div className="container">
            <div className="block-heading">
              <h1>Payment</h1>
              {/* <p>
                Complete the payment
              </p> */}
            </div>
            <form>
              <div className="products">
                <h3 className="title">Checkout</h3>

                {cart.length === 0 ? (
                  <h3>Cart is Empty...</h3>
                ) : (
                  <>
                    {cart.map((item, intex) => (
                      <div className="item">
                        <span className="price">Rs {item.price}</span>
                        <img src={item.img} alt="" height={70} />
                        <p className="item-name">{item.title}</p>
                        <p className="item-description">
                          Quantity : {item.quantity}
                        </p>
                      </div>
                    ))}
                  </>
                )}
                <div className="total">
                  Total Items<span className="price">{totalQuantity}</span>
                </div>

                <div className="total">
                  Total Price<span className="price">Rs {totalPrice}</span>
                </div>
              </div>
              <div className="card-details">
                <h3 className="title">Credit Card Details</h3>
                <div className="row">
                  <div className="form-group col-sm-7">
                    <label htmlFor="card-holder">Card Holder</label>
                    <input
                      id="card-holder"
                      type="text"
                      className={`form-control ${
                        formError && !cardHolder.trim().includes(" ")
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Card Holder"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-sm-5">
                    <label htmlFor="">Expiration Date</label>
                    <div className="input-group expiration-date">
                      <input
                        type="text"
                        className={`form-control ${
                          formError && expirationMM.length !== 2
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="MM"
                        value={expirationMM}
                        onChange={handleExpirationMMChange}
                      />
                      <span className="date-separator mx-2">/</span>
                      <input
                        type="text"
                        className={`form-control ${
                          formError && expirationYY.length !== 2
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="YY"
                        value={expirationYY}
                        onChange={handleExpirationYYChange}
                      />
                    </div>
                  </div>
                  <div className="form-group col-sm-8 mt-3">
                    <label htmlFor="card-number">Card Number</label>
                    <input
                      id="card-number"
                      type="text"
                      className={`form-control ${
                        formError && cardNumber.replace(/\s/g, "").length !== 16
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Card Number"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                    />
                  </div>
                  <div className="form-group col-sm-4 mt-3">
                    <label htmlFor="cvc">CVC</label>
                    <input
                      id="cvc"
                      type="password"
                      className={`form-control ${
                        formError && cvc.length !== 3 ? "is-invalid" : ""
                      }`}
                      placeholder="CVC"
                      value={cvc}
                      onChange={handleCVCChange}
                    />
                  </div>
                  <div className="form-group col-sm-12">
                    <button
                      type="button"
                      onClick={handlePay}
                      className="btn btn-block px-3"
                      style={{ background: "#ff5e14", color: "white" }}
                    >
                      Pay
                    </button>
                    {formError && (
                      <div className="invalid-feedback">{formError}</div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentPage;
