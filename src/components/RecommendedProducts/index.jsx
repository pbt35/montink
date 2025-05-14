
const RecommendedProducts = ({ products }) => {
    return (
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Você também pode gostar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((item, index) => (
            <div key={index} className="border rounded p-4 hover:shadow-lg transition">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded mb-2" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-green-600 font-medium">R$ {item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RecommendedProducts;
  