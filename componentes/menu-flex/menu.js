export function renderMenu(selector = '#menu-root', { basePath = '' } = {}) {
    const container = document.querySelector(selector);
    if (!container) return;

    const html = `
    <header>
        <nav>
            <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="menu-panel">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div class="menu-logo">
                <a href="${basePath}index.html"><img src="${basePath}componentes/menu-flex/logo.png" alt="Logo"></a>
            </div>

            <div class="menu-spacer" aria-hidden="true"></div>

            <div class="menu-panel" id="menu-panel">
                <ul class="menu-links">
                    <li><a href="${basePath}paginas/nosotros.html">Nosotros</a></li>
                    <li><a href="${basePath}paginas/adopta.html">Adoptá</a></li>
                    <li><a href="${basePath}paginas/voluntarios.html">Voluntarios</a></li>
                    <li><a href="${basePath}paginas/contacto.html">Contacto</a></li>
                </ul>
            </div>

            <div class="menu-cta">
                <a class="donate-btn" href="${basePath}paginas/donar.html">Doná ahora</a>
            </div>
        </nav>
    </header>
    `;

    container.innerHTML = html;

    const toggle = container.querySelector('.menu-toggle');
    const panel = container.querySelector('#menu-panel');

    if (toggle && panel) {
        toggle.addEventListener('click', () => {
            const isOpen = container.classList.toggle('menu-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const basePath = window.location.pathname.includes('/paginas/') ? '../' : '';
        renderMenu('#menu-root', { basePath });
    });
} else {
    const basePath = window.location.pathname.includes('/paginas/') ? '../' : '';
    renderMenu('#menu-root', { basePath });
}
