import { useState } from "react";
import axios from "axios";

const DeliveryChecker = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);
  const [error, setError] = useState("");

  const fetchAddress = async () => {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (data.erro) {
        setError("CEP não encontrado.");
        setAddress(null);
      } else {
        setError("");
        setAddress(data);
      }
    } catch {
      setError("Erro ao buscar o CEP.");
      setAddress(null);
    }
  };

  const handleCepChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5, 8);
    }
    setCep(value.slice(0, 9)); 
  };

  return (
    <div className="mt-6 w-full md:w-1/2">
      <label className="font-semibold block mb-1">Consultar entrega por CEP:</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={cep}
          onChange={handleCepChange}
          placeholder="Digite o CEP"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={fetchAddress}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Verificar
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {address && (
        <div className="mt-4 bg-gray-100 p-3 rounded text-sm">
          <p><strong>Endereço:</strong> {address.logradouro}, {address.bairro}, {address.localidade} - {address.uf}</p>
        </div>
      )}
    </div>
  );
};

export default DeliveryChecker;
