import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarResponsive from "./Components/NavResp/NavbarResponsive";
import LandingPage from "./Pages/LandingPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import NextPage from "./Pages/NextPage/NextPage";
import Cartpage from "./Pages/CartPage/Cartpage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import Footer from "./Components/Footer/Footer";
import CheckoutAlt from "./Pages/CheckoutAlt/CheckoutAlt";
import Contact from "./Pages/ContactUS/Contact";
import About from "./Pages/AboutUs/About";

function App() {
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    <>
      <NavbarResponsive />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/next" element={<NextPage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/payment" element={<CheckoutPage />} />
        <Route path="/checkout" element={<CheckoutAlt />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
