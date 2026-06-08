function buildFooterTemplate(options = {}) {
	const year = options.year ?? new Date().getFullYear();
	const brand = options.brand ?? "patitas de belgrano";

	return `
		<footer class="site-footer" aria-label="Pie de pagina">
			<div class="footer-bottom">
				<div class="footer-social" aria-label="Redes sociales">
					<a href="https://www.instagram.com/patitasdebelgrano/?hl=es-la" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
						<img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram">
					</a>
					<a href="https://www.facebook.com/profile.php?id=100068774767241" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
						<img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="Facebook">
					</a>
					<a href="#" onclick="event.preventDefault(); alert('Todavía no tenemos cuenta de Twitter/X.')" aria-label="X (Twitter)">
						<img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg" alt="X (Twitter)">
					</a>
				</div>

				<p class="footer-copy">&copy; ${year} ${brand}</p>

				<div class="footer-stores" aria-label="Tiendas de aplicaciones">
					<a href="contacto.html">Contacto</a>
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
