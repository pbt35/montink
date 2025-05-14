import ProductInfo from "./components/ProductInfo";
import DeliveryChecker from "./components/DeliveryChecker";
import { useLocalStorageWithExpiry } from "./hooks/useLocalStorage";
import productData from "./api/productData";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [selected, setSelected] = useLocalStorageWithExpiry(
    "userSelection",
    { size: null, color: null },
    15 * 60 * 1000
  );

  return (
    <div className="min-h-screen bg-red py-6">
    <Header />
    <div className="mx-[10%] md:mx-[30%] mt-16">
      <ProductInfo
        title={productData.title}
        price={productData.price}
        variants={productData.variants}
        selected={selected}
        setSelected={setSelected}
        features={productData.features}
        products={productData.recommended}
      />
    </div>
    <Footer />
  </div>

  );
}

export default App;
