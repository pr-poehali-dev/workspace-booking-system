
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Wifi",
    title: "Высокоскоростной интернет",
    description: "Стабильное и быстрое подключение для комфортной работы без перебоев."
  },
  {
    icon: "Coffee",
    title: "Кофе и закуски",
    description: "Бесплатный кофе, чай и легкие закуски для поддержания энергии в течение дня."
  },
  {
    icon: "Calendar",
    title: "Гибкое бронирование",
    description: "Бронируйте на час, день, неделю или месяц — как вам удобно."
  },
  {
    icon: "ClockCountdown",
    title: "Круглосуточный доступ",
    description: "Работайте в удобное для вас время, 24/7 доступ для владельцев абонементов."
  },
  {
    icon: "Printer",
    title: "Современное оборудование",
    description: "Доступ к принтерам, сканерам и другому офисному оборудованию."
  },
  {
    icon: "Users",
    title: "Сообщество профессионалов",
    description: "Нетворкинг и общение с профессионалами из разных сфер."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Всё для вашего комфорта и продуктивности
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Мы создали идеальное пространство для работы и развития
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group relative rounded-xl border border-gray-100 p-6 transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <Icon name={feature.icon} size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
