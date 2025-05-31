import React from "react";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
const ExploreProductsReuseable = ({
  titleImg,
  titleName,
  titlePrice,
  titleRating,
  title4thBlank,
  title5thBlank,
}) => {
  return (
    <div className="productsItem">
      <div className="productsItemImg text-center">
        <img src={titleImg} alt="" />

        <div className="wishlist text-center">
          <FaRegHeart />
        </div>
        <div className="eye text-center">
          <FiEye />
        </div>
        <div className="addcart text-center">Add To Cart</div>
      </div>
      <div className="productsItembody">
        <h5>{titleName}</h5>
        <div className="rating d-flex gap-2">
          <span>{titlePrice}</span>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar style={{ color: title4thBlank }} />
          <FaStar style={{ color: title5thBlank }} />
          <p>({titleRating})</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreProductsReuseable;
