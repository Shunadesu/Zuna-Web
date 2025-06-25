import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const mockTemplates = [
    {
      id: 1,
      title: 'E-Commerce Store',
      description: 'Template website bán hàng trực tuyến hiện đại với đầy đủ tính năng thanh toán, quản lý đơn hàng và tối ưu SEO.',
      category: 'ecommerce',
      price: 'free',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      demoUrl: 'https://demo-ecommerce.zunaweb.com',
      downloadUrl: '/downloads/ecommerce-template.zip',
      features: ['Responsive Design', 'Payment Integration', 'Admin Panel', 'SEO Optimized'],
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      rating: 4.8,
      downloads: 1247,
      updated: '2024-01-15',
      tags: ['E-commerce', 'Shopping', 'Payment', 'Admin']
    },
    {
      id: 2,
      title: 'Portfolio Creative',
      description: 'Template portfolio sáng tạo cho designer, photographer và creative professionals với gallery đẹp mắt.',
      category: 'portfolio',
      price: 'premium',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      demoUrl: 'https://demo-portfolio.zunaweb.com',
      downloadUrl: '/downloads/portfolio-template.zip',
      features: ['Portfolio Gallery', 'Blog System', 'Contact Form', 'Social Media'],
      techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      rating: 4.9,
      downloads: 892,
      updated: '2024-01-12',
      tags: ['Portfolio', 'Creative', 'Gallery', 'Blog']
    },
    {
      id: 3,
      title: 'Corporate Business',
      description: 'Template website công ty chuyên nghiệp với thiết kế hiện đại, phù hợp cho doanh nghiệp vừa và lớn.',
      category: 'business',
      price: 'premium',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      demoUrl: 'https://demo-corporate.zunaweb.com',
      downloadUrl: '/downloads/corporate-template.zip',
      features: ['Multi-page Layout', 'Team Section', 'Services', 'Testimonials'],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      rating: 4.7,
      downloads: 567,
      updated: '2024-01-10',
      tags: ['Corporate', 'Business', 'Professional', 'Services']
    },
    {
      id: 4,
      title: 'Restaurant & Food',
      description: 'Template website nhà hàng với menu đẹp mắt, đặt bàn online và gallery món ăn hấp dẫn.',
      category: 'restaurant',
      price: 'free',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      demoUrl: 'https://demo-restaurant.zunaweb.com',
      downloadUrl: '/downloads/restaurant-template.zip',
      features: ['Menu System', 'Online Booking', 'Food Gallery', 'Reviews'],
      techStack: ['React', 'Firebase', 'Tailwind CSS', 'React Hook Form'],
      rating: 4.6,
      downloads: 734,
      updated: '2024-01-08',
      tags: ['Restaurant', 'Food', 'Menu', 'Booking']
    },
    {
      id: 5,
      title: 'Blog & Magazine',
      description: 'Template blog và tạp chí với layout đẹp mắt, tối ưu cho việc đọc và chia sẻ nội dung.',
      category: 'blog',
      price: 'premium',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      demoUrl: 'https://demo-blog.zunaweb.com',
      downloadUrl: '/downloads/blog-template.zip',
      features: ['Blog System', 'Newsletter', 'Social Sharing', 'Comments'],
      techStack: ['React', 'MDX', 'Tailwind CSS', 'Vercel'],
      rating: 4.8,
      downloads: 445,
      updated: '2024-01-05',
      tags: ['Blog', 'Magazine', 'Content', 'Newsletter']
    },
    {
      id: 6,
      title: 'Real Estate',
      description: 'Template website bất động sản với danh sách property, bản đồ và form liên hệ chuyên nghiệp.',
      category: 'real-estate',
      price: 'premium',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      demoUrl: 'https://demo-realestate.zunaweb.com',
      downloadUrl: '/downloads/realestate-template.zip',
      features: ['Property Listings', 'Map Integration', 'Contact Forms', 'Search Filters'],
      techStack: ['React', 'Google Maps API', 'Firebase', 'Tailwind CSS'],
      rating: 4.7,
      downloads: 323,
      updated: '2024-01-03',
      tags: ['Real Estate', 'Property', 'Map', 'Listings']
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả', count: mockTemplates.length },
    { id: 'ecommerce', name: 'E-commerce', count: mockTemplates.filter(t => t.category === 'ecommerce').length },
    { id: 'portfolio', name: 'Portfolio', count: mockTemplates.filter(t => t.category === 'portfolio').length },
    { id: 'business', name: 'Business', count: mockTemplates.filter(t => t.category === 'business').length },
    { id: 'restaurant', name: 'Restaurant', count: mockTemplates.filter(t => t.category === 'restaurant').length },
    { id: 'blog', name: 'Blog', count: mockTemplates.filter(t => t.category === 'blog').length },
    { id: 'real-estate', name: 'Real Estate', count: mockTemplates.filter(t => t.category === 'real-estate').length }
  ];

  const priceOptions = [
    { id: 'all', name: 'Tất cả giá' },
    { id: 'free', name: 'Miễn phí' },
    { id: 'premium', name: 'Premium' }
  ];

  const sortOptions = [
    { id: 'newest', name: 'Mới nhất' },
    { id: 'oldest', name: 'Cũ nhất' },
    { id: 'rating', name: 'Đánh giá cao' },
    { id: 'downloads', name: 'Tải nhiều' },
    { id: 'name', name: 'Tên A-Z' }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setTemplates(mockTemplates);
      setFilteredTemplates(mockTemplates);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = templates;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(template =>
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(template => template.category === selectedCategory);
    }

    // Filter by price
    if (selectedPrice !== 'all') {
      filtered = filtered.filter(template => template.price === selectedPrice);
    }

    // Sort templates
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.updated) - new Date(a.updated);
        case 'oldest':
          return new Date(a.updated) - new Date(b.updated);
        case 'rating':
          return b.rating - a.rating;
        case 'downloads':
          return b.downloads - a.downloads;
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    setFilteredTemplates(filtered);
  }, [templates, searchQuery, selectedCategory, selectedPrice, sortBy]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('vi-VN');
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen gradient-bg pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg pt-20">
      <SEO 
        title="Templates Website - ZunaWeb"
        description="Khám phá bộ sưu tập templates website đẹp mắt, hiện đại và dễ tùy chỉnh. Từ e-commerce đến portfolio, blog và business."
        keywords="website templates, web design templates, responsive templates, modern templates"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Templates Website
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Khám phá bộ sưu tập templates đa dạng, từ e-commerce đến portfolio, 
            được thiết kế với công nghệ hiện đại và tối ưu cho mọi thiết bị.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-input pl-10"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-select"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="form-select"
              >
                {priceOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <span className="text-sm text-gray-600 dark:text-gray-400">Sắp xếp theo:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="form-select w-auto"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Xem:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Hiển thị {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''}
            {searchQuery && ` cho "${searchQuery}"`}
          </p>
        </div>

        {/* Templates Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div key={template.id} className="card card-hover group">
                <div className="relative overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`badge ${
                      template.price === 'free' ? 'badge-success' : 'badge-warning'
                    }`}>
                      {template.price === 'free' ? 'Miễn phí' : 'Premium'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="badge badge-secondary">
                      {getCategoryName(template.category)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {template.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(template.rating) ? 'fill-current' : 'fill-gray-300 dark:fill-gray-600'}`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {template.rating}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {template.downloads.toLocaleString()} tải
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Cập nhật: {formatDate(template.updated)}
                    </span>
                    <Link
                      to={`/templates/${template.id}`}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredTemplates.map((template) => (
              <div key={template.id} className="card group">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 relative">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-48 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`badge ${
                        template.price === 'free' ? 'badge-success' : 'badge-warning'
                      }`}>
                        {template.price === 'free' ? 'Miễn phí' : 'Premium'}
                      </span>
                    </div>
                  </div>

                  <div className="lg:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {template.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {template.description}
                        </p>
                      </div>
                      <span className="badge badge-secondary">
                        {getCategoryName(template.category)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tính năng chính:</h4>
                        <ul className="space-y-1">
                          {template.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {template.techStack.map((tech, index) => (
                            <span key={index} className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-1">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(template.rating) ? 'fill-current' : 'fill-gray-300 dark:fill-gray-600'}`}
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {template.rating} ({template.downloads.toLocaleString()} tải)
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Cập nhật: {formatDate(template.updated)}
                        </span>
                      </div>
                      <Link
                        to={`/templates/${template.id}`}
                        className="btn-primary"
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Không tìm thấy template
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPrice('all');
              }}
              className="btn-primary"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Templates; 