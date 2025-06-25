# ZunaWeb.com

Nền tảng thiết kế và phát triển web hiện đại với giao diện đẹp mắt, tối ưu SEO và trải nghiệm người dùng tuyệt vời.

## 🚀 Tính năng

- **Logo đa dạng**: 5 biến thể logo khác nhau (default, modern, minimal, animated, geometric)
- **Chuyên mục phong phú**: 12 chuyên mục với nhiều chủ đề đa dạng
- **Blog chia sẻ**: Trang blog với bài viết và filter theo chuyên mục
- **Kho giao diện**: Gallery giao diện mẫu với filter theo màu sắc và loại
- **Tối ưu SEO**: Meta tags, Open Graph, Twitter Cards, canonical URLs
- **Responsive**: Tương thích hoàn hảo trên mọi thiết bị
- **Màu sắc chủ đạo**: Xanh, hồng, tím nhạt theo yêu cầu

## 🛠️ Công nghệ sử dụng

- **React 19** - Framework JavaScript hiện đại
- **Vite** - Build tool nhanh và hiệu quả
- **TailwindCSS** - Framework CSS utility-first
- **React Router DOM** - Routing cho SPA
- **Google Fonts** - Typography (Inter, Poppins)

## 📁 Cấu trúc dự án

```
src/
├── components/
│   ├── Logo.jsx          # Component logo với 5 biến thể
│   ├── Navigation.jsx    # Navigation responsive
│   ├── Footer.jsx        # Footer với links và thông tin
│   └── SEO.jsx           # Component quản lý SEO
├── pages/
│   ├── Home.jsx          # Trang chủ với hero section
│   ├── Categories.jsx    # Trang chuyên mục
│   ├── Blog.jsx          # Trang blog với filter
│   ├── Templates.jsx     # Gallery giao diện mẫu
│   └── About.jsx         # Trang giới thiệu
├── App.jsx               # Component chính với routing
├── main.jsx              # Entry point
└── index.css             # TailwindCSS và custom styles
```

## 🎨 Màu sắc chủ đạo

- **Primary (Xanh)**: `#0ea5e9` - `#0369a1`
- **Pink (Hồng)**: `#ec4899` - `#be185d`
- **Purple (Tím)**: `#a855f7` - `#7c3aed`
- **Gradient**: Xanh → Hồng → Tím

## 🚀 Cài đặt và chạy

1. **Clone dự án**

   ```bash
   git clone <repository-url>
   cd zunaweb
   ```

2. **Cài đặt dependencies**

   ```bash
   npm install
   ```

3. **Chạy development server**

   ```bash
   npm run dev
   ```

4. **Build production**
   ```bash
   npm run build
   ```

## 📱 Các trang chính

### 🏠 Trang chủ

- Hero section với call-to-action
- Features section giới thiệu tính năng
- Categories showcase
- Statistics section
- CTA section

### 📂 Chuyên mục

- 12 chuyên mục đa dạng
- Filter theo loại
- Search functionality
- Responsive grid layout

### 📝 Blog

- Danh sách bài viết
- Filter theo chuyên mục
- Search functionality
- Featured post section
- Grid/List view

### 🎨 Giao diện mẫu

- Gallery giao diện mẫu
- Filter theo chuyên mục và màu sắc
- Grid/List view toggle
- Template details

### ℹ️ Giới thiệu

- Thông tin công ty
- Sứ mệnh & tầm nhìn
- Đội ngũ
- Timeline phát triển
- Statistics

## 🔧 Tùy chỉnh

### Logo

```jsx
// Sử dụng các biến thể logo
<Logo variant="modern" size="lg" />
<Logo variant="minimal" size="md" />
<Logo variant="animated" size="xl" />
```

### Màu sắc

Các màu được định nghĩa trong `tailwind.config.js`:

- `primary-*`: Xanh dương
- `pink-*`: Hồng
- `purple-*`: Tím
- `accent-*`: Màu accent

### SEO

Sử dụng component SEO trong mỗi trang:

```jsx
<SEO title="Tiêu đề trang" description="Mô tả trang" keywords="từ khóa" />
```

## 📊 SEO Features

- ✅ Meta tags động
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Structured data
- ✅ Sitemap ready
- ✅ Robots.txt ready

## 🎯 Performance

- ✅ Lazy loading images
- ✅ Optimized fonts
- ✅ Minified CSS/JS
- ✅ Responsive images
- ✅ Fast loading

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo issue hoặc pull request.

---

**ZunaWeb.com** - Nền tảng thiết kế và phát triển web hiện đại 🚀
