import React from "react";
import "./style.css";
const FeatureCards = () => {
  return (
    <>
      <div className="featureCards">
        <div className="header">
          <h1>Reliable, efficient delivery</h1>
          <h1>Fast and Secure Shopping</h1>

          <p>
            Experience seamless shopping and reliable delivery with our advanced
            solutions.
          </p>
        </div>
        <div className="row1-container">
          <div className="box box-down cyan">
            <h2 className="cardHeading">Tailored Suggestions</h2>
            <p>Curates products tailored to your preferences</p>
            <img
              className="featureImage"
              src="https://assets.codepen.io/2301174/icon-supervisor.svg"
              alt=""
            />
          </div>

          <div className="box red">
            <h2 className="cardHeading">Real-Time Tracking</h2>
            <p>Track your package every step of the way</p>
            <img
              className="featureImage"
              src="https://assets.codepen.io/2301174/icon-team-builder.svg"
              alt=""
            />
          </div>

          <div className="box box-down blue">
            <h2 className="cardHeading">Instant Checkout</h2>
            <p>Speeds up your purchase process for hassle-free transactions</p>
            <img
              className="featureImage"
              src="https://assets.codepen.io/2301174/icon-calculator.svg"
              alt=""
            />
          </div>
        </div>
        <div className="row2-container">
          <div className="box orange">
            <h2 className="cardHeading">Secure Payments</h2>
            <p>
              Ensures your financial information is safe with every transaction
            </p>
            <img
              className="featureImage"
              src="https://assets.codepen.io/2301174/icon-karma.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCards;
