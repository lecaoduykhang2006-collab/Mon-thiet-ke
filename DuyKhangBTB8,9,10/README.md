# NEXTECH.IO - WEBSITE SẢN PHẨM & TIN TỨC CÔNG NGHỆ ĐỘT PHÁ 2026

> **ĐỒ ÁN KIỂM TRA GIỮA KỲ - HỌC PHẦN: THIẾT KẾ WEB**  
> **Khoa Công nghệ Thông tin - Trường Đại học Lạc Hồng (LHU)**

---

## 👨‍💻 THÔNG TIN SINH VIÊN
- **Họ và tên:** Lê Cao Duy Khang
- **Mã số sinh viên (MSSV):** 125000847
- **Tài khoản GitHub:** [lecaoduykhang2006-collab](https://github.com/lecaoduykhang2006-collab)
- **Tên Repository:** `Khang_LeCaoDuy_125000847`
- **🌐 Trải nghiệm trực tiếp (Live Preview):** [https://lecaoduykhang2006-collab.github.io/Khang_LeCaoDuy_125000847/](https://lecaoduykhang2006-collab.github.io/Khang_LeCaoDuy_125000847/)

---

## 📌 GIỚI THIỆU ĐỀ TÀI
**NexTech.io** là website Landing Page hiện đại giới thiệu hệ sinh thái thiết bị phần cứng tích hợp trí tuệ nhân tạo (AI Hardware) thế hệ mới và cổng thông tin tin tức công nghệ vi mạch, bán dẫn, điện toán không gian (Spatial Computing).

Giao diện được thiết kế theo phong cách **Dark Modern / Cyberpunk**, kết hợp các hiệu ứng phát quang (Neon Glow), Glassmorphism bán trong suốt và chuyển động mượt mà khi tương tác và cuộn trang.

---

## 🛠️ CÔNG NGHỆ & KỸ THUẬT SỬ DỤNG

1. **Chuẩn ngữ nghĩa Semantic HTML5:**
   - `<header>`: Logo thương hiệu vi mạch và thanh điều hướng chính.
   - `<nav>`: Danh sách các liên kết điều hướng nội bộ mượt mà (`#hero`, `#products`, `#features`, `#news`, `#newsletter`).
   - `<main>`: Khối bao bọc toàn bộ nội dung chính của website.
   - `<section>` & `<article>`: Phân tách cấu trúc rõ ràng cho từng sản phẩm thiết bị và bài viết tin tức.
   - `<footer>`: Chân trang chứa thẻ `<address>`, thông tin sinh viên, ĐH Lạc Hồng và bản quyền.
   - *Cam kết:* Tuyệt đối không lạm dụng thẻ `<div>` vô nghĩa. Sử dụng đúng ngữ nghĩa các thẻ `<figure>`, `<time>`, `<address>`.

2. **Kỹ thuật CSS3 Hiện đại:**
   - **CSS Variables trong `:root`:** Quản lý tập trung toàn bộ bảng màu Dark Tech (`--color-primary: #00f2fe`, `--color-secondary: #7928ca`), hệ thống font chữ (`Outfit`, `Inter`) và khoảng cách Spacing nhất quán.
   - **Layout Flexbox & CSS Grid:** Bố cục dạng lưới tự co giãn thích ứng (`repeat(auto-fit, minmax(270px, 1fr))`) cho danh sách sản phẩm và tin tức.
   - **Hiệu ứng `:hover` & `:focus`:** Tự viết chuyển động `transition`, `transform: translateY(-8px)` và viền neon phát sáng nổi bật cho nút bấm (CTA) và thẻ cards.
   - **Responsive Design:** Tối ưu hiển thị hoàn hảo trên Mobile (tích hợp Hamburger menu), Tablet và Desktop.

3. **Thư viện Hiệu ứng & Tương tác:**
   - **Animate.css v4.1.1 (CDN):** Hiệu ứng xuất hiện sống động cho tiêu đề Hero Banner (`fadeInDown`, `fadeInLeft`, `zoomIn`).
   - **AOS - Animate On Scroll v2.3.4 (CDN):** Hiệu ứng cuộn trang mượt mà cho các phần tử sản phẩm và tin tức khi người dùng cuộn chuột.
   - **Font Awesome 6.5.1 (CDN):** Hệ thống icon công nghệ sắc nét.

---

## 📂 CẤU TRÚC THƯ MỤC DỰ ÁN
```text
Khang_LeCaoDuy_125000847/
├── index.html          # Khung HTML5 chuẩn Semantic: Tuần 8 (Greeting), Tuần 9 (Mock Data), Buổi 10 (Light Switch & Live Input)
├── light-switch.html   # File bài tập độc lập: Hoạt động 2 - Bật/Tắt bóng đèn & Dark/Light Mode (45 phút)
├── live-input.html     # File bài tập độc lập: Hoạt động 3 - Phản hồi tức thì với sự kiện 'input' (30 phút)
├── script.js           # Xử lý Logic JavaScript: Real-time Greeting, Product Mock Data, Light Switch & Live Input DOM
├── style.css           # Toàn bộ CSS Variables (:root), Reset, Flexbox/Grid, Dark/Light Mode & Responsive
├── PROMPT_LOG.md       # Nhật ký Prompt Engineering (Vibe Coding Log - 3.0 điểm)
├── README.md           # Tài liệu hướng dẫn & thông tin đồ án
└── assets/             # Thư mục tài nguyên hình ảnh vector chuẩn
    ├── bulb-off.svg    # Hình ảnh bóng đèn khi tắt
    └── bulb-on.svg     # Hình ảnh bóng đèn khi bật phát sáng
```

---

## 🚀 HƯỚNG DẪN CÀI ĐẶT & CHẠY THỬ NGHIỆM

### Cách 1: Xem trực tiếp trên GitHub Pages (Khuyên dùng)
Truy cập đường link: **[https://lecaoduykhang2006-collab.github.io/Khang_LeCaoDuy_125000847/](https://lecaoduykhang2006-collab.github.io/Khang_LeCaoDuy_125000847/)**

### Cách 2: Chạy trực tiếp trên máy tính cá nhân
1. Tải mã nguồn về máy hoặc dùng lệnh:
   ```bash
   git clone https://github.com/lecaoduykhang2006-collab/Khang_LeCaoDuy_125000847.git
   ```
2. Mở thư mục dự án và nhấp đúp trực tiếp vào file `index.html` để mở trên bất kỳ trình duyệt nào (Chrome, Edge, Firefox).
3. Hoặc mở bằng VS Code và sử dụng tiện ích **Live Server**.

---

## 📝 NHẬT KÝ VIBE CODING
Chi tiết toàn bộ quá trình tương tác, các bước chỉ đạo AI, tinh chỉnh sửa lỗi Semantic HTML và tích hợp thư viện AOS được trình bày đầy đủ tại file [PROMPT_LOG.md](PROMPT_LOG.md).
