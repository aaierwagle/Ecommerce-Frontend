import React from "react";
import BuyerProductList from "../component/BuyerProductList";
import SellerProductList from "../component/SellerProductList";

const ProductList = () => {
  const userRole = localStorage.getItem("role");

  return (
    <>{userRole === "seller" ? <SellerProductList /> : <BuyerProductList />}</>
  );
};

export default ProductList;
