import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./NavbarResp.css";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../app/cartSlice";
import FavSidebar from "../FavItems/FavSidebar";

function NavScrollExample() {
  const { cart, totalQuantity, favoriteItems } = useSelector(
    (state) => state.allCart
  );

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

  // const handleSearch = (e) => {
  //   dispatch(queryData(e.target.value));
  // };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const [showSidebar, setShowSidebar] = useState(false);
  // const handleClose = () => setShowSidebar(false);
  // const handleShow = () => setShowSidebar(true);

  return (
    <>
      <Navbar expand="lg" className=" text-white navbar bg-dark" sticky="top">
        <Container fluid className="pe-4">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand
              className="text-white d-flex"
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
                <NavLink
                  className="navigationlink"
                  activeclassname="active"
                  to="/product"
                  style={{ textDecoration: "none" }}
                >
                  Products
                </NavLink>
                <NavLink
                  className="navigationlink"
                  activeclassname="active"
                  to="/about"
                  style={{ textDecoration: "none" }}
                >
                  About
                </NavLink>
                <NavLink
                  className="navigationlink"
                  activeclassname="active"
                  to="/contact"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </NavLink>
              </div>
            </Nav>
            <Form
              className="d-flex searchform"
              style={{
                gap: 20,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              {/* <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleSearch}
              /> */}
              {/* <Button variant="outline-success">Search</Button> */}
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <div
                  className="position-relative"
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ cursor: "pointer", fontSize: "24px" }}
                    onClick={() => setShowSidebar(true)}
                  />

                  <Badge
                    pill
                    bg="danger"
                    className="position-absolute top-0 right-0 translate-middle"
                  >
                    {favoriteItems.length}
                  </Badge>
                </div>
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
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ cursor: "pointer", fontSize: "26px" }}
                  />
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
