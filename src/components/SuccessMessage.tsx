import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  email: string;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ email }) => {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start animate-fadeIn">
      <CheckCircle className="text-green-500 h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="text-green-800 font-medium text-left">Subscription confirmed!</h4>
        <p className="text-green-700 text-sm mt-1 text-left">
          We've sent a confirmation to <span className="font-medium">{email}</span>. 
          Look forward to receiving our next issue!
        </p>
      </div>
    </div>
  );
};