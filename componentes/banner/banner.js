const mimeTypes = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
};

function mimeTypeOf(src) {
    const ext = src.split('.').pop().toLowerCase();
    return mimeTypes[ext] ?? '';
}

export function renderBanner(selector = '#banner-root', { image = '', title = '' } = {}) {
    const container = document.querySelector(selector);
    if (!container) return;

    container.innerHTML = `
        <section class="hero-banner">
            <picture>
                <source srcset="${image}" type="${mimeTypeOf(image)}">
                <img src="${image}" alt="" class="hero-banner-img">
            </picture>
            <div class="hero-banner-text">
                <h2>${title}</h2>
            </div>
        </section>
    `;
}
