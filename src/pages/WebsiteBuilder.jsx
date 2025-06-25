import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const templates = [
  { id: 1, name: 'Hiện đại', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop', color: '#2563eb', bg: 'from-blue-50 to-blue-100', style: 'modern', font: 'font-sans', radius: 'rounded-2xl', shadow: 'shadow-xl', hover: 'hover:scale-105', transition: 'transition-all duration-300' },
  { id: 2, name: 'Tối giản', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop', color: '#22223b', bg: 'from-gray-50 to-gray-100', style: 'minimal', font: 'font-serif', radius: 'rounded-lg', shadow: 'shadow', hover: 'hover:shadow-2xl', transition: 'transition-all duration-200' },
  { id: 3, name: 'Sáng tạo', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop', color: '#f59e42', bg: 'from-yellow-50 to-orange-100', style: 'creative', font: 'font-mono', radius: 'rounded-3xl', shadow: 'shadow-2xl', hover: 'hover:rotate-1 hover:scale-105', transition: 'transition-all duration-500' },
  { id: 4, name: 'Beauty Spa', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=200&fit=crop', color: '#a78bfa', bg: 'from-pink-50 to-purple-100', style: 'spa', font: 'font-serif', radius: 'rounded-full', shadow: 'shadow-lg', hover: 'hover:scale-105', transition: 'transition-all duration-300' },
  { id: 5, name: 'Thời trang nữ', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=200&fit=crop', color: '#f472b6', bg: 'from-pink-50 to-pink-100', style: 'fashion', font: 'font-sans', radius: 'rounded-2xl', shadow: 'shadow-xl', hover: 'hover:scale-110', transition: 'transition-all duration-300' },
  { id: 6, name: 'Mẹ & Bé', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=200&fit=crop', color: '#f9a8d4', bg: 'from-pink-50 to-yellow-50', style: 'mom', font: 'font-serif', radius: 'rounded-3xl', shadow: 'shadow-lg', hover: 'hover:scale-105', transition: 'transition-all duration-300' }
];

const colors = [
  { name: 'Xanh dương', value: '#2563eb' },
  { name: 'Tím pastel', value: '#a78bfa' },
  { name: 'Hồng nhạt', value: '#f472b6' },
  { name: 'Xanh lá', value: '#22c55e' },
  { name: 'Cam', value: '#fb923c' },
  { name: 'Hồng baby', value: '#f9a8d4' },
  { name: 'Tím lavender', value: '#c4b5fd' },
  { name: 'Vàng kem', value: '#fef9c3' },
  { name: 'Nâu sữa', value: '#f5e0c3' },
  { name: 'Trắng sữa', value: '#fdf6f0' }
];

// Các block đặc trưng riêng cho từng template
const templateSpecialBlocks = [
  { id: 'modern-feature', name: 'Tính năng nổi bật (Hiện đại)', icon: '✨', template: 'modern' },
  { id: 'minimal-quote', name: 'Trích dẫn (Tối giản)', icon: '❝', template: 'minimal' },
  { id: 'creative-showcase', name: 'Showcase sáng tạo', icon: '🎨', template: 'creative' },
  { id: 'spa-promotion', name: 'Ưu đãi Spa', icon: '💆‍♀️', template: 'spa' },
  { id: 'fashion-lookbook', name: 'Lookbook thời trang', icon: '👗', template: 'fashion' },
  { id: 'mom-tips', name: 'Mẹo cho mẹ & bé', icon: '👶', template: 'mom' },
];

const LOCAL_KEY = 'zunaweb_builder_blocks';

const WebsiteBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0].id);
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [siteInfo, setSiteInfo] = useState({ name: '', slogan: '', description: '', field: '' });
  const [blockOrder, setBlockOrder] = useState(['header', 'about', 'services', 'gallery', 'testimonial', 'team', 'pricing', 'faq', 'contact', 'cta']);
  const [showPreview, setShowPreview] = useState(false);
  const [blockContents, setBlockContents] = useState({});
  const [editingBlock, setEditingBlock] = useState(null);
  const [editValue, setEditValue] = useState({});
  const navigate = useNavigate();

  // Load blockOrder from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) setBlockOrder(parsed);
      } catch {
        // Không làm gì nếu lỗi parse
      }
    }
  }, []);
  // Save blockOrder to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(blockOrder));
  }, [blockOrder]);

  const handleDragStart = (e, idx) => {
    e.dataTransfer.setData('blockIdx', idx);
  };
  const handleDrop = (e, idx) => {
    const fromIdx = +e.dataTransfer.getData('blockIdx');
    if (fromIdx === idx) return;
    const newOrder = [...blockOrder];
    const [moved] = newOrder.splice(fromIdx, 1);
    newOrder.splice(idx, 0, moved);
    setBlockOrder(newOrder);
  };
  const handleDragOver = (e) => e.preventDefault();

  const handleInput = (e) => {
    setSiteInfo({ ...siteInfo, [e.target.name]: e.target.value });
  };

  const handlePreview = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleSendRequest = () => {
    navigate('/contact');
  };

  // Thêm block
  const handleAddBlock = (blockId) => {
    if (!blockOrder.includes(blockId)) {
      setBlockOrder([...blockOrder, blockId]);
    }
  };
  // Xóa block
  const handleRemoveBlock = (blockId) => {
    setBlockOrder(blockOrder.filter((id) => id !== blockId));
  };

  // Hàm mở modal chỉnh sửa
  const handleEditBlock = (blockId) => {
    setEditingBlock(blockId);
    setEditValue(blockContents[blockId] || {});
  };
  // Hàm lưu nội dung block
  const handleSaveBlock = () => {
    setBlockContents({ ...blockContents, [editingBlock]: editValue });
    setEditingBlock(null);
  };
  // Hàm đóng modal
  const handleCloseEdit = () => setEditingBlock(null);

  // Hàm render form chỉnh sửa cho từng block
  const renderEditForm = (blockId) => {
    switch (blockId) {
      case 'header':
        return (
          <>
            <label className="block font-semibold mb-1">Tên website</label>
            <input className="w-full border rounded px-3 py-2 mb-2" value={editValue.name || ''} onChange={e => setEditValue({ ...editValue, name: e.target.value })} />
            <label className="block font-semibold mb-1">Slogan</label>
            <input className="w-full border rounded px-3 py-2" value={editValue.slogan || ''} onChange={e => setEditValue({ ...editValue, slogan: e.target.value })} />
          </>
        );
      case 'about':
        return (
          <>
            <label className="block font-semibold mb-1">Giới thiệu</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} value={editValue.text || ''} onChange={e => setEditValue({ ...editValue, text: e.target.value })} />
          </>
        );
      case 'services':
        return (
          <>
            <label className="block font-semibold mb-1">Dịch vụ nổi bật (mỗi dòng 1 dịch vụ)</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} value={editValue.list || ''} onChange={e => setEditValue({ ...editValue, list: e.target.value })} placeholder="Dịch vụ 1\nDịch vụ 2\nDịch vụ 3" />
          </>
        );
      case 'blog':
        return (
          <>
            <label className="block font-semibold mb-1">Tiêu đề blog (mỗi dòng 1 bài)</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} value={editValue.list || ''} onChange={e => setEditValue({ ...editValue, list: e.target.value })} placeholder="Blog 1\nBlog 2" />
          </>
        );
      case 'testimonial':
        return (
          <>
            <label className="block font-semibold mb-1">Nhận xét khách hàng (mỗi dòng 1 nhận xét)</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} value={editValue.list || ''} onChange={e => setEditValue({ ...editValue, list: e.target.value })} placeholder="Tên - Nhận xét" />
          </>
        );
      case 'team':
        return (
          <>
            <label className="block font-semibold mb-1">Thành viên (mỗi dòng 1 người)</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} value={editValue.list || ''} onChange={e => setEditValue({ ...editValue, list: e.target.value })} placeholder="Tên - Vai trò" />
          </>
        );
      case 'pricing':
        return (
          <>
            <label className="block font-semibold mb-1">Bảng giá (mỗi dòng 1 gói)</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} value={editValue.list || ''} onChange={e => setEditValue({ ...editValue, list: e.target.value })} placeholder="Gói 1: Giá\nGói 2: Giá" />
          </>
        );
      case 'faq':
        return (
          <>
            <label className="block font-semibold mb-1">Câu hỏi thường gặp (mỗi dòng 1 câu)</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} value={editValue.list || ''} onChange={e => setEditValue({ ...editValue, list: e.target.value })} placeholder="Câu hỏi 1\nCâu hỏi 2" />
          </>
        );
      case 'cta':
        return (
          <>
            <label className="block font-semibold mb-1">Tiêu đề kêu gọi</label>
            <input className="w-full border rounded px-3 py-2 mb-2" value={editValue.title || ''} onChange={e => setEditValue({ ...editValue, title: e.target.value })} />
            <label className="block font-semibold mb-1">Nội dung</label>
            <input className="w-full border rounded px-3 py-2" value={editValue.text || ''} onChange={e => setEditValue({ ...editValue, text: e.target.value })} />
          </>
        );
      case 'contact':
        return (
          <>
            <label className="block font-semibold mb-1">Hướng dẫn liên hệ</label>
            <input className="w-full border rounded px-3 py-2" value={editValue.text || ''} onChange={e => setEditValue({ ...editValue, text: e.target.value })} />
          </>
        );
      case 'navigation':
        return (
          <>
            <label className="block font-semibold mb-1">Tên website</label>
            <input className="w-full border rounded px-3 py-2 mb-2" value={editValue.name || ''} onChange={e => setEditValue({ ...editValue, name: e.target.value })} />
            <label className="block font-semibold mb-1">Menu (cách nhau bởi dấu phẩy)</label>
            <input className="w-full border rounded px-3 py-2" value={editValue.menu || ''} onChange={e => setEditValue({ ...editValue, menu: e.target.value })} placeholder="Giới thiệu, Dịch vụ, Hình ảnh, Liên hệ" />
          </>
        );
      case 'footer':
        return (
          <>
            <label className="block font-semibold mb-1">Bản quyền</label>
            <input className="w-full border rounded px-3 py-2 mb-2" value={editValue.copyright || ''} onChange={e => setEditValue({ ...editValue, copyright: e.target.value })} />
            <label className="block font-semibold mb-1">Credit</label>
            <input className="w-full border rounded px-3 py-2" value={editValue.credit || ''} onChange={e => setEditValue({ ...editValue, credit: e.target.value })} />
          </>
        );
      case 'social':
        return (
          <>
            <label className="block font-semibold mb-1">Liên kết mạng xã hội (mỗi dòng 1 link)</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} value={editValue.list || ''} onChange={e => setEditValue({ ...editValue, list: e.target.value })} placeholder="Facebook: https://facebook.com/...\nInstagram: https://instagram.com/...\nYouTube: https://youtube.com/..." />
          </>
        );
      case 'newsletter':
        return (
          <>
            <label className="block font-semibold mb-1">Tiêu đề đăng ký</label>
            <input className="w-full border rounded px-3 py-2 mb-2" value={editValue.title || ''} onChange={e => setEditValue({ ...editValue, title: e.target.value })} />
            <label className="block font-semibold mb-1">Mô tả</label>
            <input className="w-full border rounded px-3 py-2" value={editValue.text || ''} onChange={e => setEditValue({ ...editValue, text: e.target.value })} />
          </>
        );
      case 'map':
        return (
          <>
            <label className="block font-semibold mb-1">Địa chỉ</label>
            <input className="w-full border rounded px-3 py-2 mb-2" value={editValue.address || ''} onChange={e => setEditValue({ ...editValue, address: e.target.value })} />
            <label className="block font-semibold mb-1">Mô tả</label>
            <input className="w-full border rounded px-3 py-2" value={editValue.text || ''} onChange={e => setEditValue({ ...editValue, text: e.target.value })} />
          </>
        );
      case 'statistics':
        return (
          <>
            <label className="block font-semibold mb-1">Thống kê (mỗi dòng 1 thống kê)</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} value={editValue.list || ''} onChange={e => setEditValue({ ...editValue, list: e.target.value })} placeholder="1000+ Khách hàng\n50+ Dự án\n5+ Năm kinh nghiệm\n99% Hài lòng" />
          </>
        );
      case 'awards':
        return (
          <>
            <label className="block font-semibold mb-1">Giải thưởng (mỗi dòng 1 giải)</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} value={editValue.list || ''} onChange={e => setEditValue({ ...editValue, list: e.target.value })} placeholder="Giải thưởng 1 - 2023\nGiải thưởng 2 - 2022" />
          </>
        );
      case 'events':
        return (
          <>
            <label className="block font-semibold mb-1">Sự kiện (mỗi dòng 1 sự kiện)</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} value={editValue.list || ''} onChange={e => setEditValue({ ...editValue, list: e.target.value })} placeholder="Sự kiện 1 - Ngày/Tháng\nSự kiện 2 - Ngày/Tháng" />
          </>
        );
      case 'portfolio':
        return (
          <>
            <label className="block font-semibold mb-1">Tác phẩm (mỗi dòng 1 tác phẩm)</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} value={editValue.list || ''} onChange={e => setEditValue({ ...editValue, list: e.target.value })} placeholder="Tác phẩm 1 - Mô tả\nTác phẩm 2 - Mô tả" />
          </>
        );
      case 'reviews':
        return (
          <>
            <label className="block font-semibold mb-1">Đánh giá (mỗi dòng 1 đánh giá)</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} value={editValue.list || ''} onChange={e => setEditValue({ ...editValue, list: e.target.value })} placeholder="Tên - ⭐⭐⭐⭐⭐ - Nhận xét\nTên - ⭐⭐⭐⭐⭐ - Nhận xét" />
          </>
        );
      default:
        return <div>Chưa hỗ trợ chỉnh sửa block này.</div>;
    }
  };

  const templateObj = templates.find(t => t.id === selectedTemplate) || templates[0];
  const styleType = templateObj.style;
  const fontClass = templateObj.font;
  const radiusClass = templateObj.radius;
  const shadowClass = templateObj.shadow;
  const hoverClass = templateObj.hover;
  const transitionClass = templateObj.transition;

  // Luôn dùng gradient của template cho preview, không dùng màu chủ đạo
  const previewBgGradient = templateObj.bg ? `bg-gradient-to-br ${templateObj.bg}` : 'bg-white';
  const previewBgStyle = undefined;

  // Khai báo blocks bên trong component để dùng selectedTemplate
  const blocks = [
    { id: 'header', name: 'Header', icon: '🖼️' },
    { id: 'about', name: 'Giới thiệu', icon: 'ℹ️' },
    { id: 'services', name: 'Dịch vụ', icon: '💼' },
    { id: 'gallery', name: 'Hình ảnh', icon: '🖼️' },
    { id: 'blog', name: 'Blog', icon: '📝' },
    { id: 'video', name: 'Video', icon: '🎬' },
    { id: 'product', name: 'Sản phẩm nổi bật', icon: '🛍️' },
    { id: 'partner', name: 'Đối tác', icon: '🤝' },
    { id: 'contact', name: 'Liên hệ', icon: '☎️' },
    { id: 'testimonial', name: 'Khách hàng nói gì', icon: '💬' },
    { id: 'team', name: 'Đội ngũ', icon: '👩‍💼' },
    { id: 'pricing', name: 'Bảng giá', icon: '💰' },
    { id: 'faq', name: 'FAQ', icon: '❓' },
    { id: 'cta', name: 'Kêu gọi hành động', icon: '🚀' },
    { id: 'navigation', name: 'Thanh điều hướng', icon: '🧭' },
    { id: 'footer', name: 'Chân trang', icon: '🔻' },
    // Thêm block đặc trưng cho template hiện tại
    ...templateSpecialBlocks.filter(b => b.template === (templates.find(t => t.id === selectedTemplate)?.style)),
    { id: 'social', name: 'Mạng xã hội', icon: '📱' },
    { id: 'newsletter', name: 'Đăng ký nhận tin', icon: '📧' },
    { id: 'map', name: 'Bản đồ', icon: '🗺️' },
    { id: 'statistics', name: 'Thống kê', icon: '📊' },
    { id: 'awards', name: 'Giải thưởng', icon: '🏆' },
    { id: 'events', name: 'Sự kiện', icon: '📅' },
    { id: 'portfolio', name: 'Tác phẩm', icon: '🎨' },
    { id: 'reviews', name: 'Đánh giá', icon: '⭐' },
  ];

  // Danh sách block có thể thêm
  const availableBlocks = blocks.filter(b => !blockOrder.includes(b.id));

  // Phân loại block theo template phù hợp
  const blockTemplateMapping = {
    'modern': ['header', 'about', 'services', 'gallery', 'blog', 'video', 'team', 'pricing', 'faq', 'cta', 'contact', 'navigation', 'footer', 'modern-feature'],
    'minimal': ['header', 'about', 'services', 'gallery', 'blog', 'team', 'pricing', 'faq', 'cta', 'contact', 'navigation', 'footer', 'minimal-quote'],
    'creative': ['header', 'about', 'services', 'gallery', 'blog', 'video', 'product', 'team', 'pricing', 'faq', 'cta', 'contact', 'navigation', 'footer', 'creative-showcase'],
    'spa': ['header', 'about', 'services', 'gallery', 'blog', 'testimonial', 'team', 'pricing', 'faq', 'cta', 'contact', 'navigation', 'footer', 'spa-promotion'],
    'fashion': ['header', 'about', 'services', 'gallery', 'blog', 'video', 'product', 'testimonial', 'team', 'pricing', 'faq', 'cta', 'contact', 'navigation', 'footer', 'fashion-lookbook'],
    'mom': ['header', 'about', 'services', 'gallery', 'blog', 'product', 'testimonial', 'team', 'pricing', 'faq', 'cta', 'contact', 'navigation', 'footer', 'mom-tips']
  };

  const handleRandom = () => {
    // Implement the logic to randomly select a block from availableBlocks
    // For now, we'll just select the first block in the availableBlocks array
    if (availableBlocks.length > 0) {
      handleAddBlock(availableBlocks[0].id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
      <SEO title="Thiết kế Website tự động - ZunaWeb" description="Tự tạo website đơn giản, chọn mẫu, màu sắc, kéo thả block và xem preview trực tiếp." />
      <div className="max-w-4xl mx-auto px-4 mb-12 text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Thiết kế Website tự động</h1>
        <p className="text-xl text-gray-600 mb-8">Chọn mẫu, màu sắc nữ tính, nhập thông tin và sắp xếp các phần – xem preview trực tiếp website của bạn!</p>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        {/* Form */}
        <form onSubmit={handlePreview} className="space-y-8">
          {/* Chọn template */}
          <div>
            <label className="block font-semibold mb-2 text-gray-900">Chọn mẫu giao diện</label>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Gợi ý: {templateObj.name} phù hợp với {blockTemplateMapping[templateObj.style]?.length || 0} thành phần</span>
              <button
                type="button"
                onClick={handleRandom}
                className="px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all text-sm font-medium"
              >
                🎲 Random
              </button>
            </div>
            <div className="flex gap-4 flex-wrap">
              {templates.map((tpl) => (
                <button
                  type="button"
                  key={tpl.id}
                  className={`rounded-xl border-2 p-1 transition-all ${selectedTemplate === tpl.id ? 'border-pink-500 ring-2 ring-pink-200' : 'border-gray-200'}`}
                  onClick={() => setSelectedTemplate(tpl.id)}
                >
                  <img src={tpl.image} alt={tpl.name} className="w-28 h-14 object-cover rounded-lg" />
                  <div className="text-sm mt-1 font-medium text-gray-700">{tpl.name}</div>
                </button>
              ))}
            </div>
          </div>
          {/* Chọn màu */}
          <div>
            <label className="block font-semibold mb-2 text-gray-900">Chọn màu chủ đạo</label>
            <div className="flex gap-3 flex-wrap">
              {colors.map((color) => (
                <button
                  type="button"
                  key={color.value}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.value ? 'border-pink-500 ring-2 ring-pink-200' : 'border-gray-200'}`}
                  style={{ background: color.value }}
                  onClick={() => setSelectedColor(color.value)}
                  title={color.name}
                />
              ))}
            </div>
          </div>
          {/* Nhập thông tin */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1 text-gray-900">Tên website</label>
              <input name="name" value={siteInfo.name} onChange={handleInput} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="VD: ZunaWeb" />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-900">Slogan</label>
              <input name="slogan" value={siteInfo.slogan} onChange={handleInput} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="VD: Website cho mọi người" />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1 text-gray-900">Mô tả</label>
              <textarea name="description" value={siteInfo.description} onChange={handleInput} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Giới thiệu ngắn về website..." />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1 text-gray-900">Lĩnh vực</label>
              <input name="field" value={siteInfo.field} onChange={handleInput} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="VD: Thiết kế web, Spa, Thời trang nữ..." />
            </div>
          </div>
          {/* Kéo thả block */}
          <div>
            <label className="block font-semibold mb-2 text-gray-900">Sắp xếp các phần (kéo thả)</label>
            <ul className="space-y-2 mb-2">
              {blockOrder.map((blockId, idx) => {
                const block = blocks.find((b) => b.id === blockId);
                return (
                  <li
                    key={blockId}
                    className="flex items-center gap-3 bg-pink-50 rounded-lg px-4 py-2 cursor-move border border-pink-200"
                    draggable
                    onDragStart={(e) => handleDragStart(e, idx)}
                    onDrop={(e) => handleDrop(e, idx)}
                    onDragOver={handleDragOver}
                  >
                    <span className="text-xl">{block.icon}</span>
                    <span className="font-medium text-gray-800 flex-1">{block.name}</span>
                    <button type="button" className="text-pink-500 hover:text-pink-700 text-lg ml-2" onClick={() => handleRemoveBlock(blockId)} title="Xóa"><span aria-hidden>×</span></button>
                  </li>
                );
              })}
            </ul>
            {/* Thêm block mới - phân loại theo template */}
            {availableBlocks.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2 text-gray-700">Thêm thành phần:</h4>
                <div className="space-y-3">
                  {/* Block phù hợp với template hiện tại */}
                  {(() => {
                    const suitableBlocks = availableBlocks.filter(block => 
                      blockTemplateMapping[templateObj.style]?.includes(block.id)
                    );
                    if (suitableBlocks.length > 0) {
                      return (
                        <div>
                          <div className="text-sm font-medium text-green-600 mb-1">✨ Phù hợp với {templateObj.name}:</div>
                          <div className="flex flex-wrap gap-2">
                            {suitableBlocks.map((block) => (
                              <button
                                key={block.id}
                                type="button"
                                className="px-3 py-1 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 text-sm font-medium border border-green-200"
                                onClick={() => handleAddBlock(block.id)}
                              >
                                {block.icon} {block.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })()}
                  
                  {/* Block khác */}
                  {(() => {
                    const otherBlocks = availableBlocks.filter(block => 
                      !blockTemplateMapping[templateObj.style]?.includes(block.id)
                    );
                    if (otherBlocks.length > 0) {
                      return (
                        <div>
                          <div className="text-sm font-medium text-gray-600 mb-1">📋 Thành phần khác:</div>
                          <div className="flex flex-wrap gap-2">
                            {otherBlocks.map((block) => (
                              <button
                                key={block.id}
                                type="button"
                                className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium border border-gray-200"
                                onClick={() => handleAddBlock(block.id)}
                              >
                                {block.icon} {block.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })()}
                </div>
              </div>
            )}
          </div>
          <button type="submit" className="btn-primary w-full py-3 text-lg bg-pink-500 hover:bg-pink-600 border-0">Xem preview website</button>
        </form>
        {/* Preview trực tiếp */}
        <div className={`rounded-2xl shadow-lg p-6 min-h-[500px] flex flex-col ${previewBgGradient}`} style={previewBgStyle}>
          <div className="mb-4 flex items-center gap-2">
            <span className="text-pink-600 font-bold">Preview Website</span>
          </div>
          <div className={`flex-1 border border-dashed rounded-xl p-4 overflow-auto ${previewBgGradient}`} style={previewBgStyle}>
            {blockOrder.map((blockId) => (
              <div key={blockId} className="mb-6 last:mb-0" onDoubleClick={() => handleEditBlock(blockId)} style={{ cursor: 'pointer' }}>
                {renderBlock(
                  blockId,
                  blockContents[blockId],
                  { styleType, fontClass, radiusClass, shadowClass, hoverClass, transitionClass, templateObj, siteInfo, selectedColor }
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA section */}
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Bạn hài lòng với bản demo?</h2>
        <p className="text-gray-600 mb-6">Gửi yêu cầu để đội ngũ ZunaWeb tư vấn và triển khai website thực tế cho bạn!</p>
        <button className="btn-primary px-8 py-3 text-lg bg-pink-500 hover:bg-pink-600 border-0" onClick={handleSendRequest}>Gửi yêu cầu tư vấn</button>
      </div>
      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className={`rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative animate-fadeIn ${previewBgGradient}`} style={previewBgStyle}>
            <button className="absolute top-3 right-3 text-gray-400 hover:text-pink-600 text-2xl font-bold" onClick={() => setShowPreview(false)}>&times;</button>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-pink-600 font-bold">Preview Website</span>
            </div>
            <div className={`border border-dashed rounded-xl p-4 overflow-auto max-h-[70vh] ${previewBgGradient}`} style={previewBgStyle}>
              {blockOrder.map((blockId) => (
                <div key={blockId} className="mb-6 last:mb-0" onDoubleClick={() => handleEditBlock(blockId)} style={{ cursor: 'pointer' }}>
                  {renderBlock(
                    blockId,
                    blockContents[blockId],
                    { styleType, fontClass, radiusClass, shadowClass, hoverClass, transitionClass, templateObj, siteInfo, selectedColor }
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button className="btn-primary px-8 py-3 text-lg bg-pink-500 hover:bg-pink-600 border-0" onClick={handleSendRequest}>
                Gửi yêu cầu tư vấn
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Modal chỉnh sửa block */}
      {editingBlock && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fadeIn">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-pink-600 text-2xl font-bold" onClick={handleCloseEdit}>&times;</button>
            <h2 className="text-xl font-bold mb-4">Chỉnh sửa nội dung</h2>
            {renderEditForm(editingBlock)}
            <div className="mt-6 text-right">
              <button className="btn-primary px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded" onClick={handleSaveBlock}>Lưu</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const renderBlock = (blockId, content = {}, styleVars = {}) => {
  const { styleType, fontClass, radiusClass, shadowClass, hoverClass, transitionClass, templateObj, siteInfo, selectedColor } = styleVars;
  // Sử dụng selectedColor nếu có, nếu không thì dùng màu của template
  const mainColor = selectedColor || templateObj.color;
  switch (blockId) {
    case 'header':
      return (
        <div className={`py-8 text-center ${radiusClass} mb-2 ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} ${styleType === 'minimal' ? 'bg-white border' : ''}`}
          style={{ background: styleType === 'minimal' ? '#fff' : mainColor, color: styleType === 'minimal' ? '#22223b' : '#fff' }}>
          <h1 className={`text-4xl font-bold mb-2 ${styleType === 'creative' ? 'italic' : ''} ${fontClass}`}>{content.name || siteInfo.name || 'Tên website'}</h1>
          <p className={`text-xl mb-2 ${fontClass}`}>{content.slogan || siteInfo.slogan || 'Slogan của bạn'}</p>
        </div>
      );
    case 'about':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 ${fontClass}`}>Giới thiệu</h2>
          <p className={`text-gray-700 ${fontClass}`}>{content.text || siteInfo.description || 'Mô tả ngắn về website, dịch vụ hoặc sản phẩm của bạn.'}</p>
        </div>
      );
    case 'services':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-gray-50`}>
          <h2 className={`text-2xl font-bold mb-4 ${fontClass}`}>Dịch vụ nổi bật</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(content.list || 'Dịch vụ 1\nDịch vụ 2\nDịch vụ 3').split('\n').map((service, index) => (
              <li key={index} className="bg-white rounded-lg shadow p-4">{service || `Dịch vụ ${index + 1}`}</li>
            ))}
          </ul>
        </div>
      );
    case 'gallery':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 ${fontClass}`}>Hình ảnh nổi bật</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-pink-100 rounded-lg h-24 flex items-center justify-center">Hình 1</div>
            <div className="bg-purple-100 rounded-lg h-24 flex items-center justify-center">Hình 2</div>
            <div className="bg-yellow-100 rounded-lg h-24 flex items-center justify-center">Hình 3</div>
            <div className="bg-fuchsia-100 rounded-lg h-24 flex items-center justify-center">Hình 4</div>
          </div>
        </div>
      );
    case 'blog':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 ${fontClass}`}>Blog mới nhất</h2>
          <ul className="space-y-2">
            {(content.list || '5 xu hướng thiết kế web 2024\nCách chọn màu sắc cho website nữ tính\nTối ưu SEO cho website spa/thời trang').split('\n').map((blog, index) => (
              <li key={index} className={`border-l-4 pl-4 ${index === 0 ? 'border-pink-400' : index === 1 ? 'border-blue-400' : 'border-purple-400'}`}>
                {blog || `Blog ${index + 1}`}
              </li>
            ))}
          </ul>
        </div>
      );
    case 'video':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 ${fontClass}`}>Video nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">Video 1</div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">Video 2</div>
          </div>
        </div>
      );
    case 'product':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 ${fontClass}`}>Sản phẩm nổi bật</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-pink-100 rounded-lg h-24 flex items-center justify-center">Sản phẩm 1</div>
            <div className="bg-purple-100 rounded-lg h-24 flex items-center justify-center">Sản phẩm 2</div>
            <div className="bg-yellow-100 rounded-lg h-24 flex items-center justify-center">Sản phẩm 3</div>
            <div className="bg-fuchsia-100 rounded-lg h-24 flex items-center justify-center">Sản phẩm 4</div>
          </div>
        </div>
      );
    case 'partner':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 ${fontClass}`}>Đối tác</h2>
          <div className="flex gap-6 justify-center flex-wrap">
            <div className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center">Logo 1</div>
            <div className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center">Logo 2</div>
            <div className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center">Logo 3</div>
            <div className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center">Logo 4</div>
          </div>
        </div>
      );
    case 'testimonial':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-fuchsia-50`}>
          <h2 className={`text-2xl font-bold mb-4 text-pink-500 ${fontClass}`}>Khách hàng nói gì</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(content.list || 'Ngọc Mai - "Dịch vụ tuyệt vời, giao diện nữ tính, rất hài lòng!"\nThu Hằng - "Website spa của tôi được khen rất nhiều nhờ ZunaWeb!"').split('\n').map((testimonial, index) => {
              const [name, quote] = testimonial.split(' - ');
              return (
                <div key={index} className="bg-white rounded-lg shadow p-4">
                  <div className="font-semibold text-pink-600 mb-1">{name || `Khách hàng ${index + 1}`}</div>
                  <div className="text-gray-700 italic">{quote || 'Nhận xét của khách hàng'}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    case 'team':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 text-purple-600 ${fontClass}`}>Đội ngũ của chúng tôi</h2>
          <div className="flex gap-6 justify-center flex-wrap">
            {(content.list || 'Linh - Designer\nHà - Web Dev\nTrang - Support').split('\n').map((member, index) => {
              const [name, role] = member.split(' - ');
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full mb-2 ${index === 0 ? 'bg-pink-200' : index === 1 ? 'bg-purple-200' : 'bg-yellow-200'}`}></div>
                  <div className="font-medium text-gray-800">{name || `Thành viên ${index + 1}`}</div>
                  <div className="text-xs text-gray-500">{role || 'Vai trò'}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    case 'pricing':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-pink-50`}>
          <h2 className={`text-2xl font-bold mb-4 text-pink-600 ${fontClass}`}>Bảng giá dịch vụ</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(content.list || 'Gói Cơ bản: 990.000đ\nGói Nâng cao: 1.990.000đ\nGói Doanh nghiệp: Liên hệ').split('\n').map((price, index) => (
              <li key={index} className="bg-white rounded-lg shadow p-4">{price || `Gói ${index + 1}`}</li>
            ))}
          </ul>
        </div>
      );
    case 'faq':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 text-fuchsia-600 ${fontClass}`}>Câu hỏi thường gặp</h2>
          <ul className="space-y-2">
            {(content.list || 'Tôi có thể chỉnh sửa website sau khi tạo không?\nCó hỗ trợ giao diện cho spa/thời trang nữ không?\nLàm sao để nhận tư vấn miễn phí?').split('\n').map((faq, index) => (
              <li key={index} className="bg-white rounded-lg shadow p-4">{faq || `Câu hỏi ${index + 1}`}</li>
            ))}
          </ul>
        </div>
      );
    case 'cta':
      return (
        <div className={`py-8 px-4 text-center ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-2 text-pink-600 ${fontClass}`}>{content.title || 'Sẵn sàng sở hữu website?'}</h2>
          <p className={`mb-4 ${fontClass}`}>{content.text || 'Gửi yêu cầu để đội ngũ ZunaWeb tư vấn và triển khai website thực tế cho bạn!'}</p>
          <button className="btn-primary px-8 py-3 text-lg" onClick={() => {}}>Gửi yêu cầu tư vấn</button>
        </div>
      );
    case 'contact':
      return (
        <div className={`py-8 px-4 text-center ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-2 text-primary-600 ${fontClass}`}>Liên hệ</h2>
          <p className={`mb-2 ${fontClass}`}>{content.text || 'Điền thông tin liên hệ của bạn tại đây.'}</p>
          <button className="btn-primary" onClick={() => {}}>Gửi yêu cầu</button>
        </div>
      );
    case 'navigation':
      return (
        <nav className={`py-4 px-6 mb-4 flex justify-between items-center ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <span className="font-bold text-lg">{content.name || siteInfo.name || 'Tên website'}</span>
          <ul className="flex gap-6 text-sm font-medium">
            {(content.menu || 'Giới thiệu, Dịch vụ, Hình ảnh, Liên hệ').split(',').map((item, index) => (
              <li key={index}><a href={`#${item.trim().toLowerCase()}`} className="hover:text-pink-500">{item.trim()}</a></li>
            ))}
          </ul>
        </nav>
      );
    case 'footer':
      return (
        <footer className={`py-6 px-4 mt-8 text-center text-gray-600 text-sm ${radiusClass} ${shadowClass} ${transitionClass} ${fontClass} bg-white`}>
          <div>{content.copyright || `© ${new Date().getFullYear()} ${siteInfo.name || 'ZunaWeb'}. All rights reserved.`}</div>
          <div className="mt-2">{content.credit || 'Thiết kế bởi ZunaWeb'}</div>
        </footer>
      );
    case 'modern-feature':
      if (styleType !== 'modern') return null;
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-blue-50`}>
          <h2 className="text-2xl font-bold mb-4">Tính năng nổi bật</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="bg-white rounded-lg shadow p-4">Tốc độ tải nhanh</li>
            <li className="bg-white rounded-lg shadow p-4">Thiết kế responsive</li>
            <li className="bg-white rounded-lg shadow p-4">Bảo mật cao</li>
          </ul>
        </div>
      );
    case 'minimal-quote':
      if (styleType !== 'minimal') return null;
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-gray-50 text-center italic`}>
          <blockquote className="text-xl">"Sự tối giản là đỉnh cao của tinh tế."</blockquote>
        </div>
      );
    case 'creative-showcase':
      if (styleType !== 'creative') return null;
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-yellow-50`}>
          <h2 className="text-2xl font-bold mb-4">Showcase sáng tạo</h2>
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="w-32 h-32 bg-orange-200 rounded-lg flex items-center justify-center">Ý tưởng 1</div>
            <div className="w-32 h-32 bg-pink-200 rounded-lg flex items-center justify-center">Ý tưởng 2</div>
            <div className="w-32 h-32 bg-purple-200 rounded-lg flex items-center justify-center">Ý tưởng 3</div>
          </div>
        </div>
      );
    case 'spa-promotion':
      if (styleType !== 'spa') return null;
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-pink-50 text-center`}>
          <h2 className="text-2xl font-bold mb-4">Ưu đãi đặc biệt cho Spa</h2>
          <div className="text-lg">Giảm giá 30% cho khách hàng mới trong tháng này!</div>
        </div>
      );
    case 'fashion-lookbook':
      if (styleType !== 'fashion') return null;
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-pink-100`}>
          <h2 className="text-2xl font-bold mb-4">Lookbook thời trang</h2>
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="w-24 h-32 bg-white rounded-lg shadow flex items-center justify-center">Outfit 1</div>
            <div className="w-24 h-32 bg-white rounded-lg shadow flex items-center justify-center">Outfit 2</div>
            <div className="w-24 h-32 bg-white rounded-lg shadow flex items-center justify-center">Outfit 3</div>
          </div>
        </div>
      );
    case 'mom-tips':
      if (styleType !== 'mom') return null;
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-yellow-50`}>
          <h2 className="text-2xl font-bold mb-4">Mẹo cho mẹ & bé</h2>
          <ul className="list-disc pl-6 text-left">
            <li>Chăm sóc da cho bé an toàn</li>
            <li>Thực đơn dinh dưỡng cho mẹ</li>
            <li>Gợi ý đồ dùng cần thiết</li>
          </ul>
        </div>
      );
    case 'social':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 text-pink-600 ${fontClass}`}>Mạng xã hội</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(content.list || 'Facebook: https://facebook.com/...\nInstagram: https://instagram.com/...\nYouTube: https://youtube.com/...').split('\n').map((link, index) => (
              <div key={index} className="bg-pink-100 rounded-lg shadow p-4">
                <div className="font-semibold text-pink-600 mb-1">{link || `Liên kết ${index + 1}`}</div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'newsletter':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 text-pink-600 ${fontClass}`}>Đăng ký nhận tin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Tiêu đề</label>
              <input className="w-full border rounded px-3 py-2" value={content.title || ''} />
            </div>
            <div>
              <label className="block font-semibold mb-1">Mô tả</label>
              <input className="w-full border rounded px-3 py-2" value={content.text || ''} />
            </div>
          </div>
        </div>
      );
    case 'map':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 text-pink-600 ${fontClass}`}>Bản đồ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Địa chỉ</label>
              <input className="w-full border rounded px-3 py-2" value={content.address || ''} />
            </div>
            <div>
              <label className="block font-semibold mb-1">Mô tả</label>
              <input className="w-full border rounded px-3 py-2" value={content.text || ''} />
            </div>
          </div>
        </div>
      );
    case 'statistics':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 text-pink-600 ${fontClass}`}>Thống kê</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(content.list || '1000+ Khách hàng\n50+ Dự án\n5+ Năm kinh nghiệm\n99% Hài lòng').split('\n').map((stat, index) => (
              <div key={index} className="bg-pink-100 rounded-lg shadow p-4">
                <div className="font-semibold text-pink-600 mb-1">{stat || `Thống kê ${index + 1}`}</div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'awards':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-pink-50`}>
          <h2 className={`text-2xl font-bold mb-4 text-pink-600 ${fontClass}`}>Giải thưởng</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(content.list || 'Giải thưởng 1 - 2023\nGiải thưởng 2 - 2022').split('\n').map((award, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <div className="font-semibold text-pink-600 mb-1">{award || `Giải thưởng ${index + 1}`}</div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'events':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 text-pink-600 ${fontClass}`}>Sự kiện</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(content.list || 'Sự kiện 1 - Ngày/Tháng\nSự kiện 2 - Ngày/Tháng').split('\n').map((event, index) => (
              <div key={index} className="bg-pink-100 rounded-lg shadow p-4">
                <div className="font-semibold text-pink-600 mb-1">{event || `Sự kiện ${index + 1}`}</div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'portfolio':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-white`}>
          <h2 className={`text-2xl font-bold mb-4 text-pink-600 ${fontClass}`}>Tác phẩm</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(content.list || 'Tác phẩm 1 - Mô tả\nTác phẩm 2 - Mô tả').split('\n').map((item, index) => (
              <div key={index} className="bg-pink-100 rounded-lg shadow p-4">
                <div className="font-semibold text-pink-600 mb-1">{item || `Tác phẩm ${index + 1}`}</div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'reviews':
      return (
        <div className={`py-8 px-4 ${radiusClass} ${shadowClass} ${transitionClass} ${hoverClass} ${fontClass} bg-pink-50`}>
          <h2 className={`text-2xl font-bold mb-4 text-pink-600 ${fontClass}`}>Đánh giá</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(content.list || 'Tên - ⭐⭐⭐⭐⭐ - Nhận xét\nTên - ⭐⭐⭐⭐⭐ - Nhận xét').split('\n').map((review, index) => {
              const [name, , comment] = review.split(' - ');
              return (
                <div key={index} className="bg-white rounded-lg shadow p-4">
                  <div className="font-semibold text-pink-600 mb-1">{name || `Khách hàng ${index + 1}`}</div>
                  <div className="text-gray-700 italic">{comment || 'Nhận xét của khách hàng'}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    default:
      return <div>Chưa hỗ trợ render block này.</div>;
  }
};

export default WebsiteBuilder; 