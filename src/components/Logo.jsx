import React, { useState } from 'react';

const Logo = ({ variant = 'default', className = '', size = 'md' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  const variants = {
    default: (
      <div 
        className={`font-display font-bold ${sizeClasses[size]} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="gradient-text transition-all duration-300">
          zuna<span className="text-gray-800">web</span>
        </span>
        <span className="text-primary-500">.com</span>
      </div>
    ),
    
    modern: (
      <div 
        className={`font-display font-extrabold ${sizeClasses[size]} ${className} flex items-center gap-2`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold transform transition-transform duration-300 hover:rotate-12">
          Z
        </div>
        <span className="gradient-text">zunaweb</span>
        <span className="text-gray-400">.com</span>
      </div>
    ),
    
    minimal: (
      <div 
        className={`font-display font-semibold ${sizeClasses[size]} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="text-gray-800">zuna</span>
        <span className="text-primary-500">web</span>
        <span className="text-pink-500">.com</span>
      </div>
    ),
    
    animated: (
      <div 
        className={`font-display font-bold ${sizeClasses[size]} ${className} relative`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="gradient-text animate-bounce-gentle">
          zuna<span className="text-gray-800">web</span>
        </span>
        <span className="text-primary-500 animate-pulse">.com</span>
        {isHovered && (
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
        )}
      </div>
    ),
    
    geometric: (
      <div 
        className={`font-display font-black ${sizeClasses[size]} ${className} flex items-center gap-1`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-purple-500 rounded-md transform transition-transform duration-300 hover:rotate-45"></div>
        <span className="gradient-text">ZUNA</span>
        <span className="text-gray-600">WEB</span>
        <div className="w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full"></div>
        <span className="text-primary-500">.com</span>
      </div>
    )
  };

  return variants[variant] || variants.default;
};

export default Logo; 