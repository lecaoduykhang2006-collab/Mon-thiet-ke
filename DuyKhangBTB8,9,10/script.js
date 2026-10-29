/**
 * ==============================================================================
 * NEXTECH.IO - REALTIME GREETING & INTERACTION LOGIC
 * HỌC PHẦN: THIẾT KẾ WEB (GIỮA KỲ) - KHOA CÔNG NGHỆ THÔNG TIN - ĐẠI HỌC LẠC HỒNG
 * 
 * BÀI TẬP: THÁCH THỨC TUẦN 8 - "THE LOGIC PUZZLE"
 * Sinh viên: Lê Cao Duy Khang
 * MSSV: 125000847
 * Lớp/Nhóm: Nhóm Đồ án Giữa kỳ NexTech.io
 * 
 * TÍNH NĂNG CHÍNH:
 * 1. Lấy thời gian thực tế của người dùng thông qua đối tượng JavaScript Date: new Date().getHours().
 * 2. Phân nhánh logic 5 khung thời gian trong ngày (Sáng, Trưa, Chiều, Tối, Đêm muộn).
 * 3. Hiển thị thông báo chào mừng Toast Cyber Glassmorphism & Thanh trạng thái Hero theo thời gian thực.
 * 4. Đồng hồ kỹ thuật số Digital Clock tự động nhảy giây (Live Ticking Clock).
 * 5. Bộ mô phỏng thời gian (Time Simulator) dành riêng cho Giảng viên kiểm tra tất cả các nhánh logic.
 * ==============================================================================
 */

// Biến trạng thái toàn cục
let simulatedHour = null;     // null = dùng thời gian thực, số nguyên 0-23 = giờ mô phỏng
let autoDismissTimeout = null;
let progressAnimation = null;
let isHoveringToast = false;

// Khởi chạy khi tài liệu DOM hoàn tất
document.addEventListener('DOMContentLoaded', () => {
    // 1. Khởi tạo hệ thống Lời chào theo thời gian thực (Tuần 8 Logic Puzzle)
    initRealtimeGreeting();

    // 2. Khởi tạo Bộ điều khiển Mô phỏng thời gian cho Giảng viên (Simulator Controls)
    initTimeSimulator();

    // 3. Khởi tạo Đồng hồ Digital Clock cập nhật mỗi giây
    startLiveClock();

    // 4. Khởi tạo Giao diện Thông minh & Render Danh sách Sản phẩm từ Mảng Dữ liệu (Tuần 9 The Smart Interface)
    initProductInterface();

    // 5. Khởi tạo Hoạt động 2: "Light Switch" - Bật/Tắt bóng đèn & Chuyển đổi Dark/Light Mode (Tuần 10 DOM Event)
    initLightSwitch();

    // 6. Khởi tạo Hoạt động 3: "Live Input" - Phản hồi tức thì với sự kiện 'input' (Tuần 10 Realtime DOM)
    initLiveInput();
});

/**
 * Hàm cốt lõi: Tính toán lời chào dựa trên giờ hệ thống (new Date().getHours())
 * @param {number|null} customHour - Giờ tùy chọn để mô phỏng (0-23), mặc định null là giờ thực
 * @returns {object} Thông tin chi tiết về lời chào, icon, lớp giao diện
 */
function getGreetingByHour(customHour = null) {
    // Bước 1: Khởi tạo đối tượng Date lấy thời gian từ máy khách (Client-side)
    const now = new Date();

    // Bước 2: Dùng hàm getHours() để lấy giá trị giờ (số nguyên từ 0 đến 23)
    // Nếu có customHour từ simulator thì sử dụng, ngược lại lấy now.getHours()
    const hour = (customHour !== null && customHour !== undefined) 
        ? Number(customHour) 
        : now.getHours();

    // Bước 3: Cấu trúc dữ liệu kết quả
    const result = {
        hour: hour,
        period: '',
        title: '',
        message: '',
        iconClass: '',
        themeClass: '',
        accentColor: '',
        badgeText: ''
    };

    /**
     * BƯỚC 4: CẤU TRÚC ĐIỀU KIỆN RẼ NHÁNH (LOGIC BRANCHING)
     * 
     * Phân tích 24 giờ trong ngày thành 5 buổi tự nhiên:
     * - 05:00 đến 10:59 (5 <= hour < 11):  Buổi Sáng  (Morning)
     * - 11:00 đến 13:59 (11 <= hour < 14): Buổi Trưa  (Noon)
     * - 14:00 đến 17:59 (14 <= hour < 18): Buổi Chiều (Afternoon)
     * - 18:00 đến 22:59 (18 <= hour < 23): Buổi Tối   (Evening)
     * - 23:00 đến 04:59 (hour >= 23 hoặc hour < 5): Đêm Muộn (Late Night)
     */
    if (hour >= 5 && hour < 11) {
        // Buổi sáng (05h00 - 10h59)
        result.period = 'Buổi sáng';
        result.title = 'Chào buổi sáng!';
        result.message = 'Khởi đầu ngày mới tràn đầy năng lượng cùng các đột phá công nghệ AI thế hệ mới tại NexTech.io!';
        result.iconClass = 'fa-solid fa-sun';
        result.themeClass = 'theme-morning';
        result.accentColor = '#f59e0b';
        result.badgeText = `🌅 Khung giờ Sáng (${hour}h00)`;
    } else if (hour >= 11 && hour < 14) {
        // Buổi trưa (11h00 - 13h59)
        result.period = 'Buổi trưa';
        result.title = 'Chào buổi trưa!';
        result.message = 'Nghỉ ngơi nạp lại năng lượng và cập nhật những xu hướng vi mạch bán dẫn mới nhất hôm nay nhé!';
        result.iconClass = 'fa-solid fa-utensils';
        result.themeClass = 'theme-noon';
        result.accentColor = '#f97316';
        result.badgeText = `☀️ Khung giờ Trưa (${hour}h00)`;
    } else if (hour >= 14 && hour < 18) {
        // Buổi chiều (14h00 - 17h59)
        result.period = 'Buổi chiều';
        result.title = 'Chào buổi chiều!';
        result.message = 'Chúc bạn một buổi chiều làm việc và sáng tạo bứt phá cùng hệ sinh thái thiết bị phần cứng thông minh!';
        result.iconClass = 'fa-solid fa-cloud-sun';
        result.themeClass = 'theme-afternoon';
        result.accentColor = '#00f2fe';
        result.badgeText = `🌤️ Khung giờ Chiều (${hour}h00)`;
    } else if (hour >= 18 && hour < 23) {
        // Buổi tối (18h00 - 22h59)
        result.period = 'Buổi tối';
        result.title = 'Chào buổi tối!';
        result.message = 'Thư giãn sau ngày dài và đắm chìm vào không gian điện toán lượng tử đỉnh cao cùng NexTech!';
        result.iconClass = 'fa-solid fa-moon';
        result.themeClass = 'theme-evening';
        result.accentColor = '#7928ca';
        result.badgeText = `🌙 Khung giờ Tối (${hour}h00)`;
    } else {
        // Đêm muộn (23h00 - 04h59): Điều kiện (hour >= 23 || hour < 5)
        result.period = 'Đêm muộn';
        result.title = 'Chào đêm muộn! Cú đêm ơi!';
        result.message = 'Đã về khuya rồi, hãy nhớ cho mắt nghỉ ngơi và giữ gìn sức khỏe nhé. NexTech.io luôn đồng hành cùng bạn!';
        result.iconClass = 'fa-solid fa-star-and-crescent';
        result.themeClass = 'theme-night';
        result.accentColor = '#ff007a';
        result.badgeText = `🌌 Khung giờ Đêm (${hour}h00)`;
    }

    return result;
}

