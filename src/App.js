import { Route, Routes } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarResponsive from "./Components/NavResp/NavbarResponsive";
import LandingPage from "./Pages/LandingPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import NextPage from "./Pages/NextPage/NextPage";
import Cartpage from "./Pages/CartPage/Cartpage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import Footer from "./Components/Footer/Footer";
import CheckoutAlt from "./Pages/CheckoutAlt/CheckoutAlt";
import Contact from "./Pages/ContactUS/Contact";
import About from "./Pages/AboutUs/About";
import Track from "./Pages/Track/Track";

function App() {
  
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
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/checkout" element={<CheckoutAlt />} />
        <Route path="/track" element={<Track />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
