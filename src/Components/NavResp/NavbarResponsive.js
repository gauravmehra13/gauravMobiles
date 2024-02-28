import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./NavbarResp.css";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, queryData } from "../../app/cartSlice";
import FavSidebar from "../FavItems/FavSidebar";

function NavScrollExample() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Favourite Items
    </Tooltip>
  );

  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      View Cart
    </Tooltip>
  );

  // const cartItems = useSelector((state) => state.allCart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const handleSearch = (e) => {
    dispatch(queryData(e.target.value));
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const [showSidebar, setShowSidebar] = useState(false);
  // const handleClose = () => setShowSidebar(false);
  // const handleShow = () => setShowSidebar(true);

  return (
    <>
      <Navbar expand="lg" className="bg-dark text-white navbar" sticky="top">
        <Container fluid>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand
              className="text-white d-flex"
              href="#"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <img
                src="https://png.pngtree.com/png-vector/20220628/ourmid/pngtree-smartphone-logo-design-blue-contact-png-image_5547061.png"
                height={50}
                alt=""
              />
              Gaurav Mobiles
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="bg-light text-white"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <div className="links">
                <Link
                  className="text-white"
                  to="/product"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Products
                </Link>
                <Link
                  className="text-white"
                  to="/about"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  About
                </Link>
                <Link
                  className="text-white"
                  to="/contact"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Contact
                </Link>
              </div>
            </Nav>
            <Form className="d-flex searchform">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleSearch}
              />
              {/* <Button variant="outline-success">Search</Button> */}
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className="ms-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowSidebar(true)}
                />
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 250 }}
                overlay={renderTooltip2}
              >
                <div
                  className="position-relative"
                  onClick={handleCartClick}
                  style={{ cursor: "pointer" }}
                >
                  {/* Add Badge component to show cart count */}
                  <FontAwesomeIcon icon={faCartShopping} className="ms-3" />
                  <Badge
                    pill
                    bg="danger"
                    className="position-absolute top-0 right-0 translate-middle"
                  >
                    {totalQuantity}
                  </Badge>
                </div>
              </OverlayTrigger>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <FavSidebar show={showSidebar} onHide={() => setShowSidebar(false)} />
    </>
  );
}

export default NavScrollExample;
