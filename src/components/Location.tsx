
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="py-12 sm:py-16 lg:py-20 bg-ivory overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-graphite mb-4 sm:mb-6 break-words">
              Nossa Localização
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-sage mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-graphite/80 max-w-3xl mx-auto leading-relaxed font-inter px-4 break-words">
              Venha conhecer nosso ateliê em São Paulo e descobrir de perto 
              todo o cuidado e arte que colocamos em cada criação.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-full">
            {/* Contact Info */}
            <div className="animate-fade-in order-2 lg:order-1 max-w-full">
              <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-graphite mb-6 sm:mb-8 break-words">
                Informações de Contato
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-sage" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-playfair font-semibold text-graphite mb-1 text-sm sm:text-base">Endereço</h4>
                    <p className="text-graphite/80 font-inter text-sm sm:text-base break-words">
                      Av. Pref. Hirant Sanazar, 274 - 1º andar<br />
                      São Paulo, SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-sage" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-playfair font-semibold text-graphite mb-1 text-sm sm:text-base">Telefone</h4>
                    <a 
                      href="tel:11950687951" 
                      className="text-graphite/80 hover:text-sage transition-colors duration-300 font-inter text-sm sm:text-base break-words"
                    >
                      (11) 9 5068-7951
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-sage" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-playfair font-semibold text-graphite mb-1 text-sm sm:text-base">E-mail</h4>
                    <a 
                      href="mailto:contatosgpaper@gmail.com" 
                      className="text-graphite/80 hover:text-sage transition-colors duration-300 font-inter text-sm sm:text-base break-all"
                    >
                      contatosgpaper@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-sage" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-playfair font-semibold text-graphite mb-1 text-sm sm:text-base">Atendimento</h4>
                    <p className="text-graphite/80 font-inter text-sm sm:text-base break-words">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 9h às 14h
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6 sm:mt-8">
                <h4 className="font-playfair font-semibold text-graphite mb-3 sm:mb-4 text-sm sm:text-base">Siga-nos</h4>
                <a 
                  href="https://instagram.com/estudiosantagana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sage hover:text-sage-dark transition-colors duration-300 font-inter text-sm sm:text-base break-words"
                >
                  <span>@estudiosantagana</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="animate-slide-in-right order-1 lg:order-2 max-w-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg w-full">
                <div className="w-full h-0 pb-[56.25%] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8067936!2d-46.7796723!3d-23.550336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff8701b82019%3A0x6e428a923f33cc56!2sEstudio%20Santa%20Gana!5e0!3m2!1spt-BR!2sbr!4v1647891234567!5m2!1spt-BR!2sbr"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do Estúdio Santa Gana"
                  ></iframe>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <h4 className="font-playfair font-semibold text-graphite text-sm sm:text-base break-words">
                      Estúdio Santa Gana
                    </h4>
                    <a 
                      href="https://www.google.com/maps/place/Estudio+Santa+Gana/@-23.550336,-46.7796723,17z/data=!3m1!4b1!4m6!3m5!1s0x94ceff8701b82019:0x6e428a923f33cc56!8m2!3d-23.550336!4d-46.7770974!16s%2Fg%2F11j7pdcthh?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-sage hover:bg-sage-dark text-ivory px-4 py-2 rounded-full text-xs sm:text-sm font-inter font-medium transition-all duration-300 hover-scale text-center whitespace-nowrap"
                    >
                      Ver no Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
