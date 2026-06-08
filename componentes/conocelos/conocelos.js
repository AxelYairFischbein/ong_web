const PAGE_SIZE = 6;

export function renderConocelos(selector = '#conocelos-root', { perfiles = [], title = 'Conocelos' } = {}) {
    const container = document.querySelector(selector);
    if (!container) return;

    const totalPages = Math.max(1, Math.ceil(perfiles.length / PAGE_SIZE));
    let currentPage = 1;

    container.innerHTML = `
        <section class="conocelos">
            <h2>${title}</h2>
            <div class="conocelos-grid"></div>
            <nav class="conocelos-pagination" aria-label="Paginación de Conocelos"></nav>
        </section>

        <div class="conocelos-overlay" hidden>
            <div class="conocelos-modal" role="dialog" aria-modal="true" aria-label="Perfil de adopción">
                <button class="conocelos-modal-close" type="button" aria-label="Cerrar">&times;</button>
                <img class="conocelos-modal-img" src="" alt="">
                <div class="conocelos-modal-info">
                    <h3 class="conocelos-modal-name"></h3>
                    <h4>Edad</h4>
                    <p class="conocelos-modal-edad"></p>
                    <h4>Historia</h4>
                    <p class="conocelos-modal-historia"></p>
                    <a class="conocelos-modal-adoptar" href="contacto.html">¡Quiero adoptarlo!</a>
                </div>
            </div>
        </div>
    `;

    const grid = container.querySelector('.conocelos-grid');
    const pagination = container.querySelector('.conocelos-pagination');
    const overlay = container.querySelector('.conocelos-overlay');
    const modalImg = container.querySelector('.conocelos-modal-img');
    const modalName = container.querySelector('.conocelos-modal-name');
    const modalEdad = container.querySelector('.conocelos-modal-edad');
    const modalHistoria = container.querySelector('.conocelos-modal-historia');
    const closeBtn = container.querySelector('.conocelos-modal-close');

    function openProfile(perfil) {
        modalImg.src = perfil.foto;
        modalImg.alt = perfil.nombre;
        modalName.textContent = perfil.nombre;
        modalEdad.textContent = perfil.edad;
        modalHistoria.textContent = perfil.historia;
        overlay.hidden = false;
    }

    function closeProfile() {
        overlay.hidden = true;
    }

    function goToPage(page) {
        currentPage = Math.min(Math.max(page, 1), totalPages);
        renderGrid();
        renderPagination();
    }

    function renderGrid() {
        const start = (currentPage - 1) * PAGE_SIZE;
        const pagePerfiles = perfiles.slice(start, start + PAGE_SIZE);

        grid.innerHTML = pagePerfiles.map((perfil, index) => `
            <button class="conocelos-item" type="button" data-index="${start + index}">
                <img src="${perfil.foto}" alt="${perfil.nombre}">
                <span>${perfil.nombre}</span>
            </button>
        `).join('');

        grid.querySelectorAll('.conocelos-item').forEach(item => {
            item.addEventListener('click', () => openProfile(perfiles[Number(item.dataset.index)]));
        });
    }

    function renderPagination() {
        if (totalPages <= 1) {
            pagination.innerHTML = '';
            return;
        }

        const numbers = Array.from({ length: totalPages }, (_, i) => i + 1)
            .map(page => `
                <button class="conocelos-page-number${page === currentPage ? ' active' : ''}" type="button" data-page="${page}">${page}</button>
            `).join('');

        pagination.innerHTML = `
            <button class="conocelos-page-nav" type="button" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>&lt; Anterior</button>
            <span class="conocelos-page-numbers">${numbers}</span>
            <button class="conocelos-page-nav" type="button" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>Siguiente &gt;</button>
        `;

        pagination.querySelectorAll('button[data-page]').forEach(btn => {
            btn.addEventListener('click', () => goToPage(Number(btn.dataset.page)));
        });
    }

    closeBtn.addEventListener('click', closeProfile);
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) closeProfile();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !overlay.hidden) closeProfile();
    });

    renderGrid();
    renderPagination();
}
