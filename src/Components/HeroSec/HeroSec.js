import React from "react";
import "./HeroSec.css";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSec = () => {
  return (
    <div className="container">
      <div
        id="herosection"
        className="d-sm-flex align-items-center justify-content-between w-100 bg-light mt-5"
        style={{ height: "80vh", borderRadius: "16px" }}
      >
        <div className="herosec col-md-4 mx-auto mb-4 mb-sm-0 headline">
          {/* <span className="text-secondary text-uppercase">Subheadline</span> */}
          <h1 className=" my-4 font-weight-bold">
            Gaurav Mobiles <br />
            <span style={{ color: "#ff5e14" }} className="display-5">
              Explore the World of Smartphones{" "}
            </span>
          </h1>
          <Link to={"/product"} className="btn px-5 py-3 mt-3 mt-sm-0 shopnow">
            <FontAwesomeIcon icon={faCartShopping} className="me-2" />
            Shop Now
          </Link>
        </div>
        <div
          className="col-md-8 h-100 clipped"
          style={{
            minHeight: "350px",
            borderRadius: "16px",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523371683773-affcb4a2e39e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroSec;
