import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';

const mockBlogPosts = [
  {
    id: 1,
    title: '10 xu hướng thiết kế web năm 2024',
    content: `
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Năm 2024 đánh dấu sự phát triển mạnh mẽ của công nghệ web với những xu hướng thiết kế mới nhất. 
        Dưới đây là 10 xu hướng sẽ thống trị trong năm nay:
      </p>

      <h2 id="ai-powered-design" class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. AI-Powered Design</h2>
      <p class="mb-4 text-gray-700">
        Trí tuệ nhân tạo đang thay đổi cách chúng ta thiết kế website. Các công cụ AI như Midjourney, 
        DALL-E và các AI design tools khác giúp tạo ra những giao diện độc đáo và sáng tạo.
      </p>

      <h2 id="micro-interactions" class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Micro-interactions</h2>
      <p class="mb-4 text-gray-700">
        Những tương tác nhỏ như hover effects, loading animations, và button states giúp tăng 
        trải nghiệm người dùng và làm cho website trở nên sinh động hơn.
      </p>

      <h2 id="dark-mode" class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Dark Mode & Light Mode</h2>
      <p class="mb-4 text-gray-700">
        Người dùng ngày càng yêu thích khả năng chuyển đổi giữa chế độ sáng và tối. 
        Đây không chỉ là xu hướng mà còn là yêu cầu cần thiết cho mọi website hiện đại.
      </p>

      <h2 id="glassmorphism" class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Glassmorphism</h2>
      <p class="mb-4 text-gray-700">
        Hiệu ứng kính mờ với backdrop blur đang trở nên phổ biến, tạo ra cảm giác hiện đại 
        và sang trọng cho giao diện.
      </p>

      <h2 id="3d-elements" class="text-2xl font-bold text-gray-900 mb-4 mt-8">5. 3D Elements</h2>
      <p class="mb-4 text-gray-700">
        Các phần tử 3D, từ icons đến illustrations, đang tạo ra chiều sâu và sự thu hút 
        cho website.
      </p>

      <h2 id="typography" class="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Typography as Hero</h2>
      <p class="mb-4 text-gray-700">
        Typography không chỉ là cách hiển thị text mà còn là yếu tố thiết kế chính, 
        đặc biệt là với các font chữ độc đáo và sáng tạo.
      </p>

      <h2 id="minimalist" class="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Minimalist Design</h2>
      <p class="mb-4 text-gray-700">
        Thiết kế tối giản với focus vào nội dung và trải nghiệm người dùng vẫn là xu hướng 
        chủ đạo.
      </p>

      <h2 id="voice-ui" class="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Voice User Interface</h2>
      <p class="mb-4 text-gray-700">
        Với sự phát triển của AI, voice interface đang trở thành một phần quan trọng 
        của trải nghiệm web.
      </p>

      <h2 id="sustainability" class="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Sustainability Design</h2>
      <p class="mb-4 text-gray-700">
        Thiết kế bền vững với focus vào hiệu suất, tối ưu hóa năng lượng và giảm thiểu 
        tác động môi trường.
      </p>

      <h2 id="accessibility" class="text-2xl font-bold text-gray-900 mb-4 mt-8">10. Accessibility First</h2>
      <p class="mb-4 text-gray-700">
        Thiết kế cho mọi người, bao gồm cả người khuyết tật, đang trở thành ưu tiên 
        hàng đầu trong thiết kế web.
      </p>

      <div class="bg-gradient-to-r from-primary-50 to-purple-50 p-6 rounded-xl my-8">
        <h3 class="text-xl font-bold text-gray-900 mb-3">Kết luận</h3>
        <p class="text-gray-700">
          Những xu hướng này không chỉ là những cải tiến về mặt thẩm mỹ mà còn phản ánh 
          sự phát triển của công nghệ và nhu cầu người dùng. Việc áp dụng những xu hướng 
          này một cách hợp lý sẽ giúp website của bạn trở nên hiện đại và cạnh tranh hơn.
        </p>
      </div>
    `,
    excerpt: 'Khám phá những xu hướng thiết kế web mới nhất sẽ thống trị năm 2024, từ AI-powered design đến micro-interactions...',
    category: 'web-design',
    author: 'Nguyễn Văn A',
    date: '2024-01-15',
    readTime: '5 phút',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    tags: ['Design', 'Trends', '2024', 'AI', 'UX/UI'],
    views: 1247,
    likes: 89
  },
  {
    id: 2,
    title: 'Hướng dẫn tối ưu SEO cho React App',
    content: `
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        SEO (Search Engine Optimization) là yếu tố quan trọng để website của bạn được tìm thấy 
        trên các công cụ tìm kiếm. Với React App, việc tối ưu SEO có một số thách thức riêng.
      </p>

      <h2 id="ssr" class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Server-Side Rendering (SSR)</h2>
      <p class="mb-4 text-gray-700">
        SSR giúp các công cụ tìm kiếm có thể đọc được nội dung của website ngay từ lần đầu 
        truy cập, thay vì phải chờ JavaScript load xong.
      </p>

      <h2 id="ssg" class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Static Site Generation (SSG)</h2>
      <p class="mb-4 text-gray-700">
        SSG tạo ra các trang HTML tĩnh tại thời điểm build, giúp tăng tốc độ tải trang 
        và cải thiện SEO.
      </p>

      <h2 id="meta-tags" class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Meta Tags</h2>
      <p class="mb-4 text-gray-700">
        Sử dụng React Helmet hoặc Next.js Head để quản lý meta tags một cách động.
      </p>

      <h2 id="performance" class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Performance Optimization</h2>
      <p class="mb-4 text-gray-700">
        Tối ưu hóa bundle size, lazy loading, và code splitting để cải thiện Core Web Vitals.
      </p>

      <div class="bg-gradient-to-r from-primary-50 to-purple-50 p-6 rounded-xl my-8">
        <h3 class="text-xl font-bold text-gray-900 mb-3">Kết luận</h3>
        <p class="text-gray-700">
          Tối ưu SEO cho React App cần sự kết hợp của nhiều kỹ thuật khác nhau. 
          Hãy bắt đầu với những điểm cơ bản và dần dần áp dụng các kỹ thuật nâng cao.
        </p>
      </div>
    `,
    excerpt: 'Các kỹ thuật tối ưu SEO hiệu quả cho ứng dụng React, bao gồm SSR, SSG và các best practices...',
    category: 'seo',
    author: 'Trần Thị B',
    date: '2024-01-12',
    readTime: '8 phút',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    tags: ['React', 'SEO', 'Performance'],
    views: 892,
    likes: 45
  },
  {
    id: 3,
    title: 'Xây dựng API RESTful với Node.js',
    content: `
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        API RESTful là chuẩn phổ biến để xây dựng các web service. Với Node.js, chúng ta có 
        thể tạo ra những API mạnh mẽ và dễ bảo trì.
      </p>

      <h2 id="structure" class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Cấu trúc Project</h2>
      <p class="mb-4 text-gray-700">
        Tổ chức code theo mô hình MVC hoặc Clean Architecture để dễ dàng mở rộng và bảo trì.
      </p>

      <h2 id="auth" class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Authentication & Authorization</h2>
      <p class="mb-4 text-gray-700">
        Sử dụng JWT hoặc OAuth để xác thực và phân quyền người dùng một cách an toàn.
      </p>

      <h2 id="database" class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Database Design</h2>
      <p class="mb-4 text-gray-700">
        Thiết kế database schema tối ưu và sử dụng ORM như Sequelize hoặc Prisma.
      </p>

      <h2 id="error-handling" class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Error Handling</h2>
      <p class="mb-4 text-gray-700">
        Xử lý lỗi một cách nhất quán và trả về response có cấu trúc rõ ràng.
      </p>

      <h2 id="testing" class="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Testing</h2>
      <p class="mb-4 text-gray-700">
        Viết unit tests và integration tests để đảm bảo chất lượng code.
      </p>

      <div class="bg-gradient-to-r from-primary-50 to-purple-50 p-6 rounded-xl my-8">
        <h3 class="text-xl font-bold text-gray-900 mb-3">Kết luận</h3>
        <p class="text-gray-700">
          Xây dựng API RESTful với Node.js cần sự chú ý đến nhiều khía cạnh khác nhau. 
          Hãy bắt đầu với những nguyên tắc cơ bản và dần dần áp dụng các best practices.
        </p>
      </div>
    `,
    excerpt: 'Hướng dẫn chi tiết cách xây dựng API RESTful hoàn chỉnh với Node.js, Express và MongoDB...',
    category: 'development',
    author: 'Lê Văn C',
    date: '2024-01-10',
    readTime: '12 phút',
    image: 'https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?w=800&h=400&fit=crop',
    tags: ['Node.js', 'API', 'Backend'],
    views: 567,
    likes: 23
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState('');

  // Lấy blog post theo id từ useParams
  const blogPost = mockBlogPosts.find(post => String(post.id) === String(id));

  // Nếu không tìm thấy blog post
  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Không tìm thấy bài viết</h2>
          <p className="mb-6 text-gray-600">Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/blog" className="btn-primary">Quay lại Blog</Link>
        </div>
      </div>
    );
  }

  // Lấy bài viết liên quan theo category
  const relatedPosts = mockBlogPosts
    .filter(post => post.id !== blogPost.id && post.category === blogPost.category)
    .slice(0, 2);

  // Tính toán reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theo dõi active heading cho TOC
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h2[id]');
      let current = '';

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          current = heading.getAttribute('id');
        }
      });

      setActiveHeading(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Tạo Table of Contents
  const generateTOC = () => {
    const headings = blogPost.content.match(/<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/g);
    if (!headings) return [];

    return headings.map(heading => {
      const idMatch = heading.match(/id="([^"]*)"/);
      const textMatch = heading.match(/>([^<]*)</);
      return {
        id: idMatch ? idMatch[1] : '',
        text: textMatch ? textMatch[1] : ''
      };
    });
  };

  const tocItems = generateTOC();

  return (
    <div className="min-h-screen gradient-bg">
      <SEO 
        title={blogPost.title}
        description={blogPost.excerpt}
        keywords={blogPost.tags.join(', ')}
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-purple-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-primary-600">Trang chủ</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><Link to="/blog" className="hover:text-primary-600">Blog</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900">{blogPost.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm rounded-full">
                    {blogPost.category === 'web-design' ? 'Web Design' :
                     blogPost.category === 'seo' ? 'SEO & Marketing' :
                     blogPost.category === 'development' ? 'Development' :
                     blogPost.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                {/* Article Meta */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {blogPost.author.charAt(0)}
                      </div>
                      <span>{blogPost.author}</span>
                    </div>
                    <span>•</span>
                    <span>{formatDate(blogPost.date)}</span>
                    <span>•</span>
                    <span>{blogPost.readTime}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {blogPost.views.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {blogPost.likes}
                    </div>
                  </div>
                </div>

                {/* Article Title */}
                <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  {blogPost.title}
                </h1>

                {/* Article Excerpt */}
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {blogPost.excerpt}
                </p>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-600 text-sm rounded-full hover:bg-primary-200 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Chia sẻ bài viết:</h3>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </button>
                    <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      Twitter
                    </button>
                    <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Bài viết liên quan</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="card overflow-hidden group"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{formatDate(post.date)}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="btn-primary"
              >
                ← Quay lại Blog
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Table of Contents */}
            {tocItems.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Mục lục</h3>
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm py-2 px-3 rounded-lg transition-colors ${
                        activeHeading === item.id
                          ? 'bg-primary-100 text-primary-600 font-medium'
                          : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Author Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tác giả</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                  {blogPost.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{blogPost.author}</h4>
                  <p className="text-sm text-gray-600">Chuyên gia thiết kế web</p>
                </div>
              </div>
            </div>

            {/* Reading Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Thống kê</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Thời gian đọc:</span>
                  <span className="font-medium">{blogPost.readTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lượt xem:</span>
                  <span className="font-medium">{blogPost.views.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lượt thích:</span>
                  <span className="font-medium">{blogPost.likes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ngày đăng:</span>
                  <span className="font-medium">{formatDate(blogPost.date)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail; 