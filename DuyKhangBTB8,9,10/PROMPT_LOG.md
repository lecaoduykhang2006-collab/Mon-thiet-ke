# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)

- **Họ và tên:** Lê Cao Duy Khang
- **MSSV:** 125000847
- **Tên đề tài Website:** Website Sản phẩm & Tin tức Công nghệ Đột phá (NexTech Landing Page)
- **Công cụ AI đã sử dụng:** Gemini 2.5 Flash / Advanced Agentic Assistant (Vibe Coding)

---

## 1. Yêu cầu ban đầu (System/Initial Prompt)

> **Prompt khởi tạo:**  
> "Bạn là một Chuyên gia Lập trình Web Senior (Senior Front-End Developer & UI/UX Designer). Hãy giúp tôi xây dựng dự án website cho bài thi Giữa kỳ môn Thiết kế Web với thông tin: Sinh viên Lê Cao Duy Khang, MSSV: 125000847. Đề tài: Landing Page Sản phẩm & Tin tức Công nghệ (NexTech).  
> Yêu cầu bắt buộc:  
> 1. Chuẩn Semantic HTML5: tối thiểu 5 thành phần `<header>`, `<nav>`, `<main>`, `<section>`/`<article>`, `<footer>`, tuyệt đối không lạm dụng thẻ `<div>`.  
> 2. Kỹ thuật CSS & CSS Variables: khai báo hệ thống `:root` màu Dark Tech/Cyberpunk, font chữ, spacing; sử dụng layout CSS Flexbox/Grid; tự viết hiệu ứng `:hover`, `:focus` mượt mà cho button và cards.  
> 3. Tích hợp thư viện hiệu ứng: Animate.css (cho Hero banner, tiêu đề) và AOS (Animate On Scroll) khi cuộn trang, kèm `AOS.init()`.  
> Hãy xuất ra cấu trúc file gồm `index.html` và `style.css`."

---

## 2. Quá trình tinh chỉnh & Giải quyết sự cố (Iteration Iterations)

### Lần 1: Dựng khung Semantic HTML & Hệ thống CSS Variables
- **Prompt đã dùng:**  
  *"Kiểm tra lại cấu trúc HTML. Đảm bảo cấu trúc trang không bị lạm dụng thẻ `<div>` bọc lung tung. Các khối danh mục sản phẩm và bài viết tin tức phải dùng thẻ `<article>`, khối thông tin liên hệ dùng `<address>`, ngày tháng dùng thẻ `<time>`. Khai báo bảng màu Dark Tech vào biến CSS `:root` gồm màu chủ đạo Cyber Cyan (`#00f2fe`), Cyber Violet (`#7928ca`), cùng hệ thống spacing và bo góc chuẩn."*
- **Kết quả AI tạo ra:**  
  AI đã thay thế các thẻ container bằng `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`, `<address>`. File `style.css` định nghĩa toàn bộ biến CSS trong `:root` với gradient và neon shadow sắc sảo.
- **Nhận xét & Tinh chỉnh của SV:**  
  Cấu trúc HTML rất sạch và chuẩn ngữ nghĩa W3C. Tuy nhiên, tôi nhận thấy trên giao diện di động (dưới 768px), thanh menu navbar bị tràn màn hình. Tôi đã yêu cầu AI bổ sung nút hamburger menu (`#menuToggle`) với thuộc tính trợ năng `aria-expanded`, đồng thời ẩn/hiện navbar mượt mà bằng CSS Flexbox `column` và JavaScript toggling class `.is-open`.

---

### Lần 2: Tích hợp thư viện Animate.css & AOS (Animate On Scroll)
- **Prompt đã dùng:**  
  *"Nhúng CDN của Animate.css v4 và AOS v2 vào thẻ `<head>`. Áp dụng các class `animate__animated animate__fadeInDown`, `animate__fadeInLeft`, `animate__zoomIn` vào Hero Section. Với các section Sản phẩm, Tính năng và Tin tức, gắn thuộc tính `data-aos="fade-up"` và `data-aos-delay`. Viết mã kích hoạt `AOS.init()` ở cuối thẻ `<body>`."*
