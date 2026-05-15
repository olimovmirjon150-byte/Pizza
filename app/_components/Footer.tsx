import {
  FaInstagram,
  FaTelegramPlane,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white mt-20">
      
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold">
            🍕 Pizza Shop
          </h2>

          <p className="mt-4 text-orange-100 leading-relaxed">
            Самая вкусная пицца с быстрой и горячей доставкой прямо к вашей двери.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Меню
          </h3>

          <ul className="space-y-3 text-orange-100">
            <li className="hover:text-white transition cursor-pointer">
              Пиццы
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Комбо
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Напитки
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Десерты
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Контакты
          </h3>

          <ul className="space-y-3 text-orange-100">
            <li>📍 Ташкент, Узбекистан</li>
            <li>📞 +998 90 123 45 67</li>
            <li>✉️ pizzahot@gmail.com</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Мы в соцсетях
          </h3>

          <div className="flex gap-4">
            
            <button className="w-11 h-11 rounded-full bg-white/20 hover:bg-white hover:text-orange-500 transition flex items-center justify-center">
              <FaInstagram size={20} />
            </button>

            <button className="w-11 h-11 rounded-full bg-white/20 hover:bg-white hover:text-orange-500 transition flex items-center justify-center">
              <FaTelegramPlane size={20} />
            </button>

            <button className="w-11 h-11 rounded-full bg-white/20 hover:bg-white hover:text-orange-500 transition flex items-center justify-center">
              <FaFacebookF size={20} />
            </button>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-orange-400">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          
          <p className="text-orange-100 text-sm">
            © 2026 PizzaHot. Все права защищены.
          </p>

          <div className="flex gap-6 text-sm text-orange-100">
            <p className="hover:text-white cursor-pointer transition">
              Политика конфиденциальности
            </p>

            <p className="hover:text-white cursor-pointer transition">
              Условия использования
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;