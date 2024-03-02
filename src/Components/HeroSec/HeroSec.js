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
          <Link
            to={"/product"}
            className="btn px-5 py-3 text-white mt-3 mt-sm-0"
            style={{ borderRadius: 30, backgroundColor: "#ff5e14" }}
          >
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
              "url(https://img.freepik.com/free-photo/young-woman-sitting-stairs-talking-phone_1303-13708.jpg?w=1380&t=st=1709120926~exp=1709121526~hmac=c3a31ad495a1b9ee5467f7e2f0f9c1f955c0cdd35c807c1c37b7778a7e718ced)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroSec;
