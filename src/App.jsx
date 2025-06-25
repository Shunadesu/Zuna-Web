import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ToastProvider from './components/ToastProvider';
import ProgressBar from './components/ProgressBar';
import QuickActions from './components/QuickActions';
import LiveChat from './components/LiveChat';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Templates from './pages/Templates';
import TemplateDetail from './pages/TemplateDetail';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Help from './pages/Help';
import NotFound from './pages/NotFound';
import LogoDesign from './pages/LogoDesign';
import WebsiteBuilder from './pages/WebsiteBuilder';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

// Loading Component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center gradient-bg">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Đang tải...</p>
    </div>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center gradient-bg">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="text-red-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Đã xảy ra lỗi
            </h2>
            <p className="text-gray-600 mb-6">
              Rất tiếc, đã có lỗi xảy ra. Vui lòng thử tải lại trang hoặc liên hệ hỗ trợ.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Tải lại trang
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Main App Component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <ToastProvider>
        <Router>
          <div className="App min-h-screen flex flex-col">
            <ProgressBar />
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/templates/:id" element={<TemplateDetail />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/:slug" element={<CategoryDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/help" element={<Help />} />
                <Route path="/logo-design" element={<LogoDesign />} />
                <Route path="/website-builder" element={<WebsiteBuilder />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <QuickActions />
            <LiveChat />
            <ScrollToTop />
          </div>
        </Router>
      </ToastProvider>
    </ErrorBoundary>
  );
};

export default App;