/**
 * Hiển thị và cập nhật giao diện thông báo chào mừng
 */
function renderGreetingUI(data) {
    const toast = document.getElementById('realtimeToast');
    const toastGreeting = document.getElementById('toastGreeting');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = document.getElementById('toastIcon');
    const toastIconBox = document.getElementById('toastIconBox');
    const toastHourBadge = document.getElementById('toastHourBadge');

    // Cập nhật phần tử trong Toast Banner
    if (toastGreeting) toastGreeting.textContent = data.title;
    if (toastMessage) toastMessage.textContent = data.message;
    if (toastHourBadge) toastHourBadge.textContent = data.badgeText;

    if (toastIcon) {
        toastIcon.className = data.iconClass;
    }

    // Cập nhật theme class màu sắc neon trên Toast
    if (toast) {
        toast.classList.remove('theme-morning', 'theme-noon', 'theme-afternoon', 'theme-evening', 'theme-night');
        toast.classList.add(data.themeClass);
    }

    // Cập nhật thanh trạng thái Real-time trên Hero Section
    const heroGreetingText = document.getElementById('heroGreetingText');
    const heroGreetingIcon = document.getElementById('heroGreetingIcon');
    const heroGreetingBar = document.getElementById('heroGreetingBar');

    if (heroGreetingText) {
        heroGreetingText.textContent = `${data.title} - ${data.period}`;
    }
    if (heroGreetingIcon) {
        heroGreetingIcon.className = `greeting-icon ${data.iconClass}`;
    }
    if (heroGreetingBar) {
        heroGreetingBar.classList.remove('theme-morning', 'theme-noon', 'theme-afternoon', 'theme-evening', 'theme-night');
        heroGreetingBar.classList.add(data.themeClass);
    }

    // In ra Console để phục vụ kiểm thử và chấm bài
    console.log(
        `%c[NexTech AI Greeting] %cGiờ: ${data.hour}h | Phân loại: ${data.period} | Lời chào: "${data.title}"`,
        'color: #00f2fe; font-weight: bold;',
        `color: ${data.accentColor}; font-weight: bold;`
    );
}

/**
 * Khởi tạo thông báo Toast nổi
 */
function initRealtimeGreeting() {
    const toast = document.getElementById('realtimeToast');
    const closeBtn = document.getElementById('toastCloseBtn');
    const reopenBtn = document.getElementById('toastReopenBtn');
    const progressBar = document.getElementById('toastProgressBar');

    // Lấy dữ liệu lời chào theo giờ thực tế
    const greetingData = getGreetingByHour(simulatedHour);
    renderGreetingUI(greetingData);

    // Hiển thị Toast mượt mà sau 600ms khi trang vừa tải xong
    setTimeout(() => {
        if (toast) {
            toast.classList.add('is-visible');
            startAutoDismiss();
        }
    }, 600);

    // Xử lý nút Đóng Toast
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            dismissToast();
        });
    }

    // Xử lý nút Mở lại Toast (Floating Bell)
    if (reopenBtn) {
        reopenBtn.addEventListener('click', () => {
            showToast();
        });
    }

    // Tạm dừng tự động tắt khi rê chuột lên Toast (UX thân thiện)
    if (toast) {
        toast.addEventListener('mouseenter', () => {
            isHoveringToast = true;
            if (progressBar) progressBar.style.animationPlayState = 'paused';
            if (autoDismissTimeout) clearTimeout(autoDismissTimeout);
        });

        toast.addEventListener('mouseleave', () => {
            isHoveringToast = false;
            if (progressBar) progressBar.style.animationPlayState = 'running';
            // Tiếp tục đếm lùi để tắt sau 4 giây nếu người dùng không tương tác
            autoDismissTimeout = setTimeout(() => {
                if (!isHoveringToast) dismissToast();
            }, 4000);
        });
    }
}

