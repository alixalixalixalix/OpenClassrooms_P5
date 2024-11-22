import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ListCard from "../components/ListCard";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ListCard />
      <Footer />
    </div>
  );
};

export default Home;
