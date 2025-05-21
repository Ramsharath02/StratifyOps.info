import React from 'react';
import { TrendingUp, Filter, Clock, Target } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="h-7 w-7 text-blue-600" />,
    title: 'Industry Insights',
    description: 'Get exclusive analysis on emerging trends and market shifts before they become mainstream.'
  },
  {
    icon: <Filter className="h-7 w-7 text-blue-600" />,
    title: 'Curated Content',
    description: 'We filter through the noise to deliver only the most relevant and impactful information.'
  },
  {
    icon: <Clock className="h-7 w-7 text-blue-600" />,
    title: 'Timely Delivery',
    description: 'Receive our newsletter every Tuesday morning, perfectly timed to inform your week.'
  },
  {
    icon: <Target className="h-7 w-7 text-blue-600" />,
    title: 'Actionable Strategies',
    description: 'Each edition includes practical, implementable tactics you can apply immediately.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Subscribe to StratifyOps?
          </h2>
          <p className="text-xl text-gray-600">
            Our newsletter provides actionable insights that help you stay ahead in the ever-evolving business landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 transition-all hover:shadow-md hover:translate-y-[-4px]"
            >
              <div className="rounded-full w-14 h-14 flex items-center justify-center bg-blue-100 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;