import { useState, useRef } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const { elementRef: faqRef, isVisible } = useScrollAnimation(0.1);

  const faqs = [
    {
      question: "What services does ProtozenAI offer?",
      answer: "We provide a complete range of digital solutions including custom website development, digital marketing campaigns, SEO optimization, AI voice assistants, AI cold calling systems, and AI agents for business automation. Each solution is tailored to your specific business needs."
    },
    {
      question: "How does your pricing work?",
      answer: "Our pricing is customized based on your specific requirements, project scope, and timeline. We don't offer fixed packages because every business has unique needs. After our discovery call, we'll provide a detailed proposal with transparent pricing tailored to your project."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity and scope. Typically, websites take 1-2 weeks, AI systems take 2-3 weeks, and comprehensive digital marketing setups take 1-2 weeks. We'll provide an accurate timeline during our consultation based on your specific requirements."
    },
    {
      question: "Do you have examples of your work?",
      answer: "Yes! We have several demo projects showcasing our capabilities across all service areas. These include e-commerce platforms, mobile apps, SEO-optimized business sites, AI voice assistants, cold calling systems, and business automation agents. You can view these in our portfolio section."
    },
    {
      question: "What makes your AI solutions different?",
      answer: "Our AI solutions are custom-built for your business, not generic templates. We train AI models specifically on your business data, processes, and customer interactions. This means more accurate responses, better lead qualification, and automation that truly understands your business needs."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Absolutely! We provide ongoing support, monitoring, and optimization for all our solutions. This includes performance tracking, AI model improvements, SEO updates, and technical maintenance to ensure your digital solutions continue performing at their best."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we specialize in seamless integrations. Our solutions can connect with your existing CRM, email platforms, phone systems, analytics tools, and other business software. We ensure everything works together smoothly without disrupting your current operations."
    },
    {
      question: "What if we need changes after the project is completed?",
      answer: "We build all our solutions to be flexible and scalable. Minor adjustments are typically included in our support packages. For major changes or new features, we can discuss additional development work. Our goal is to ensure your solution grows with your business."
    },
    {
      question: "How do we get started?",
      answer: "Simply fill out our contact form or give us a call to schedule a free discovery consultation. We'll discuss your business goals, current challenges, and which of our services would benefit you most. From there, we'll create a custom proposal outlining the solution and next steps."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with startups, small businesses, and established companies. Our solutions are scalable and can be tailored to fit different budgets and business sizes. Whether you need a simple website or a comprehensive AI automation system, we can create something that fits your needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section ref={faqRef} id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 pulse-glow">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-100 dark:to-blue-100 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our services, process, and how we can help transform your business with digital solutions and AI automation.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const answerRef = useRef<HTMLDivElement>(null);
            const isOpen = openFAQ === index;
            
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-200 hover-lift fade-in stagger-${Math.min(index + 1, 6)} ${isVisible ? 'visible' : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-gray-700/50 rounded-2xl transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <ChevronDown 
                      className={`w-5 h-5 text-blue-600 dark:text-blue-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </button>
                
                <div 
                  ref={answerRef}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  style={{
                    maxHeight: isOpen ? `${answerRef.current?.scrollHeight || 200}px` : '0px'
                  }}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
              Every business is unique, and we're here to answer any specific questions about how our services can benefit your particular situation.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
