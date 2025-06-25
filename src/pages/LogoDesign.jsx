import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const logoGallery = [
  {
    name: 'TechStart',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=300&h=300&fit=crop'
  },
  {
    name: 'GreenLeaf',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop'
  },
  {
    name: 'EduPro',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=300&h=300&fit=crop'
  },
  {
    name: 'Foodies',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=300&h=300&fit=crop'
  },
  {
    name: 'TravelGo',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=300&h=300&fit=crop'
  },
  {
    name: 'BizHub',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=300&h=300&fit=crop'
  }
];

const faqs = [
  {
    question: 'Tôi sẽ nhận được những gì khi đặt thiết kế logo?',
    answer: 'Bạn sẽ nhận được file logo vector (AI, SVG, PDF), PNG nền trong suốt, hướng dẫn sử dụng và quyền sở hữu trọn đời.'
  },
  {
    question: 'Thời gian thiết kế logo là bao lâu?',
    answer: 'Thông thường từ 2-5 ngày làm việc tuỳ mức độ phức tạp và số lần chỉnh sửa.'
  },
  {
    question: 'Có được chỉnh sửa logo không?',
    answer: 'Bạn được chỉnh sửa miễn phí 2 lần. Sau đó sẽ tính phí nhỏ cho mỗi lần chỉnh sửa thêm.'
  },
  {
    question: 'Tôi có thể yêu cầu phong cách riêng không?',
    answer: 'Chúng tôi thiết kế theo yêu cầu, định hướng thương hiệu và phong cách bạn mong muốn.'
  }
];

const sectionTitle = 'text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display';
const sectionSubtitle = 'text-gray-600 text-lg mb-8';
const cardClass = 'bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center';
const iconClass = 'w-12 h-12 flex items-center justify-center bg-primary-100 rounded-full mb-4 text-primary-600 text-2xl font-bold';

