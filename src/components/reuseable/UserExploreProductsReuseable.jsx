import React from "react";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const UserExploreProductsReuseable = ({
  titlenew,
  titleBG,
  titleImg,
  titleName,
  titlePrice,
  titleRating,
  title4thBlank,
  title5thBlank,
  titlecolor1,
  titlecolor2,
  titlecolor1border,
}) => {
  return (
    <div className="productsItem">
      <div className="productsItemImg text-center">
        <img src={titleImg} alt="" />
        <div className="new" style={{ backgroundColor: titleBG }}>
          {titlenew}
        </div>
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
        <div className="colorchoice d-flex gap-2">
          <div className="color1" style={{ border: titlecolor1border }}>
            <div
              className="active "
              style={{ backgroundColor: titlecolor1 }}
            ></div>
          </div>
          <div
            className="color2"
            style={{ backgroundColor: titlecolor2 }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UserExploreProductsReuseable;
