import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "StratifyOps has completely transformed how we approach our operational strategy. Their insights are both timely and actionable.",
    author: "Sarah Johnson",
    position: "COO, Techwave Solutions"
  },
  {
    quote: "I've subscribed to many newsletters, but StratifyOps stands out for its depth of analysis and practical recommendations.",
    author: "Michael Chen",
    position: "Operations Director, Horizon Group"
  },
  {
    quote: "Every Tuesday, StratifyOps delivers insights that help me stay ahead of industry trends and make better decisions.",
    author: "Rebecca Torres",
    position: "VP of Operations, NexGen Enterprises"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-blue-50" id="insights">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Subscribers Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of professionals who rely on our insights every week.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;