/**
 * AI WORKSHOP 2026 - FORM VALIDATION & FETCH API
 * Bao gồm các bước:
 * Bước 1: Quản lý Form & Bắt sự kiện
 * Bước 2: Kiểm tra tính hợp lệ dữ liệu (Client-side Validation)
 * Bước 3 & 4: Gửi dữ liệu qua Fetch API đến Google Apps Script
 */

// ==========================================================================
// 1. KHAI BÁO CÁC PHẦN TỬ DOM (DOM ELEMENTS)
// ==========================================================================
const form = document.getElementById('registrationForm');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const ticketTypeSelect = document.getElementById('ticketType');

const submitBtn = document.getElementById('submitBtn');
const btnText = submitBtn.querySelector('.btn-text');
const btnSpinner = document.getElementById('btnSpinner');

const successCard = document.getElementById('successCard');
const registeredName = document.getElementById('registeredName');
const registeredEmail = document.getElementById('registeredEmail');
const registeredPhone = document.getElementById('registeredPhone');
const registeredTicket = document.getElementById('registeredTicket');
const registerAnotherBtn = document.getElementById('registerAnotherBtn');

const configToggle = document.getElementById('configToggle');
const configContent = document.getElementById('configContent');
const scriptUrlInput = document.getElementById('scriptUrlInput');

// ==========================================================================
// 2. KHỞI TẠO BỘ LẮNG NGHE SỰ KIỆN (INITIALIZATION)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    setupValidationListeners();
    setupConfigToggle();
});

function setupConfigToggle() {
    configToggle.addEventListener('click', () => {
        const isVisible = configContent.style.display === 'block';
        configContent.style.display = isVisible ? 'none' : 'block';
    });
}

// ==========================================================================
// 3. BƯỚC 2: KIỂM TRA DỮ LIỆU (VALIDATION LOGIC)
// ==========================================================================
/**
 * Biểu thức chính quy (Regex) kiểm tra định dạng
 */
const REGEX = {
    // Kiểm tra email chuẩn quốc tế (@gmail.com, @edu.vn...)
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    // Kiểm tra số điện thoại Việt Nam: bắt đầu bằng 0 và có đúng 10 chữ số
    PHONE: /^0\d{9}$/
};

/**
 * Hiển thị thông báo lỗi màu đỏ ngay dưới ô Input
 */
function setError(groupId, errorId, message) {
    const group = document.getElementById(groupId);
    const errorEl = document.getElementById(errorId);
    group.classList.add('has-error');
    errorEl.textContent = message;
}

/**
 * Xóa thông báo lỗi khi người dùng sửa lại thông tin
 */
function clearError(groupId, errorId) {
    const group = document.getElementById(groupId);
    const errorEl = document.getElementById(errorId);
    group.classList.remove('has-error');
    errorEl.textContent = '';
}

/**
 * Kiểm tra toàn bộ form trước khi gửi
 * @returns {boolean} true nếu toàn bộ dữ liệu hợp lệ
 */
function validateForm() {
    let isValid = true;

    // 1. Kiểm tra Họ và Tên (Không để trống, ít nhất 3 ký tự)
    const nameVal = fullnameInput.value.trim();
    if (!nameVal) {
        setError('group-fullname', 'error-fullname', 'Vui lòng nhập Họ và Tên.');
        isValid = false;
    } else if (nameVal.length < 3) {
        setError('group-fullname', 'error-fullname', 'Họ và Tên phải có ít nhất 3 ký tự.');
        isValid = false;
    } else {
        clearError('group-fullname', 'error-fullname');
    }

    // 2. Kiểm tra Email (Không để trống & đúng định dạng regex)
    const emailVal = emailInput.value.trim();
    if (!emailVal) {
        setError('group-email', 'error-email', 'Vui lòng nhập địa chỉ Email.');
        isValid = false;
    } else if (!REGEX.EMAIL.test(emailVal)) {
        setError('group-email', 'error-email', 'Email không đúng định dạng (ví dụ: tenban@gmail.com).');
        isValid = false;
    } else {
        clearError('group-email', 'error-email');
    }

    // 3. Kiểm tra Số điện thoại (10 chữ số bắt đầu bằng 0)
    const phoneVal = phoneInput.value.trim();
    if (!phoneVal) {
        setError('group-phone', 'error-phone', 'Vui lòng nhập Số điện thoại.');
        isValid = false;
    } else if (!REGEX.PHONE.test(phoneVal)) {
        setError('group-phone', 'error-phone', 'Số điện thoại phải gồm đúng 10 chữ số và bắt đầu bằng số 0.');
        isValid = false;
    } else {
        clearError('group-phone', 'error-phone');
    }

    // 4. Kiểm tra Loại vé
    const ticketVal = ticketTypeSelect.value;
    if (!ticketVal) {
        setError('group-ticket', 'error-ticket', 'Vui lòng chọn loại vé tham gia.');
        isValid = false;
    } else {
        clearError('group-ticket', 'error-ticket');
    }

    return isValid;
}

