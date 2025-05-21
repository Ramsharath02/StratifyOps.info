import React from 'react';
import { BarChart2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <BarChart2 className="h-8 w-8 text-blue-600" aria-hidden="true" />
            <span className="ml-2 text-xl font-semibold text-gray-900">StratifyOps</span>
          </div>
          
          <nav>
            <ul className="flex space-x-8">
              {['Home', 'About', 'Newsletter'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;