
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Пространство для
                <span className="text-violet-600"> ваших идей</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                Современный коворкинг в центре города. Удобные рабочие места, 
                переговорные комнаты и приятная атмосфера для продуктивной работы.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                  Забронировать место
                </Button>
                <Button size="lg" variant="outline">
                  Виртуальный тур
                </Button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden">
                      <img
                        src={`https://source.unsplash.com/random/100x100?face&${i}`}
                        alt={`Пользователь ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="ml-4 text-sm font-medium text-gray-900">
                  Присоединяйтесь к сообществу из 200+ профессионалов
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://source.unsplash.com/random/800x600?coworking"
                alt="Современный коворкинг"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-0 -z-10 h-64 w-64 rounded-full bg-violet-100 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 -z-10 h-64 w-64 rounded-full bg-violet-100 opacity-30 blur-3xl"></div>
    </section>
  );
};

export default Hero;