- **Thách thức gặp phải:**  
  Khi chạy thử nghiệm, một số phần tử có gắn `data-aos` bị ẩn hoàn toàn hoặc khi cuộn nhanh thì hiệu ứng bị giật cục, không kích hoạt đúng thời điểm. Đồng thời, Animate.css nếu chạy liên tục sẽ gây xao nhãng trải nghiệm người dùng (UX).
- **Cách sửa prompt (Debug prompt):**  
  *"Hãy tối ưu script khởi tạo AOS với tham số `{ duration: 800, once: true, offset: 100, easing: 'ease-out-cubic' }` để hiệu ứng cuộn mượt và chỉ chạy một lần, tránh render lại gây lag. Thêm thuộc tính `overflow-x: hidden` cho thẻ `body` và `html` trong `style.css` để tránh lỗi xuất hiện thanh cuộn ngang khi AOS thực hiện animation dịch chuyển tọa độ X. Ngoài ra, thêm nút Back-To-Top tự động hiển thị khi cuộn quá 300px."*
- **Kết quả sau sửa đổi:**  
  Hiệu ứng cuộn hoạt động cực kỳ mượt mà, không giật lag, không sinh lỗi tràn thanh cuộn ngang, giao diện toát lên vẻ cao cấp và hiện đại đúng chuẩn Vibe Coding.

---

### Lần 3: Hoạt động 2 - "Light Switch" Bật/Tắt bóng đèn & Đổi màu nền Dark/Light Mode
- **Prompt đã dùng:**  
  *"Hoạt động 2: 'Light Switch' - Bật/Tắt bóng đèn (45 phút). Hướng dẫn: Tạo một nút bấm và một hình ảnh cái đèn. Khi bấm nút, hình ảnh đổi từ 'đèn tắt' sang 'đèn sáng' bằng cách thay đổi thuộc tính src. Viết mã JS để khi tôi click vào một nút có id là 'toggle-btn', nó sẽ thay đổi màu nền của body từ trắng sang đen và ngược lại (Dark mode đơn giản)."*
- **Thách thức gặp phải:**  
  - Cần bảo đảm ảnh bóng đèn không bị vỡ liên kết nếu không có kết nối internet hoặc đường link ngoài bị chết.
  - Cần đồng bộ giữa thuộc tính `src` của thẻ `<img>` và màu nền `body` chuyển đổi mượt mà giữa chế độ Sáng (Light) và Tối (Dark).
  - Vừa cần một trang lab độc lập (`light-switch.html`) để nộp riêng bài tập 45 phút, vừa cần tích hợp đồng bộ vào đồ án chính `NexTech.io` (`index.html`).
- **Cách chỉ đạo AI tinh chỉnh:**  
  *"Hãy tự vẽ 2 hình ảnh vector chuẩn SVG chất lượng cao lưu vào thư mục `assets/` gồm `bulb-off.svg` và `bulb-on.svg` để chạy offline không phụ thuộc internet. Viết mã JS bắt sự kiện click trên `#toggle-btn`, hoán đổi biến cờ `isLightOn = !isLightOn`, cập nhật `bulbImg.src` và `document.body.classList.toggle('light-mode')`. Đồng thời cung cấp cả file độc lập `light-switch.html` lẫn tích hợp vào Section và Header của trang chính `index.html`."*
- **Kết quả sau sửa đổi:**  
  Chức năng hoạt động hoàn hảo 100%. Nút bấm `#toggle-btn` đổi chữ linh hoạt, bóng đèn đổi ảnh mượt mà, hiệu ứng phát sáng vàng rực khi bật đèn và nền chuyển sang Light Mode; khi tắt đèn chuyển về Dark Cyberpunk Mode huyền bí kèm âm thanh switch nhẹ tự nhiên.

---

### Lần 4: Hoạt động 3 - "Live Input" Phản hồi tức thì với sự kiện 'input' trong JavaScript
- **Prompt đã dùng:**  
  *"Hoạt động 3: 'Live Input' - Phản hồi tức thì (30 phút). Hướng dẫn: Tạo một ô <input>. Khi người dùng gõ chữ vào ô đó, nội dung ngay lập tức xuất hiện ở một thẻ <span> bên cạnh. Prompt mẫu: Sử dụng sự kiện 'input' trong JavaScript để lấy giá trị từ một ô text và hiển thị nó ngay lập tức vào một thẻ h2 bên dưới."*
