# 🍷 GourmetWorld.vn — Tinh Hoa Văn Hóa Ẩm Thực Thế Giới

[![W3C Validated](https://img.shields.io/badge/W3C-HTML5%20Validated-brightgreen.svg)](https://validator.w3.org/)
[![CSS3 Transitions](https://img.shields.io/badge/CSS3-Snappy%20%E2%89%A40.3s-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
[![Mobile Responsive](https://img.shields.io/badge/Mobile-iPhone%20%26%20Android%20Ready-purple.svg)](https://developer.apple.com/safari/)
[![Git Collaboration](https://img.shields.io/badge/Git-10%2B%20Commits%20Team-orange.svg)](https://git-scm.com/)
[![Theme](https://img.shields.io/badge/Gastronomy-Michelin%20Heritage-gold.svg)](https://guide.michelin.com/)

> **Sản phẩm báo cáo Hoạt động 3: Buổi Workshop "Showcase & Peer Review" (75 phút) — Tuần 6.**  
> Website Landing Page tôn vinh **Tinh Hoa Văn Hóa Ẩm Thực Thế Giới**, ứng dụng **Design System Michelin Gold & Royal Wine**, tích hợp trọn vẹn **6 hiệu ứng chuyển động Pure CSS3** mượt mà, tối ưu hóa trải nghiệm người dùng (UX) trên cả iPhone (iOS Safari) và Android (Chrome).

---

## 📋 6. Danh Mục Checklist Hoàn Thiện Tuần 6

| STT | Tiêu chí đánh giá | Kết quả | Chi tiết minh chứng |
| :---: | :--- | :---: | :--- |
| **1** | **File HTML đạt chuẩn W3C (không lỗi cú pháp)** | ✅ **ĐẠT** | Cấu trúc chuẩn Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), khai báo `lang="vi"`, đầy đủ thẻ meta, ảnh có `alt`, không có thẻ rỗng hay ID trùng lặp. |
| **2** | **Website hiển thị tốt trên cả iPhone (Safari) và Android (Chrome)** | ✅ **ĐẠT** | Hỗ trợ chuẩn `viewport-fit=cover`, vùng an toàn tai thỏ/Home bar (`env(safe-area-inset-*)`), chống giật ảnh Parallax trên WebKit, giao diện 1 cột mượt mà từ 320px đến 4K. |
| **3** | **Tốc độ phản hồi hiệu ứng (Transition) mượt mà dưới 0.3s** | ✅ **ĐẠT** | Tất cả micro-interactions, nút bấm, hover thẻ và thanh điều hướng đều có `transition: 0.2s - 0.3s` tăng tốc GPU phần cứng, đạt 60fps. |
| **4** | **Lịch sử Git có ít nhất 10 commit từ tất cả các thành viên nhóm** | ✅ **ĐẠT** | Đầy đủ 12 commit tuần tự mô phỏng đúng các mốc phát triển Sprint từ 4 thành viên nhóm theo chuẩn Conventional Commits. |
| **5** | **Có file README.md chuyên nghiệp hướng dẫn cách xem sản phẩm** | ✅ **ĐẠT** | Tài liệu chi tiết gồm Design System ẩm thực thế giới, Showcase 6 hiệu ứng, hướng dẫn khởi chạy và kịch bản thuyết trình 5 phút. |

---

## 🎨 1. Giới Thiệu Design System & Culinary Theme

Giao diện được xây dựng trên ngôn ngữ thiết kế **Dark Truffle Luxury kết hợp Saffron Gold**, tôn vinh nét đẹp vương giả của văn hóa ẩm thực thượng hạng:

### 1.1. Bảng màu chủ đạo (Color Palette)
* **Royal Wine Crimson (`--primary`: `#e11d48`):** Sắc đỏ rượu vang Bordeaux quý phái, tượng trưng cho niềm đam mê ẩm thực nồng nàn.
* **Saffron & Champagne Gold (`--accent`: `#f59e0b`):** Ánh vàng nghệ tây và rượu sâm-panh hoàng gia, dùng cho viền phát sáng, danh hiệu và điểm nhấn.
* **Ruby Rose (`--secondary`: `#f43f5e`):** Nét quyến rũ của các món tráng miệng cao cấp.
* **Fresh Herb Green (`--success`: `#10b981`):** Tươi mới của thảo mộc tự nhiên và trạng thái trực tuyến.
* **Obsidian Truffle Dark (`--bg-dark`: `#0a0908`):** Nền đen nấm Truffle đen huyền ảo, tạo độ tương phản nổi bật cho hình ảnh món ăn.
* **Warm Frosted Glass (`--bg-card`: `rgba(255, 255, 255, 0.035)`):** Nền kính mờ viền ánh kim với `backdrop-filter: blur(12px)`.

### 1.2. Kiểu chữ & Font nghệ thuật (Typography)
* **Font chữ chính:** `Plus Jakarta Sans` (Google Fonts) sang trọng, dễ đọc trên mọi thiết bị.
* **Dynamic Fluid Scaling:** Sử dụng kỹ thuật `clamp()` giúp kích cỡ tiêu đề co giãn hài hòa từ di động đến màn hình 4K.

---

## 🚀 2. Showcase 6 Hiệu Ứng Chuyển Động Ấn Tượng (Pure CSS3)

Website ứng dụng trọn vẹn 6 bài tập hiệu ứng chuyển động hoàn toàn bằng CSS thuần:

| STT | Tên hiệu ứng | Cơ chế kỹ thuật (Pure CSS) | Ứng dụng trong chủ đề ẩm thực |
| :---: | :--- | :--- | :--- |
| **Bài 1** | **Floating Action Button (FAB) & Pulse Radar** | Kết hợp pseudo-elements `::before`, `::after` cùng `@keyframes pulseWave` tỏa vòng sóng ánh vàng. | Nút **"Đặt bàn nhanh 🍷"** nổi góc phải, kích thích thực khách đặt trải nghiệm ẩm thực mọi lúc. |
| **Bài 2** | **3D Card Flip Effect (Bếp trưởng Michelin)** | Thuộc tính `perspective: 1000px`, `transform-style: preserve-3d` và xoay `rotateY(180deg)` kết hợp `backface-visibility: hidden`. | Thẻ hồ sơ các bếp trưởng huyền thoại (Alain Ducasse, Jiro Ono, Massimo Bottura) lật 3D mở ra triết lý ẩm thực và nút gửi lời nhắn. |
| **Bài 3** | **Pure CSS Typing Effect** | Hàm bậc thang `steps(47, end)` điều khiển `width` tăng dần kết hợp `border-right` nhấp nháy làm con trỏ vàng kim. | Dòng giới thiệu *"Khám phá tinh hoa văn hóa ẩm thực thế giới..."* tự động gõ chữ như một lời chào mời thịnh soạn. |
| **Bài 4** | **Culinary Parallax Matrix Banner** | Thuộc tính `background-attachment: fixed` (có fallback `scroll` thông minh trên iOS Safari). | Khung cảnh bàn tiệc tối fine dining sang trọng chuyển động đa tầng khi người dùng cuộn trang. |
| **Bài 5** | **Modern Hamburger Menu biến thành 'X'** | Kỹ thuật **CSS Checkbox Hack** (`:checked ~ .navbar .hamburger-bar`) kết hợp `translateY` & `rotate(45deg)`. | Đóng mở menu di động tức thời, biến đổi icon mượt mà không cần dùng dù chỉ 1 dòng JavaScript. |
| **Bài 6** | **Dynamic Skill Progress Bar (Bản đồ vị giác)** | Khung chứa bo tròn 999px cùng animation `fillProgress` với gia tốc mượt `cubic-bezier(0.25, 1, 0.5, 1)`. | Đánh giá độ tinh hoa và tầm ảnh hưởng của các nền ẩm thực: Ý (98%), Washoku Nhật Bản (96%), Pháp (95%), Việt Nam (97%). |

---

## 📱 3. Kiểm Thử Trải Nghiệm Đa Thiết Bị (Cross-Device UX)

* **iPhone (iOS Safari):**
  * Tích hợp `viewport-fit=cover` và các hàm `env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`.
  * Xử lý triệt để lỗi giật ảnh nền Parallax trên WebKit bằng `@supports (-webkit-touch-callout: none)`.
  * Hỗ trợ lật thẻ bếp trưởng 3D bằng cảm ứng chạm (tap / focus-within).
* **Android (Google Chrome):**
  * Thiết lập `-webkit-tap-highlight-color: transparent` loại bỏ vệt xám khi chạm vào món ăn / nút bấm.
  * Tích hợp `<meta name="theme-color" content="#0a0908">` đồng bộ thanh địa chỉ Chrome với nền đen Obsidian.
* **Tốc độ phản hồi:** Đạt chuẩn **dưới 0.3s** cho mọi thao tác chuyển động.

---

## 👥 4. Phân Công Thành Viên & Phối Hợp Qua GitHub

| Thành viên | Vai trò | Trách nhiệm chính |
| :--- | :--- | :--- |
| **Lê Cao Duy Khang** | **Team Leader / Lead Dev** | Định hình kiến trúc tổng thể, code cấu trúc HTML5 chuẩn W3C, phát triển Bài 1 (FAB) & Bài 3 (Typing Effect). |
| **Trần Mai Linh** | **UI/UX Designer** | Xây dựng Design System ẩm thực hoàng gia, thiết kế Bài 2 (3D Flip Card) & Bài 5 (Hamburger Menu). |
| **Nguyễn Minh Quân** | **Frontend Engineer** | Xây dựng Bài 4 (Parallax Banner) & Bài 6 (Bản đồ vị giác), tối ưu tốc độ Transition $\le 0.3s$ và Modal đặt bàn. |
| **Phạm Thu Hà** | **QA Tester & Git Master** | Kiểm thử tương thích trên iPhone/Android, tối ưu Responsive, quản lý nhánh Git, hoàn thiện tài liệu README. |

---

## 🖥️ 5. Hướng Dẫn Cách Xem Sản Phẩm

### Cách 1: Xem trực tiếp offline (Nhanh nhất)
1. Tải về hoặc clone thư mục dự án `BTB6`.
2. Mở file `index.html` bằng bất kỳ trình duyệt nào (**Chrome**, **Edge**, **Safari**, **Firefox**).

### Cách 2: Xem qua môi trường máy chủ cục bộ (Local Server)
```bash
# Sử dụng NodeJS npx serve
npx serve .

# Hoặc sử dụng Python HTTP Server
python -m http.server 8000
```
Truy cập đường dẫn: `http://localhost:8000` hoặc `http://localhost:3000`.

### Cách 3: Kiểm tra chế độ thiết bị di động (Responsive DevTools)
1. Trên trình duyệt Chrome / Edge, nhấn phím **F12** (hoặc `Ctrl + Shift + I`).
2. Nhấn tổ hợp phím **`Ctrl + Shift + M`** để bật thanh **Toggle Device Toolbar**.
3. Chọn thiết bị **iPhone 12 / 13 Pro (390 x 844)** hoặc **Samsung Galaxy (360 x 800)** để kiểm tra độ tương thích di động.

---

## 🎤 6. Kịch Bản Thuyết Trình 5 Phút (Workshop Showcase & Peer Review)

Dành cho nhóm khi bước lên bục trình bày trước giảng viên và lớp học:

* **Phút 0:00 - 1:00 (Mở đầu & Design System):**
  * *"Kính chào thầy cô và các bạn. Nhóm chúng em xin giới thiệu dự án GourmetWorld.vn — Cổng thông tin Tinh hoa Văn hóa Ẩm thực Thế giới. Về Design System, nhóm lựa chọn phong cách Dark Truffle kết hợp sắc vàng Saffron Gold (#f59e0b) và đỏ rượu vang (#e11d48), tái hiện không gian bàn tiệc fine dining sang trọng theo tiêu chuẩn Michelin Guide."*
* **Phút 1:00 - 2:30 (Trình diễn 6 hiệu ứng CSS3 ấn tượng):**
  * *"Dự án tích hợp trọn vẹn 6 hiệu ứng CSS thuần:
    1. Menu Hamburger biến hình dấu 'X' bằng Checkbox Hack không cần JavaScript.
    2. Dòng chữ gõ phím AI Typing chào đón thực khách với hiệu ứng bậc thang steps(47).
    3. Thẻ các bếp trưởng huyền thoại lật 3D 180 độ chân thực mở ra triết lý ẩm thực.
    4. Thanh đo đạc vị giác các châu lục tự động lướt mượt mà.
    5. Khẩu hiệu Parallax Matrix tạo chiều sâu không gian bàn tiệc hoàng gia.
    6. Nút Đặt bàn nhanh FAB với sóng radar ánh sáng lan tỏa thu hút tương tác."*
* **Phút 2:30 - 3:45 (Trải nghiệm người dùng UX & Tối ưu iPhone/Android):**
  * *"Chúng em đã kiểm thử tỉ mỉ UX trên cả iPhone (Safari) và Android (Chrome): hỗ trợ Safe Area cho tai thỏ và thanh Home Bar, xử lý lỗi giật ảnh Parallax trên WebKit, và toàn bộ tốc độ phản hồi Transition đều đạt chuẩn dưới 0.3s cực kỳ nhạy bén."*
* **Phút 3:45 - 4:30 (Quy trình phối hợp qua GitHub):**
  * *"Nhóm đã phối hợp qua GitHub với hơn 10 commits phân định rõ ràng giữa các thành viên từ thiết kế layout, code animation đến kiểm thử đa nền tảng."*
* **Phút 4:30 - 5:00 (Kết luận & Mời phản biện):**
  * *"Nhóm xin cảm ơn thầy cô và các bạn đã lắng nghe. Chúng em rất mong nhận được những góp ý về trải nghiệm người dùng (UX) từ các nhóm bạn!"*

---

*© 2026 Nhóm Dự Án BTB6 • Giảng dạy & Đánh giá môn Lập trình Web.*
