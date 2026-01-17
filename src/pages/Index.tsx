import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Zap",
      title: "Электромонтаж",
      description: "Полный спектр монтажных работ любой сложности"
    },
    {
      icon: "Lightbulb",
      title: "Освещение",
      description: "Установка и замена светильников, люстр, подсветки"
    },
    {
      icon: "Power",
      title: "Розетки и выключатели",
      description: "Установка, перенос, ремонт розеток и выключателей"
    },
    {
      icon: "AlertCircle",
      title: "Устранение неисправностей",
      description: "Диагностика и ремонт электросетей, поиск обрывов"
    },
    {
      icon: "Gauge",
      title: "Электрощиты",
      description: "Монтаж и обслуживание распределительных щитов"
    },
    {
      icon: "Shield",
      title: "Заземление",
      description: "Монтаж систем заземления и защиты"
    }
  ];

  const certificates = [
    { title: "Лицензия на электромонтажные работы", number: "№ ЭЛ-12345" },
    { title: "Сертификат соответствия", number: "№ РОСС RU.МЕ88.Н00345" },
    { title: "Свидетельство СРО", number: "№ СРО-Э-156-28062020" },
    { title: "Допуск к работам до 1000В", number: "№ 4758930" }
  ];

  const advantages = [
    { icon: "Clock", text: "Выезд в течение 30 минут" },
    { icon: "BadgeCheck", text: "Гарантия на все работы 2 года" },
    { icon: "Wallet", text: "Прозрачное ценообразование" },
    { icon: "Users", text: "Опыт работы более 10 лет" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <header className="bg-secondary text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Zap" className="text-primary" size={32} />
              <div>
                <h1 className="text-2xl font-bold">ЭЛЕКТРИК УФА 24/7</h1>
                <p className="text-sm text-orange-200">Срочный выезд в любое время</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-orange-200">Звоните сейчас</p>
                <a href="tel:+73472000000" className="text-2xl font-bold hover:text-primary transition-colors">
                  +7 (347) 200-00-00
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-orange-50 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
              <Icon name="Clock" className="text-primary" size={24} />
              <span className="text-primary font-semibold">Работаем круглосуточно</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-extrabold text-secondary leading-tight">
              Срочный выезд<br />
              <span className="text-primary">электрика</span> в Уфе
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
              Приедем за 30 минут! Качественный ремонт, монтаж и замена электрики. 
              Работаем даже ночью и в выходные.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <Icon name="Phone" size={24} className="mr-2" />
                Вызвать электрика
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white text-lg px-8 py-6 rounded-xl transition-all"
              >
                <Icon name="MessageCircle" size={24} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="advantages">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="flex flex-col items-center text-center p-6 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={item.icon} className="text-primary" size={32} />
                  </div>
                  <p className="font-semibold text-secondary">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">Наши услуги</h2>
            <p className="text-xl text-gray-600">Выполняем электромонтажные работы любой сложности</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">О компании</h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Мы — профессиональная команда электриков с опытом работы более 10 лет. 
                Специализируемся на срочном выезде и качественном выполнении электромонтажных работ 
                любой сложности в Уфе и пригороде.
              </p>
              
              <p>
                Наши специалисты имеют все необходимые допуски и сертификаты, регулярно проходят 
                обучение и повышение квалификации. Работаем официально, предоставляем гарантию 
                на все виды работ.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Award" className="text-primary" size={32} />
                    <h3 className="text-2xl font-bold">Профессионализм</h3>
                  </div>
                  <p className="text-orange-100">
                    Все мастера с профильным образованием и опытом от 5 лет
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="ShieldCheck" className="text-primary" size={32} />
                    <h3 className="text-2xl font-bold">Надежность</h3>
                  </div>
                  <p className="text-orange-100">
                    Гарантия 2 года на все выполненные работы и материалы
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="certificates">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">Сертификаты и лицензии</h2>
            <p className="text-xl text-gray-600">Работаем официально и легально</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="FileCheck" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-1">{cert.title}</h3>
                      <p className="text-gray-600 font-semibold">{cert.number}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Все документы доступны для проверки</p>
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать копии документов
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-orange-600 text-white" id="contacts">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Контакты</h2>
            
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-12 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <Icon name="Phone" size={32} />
                  <a 
                    href="tel:+73472000000" 
                    className="text-3xl md:text-4xl font-bold hover:text-orange-200 transition-colors"
                  >
                    +7 (347) 200-00-00
                  </a>
                </div>
                
                <p className="text-xl text-orange-100">Круглосуточно, без выходных</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-orange-50 text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <Icon name="Phone" size={24} className="mr-2" />
                  Позвонить сейчас
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-xl transition-all"
                >
                  <Icon name="MessageSquare" size={24} className="mr-2" />
                  Telegram
                </Button>
              </div>

              <div className="pt-8 border-t border-white/20 space-y-4">
                <div className="flex items-center justify-center gap-3 text-orange-100">
                  <Icon name="MapPin" size={24} />
                  <span className="text-lg">г. Уфа и пригород</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-orange-100">
                  <Icon name="Mail" size={24} />
                  <span className="text-lg">elektrik.ufa24@mail.ru</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Zap" className="text-primary" size={28} />
            <span className="text-xl font-bold">ЭЛЕКТРИК УФА 24/7</span>
          </div>
          <p className="text-orange-200">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
