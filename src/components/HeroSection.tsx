import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white" id="home">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to StratifyOps
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Stay ahead in business, tech, and productivity with curated insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#newsletter" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Subscribe Now
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;