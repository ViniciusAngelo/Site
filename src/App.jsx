import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { 
  Scale, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Users, 
  Award,
  ChevronRight,
  Star
} from 'lucide-react';

// Importando as imagens
import heroImage from 'src/assets/Igor martins.jpeg';
import officeImage from './assets/NYq9klNK3El4.jpg';
import profileImage from 'src/assets/Profile.jpeg';
import justiceIcon from './assets/LVeLg92uUZi6.png';

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={justiceIcon} alt="Justiça" className="h-8 w-8" />
            <span className="font-bold text-xl text-primary">Dr. Igor Martins</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">Início</a>
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
          </nav>
          <Button className="hidden md:inline-flex">
            <Phone className="mr-2 h-4 w-4" />
            Agendar Consulta
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                <Award className="mr-2 h-4 w-4" />
                8+ Anos de Experiência
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Advocacia
                <span className="text-primary block">Especializada</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Defendendo seus direitos com excelência, ética e dedicação. 
                Soluções jurídicas personalizadas para cada cliente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Agendar Consulta
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  (15) 99774-6197
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Advogado profissional" 
                className="rounded-lg shadow-2xl w-full h-[700px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-8 w-8" />
                  <div>
                    <div className="font-bold text-lg">100%</div>
                    <div className="text-sm opacity-90">Casos Resolvidos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={profileImage} 
                alt="Dr. Igor Martins" 
                className="rounded-lg shadow-xl w-full h-[700px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">Sobre o Advogado</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Dr. Igor Martins
              </h2>
              <p className="text-lg text-muted-foreground">
                Formado pela Faculdade de Direito de Sorocaba (FADI) em 2018, com especialização em 
                Direito Civil e Empresarial. Membro da OAB/SP desde 1999, com vasta experiência 
                em litígios complexos e consultoria jurídica.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">500+ Clientes Atendidos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm">8+ Anos de Experiência</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Scale className="h-5 w-5 text-primary" />
                  <span className="text-sm">OAB/SP 123.456</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm">Avaliação 5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">Áreas de Atuação</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Serviços Jurídicos Especializados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções jurídicas completas e personalizadas para atender 
              às necessidades específicas de cada cliente.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Direito Civil",
                description: "Contratos, responsabilidade civil, direitos reais e obrigações.",
                icon: Scale
              },
              {
                title: "Direito Empresarial",
                description: "Constituição de empresas, contratos comerciais e consultoria.",
                icon: Users
              },
              {
                title: "Direito Trabalhista",
                description: "Relações de trabalho, rescisões e direitos trabalhistas.",
                icon: Shield
              },
              {
                title: "Direito Imobiliário",
                description: "Compra, venda, locação e regularização de imóveis.",
                icon: MapPin
              },
              {
                title: "Direito de Família",
                description: "Divórcio, pensão alimentícia, guarda e inventário.",
                icon: Users
              },
              {
                title: "Consultoria Jurídica",
                description: "Assessoria preventiva e análise de contratos.",
                icon: Award
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">Nosso Escritório</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ambiente Profissional e Acolhedor
              </h2>
              <p className="text-lg text-muted-foreground">
                Localizado em Sorocaba, nosso escritório oferece um ambiente 
                moderno e confortável para atendimento aos clientes, com toda a infraestrutura 
                necessária para prestar serviços jurídicos de excelência.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Av. Paulista, 1000 - São Paulo/SP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Segunda a Sexta: 8h às 18h</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={officeImage} 
                alt="Escritório de advocacia" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">Entre em Contato</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Agende sua Consulta
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para ajudar você. Entre em contato conosco e 
              agende uma consulta para discutir seu caso.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="text-muted-foreground mb-4">Ligue para nós</p>
              <Button variant="outline" className="w-full">
                (15) 99774-6197
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">E-mail</h3>
              <p className="text-muted-foreground mb-4">Envie uma mensagem</p>
              <Button variant="outline" className="w-full">
                contato@igor.martins.adv.br
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p className="text-muted-foreground mb-4">Visite nosso escritório</p>
              <Button variant="outline" className="w-full">
                Ver no Mapa
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={justiceIcon} alt="Justiça" className="h-8 w-8 filter invert" />
                <span className="font-bold text-xl">Dr. Igor Martins</span>
              </div>
              <p className="text-primary-foreground/80">
                Advocacia especializada com 8 anos de experiência, 
                oferecendo soluções jurídicas personalizadas.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(15) 99774-6197</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@igor.martins.adv.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Av. Paulista, 1000 - São Paulo/SP</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div>Segunda a Sexta: 8h às 18h</div>
                <div>Sábado: 8h às 12h</div>
                <div>Domingo: Fechado</div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-primary-foreground/20" />
          
          <div className="text-center text-primary-foreground/80">
            <p>&copy; 2025 Dr. Igor Martins - Advocacia Especializada. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">OAB/SP 123.456</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
