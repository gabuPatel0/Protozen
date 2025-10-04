import { ArrowRight, CheckCircle } from 'lucide-react';
import { useParallax, useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

export default function Hero() {
  const parallaxOffset = useParallax();
  const { elementRef: heroRef, isVisible } = useScrollAnimation(0.1);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80')] bg-cover bg-center opacity-5 parallax-bg"
        style={{ '--parallax-offset': `${parallaxOffset * 0.5}px` } as React.CSSProperties}
      ></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-xl float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full blur-xl float-delay-1"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-indigo-200/40 to-blue-200/40 rounded-full blur-xl float-delay-2"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`max-w-4xl mx-auto fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium mb-8 border border-blue-200/50 dark:border-blue-700/50 shadow-sm pulse-glow scale-in ${isVisible ? 'visible' : ''}`}>
            <CheckCircle className="w-4 h-4 mr-2" />
            Custom solutions for every business
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-gray-100 dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              Complete Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solutions & AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-gray-100 dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              Automation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            From stunning websites to AI-powered automation, we provide everything your business needs to thrive in the digital world. 
            Custom solutions designed to grow your business and streamline your operations.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-gray-700 dark:text-gray-300">
            <div className={`flex items-center space-x-2 slide-in-left stagger-1 ${isVisible ? 'visible' : ''}`}>
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Website Development</span>
            </div>
            <div className={`flex items-center space-x-2 slide-in-left stagger-2 ${isVisible ? 'visible' : ''}`}>
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Digital Marketing</span>
            </div>
            <div className={`flex items-center space-x-2 slide-in-right stagger-3 ${isVisible ? 'visible' : ''}`}>
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>SEO Optimization</span>
            </div>
            <div className={`flex items-center space-x-2 slide-in-right stagger-4 ${isVisible ? 'visible' : ''}`}>
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>AI Automation</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center scale-in stagger-5 ${isVisible ? 'visible' : ''}`}>
            <button 
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-gradient"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            {/* <button 
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-gray-100 text-lg font-semibold rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover-lift"
            >
              View Our Work
            </button> */}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                6+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Core Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-600 text-sm md:text-base">Custom Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI
              </div>
              <div className="text-gray-600 text-sm md:text-base">Powered Automation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-gray-600 text-sm md:text-base">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
