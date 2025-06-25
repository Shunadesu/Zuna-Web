import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';

const categoryData = {
  'web-design': {
    title: 'Web Design',
    description: 'Templates thiết kế web hiện đại, responsive và tối ưu UX/UI',
    features: ['Responsive Design', 'Modern UI/UX', 'SEO Optimized', 'Fast Loading'],
    templates: [
      { id: 1, name: 'Creative Agency', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
      { id: 2, name: 'Portfolio Pro', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop' },
      { id: 3, name: 'Business Hub', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop' }
    ]
  },
  'blog': {
    title: 'Blog & Tin tức',
    description: 'Templates blog chuyên nghiệp cho cá nhân, tin tức và tạp chí',
    features: ['Blog Layout', 'News Feed', 'Comment System', 'Social Sharing'],
    templates: [
      { id: 4, name: 'News Portal', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop' },
      { id: 5, name: 'Personal Blog', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop' },
      { id: 6, name: 'Magazine', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' }
    ]
  },
  'ecommerce': {
    title: 'Thương mại điện tử',
    description: 'Templates shop online, bán hàng và quản lý sản phẩm',
    features: ['Product Catalog', 'Shopping Cart', 'Payment Integration', 'Order Management'],
    templates: [
      { id: 7, name: 'Fashion Store', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
      { id: 8, name: 'Electronics Shop', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop' },
      { id: 9, name: 'Food Delivery', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop' }
    ]
  },
  'education': {
    title: 'Giáo dục',
    description: 'Templates cho trường học, khóa học online và trung tâm đào tạo',
    features: ['Course Management', 'Student Portal', 'Video Integration', 'Progress Tracking'],
    templates: [
      { id: 10, name: 'Online Academy', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop' },
      { id: 11, name: 'School Website', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop' },
      { id: 12, name: 'Training Center', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop' }
    ]
  },
  'app-landing': {
    title: 'App Landing Page',
    description: 'Templates landing page cho ứng dụng di động và SaaS',
    features: ['App Showcase', 'Feature Highlights', 'Download Links', 'User Reviews'],
    templates: [
      { id: 13, name: 'Mobile App', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop' },
      { id: 14, name: 'SaaS Platform', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop' },
      { id: 15, name: 'Game Landing', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop' }
    ]
  },
  'portfolio': {
    title: 'Portfolio',
    description: 'Templates portfolio chuyên nghiệp cho cá nhân và studio',
    features: ['Project Showcase', 'About Section', 'Contact Form', 'Social Links'],
    templates: [
      { id: 16, name: 'Creative Portfolio', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop' },
      { id: 17, name: 'Photographer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' },
      { id: 18, name: 'Designer Studio', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop' }
    ]
  },
  'landing-page': {
    title: 'Landing Page',
    description: 'Templates landing page tối ưu chuyển đổi và marketing',
    features: ['Lead Capture', 'A/B Testing', 'Analytics', 'Mobile Optimized'],
    templates: [
      { id: 19, name: 'Product Launch', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop' },
      { id: 20, name: 'Event Landing', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop' },
      { id: 21, name: 'Service Promotion', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop' }
    ]
  },
  'dashboard': {
    title: 'Dashboard',
    description: 'Templates dashboard quản lý và phân tích dữ liệu',
    features: ['Data Visualization', 'User Management', 'Real-time Updates', 'Export Reports'],
    templates: [
      { id: 22, name: 'Admin Dashboard', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop' },
      { id: 23, name: 'Analytics Hub', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
      { id: 24, name: 'CRM System', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop' }
    ]
  },
  'restaurant': {
    title: 'Nhà hàng',
    description: 'Templates website nhà hàng, quán ăn và dịch vụ ẩm thực',
    features: ['Menu Display', 'Online Booking', 'Food Gallery', 'Location Map'],
    templates: [
      { id: 25, name: 'Fine Dining', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop' },
      { id: 26, name: 'Cafe & Bakery', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
      { id: 27, name: 'Food Truck', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop' }
    ]
  },
  'healthcare': {
    title: 'Y tế & Sức khỏe',
    description: 'Templates website phòng khám, bệnh viện và dịch vụ y tế',
    features: ['Appointment Booking', 'Doctor Profiles', 'Health Blog', 'Emergency Contact'],
    templates: [
      { id: 28, name: 'Medical Clinic', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
      { id: 29, name: 'Dental Care', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop' },
      { id: 30, name: 'Wellness Center', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop' }
    ]
  },
  'real-estate': {
    title: 'Bất động sản',
    description: 'Templates website môi giới, công ty bất động sản',
    features: ['Property Listings', 'Search Filters', 'Virtual Tours', 'Contact Agent'],
    templates: [
      { id: 31, name: 'Real Estate Agency', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop' },
      { id: 32, name: 'Property Developer', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop' },
      { id: 33, name: 'Rental Platform', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' }
    ]
  },
  'travel': {
    title: 'Du lịch',
    description: 'Templates website du lịch, khách sạn và đặt tour',
    features: ['Tour Packages', 'Hotel Booking', 'Travel Blog', 'Photo Gallery'],
    templates: [
      { id: 34, name: 'Travel Agency', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop' },
      { id: 35, name: 'Hotel Website', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop' },
      { id: 36, name: 'Tour Guide', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop' }
    ]
  },
  'technology': {
    title: 'Công nghệ',
    description: 'Templates website công ty công nghệ, startup và IT',
    features: ['Product Showcase', 'Team Profiles', 'Tech Blog', 'Career Opportunities'],
    templates: [
      { id: 37, name: 'Tech Startup', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop' },
      { id: 38, name: 'Software Company', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
      { id: 39, name: 'IT Services', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop' }
    ]
  }
};

const CategoryDetail = () => {
  const { slug } = useParams();
  const category = categoryData[slug];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Danh mục không tồn tại</h1>
          <Link to="/categories" className="btn-primary">Quay lại danh mục</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <SEO 
        title={`${category.title} - ZunaWeb`} 
        description={category.description}
      />
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12 mt-28">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{category.title}</h1>
        <p className="text-gray-600 text-lg mb-6">{category.description}</p>
        <Link to="/categories" className="text-primary-600 hover:text-primary-700 underline">
          ← Quay lại danh mục
        </Link>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tính năng nổi bật</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {category.features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-primary-600 font-semibold">{feature}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Templates */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Templates trong danh mục</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.templates.map((template) => (
            <div key={template.id} className="card overflow-hidden">
              <img 
                src={template.image} 
                alt={template.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
                <Link 
                  to={`/templates/${template.id}`}
                  className="btn-primary w-full"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
        <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Cần template tùy chỉnh?
          </h3>
          <p className="text-gray-600 mb-6">
            Chúng tôi có thể tùy chỉnh template theo yêu cầu cụ thể của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Liên hệ tư vấn
            </Link>
            <Link to="/pricing" className="btn-secondary">
              Xem bảng giá
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail; 