/**
 * Lắng nghe sự kiện người dùng gõ phím để xóa lỗi tức thì (Real-time UX)
 */
function setupValidationListeners() {
    fullnameInput.addEventListener('input', () => clearError('group-fullname', 'error-fullname'));
    emailInput.addEventListener('input', () => clearError('group-email', 'error-email'));
    phoneInput.addEventListener('input', () => clearError('group-phone', 'error-phone'));
    ticketTypeSelect.addEventListener('change', () => clearError('group-ticket', 'error-ticket'));
}

// ==========================================================================
// 4. BƯỚC 4: GỬI DỮ LIỆU BẰNG FETCH API ĐẾN GOOGLE SHEETS
// ==========================================================================
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Kiểm tra validation
    if (!validateForm()) {
        return;
    }

    // Thu thập dữ liệu từ Form
    const formData = {
        Name: fullnameInput.value.trim(),
        Email: emailInput.value.trim(),
        Phone: phoneInput.value.trim(),
        TicketType: ticketTypeSelect.value,
        Timestamp: new Date().toLocaleString('vi-VN')
    };

    // Trạng thái nút khi đang gửi (Disabled & Hiển thị "Đang xử lý...")
    setLoadingState(true);

    const scriptUrl = scriptUrlInput.value.trim();

    try {
        if (scriptUrl) {
            // Gửi thật đến Google Apps Script Web App
            // Lưu ý kỹ thuật: Google Apps Script không hỗ trợ CORS Preflight (OPTIONS),
            // nên gửi dưới dạng FormData hoặc mode: 'no-cors' là giải pháp tối ưu nhất cho web client
            const formPayload = new FormData();
            formPayload.append('Name', formData.Name);
            formPayload.append('Email', formData.Email);
            formPayload.append('Phone', formData.Phone);
            formPayload.append('TicketType', formData.TicketType);

            await fetch(scriptUrl, {
                method: 'POST',
                body: formPayload,
                mode: 'no-cors' // Đảm bảo không bị chặn bởi chính sách CORS của Google
            });

            console.log('✅ Đã gửi dữ liệu thành công đến Google Sheets:', formData);
        } else {
            // Chế độ Giả lập (Demo Mode khi sinh viên chưa kịp deploy Script)
            console.log('ℹ️ Đang chạy Chế độ Giả lập (Demo Mode). Dữ liệu:', formData);
            await new Promise(resolve => setTimeout(resolve, 1400)); // Chờ 1.4 giây
        }

        // Hiển thị màn hình chúc mừng & xóa trắng Form
        showSuccessState(formData);

    } catch (error) {
        console.error('❌ Lỗi trong quá trình gửi:', error);
        alert('Có lỗi xảy ra khi kết nối đến hệ thống. Vui lòng kiểm tra lại đường dẫn Script hoặc kết nối mạng!');
    } finally {
        setLoadingState(false);
    }
});

/**
 * Quản lý trạng thái Loading của Nút Đăng ký
 */
function setLoadingState(isLoading) {
    if (isLoading) {
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        btnText.textContent = 'Đang xử lý dữ liệu...';
    } else {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        btnText.textContent = 'Xác Nhận Đăng Ký Ngay';
    }
}

/**
 * Hiển thị màn hình thành công và reset form
 */
function showSuccessState(data) {
    form.style.display = 'none';
    successCard.style.display = 'block';

    registeredName.textContent = data.Name;
    registeredEmail.textContent = data.Email;
    registeredPhone.textContent = data.Phone;

    const ticketLabels = {
        'Student': 'Vé Sinh Viên (Miễn phí)',
        'Standard': 'Vé Tiêu Chuẩn (199.000 VNĐ)',
        'VIP': 'Vé VIP (499.000 VNĐ)'
    };
    registeredTicket.textContent = ticketLabels[data.TicketType] || data.TicketType;

    // Reset toàn bộ ô nhập trên form
    form.reset();
}

/**
 * Nút đăng ký thêm người khác
 */
registerAnotherBtn.addEventListener('click', () => {
    successCard.style.display = 'none';
    form.style.display = 'flex';
    fullnameInput.focus();
});

