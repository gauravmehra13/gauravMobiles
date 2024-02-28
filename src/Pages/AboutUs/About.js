import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPercent,
  faRightLeft,
  faSquarePhone,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <>
      <section className="bg-dark py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h1 className="text-white">About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-md-4">
              <img src="/photos/about.png" alt="About Hero" />
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row text-center pt-5 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Our Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 pb-5 serviceCard">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1  text-center">
                <FontAwesomeIcon icon={faTruck} />{" "}
              </div>
              <h2 className="h5 mt-4 text-center">Delivery Services</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5 serviceCard">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1  text-center">
                <FontAwesomeIcon icon={faRightLeft} />{" "}
              </div>
              <h2 className="h5 mt-4 text-center">Shipping & Return</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5 serviceCard">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1  text-center">
                <FontAwesomeIcon icon={faPercent} />{" "}
              </div>
              <h2 className="h5 mt-4 text-center">Promotion</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5 serviceCard">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-center">
                <FontAwesomeIcon icon={faSquarePhone} />{" "}
              </div>
              <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="bg-light py-5">
        <div className="container my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Our Brands</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="col-lg-9 m-auto tempaltemo-carousel">
              <div
                className="carousel slide carousel-multi-item pt-2 pt-md-0"
                id="templatemo-slide-brand"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner product-links-wap">
                  <div className="carousel-item active">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-md-2 col-sm-6 p-3">
                        <img
                          className="img-fluid brand-img"
                          src="/photos/brands/samsung.png"
                          alt="Samsung"
                        />
                      </div>
                      <div className="col-md-2 col-sm-6 p-3">
                        <img
                          className="img-fluid brand-img"
                          src="/photos/brands/mi.png"
                          alt="Mi"
                        />
                      </div>
                      <div className="col-md-2 col-sm-6 p-3">
                        <img
                          className="img-fluid brand-img"
                          src="/photos/brands/onePlusALT.png"
                          alt="OnePlus"
                        />
                      </div>
                      <div className="col-md-2 col-sm-6 p-3">
                        <img
                          className="img-fluid brand-img"
                          src="/photos/brands/nok.png"
                          alt="Nokia"
                        />
                      </div>

                      <div className="col-md-2 col-sm-6 p-3">
                        <img
                          className="img-fluid brand-img"
                          src="/photos/brands/moto.png"
                          alt="Nokia"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
