import { FaHeart, FaRegHeart } from "react-icons/fa";
import ImageGallery from "../ImageGallery";
import DeliveryChecker from "../DeliveryChecker";
import RecommendedProducts from "../RecommendedProducts";
import AskSeller from "../AskSeller";
import ProductRating from "../ProductRating";
import { useFavorites } from "../../context/favoriteContext";
import { useCart } from "../../context/cartContext";

const ProductInfo = ({ title, variants, selected, setSelected, features = [], products }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  const productId = title;

  const defaultPrice = 97.90;

  const isFavorited = favorites.includes(productId);

  const handleBuyNow = () => {
    alert("Redirecionando para checkout...");
  };

  const selectedColorData = variants.colors.find(
    (color) => color.name === selected.color
  );
  const price = selectedColorData ? selectedColorData.price : defaultPrice;

  return (
    <div className="w-full">
      <ImageGallery
        colors={variants.colors}
        selectedColor={selected.color}
        setSelected={setSelected}
        selected={selected}
      />

      <div className="flex items-center justify-between mt-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <button
          onClick={() => toggleFavorite(productId)}
          className="text-red-500 hover:scale-110 transition"
        >
          {isFavorited ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
        </button>
      </div>

      <p className="text-xl text-green-600 font-semibold mt-2">
        R$ {price.toFixed(2)}
      </p>

      <div className="mt-4">
        <label className="font-semibold">Tamanho:</label>
        <div className="flex gap-2 mt-1">
          {variants.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelected({ ...selected, size })}
              className={`px-4 py-2 border rounded cursor-pointer ${
                selected.size === size ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="font-semibold">Cor:</label>
        <div className="flex gap-2 mt-1">
          {variants.colors.map(({ name }) => (
            <button
              key={name}
              onClick={() => setSelected({ ...selected, color: name })}
              className={`px-4 py-2 border rounded cursor-pointer ${
                selected.color === name ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <ProductRating />
      <DeliveryChecker />

      <div className="mt-6 space-y-3">
      <button
        onClick={() =>
            addToCart({
            id: title,
            size: selected.size,
            color: selected.color,
            price: selectedColorData?.price ?? 0,
            })
        }
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition cursor-pointer"
        >
        Adicionar ao carrinho
        </button>
        <button
          onClick={handleBuyNow}
          className="w-full bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition cursor-pointer"
        >
          Comprar Agora
        </button>
      </div>
      {features.length > 0 && (
        <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Características do Produto</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
        {features.map((feature, index) => (
            <li key={index}>{feature}</li>
        ))}
            </ul>
        </div>
        )}
        <RecommendedProducts products={products} />
        <AskSeller />
    </div>
  );
};

export default ProductInfo;
