import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

/* eslint-disable react-refresh/only-export-components */
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
  
    const expirationTime = Date.now() + 15 * 60 * 1000; 
    const cartData = { items: updatedCart, expiresAt: expirationTime };
  
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const { items, expiresAt } = JSON.parse(storedCart);
      if (Date.now() < expiresAt) {
        setCartItems(items);
      } else {
        localStorage.removeItem("cart"); 
      }
    }
  }, []);
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
