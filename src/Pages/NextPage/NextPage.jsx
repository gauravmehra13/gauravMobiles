import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorites } from "../../app/cartSlice";
import Star from "../../Components/Star/Star";

import "./NextPageStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const NextPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = location.state;
  console.log("data", data);

  const handleAddToCartClick = (e, data) => {
    dispatch(addToCart(data));
    toast.success("Item Added To Cart", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "light",
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container mb-5">
        <div className="prodcard">
          <div className="container-fliud">
            <div className="wrapper row ">
              <div className="preview col-md-6 ">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={data.img} alt="ProductImage" />
                  </div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="productTitle">{data.title}</h3>
                <div className="rating">
                  <div className="stars">
                    <Star stars={data.rating}></Star>
                  </div>
                  <span className="review-no" style={{ marginTop: "10px" }}>
                    41 reviews
                  </span>
                </div>
                {/* <p className="product-description">
                  Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                  cubilia sem sem! Repudiandae et! Massa senectus enim minim
                  sociosqu delectus posuere.
                </p> */}
                <h4 className="price">
                  current price: <span>Rs {data.price}</span>
                </h4>
                <p className="vote">
                  <strong>91%</strong> of buyers enjoyed this product!{" "}
                  <strong>(87 votes)</strong>
                </p>
                {/* <h5 className="sizes">
                  Variant:
                  <span className="size" data-toggle="tooltip" title="small">8GB/64GB</span>
							<span className="size" data-toggle="tooltip" title="medium">16gb/128gb</span>			
                </h5> */}

                <div className="action d-flex gap-3">
                  <button
                    className="add-to-cart btn btn-default"
                    type="button"
                    onClick={(e) => handleAddToCartClick(e, data)}
                  >
                    <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                    add to cart
                  </button>
                  <Button
                    variant="outline-light"
                    type="button"
                    style={{ width: "70px" }}
                    onClick={() => {
                      dispatch(addToFavorites(data));
                      toast.success("Item Added To Favourites", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        theme: "light",
                      });
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "red" }}
                    ></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextPage;
