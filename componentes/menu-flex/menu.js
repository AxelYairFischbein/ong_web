export function renderMenu(selector = '#menu-root') {
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
                <a href="#"><img src="componentes/menu-flex/logo.png" alt="Logo"></a>
            </div>

            <div class="menu-spacer" aria-hidden="true"></div>

            <div class="menu-panel" id="menu-panel">
                <ul class="menu-links">
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Adoptá</a></li>
                    <li><a href="#">Voluntarios</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>

            <div class="menu-cta">
                <a class="donate-btn" href="#">Doná ahora</a>
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

// Auto-init if script is loaded directly and DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => renderMenu());
} else {
    renderMenu();
}
