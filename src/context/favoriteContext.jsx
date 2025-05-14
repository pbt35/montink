import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();
/* eslint-disable react-refresh/only-export-components */

export const useFavorites = () => useContext(FavoriteContext);

const FAVORITE_STORAGE_KEY = "favorites";
const EXPIRATION_MINUTES = 15;

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITE_STORAGE_KEY);
    if (stored) {
      const { items, expiresAt } = JSON.parse(stored);
      if (Date.now() < expiresAt) {
        setFavorites(items);
      } else {
        localStorage.removeItem(FAVORITE_STORAGE_KEY);
      }
    }
  }, []);

  const updateLocalStorage = (items) => {
    const expiresAt = Date.now() + EXPIRATION_MINUTES * 60 * 1000;
    localStorage.setItem(
      FAVORITE_STORAGE_KEY,
      JSON.stringify({ items, expiresAt })
    );
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      updateLocalStorage(newFavorites);
      return newFavorites;
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
