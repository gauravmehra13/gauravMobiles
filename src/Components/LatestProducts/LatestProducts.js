import React, { useEffect } from "react";
import "./LatestProducts.css";
import { useSelector } from "react-redux";
import Swiper from "swiper";
import "swiper/css";

const LatestProducts = () => {
  const data = useSelector((state) => state.allCart.items);
  const latestproducts = data.filter((items) => items.rating > 4);

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

  return (
    <section className="product-slider container">
      <h4 className="product-slider-heading">LATEST PRODUCTS</h4>
      <div className="slider-btns">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      <div className="slider-container">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {latestproducts.map((item, index) => (
              <div className="swiper-slide" key={index}>
                <div className="product-box">
                  <span className="product-box-offer">On Sale</span>
                  <div className="product-img-container">
                    <div className="product-img">
                      <a href="http://demo47.askas8.se/sv/front-brake-assy-37-5-12-14">
                        <img
                          alt=""
                          className="product-img-front"
                          src={item.img}
                        />
                        <img
                          alt=""
                          className="product-img-back"
                          src="images/1-b.jpg"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="product-box-text">
                    <div className="product-category">
                      <span>{item.brand}</span>
                    </div>
                    <p className="product-title">{item.title}</p>
                    <div className="price-buy">
                      <span className="p-price">Rs {item.price}</span>
                      <button className="p-buy-btn btn">Buy Now</button>
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
  );
};

export default LatestProducts;
