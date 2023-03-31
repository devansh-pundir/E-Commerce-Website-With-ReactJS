import React, { useContext } from "react";
import "./Card.css";
import { ShopContext } from "../Context/ShopContext";

const Card = ({ id, name, price, image }) => {
  const { addToCart, cartItem } = useContext(ShopContext);
  const cartItemAmount = cartItem[id];
  return (
    <>
      <div className="card-body">
        <div className="card-img">
          <img src={image} alt="Product" />
        </div>
        <h5>{name}</h5>
        <h6>{price}</h6>
        <button className="add-cart" onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </>
  );
};

export default Card;
