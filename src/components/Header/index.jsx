import { useState } from "react";
import { FaShoppingCart, FaHeart, FaUser, FaChevronDown } from "react-icons/fa";
import menuData from "../../api/menuData";
import { useFavorites } from "../../context/favoriteContext";
import { useCart } from "../../context/cartContext";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const { favorites } = useFavorites();
  const { cartItems } = useCart()

  const toggleMenu = (title) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  return (
    <header className="bg-yellow-300 shadow-md px-6 py-4 sticky top-0 z-50 -mt-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-black cursor-pointer mr-30">
          PatrickStore
        </div>
        <nav className="hidden md:flex gap-6">
          {menuData.map(({ title, options }) => (
            <div key={title} className="relative">
              <button
                onClick={() => toggleMenu(title)}
                className="flex items-center gap-1 font-medium hover:text-blue-600"
              >
                {title}
                <FaChevronDown size={12} />
              </button>
              {openMenu === title && (
                <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg z-50 cursor-pointer">
                  {options.map((item) => (
                    <div
                      key={item}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex-1 mx-6 hidden md:block">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center space-x-4 text-gray-600">
          <button className="hover:text-blue-600 transition cursor-pointer">
            <FaUser size={20} />
          </button>
          <button className="hover:text-blue-600 transition cursor-pointer">
            <FaShoppingCart size={20} />
            {cartItems.length > 0 && (
            <span className="absolute top-4 bg-red-600 text-white text-xs rounded-full px-1">
                {cartItems.length}
            </span>
            )}
          </button>
          <button className="hover:text-blue-600 transition relative cursor-pointer">
            <FaHeart size={20} />
            {favorites.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
            {favorites.length}
          </span>
        )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
