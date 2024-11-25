import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerHome from "../components/BannerHome";
import ListCard from "../components/ListCard";

const Home = () => {
  return (
    <div>
      <Header />
      <BannerHome />
      <ListCard />
      <Footer />
    </div>
  );
};

export default Home;
