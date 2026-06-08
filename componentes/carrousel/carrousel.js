const slides = [
    {
        src:   'componentes/carrousel/img/banner_adopta.jpg',
        alt:   'Animales en adopción',
        title: 'Dale una familia a quien más lo necesita',
        href:  'paginas/adopta.html',
    },
    {
        src:   'componentes/carrousel/img/banner_nosotros.jpg',
        alt:   'Quiénes somos',
        title: 'Conocé la historia detrás de cada rescate',
        href:  'paginas/nosotros.html',
    },
    {
        src:   'componentes/carrousel/img/banner_voluntarios.jpg',
        alt:   'Voluntarios',
        title: 'Tu tiempo puede cambiar una vida',
        href:  'paginas/voluntarios.html',
    },
    {
        src:   'componentes/carrousel/img/banner_contacto.jpg',
        alt:   'Contacto',
        title: '¿Tenés dudas? Estamos para ayudarte',
        href:  'paginas/contacto.html',
    },
    {
        src:   'paginas/img/banner_donar.jpg',
        alt:   'Donar',
        title: 'Cada donación salva una vida',
        href:  'paginas/donar.html',
    },
];

export function renderCarrousel(selector = '#carrousel-root') {
    const container = document.querySelector(selector);
    if (!container) return;

    const html = `
    <div class="carrousel-wrapper">
        <div class="carrousel">
            <button class="carrousel-arrow carrousel-prev" aria-label="Anterior"></button>
            <div class="carrousel-track">
                ${slides.map((slide, i) => `
                    <div class="carrousel-slide${i === 0 ? ' active' : ''}">
                        <picture>
                            <source srcset="${slide.src}" type="image/jpeg">
                            <img src="${slide.src}" alt="${slide.alt}">
                        </picture>
                        <div class="carrousel-caption">
                            <h1>${slide.title}</h1>
                            <a class="carrousel-caption__btn" href="${slide.href}">Ver más</a>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="carrousel-arrow carrousel-next" aria-label="Siguiente"></button>
        </div>
        <div class="carrousel-dots">
            ${slides.map((_, i) => `
                <button class="carrousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Ir a slide ${i + 1}"></button>
            `).join('')}
        </div>
    </div>
    `;

    container.innerHTML = html;

    let current = 0;
    const slideEls = container.querySelectorAll('.carrousel-slide');
    const dots = container.querySelectorAll('.carrousel-dot');

    let timer;

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => goTo(current + 1), 7000);
    }

    function goTo(index) {
        slideEls[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (index + slideEls.length) % slideEls.length;
        slideEls[current].classList.add('active');
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