const LogoDesign = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white  mt-32">
    <SEO 
      title="Thiết kế Logo chuyên nghiệp - ZunaWeb"
      description="Dịch vụ thiết kế logo sáng tạo, chuyên nghiệp, phù hợp mọi lĩnh vực. Nhận file vector, chỉnh sửa miễn phí, bảo hành trọn đời."
    />
    <div className="max-w-4xl mx-auto px-4 text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Dịch vụ thiết kế Logo chuyên nghiệp</h1>
      <p className="text-xl text-gray-600 mb-8">
        Sở hữu logo thương hiệu ấn tượng, sáng tạo và chuyên nghiệp chỉ trong vài ngày. Đội ngũ designer giàu kinh nghiệm, quy trình rõ ràng, chỉnh sửa miễn phí.<br/>
        <span className="text-primary-600 font-semibold">Tặng kèm bộ nhận diện cơ bản cho khách hàng mới!</span>
      </p>
      <Link to="/contact" className="btn-primary text-lg px-8 py-3">Nhận tư vấn miễn phí</Link>
    </div>

    {/* Lý do chọn ZunaWeb */}
    <div className="max-w-6xl mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className={sectionTitle}>Tại sao chọn ZunaWeb?</h2>
        <p className={sectionSubtitle}>Chúng tôi cam kết mang lại giá trị vượt trội cho thương hiệu của bạn</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className={cardClass}>
          <svg className="w-10 h-10 text-primary-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v9m-7-7h14" /></svg>
          <div className="font-semibold mb-2">Sáng tạo độc quyền</div>
          <div className="text-gray-600 text-sm text-center">Logo thiết kế mới 100%, không dùng mẫu sẵn, đảm bảo bản quyền.</div>
        </div>
        <div className={cardClass}>
          <svg className="w-10 h-10 text-primary-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2" /></svg>
          <div className="font-semibold mb-2">Chỉnh sửa miễn phí</div>
          <div className="text-gray-600 text-sm text-center">Miễn phí 2-4 lần chỉnh sửa, đảm bảo bạn hài lòng tuyệt đối.</div>
        </div>
        <div className={cardClass}>
          <svg className="w-10 h-10 text-primary-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          <div className="font-semibold mb-2">Bàn giao đầy đủ</div>
          <div className="text-gray-600 text-sm text-center">Nhận file vector, PNG, PDF, hướng dẫn sử dụng và quyền sở hữu trọn đời.</div>
        </div>
        <div className={cardClass}>
          <svg className="w-10 h-10 text-primary-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
          <div className="font-semibold mb-2">Hỗ trợ tận tâm</div>
          <div className="text-gray-600 text-sm text-center">Tư vấn tận tình, bảo hành trọn đời, đồng hành cùng thương hiệu của bạn.</div>
        </div>
      </div>
    </div>

    {/* Quy trình thiết kế */}
    <div className="max-w-6xl mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className={sectionTitle}>Quy trình thiết kế logo</h2>
        <p className={sectionSubtitle}>Chuyên nghiệp - Minh bạch - Hiệu quả</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { step: 1, title: 'Tư vấn & Lấy ý tưởng', desc: 'Lắng nghe nhu cầu, định hướng thương hiệu, phong cách mong muốn.' },
          { step: 2, title: 'Phác thảo & Thiết kế', desc: 'Phác thảo ý tưởng, gửi bản demo, nhận phản hồi từ khách hàng.' },
          { step: 3, title: 'Chỉnh sửa & Hoàn thiện', desc: 'Chỉnh sửa theo góp ý, hoàn thiện logo cuối cùng.' },
          { step: 4, title: 'Bàn giao & Bảo hành', desc: 'Bàn giao file vector, hướng dẫn sử dụng, bảo hành trọn đời.' }
        ].map((item) => (
          <div key={item.step} className={cardClass + ' py-10'}>
            <div className={iconClass}>{item.step}</div>
            <div className="font-semibold mb-2">{item.title}</div>
            <div className="text-gray-600 text-sm text-center">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Bảng giá logo */}
    <div className="max-w-6xl mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className={sectionTitle}>Bảng giá thiết kế logo</h2>
        <p className={sectionSubtitle}>Chọn gói phù hợp với nhu cầu và ngân sách của bạn</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className={cardClass}>
          <h3 className="text-xl font-bold mb-2 text-gray-900">Cơ bản</h3>
          <div className="text-3xl font-extrabold text-primary-600 mb-4">990.000đ</div>
          <ul className="mb-6 space-y-2 text-gray-600 text-left">
            <li>2 concept logo</li>
            <li>Chỉnh sửa 2 lần</li>
            <li>Bàn giao file vector, PNG</li>
            <li>Thời gian: 3 ngày</li>
          </ul>
          <Link to="/contact" className="btn-primary w-full">Đặt ngay</Link>
        </div>
        <div className={cardClass + ' ring-2 ring-primary-500 scale-105'}>
          <h3 className="text-xl font-bold mb-2 text-gray-900">Chuyên nghiệp</h3>
          <div className="text-3xl font-extrabold text-primary-600 mb-4">1.990.000đ</div>
          <ul className="mb-6 space-y-2 text-gray-600 text-left">
            <li>4 concept logo</li>
            <li>Chỉnh sửa 4 lần</li>
            <li>Bàn giao đầy đủ file vector, PNG, PDF</li>
            <li>Hướng dẫn sử dụng logo</li>
            <li>Thời gian: 5 ngày</li>
          </ul>
          <Link to="/contact" className="btn-primary w-full">Đặt ngay</Link>
        </div>
        <div className={cardClass}>
          <h3 className="text-xl font-bold mb-2 text-gray-900">Doanh nghiệp</h3>
          <div className="text-3xl font-extrabold text-primary-600 mb-4">Liên hệ</div>
          <ul className="mb-6 space-y-2 text-gray-600 text-left">
            <li>Thiết kế theo yêu cầu</li>
            <li>Chỉnh sửa không giới hạn</li>
            <li>Bàn giao toàn bộ file, guideline</li>
            <li>Hỗ trợ xây dựng bộ nhận diện thương hiệu</li>
            <li>Thời gian: theo dự án</li>
          </ul>
          <Link to="/contact" className="btn-primary w-full">Nhận báo giá</Link>
        </div>
      </div>
    </div>

    {/* Gallery logo mẫu */}
    <div className="max-w-6xl mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className={sectionTitle}>Một số logo đã thực hiện</h2>
        <p className={sectionSubtitle}>Tham khảo các mẫu logo sáng tạo cho nhiều lĩnh vực</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {logoGallery.map((logo, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src={logo.image} alt={logo.name} className="w-20 h-20 object-cover rounded-full mb-2" />
            <div className="text-sm font-medium text-gray-700">{logo.name}</div>
          </div>
        ))}
      </div>
    </div>

    {/* FAQ */}
    <div className="max-w-4xl mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className={sectionTitle}>Câu hỏi thường gặp</h2>
        <p className={sectionSubtitle}>Giải đáp những thắc mắc về dịch vụ thiết kế logo</p>
      </div>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA Section */}
    <div className="max-w-4xl mx-auto px-4 mb-20">
      <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4 font-display">Sẵn sàng sở hữu logo chuyên nghiệp?</h2>
        <p className="text-xl mb-8 opacity-90">
          Đăng ký ngay để được tư vấn miễn phí và nhận ưu đãi thiết kế logo độc quyền cho doanh nghiệp của bạn!<br/>
          <span className="font-semibold">Hotline: <a href="tel:0987654321" className="underline text-white">0987 654 321</a></span>
        </p>
        <Link to="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Nhận tư vấn miễn phí
        </Link>
      </div>
    </div>
  </div>
);

export default LogoDesign; 