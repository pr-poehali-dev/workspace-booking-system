
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import WorkspaceCards from "@/components/WorkspaceCards";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Навигационная панель */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-violet-600">CoWork</span>
                <span className="ml-1 text-2xl font-bold text-gray-800">Hub</span>
              </Link>
            </div>
            <nav className="hidden space-x-8 md:flex">
              <Link to="/" className="text-gray-800 hover:text-violet-600">Главная</Link>
              <Link to="/workspaces" className="text-gray-800 hover:text-violet-600">Рабочие места</Link>
              <Link to="/pricing" className="text-gray-800 hover:text-violet-600">Цены</Link>
              <Link to="/about" className="text-gray-800 hover:text-violet-600">О нас</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:inline-flex">Войти</Button>
              <Button className="bg-violet-600 hover:bg-violet-700">Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Секция Hero */}
        <Hero />

        {/* Секция рабочих пространств */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Идеальное пространство для работы
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Выберите рабочее место, которое подходит вашему стилю и потребностям
              </p>
            </div>
            <WorkspaceCards />
          </div>
        </section>

        {/* Секция особенностей */}
        <Features />

        {/* Секция отзывов */}
        <Testimonials />

        {/* Секция CTA */}
        <section className="bg-violet-600 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Начните работать продуктивно уже сегодня
              </h2>
              <p className="mt-4 text-lg text-violet-100">
                Первая неделя бесплатно при регистрации до конца месяца
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
                  Забронировать место
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <Footer />
    </div>
  );
};

export default Index;
