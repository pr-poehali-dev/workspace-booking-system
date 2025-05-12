
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const workspaces = [
  {
    id: 1,
    title: "Фиксированное место",
    description: "Постоянное рабочее место за выделенным столом с персональным шкафчиком",
    price: "от 12 000 ₽/мес",
    image: "https://source.unsplash.com/random/600x400?desk",
    features: ["24/7 доступ", "Персональный шкафчик", "Эргономичное кресло"],
    popular: false,
    icon: "Briefcase"
  },
  {
    id: 2,
    title: "Гибкое место",
    description: "Свободное место в общей зоне, работайте где угодно",
    price: "от 8 000 ₽/мес",
    image: "https://source.unsplash.com/random/600x400?workspace",
    features: ["Доступ в рабочие часы", "Общая зона", "Высокоскоростной Wi-Fi"],
    popular: true,
    icon: "Laptop"
  },
  {
    id: 3,
    title: "Переговорная комната",
    description: "Просторная комната для встреч и презентаций до 8 человек",
    price: "от 1 500 ₽/час",
    image: "https://source.unsplash.com/random/600x400?meeting",
    features: ["Проектор", "Флипчарт", "Кофе и чай"],
    popular: false,
    icon: "Users"
  },
];

const WorkspaceCards = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {workspaces.map((workspace) => (
        <Card 
          key={workspace.id} 
          className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
            workspace.popular ? 'ring-2 ring-violet-500' : ''
          }`}
        >
          <div className="relative h-48 overflow-hidden">
            <img 
              src={workspace.image} 
              alt={workspace.title} 
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
            />
            {workspace.popular && (
              <Badge className="absolute right-2 top-2 bg-violet-600">
                Популярно
              </Badge>
            )}
          </div>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-violet-100 p-2 text-violet-600">
                <Icon name={workspace.icon} size={18} />
              </div>
              <CardTitle>{workspace.title}</CardTitle>
            </div>
            <CardDescription>{workspace.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <span className="text-xl font-bold text-gray-900">{workspace.price}</span>
            </div>
            <ul className="space-y-2">
              {workspace.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Icon name="Check" className="h-4 w-4 text-violet-600" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-violet-600 hover:bg-violet-700">
              Забронировать
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default WorkspaceCards;
