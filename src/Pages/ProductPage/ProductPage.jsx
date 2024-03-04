import React, { useEffect, useState } from "react";
import "./ProductPageStyle.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToFavorites, queryData } from "../../app/cartSlice";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap"; // Import Row and Col from react-bootstrap
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-bootstrap/Carousel";
import Star from "../../Components/Star/Star";

const ProductPage = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  // const cartBtn = document.querySelector(".cart-btn");

  // cartBtn.addEventListener("click", () => {
  //   cartBtn.classList.add("clicked");
  // });

  const data = useSelector((state) => state.allCart.items);
  const query = useSelector((state) => state.allCart.query);

  const [filteredItems, setFilteredItems] = useState([]);

  const filteredData = data.filter((f) =>
    f.title.toLowerCase().includes(query.toLowerCase())
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredItems(filteredData);
  }, [filteredData]);

  const handleCardClick = (val) => {
    navigate("/next", { state: { data: val } });
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Calculate the indexes for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredItems.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddToCartClick = (e, val, index) => {
    e.stopPropagation();
    dispatch(addToCart(val));
    setClickedIndex(val.id);
  };

  const handleAddToFavClick = (e, val) => {
    e.stopPropagation();
    dispatch(addToFavorites(val));
  };

  const countProductsByBrand = (brand) => {
    return data.filter((product) => product.brand === brand).length;
  };

  const handleSearchData = (e) => {
    dispatch(queryData(e.target.value));
  };

  const [minPrice, setMinPrice] = useState(10000);
  const [maxPrice, setMaxPrice] = useState(150000);

  const handlePriceRangeChange = (e) => {
    const value = parseInt(e.target.value);
    setMaxPrice(value);
  };

  // State to hold filters
  const [filters, setFilters] = useState({
    brand: [],
    rating: [],
    priceRange: { min: 10000, max: 150000 },
  });

  useEffect(() => {
    const applyFilters = () => {
      let filteredData = data.filter((product) => {
        // Filter by brand
        if (
          filters.brand.length > 0 &&
          !filters.brand.includes(product.brand)
        ) {
          return false;
        }
        // Filter by rating
        if (
          filters.rating.length > 0 &&
          !filters.rating.includes(product.rating)
        ) {
          return false;
        }
        // Filter by price range
        if (
          product.price < filters.priceRange.min ||
          product.price > filters.priceRange.max
        ) {
          return false;
        }
        return true;
      });
      setFilteredItems(filteredData);
    };

    applyFilters();
  }, [filters, data]);

  // brand filter
  const toggleBrandFilter = (brand) => {
    let updatedFilters = { ...filters };
    if (updatedFilters.brand.includes(brand)) {
      updatedFilters.brand = updatedFilters.brand.filter(
        (item) => item !== brand
      );
    } else {
      updatedFilters.brand.push(brand);
    }
    setFilters(updatedFilters);
  };

  //ratings filter
  const toggleRatingFilter = (rating) => {
    let updatedFilters = { ...filters };
    if (updatedFilters.rating.includes(rating)) {
      updatedFilters.rating = updatedFilters.rating.filter(
        (item) => item !== rating
      );
    } else {
      updatedFilters.rating = [
        rating,
        ...updatedFilters.rating.filter((item) => item > rating),
      ];
    }
    setFilters(updatedFilters);
  };

  // price range filter
  const handleApplyPriceFilter = () => {
    setFilters({
      ...filters,
      priceRange: { min: minPrice, max: maxPrice },
    });
  };

  // clear all filters
  const clearFilters = () => {
    setFilters({
      brand: [],
      rating: [],
      priceRange: { min: 0, max: Infinity },
    });
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <Carousel className="car mb-5">
          <Carousel.Item interval={5000}>
            <img
              src="https://newgadgetsindia.com/wp-content/uploads/2022/12/Samsung-Galaxy-M04-jpg.webp"
              className="carouselImg d-block w-100"
              alt="..."
              height={400}
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              src="https://co.99.com/guide/event/2019/conquermallcenter/images/sub/xiaomi/banner1.jpg"
              className="carouselImg d-block w-100"
              alt="..."
              height={400}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              src="https://assets.gqindia.com/photos/5cdc695e0f4cc0a9a7db16df/16:9/w_2560%2Cc_limit/GQ-India-phone-OnePlus-3-IMAGE.jpg"
              height={400}
              className="carouselImg d-block w-100"
              alt="..."
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="row">
          <aside className="col-md-3">
            <div className="card">
              <article className="filter-group">
                <header className="card-header">
                  <i className="icon-control fa fa-chevron-down"></i>
                  <h6 className="title">Product type</h6>
                </header>
                <div className="filter-content collapse show" id="collapse_1">
                  <div className="card-body">
                    <form className="pb-3">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                          onChange={handleSearchData}
                        />
                        <div className="input-group-append">
                          <button className="btn btn-light mx-2" type="button">
                            <i className="bi bi-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </article>
              <article className="filter-group">
                <header className="card-header">
                  <i className="icon-control fa fa-chevron-down"></i>
                  <h6 className="title">Brands </h6>
                </header>
                <div className="filter-content collapse show" id="collapse_2">
                  <div className="card-body">
                    {["Samsung", "Motorola", "Nokia", "Xiaomi", "OnePlus"].map(
                      (brand, index) => (
                        <div className="form-check" key={index}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`brand-${brand}`}
                            checked={filters.brand.includes(brand)}
                            onChange={() => toggleBrandFilter(brand)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`brand-${brand}`}
                          >
                            {brand}
                          </label>
                          <span
                            className="text-center float-end bg-light"
                            style={{ width: "30px" }}
                          >
                            {countProductsByBrand(brand)}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </article>
              <article className="filter-group">
                <header className="card-header">
                  <i className="icon-control fa fa-chevron-down"></i>
                  <h6 className="title">Price range </h6>
                </header>
                <div className="filter-content collapse show" id="collapse_3">
                  <div className="card-body">
                    <div className="text-center">
                      <input
                        style={{ width: "250px" }}
                        type="range"
                        className="custom-range"
                        min="10000"
                        max="150000"
                        value={maxPrice}
                        onChange={handlePriceRangeChange}
                      />
                    </div>
                    <div className="row mb-3">
                      <div className="col-6">
                        <p className="mb-0">Min</p>
                        <div className="form-outline">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Min Price"
                            value={minPrice}
                            onChange={(e) =>
                              setMinPrice(parseInt(e.target.value))
                            }
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <p className="mb-0">Max</p>
                        <div className="form-outline">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Max Price"
                            value={maxPrice}
                            onChange={(e) =>
                              setMaxPrice(parseInt(e.target.value))
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center  mt-3">
                      <button
                        className="btn btn-light"
                        onClick={handleApplyPriceFilter}
                      >
                        Apply
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </article>
              <article className="filter-group">
                <header className="card-header">
                  <i className="icon-control fa fa-chevron-down"></i>
                  <h6 className="title">Rating </h6>
                </header>
                <div className="filter-content collapse show" id="collapse_4">
                  <div className="card-body">
                    {[5, 4, 3, 2].map((rating, index) => (
                      <div
                        className="form-check"
                        key={index}
                        style={{ width: "150px" }}
                      >
                        <input
                          className="form-check-input rating-checkbox"
                          type="checkbox"
                          id={`rating-${rating}`}
                          checked={filters.rating.includes(rating)}
                          onChange={() => toggleRatingFilter(rating)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`rating-${rating}`}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {[...Array(rating)].map((_, i) => (
                            <i
                              key={i}
                              className="bi bi-star-fill"
                              style={{ color: "gold" }}
                            ></i>
                          ))}
                          {[...Array(5 - rating)].map((_, i) => (
                            <i
                              key={i}
                              className="bi bi-star"
                              style={{ color: "gold" }}
                            ></i>
                          ))}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </aside>

          <div className="col-md-9 prodContainer">
            <header className="border-bottom mb-4 pb-3">
              <div
                className="form-inline"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{filteredItems.length} Items </span>
                <Button
                  className="btn btn-light me-2"
                  style={{ marginLeft: "auto" }}
                  onClick={clearFilters}
                >
                  <i className="bi bi-filter me-1"></i>
                  Clear Filters
                </Button>
                {/* <nav className="pagination-outer" aria-label="Page navigation">
                  <ul className="pagination">
                    <li className="page-item">
                      <button
                        className="page-link"
                        aria-label="Previous"
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <span aria-hidden="true">«</span>
                      </button>
                    </li>

                    {Array(Math.ceil(data.length / productsPerPage))
                      .fill()
                      .map((_, index) => (
                        <li
                          key={index}
                          className={`page-item ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link next"
                            onClick={() => paginate(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}

                    <li className="page-item">
                      <button
                        className="page-link"
                        aria-label="Next"
                        onClick={() => paginate(currentPage + 1)}
                        disabled={
                          currentPage ===
                          Math.ceil(data.length / productsPerPage)
                        }
                      >
                        <span aria-hidden="true">»</span>
                      </button>
                    </li>
                  </ul>
                </nav> */}

                <nav className="Pager1" aria-label="pagination example">
                  <ul className="pagination pagination-circle justify-content-center">
                    <li className="page-item">
                      <button
                        className="page-link"
                        aria-label="Previous"
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </button>
                    </li>

                    {Array(Math.ceil(data.length / productsPerPage))
                      .fill()
                      .map((_, index) => (
                        <li
                          key={index}
                          className={`page-item ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link next"
                            onClick={() => paginate(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}

                    <li className="page-item">
                      <button
                        className="page-link"
                        aria-label="Next"
                        onClick={() => paginate(currentPage + 1)}
                        disabled={
                          currentPage ===
                          Math.ceil(data.length / productsPerPage)
                        }
                      >
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
            <Row xs={1} md={2} lg={4} className="g-4">
              {currentProducts.map((val, index) => (
                <Col key={index}>
                  <div className="card-sl" onClick={() => handleCardClick(val)}>
                    <div
                      className="card-image"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <img src={val.img} alt={val.title} />
                    </div>
                    <div
                      className="card-action"
                      onClick={(e) => handleAddToFavClick(e, val)}
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </div>
                    <div className="card-heading">{val.title}</div>
                    <div className="raring container">
                      <Star stars={val.rating}></Star>
                    </div>
                    <div className="card-text">Rs {val.price}</div>
                    {/* <li
                      onClick={(e) => handleAddToCartClick(e, val)}
                      className="card-button"
                      style={{ cursor: "pointer" }}
                    >
                      <span className="bi bi-cart mx-2"></span>
                      Add To Cart
                    </li> */}

                    <button
                      className={`cart-btn ${
                        val.id === clickedIndex ? "clicked" : ""
                      }`}
                      onClick={(e) => handleAddToCartClick(e, val)}
                    >
                      <span className="icon-container">
                        <i className="bi bi-cart icon-c"></i>
                      </span>
                      <span className="primary-text">add item</span>
                      <span className="secondary-text">item added</span>
                    </button>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
