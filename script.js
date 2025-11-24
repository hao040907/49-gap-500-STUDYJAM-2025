function openTab(tabId) {
    // 1. Ẩn tất cả các nội dung tab
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // 2. Xóa trạng thái 'active' khỏi tất cả các nút trên menu
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // 3. Hiển thị nội dung tab được chọn
    const selectedContent = document.getElementById(tabId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // 4. Thêm trạng thái 'active' cho nút vừa bấm
    // Tìm nút có onclick chứa tabId tương ứng để active (cách đơn giản)
    // Trong thực tế có thể dùng event.currentTarget, nhưng cách này dễ hiểu cho người mới.
    tabs.forEach(tab => {
        if (tab.getAttribute('onclick').includes(tabId)) {
            tab.classList.add('active');
        }
    });
}