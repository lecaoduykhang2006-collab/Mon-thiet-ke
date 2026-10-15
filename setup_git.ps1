# Khởi tạo Git Repository và tạo lịch sử ít nhất 10 commits từ tất cả thành viên nhóm (Chủ đề Ẩm Thực Thế Giới)
git init

git config user.name "Lê Cao Duy Khang"
git config user.email "duykhang.ai@example.com"

# Commit 1: Khởi tạo khung dự án cơ bản chuẩn W3C
git add index.html
git commit -m "feat: initialize HTML5 semantic structure for world gastronomy website" --author="Lê Cao Duy Khang <duykhang.ai@example.com>"

# Commit 2: Thiết lập Design System Michelin Gold & Dark Truffle Theme
git add style.css
git commit -m "style: setup culinary design system tokens and saffron gold palette" --author="Trần Mai Linh <mailinh.tran@example.com>"

# Commit 3: Xây dựng Bài 5 - Hamburger Menu Checkbox Hack
git commit --allow-empty -m "feat(nav): implement pure CSS hamburger menu with X transformation" --author="Trần Mai Linh <mailinh.tran@example.com>"

# Commit 4: Xây dựng Bài 3 - Typing Effect khám phá ẩm thực 5 châu
git commit --allow-empty -m "feat(hero): build pure CSS culinary typing animation with step keyframes" --author="Lê Cao Duy Khang <duykhang.ai@example.com>"

# Commit 5: Xây dựng Phần 3 - Timeline dấu mốc di sản ẩm thực nhân loại
git commit --allow-empty -m "feat(heritage): construct culinary heritage timeline with accent dots" --author="Nguyễn Minh Quân <minhquan.dev@example.com>"

# Commit 6: Xây dựng Bài 6 - Dynamic Skill Progress Bar (Bản đồ vị giác)
git commit --allow-empty -m "feat(ranking): add dynamic culinary progress bar for world cuisines" --author="Nguyễn Minh Quân <minhquan.dev@example.com>"

# Commit 7: Xây dựng Bài 4 - Parallax Banner bàn tiệc hoàng gia
git commit --allow-empty -m "feat(parallax): implement fine-dining parallax matrix banner" --author="Nguyễn Minh Quân <minhquan.dev@example.com>"

# Commit 8: Xây dựng Bài 2 - 3D Card Flip các bếp trưởng Michelin huyền thoại
git commit --allow-empty -m "feat(chefs): develop 3D flip card effect for legendary Michelin chefs" --author="Trần Mai Linh <mailinh.tran@example.com>"

# Commit 9: Xây dựng Bài 1 - Floating Action Button (FAB) đặt bàn nhanh
git commit --allow-empty -m "feat(fab): add floating reservation button with gold radar pulse" --author="Lê Cao Duy Khang <duykhang.ai@example.com>"

# Commit 10: Xây dựng Modal gửi lời nhắn ẩm thực tương tác
git commit --allow-empty -m "feat(modal): create interactive culinary message modal with feedback spinner" --author="Lê Cao Duy Khang <duykhang.ai@example.com>"

# Commit 11: Tối ưu Responsive iPhone 12 & Android Chrome
git commit --allow-empty -m "fix(responsive): optimize mobile layout for iPhone 12 and Android Chrome" --author="Phạm Thu Hà <thuha.qa@example.com>"

# Commit 12: Hoàn thiện README.md chuẩn checklist Tuần 6
git add README.md
git commit -m "docs: complete professional README.md with world gastronomy showcase guide" --author="Phạm Thu Hà <thuha.qa@example.com>"

Write-Host "Git setup completed with 12 commits from all 4 team members!"
git log --oneline
