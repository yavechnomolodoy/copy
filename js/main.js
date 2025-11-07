// Функция копирования email
function copyEmail() {
    const email = 'yavechnomolodoy@gmail.com';
    
    const textarea = document.createElement('textarea');
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyNotification();
        }
    } catch (err) {
        navigator.clipboard.writeText(email).then(() => {
            showCopyNotification();
        });
    }
    
    document.body.removeChild(textarea);
}

// Показ уведомления о копировании
function showCopyNotification() {
    const notification = document.getElementById('copyNotification');
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Основная инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Копирование email
    document.getElementById('emailLink').addEventListener('click', copyEmail);

    // Тёмная/светлая тема
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeToggle.textContent = document.body.classList.contains('light-theme') ? '🌞' : '🌙';
        themeToggle.title = document.body.classList.contains('light-theme') ? 'Тёмная тема' : 'Светлая тема';
    });

    // Мобильное меню
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('active');
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // Закрытие мобильного меню при клике на ссылку
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
