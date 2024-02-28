import React from "react";
import "./HeroSec.css";
import { Link } from "react-router-dom";

const HeroSec = () => {
  return (
    // <div className="herosec mt-5">
    //   <div className="contentbox">
    //     <h1>QUALITY SHOES YO</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet
    //       cumque ratione et quia tenetur, eaque facere nisi necessitatibus
    //       exercitationem enim distinctio temporibus quidem assumenda sapiente!
    //       Recusandae nobis quae quod.
    //     </p>

    //     <div className="btn-container">
    //       <Link to={"/product"}>
    //         {" "}
    //         <button className="btn btn-primary">Buy Now</button>
    //       </Link>
    //       <button className="btn btn-secondary">Category</button>
    //     </div>

    //     <div className="brandimage">
    //       <p>Available on:</p>

    //       <div className="imgContainer">
    //         <img
    //           src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png"
    //           alt=""
    //           height={48}
    //         />
    //         <img
    //           src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
    //           alt=""
    //           height={30}
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="imagebox">
    //     <img
    //       className="image"
    //       src="https://www.vectorkhazana.com/assets/images/products/Nike_Shoes_fade.png"
    //       alt=""
    //     />
    //   </div>
    // </div>

    // <div className="container-fluid px-4 py-5 my-5 text-center">
    //   <div className="lc-block mb-4">
    //     <div editable="rich">
    //       <h2 className="display-2 fw-bold">
    //         Level up your <span className="text-primary">WordPress page!</span>
    //       </h2>
    //     </div>
    //   </div>
    //   <div className="lc-block col-lg-6 mx-auto mb-5">
    //     <div editable="rich">
    //       <p className="lead">
    //         Quickly design and customize responsive mobile-first sites with
    //         Bootstrap
    //       </p>
    //     </div>
    //   </div>

    //   <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
    //     {" "}
    //     <a className="btn btn-primary btn-lg px-4 gap-3" href="#" role="button">
    //       Try it free
    //     </a>
    //     <a className="btn btn-outline-secondary btn-lg px-4" href="#" role="button">
    //       Learn more
    //     </a>
    //   </div>
    //   <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
    //     <img
    //       className="img-fluid"
    //       src="https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/10/undraw_going_up_ttm5.svg"
    //       width=""
    //       height="783"
    //       srcset=""
    //       sizes=""
    //       alt=""
    //     />
    //   </div>
    // </div>

    <div className="container">
      <div
        className="d-sm-flex align-items-center justify-content-between w-100 bg-light ps-5 mt-5"
        style={{ height: "80vh",borderRadius:"16px" }}
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
            Shop Now
          </Link>
        </div>
        <div
          className="col-md-8 h-100 clipped"
          style={{
            minHeight: "350px",
            borderRadius:"16px",
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
