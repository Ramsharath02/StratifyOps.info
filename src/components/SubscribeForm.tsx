import React, { useState } from 'react';
import { ArrowRight, UserCircle as LoaderCircle } from 'lucide-react';

interface SubscribeFormProps {
  onSubscribeSuccess: (email: string) => void;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ onSubscribeSuccess }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      onSubscribeSuccess(email);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative" id="subscribe">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-grow">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${
              error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            } focus:border-transparent focus:outline-none focus:ring-2 shadow-sm transition-all`}
            aria-label="Email address"
            disabled={isSubmitting}
          />
          {error && (
            <p className="absolute left-0 top-full mt-1 text-sm text-red-600">
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 rounded-lg bg-blue-700 text-white font-medium 
            flex items-center justify-center transition-all
            hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            disabled:opacity-70 disabled:cursor-not-allowed shadow-sm min-w-[120px]`}
        >
          {isSubmitting ? (
            <LoaderCircle className="animate-spin h-5 w-5" />
          ) : (
            <>
              Subscribe <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;