import Banner from "../components/banner/Banner";
import Sale from "../components/sale/Sale";
import Categories from "../components/categories/Categories";
import BsellingProducts from "../components/bSellingProdutcs/BsellingProducts";
import MusicBuy from "../components/musicBuy/MusicBuy";
import ExploreProducts from "../components/exploreProdutcs/ExploreProducts";
import NewArrival from "../components/newarrival/NewArrival";
import Commitment from "../components/commitment/Commitment";
import Header from "../components/header/Header";

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
      <NewArrival />
      <Commitment />
    </>
  );
};

export default Home;
