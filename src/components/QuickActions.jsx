import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actions = [
    {
      id: 'templates',
      name: 'Templates',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      action: () => window.location.href = '/templates'
    },
    {
      id: 'blog',
      name: 'Blog',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      action: () => window.location.href = '/blog'
    },
    {
      id: 'contact',
      name: 'Liên hệ',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: () => window.location.href = '/contact'
    },
    {
      id: 'share',
      name: 'Chia sẻ',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      ),
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'ZunaWeb - Templates Website Chất Lượng',
            url: window.location.href
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          console.log('Link đã được sao chép!');
        }
      }
    }
  ];

  if (showBackToTop) {
    actions.unshift({
      id: 'backtotop',
      name: 'Lên đầu trang',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      ),
      action: scrollToTop
    });
  }

  return (
    <>
      {/* Floating Zalo & Phone Buttons */}
      {/* <div className="fixed bottom-32 right-6 flex flex-col items-end gap-3 z-50">
        <a
          href="https://zalo.me/123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg border border-blue-400 hover:bg-blue-50 transition-all"
          title="Chat Zalo"
        >
          <img src="https://static.zalo.me/favicon.ico" alt="Zalo" className="w-8 h-8" />
        </a>
        <a
          href="tel:0987654321"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 text-white text-2xl font-bold transition-all"
          title="Gọi 0987 654 321"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.789 1.106l1.2 2.4a2 2 0 01-.45 2.45l-.7.7a16.001 16.001 0 006.586 6.586l.7-.7a2 2 0 012.45-.45l2.4 1.2A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" />
          </svg>
        </a>
      </div> */}
      {/* Quick Actions Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Action Buttons */}
        <div className={`space-y-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          {actions.map((action, index) => (
            <button
              key={action.id}
              onClick={action.action}
              className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
              style={{ transitionDelay: `${index * 50}ms` }}
              title={action.name}
            >
              <div className="text-gray-600 group-hover:text-primary-600 transition-colors">
                {action.icon}
              </div>
            </button>
          ))}
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 text-white"
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default QuickActions; 