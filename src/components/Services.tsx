
import React from 'react';
import { Sparkles, Heart, Building, Palette, Gift, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Casamentos de Luxo',
      description: 'Cenografia artesanal para o dia mais especial, com flores e esculturas únicas que criam ambientes românticos e sofisticados.',
      features: ['Decoração cerimonial', 'Arranjos florais artesanais', 'Esculturas personalizadas', 'Ambientação completa']
    },
    {
      icon: Gift,
      title: 'Festas Infantis',
      description: 'Criações lúdicas e encantadoras que transformam celebrações em verdadeiros contos de fadas artesanais.',
      features: ['Cenários temáticos', 'Personagens em papel', 'Decoração interativa', 'Elementos sensoriais']
    },
    {
      icon: Building,
      title: 'Vitrines & Visual Merchandising',
      description: 'Soluções criativas para vitrines e espaços comerciais que atraem olhares e encantam clientes.',
      features: ['Design de vitrine', 'Elementos tridimensionais', 'Materiais sustentáveis', 'Conceito exclusivo']
    },
    {
      icon: Palette,
      title: 'Ativações de Marca',
      description: 'Experiências imersivas e memoráveis para marcas que desejam se conectar de forma única com seu público.',
      features: ['Conceito criativo', 'Execução técnica', 'Materiais premium', 'Resultado impactante']
    },
    {
      icon: Sparkles,
      title: 'Esculturas Artísticas',
      description: 'Peças únicas em papel, tecido e materiais diversos, criadas especialmente para cada projeto.',
      features: ['Design exclusivo', 'Técnicas artesanais', 'Materiais nobres', 'Acabamento impecável']
    },
    {
      icon: Camera,
      title: 'Cenografia para Fotografia',
      description: 'Cenários e backdrops artisticamente elaborados para sessões fotográficas profissionais.',
      features: ['Fundos artísticos', 'Elementos decorativos', 'Iluminação planejada', 'Versatilidade visual']
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-ivory to-nude-rose-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-graphite mb-4 sm:mb-6">
              Nossos Serviços
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-sage mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-graphite/80 max-w-3xl mx-auto leading-relaxed font-inter px-4">
              Criamos experiências visuais únicas através da arte cenográfica artesanal, 
              transformando seus sonhos em realidade com técnica e sensibilidade.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-sage/20 transition-colors duration-300">
                  <service.icon className="w-6 sm:w-8 h-6 sm:h-8 text-sage" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-playfair font-semibold text-graphite mb-3 sm:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-graphite/80 mb-4 sm:mb-6 leading-relaxed font-inter text-sm sm:text-base">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-xs sm:text-sm text-graphite/70">
                      <div className="w-1.5 h-1.5 bg-sage rounded-full flex-shrink-0"></div>
                      <span className="font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-sage/10 rounded-2xl p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm animate-fade-in">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-graphite mb-3 sm:mb-4">
              Pronto para Transformar sua Visão em Arte?
            </h3>
            <p className="text-graphite/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-inter text-sm sm:text-base px-4">
              Entre em contato conosco e vamos criar juntos uma experiência visual única e inesquecível.
            </p>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-sage hover:bg-sage-dark text-ivory px-6 sm:px-8 py-3 rounded-full font-inter font-medium transition-all duration-300 hover-scale shadow-lg text-sm sm:text-base"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
