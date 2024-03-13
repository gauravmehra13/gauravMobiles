import React, { useState, useEffect } from "react";
import "./Track.css";
import { useSelector } from "react-redux";
const Track = () => {
  const { cart, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const [progress, setProgress] = useState(0);

  const generateRandomString = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const currentDate = new Date().toLocaleDateString();
  const orderNumber = generateRandomString(6);

  useEffect(() => {
    const orderTime = new Date();
    const shippedTime = new Date(orderTime.getTime() + 5 * 60000); // 5 minutes later
    const onTheWayTime = new Date(orderTime.getTime() + 30 * 60000); // 30 minutes later
    const deliveredTime = new Date(orderTime.getTime() + 3 * 24 * 60 * 60000); // 3 days later

    const interval = setInterval(() => {
      const currentTime = new Date();
      if (currentTime < shippedTime) {
        setProgress(1); // Step 1: Ordered
      } else if (currentTime < onTheWayTime) {
        setProgress(2); // Step 2: Shipped
      } else if (currentTime < deliveredTime) {
        setProgress(3); // Step 3: On the way
      } else {
        setProgress(4); // Step 4: Delivered
        clearInterval(interval);
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, []);

  const shippingPrice = 250;
  const totalBill = totalPrice + shippingPrice;
  return (
    <div>
      <div className="card-tracking mt-5 mb-5">
        <div className="titleTracking">Purchase Reciept</div>
        <div className="infoReciept">
          <div className="row">
            <div className="col-7">
              <span id="heading">Date</span>
              <br />
              <span id="details">{currentDate}</span>
            </div>
            <div className="col-5 pull-right">
              <span id="heading">Order No.</span>
              <br />
              <span id="details">{orderNumber}</span>
            </div>
          </div>
        </div>

        {cart.map((item, index) => (
          <div className="pricing" key={index}>
            <div className="row">
              <div className="col-9">
                <span id="name">{item.title}</span>
              </div>
              <div className="col-3">
                <span id="price">Rs {item.price}</span>
              </div>
            </div>
          </div>
        ))}

        <div className="pricing">
          <div className="row">
            <div className="col-9">
              <span id="name">Shipping</span>
            </div>
            <div className="col-3">
              <span id="price">Rs 250</span>
            </div>
          </div>
        </div>
        <div className="totalReciept">
          <div className="row">
            <div className="col-9"></div>
            <div className="col-3">
              <big>Rs {totalBill}</big>
            </div>
          </div>
        </div>
        <div className="tracking">
          <div className="titleTracking">Tracking Order</div>
        </div>
        <div className="progress-track">
          <ul id="progressbar">
            <li className={`step0 ${progress >= 1 ? "active" : ""}`} id="step1">
              Ordered
            </li>
            <li className={`step0 ${progress >= 2 ? "active" : ""}`} id="step2">
              Shipped
            </li>
            <li className={`step0 ${progress >= 3 ? "active" : ""}`} id="step3">
              On the way
            </li>
            <li className={`step0 ${progress >= 4 ? "active" : ""}`} id="step4">
              Delivered
            </li>
          </ul>
        </div>

        {/* <div className="footer">
          <div className="row">
            <div className="col-2">
              <img
                className="img-fluid"
                src="https://i.imgur.com/YBWc55P.png"
                alt="Tracking-Item"
              />
            </div>
            <div className="col-10">
            Download Reciept
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Track;
