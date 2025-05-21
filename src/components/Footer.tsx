import React from 'react';
import { BarChart2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <BarChart2 className="h-6 w-6 text-blue-600" aria-hidden="true" />
            <span className="ml-2 text-gray-900 font-medium">StratifyOps</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span>&copy; {currentYear} StratifyOps</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;