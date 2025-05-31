import React from "react";
import { GiSmartphone } from "react-icons/gi";

const CategoriesReuseable = ({ itemIcon, itemName }) => {
  return (
    <div className="browseItem text-center">
      {itemIcon}
      <p>{itemName}</p>
    </div>
  );
};

export default CategoriesReuseable;
