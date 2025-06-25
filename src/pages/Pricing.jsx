import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const plans = [
  {
    name: 'Cơ bản',
    price: 'Miễn phí',
    originalPrice: '',
    period: 'Vĩnh viễn',
    features: [
      '1 template miễn phí',
      'Hỗ trợ cơ bản qua email',
      'Tài liệu hướng dẫn',
      'Cập nhật bảo mật',
      'Hosting cơ bản',
      'SSL certificate'
    ],
    notIncluded: [
      'Template premium',
      'Hỗ trợ ưu tiên',
      'Tùy chỉnh nâng cao',
      'SEO tools'
    ],
    highlight: false,
    popular: false,
    buttonText: 'Bắt đầu miễn phí',
    buttonVariant: 'secondary'
  },
  {
    name: 'Chuyên nghiệp',
    price: '299.000đ',
    originalPrice: '499.000đ',
    period: '/tháng',
    features: [
      'Tất cả template premium (50+)',
      'Hỗ trợ chat & email 24/7',
      'Cập nhật template mới hàng tuần',
      'Tích hợp SEO nâng cao',
      'Analytics & tracking',
      'Custom domain',
      'Priority support',
      'Backup tự động'
    ],
    notIncluded: [
      'Tùy chỉnh theo yêu cầu',
      'API integration'
    ],
    highlight: true,
    popular: true,
    buttonText: 'Chọn gói này',
    buttonVariant: 'primary'
  },
  {
    name: 'Doanh nghiệp',
    price: 'Liên hệ',
    originalPrice: '',
    period: 'Tùy chỉnh',
    features: [
      'Tùy chỉnh theo yêu cầu',
      'Hỗ trợ kỹ thuật riêng',
      'Tích hợp API',
      'Tư vấn chuyển đổi số',
      'Training & onboarding',
      'SLA guarantee',
      'Dedicated support',
      'Custom development'
    ],
    notIncluded: [],
    highlight: false,
    popular: false,
    buttonText: 'Liên hệ tư vấn',
    buttonVariant: 'primary'
  },
];

const features = [
  {
    name: 'Số lượng template',
    basic: '1',
    pro: '50+',
    enterprise: 'Không giới hạn'
  },
  {
    name: 'Hỗ trợ khách hàng',
    basic: 'Email',
    pro: '24/7 Chat & Email',
    enterprise: 'Dedicated Support'
  },
  {
    name: 'Cập nhật',
    basic: 'Bảo mật',
    pro: 'Hàng tuần',
    enterprise: 'Theo yêu cầu'
  },
  {
    name: 'Tùy chỉnh',
    basic: 'Cơ bản',
    pro: 'Nâng cao',
    enterprise: 'Hoàn toàn'
  },
  {
    name: 'SEO tools',
    basic: '❌',
    pro: '✅',
    enterprise: '✅'
  },
  {
    name: 'Analytics',
    basic: '❌',
    pro: '✅',
    enterprise: '✅'
  }
];

const testimonials = [
  {
    name: 'Nguyễn Văn A',
    role: 'CEO, TechStart',
    content: 'Gói Pro của ZunaWeb đã giúp chúng tôi tiết kiệm 70% thời gian phát triển website. Template chất lượng cao và hỗ trợ tuyệt vời!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Trần Thị B',
    role: 'Designer, Creative Studio',
    content: 'Từ gói miễn phí đến Pro, trải nghiệm rất mượt mà. Template đẹp, code sạch và đội ngũ hỗ trợ rất chuyên nghiệp.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  }
];

const faqs = [
  {
    question: 'Tôi có thể nâng cấp gói dịch vụ bất cứ lúc nào không?',
    answer: 'Có, bạn có thể nâng cấp từ gói Cơ bản lên Chuyên nghiệp bất cứ lúc nào. Phí sẽ được tính theo tỷ lệ thời gian còn lại.'
  },
  {
    question: 'Gói miễn phí có giới hạn gì không?',
    answer: 'Gói miễn phí cho phép bạn sử dụng 1 template và các tính năng cơ bản. Không có giới hạn thời gian sử dụng.'
  },
  {
    question: 'Hỗ trợ kỹ thuật hoạt động như thế nào?',
    answer: 'Gói Pro cung cấp hỗ trợ 24/7 qua chat và email. Gói Doanh nghiệp có đội ngũ hỗ trợ riêng và SLA guarantee.'
  },
  {
    question: 'Tôi có thể hủy gói dịch vụ không?',
    answer: 'Bạn có thể hủy gói Pro bất cứ lúc nào. Sau khi hủy, bạn vẫn có thể sử dụng đến hết kỳ đã thanh toán.'
  }
];

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const getPrice = (plan) => {
    if (plan.name === 'Doanh nghiệp') return plan.price;
    if (plan.name === 'Cơ bản') return plan.price;
    
    // const monthlyPrice = 299000;
    const yearlyPrice = 2990000; // 10 tháng giá
    
    if (billingPeriod === 'yearly') {
      return `${(yearlyPrice / 1000000).toFixed(1)}M`;
    }
    return plan.price;
  };

  const getOriginalPrice = (plan) => {
    if (plan.name === 'Doanh nghiệp' || plan.name === 'Cơ bản') return plan.originalPrice;
    
    // const monthlyPrice = 499000;
    const yearlyPrice = 4990000;
    
    if (billingPeriod === 'yearly') {
      return `${(yearlyPrice / 1000000).toFixed(1)}M`;
    }
    return plan.originalPrice;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO 
        title="Bảng giá - ZunaWeb" 
        description="Các gói dịch vụ và bảng giá của ZunaWeb. Chọn gói phù hợp với nhu cầu của bạn."
      />
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12 mt-28">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Bảng giá dịch vụ
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Chọn gói phù hợp với nhu cầu của bạn. Hỗ trợ nâng cấp bất cứ lúc nào!
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
            Thanh toán tháng
          </span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              billingPeriod === 'yearly' ? 'bg-primary-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
            Thanh toán năm
            <span className="ml-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Tiết kiệm 17%
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.highlight 
                  ? 'ring-2 ring-primary-500 shadow-xl scale-105' 
                  : 'hover:shadow-xl transition-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Phổ biến nhất
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h2>
                <div className="mb-2">
                  <span className="text-4xl font-extrabold text-primary-600">
                    {getPrice(plan)}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  )}
                </div>
                {plan.originalPrice && (
                  <div className="text-gray-500 line-through text-lg">
                    {getOriginalPrice(plan)}/tháng
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Bao gồm:</h3>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                
                {plan.notIncluded.length > 0 && (
                  <>
                    <h3 className="font-semibold text-gray-900 mb-3 mt-6">Không bao gồm:</h3>
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <Link
                to={plan.name === 'Doanh nghiệp' ? '/contact' : '/templates'}
                className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-colors ${
                  plan.buttonVariant === 'primary'
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Features Comparison */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">So sánh tính năng</h2>
          <p className="text-gray-600">Xem chi tiết các tính năng của từng gói dịch vụ</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Tính năng</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Cơ bản</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Chuyên nghiệp</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Doanh nghiệp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{feature.name}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">{feature.basic}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">{feature.pro}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">{feature.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Khách hàng nói gì</h2>
          <p className="text-gray-600">Nhận xét từ những khách hàng đã sử dụng dịch vụ của chúng tôi</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h2>
          <p className="text-gray-600">Giải đáp những thắc mắc phổ biến về dịch vụ</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu?</h2>
          <p className="text-xl mb-8 opacity-90">
            Chọn gói phù hợp và bắt đầu xây dựng website chuyên nghiệp ngay hôm nay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/templates"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Xem templates
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 