/**
 * Bắt đầu đếm ngược tự động đóng Toast
 */
function startAutoDismiss() {
    const progressBar = document.getElementById('toastProgressBar');
    if (progressBar) {
        progressBar.style.animation = 'none';
        // Ép reflow để kích hoạt lại animation
        void progressBar.offsetWidth;
        progressBar.style.animation = 'toastProgress 10s linear forwards';
    }

    if (autoDismissTimeout) clearTimeout(autoDismissTimeout);
    autoDismissTimeout = setTimeout(() => {
        if (!isHoveringToast) {
            dismissToast();
        }
    }, 10000);
}

/**
 * Ẩn Toast và hiện nút mở lại
 */
function dismissToast() {
    const toast = document.getElementById('realtimeToast');
    const reopenBtn = document.getElementById('toastReopenBtn');

    if (toast) {
        toast.classList.remove('is-visible');
    }
    if (reopenBtn) {
        reopenBtn.classList.add('is-visible');
    }
    if (autoDismissTimeout) clearTimeout(autoDismissTimeout);
}

/**
 * Mở lại Toast từ nút Floating Bell
 */
function showToast() {
    const toast = document.getElementById('realtimeToast');
    const reopenBtn = document.getElementById('toastReopenBtn');

    if (reopenBtn) {
        reopenBtn.classList.remove('is-visible');
    }
    if (toast) {
        // Cập nhật lại dữ liệu giờ mới nhất
        const data = getGreetingByHour(simulatedHour);
        renderGreetingUI(data);
        toast.classList.add('is-visible');
        startAutoDismiss();
    }
}

/**
 * Khởi tạo Bộ điều khiển Mô phỏng Thời gian (Dành cho Giảng viên kiểm tra tất cả các nhánh)
 */
function initTimeSimulator() {
    const simButtons = document.querySelectorAll('.sim-btn');
    const toggleSimBtn = document.getElementById('btnToggleSim');
    const simulatorPanel = document.getElementById('toastSimulator');

    simButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            simButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const val = btn.getAttribute('data-hour');
            if (val === 'real') {
                simulatedHour = null;
                console.log('%c[Simulator] Đã trở về thời gian thực hệ thống!', 'color: #10b981; font-weight: bold;');
            } else {
                simulatedHour = parseInt(val, 10);
                console.log(`%c[Simulator] Đã kích hoạt giả lập giờ: ${simulatedHour}:00`, 'color: #f59e0b; font-weight: bold;');
            }

            // Cập nhật lại UI ngay lập tức
            const data = getGreetingByHour(simulatedHour);
            renderGreetingUI(data);

            // Mở lại toast nếu đang đóng
            const toast = document.getElementById('realtimeToast');
            if (toast && !toast.classList.contains('is-visible')) {
                showToast();
            }
        });
    });

    // Nút toggle simulator từ Hero bar
    if (toggleSimBtn && simulatorPanel) {
        toggleSimBtn.addEventListener('click', () => {
            showToast();
            simulatorPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            simulatorPanel.classList.add('highlight-pulse');
            setTimeout(() => simulatorPanel.classList.remove('highlight-pulse'), 1500);
        });
    }
}

/**
 * Khởi động đồng hồ kỹ thuật số Digital Clock chạy theo từng giây
 */
function startLiveClock() {
    const clockElement = document.getElementById('toastClock');
    const dateElement = document.getElementById('toastDate');
    const heroTimeTag = document.getElementById('heroTimeTag');

    function updateClock() {
        const now = new Date();

        // Định dạng giờ:phút:giây
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        // Định dạng ngày: Thứ, dd/mm/yyyy
        const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
        const dayName = days[now.getDay()];
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const dateString = `${dayName}, ${day}/${month}/${year}`;

        if (clockElement) clockElement.textContent = timeString;
        if (dateElement) dateElement.textContent = dateString;
        if (heroTimeTag) heroTimeTag.textContent = timeString;

        // Nếu đang không dùng giả lập và sang giờ mới, tự động làm mới lời chào
        if (simulatedHour === null && now.getMinutes() === 0 && now.getSeconds() === 0) {
            const data = getGreetingByHour(null);
            renderGreetingUI(data);
        }
    }

    // Chạy ngay lần đầu
    updateClock();
    // Cập nhật mỗi 1000ms (1 giây)
    setInterval(updateClock, 1000);
}

/**
 * ==============================================================================
 * THÁCH THỨC TUẦN 9: "THE SMART INTERFACE" (NHÓM)
 * Sinh viên: Lê Cao Duy Khang - MSSV: 125000847
 * 
 * TÍNH NĂNG CHÍNH:
 * 1. Khai báo danh sách dữ liệu mẫu (Mock Data Array) chứa các đối tượng sản phẩm.
 * 2. Hàm renderProductList(products, containerId): Dùng vòng lặp duyệt qua mảng
 *    dữ liệu để tự động sinh mã HTML (Semantic <article>) và nhúng vào DOM.
 * 3. Tương tác Smart Interface:
 *    - Bộ lọc danh mục tức thời (Category Filtering).
 *    - Ô tìm kiếm thời gian thực (Live Search Filtering).
 *    - Sắp xếp sản phẩm theo giá và tên (Dynamic Sorting).
 *    - Giỏ hàng công nghệ thông minh với Toast thông báo và Modal quản lý sản phẩm.
 * ==============================================================================
 */

