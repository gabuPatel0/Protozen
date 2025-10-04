import { ExternalLink, Code, Smartphone, Search, Mic, Phone, Bot } from 'lucide-react';
import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

export default function Portfolio() {
  const { elementRef: portfolioRef, isVisible } = useScrollAnimation(0.1);
  const demos = [
    {
      title: 'E-Commerce Platform Demo',
      category: 'Website Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80',
      technologies: ['React', 'Node.js', 'Stripe Integration', 'Responsive Design'],
      description: 'A fully functional e-commerce platform with modern design, secure payments, and mobile optimization.',
      icon: Code,
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Admin Dashboard']
    },
    {
      title: 'Restaurant Mobile App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&q=80',
      technologies: ['React Native', 'Firebase', 'GPS Integration', 'Push Notifications'],
      description: 'A mobile app for restaurants with online ordering, table reservations, and real-time tracking.',
      icon: Smartphone,
      features: ['Online Ordering', 'Table Booking', 'Menu Management', 'Order Tracking']
    },
    {
      title: 'SEO Optimized Business Site',
      category: 'SEO & Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
      technologies: ['WordPress', 'Schema Markup', 'Page Speed Optimization', 'Analytics'],
      description: 'A business website optimized for search engines with perfect Core Web Vitals scores.',
      icon: Search,
      features: ['SEO Optimization', 'Fast Loading', 'Analytics Setup', 'Content Strategy']
    },
    {
      title: 'AI Voice Assistant Demo',
      category: 'AI Voice Technology',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop&q=80',
      technologies: ['OpenAI GPT', 'Speech Recognition', 'Text-to-Speech', 'Custom Training'],
      description: 'An intelligent voice assistant that handles customer inquiries with natural language processing.',
      icon: Mic,
      features: ['Voice Recognition', 'Natural Responses', 'Multi-language', 'Custom Training']
    },
    {
      title: 'AI Cold Calling System',
      category: 'AI Automation',
      image: 'https://images.unsplash.com/photo-1553775282-20af80779df7?w=600&h=400&fit=crop&q=80',
      technologies: ['AI Voice Synthesis', 'CRM Integration', 'Lead Scoring', 'Analytics'],
      description: 'An automated calling system that generates leads and qualifies prospects with human-like conversations.',
      icon: Phone,
      features: ['Lead Generation', 'Appointment Setting', 'CRM Sync', 'Performance Analytics']
    },
    {
      title: 'Business Process AI Agent',
      category: 'AI Automation',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80',
      technologies: ['Machine Learning', 'API Integration', 'Workflow Automation', 'Data Analysis'],
      description: 'A custom AI agent that automates business processes, customer support, and data analysis tasks.',
      icon: Bot,
      features: ['Process Automation', 'Customer Support', 'Data Processing', 'Custom Workflows']
    }
  ];

  return (
    <section ref={portfolioRef} id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-100 dark:to-blue-100 bg-clip-text text-transparent">
              Demo Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our demo projects showcasing the full range of our capabilities. Each project demonstrates our expertise in different areas of digital solutions and AI automation.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover-lift scale-in stagger-${Math.min(index + 1, 6)} ${isVisible ? 'visible' : ''}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <demo.icon className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{demo.category}</div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{demo.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{demo.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-2 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {demo.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-gray-600 dark:text-gray-400">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-2 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {demo.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  6+
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Demo Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Custom Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Latest
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  AI
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Powered Solutions</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Ready to See These in Action?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Schedule a demo call to see our projects live and discuss how we can create similar solutions for your business.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule a Demo
              <ExternalLink className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
