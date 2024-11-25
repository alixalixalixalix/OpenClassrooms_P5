import React from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlocLogement from "../components/BlocLogement";

const FicheLogement = () => {
  return (
    <div>
      <Header />
      <Slider />
      <BlocLogement />
      <Footer />
    </div>
  );
};

export default FicheLogement;
