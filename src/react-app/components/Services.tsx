import { 
  Globe, 
  Megaphone, 
  Search, 
  Mic, 
  Phone, 
  Bot,
  ArrowRight
} from 'lucide-react';
import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

export default function Services() {
  const { elementRef: servicesRef, isVisible } = useScrollAnimation(0.1);
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom websites and landing pages designed to convert visitors into customers with modern, responsive design.',
      features: ['Custom Design', 'Responsive Layout', 'E-commerce Ready', 'CMS Integration']
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to increase your online presence and drive targeted traffic.',
      features: ['Social Media Marketing', 'Content Strategy', 'PPC Campaigns', 'Brand Development']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Advanced SEO techniques to improve your search rankings and increase organic traffic to your website.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: Mic,
      title: 'AI Voice Assistance',
      description: 'Intelligent voice assistants that handle customer inquiries and provide 24/7 support for your business.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Custom Training', 'Integration Ready']
    },
    {
      icon: Phone,
      title: 'AI Cold Callers',
      description: 'Automated calling systems that generate leads and qualify prospects with human-like conversations.',
      features: ['Lead Generation', 'Appointment Setting', 'Follow-up Automation', 'CRM Integration']
    },
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'Custom AI agents that automate business processes, customer service, and administrative tasks.',
      features: ['Process Automation', 'Customer Support', 'Data Analysis', 'Custom Workflows']
    }
  ];

  return (
    <section ref={servicesRef} id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-100 dark:to-blue-100 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From stunning websites to cutting-edge AI automation, we provide complete digital solutions that transform your business operations and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 hover-lift fade-in stagger-${Math.min(index + 1, 6)} ${isVisible ? 'visible' : ''}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-600/10 dark:to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl border border-blue-100 dark:border-blue-800">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Ready to Transform Your Business?</h3>
              <p className="text-gray-600 dark:text-gray-300">Let's discuss how our services can help you achieve your digital goals and automate your operations.</p>
            </div>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
