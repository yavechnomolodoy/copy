// Создание звездного неба
function createStarfield() {
    const container = document.getElementById('starsContainer');
    const starCount = 200;
    const cometCount = 3;

    // Создаем звезды
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random();
        
        if (size < 0.6) {
            star.className = 'star small';
        } else if (size < 0.9) {
            star.className = 'star medium';
        } else {
            star.className = 'star large';
        }

        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 8 + 's';
        
        container.appendChild(star);
    }

    // Создаем кометы
    for (let i = 0; i < cometCount; i++) {
        createComet();
    }

    setInterval(createComet, 8000);
}

// Создание кометы
function createComet() {
    const container = document.getElementById('starsContainer');
    const comet = document.createElement('div');
    comet.className = 'comet';
    
    const startX = -100;
    const startY = Math.random() * 100 - 50;
    
    comet.style.left = startX + 'px';
    comet.style.top = startY + 'vh';
    
    const duration = 0.1 + Math.random() * 7;
    comet.style.animation = `cometFly ${duration}s linear`;
    
    container.appendChild(comet);
    
    setTimeout(() => {
        if (comet.parentNode) {
            comet.parentNode.removeChild(comet);
        }
    }, duration * 1000);
}

// Запускаем создание звезд при загрузке
document.addEventListener('DOMContentLoaded', createStarfield);
