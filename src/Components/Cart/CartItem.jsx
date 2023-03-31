import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../Context/ShopContext";

const CartItem = ({ id, name, price, image }) => {
  const { cartItem, removeFromCart, addToCart, updateItemAmount } =
    useContext(ShopContext);
  return (
    <>
      <div className="cart-body">
        <div className="cart-img">
          <img src={image} alt="Product" />
        </div>
        <h5>{name}</h5>
        <div className="cart-value-container">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItem[id]}
            onChange={(event) => updateItemAmount(event.target.value, id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
        <h6>{price}</h6>
      </div>
    </>
  );
};

export default CartItem;
