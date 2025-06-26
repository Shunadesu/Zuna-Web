import React from 'react';
import { cn } from '../utils/cn';

const Logo = ({ className, size = 'default' }) => {
  const sizeClasses = {
    small: 'text-lg',
    default: 'text-xl',
    large: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={cn(
      "font-bold font-display",
      sizeClasses[size],
      "text-gray-900",
      className
    )}>
      <span className="text-gradient">Zuna</span>
      <span className="text-primary-600">Web</span>
    </div>
  );
};

export default Logo; 