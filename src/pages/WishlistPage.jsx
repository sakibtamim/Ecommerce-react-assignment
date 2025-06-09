import React from "react";
import LoginHomeHeader from "../components/loginhomeheader/LoginHomeHeader";
import WishlistItems from "../components/wishlistitems/WishlistItems";
import FormeItems from "../components/formeitems/FormeItems";

const WishlistPage = () => {
  return (
    <>
      <LoginHomeHeader />
      <WishlistItems />
      <FormeItems />
    </>
  );
};

export default WishlistPage;
