import React from "react";
import "./CheckoutPageStyles.css";
import { useDispatch, useSelector } from "react-redux";

const CheckoutPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();

  return (
    <div>
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
                        <img src={item.img} alt="" height={70}/>
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
                      className="form-control"
                      placeholder="Card Holder"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="form-group col-sm-5">
                    <label htmlFor="">Expiration Date</label>
                    <div className="input-group expiration-date">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="MM"
                        aria-label="MM"
                        aria-describedby="basic-addon1"
                      />
                      <span className="date-separator mx-2">/</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="YY"
                        aria-label="YY"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="form-group col-sm-8 mt-3">
                    <label htmlFor="card-number">Card Number</label>
                    <input
                      id="card-number"
                      type="text"
                      className="form-control"
                      placeholder="Card Number"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="form-group col-sm-4 mt-3">
                    <label htmlFor="cvc">CVC</label>
                    <input
                      id="cvc"
                      type="text"
                      className="form-control"
                      placeholder="CVC"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="form-group col-sm-12">
                    <button type="button" className="btn btn-block p-2" style={{background:"#ff5e14",color:"white"}}>
                      Proceed
                    </button>
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

export default CheckoutPage;
