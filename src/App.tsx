import React from 'react';
import { FileText, Handshake, MessageCircle, Phone, Mail, MapPin, Zap, Shield, Leaf, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Soluções de Energia Online</h1>
                <p className="text-sm text-gray-600">Energia que move o futuro</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Início</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Serviços</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Sobre</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Bem-vindo à <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Central Neoenergia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sua parceira em energia elétrica, oferecendo soluções inovadoras e sustentáveis 
            para residências e empresas em todo o Brasil.
          </p>
        </div>

        {/* Main Action Buttons */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2ª Via da Fatura</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Acesse e baixe sua fatura de energia elétrica de forma rápida e segura, disponível 24 horas.
              </p>
              <a 
                href="https://wa.me/557131901459?text=Ol%C3%A1%2C%20Atendimento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 text-center"
              >
                Acessar 2ª Via
              </a>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <Handshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Negociação de Dívidas</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Negocie suas pendências de forma simples e encontre as melhores condições de pagamento.
              </p>
              <a 
                href="https://wa.me/557131901459?text=Ol%C3%A1%2C%20Atendimento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 text-center"
              >
                Negociar Dívidas
              </a>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Falar com Atendente</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nossa equipe especializada está pronta para atender suas necessidades e esclarecer dúvidas.
              </p>
              <a 
                href="https://wa.me/557131901459?text=Ol%C3%A1%2C%20Atendimento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 text-center"
              >
                Falar Agora
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Por que escolher a EDP Brasil?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Segurança</h4>
              <p className="text-gray-600 text-sm">Proteção total dos seus dados e transações</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Sustentabilidade</h4>
              <p className="text-gray-600 text-sm">Comprometidos com energia limpa e renovável</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-6 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">24h Disponível</h4>
              <p className="text-gray-600 text-sm">Atendimento e serviços online a qualquer hora</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Inovação</h4>
              <p className="text-gray-600 text-sm">Tecnologia de ponta para melhor experiência</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Emergência ou Falta de Energia?</h3>
          <p className="text-red-100 mb-6">Ligue imediatamente para nossa central de emergência</p>
          <div className="flex justify-center items-center space-x-4">
            <Phone className="h-6 w-6" />
            <span className="text-3xl font-bold">(71) 3190-1459</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Soluções de Energia</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Energia que move o futuro do Brasil, com inovação, sustentabilidade e excelência no atendimento.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Serviços</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">2ª Via da Fatura</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Religação</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Nova Ligação</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Débito Automático</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Suporte</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Central de Atendimento</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Ouvidoria</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">ANEEL</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">(71) 3190-1459</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">atendimento@neoenergia.com.br</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                  <span className="text-gray-400"><br />Brasil</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-12 text-center">
            <p className="text-gray-400">
              © 2025 Soluções de Energia Brasil. Todos os direitos reservados. | 
              <a href="#" className="hover:text-white transition-colors duration-300 ml-2">Política de Privacidade</a> | 
              <a href="#" className="hover:text-white transition-colors duration-300 ml-2">Termos de Uso</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
