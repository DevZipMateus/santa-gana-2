
import React from 'react';
import { Palette, Award, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos a perfeição em cada detalhe, garantindo qualidade superior em todas as criações.'
    },
    {
      icon: Palette,
      title: 'Criatividade',
      description: 'Inovação constante e soluções artísticas únicas para cada projeto especial.'
    },
    {
      icon: Heart,
      title: 'Sensibilidade Estética',
      description: 'Olhar refinado e cuidadoso para criar experiências visuais marcantes.'
    },
    {
      icon: Sparkles,
      title: 'Precisão Artesanal',
      description: 'Técnica apurada e atenção aos mínimos detalhes em cada peça criada.'
    }
  ];

  const differentials = [
    'Execução impecável com acabamento de alto padrão',
    'Linguagem visual refinada e contemporânea',
    'Versatilidade técnica em diversos materiais',
    'Produção sob medida para cada cliente'
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-graphite mb-4 sm:mb-6">
              Sobre o Estúdio
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-sage mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-graphite/80 max-w-3xl mx-auto leading-relaxed font-inter px-4">
              O Estúdio Santa Gana é um ateliê de criação artística especializado em peças cenográficas artesanais de alto padrão, com foco em festas de luxo, casamentos, vitrines e ativações de marca.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
            <div className="animate-fade-in order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-graphite mb-4 sm:mb-6">
                Arte que Transforma Espaços
              </h3>
              <p className="text-graphite/80 mb-4 sm:mb-6 leading-relaxed font-inter text-sm sm:text-base">
                Com um olhar arquitetônico e refinado, transformamos papel, tecido e outros materiais em esculturas e elementos decorativos que encantam pelo acabamento, criatividade e beleza.
              </p>
              <p className="text-graphite/80 mb-6 sm:mb-8 leading-relaxed font-inter text-sm sm:text-base">
                Atendemos decoradores, agências e marcas que buscam excelência estética e soluções personalizadas para experiências visuais marcantes.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-base sm:text-lg font-playfair font-semibold text-sage mb-3 sm:mb-4">
                  Nossos Diferenciais:
                </h4>
                {differentials.map((differential, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sage rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-graphite/80 font-inter text-sm sm:text-base">{differential}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right order-1 lg:order-2">
              <div className="bg-gradient-to-br from-sage/20 to-nude-rose/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Palette className="w-8 sm:w-10 h-8 sm:h-10 text-sage" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-playfair font-semibold text-graphite mb-3 sm:mb-4">
                    Missão do Estúdio
                  </h4>
                  <p className="text-graphite/80 leading-relaxed font-inter italic text-sm sm:text-base">
                    "Criar experiências visuais únicas através da arte cenográfica, 
                    transformando ideias em realidade com técnica, sensibilidade e paixão pelo que fazemos."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in p-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-sage/20 transition-colors duration-300">
                  <value.icon className="w-6 sm:w-8 h-6 sm:h-8 text-sage" />
                </div>
                <h3 className="text-base sm:text-lg font-playfair font-semibold text-graphite mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-graphite/70 text-xs sm:text-sm leading-relaxed font-inter">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
