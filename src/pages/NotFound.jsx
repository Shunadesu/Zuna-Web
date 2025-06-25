import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center gradient-bg pt-20">
    <SEO title="404 - Không tìm thấy trang" description="Trang không tồn tại hoặc đã bị di chuyển." />
    <div className="text-center max-w-md mx-auto p-8">
      <div className="text-6xl font-bold text-primary-600 mb-4">404</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Trang không tồn tại</h1>
      <p className="text-gray-600 mb-8">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="btn-primary">Về trang chủ</Link>
        <Link to="/pricing" className="btn-secondary">Xem bảng giá</Link>
      </div>
    </div>
  </div>
);

export default NotFound; 