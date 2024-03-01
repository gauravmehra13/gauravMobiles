import React from "react";
import HeroSec from "../Components/HeroSec/HeroSec";
import FeatureCards from "../Components/FeatureCards/FeatureCards";
import BestSellers from "../Components/BestSellers/BestSellers";
import FAQs from "../Components/FAQs/FAQs";
import LatestProducts from "../Components/LatestProducts/LatestProducts";
import ScrollButton from "../Components/ScrollButton/ScrollButton";

const LandingPage = () => {
  return (
    <div>
      <HeroSec />
      <ScrollButton />
      <FeatureCards />
      {/* <BestSellers/> */}
      <LatestProducts />
      <FAQs />
    </div>
  );
};

export default LandingPage;
