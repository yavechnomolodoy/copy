// Анимация появления секций при прокрутке
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Запускаем прогресс-бары когда секция видна
                if (entry.target.id === 'skills') {
                    setTimeout(animateProgressBars, 500);
                }
                
                // Запускаем счетчики когда секция видна
                if (entry.target.id === 'stats') {
                    setTimeout(animateCounters, 500);
                }
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
}

// Анимация прогресс-баров
function animateProgressBars() {
    document.querySelectorAll('.skill-level').forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

// Анимация счетчиков
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            }
        };
        updateCounter();
    });
}

// Инициализация анимаций при загрузке
document.addEventListener('DOMContentLoaded', initScrollAnimations);
