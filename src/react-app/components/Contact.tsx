import { useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Calendar,
  Globe,
  Clock,
  Star,
  CheckCircle
} from 'lucide-react';
import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

export default function Contact() {
  const { elementRef: contactRef, isVisible } = useScrollAnimation(0.1);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section ref={contactRef} id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-100 dark:to-blue-100 bg-clip-text text-transparent">
              Let's Start Your Project
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every successful digital transformation starts with understanding your business. Let's discuss your goals and create custom solutions that drive real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 slide-in-left stagger-1 ${isVisible ? 'visible' : ''}`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">2-3 week delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">98% client satisfaction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">Mobile-first approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">Ongoing support included</span>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 slide-in-left stagger-2 ${isVisible ? 'visible' : ''}`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">
contact@protozenai.com</span>
                  </div>
                  {/* <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</span>
                  </div> */}
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">Easy online scheduling</span>
                  </div>
                </div>
              </div>

              {/* Process Preview */}
              <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white slide-in-left stagger-3 ${isVisible ? 'visible' : ''}`}>
                <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                    <span>We'll schedule a 30-minute discovery call within 24 hours</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                    <span>We'll create a custom proposal with timeline and pricing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                    <span>Once approved, we start building your custom solution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly Scheduling Widget */}
          <div className="lg:col-span-2">
            <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 slide-in-right stagger-2 ${isVisible ? 'visible' : ''}`}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Schedule Your Free Consultation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Book a 20-minute call to discuss your project and see how we can help transform your business.
                </p>
              </div>
              
              {/* Calendly Widget Container */}
              <div className="rounded-lg overflow-hidden border border-gray-200/50 dark:border-gray-600/50">
                {/* Calendly inline widget begin */}
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/protozenai/20min-meet?hide_gdpr_banner=1" 
                  style={{minWidth: '320px', height: '700px'}}
                ></div>
                {/* Calendly inline widget end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
