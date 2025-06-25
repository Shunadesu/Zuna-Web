import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'web-design', name: 'Thiết kế web' },
    { id: 'development', name: 'Phát triển' },
    { id: 'seo', name: 'SEO & Marketing' },
    { id: 'tips', name: 'Mẹo & Thủ thuật' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 xu hướng thiết kế web năm 2024',
      excerpt: 'Khám phá những xu hướng thiết kế web mới nhất sẽ thống trị năm 2024, từ AI-powered design đến micro-interactions...',
      category: 'web-design',
      author: 'Nguyễn Văn A',
      date: '2024-01-15',
      readTime: '5 phút',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      tags: ['Design', 'Trends', '2024']
    },
    {
      id: 2,
      title: 'Hướng dẫn tối ưu SEO cho React App',
      excerpt: 'Các kỹ thuật tối ưu SEO hiệu quả cho ứng dụng React, bao gồm SSR, SSG và các best practices...',
      category: 'seo',
      author: 'Trần Thị B',
      date: '2024-01-12',
      readTime: '8 phút',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      tags: ['React', 'SEO', 'Performance']
    },
    {
      id: 3,
      title: 'Xây dựng API RESTful với Node.js',
      excerpt: 'Hướng dẫn chi tiết cách xây dựng API RESTful hoàn chỉnh với Node.js, Express và MongoDB...',
      category: 'development',
      author: 'Lê Văn C',
      date: '2024-01-10',
      readTime: '12 phút',
      image: 'https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?w=400&h=250&fit=crop',
      tags: ['Node.js', 'API', 'Backend']
    },
    {
      id: 4,
      title: 'Tối ưu hóa hiệu suất website',
      excerpt: 'Các phương pháp tối ưu hóa hiệu suất website để cải thiện tốc độ tải trang và trải nghiệm người dùng...',
      category: 'tips',
      author: 'Phạm Thị D',
      date: '2024-01-08',
      readTime: '6 phút',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      tags: ['Performance', 'Optimization', 'Speed']
    },
    {
      id: 5,
      title: 'Thiết kế UI/UX cho mobile app',
      excerpt: 'Những nguyên tắc thiết kế UI/UX quan trọng khi phát triển ứng dụng di động...',
      category: 'web-design',
      author: 'Hoàng Văn E',
      date: '2024-01-05',
      readTime: '7 phút',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      tags: ['Mobile', 'UI/UX', 'Design']
    },
    {
      id: 6,
      title: 'Sử dụng TypeScript trong dự án React',
      excerpt: 'Lợi ích và cách triển khai TypeScript trong dự án React để tăng tính ổn định và khả năng bảo trì...',
      category: 'development',
      author: 'Vũ Thị F',
      date: '2024-01-03',
      readTime: '10 phút',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop',
      tags: ['TypeScript', 'React', 'Development']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen gradient-bg">
      <SEO 
        title="Blog - ZunaWeb.com"
        description="Blog chia sẻ kiến thức về thiết kế web, phát triển ứng dụng, SEO và các mẹo công nghệ hữu ích."
        keywords="blog, thiết kế web, phát triển web, SEO, công nghệ"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 mt-28">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Blog ZunaWeb
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chia sẻ kiến thức, kinh nghiệm và xu hướng mới nhất trong lĩnh vực thiết kế và phát triển web
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm rounded-full">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <span>•</span>
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 text-primary-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Không tìm thấy bài viết</h3>
            <p className="text-gray-600">Thử thay đổi từ khóa tìm kiếm hoặc danh mục</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Đăng ký nhận tin mới</h3>
          <p className="mb-6 opacity-90">
            Nhận những bài viết mới nhất về thiết kế web và công nghệ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 