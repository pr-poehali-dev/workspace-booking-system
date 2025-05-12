
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Логотип и информация о компании */}
          <div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-violet-400">CoWork</span>
              <span className="ml-1 text-2xl font-bold text-white">Hub</span>
            </div>
            <p className="mt-4 text-gray-400">
              Современное рабочее пространство для продуктивной работы и развития вашего бизнеса.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-violet-400">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-semibold text-white">Навигация</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-violet-400">Главная</Link>
              </li>
              <li>
                <Link to="/workspaces" className="text-gray-400 hover:text-violet-400">Рабочие места</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-violet-400">Цены</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-violet-400">О нас</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-violet-400">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold text-white">Контакты</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Icon name="MapPin" size={16} className="mr-2 mt-1 text-gray-400" />
                <span className="text-gray-400">ул. Примерная 123, Москва, 123456</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-400">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-400">info@coworkhub.ru</span>
              </li>
            </ul>
          </div>

          {/* Время работы */}
          <div>
            <h3 className="text-lg font-semibold text-white">Время работы</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between text-gray-400">
                <span>Понедельник - Пятница:</span>
                <span>8:00 - 22:00</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Суббота:</span>
                <span>9:00 - 20:00</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Воскресенье:</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="mt-4 flex items-center">
                <Icon name="Clock" size={16} className="mr-2 text-violet-400" />
                <span className="text-violet-400">24/7 для владельцев абонементов</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CoWorkHub. Все права защищены.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link to="/terms" className="text-sm text-gray-400 hover:text-violet-400">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-violet-400">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