// 1. DANH SÁCH DỮ LIỆU MẪU (MOCK DATA ARRAY - SẢN PHẨM & DỊCH VỤ CÔNG NGHỆ NEXTECH)
const PRODUCTS_DATA = [
    {
        id: 'nexphone-16-pro',
        name: 'NexPhone 16 Quantum Pro',
        category: 'Điện thoại thông minh AI',
        categoryKey: 'phone',
        badge: 'Flagship 2026',
        badgeClass: '',
        icon: 'fa-solid fa-mobile-screen-button',
        themeClass: 'tech-cyan',
        description: 'Màn hình Super Retina XDR 6.8 inch 165Hz, cụm 4 camera cảm biến lượng tử 200MP và chip xử lý Neural Core AI thế hệ thứ 5.',
        features: [
            'Chip Neural Gen 5 (3nm)',
            'Khung vỏ Titanium Grade 5',
            'Sạc không dây từ xa 50W'
        ],
        price: '28.990.000₫',
        rawPrice: 28990000,
        oldPrice: '32.990.000₫',
        inStock: true
    },
    {
        id: 'nexbook-ultra',
        name: 'NexBook Ultra M-Matrix',
        category: 'Máy tính xách tay cao cấp',
        categoryKey: 'laptop',
        badge: 'Bán Chạy Nhất',
        badgeClass: 'badge-popular',
        icon: 'fa-solid fa-laptop-code',
        themeClass: 'tech-purple',
        description: 'Cỗ máy đồ họa tối thượng dành cho Kỹ sư AI và Lập trình viên. Màn hình OLED 4K 16 inch chuẩn màu DCI-P3 100%, thời lượng pin 24 giờ.',
        features: [
            '64GB LPDDR5X RAM thống nhất',
            '2TB NVMe Gen5 PCIe SSD',
            'Tản nhiệt buồng hơi lỏng Cryo'
        ],
        price: '45.490.000₫',
        rawPrice: 45490000,
        oldPrice: '49.990.000₫',
        inStock: true
    },
    {
        id: 'nexvision-spatial-x',
        name: 'NexVision Spatial Vision X',
        category: 'Điện toán Không gian (AR/VR)',
        categoryKey: 'spatial',
        badge: 'Công Nghệ Tương Lai',
        badgeClass: '',
        icon: 'fa-solid fa-vr-cardboard',
        themeClass: 'tech-pink',
        description: 'Kính thực tế mở rộng không gian cá nhân với độ phân giải 8K cho mỗi mắt, điều khiển bằng cử chỉ mắt và sóng não sinh trắc học.',
        features: [
            'Micro-OLED 8K kép cực nét',
            'Theo dõi ánh mắt mili-giây',
            'Âm thanh Spatial Audio 3D'
        ],
        price: '62.000.000₫',
        rawPrice: 62000000,
        oldPrice: '68.000.000₫',
        inStock: true
    },
    {
        id: 'nexwatch-apex',
        name: 'NexWatch Apex Titanium',
        category: 'Đồng hồ thông minh Sinh trắc',
        categoryKey: 'wearable',
        badge: 'Đột Phá Y Tế AI',
        badgeClass: '',
        icon: 'fa-solid fa-clock',
        themeClass: 'tech-amber',
        description: 'Giám sát nhịp tim, điện tâm đồ ECG liên tục, đo huyết áp quang học và phát hiện sớm bất thường sức khỏe nhờ mô hình chẩn đoán AI.',
        features: [
            'Kính Sapphire chống xước 9H',
            'Chống nước chuẩn quân đội 10ATM',
            'Pin năng lượng mặt trời 14 ngày'
        ],
        price: '14.290.000₫',
        rawPrice: 14290000,
        oldPrice: '16.500.000₫',
        inStock: true
    },
    {
        id: 'nexear-buds-pro',
        name: 'NexEar Neural Buds Pro',
        category: 'Tai nghe & Âm thanh AI',
        categoryKey: 'audio',
        badge: 'Chống Ồn 100%',
        badgeClass: '',
        icon: 'fa-solid fa-headphones',
        themeClass: 'tech-cyan',
        description: 'Tai nghe truyền sóng âm lượng tử với thuật toán khử ồn chủ động thời gian thực và phiên dịch trực tiếp 80 ngôn ngữ song phương.',
        features: [
            'Driver Graphene sinh học 12mm',
            'Phiên dịch AI tức thì 80 thứ tiếng',
            'Thời lượng pin 48 giờ kèm hộp'
        ],
        price: '6.890.000₫',
        rawPrice: 6890000,
        oldPrice: '7.990.000₫',
        inStock: true
    },
    {
        id: 'nexhub-smarthome',
        name: 'NexHub Quantum Smarthome',
        category: 'Thiết bị Nhà thông minh',
        categoryKey: 'audio',
        badge: 'Trung Tâm Điều Khiển',
        badgeClass: 'badge-popular',
        icon: 'fa-solid fa-network-wired',
        themeClass: 'tech-purple',
        description: 'Bộ điều khiển trung tâm căn hộ thông minh thế hệ mới, nhận diện giọng nói tự nhiên ngoại tuyến và kết nối 500 thiết bị IoT cùng lúc.',
        features: [
            'Mạng lưới cục bộ Local AI Offline',
            'Tương thích giao thức Matter 2.0',
            'Bảo mật lượng tử chống xâm nhập'
        ],
        price: '11.500.000₫',
        rawPrice: 11500000,
        oldPrice: '13.200.000₫',
        inStock: true
    }
];

