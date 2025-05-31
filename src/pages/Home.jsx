import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Sale from "../components/sale/Sale";
import Categories from "../components/categories/Categories";
import BsellingProducts from "../components/bSellingProdutcs/BsellingProducts";
import MusicBuy from "../components/musicBuy/MusicBuy";
import ExploreProducts from "../components/exploreProdutcs/ExploreProducts";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Sale />
      <Categories />
      <BsellingProducts />
      <MusicBuy />
      <ExploreProducts />
    </>
  );
};

export default Home;
