import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    {
      id: 'web-design',
      name: 'Thiết kế Web',
      description: 'Các mẫu thiết kế web hiện đại và đẹp mắt',
      count: 24,
      color: 'from-blue-500 to-cyan-500',
      icon: '🎨',
      tags: ['UI/UX', 'Responsive', 'Modern'],
      slug: 'web-design'
    },
    {
      id: 'e-commerce',
      name: 'Thương mại điện tử',
      description: 'Giải pháp web bán hàng trực tuyến chuyên nghiệp',
      count: 18,
      color: 'from-purple-500 to-pink-500',
      icon: '🛒',
      tags: ['Shopping', 'Payment', 'Inventory'],
      slug: 'ecommerce'
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      description: 'Website giới thiệu cá nhân và doanh nghiệp',
      count: 15,
      color: 'from-green-500 to-teal-500',
      icon: '📁',
      tags: ['Personal', 'Creative', 'Showcase'],
      slug: 'portfolio'
    },
    {
      id: 'blog',
      name: 'Blog & Tin tức',
      description: 'Nền tảng chia sẻ nội dung và tin tức',
      count: 12,
      color: 'from-orange-500 to-red-500',
      icon: '📝',
      tags: ['Content', 'News', 'Articles'],
      slug: 'blog'
    },
    {
      id: 'landing-page',
      name: 'Landing Page',
      description: 'Trang đích tối ưu cho chiến dịch marketing',
      count: 20,
      color: 'from-indigo-500 to-purple-500',
      icon: '🚀',
      tags: ['Conversion', 'Marketing', 'CTA'],
      slug: 'landing-page'
    },
    {
      id: 'dashboard',
      name: 'Dashboard',
      description: 'Bảng điều khiển quản lý dữ liệu',
      count: 8,
      color: 'from-gray-500 to-slate-500',
      icon: '📊',
      tags: ['Analytics', 'Admin', 'Data'],
      slug: 'dashboard'
    },
    {
      id: 'restaurant',
      name: 'Nhà hàng & Ẩm thực',
      description: 'Website cho nhà hàng và dịch vụ ẩm thực',
      count: 14,
      color: 'from-yellow-500 to-orange-500',
      icon: '🍽️',
      tags: ['Food', 'Menu', 'Booking'],
      slug: 'restaurant'
    },
    {
      id: 'education',
      name: 'Giáo dục & Học tập',
      description: 'Nền tảng học tập trực tuyến và giáo dục',
      count: 16,
      color: 'from-emerald-500 to-green-500',
      icon: '🎓',
      tags: ['Learning', 'Courses', 'Education'],
      slug: 'education'
    },
    {
      id: 'healthcare',
      name: 'Y tế & Chăm sóc sức khỏe',
      description: 'Website cho phòng khám và dịch vụ y tế',
      count: 10,
      color: 'from-red-500 to-pink-500',
      icon: '🏥',
      tags: ['Health', 'Medical', 'Care'],
      slug: 'healthcare'
    },
    {
      id: 'real-estate',
      name: 'Bất động sản',
      description: 'Website môi giới và quản lý bất động sản',
      count: 13,
      color: 'from-amber-500 to-yellow-500',
      icon: '🏠',
      tags: ['Property', 'Real Estate', 'Housing'],
      slug: 'real-estate'
    },
    {
      id: 'travel',
      name: 'Du lịch & Khách sạn',
      description: 'Website đặt phòng và dịch vụ du lịch',
      count: 11,
      color: 'from-cyan-500 to-blue-500',
      icon: '✈️',
      tags: ['Travel', 'Hotel', 'Booking'],
      slug: 'travel'
    },
    {
      id: 'technology',
      name: 'Công nghệ & Startup',
      description: 'Website cho công ty công nghệ và startup',
      count: 19,
      color: 'from-violet-500 to-purple-500',
      icon: '💻',
      tags: ['Tech', 'Startup', 'Innovation'],
      slug: 'technology'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tất cả', count: categories.length },
    { id: 'popular', label: 'Phổ biến', count: categories.filter(c => c.count > 15).length },
    { id: 'new', label: 'Mới nhất', count: categories.filter(c => c.count < 10).length }
  ];

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'popular' && category.count > 15) ||
                         (selectedFilter === 'new' && category.count < 10);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen gradient-bg">
      <SEO 
        title="Danh mục - ZunaWeb" 
        description="Các danh mục template website nổi bật của ZunaWeb." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 mt-28">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Chuyên mục
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá các chuyên mục đa dạng với nhiều chủ đề và lĩnh vực khác nhau
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Tìm kiếm chuyên mục..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedFilter === filter.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.slug}`}
              className="group"
            >
              <div className="card p-6 hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl mx-auto mb-4 flex items-center justify-center text-white text-2xl`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {category.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-blue-600">
                    {category.count} mẫu
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Không tìm thấy chuyên mục
            </h3>
            <p className="text-gray-600 mb-4">
              Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFilter('all');
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

export default Categories; 