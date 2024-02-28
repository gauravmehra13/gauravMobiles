import React, { useEffect, useReducer, useRef } from "react";
import "./LatestProducts.css";
import { useDispatch, useSelector } from "react-redux";
import Swiper from "swiper";
import "swiper/css";
import { addToCart } from "../../app/cartSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const LatestProducts = () => {
  const data = useSelector((state) => state.allCart.items);
  const latestproducts = data.filter((items) => items.rating > 4);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  useEffect(() => {
    /* Initialize Swiper */
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        360: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }, []);

  const handleAddToCartClick = (item) => {
    dispatch(addToCart(item));
  };

  const handleCardClick = (item) => {
    navigate("/next", { state: { data: item } });
  };

  useEffect(() => {
    /* Initialize Swiper */
    swiperRef.current = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        360: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }, []);

  return (
    <>
      <section className="product-slider container">
        <h4 className="product-slider-heading">LATEST PRODUCTS</h4>
        <div className="slider-btns">
          <div
            className="swiper-button-prev"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: "orange" }} />
          </div>
          <div
            className="swiper-button-next"
            onClick={() => swiperRef.current.slideNext()}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: "orange" }}
            />
          </div>
        </div>
        <div className="slider-container">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              {latestproducts.map((item, index) => (
                <div className="swiper-slide" key={index}>
                  <div
                    className="product-box"
                    onClick={() => handleCardClick(item)}
                  >
                    <span className="product-box-offer">On Sale</span>
                    <div className="product-img-container">
                      <div className="product-img">
                        <li>
                          <img
                            alt={item.titile}
                            className="product-img-front"
                            src={item.img}
                          />
                          <img
                            alt={item.titile}
                            className="product-img-back"
                            src={item.img2}
                          />
                        </li>
                      </div>
                    </div>
                    <div className="product-box-text">
                      <div className="product-category">
                        <span>{item.brand}</span>
                      </div>
                      <p className="product-title">{item.title}</p>
                      <div className="price-buy">
                        <span className="p-price">Rs {item.price}</span>
                        <button
                          className="p-buy-btn btn"
                          onClick={() => handleAddToCartClick(item)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProducts;
