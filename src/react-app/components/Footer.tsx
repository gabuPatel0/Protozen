import { Zap, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ProtozenAI
              </span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6 max-w-md">
              Complete digital solutions from websites to AI automation. 
              We transform businesses with cutting-edge technology and custom solutions that drive real results.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-500">
                <Mail className="w-4 h-4" />
                <span className="text-sm">
contact@protozenai.com</span>
              </div>
              {/* <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><a href="#services" className="hover:text-white dark:hover:text-gray-200 transition-colors duration-200">Website Development</a></li>
              <li><a href="#services" className="hover:text-white dark:hover:text-gray-200 transition-colors duration-200">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-white dark:hover:text-gray-200 transition-colors duration-200">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-white dark:hover:text-gray-200 transition-colors duration-200">AI Voice Assistance</a></li>
              <li><a href="#services" className="hover:text-white dark:hover:text-gray-200 transition-colors duration-200">AI Automation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {/* <li><a href="#portfolio" className="hover:text-white dark:hover:text-gray-200 transition-colors duration-200">Demo Projects</a></li> */}
              <li><a href="#faq" className="hover:text-white dark:hover:text-gray-200 transition-colors duration-200">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white dark:hover:text-gray-200 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-900 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} ProtozenAI. All rights reserved.
            </div>
            
            {/* Stats */}
            <div className="flex items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-white dark:text-gray-200 font-semibold">6+</div>
                <div className="text-gray-400 dark:text-gray-500">Core Services</div>
              </div>
              <div className="text-center">
                <div className="text-white dark:text-gray-200 font-semibold">AI</div>
                <div className="text-gray-400 dark:text-gray-500">Powered Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-white dark:text-gray-200 font-semibold">100%</div>
                <div className="text-gray-400 dark:text-gray-500">Custom Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
