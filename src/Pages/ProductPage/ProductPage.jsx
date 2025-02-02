import React, { useEffect, useState } from "react";
import "./ProductPageStyle.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToFavorites, queryData } from "../../app/cartSlice";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, Card, Form, InputGroup } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Star from "../../Components/Star/Star";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarouselProductPage from "../../Components/Carousel/CarouselProductPage";

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [clickedIndex, setClickedIndex] = useState(null);

  // Redux State
  const data = useSelector((state) => state.allCart.items);
  const query = useSelector((state) => state.allCart.query);

  // Component State
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [filters, setFilters] = useState({
    brand: [],
    rating: [],
    priceRange: { min: 10000, max: 150000 },
  });

  // Temporary state for price inputs (before applying)
  const [tempMinPrice, setTempMinPrice] = useState(10000);
  const [tempMaxPrice, setTempMaxPrice] = useState(150000);

  // Filtering Logic
  const applyFilters = () => {
    let updatedData = data.filter((product) => {
      // Search filter
      if (query && !product.title.toLowerCase().includes(query.toLowerCase())) {
        return false;
      }
      // Brand filter
      if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
        return false;
      }
      // Rating filter
      if (
        filters.rating.length > 0 &&
        !filters.rating.includes(product.rating)
      ) {
        return false;
      }
      // Price filter
      if (
        product.price < filters.priceRange.min ||
        product.price > filters.priceRange.max
      ) {
        return false;
      }
      return true;
    });

    setFilteredItems(updatedData);
  };

  // Apply filters when dependencies change
  useEffect(() => {
    applyFilters();
    setCurrentPage(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, data, query]);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredItems.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredItems.length / productsPerPage); // Use filteredItems.length here

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const isNextDisabled = currentPage === totalPages; // Disable "Next" if we're on the last page
  const isPrevDisabled = currentPage === 1; // Disable "Previous" if we're on the first page

  // Handlers for filters
  const toggleBrandFilter = (brand) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      brand: prevFilters.brand.includes(brand)
        ? prevFilters.brand.filter((item) => item !== brand)
        : [...prevFilters.brand, brand],
    }));
  };

  const toggleRatingFilter = (rating) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      rating: prevFilters.rating.includes(rating)
        ? prevFilters.rating.filter((item) => item !== rating)
        : [...prevFilters.rating, rating],
    }));
  };

  const handleMinPriceChange = (e) => {
    setTempMinPrice(parseInt(e.target.value) || 0);
  };

  const handleMaxPriceChange = (e) => {
    setTempMaxPrice(parseInt(e.target.value) || 0);
  };

  const handleApplyPriceFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: { min: tempMinPrice, max: tempMaxPrice },
    }));
  };

  const clearFilters = () => {
    setFilters({
      brand: [],
      rating: [],
      priceRange: { min: 10000, max: 150000 },
    });
  };

  const handleSearchData = (e) => {
    dispatch(queryData(e.target.value));
  };

  const handleCardClick = (val) => {
    navigate("/next", { state: { data: val } });
  };

  const handleAddToCartClick = (e, val) => {
    e.stopPropagation();
    dispatch(addToCart(val));
    setClickedIndex(val.id);

    toast.success("Item Added To Cart", {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
    });
  };

  const handleAddToFavClick = (e, val) => {
    e.stopPropagation();
    dispatch(addToFavorites(val));
    toast.success("Item Added To Favorites", {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="container mt-5 mb-5">
        <CarouselProductPage />

        <div className="row">
          <aside className="col-md-3">
            <Card className="p-3 shadow-sm border-0">
              {/* Search */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search products..."
                  onChange={handleSearchData}
                />
              </Form.Group>

              {/* Brand Filter */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Brands</Form.Label>
                {["Samsung", "Motorola", "Nokia", "Xiaomi", "OnePlus"].map(
                  (brand, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      label={brand}
                      checked={filters.brand.includes(brand)}
                      onChange={() => toggleBrandFilter(brand)}
                      className="mb-2"
                    />
                  )
                )}
              </Form.Group>

              {/* Price Range */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Price Range</Form.Label>
                <Form.Range
                  min="10000"
                  max="150000"
                  value={tempMaxPrice}
                  onChange={handleMaxPriceChange}
                  style={{
                    accentColor: "#ff5e14", // This will change the color of the dot and track
                    borderRadius: "5px", // Round the edges of the slider
                    height: "8px", // Adjust the thickness of the track
                  }}
                />
                <InputGroup className="mt-2">
                  <Form.Control
                    type="number"
                    value={tempMinPrice}
                    onChange={handleMinPriceChange}
                    placeholder="Min"
                  />
                  <InputGroup.Text>-</InputGroup.Text>
                  <Form.Control
                    type="number"
                    value={tempMaxPrice}
                    onChange={handleMaxPriceChange}
                    placeholder="Max"
                  />
                </InputGroup>
                <Button
                  variant="primary"
                  className="mt-2 w-100 "
                  style={{
                    backgroundColor: "#ff5e14",
                    borderColor: "#ff5e14",
                    transition: "0.3s",
                  }}
                  onClick={handleApplyPriceFilter}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#e65412")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#ff5e14")
                  }
                >
                  Apply
                </Button>
              </Form.Group>

              {/* Rating Filter */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Rating</Form.Label>
                {[5, 4, 3, 2].map((rating, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    checked={filters.rating.includes(rating)}
                    onChange={() => toggleRatingFilter(rating)}
                    label={
                      <>
                        {[...Array(rating)].map((_, i) => (
                          <i
                            key={i}
                            className="bi bi-star-fill text-warning me-1"
                          ></i>
                        ))}
                      </>
                    }
                    className="mb-2"
                  />
                ))}
              </Form.Group>
            </Card>
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

                <nav className="Pager1" aria-label="pagination example">
                  <ul className="pagination pagination-circle justify-content-center">
                    <li className="page-item">
                      <button
                        className="page-link"
                        aria-label="Previous"
                        onClick={() => paginate(currentPage - 1)}
                        disabled={isPrevDisabled} // Disable if we're on the first page
                      >
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </button>
                    </li>

                    {Array(totalPages) // Use totalPages to display the correct number of pages
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
                        disabled={isNextDisabled} // Disable if we're on the last page
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