- **Thách thức gặp phải:**  
  - Phân biệt sự khác nhau giữa sự kiện `change` (chỉ kích hoạt khi người dùng ấn Enter hoặc nhấp chuột ra ngoài làm mất tiêu điểm) và sự kiện `input` (kích hoạt tức thời trên từng phím gõ, xóa ký tự, hoặc dán chữ `Ctrl+V`).
  - Xử lý trạng thái chuỗi rỗng: nếu người dùng xóa hết chữ trong ô input, thẻ `<span>` và `<h2>` cần hiển thị thông điệp giữ chỗ (fallback placeholder) để tránh tình trạng vỡ layout hoặc giao diện bị giật cục.
- **Cách chỉ đạo AI tinh chỉnh:**  
  *"Viết mã JS sử dụng `addEventListener('input', ...)` để lấy `event.target.value`. Cập nhật đồng thời cho cả thẻ `<span>` bên cạnh (theo Hướng dẫn) và thẻ `<h2>` bên dưới (theo Prompt mẫu). Bổ sung bộ đếm số ký tự, số từ thời gian thực, nút xóa nhanh, cùng các nút preset văn bản mẫu để Giảng viên kiểm tra nhanh chóng."*
- **Kết quả sau sửa đổi:**  
  Hệ thống phản hồi tức thì với độ trễ 0ms (Zero-latency Live Mirroring). Cả file độc lập `live-input.html` và Section `#live-input` trên trang chính `index.html` đều hoạt động trơn tru, chuẩn ngữ nghĩa Semantic HTML5 và tương thích hoàn toàn khi chuyển đổi Dark/Light mode.

---

## 3. Đánh giá cá nhân về quá trình Vibe Coding

### 1. AI đã giúp bạn tiết kiệm thời gian ở phần nào nhất?
- **Khởi tạo Boilerplate & CSS Variables:** AI sinh ra toàn bộ bảng mã màu, font typography và spacing trong `:root` chỉ trong vài giây, giúp tiết kiệm ít nhất 40-50 phút so với việc ngồi gõ tay và tra cứu mã màu HEX/RGBA.
- **Cấu trúc Semantic HTML chuẩn chỉ:** Việc sinh sẵn các thẻ ngữ nghĩa `<article>`, `<figure>`, `<time>`, `<address>` cùng hệ thống class BEM rõ ràng giúp việc phân chia layout diễn ra ngay lập tức.
- **Tích hợp thư viện CDN chính xác:** AI cung cấp đường dẫn CDN phiên bản mới nhất, tương thích tốt và kèm sẵn cấu hình khởi tạo JavaScript tiêu chuẩn.

### 2. Bài học rút ra khi đặt câu hỏi (Prompt) cho AI trong thiết kế web?
- **Đặt câu hỏi có ngữ cảnh & vai trò rõ ràng (Role-based Prompting):** Khi yêu cầu AI đóng vai "Senior Front-End Developer & UI/UX Designer", chất lượng mã nguồn tạo ra có tư duy tổ chức cao hơn hẳn, code sạch và có chú thích chi tiết.
- **Đưa ra các ràng buộc kỹ thuật khắt khe (Negative Constraints):** Việc nêu rõ *"Tuyệt đối KHÔNG lạm dụng thẻ `<div>` vô nghĩa"* và *"Bắt buộc dùng Semantic HTML5, CSS Variables trong `:root`"* giúp AI tuân thủ đúng barem điểm chấm thi của Giảng viên mà không tự ý viết tắt hay dùng framework ngoài ý muốn.
- **Tư duy tinh chỉnh từng bước (Iterative Refinement):** Không nên mong đợi AI hoàn hảo 100% trong một lượt prompt duy nhất. Cần kiểm tra mã nguồn thực tế, phát hiện các điểm nghẽn (như menu responsive trên mobile, lỗi thanh cuộn ngang khi dùng AOS) và đưa ra prompt điều chỉnh cụ thể để đạt kết quả xuất sắc nhất.
