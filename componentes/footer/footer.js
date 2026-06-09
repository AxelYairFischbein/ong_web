function buildFooterTemplate({ year, brand, basePath }) {
	return `
		<footer class="site-footer" aria-label="Pie de pagina">
			<div class="footer-main">

				<div class="footer-col footer-col--brand">
					<div class="footer-brand-text">
						<p class="footer-brand-name">${brand}</p>
						<p class="footer-tagline">Rescatamos, cuidamos y damos hogar</p>
					</div>
					<div class="footer-social-row" aria-label="Redes sociales">
						<a href="https://www.instagram.com/patitasdebelgrano/?hl=es-la" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="footer-social-icon footer-social-icon--filled">
							<img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram">
						</a>
						<a href="https://www.facebook.com/profile.php?id=100068774767241" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="footer-social-icon">
							<img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="Facebook">
						</a>
						<a href="#" onclick="event.preventDefault(); alert('Todavía no tenemos cuenta de Twitter/X.')" aria-label="X (Twitter)" class="footer-social-icon">
							<img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg" alt="X (Twitter)">
						</a>
					</div>
					<p class="footer-follow-label">Seguinos</p>
				</div>

				<div class="footer-col footer-col--nav">
					<nav class="footer-nav-links" aria-label="Navegación del footer">
						<a href="${basePath}index.html">Inicio</a>
						<a href="${basePath}paginas/nosotros.html">Nosotros</a>
						<a href="${basePath}paginas/adopta.html">Adoptá</a>
						<a href="${basePath}paginas/donar.html">Donar</a>
						<a href="${basePath}paginas/proyectos.html">Proyectos</a>
						<a href="${basePath}paginas/voluntarios.html">Voluntarios</a>
					</nav>
					<div class="footer-about-block">
						<h3 class="footer-about-title">Sobre nosotros</h3>
						<p class="footer-about-text">Somos un equipo de personas impulsadas por la empatía hacia los animales, trabajando para rescatarlos, cuidarlos y encontrarles un hogar lleno de amor en Belgrano.</p>
					</div>
				</div>

				<div class="footer-col footer-col--contact">
					<div class="footer-contact-top">
						<div class="footer-contact-item">
							<span class="footer-contact-label">Instagram:</span>
							<a href="https://www.instagram.com/patitasdebelgrano/?hl=es-la" target="_blank" rel="noopener noreferrer">@patitasdebelgrano</a>
						</div>
						<a href="${basePath}paginas/contacto.html" class="footer-contact-btn">
							Contactanos!
						</a>
					</div>
					<p class="footer-newsletter-label">Inserta tu email para recibir novedades!</p>
					<div class="footer-newsletter">
						<input type="email" class="footer-newsletter-input" placeholder="Tu email" aria-label="Email para novedades">
						<button class="footer-newsletter-btn" type="button" aria-label="Suscribirse">&#8594;</button>
					</div>
				</div>

			</div>

			<div class="footer-bar">
				<p>&copy; ${year} ${brand}. Todos los derechos reservados.</p>
			</div>
		</footer>
	`;
}

export function renderFooter(containerId, options = {}) {
	const container = document.getElementById(containerId);
	if (!container) return;

	const basePath = window.location.pathname.includes('/paginas/') ? '../' : '';
	const year = options.year ?? new Date().getFullYear();
	const brand = options.brand ?? 'Patitas de Belgrano';

	container.innerHTML = buildFooterTemplate({ year, brand, basePath });
	document.body.classList.add('has-footer-bar');
}
