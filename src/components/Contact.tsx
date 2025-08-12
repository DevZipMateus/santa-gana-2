
import React, { useState } from 'react';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-ivory to-nude-rose-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-graphite mb-6">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-sage mx-auto mb-6"></div>
            <p className="text-lg text-graphite/80 max-w-3xl mx-auto leading-relaxed font-inter">
              Vamos transformar suas ideias em arte cenográfica única. 
              Entre em contato conosco e descubra como podemos criar algo especial para você.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-playfair font-semibold text-graphite mb-6">
                  Solicite seu Orçamento
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-graphite mb-2 font-inter">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 font-inter"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-graphite mb-2 font-inter">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 font-inter"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-graphite mb-2 font-inter">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 font-inter"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-graphite mb-2 font-inter">
                      Tipo de Serviço
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 font-inter"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="casamento">Casamento</option>
                      <option value="festa-infantil">Festa Infantil</option>
                      <option value="vitrine">Vitrine/Visual Merchandising</option>
                      <option value="ativacao">Ativação de Marca</option>
                      <option value="escultura">Escultura Artística</option>
                      <option value="fotografia">Cenografia para Fotografia</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-graphite mb-2 font-inter">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300 resize-none font-inter"
                      placeholder="Conte-nos sobre seu projeto, data do evento, orçamento estimado e outras informações importantes..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-sage hover:bg-sage-dark text-ivory px-6 py-3 rounded-lg font-inter font-medium transition-all duration-300 hover-scale shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & CTA */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Quick Contact */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-playfair font-semibold text-graphite mb-6">
                  Contato Direto
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:11950687951"
                    className="flex items-center space-x-4 p-4 bg-sage/5 rounded-lg hover:bg-sage/10 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center group-hover:bg-sage/20 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <p className="font-playfair font-semibold text-graphite">Telefone</p>
                      <p className="text-graphite/80 font-inter">(11) 9 5068-7951</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:contatosgpaper@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-sage/5 rounded-lg hover:bg-sage/10 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center group-hover:bg-sage/20 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <p className="font-playfair font-semibold text-graphite">E-mail</p>
                      <p className="text-graphite/80 font-inter">contatosgpaper@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/5511950687951?text=Olá! Gostaria de saber mais sobre os serviços do Estúdio Santa Gana."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-playfair font-semibold text-graphite">WhatsApp</p>
                      <p className="text-graphite/80 font-inter">Atendimento rápido</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-sage/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-playfair font-semibold text-graphite mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 text-graphite/80 font-inter">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 14h</p>
                  <p>Domingo: Fechado</p>
                </div>
                <div className="mt-6 p-4 bg-white/50 rounded-lg">
                  <p className="text-sm text-graphite/70 font-inter italic">
                    "Respondemos todas as mensagens em até 24 horas. 
                    Para projetos urgentes, entre em contato via WhatsApp."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
