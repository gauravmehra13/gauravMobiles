import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFavItem } from "../../app/cartSlice";
import { faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const FavSidebar = ({ show, onHide }) => {
  const { favoriteItems } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  return (
    <>
      <Offcanvas show={show} onHide={onHide} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Favorite Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            className="container"
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {favoriteItems.length === 0 ? (
              <h3>No items in your list...</h3>
            ) : (
              <>
                {favoriteItems?.map((item, index) => (
                  <>
                    <div
                      className="card"
                      style={{ position: "relative" }}
                      key={index}
                    >
                      <div
                        className="d-flex align-items-center"
                        style={{ height: "120px", gap: "15px" }}
                      >
                        <img src={item.img} width={80} alt="productIMG"></img>
                        <h6>{item.title}</h6>
                      </div>

                      <div
                        className="buttonContainer d-flex"
                        style={{
                          position: "absolute",
                          bottom: "8px",
                          right: "8px",
                        }}
                      >
                        <Button
                          className="btn btn-primary btn-sm me-1 mb-2"
                          onClick={() => {
                            dispatch(addToCart(item));
                            toast.success("Item Added To Cart", {
                              position: "top-center",
                              autoClose: 3000,
                              hideProgressBar: true,
                              closeOnClick: true,
                              pauseOnHover: true,
                              theme: "dark",
                            });
                          }}
                        >
                          <FontAwesomeIcon icon={faCartShopping} />
                        </Button>

                        <Button
                          className="btn btn-danger btn-sm me-1 mb-2"
                          onClick={() => {
                            dispatch(removeFavItem(item.id));
                            toast.warn("Item removed from cart", {
                              position: "top-center",
                              autoClose: 3000,
                              hideProgressBar: true,
                              closeOnClick: true,
                              pauseOnHover: true,
                              theme: "dark",
                            });
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FavSidebar;
