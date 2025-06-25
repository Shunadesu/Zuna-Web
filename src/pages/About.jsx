import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const About = () => {
  const team = [
    {
      name: 'Nguyễn Văn A',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      bio: 'Chuyên gia với 10+ năm kinh nghiệm trong lĩnh vực web development'
    },
    {
      name: 'Trần Thị B',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      bio: 'Designer sáng tạo với đam mê tạo ra những giao diện đẹp mắt'
    },
    {
      name: 'Lê Văn C',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      bio: 'Full-stack developer với kiến thức sâu rộng về công nghệ web'
    },
    {
      name: 'Phạm Thị D',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      bio: 'Chuyên gia marketing digital với kinh nghiệm tăng trưởng doanh nghiệp'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Tập trung vào chất lượng',
      description: 'Chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất'
    },
    {
      icon: '🚀',
      title: 'Đổi mới liên tục',
      description: 'Luôn cập nhật công nghệ mới nhất để tạo ra giải pháp tối ưu'
    },
    {
      icon: '🤝',
      title: 'Hợp tác chặt chẽ',
      description: 'Làm việc cùng khách hàng để hiểu rõ nhu cầu và mong muốn'
    },
    {
      icon: '💡',
      title: 'Sáng tạo không giới hạn',
      description: 'Tư duy sáng tạo để tạo ra những giải pháp độc đáo'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Thành lập công ty', description: 'ZunaWeb được thành lập với mục tiêu tạo ra những website chất lượng' },
    { year: '2021', title: '100+ dự án', description: 'Hoàn thành hơn 100 dự án cho khách hàng trong và ngoài nước' },
    { year: '2022', title: 'Mở rộng team', description: 'Phát triển đội ngũ lên 20+ thành viên tài năng' },
    { year: '2023', title: '500+ khách hàng', description: 'Đạt được 500+ khách hàng hài lòng và tin tưởng' },
    { year: '2024', title: 'Nền tảng mới', description: 'Ra mắt nền tảng giao diện mẫu và blog chia sẻ kiến thức' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Về <span className="gradient-text">ZunaWeb</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Chúng tôi là đội ngũ đam mê công nghệ, tạo ra những giải pháp web hiện đại 
              và tối ưu cho doanh nghiệp trong thời đại số.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Liên hệ ngay
              </Link>
              <Link to="/templates" className="btn-secondary">
                Xem sản phẩm
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Sứ mệnh & Tầm nhìn
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sứ mệnh</h3>
                  <p className="text-gray-600">
                    Cung cấp những giải pháp web chất lượng cao, giúp doanh nghiệp 
                    tối ưu hóa hoạt động và tăng trưởng bền vững trong thời đại số.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Tầm nhìn</h3>
                  <p className="text-gray-600">
                    Trở thành đối tác tin cậy hàng đầu trong lĩnh vực thiết kế và 
                    phát triển web tại Việt Nam và khu vực Đông Nam Á.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Logo variant="geometric" size="xl" className="text-white" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những nguyên tắc và giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Đội ngũ của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những con người tài năng và đam mê tạo nên sự khác biệt
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Hành trình phát triển
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những cột mốc quan trọng trong quá trình phát triển của ZunaWeb
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                500+
              </div>
              <p className="text-gray-600 font-medium">
                Dự án hoàn thành
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                50+
              </div>
              <p className="text-gray-600 font-medium">
                Khách hàng hài lòng
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                5+
              </div>
              <p className="text-gray-600 font-medium">
                Năm kinh nghiệm
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                24/7
              </div>
              <p className="text-gray-600 font-medium">
                Hỗ trợ khách hàng
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Sẵn sàng làm việc cùng chúng tôi?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Hãy liên hệ để được tư vấn và bắt đầu dự án của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Liên hệ ngay
            </Link>
            <Link to="/templates" className="btn-secondary">
              Xem portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 