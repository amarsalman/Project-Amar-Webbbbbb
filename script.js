// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة المتغيرات
    const navBtns = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    
    // تعيين السنة الحالية في التذييل
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // دالة للتنقل بين الصفحات
    function navigateToPage(pageId) {
        // التحقق من وجود الصفحة
        if (!document.getElementById(pageId)) {
            pageId = 'home';
        }
        
        //
