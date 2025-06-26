import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Palette, MessageCircle, HelpCircle, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      name: 'Tạo Template',
      description: 'Thiết kế template mới',
      icon: Plus,
      href: '/templates',
      color: 'bg-primary-500 hover:bg-primary-600'
    },
    {
      name: 'Thiết kế Logo',
      description: 'Tạo logo chuyên nghiệp',
      icon: Palette,
      href: '/logo-design',
      color: 'bg-secondary-500 hover:bg-secondary-600'
    },
    {
      name: 'Liên hệ',
      description: 'Hỗ trợ khách hàng',
      icon: MessageCircle,
      href: '/contact',
      color: 'bg-accent-500 hover:bg-accent-600'
    },
    {
      name: 'Trợ giúp',
      description: 'Hướng dẫn sử dụng',
      icon: HelpCircle,
      href: '/help',
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 left-0 space-y-3"
          >
            {actions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <motion.div
                  key={action.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={action.href}
                    className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`p-2 rounded-lg ${action.color} text-white`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {action.name}
                      </div>
                      
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        aria-label="Mở menu nhanh"
      >
        <Settings className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
      </motion.button>
    </div>
  );
};

export default QuickActions; 