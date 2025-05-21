import React from 'react';
import { Briefcase, Cpu, Brain } from 'lucide-react';

const highlights = [
  {
    icon: <Briefcase className="h-8 w-8 text-blue-600" />,
    title: 'Business',
    description: 'Expert business trends and market insights to keep you ahead of the curve.'
  },
  {
    icon: <Cpu className="h-8 w-8 text-blue-600" />,
    title: 'Technology',
    description: 'Latest tech developments and innovations shaping the future of business.'
  },
  {
    icon: <Brain className="h-8 w-8 text-blue-600" />,
    title: 'Productivity',
    description: 'Smart productivity tips and strategies to optimize your workflow.'
  }
];

const HighlightsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;