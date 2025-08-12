
import React from 'react';
import { Heart, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite text-ivory py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/fb3aaef9-3f29-40fe-b15f-44fa2bb267c4.png" 
                  alt="Estúdio Santa Gana"
                  className="h-8 sm:h-10 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-ivory/80 mb-4 leading-relaxed font-inter max-w-md text-sm sm:text-base">
                Ateliê de criação artística especializado em cenografia artesanal de alto padrão. 
                Transformamos ideias em experiências visuais únicas e marcantes.
              </p>
              <p className="text-sage font-playfair italic text-sm sm:text-base">
                "Cenografia poética feita à mão"
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-playfair font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Início', id: 'inicio' },
                  { label: 'Sobre', id: 'sobre' },
                  { label: 'Serviços', id: 'servicos' },
                  { label: 'Localização', id: 'localizacao' },
                  { label: 'Contato', id: 'contato' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-ivory/80 hover:text-sage transition-colors duration-300 font-inter story-link text-sm sm:text-base"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-playfair font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-sage mt-0.5 flex-shrink-0" />
                  <p className="text-ivory/80 text-xs sm:text-sm font-inter">
                    Av. Pref. Hirant Sanazar, 274<br />
                    1º andar - São Paulo, SP
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-sage flex-shrink-0" />
                  <a 
                    href="tel:11950687951" 
                    className="text-ivory/80 hover:text-sage transition-colors duration-300 text-xs sm:text-sm font-inter"
                  >
                    (11) 9 5068-7951
                  </a>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-sage flex-shrink-0 mt-0.5" />
                  <a 
                    href="mailto:contatosgpaper@gmail.com" 
                    className="text-ivory/80 hover:text-sage transition-colors duration-300 text-xs sm:text-sm font-inter break-all"
                  >
                    contatosgpaper@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Instagram className="w-4 sm:w-5 h-4 sm:h-5 text-sage flex-shrink-0" />
                  <a 
                    href="https://instagram.com/estudiosantagana" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-ivory/80 hover:text-sage transition-colors duration-300 text-xs sm:text-sm font-inter"
                  >
                    @estudiosantagana
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-ivory/20 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-ivory/60 text-xs sm:text-sm font-inter text-center sm:text-left">
                © {currentYear} Estúdio Santa Gana. Todos os direitos reservados.
              </p>
              
              <div className="flex items-center space-x-2 text-ivory/60 text-xs sm:text-sm font-inter">
                <span>Feito com</span>
                <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-sage" />
                <span>em São Paulo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
