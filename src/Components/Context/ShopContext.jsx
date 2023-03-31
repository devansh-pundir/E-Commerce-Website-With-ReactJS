import React, { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../PRODUCTS";

const ShopContext = createContext();

const setDefaultState = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const itemsFromLocalStorage = JSON.parse(localStorage.getItem("cart") || 0);

const ShopContextProvider = (props) => {
  const [cartItem, setCartItems] = useState(itemsFromLocalStorage);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateItemAmount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItem[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  const contextValue = {
    cartItem,
    addToCart,
    removeFromCart,
    updateItemAmount,
    getTotalCartAmount,
  };

  console.log(cartItem);

  return (
    <>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </>
  );
};

export default ShopContextProvider;

export { ShopContext };
