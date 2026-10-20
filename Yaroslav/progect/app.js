//
console.log('Файл app.js из папки Students/Yaroslav/progect подключился!!');
//
const slider = document.querySelector('.slider');
const track  = document.querySelector('.slider__track');
const slides = document.querySelectorAll('.slider__slide');
const btnPrev = document.querySelector('.slider__btn--prev');
const btnNext = document.querySelector('.slider__btn--next');
const dotsContainer = document.querySelector('.slider__dots');

let currentIndex = 0;
let autoPlayInterval = null;
const AUTO_PLAY_DELAY = 4000; // 4 секунды

// ─── 1. Создаём точки-индикаторы по количеству слайдов ───
slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('slider__dot');
    dot.setAttribute('aria-label', `Перейти к слайду ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.slider__dot');

// ─── 2. Переключение на конкретный слайд ───
function goToSlide(index) {
    // Зацикливание: если ушли за границы — перескакиваем на другой конец
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Сдвигаем дорожку
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Обновляем активную точку
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// ─── 3. Кнопки вперёд/назад ───
function nextSlide() { goToSlide(currentIndex + 1); }
function prevSlide() { goToSlide(currentIndex - 1); }

btnNext.addEventListener('click', () => {
    nextSlide();
    restartAutoPlay();
});

btnPrev.addEventListener('click', () => {
    prevSlide();
    restartAutoPlay();
});

// ─── 4. Автопрокрутка ───
function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Запускаем автопрокрутку
startAutoPlay();

// Пауза при наведении мыши
slider.addEventListener('mouseenter', stopAutoPlay);
slider.addEventListener('mouseleave', startAutoPlay);

// ─── 5. Свайп (мышь + тач) ───
let startX = 0;
let isDragging = false;

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function dragStart(e) {
    isDragging = true;
    startX = getPositionX(e);
    stopAutoPlay();
    track.style.transition = 'none'; // отключаем анимацию во время drag
}

function dragMove(e) {
    if (!isDragging) return;
    const currentX = getPositionX(e);
    const diff = currentX - startX;
    const offset = -currentIndex * slider.offsetWidth + diff;
    track.style.transform = `translateX(${offset}px)`;
}

function dragEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = 'transform 0.5s ease';

    const endX = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].clientX;
    const diff = endX - startX;
    const threshold = slider.offsetWidth / 4; // порог срабатывания — 25% ширины

    if (diff < -threshold) {
        nextSlide();       // свайп влево → следующий
    } else if (diff > threshold) {
        prevSlide();       // свайп вправо → предыдущий
    } else {
        goToSlide(currentIndex); // возврат на место
    }

    startAutoPlay();
}

// Мышь
slider.addEventListener('mousedown', dragStart);
slider.addEventListener('mousemove', dragMove);
slider.addEventListener('mouseup', dragEnd);
slider.addEventListener('mouseleave', dragEnd);

// Тач
slider.addEventListener('touchstart', dragStart, { passive: true });
slider.addEventListener('touchmove', dragMove, { passive: true });
slider.addEventListener('touchend', dragEnd);

// ─── 6. Управление с клавиатуры ───
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
        restartAutoPlay();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
        restartAutoPlay();
    }
});

// ─── 7. Пересчёт при изменении размера окна ───
window.addEventListener('resize', () => goToSlide(currentIndex));
