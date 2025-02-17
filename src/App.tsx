import React, { useState } from 'react';
import { Menu, Phone, Mail, MapPin, ChevronRight, Calendar, Clock, Award, X, Brain, Heart, Activity, Users, Stethoscope, Baby, Star, Target, Sparkles, Zap, Timer, BarChart3, Layers } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Barra de contato superior moderna */}
      <div className="bg-gradient-to-r from-[#0081B4] to-[#00B4D8] text-white">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex justify-between items-center h-12">
            <div className="flex items-center space-x-6">
              <a href="tel:1199999999" className="flex items-center hover:text-blue-100 transition-colors group">
                <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                  <Phone size={14} className="mr-0" strokeWidth={1.5} />
                </div>
                <span className="ml-2">(11) 9999-9999</span>
              </a>
              <a href="mailto:contato@clinicadesenvolver.com.br" className="flex items-center hover:text-blue-100 transition-colors group">
                <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                  <Mail size={14} className="mr-0" strokeWidth={1.5} />
                </div>
                <span className="ml-2">contato@clinicadesenvolver.com.br</span>
              </a>
            </div>
            <div className="flex items-center hover:text-blue-100 transition-colors group cursor-pointer">
              <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                <MapPin size={14} className="mr-0" strokeWidth={1.5} />
              </div>
              <span className="ml-2">São Paulo, SP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cabeçalho principal modernizado */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src="/logo-desenvolver.png" 
                alt="Clínica Desenvolver" 
                className="h-14 md:h-16 hover:opacity-90 transition-opacity"
              />
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Início', 'Sobre Nós', 'Especialidades', 'Equipe', 'Contato'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-gray-700 hover:text-[#0081B4] transition-all duration-200 font-medium relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0081B4] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              ))}
              <button className="bg-[#0081B4] hover:bg-[#00B4D8] text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center">
                <Calendar size={18} className="mr-2" />
                Agendar
              </button>
            </nav>

            {/* Botão Menu Mobile */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={24} className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <X size={24} className={`absolute transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {['Início', 'Sobre Nós', 'Especialidades', 'Equipe', 'Contato'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="block text-gray-700 hover:text-[#0081B4] hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-[#0081B4] hover:bg-[#00B4D8] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center mt-4">
              <Calendar size={18} className="mr-2" />
              Agendar Consulta
            </button>
            {/* Informações de contato mobile */}
            <div className="border-t border-gray-100 mt-4 pt-4 space-y-3">
              <a href="tel:1199999999" className="flex items-center text-gray-600 hover:text-[#0081B4] px-4 py-2">
                <Phone size={16} className="mr-3" />
                (11) 9999-9999
              </a>
              <a href="mailto:contato@clinicadesenvolver.com.br" className="flex items-center text-gray-600 hover:text-[#0081B4] px-4 py-2">
                <Mail size={16} className="mr-3" />
                contato@clinicadesenvolver.com.br
              </a>
              <div className="flex items-center text-gray-600 px-4 py-2">
                <MapPin size={16} className="mr-3" />
                Florianópolis, SC
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0081B4] via-[#0098B4] to-[#00B4D8] py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3')] mix-blend-overlay opacity-10 bg-center bg-cover"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-white relative z-10">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Cuidando da sua saúde com excelência
                </h1>
                <p className="text-lg md:text-xl text-blue-50 leading-relaxed">
                  Equipe multidisciplinar especializada em reabilitação e tratamentos médicos personalizados para você e sua família.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-white text-[#0081B4] px-8 py-3.5 rounded-full font-semibold flex items-center justify-center hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <Calendar className="mr-2" size={20} />
                    Agende sua Consulta
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                    Conheça nossos serviços
                    <ChevronRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                  <Clock className="text-blue-100 mb-2" size={24} strokeWidth={1.5} />
                  <h3 className="font-semibold mb-1">Atendimento Rápido</h3>
                  <p className="text-sm text-blue-50">Consultas no mesmo dia</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                  <Award className="text-blue-100 mb-2" size={24} strokeWidth={1.5} />
                  <h3 className="font-semibold mb-1">Equipe Premiada</h3>
                  <p className="text-sm text-blue-50">Profissionais certificados</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0081B4] to-transparent opacity-20 rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80" 
                  alt="Equipe médica" 
                  className="rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-800 font-medium">Atendimento Online Disponível</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Especialidades e Diferenciais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Título da Seção */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Excelência em Saúde e Reabilitação
            </h2>
            <p className="text-gray-600 text-lg">
              Nossa clínica oferece atendimento multidisciplinar personalizado, 
              combinando tecnologia avançada e profissionais especializados para 
              cuidar da sua saúde.
            </p>
          </div>

          {/* Grid de Especialidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: "Neurologia",
                description: "Tratamento especializado para distúrbios neurológicos com abordagem multidisciplinar.",
                color: "blue"
              },
              {
                icon: Heart,
                title: "Cardiologia",
                description: "Acompanhamento cardíaco completo com tecnologia de ponta.",
                color: "red"
              },
              {
                icon: Activity,
                title: "Fisioterapia",
                description: "Reabilitação física personalizada para recuperação eficiente.",
                color: "green"
              },
              {
                icon: Users,
                title: "Terapia Familiar",
                description: "Suporte psicológico para fortalecer vínculos e promover bem-estar emocional.",
                color: "purple"
              },
              {
                icon: Stethoscope,
                title: "Clínica Geral",
                description: "Atendimento médico completo para toda a família.",
                color: "indigo"
              },
              {
                icon: Baby,
                title: "Pediatria",
                description: "Cuidados especializados para a saúde das crianças desde o nascimento.",
                color: "pink"
              }
            ].map((specialty, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-${specialty.color}-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <specialty.icon 
                    className={`text-${specialty.color}-500`} 
                    size={28}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {specialty.title}
                </h3>
                <p className="text-gray-600">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>

          {/* Estatísticas */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Anos de Experiência" },
                { number: "50+", label: "Especialistas" },
                { number: "10k+", label: "Pacientes Atendidos" },
                { number: "98%", label: "Satisfação" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#0081B4] mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA - Call to Action */}
          <div className="mt-16 text-center">
            <button className="bg-[#0081B4] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center hover:bg-[#00B4D8] transition-colors duration-300 transform hover:-translate-y-0.5">
              <Calendar className="mr-2" size={20} />
              Agende sua Primeira Consulta
            </button>
            <p className="mt-4 text-gray-600">
              Primeira consulta com desconto especial
            </p>
          </div>
        </div>
      </section>

      {/* Seção Quem Somos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3" 
                  alt="Equipe médica" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#0081B4] p-8 rounded-2xl text-white max-w-xs shadow-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="text-yellow-300" size={24} />
                  <h4 className="text-lg font-semibold">Excelência em Saúde</h4>
                </div>
                <p className="text-blue-50">Equipe multiprofissional altamente qualificada e comprometida com seu bem-estar.</p>
              </div>
            </div>

            <div className="lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Onde Excelência e Cuidado se Encontram
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                A Clínica Desenvolver une ciência, empatia e inovação para transformar vidas. 
                Nossa abordagem integra diferentes especialidades, oferecendo um atendimento 
                completo e personalizado para cada paciente.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Atendimento Personalizado",
                    description: "Planos de cuidado individualizados baseados nas necessidades específicas de cada caso."
                  },
                  {
                    icon: Sparkles,
                    title: "Estrutura Moderna",
                    description: "Ambiente acolhedor e tecnológico, planejado para seu conforto e bem-estar."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-xl">
                      <feature.icon className="text-[#0081B4]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Destaque Neuropediatria */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Excelência em Neuropediatria
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nosso destaque no cuidado neuropediátrico oferece às crianças a 
                possibilidade de alcançar seu máximo potencial, superando limites 
                e transformando desafios em conquistas.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Metodologias Reconhecidas
                </h3>
                <div className="space-y-4">
                  {["Therasuit", "Bobath", "Abordagem Multidisciplinar", "Acompanhamento Personalizado"].map((method, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#0081B4]"></div>
                      <span className="text-gray-700">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3" 
                alt="Atendimento infantil" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-2 text-[#0081B4] mb-2">
                  <Award size={24} />
                  <h4 className="text-lg font-semibold">Referência em Tratamento</h4>
                </div>
                <p className="text-gray-600">
                  Metodologias inovadoras para o desenvolvimento infantil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Tratamentos Intensivos */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Cabeçalho da Seção */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Tratamentos Intensivos: Resultados Transformadores
            </h2>
            <p className="text-gray-600 text-lg">
              Uma abordagem revolucionária que oferece resultados mais rápidos, 
              eficazes e duradouros através de cuidados focados e personalizados.
            </p>
          </div>

          {/* Grid de Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Zap,
                title: "Resultados Rápidos",
                description: "Avanços significativos em períodos mais curtos de tratamento"
              },
              {
                icon: Timer,
                title: "Alta Frequência",
                description: "Sessões intensivas que potencializam a recuperação"
              },
              {
                icon: BarChart3,
                title: "Maior Eficácia",
                description: "Resultados mais consistentes e duradouros"
              },
              {
                icon: Layers,
                title: "Personalização",
                description: "Tratamento adaptado às necessidades individuais"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#0081B4]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="text-[#0081B4]" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Seção Método Therasuit */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3" 
                alt="Tratamento Intensivo" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-2 text-[#0081B4] mb-2">
                  <Star size={24} />
                  <h4 className="text-lg font-semibold">Método Therasuit</h4>
                </div>
                <p className="text-gray-600">
                  Tecnologia avançada para reabilitação motora e funcional.
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Método Therasuit: Inovação em Reabilitação
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Uma abordagem revolucionária que combina um traje especial com exercícios 
                específicos para potencializar a força muscular, equilíbrio e funcionalidade.
              </p>

              {/* Lista de Aplicações */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Aplicações</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Reabilitação Motora",
                      "Melhora Postural",
                      "Coordenação Motora",
                      "Fortalecimento Muscular",
                      "Equilíbrio",
                      "Independência Funcional"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#0081B4]"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button className="mt-8 bg-[#0081B4] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center hover:bg-[#00B4D8] transition-colors duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                <Calendar className="mr-2" size={20} />
                Agende sua Avaliação
              </button>
            </div>
          </div>

          {/* Destaques Finais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            <div className="bg-gradient-to-br from-[#0081B4] to-[#00B4D8] p-8 rounded-2xl text-white">
              <h4 className="text-xl font-semibold mb-4">Fisioterapia Intensiva</h4>
              <p className="text-blue-50 mb-6">
                Recuperação acelerada com foco em ganhos motores e funcionais, 
                utilizando tecnologias avançadas e métodos comprovados.
              </p>
              <div className="flex items-center text-sm">
                <Clock size={16} className="mr-2" />
                <span>Resultados em menos tempo</span>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Fonoaudiologia Intensiva</h4>
              <p className="text-gray-600 mb-6">
                Abordagem especializada para questões de deglutição, respiração e 
                coordenação motora oral, com resultados significativos.
              </p>
              <div className="flex items-center text-sm text-[#0081B4]">
                <Target size={16} className="mr-2" />
                <span>Tratamento personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;