import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SEO from './components/SEO';
import ProgressBar from './components/ProgressBar';
import BackToTop from './components/BackToTop';
import QuickActions from './components/QuickActions';
import LiveChat from './components/LiveChat';
import ToastProvider from './components/ToastProvider';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Templates = lazy(() => import('./pages/Templates'));
const TemplateDetail = lazy(() => import('./pages/TemplateDetail'));
const LogoDesign = lazy(() => import('./pages/LogoDesign'));
const WebsiteBuilder = lazy(() => import('./pages/WebsiteBuilder'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Categories = lazy(() => import('./pages/Categories'));
const CategoryDetail = lazy(() => import('./pages/CategoryDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Help = lazy(() => import('./pages/Help'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
      <p className="text-gray-600 animate-pulse">Đang tải...</p>
    </div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-50">
    <div className="text-center max-w-md mx-auto px-4">
      <div className="text-red-500 text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Đã xảy ra lỗi
      </h2>
      <p className="text-gray-600 mb-6">
        Rất tiếc, đã có lỗi xảy ra. Vui lòng thử lại sau.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Tải lại trang
      </button>
      {import.meta.env.NODE_ENV === 'development' && (
        <details className="mt-4 text-left">
          <summary className="cursor-pointer text-sm text-gray-500">Chi tiết lỗi</summary>
          <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
            {error?.message || 'Unknown error'}
          </pre>
        </details>
      )}
    </div>
  </div>
);

// Error boundary wrapper
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
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <ToastProvider>
            <div className="App min-h-screen flex flex-col bg-white transition-colors duration-300">
              <SEO 
                title="ZunaWeb - Nền tảng thiết kế website và logo chuyên nghiệp"
                description="Tạo website đẹp mắt và logo chuyên nghiệp với ZunaWeb. Templates responsive, công cụ thiết kế hiện đại và hỗ trợ 24/7."
                keywords="website design, logo design, templates, responsive design, web development"
              />
              
              <ProgressBar />
              <Navigation />
              
              <main className="flex-1">
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/templates/:id" element={<TemplateDetail />} />
                    <Route path="/logo-design" element={<LogoDesign />} />
                    <Route path="/website-builder" element={<WebsiteBuilder />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogDetail />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/categories/:id" element={<CategoryDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <BackToTop />
              <QuickActions />
              <LiveChat />
            </div>
          </ToastProvider>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
