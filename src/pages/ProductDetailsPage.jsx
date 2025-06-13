import React from "react";
import LoginHomeHeader from "../components/loginhomeheader/LoginHomeHeader";
import ProductDetailsBody from "../components/productDetailsbody/ProductDetailsBody";
import RelatedItems from "../components/relateditems/RelatedItems";

const ProductDetailsPage = () => {
  return (
    <>
      <LoginHomeHeader />
      <ProductDetailsBody />
      <RelatedItems />
    </>
  );
};

export default ProductDetailsPage;