// Biến trạng thái quản lý Giỏ hàng (Cart State)
let userCart = [];
let currentCategoryFilter = 'all';
let currentSearchKeyword = '';
let currentSortOption = 'default';
let cartToastTimer = null;

/**
 * ==============================================================================
 * HÀM CỐT LÕI (CORE FUNCTION): renderProductList
 * ==============================================================================
 * Xử lý việc hiển thị danh sách sản phẩm/dịch vụ tự động bằng vòng lặp JavaScript.
 * Thay vì viết tay từng thẻ HTML, hàm nhận dữ liệu đầu vào và sinh mã giao diện động.
 * 
 * @param {Array<Object>} products - Mảng dữ liệu các sản phẩm cần hiển thị
 * @param {string} containerId - ID phần tử HTML chứa danh sách (mặc định: 'productsGrid')
 */
function renderProductList(products, containerId = 'productsGrid') {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`[Smart Interface] Không tìm thấy phần tử DOM với ID: #${containerId}`);
        return;
    }

    // Xử lý trường hợp mảng rỗng (Empty State)
    if (!products || !Array.isArray(products) || products.length === 0) {
        container.innerHTML = `
            <div class="products-empty-state" data-aos="fade-up">
                <div class="empty-icon"><i class="fa-solid fa-box-open"></i></div>
                <h4 class="empty-title">Không tìm thấy sản phẩm phù hợp</h4>
                <p class="empty-desc">Không có thiết bị nào khớp với từ khóa tìm kiếm hoặc bộ lọc hiện tại. Vui lòng thử lại với tiêu chí khác.</p>
                <button type="button" class="btn btn-outline btn-sm" onclick="resetProductFilters()">
                    <i class="fa-solid fa-rotate-left"></i> Đặt lại tất cả bộ lọc
                </button>
            </div>
        `;
        updateProductCounter(0);
        return;
    }

    // Biến tích lũy chuỗi mã HTML sinh ra từ vòng lặp
    let htmlOutput = '';

    /**
     * VÒNG LẶP CHÍNH (MAIN LOOP): forEach
     * Duyệt qua từng đối tượng sản phẩm trong mảng 'products'
     * Lấy các trường thông tin (id, name, category, features, price...) và ghép vào Template HTML
     */
    products.forEach((product, index) => {
        // VÒNG LẶP CON (NESTED LOOP): Duyệt mảng con các tính năng nổi bật (features)
        const featuresHtml = (product.features || []).map(feature => `
            <li><i class="fa-solid fa-check"></i> ${feature}</li>
        `).join('');

        // Xử lý huy hiệu (Badge) nếu có
        const badgeClass = product.badgeClass ? `product-badge ${product.badgeClass}` : 'product-badge';
        const badgeHtml = product.badge ? `<div class="${badgeClass}">${product.badge}</div>` : '';

        // Xử lý giá cũ (Old Price) nếu có
        const oldPriceHtml = product.oldPrice ? `<span class="price-old">${product.oldPrice}</span>` : '';

        // Tính toán độ trễ AOS Animation tăng dần so le: 100ms, 200ms, 300ms, 400ms
        const aosDelay = ((index % 4) + 1) * 100;

        // Sinh cấu trúc thẻ <article> chuẩn Semantic HTML5 cho từng sản phẩm
        htmlOutput += `
            <article class="product-card" data-aos="fade-up" data-aos-delay="${aosDelay}" data-id="${product.id}">
                ${badgeHtml}
                <figure class="product-thumb">
                    <div class="product-icon-wrapper ${product.themeClass || 'tech-cyan'}">
                        <i class="${product.icon}"></i>
                    </div>
                </figure>
                <div class="product-body">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <ul class="product-features">
                        ${featuresHtml}
                    </ul>
                    <div class="product-footer">
                        <div class="product-price">
                            <span class="price-current">${product.price}</span>
                            ${oldPriceHtml}
                        </div>
                        <button type="button" class="btn btn-sm btn-primary btn-buy" 
                                onclick="handleBuyProduct('${product.id}')"
                                aria-label="Mua ngay ${product.name}">
                            Mua ngay <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    });

    // Bơm toàn bộ mã HTML sinh từ vòng lặp vào container trong 1 lần duy nhất (tối ưu hóa DOM Performance)
    container.innerHTML = htmlOutput;

    // Cập nhật số lượng sản phẩm hiển thị trên thanh trạng thái
    updateProductCounter(products.length);

    // Kích hoạt lại thư viện AOS để nhận diện các phần tử DOM vừa sinh động
    if (window.AOS && typeof window.AOS.refresh === 'function') {
        window.AOS.refresh();
    }
}

/**
 * Cập nhật số lượng sản phẩm đang hiển thị
 */
function updateProductCounter(count) {
    const counterElement = document.getElementById('productsCount');
    if (counterElement) {
        counterElement.innerHTML = `<i class="fa-solid fa-microchip"></i> Đang hiển thị: <strong>${count}</strong> thiết bị thông minh`;
    }
}

/**
 * Khởi tạo bộ điều khiển Giao diện Thông minh (The Smart Interface)
 */
function initProductInterface() {
    // 1. Render toàn bộ danh sách sản phẩm ban đầu
    renderProductList(PRODUCTS_DATA);

    // Cập nhật số lượng tổng trên tab "Tất cả"
    const countAllSpan = document.getElementById('countAll');
    if (countAllSpan) countAllSpan.textContent = PRODUCTS_DATA.length;

    // 2. Lắng nghe sự kiện lọc theo Danh mục (Category Tabs)
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            currentCategoryFilter = btn.getAttribute('data-category');
            applyFiltersAndSort();
        });
    });

    // 3. Lắng nghe sự kiện tìm kiếm theo thời gian thực (Search Input)
    const searchInput = document.getElementById('productSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchKeyword = e.target.value.trim().toLowerCase();
            if (clearSearchBtn) {
                clearSearchBtn.style.display = currentSearchKeyword ? 'flex' : 'none';
            }
            applyFiltersAndSort();
        });
    }

    if (clearSearchBtn && searchInput) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            currentSearchKeyword = '';
            clearSearchBtn.style.display = 'none';
            applyFiltersAndSort();
            searchInput.focus();
        });
    }

    // 4. Lắng nghe sự kiện sắp xếp (Sort Select)
    const sortSelect = document.getElementById('productSortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSortOption = e.target.value;
            applyFiltersAndSort();
        });
    }

    // 5. Khởi tạo sự kiện cho Giỏ hàng (Cart Navigation & Modal)
    initCartEvents();
}

/**
 * Áp dụng kết hợp Bộ lọc Danh mục, Ô tìm kiếm và Thứ tự Sắp xếp
 * Sau đó truyền mảng kết quả đã lọc vào hàm renderProductList()
 */
function applyFiltersAndSort() {
    let result = [...PRODUCTS_DATA];

    // Lọc theo Danh mục
    if (currentCategoryFilter !== 'all') {
        result = result.filter(item => item.categoryKey === currentCategoryFilter);
    }

    // Lọc theo Từ khóa tìm kiếm (Tên, Danh mục, Mô tả, Tính năng)
    if (currentSearchKeyword) {
        result = result.filter(item => {
            const matchName = item.name.toLowerCase().includes(currentSearchKeyword);
            const matchCategory = item.category.toLowerCase().includes(currentSearchKeyword);
            const matchDesc = item.description.toLowerCase().includes(currentSearchKeyword);
            const matchFeature = item.features && item.features.some(f => f.toLowerCase().includes(currentSearchKeyword));
            return matchName || matchCategory || matchDesc || matchFeature;
        });
    }

    // Sắp xếp
    if (currentSortOption === 'price-asc') {
        result.sort((a, b) => a.rawPrice - b.rawPrice);
    } else if (currentSortOption === 'price-desc') {
        result.sort((a, b) => b.rawPrice - a.rawPrice);
    } else if (currentSortOption === 'name-asc') {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    // TRUYỀN DỮ LIỆU ĐÃ XỬ LÝ VÀO HÀM RENDER ĐỂ TÁI TẠO GIAO DIỆN BẰNG VÒNG LẶP
    renderProductList(result);
}

/**
 * Đặt lại toàn bộ bộ lọc về trạng thái ban đầu
 */
function resetProductFilters() {
    currentCategoryFilter = 'all';
    currentSearchKeyword = '';
    currentSortOption = 'default';

    const searchInput = document.getElementById('productSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const sortSelect = document.getElementById('productSortSelect');
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    if (sortSelect) sortSelect.value = 'default';

    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-category') === 'all') {
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        }
    });

    renderProductList(PRODUCTS_DATA);
}

/**
 * Xử lý khi người dùng nhấp nút "Mua ngay" trên một sản phẩm
 * @param {string} productId - Mã định danh của sản phẩm
 */
function handleBuyProduct(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    // Thêm vào giỏ hàng
    const existingItem = userCart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        userCart.push({
            ...product,
            quantity: 1
        });
    }

    // Cập nhật giao diện giỏ hàng và badge số lượng
    updateCartUI();

    // Hiển thị Toast thông báo tương tác thông minh
    showCartActionToast(product);
}

/**
 * Hiển thị Toast phản hồi tương tác khi mua sản phẩm
 */
function showCartActionToast(product) {
    const toast = document.getElementById('cartActionToast');
    const toastText = document.getElementById('cartToastText');
    const closeBtn = document.getElementById('cartToastClose');

    if (toast && toastText) {
        toastText.textContent = `Đã thêm "${product.name}" (${product.price}) vào giỏ hàng!`;
        toast.classList.add('show');

        if (cartToastTimer) clearTimeout(cartToastTimer);
        cartToastTimer = setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);

        if (closeBtn) {
            closeBtn.onclick = () => toast.classList.remove('show');
        }
    }
}

/**
 * Cập nhật số lượng và giao diện Giỏ hàng
 */
function updateCartUI() {
    const totalCount = userCart.reduce((sum, item) => sum + item.quantity, 0);
    const navCartCount = document.getElementById('navCartCount');
    if (navCartCount) {
        navCartCount.textContent = totalCount;
        navCartCount.style.transform = 'scale(1.3)';
        setTimeout(() => navCartCount.style.transform = 'scale(1)', 250);
    }

    renderCartModalItems();
}

/**
 * Render danh sách sản phẩm trong Modal Giỏ hàng bằng vòng lặp
 */
function renderCartModalItems() {
    const itemsContainer = document.getElementById('cartModalItems');
    const totalPriceElement = document.getElementById('cartTotalPrice');
    if (!itemsContainer) return;

    if (userCart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="cart-empty-msg">
                <i class="fa-solid fa-cart-arrow-down"></i>
                <p>Giỏ hàng công nghệ của bạn đang trống.</p>
                <span style="font-size: 0.85rem; color: var(--color-primary);">Hãy chọn mua các thiết bị AI ở danh sách phía trên!</span>
            </div>
        `;
        if (totalPriceElement) totalPriceElement.textContent = '0₫';
        return;
    }

    let itemsHtml = '';
    let grandTotal = 0;

    userCart.forEach(item => {
        grandTotal += item.rawPrice * item.quantity;
        itemsHtml += `
            <div class="cart-modal-item">
                <div class="cart-item-info">
                    <div class="cart-item-icon">
                        <i class="${item.icon}"></i>
                    </div>
                    <div>
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-category">${item.category} &times; ${item.quantity}</div>
                    </div>
                </div>
                <div class="cart-item-action">
                    <span class="cart-item-price">${(item.rawPrice * item.quantity).toLocaleString('vi-VN')}₫</span>
                    <button type="button" class="cart-item-remove" onclick="removeCartItem('${item.id}')" title="Xóa thiết bị">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
    });

    itemsContainer.innerHTML = itemsHtml;
    if (totalPriceElement) {
        totalPriceElement.textContent = `${grandTotal.toLocaleString('vi-VN')}₫`;
    }
}

/**
 * Xóa 1 mặt hàng khỏi giỏ
 */
function removeCartItem(productId) {
    userCart = userCart.filter(item => item.id !== productId);
    updateCartUI();
}

/**
 * Xóa toàn bộ giỏ hàng
 */
function clearAllCart() {
    userCart = [];
    updateCartUI();
}

/**
 * Khởi tạo các sự kiện mở/đóng Modal Giỏ hàng
 */
function initCartEvents() {
    const navCartBtn = document.getElementById('navCartBtn');
    const cartModalBackdrop = document.getElementById('cartModalBackdrop');
    const cartModalClose = document.getElementById('cartModalClose');
    const cartClearBtn = document.getElementById('cartClearBtn');
    const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');

    if (navCartBtn && cartModalBackdrop) {
        navCartBtn.addEventListener('click', () => {
            renderCartModalItems();
            cartModalBackdrop.classList.add('is-open');
            cartModalBackdrop.setAttribute('aria-hidden', 'false');
        });
    }

    if (cartModalClose && cartModalBackdrop) {
        cartModalClose.addEventListener('click', () => {
            cartModalBackdrop.classList.remove('is-open');
            cartModalBackdrop.setAttribute('aria-hidden', 'true');
        });
    }

    if (cartModalBackdrop) {
        cartModalBackdrop.addEventListener('click', (e) => {
            if (e.target === cartModalBackdrop) {
                cartModalBackdrop.classList.remove('is-open');
                cartModalBackdrop.setAttribute('aria-hidden', 'true');
            }
        });
    }

    if (cartClearBtn) {
        cartClearBtn.addEventListener('click', () => {
            clearAllCart();
        });
    }

    if (cartCheckoutBtn) {
        cartCheckoutBtn.addEventListener('click', () => {
            if (userCart.length === 0) {
                alert('Giỏ hàng đang trống! Vui lòng chọn ít nhất một thiết bị công nghệ trước khi đặt hàng.');
                return;
            }
            alert(`Cảm ơn bạn! Đơn hàng gồm ${userCart.length} loại thiết bị của bạn đã được ghi nhận vào hệ sinh thái NexTech.io!`);
            clearAllCart();
            if (cartModalBackdrop) {
                cartModalBackdrop.classList.remove('is-open');
                cartModalBackdrop.setAttribute('aria-hidden', 'true');
            }
        });
    }
}

/**
 * ==============================================================================
 * BÀI TẬP BUỔI 10 - HOẠT ĐỘNG 2: "LIGHT SWITCH" - BẬT/TẮT BÓNG ĐÈN (45 PHÚT)
 * Sinh viên: Lê Cao Duy Khang - MSSV: 125000847
 * 
 * YÊU CẦU ĐỀ BÀI:
 * 1. Nút bấm có ID 'toggle-btn'
 * 2. Hình ảnh cái đèn có ID 'bulb-img'
 * 3. Khi click vào nút 'toggle-btn':
 *    - Đổi hình ảnh từ "đèn tắt" sang "đèn sáng" bằng cách thay đổi thuộc tính src.
 *    - Đổi màu nền của body từ trắng sang đen và ngược lại (Dark/Light mode).
 * ==============================================================================
 */
function initLightSwitch() {
    const toggleBtn = document.getElementById('toggle-btn');
    const bulbImg = document.getElementById('bulb-img');
    const bulbStatusBadge = document.getElementById('bulbStatusBadge');
    const bulbBtnText = document.getElementById('bulbBtnText');
    const bulbBtnIcon = document.getElementById('bulbBtnIcon');
    const headerThemeBtn = document.getElementById('headerThemeBtn');

    // Nếu không tìm thấy phần tử thì thoát an toàn
    if (!toggleBtn || !bulbImg) return;

    // Biến trạng thái: false = đèn tắt (nền tối), true = đèn bật (nền sáng)
    let isLightOn = false;

    // Hàm tạo âm thanh công tắc nhẹ nhàng
    function playSwitchSound(isOn) {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const audioCtx = new AudioContext();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(isOn ? 880 : 440, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.08);
        } catch (err) {
            // Trình duyệt chặn hoặc không hỗ trợ âm thanh tự động
        }
    }

    /**
     * Logic cốt lõi: Hoán đổi trạng thái đèn và nền body
     */
    function toggleLightState() {
        isLightOn = !isLightOn;

        // 1. THAY ĐỔI THUỘC TÍNH src CỦA HÌNH ẢNH CÁI ĐÈN (Yêu cầu đề bài)
        if (isLightOn) {
            bulbImg.src = 'assets/bulb-on.svg';
            bulbImg.alt = 'Bóng đèn lượng tử đang bật sáng';
        } else {
            bulbImg.src = 'assets/bulb-off.svg';
            bulbImg.alt = 'Bóng đèn đang tắt';
        }

        // 2. THAY ĐỔI MÀU NỀN CỦA BODY TỪ ĐEN SANG TRẮNG VÀ NGƯỢC LẠI (Prompt mẫu)
        document.body.classList.toggle('light-mode', isLightOn);

        // 3. Cập nhật nhãn và icon trên nút bấm có ID 'toggle-btn'
        if (bulbBtnText) {
            bulbBtnText.textContent = isLightOn ? 'Tắt Đèn (Chuyển Dark Mode)' : 'Bật Đèn (Chuyển Light Mode)';
        }
        if (bulbBtnIcon) {
            bulbBtnIcon.className = isLightOn ? 'fa-solid fa-moon' : 'fa-solid fa-lightbulb';
        }

        // 4. Cập nhật Badge hiển thị trạng thái
        if (bulbStatusBadge) {
            if (isLightOn) {
                bulbStatusBadge.innerHTML = '<i class="fa-solid fa-circle-check"></i> Đèn Đang BẬT &bull; Giao Diện Sáng (Light)';
                bulbStatusBadge.className = 'bulb-status-badge is-on';
            } else {
                bulbStatusBadge.innerHTML = '<i class="fa-solid fa-power-off"></i> Đèn Đang TẮT &bull; Giao Diện Tối (Dark)';
                bulbStatusBadge.className = 'bulb-status-badge is-off';
            }
        }

        // 5. Đồng bộ với nút chuyển nhanh trên Header (nếu có)
        if (headerThemeBtn) {
            headerThemeBtn.innerHTML = isLightOn ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-lightbulb"></i>';
            headerThemeBtn.title = isLightOn ? 'Đang bật đèn (Nhấp để tắt sang Dark Mode)' : 'Đang tắt đèn (Nhấp để bật sang Light Mode)';
        }

        // Phát âm thanh công tắc
        playSwitchSound(isLightOn);
    }

    // Gắn sự kiện click vào nút #toggle-btn (Theo đúng đề bài)
    toggleBtn.addEventListener('click', toggleLightState);

    // Cho phép nhấp trực tiếp vào bóng đèn để bật/tắt (tăng tính tương tác trực quan)
    bulbImg.addEventListener('click', toggleLightState);

    // Gắn sự kiện cho nút bật tắt nhanh trên header
    if (headerThemeBtn) {
        headerThemeBtn.addEventListener('click', toggleLightState);
    }
}

/**
 * ==============================================================================
 * BÀI TẬP BUỔI 10 - HOẠT ĐỘNG 3: "LIVE INPUT" - PHẢN HỒI TỨC THÌ (30 PHÚT)
 * Sinh viên: Lê Cao Duy Khang - MSSV: 125000847
 * 
 * YÊU CẦU ĐỀ BÀI:
 * 1. Hướng dẫn: Tạo một ô <input>. Khi người dùng gõ chữ, nội dung ngay lập tức
 *    xuất hiện ở thẻ <span> bên cạnh.
 * 2. Prompt mẫu: "Sử dụng sự kiện 'input' trong JavaScript để lấy giá trị từ một
 *    ô text và hiển thị nó ngay lập tức vào một thẻ h2 bên dưới."
 * ==============================================================================
 */
function initLiveInput() {
    const inputField = document.getElementById('mainLiveInput');
    const liveSpan   = document.getElementById('mainLiveSpan');
    const liveH2     = document.getElementById('mainLiveHeading');
    const charBadge  = document.getElementById('mainLiveCharCount');
    const clearBtn   = document.getElementById('mainLiveClearBtn');

    if (!inputField || !liveSpan || !liveH2) return;

    // Hàm cập nhật dữ liệu phản hồi tức thì
    function updateLivePreview() {
        const rawValue = inputField.value;
        const trimmed = rawValue.trim();

        // 1. Phản hồi tức thì lên thẻ <span> bên cạnh (Theo Hướng dẫn)
        if (trimmed !== '') {
            liveSpan.textContent = rawValue;
        } else {
            liveSpan.textContent = '(chưa nhập)';
        }

        // 2. Phản hồi tức thì lên thẻ <h2> bên dưới (Theo Prompt mẫu)
        if (trimmed !== '') {
            liveH2.textContent = rawValue;
            liveH2.classList.remove('empty');
        } else {
            liveH2.textContent = 'Nội dung bạn nhập sẽ xuất hiện ngay lập tức tại đây...';
            liveH2.classList.add('empty');
        }

        // 3. Cập nhật số đếm ký tự
        if (charBadge) {
            charBadge.textContent = `${rawValue.length} ký tự`;
        }
    }

    // LẮNG NGHE SỰ KIỆN 'input' - kích hoạt ngay khi gõ từng phím hoặc dán chữ
    inputField.addEventListener('input', updateLivePreview);

    // Xử lý nút xóa nhanh
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            inputField.value = '';
            updateLivePreview();
            inputField.focus();
        });
    }
}
