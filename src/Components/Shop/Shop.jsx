import React from "react";
import { PRODUCTS } from "../PRODUCTS";
import Card from "../Shop/Card";
import "./Shop.css";

const Shop = () => {
  console.log(PRODUCTS);
  return (
    <>
      <div className="wrapper">
        <h1 className="shop-headline">Shop Products</h1>
        <div className="wrapper shop-container">
          {PRODUCTS.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
