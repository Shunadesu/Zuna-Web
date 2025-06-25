import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';

const mockTemplates = [
  {
    id: 1,
    name: 'Modern Landing Page',
    category: 'landing',
    colors: ['blue', 'purple'],
    price: 'Miễn phí',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description: 'Landing page hiện đại với thiết kế tối giản và tối ưu conversion. Phù hợp cho startup, sản phẩm mới và chiến dịch marketing.',
    features: [
      'Responsive design',
      'Tối ưu SEO',
      'Fast loading',
      'Modern UI/UX',
      'Customizable',
      'Mobile-first'
    ],
    techStack: [
      'React 18',
      'TailwindCSS',
      'Vite',
      'TypeScript',
      'Framer Motion'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
    ],
    tags: ['Responsive', 'Modern', 'Fast', 'SEO', 'Conversion'],
    downloads: 1247,
    rating: 4.8,
    reviews: 89,
    lastUpdated: '2024-01-15',
    demoUrl: 'https://sunnyprofile.vercel.app/'
  },
  {
    id: 2,
    name: 'E-commerce Store',
    category: 'ecommerce',
    price: '$29',
    colors: ['pink', 'purple'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    description: 'Website bán hàng hoàn chỉnh với đầy đủ tính năng cần thiết.',
    features: [
      'Giỏ hàng',
      'Thanh toán online',
      'Quản lý sản phẩm',
      'Responsive',
      'SEO tối ưu'
    ],
    techStack: [
      'React',
      'TailwindCSS',
      'Node.js',
      'MongoDB'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
    ],
    tags: ['E-commerce', 'Shopping', 'Payment'],
    downloads: 892,
    rating: 4.6,
    reviews: 45,
    lastUpdated: '2024-01-10',
    demoUrl: 'https://zunaweb-ecommerce-demo.vercel.app'
  },
  {
    id: 3,
    name: 'Creative Portfolio',
    category: 'portfolio',
    price: 'Miễn phí',
    colors: ['green', 'blue'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    description: 'Portfolio sáng tạo cho designer và developer.',
    features: [
      'Gallery',
      'Hiệu ứng động',
      'Responsive',
      'Tối ưu SEO'
    ],
    techStack: [
      'React',
      'TailwindCSS'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
    ],
    tags: ['Portfolio', 'Creative', 'Showcase'],
    downloads: 2156,
    rating: 4.9,
    reviews: 67,
    lastUpdated: '2024-01-05',
    demoUrl: 'https://zunaweb-portfolio-demo.vercel.app'
  }
];

const TemplateDetail = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState('preview');
  const [device, setDevice] = useState('desktop');

  // Lấy template theo id từ useParams
  const template = mockTemplates.find(t => String(t.id) === String(id));

  // Nếu không tìm thấy template
  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Không tìm thấy giao diện</h2>
          <p className="mb-6 text-gray-600">Giao diện bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/templates" className="btn-primary">Quay lại danh sách giao diện</Link>
        </div>
      </div>
    );
  }

  const relatedTemplates = mockTemplates.filter(t => t.id !== template.id).slice(0, 2);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Responsive sizes
  const deviceSizes = {
    desktop: { w: 1280, h: 800 },
    tablet: { w: 800, h: 1100 },
    mobile: { w: 390, h: 844 }
  };

  return (
    <div className="min-h-screen gradient-bg">
      <SEO 
        title={template.name}
        description={template.description}
        keywords={template.tags.join(', ')}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 mt-8   ">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-primary-600">Trang chủ</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><Link to="/templates" className="hover:text-primary-600">Giao diện</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900">{template.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Template Header */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="relative">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    template.price === 'Miễn phí' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-primary-100 text-primary-600'
                  }`}>
                    {template.price}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-1">
                  {template.colors.map((color) => (
                    <div
                      key={color}
                      className={`w-4 h-4 rounded-full ${
                        color === 'blue' ? 'bg-blue-500' :
                        color === 'pink' ? 'bg-pink-500' :
                        color === 'purple' ? 'bg-purple-500' :
                        color === 'green' ? 'bg-green-500' :
                        color === 'orange' ? 'bg-orange-500' :
                        'bg-gray-500'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  {template.name}
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  {template.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">{template.rating}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill={i < Math.floor(template.rating) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600">({template.reviews} đánh giá)</span>
                  </div>
                  <div className="text-gray-600">
                    {template.downloads.toLocaleString()} lượt tải
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-8">
                  {[
                    { id: 'preview', label: 'Xem trước' },
                    { id: 'features', label: 'Tính năng' },
                    { id: 'tech', label: 'Công nghệ' },
                    { id: 'reviews', label: 'Đánh giá' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        selectedTab === tab.id
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-8">
                {selectedTab === 'preview' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Xem trước giao diện (Demo live)</h3>
                    {/* Responsive device switcher */}
                    <div className="flex gap-2 mb-6">
                      <button
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${device === 'desktop' ? 'bg-primary-600 text-white border-primary-600' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-primary-50'}`}
                        onClick={() => setDevice('desktop')}
                      >
                        Desktop
                      </button>
                      <button
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${device === 'tablet' ? 'bg-primary-600 text-white border-primary-600' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-primary-50'}`}
                        onClick={() => setDevice('tablet')}
                      >
                        Tablet
                      </button>
                      <button
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${device === 'mobile' ? 'bg-primary-600 text-white border-primary-600' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-primary-50'}`}
                        onClick={() => setDevice('mobile')}
                      >
                        Mobile
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div
                        className="bg-gray-200 rounded-xl shadow-lg overflow-hidden border border-gray-300"
                        style={{
                          width: deviceSizes[device].w + 'px',
                          height: deviceSizes[device].h + 'px',
                          maxWidth: '100%',
                          transition: 'width 0.3s, height 0.3s'
                        }}
                      >
                        <iframe
                          src={template.demoUrl}
                          title="Demo website"
                          width={deviceSizes[device].w}
                          height={deviceSizes[device].h}
                          style={{ border: 0, width: '100%', height: '100%' }}
                          allowFullScreen
                        />
                      </div>
                    </div>
                    <div className="text-center text-sm text-gray-500 mt-2">
                      <a href={template.demoUrl} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mở demo trong tab mới</a>
                    </div>
                  </div>
                )}

                {selectedTab === 'features' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Tính năng chính</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {template.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTab === 'tech' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Công nghệ sử dụng</h3>
                    <div className="flex flex-wrap gap-2">
                      {template.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-600 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTab === 'reviews' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Đánh giá từ người dùng</h3>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            N
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Nguyễn Văn A</div>
                            <div className="flex text-yellow-400 text-sm">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">
                          Template rất đẹp và dễ tùy chỉnh. Code sạch, responsive tốt. 
                          Rất hài lòng với sản phẩm!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Download Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {template.price}
                </div>
                <p className="text-gray-600">Cập nhật lần cuối: {formatDate(template.lastUpdated)}</p>
              </div>

              <button className="w-full btn-primary mb-4">
                Tải xuống ngay
              </button>

              <button className="w-full btn-secondary mb-4">
                Xem demo
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Hoặc <Link to="/contact" className="text-primary-600 hover:underline">liên hệ</Link> để được tư vấn
                </p>
              </div>
            </div>

            {/* Related Templates */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Giao diện liên quan</h3>
              <div className="space-y-4">
                {relatedTemplates.map((related) => (
                  <Link
                    key={related.id}
                    to={`/templates/${related.id}`}
                    className="block group"
                  >
                    <div className="flex gap-3">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-16 h-12 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                          {related.name}
                        </h4>
                        <p className="text-sm text-gray-600">{related.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetail; 