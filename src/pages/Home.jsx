import React from "react";
import Banner from "../components/comon/Banner";
import Work from "../components/comon/Work";
import Services from "../components/comon/services/Services";
import Promotion from "../components/comon/Promotion";
import Support from "../components/comon/Support";
import Merchant from "../components/comon/Merchant";
import Testimonial from "../components/comon/Testimonial";
import Faq from "../components/comon/Faq";

const Home = () => {
  return (
    <div>
      <Banner />
      <Work />
      <Services />
      <Promotion />
      <Support />
      <Merchant />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Home;
