const EMAILJS_PUBLIC_KEY = '9h81J7s2w3L2538FS';
const EMAILJS_SERVICE_ID = 'service_rjgh31n';
const EMAILJS_NEWSLETTER_TEMPLATE_ID = 'template_q0utmrq';
const EMAILJS_CONTACT_TEMPLATE_ID = 'template_i1dfc84';

const WELCOME_MESSAGE = `Hola,

¡Gracias por registrarte en Patitas de Belgrano! 🐾

Tu suscripción fue realizada con éxito. A partir de ahora recibirás novedades, historias de adopción, eventos y noticias sobre nuestros perros y gatos que buscan un hogar.

Gracias por acompañarnos y ser parte de esta comunidad que ayuda a cambiar vidas.

Equipo de Patitas de Belgrano`;

async function getEmailJS() {
    const { default: emailjs } = await import('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/+esm');
    emailjs.init(EMAILJS_PUBLIC_KEY);
    return emailjs;
}

async function sendEmail(fromEmail) {
    const emailjs = await getEmailJS();
    return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_NEWSLETTER_TEMPLATE_ID, {
        to_email: fromEmail,
        from_email: 'afischbein@uade.edu.ar',
        name: fromEmail,
        time: new Date().toLocaleString('es-AR'),
        message: WELCOME_MESSAGE,
    });
}

export async function sendContactEmail({ name, to_email, title, message, ciudad, telefono }) {
    const emailjs = await getEmailJS();
    return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE_ID, {
        to_email,
        from_email: 'afischbein@uade.edu.ar',
        name,
        title,
        message,
        ciudad: ciudad || '—',
        telefono: telefono || '—',
        time: new Date().toLocaleString('es-AR'),
    });
}

function attachNewsletterHandler() {
    const btn = document.querySelector('.footer-newsletter-btn');
    const input = document.querySelector('.footer-newsletter-input');
    if (!btn || !input) return;

    btn.addEventListener('click', async () => {
        const email = input.value.trim();
        if (!email) return;

        btn.disabled = true;
        try {
            await sendEmail(email);
            input.value = '';
            alert('¡Gracias! Te anotamos en las novedades.');
        } catch (err) {
            console.error('EmailJS error:', err);
            alert('Error: ' + JSON.stringify(err));
        } finally {
            btn.disabled = false;
        }
    });
}

attachNewsletterHandler();
