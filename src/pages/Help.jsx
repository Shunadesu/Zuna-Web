import React from 'react';
import SEO from '../components/SEO';

const faqs = [
  {
    question: 'Làm sao để sử dụng template?',
    answer: 'Bạn chỉ cần đăng ký tài khoản, chọn template phù hợp và làm theo hướng dẫn tích hợp.'
  },
  {
    question: 'Tôi có thể nâng cấp gói dịch vụ không?',
    answer: 'Bạn có thể nâng cấp bất cứ lúc nào trong trang Bảng giá hoặc liên hệ đội ngũ hỗ trợ.'
  },
  {
    question: 'Hỗ trợ kỹ thuật hoạt động như thế nào?',
    answer: 'Chúng tôi hỗ trợ qua email, chat trực tuyến và hotline 24/7 cho khách hàng trả phí.'
  },
];

const Help = () => (
  <div className="min-h-screen bg-white py-20">
    <SEO title="Trung tâm hỗ trợ - ZunaWeb" description="Câu hỏi thường gặp và hỗ trợ khách hàng ZunaWeb." />
    <div className="max-w-3xl mx-auto px-4 text-center mb-12 mt-28">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Trung tâm hỗ trợ</h1>
      <p className="text-gray-600 text-lg">Câu hỏi thường gặp &amp; liên hệ hỗ trợ khách hàng</p>
    </div>
    <div className="max-w-2xl mx-auto space-y-8 mb-12">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gray-50 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold text-primary-600 mb-2">{faq.question}</h2>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </div>
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-lg font-semibold mb-2 text-gray-900">Cần hỗ trợ thêm?</h3>
      <p className="text-gray-600 mb-4">Liên hệ đội ngũ ZunaWeb qua email <a href="mailto:support@zunaweb.com" className="text-primary-600 underline">support@zunaweb.com</a> hoặc hotline <a href="tel:0987654321" className="text-primary-600 underline">0987 654 321</a>.</p>
      <a href="/contact" className="btn-primary">Gửi yêu cầu hỗ trợ</a>
    </div>
  </div>
);

export default Help; 