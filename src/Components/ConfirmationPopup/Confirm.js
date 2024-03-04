import React from "react";
import "./Confirm.css";

const Confirm = ({ name, address, orderNumber }) => {
  return (
    <div>
      <div className="container mt-2 mb-2 d-flex justify-content-center">
        <div className="popup">
          <div className="first d-flex justify-content-between align-items-center mb-3">
            <div className="info">
              <span className="d-block name">Thank you, {name}</span>
              <span className="order">Order - {orderNumber}</span>
            </div>

            <img src="https://i.imgur.com/NiAVkEw.png" width="40" alt="logo" />
          </div>
          <div className="detail">
            <span className="d-block summery">
              Your order has been dispatched. we are delivering you order.
            </span>
          </div>
          <hr />
          <div className="text">
            <span className="d-block new mb-1">{name}</span>
          </div>
          <span className="d-block address mb-3">{address}</span>
          <div className="  money d-flex flex-row mt-2 align-items-center">
            <img src="https://i.imgur.com/ppwgjMU.png" width="20" alt="cash" />

            <span className="ml-2">Cash on Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
