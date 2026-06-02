const images = [
    'componentes/carrousel/img/perro1.png',
    'componentes/carrousel/img/perro2.png',
    'componentes/carrousel/img/perro3.png',
];

export function renderCarrousel(selector = '#carrousel-root') {
    const container = document.querySelector(selector);
    if (!container) return;

    const html = `
    <div class="carrousel-wrapper">
        <div class="carrousel">
            <button class="carrousel-arrow carrousel-prev" aria-label="Anterior"></button>
            <div class="carrousel-track">
                ${images.map((src, i) => `
                    <div class="carrousel-slide${i === 0 ? ' active' : ''}">
                        <picture>
                            <source srcset="${src}" type="image/png">
                            <img src="${src}" alt="Slide ${i + 1}">
                        </picture>
                    </div>
                `).join('')}
            </div>
            <button class="carrousel-arrow carrousel-next" aria-label="Siguiente"></button>
        </div>
        <div class="carrousel-dots">
            ${images.map((_, i) => `
                <button class="carrousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Ir a slide ${i + 1}"></button>
            `).join('')}
        </div>
    </div>
    `;

    container.innerHTML = html;

    let current = 0;
    const slides = container.querySelectorAll('.carrousel-slide');
    const dots = container.querySelectorAll('.carrousel-dot');

    let timer;

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => goTo(current + 1), 7000);
    }

    function goTo(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    function goToManual(index) {
        goTo(index);
        startTimer();
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => goToManual(Number(dot.dataset.index)));
    });

    container.querySelector('.carrousel-prev').addEventListener('click', () => goToManual(current - 1));
    container.querySelector('.carrousel-next').addEventListener('click', () => goToManual(current + 1));

    startTimer();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => renderCarrousel());
} else {
    renderCarrousel();
}
