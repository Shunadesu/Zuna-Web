import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

  const themes = [
    { 
      id: 'default', 
      name: 'Mặc định', 
      color: 'bg-blue-500',
      primary: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    { 
      id: 'ocean', 
      name: 'Đại dương', 
      color: 'bg-cyan-500',
      primary: 'cyan',
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      id: 'sunset', 
      name: 'Hoàng hôn', 
      color: 'bg-orange-500',
      primary: 'orange',
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      id: 'forest', 
      name: 'Rừng xanh', 
      color: 'bg-green-500',
      primary: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'lavender', 
      name: 'Oải hương', 
      color: 'bg-purple-500',
      primary: 'purple',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'rose', 
      name: 'Hồng phấn', 
      color: 'bg-pink-500',
      primary: 'pink',
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      id: 'golden', 
      name: 'Vàng kim', 
      color: 'bg-yellow-500',
      primary: 'yellow',
      gradient: 'from-yellow-500 to-orange-500'
    },
    { 
      id: 'midnight', 
      name: 'Nửa đêm', 
      color: 'bg-indigo-500',
      primary: 'indigo',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme-color') || 'default';
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeId) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      // Remove all existing theme classes
      document.documentElement.classList.remove(
        'theme-blue', 'theme-cyan', 'theme-orange', 'theme-green',
        'theme-purple', 'theme-pink', 'theme-yellow', 'theme-indigo'
      );
      
      // Add new theme class
      document.documentElement.classList.add(`theme-${theme.primary}`);
      
      // Update CSS custom properties
      const root = document.documentElement;
      root.style.setProperty('--primary-500', `var(--${theme.primary}-500)`);
      root.style.setProperty('--primary-600', `var(--${theme.primary}-600)`);
      root.style.setProperty('--primary-700', `var(--${theme.primary}-700)`);
    }
  };

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId);
    applyTheme(themeId);
    localStorage.setItem('theme-color', themeId);
    setIsOpen(false);
  };

  const currentThemeData = themes.find(t => t.id === currentTheme) || themes[0];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200"
        aria-label="Chọn màu theme"
      >
        <div className={`w-4 h-4 rounded-full ${currentThemeData.color}`}></div>
        <span className="text-sm font-medium text-gray-700">
          {currentThemeData.name}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
          >
            <div className="p-2">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">
                Chọn màu
              </h4>
              <div className="grid grid-cols-2 gap-1">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeChange(theme.id)}
                    className={`flex items-center space-x-2 p-2 rounded-lg text-sm transition-all duration-200 ${
                      currentTheme === theme.id 
                        ? 'bg-gray-100 text-gray-900' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${theme.color}`}></div>
                    <span>{theme.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle; 