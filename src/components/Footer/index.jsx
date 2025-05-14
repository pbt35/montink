import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-200 text-gray-700 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Institucional</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Sobre nós</a></li>
            <li><a href="#" className="hover:underline">Política de privacidade</a></li>
            <li><a href="#" className="hover:underline">Termos de uso</a></li>
            <li><a href="#" className="hover:underline">Carreiras</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Ajuda</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Fale conosco</a></li>
            <li><a href="#" className="hover:underline">Trocas e devoluções</a></li>
            <li><a href="#" className="hover:underline">Prazo de entrega</a></li>
            <li><a href="#" className="hover:underline">Perguntas frequentes</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Nos acompanhe</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF /></a>
            <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
            <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="text-red-600 hover:text-red-800"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Assine nossa newsletter</h3>
          <p className="text-sm mb-2">Receba promoções e novidades por e-mail.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="px-3 py-2 border bg-white rounded w-full"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className="bg-yellow-500 text-center text-sm py-4 -mb-6">
        © {new Date().getFullYear()} PatrickStore. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
