
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const testimonials = [
  {
    id: 1,
    content: "Прекрасное место для работы! Уютная атмосфера и отличный интернет. Благодаря CoWorkHub я смог сконцентрироваться на проекте и выполнить его в срок.",
    author: "Александр Иванов",
    role: "Фрилансер, UI/UX дизайнер",
    avatar: "https://source.unsplash.com/random/100x100?face=1",
    rating: 5
  },
  {
    id: 2,
    content: "Наша команда регулярно использует переговорные комнаты для встреч с клиентами. Отличное оборудование и удобное расположение в центре города.",
    author: "Елена Смирнова",
    role: "Руководитель проектов, Techstars",
    avatar: "https://source.unsplash.com/random/100x100?face=2",
    rating: 5
  },
  {
    id: 3,
    content: "Гибкая система бронирования позволяет мне работать когда удобно. Особенно ценю возможность круглосуточного доступа и наличие всего необходимого.",
    author: "Дмитрий Козлов",
    role: "Предприниматель",
    avatar: "https://source.unsplash.com/random/100x100?face=3",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Что говорят наши клиенты
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Более 200 профессионалов выбрали наше пространство для работы
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-0">
                <div className="flex text-yellow-400 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon 
                      key={i} 
                      name={i < testimonial.rating ? "Star" : "StarOff"} 
                      size={16} 
                      className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-700">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="mr-4 h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
