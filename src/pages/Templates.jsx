import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List, Star, Eye, Download, Heart, Clock, Tag } from 'lucide-react';
import SEO from '../components/SEO';

const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, _setSelectedPrice] = useState('all');
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
      tags: ['E-commerce', 'Shopping', 'Payment', 'Admin'],
      views: 8923,
      isNew: true,
      isFeatured: true
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
      tags: ['Portfolio', 'Creative', 'Gallery', 'Blog'],
      views: 15678,
      isNew: false,
      isFeatured: true
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
      tags: ['Corporate', 'Business', 'Professional', 'Services'],
      views: 6543,
      isNew: false,
      isFeatured: false
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
      tags: ['Restaurant', 'Food', 'Menu', 'Booking'],
      views: 12345,
      isNew: true,
      isFeatured: false
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
      tags: ['Blog', 'Magazine', 'Content', 'Newsletter'],
      views: 18923,
      isNew: false,
      isFeatured: false
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
      tags: ['Real Estate', 'Property', 'Map', 'Listings'],
      views: 4321,
      isNew: false,
      isFeatured: false
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

  // const priceOptions = [
  //   { id: 'all', name: 'Tất cả giá' },
  //   { id: 'free', name: 'Miễn phí' },
  //   { id: 'premium', name: 'Premium' }
  // ];

  const sortOptions = [
    { id: 'newest', name: 'Mới nhất' },
    { id: 'oldest', name: 'Cũ nhất' },
    { id: 'rating', name: 'Đánh giá cao' },
    { id: 'downloads', name: 'Tải nhiều' },
    { id: 'name', name: 'Tên A-Z' }
  ];

  const viewOptions = [
    { value: 'grid', label: 'Lưới', icon: Grid },
    { value: 'list', label: 'Danh sách', icon: List }
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

  // const formatDate = (dateString) => {
  //   return new Date(dateString).toLocaleDateString('vi-VN');
  // };

  // const getCategoryName = (categoryId) => {
  //   const category = categories.find(c => c.id === categoryId);
  //   return category ? category.name : categoryId;
  // };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Loading skeleton */}
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <SEO 
        title="Templates - ZunaWeb"
        description="Khám phá bộ sưu tập templates website đẹp mắt và chuyên nghiệp. Từ website doanh nghiệp đến portfolio sáng tạo."
        keywords="templates, website templates, responsive design, modern websites"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Templates Website
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá bộ sưu tập templates đẹp mắt và chuyên nghiệp, được thiết kế để giúp bạn tạo ra website hoàn hảo
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          {/* Search and Category */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-1 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sort and View */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <span className="text-sm text-gray-600">Sắp xếp theo:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Xem:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                {viewOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setViewMode(option.value)}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === option.value
                        ? 'bg-primary-100 text-primary-600'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <option.icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <p className="text-gray-600">
            Hiển thị {filteredTemplates.length} trong tổng số {templates.length} templates
          </p>
        </div>

        {/* Templates Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <Link
                key={template.id}
                to={`/templates/${template.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-t-2xl flex items-center justify-center">
                    <span className="text-primary-600 font-medium">Template Preview</span>
                  </div>
                  {template.isNew && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Mới
                    </span>
                  )}
                  {template.isFeatured && (
                    <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                      Nổi bật
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {template.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(template.rating) ? 'fill-current' : 'fill-gray-300'} text-yellow-400`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {template.rating}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {template.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {template.downloads.toLocaleString()}
                      </span>
                    </div>
                    <span className="font-semibold text-primary-600">{template.price}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-6">
            {filteredTemplates.map((template) => (
              <Link
                key={template.id}
                to={`/templates/${template.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col lg:flex-row gap-6"
              >
                <div className="relative lg:w-64 lg:flex-shrink-0">
                  <div className="h-48 lg:h-full bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
                    <span className="text-primary-600 font-medium">Template Preview</span>
                  </div>
                  {template.isNew && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Mới
                    </span>
                  )}
                  {template.isFeatured && (
                    <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                      Nổi bật
                    </span>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {template.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tính năng chính:</h4>
                      <ul className="space-y-1">
                        {template.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {template.techStack.map((tech, index) => (
                          <span key={index} className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats and Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(template.rating) ? 'fill-current' : 'fill-gray-300'} text-yellow-400`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">
                          {template.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {template.downloads.toLocaleString()} lượt tải
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-primary-600">{template.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Featured Section */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Templates nổi bật
          </h3>
          <p className="text-gray-600 mb-4">
            Những templates được yêu thích nhất trong tuần
          </p>
        </div>
      </div>
    </div>
  );
};

export default Templates; 