function buildFooterTemplate(options = {}) {
	const year = options.year ?? new Date().getFullYear();
	const brand = options.brand ?? "axelfischbein@gmail.com";

	return `
		<footer class="site-footer" aria-label="Pie de pagina">
			<div class="footer-bottom">
				<div class="footer-social" aria-label="Redes sociales">
					<a href="https://github.com/AxelYairFischbein" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
						<img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" alt="GitHub">
					</a>
					<a href="https://www.linkedin.com/in/axelfischbein/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
						<img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn">
					</a>
					<a href="https://www.facebook.com/axel.fisch14" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
						<img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="Facebook">
					</a>
				</div>

				<p class="footer-copy">&copy; ${year} ${brand}</p>

				<div class="footer-stores" aria-label="Tiendas de aplicaciones">
					<a href="card.html">Contacto</a>
				</div>
			</div>
		</footer>
	`;
}

export function renderFooter(containerId, options = {}) {
	const container = document.getElementById(containerId);

	if (!container) {
		return;
	}

	container.innerHTML = buildFooterTemplate(options);
	document.body.classList.add("has-footer-bar");
}
