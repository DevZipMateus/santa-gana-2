
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-ivory to-nude-rose-light overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-full">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo Principal */}
          <div className="mb-6 sm:mb-8">
            <img 
              alt="Estúdio Santa Gana" 
              className="mx-auto h-24 sm:h-28 md:h-32 lg:h-40 w-auto hover-scale max-w-full" 
              src="/lovable-uploads/ebbaf673-2363-47ae-af74-0d22d60d5186.png" 
            />
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-graphite mb-4 sm:mb-6 leading-tight px-2 max-w-full break-words">
            Cenografia Poética
            <span className="block text-sage mt-2">Feita à Mão</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl text-graphite/80 mb-6 sm:mb-8 max-w-2xl mx-auto font-inter leading-relaxed px-4 break-words">
            Ateliê de criação artística especializado em peças cenográficas artesanais de alto padrão para festas de luxo, casamentos, vitrines e ativações de marca.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 max-w-full">
            <button 
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })} 
              className="w-full sm:w-auto max-w-xs bg-sage hover:bg-sage-dark text-ivory px-6 sm:px-8 py-3 rounded-full font-inter font-medium transition-all duration-300 hover-scale shadow-lg text-sm sm:text-base"
            >
              Nossos Serviços
            </button>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })} 
              className="w-full sm:w-auto max-w-xs border-2 border-sage text-sage hover:bg-sage hover:text-ivory px-6 sm:px-8 py-3 rounded-full font-inter font-medium transition-all duration-300 hover-scale text-sm sm:text-base"
            >
              Entre em Contato
            </button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToNext} 
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-sage hover:text-sage-dark transition-colors duration-300 animate-bounce" 
            aria-label="Rolar para baixo"
          >
            <ArrowDown size={24} className="sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 right-4 sm:right-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-sage/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-10 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 bg-nude-rose/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;
