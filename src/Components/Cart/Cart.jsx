import React, { useContext } from "react";
import { PRODUCTS } from "../PRODUCTS";
import { ShopContext } from "../Context/ShopContext";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <h1 className="cart-headline">Your Cart</h1>
        <div className="wrapper cart-container">
          {PRODUCTS.map((item) => {
            if (cartItem[item.id] !== 0) {
              return <CartItem key={item.id} {...item} />;
            }
          })}
        </div>
        <h2 className="subtotal-headline">Subtotal : Rs. {totalAmount}</h2>
        <div className="btn-flex">
          <button
            className="continue-shopping-btn"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
