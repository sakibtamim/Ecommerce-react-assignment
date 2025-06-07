import React from "react";
import LoginHomeHeader from "../components/loginhomeheader/LoginHomeHeader";
import Banner from "../components/banner/Banner";
import Sale from "../components/sale/Sale";
import Categories from "../components/categories/Categories";
import BsellingProducts from "../components/bSellingProdutcs/BsellingProducts";
import MusicBuy from "../components/musicBuy/MusicBuy";
import UserExploreProducts from "../components/userexploreproducts/UserExploreProducts";
import NewArrival from "../components/newarrival/NewArrival";
import Commitment from "../components/commitment/Commitment";

const LogInHomePage = () => {
  return (
    <>
      <LoginHomeHeader />
      <Banner />
      <Sale />
      <Categories />
      <BsellingProducts />
      <MusicBuy />
      <UserExploreProducts />
      <NewArrival />
      <Commitment />
    </>
  );
};

export default LogInHomePage;
