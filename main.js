/* =========================================================
   CONCEPTUAL · Soluciones Integrales — script compartido
   Encabezado, CTA, pie de página e íconos se definen aquí
   una sola vez y se insertan en todas las páginas.
   ========================================================= */

const CONTACTO = {
  whatsapp: 'https://wa.me/51923498449',
  telefono: '+51 923 498 449',
  telefonoHref: 'tel:+51923498449',
  email: 'conceptualsoluciones@gmail.com',
  // redes: pon el enlace completo; si queda en '#', el ícono no se muestra
  instagram: '#',
  tiktok: '#',
  linkedin: '#'
};

/* ---------- datos legales del negocio ----------
   Se muestran en el pie de página y en las páginas legales.
   Reemplaza cada texto entre [CORCHETES] por el dato real
   tal como figura en SUNAT. */
const NEGOCIO = {
  nombreComercial: 'Conceptual · Soluciones Integrales',
  razonSocial: '[RAZÓN SOCIAL O NOMBRE DEL TITULAR]',
  ruc: '20614681960',
  direccion: 'Lucio Mansilla 233, Lima, Perú',
  actualizacion: '30 de septiembre de 2026'   // fecha de las políticas legales, p. ej. '30 de septiembre de 2026'
};

/* ---------- íconos (símbolos SVG reutilizados) ---------- */
const ICONOS = `
<svg class="icon-sprite" aria-hidden="true" focusable="false"><defs>
<linearGradient id="gold-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3dca0"/><stop offset=".55" stop-color="#cda049"/><stop offset="1" stop-color="#8a5a2b"/></linearGradient>
<linearGradient id="area-gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cda049" stop-opacity=".28"/><stop offset="1" stop-color="#cda049" stop-opacity="0"/></linearGradient>
<symbol id="ic-search" viewBox="0 0 48 48"><circle cx="21" cy="21" r="13" fill="none" stroke-width="2.4"/><line x1="30.5" y1="30.5" x2="41" y2="41" stroke-width="2.4" stroke-linecap="round"/></symbol>
<symbol id="ic-chess" viewBox="0 0 48 48"><path d="M24 6l3 6h6l-4 5 2 6h-14l2-6-4-5h6z" fill="none" stroke-width="2"/><path d="M16 40v-6c0-4 3-6 8-6s8 2 8 6v6z" fill="none" stroke-width="2"/><line x1="13" y1="40" x2="35" y2="40" stroke-width="2.4" stroke-linecap="round"/></symbol>
<symbol id="ic-gear" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16.5" fill="none" stroke-width="6" stroke-dasharray="5.2 7.76" transform="rotate(-9 24 24)"/><circle cx="24" cy="24" r="12.5" fill="none" stroke-width="2.2"/><circle cx="24" cy="24" r="5" fill="none" stroke-width="2.2"/></symbol>
<symbol id="ic-chart" viewBox="0 0 48 48"><path d="M8 40V8M8 40h34" stroke-width="2.2" stroke-linecap="round"/><path d="M13 32l8-10 6 6 12-16" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="ic-chart-money" viewBox="0 0 48 48"><path d="M7 40V8M7 40h34" stroke-width="2.2" stroke-linecap="round"/><path d="M12 30l7-9 5 5 9-12" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 14h4v4" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="35" cy="31" r="7" fill="none" stroke-width="2"/><path d="M37.2 28.4c-.5-.6-1.3-.9-2.2-.9-1.3 0-2.2.7-2.2 1.6 0 2.2 4.6 1.2 4.6 3.5 0 1-1 1.7-2.4 1.7-1 0-1.9-.4-2.4-1M35 26.3v1.2M35 34.3v1.2" fill="none" stroke-width="1.6" stroke-linecap="round"/></symbol>
<symbol id="ic-idea" viewBox="0 0 48 48"><path d="M8 10h24a4 4 0 014 4v12a4 4 0 01-4 4H18l-7 6v-6H8a4 4 0 01-4-4V14a4 4 0 014-4z" fill="none" stroke-width="2.1" stroke-linejoin="round"/><path d="M40 18h1a3 3 0 013 3v11a3 3 0 01-3 3h-2v5l-6-5H24" fill="none" stroke-width="2.1" stroke-linejoin="round" stroke-linecap="round"/><path d="M20 14a5 5 0 00-3 9v2h6v-2a5 5 0 00-3-9z" fill="none" stroke-width="1.9" stroke-linejoin="round"/><path d="M18 27h4" stroke-width="1.9" stroke-linecap="round"/></symbol>
<symbol id="ic-chef" viewBox="0 0 48 48"><path d="M15 26a7 7 0 01-1-13.9A9 9 0 0131 10a7 7 0 012 13.8V26z" fill="none" stroke-width="2.1" stroke-linejoin="round"/><path d="M16 26v8h16v-8" fill="none" stroke-width="2.1" stroke-linejoin="round"/><path d="M16 30h16" stroke-width="1.8"/><path d="M10 38l6 6M16 38l-6 6" stroke-width="2" stroke-linecap="round"/><path d="M34 37h8l-4 5zM38 42v3" fill="none" stroke-width="1.9" stroke-linejoin="round" stroke-linecap="round"/></symbol>
<symbol id="ic-eye" viewBox="0 0 48 48"><path d="M4 24s7-12 20-12 20 12 20 12-7 12-20 12S4 24 4 24z" fill="none" stroke-width="2.2" stroke-linejoin="round"/><circle cx="24" cy="24" r="6.5" fill="none" stroke-width="2.2"/><circle cx="24" cy="24" r="2"/></symbol>
<symbol id="ic-globe" viewBox="0 0 48 48"><circle cx="24" cy="24" r="17" fill="none" stroke-width="2.2"/><ellipse cx="24" cy="24" rx="7.5" ry="17" fill="none" stroke-width="2.2"/><line x1="7" y1="24" x2="41" y2="24" stroke-width="2.2"/><path d="M10 15h28M10 33h28" stroke-width="2.2"/></symbol>
<symbol id="ic-target" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="none" stroke-width="2"/><circle cx="24" cy="24" r="9" fill="none" stroke-width="2"/><circle cx="24" cy="24" r="2.5"/></symbol>
<symbol id="ic-shield" viewBox="0 0 48 48"><path d="M24 5l16 6v11c0 11-7 18-16 21-9-3-16-10-16-21V11z" fill="none" stroke-width="2.2" stroke-linejoin="round"/><path d="M16 24l6 6 11-13" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="ic-users" viewBox="0 0 48 48"><circle cx="18" cy="17" r="6" fill="none" stroke-width="2.2"/><path d="M7 39c0-7 5-11 11-11s11 4 11 11" fill="none" stroke-width="2.2" stroke-linecap="round"/><circle cx="33" cy="15" r="4.6" fill="none" stroke-width="2.2"/><path d="M30 39c0-6 3.5-9.4 10-9.9" fill="none" stroke-width="2.2" stroke-linecap="round"/></symbol>
<symbol id="ic-team-star" viewBox="0 0 48 48"><circle cx="24" cy="13" r="5" fill="none" stroke-width="2"/><circle cx="11" cy="18" r="4" fill="none" stroke-width="2"/><circle cx="37" cy="18" r="4" fill="none" stroke-width="2"/><path d="M4 32c0-5 3-8 7-8 2 0 3.6.6 4.8 1.7M44 32c0-5-3-8-7-8-2 0-3.6.6-4.8 1.7" fill="none" stroke-width="2" stroke-linecap="round"/><path d="M15 30c0-6 4-10 9-10s9 4 9 10" fill="none" stroke-width="2" stroke-linecap="round"/><path d="M24 30l2.2 4.4 4.8.7-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8-3.5-3.4 4.8-.7z" fill="none" stroke-width="1.8" stroke-linejoin="round"/></symbol>
<symbol id="ic-doc" viewBox="0 0 48 48"><path d="M13 5h16l8 8v30H13z" fill="none" stroke-width="2.2" stroke-linejoin="round"/><path d="M29 5v8h8" fill="none" stroke-width="2.2" stroke-linejoin="round"/><path d="M18 24h12M18 31h12" stroke-width="2" stroke-linecap="round"/></symbol>
<symbol id="ic-doc-check" viewBox="0 0 48 48"><path d="M11 5h18l7 7v14" fill="none" stroke-width="2.1" stroke-linejoin="round" stroke-linecap="round"/><path d="M11 5v38h17" fill="none" stroke-width="2.1" stroke-linejoin="round" stroke-linecap="round"/><path d="M16 16h11M16 22h14M16 28h9" stroke-width="2" stroke-linecap="round"/><circle cx="35" cy="36" r="8" fill="none" stroke-width="2.1"/><path d="M31.5 36l2.5 2.5 4.5-5" fill="none" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="ic-menu" viewBox="0 0 48 48"><path d="M12 6h24a4 4 0 014 4v0a4 4 0 01-4 4h-2v24a4 4 0 01-4 4H10a4 4 0 01-4-4v0a4 4 0 014-4h2V10a4 4 0 014-4" fill="none" stroke-width="2.1" stroke-linejoin="round"/><path d="M18 22a5 5 0 0110 0zM17 22h12M23 15v2M18 27h10M18 31h7" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="ic-cart" viewBox="0 0 48 48"><circle cx="19" cy="40" r="2.6"/><circle cx="35" cy="40" r="2.6"/><path d="M5 7h5l5 24h22l4-16H14" fill="none" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/></symbol>
<symbol id="ic-star" viewBox="0 0 48 48"><circle cx="24" cy="17" r="6.5" fill="none" stroke-width="2.2"/><path d="M12 40c0-7 5-12 12-12s12 5 12 12" fill="none" stroke-width="2.2" stroke-linecap="round"/><path d="M35 8l1.6 3.3 3.6.5-2.6 2.6.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.6 3.6-.5z" fill="currentColor"/></symbol>
<symbol id="ic-money" viewBox="0 0 48 48"><path d="M9 15h20a5 5 0 015 5v3" fill="none" stroke-width="2.2" stroke-linecap="round"/><path d="M9 15l4-6h14" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><rect x="17" y="23" width="24" height="16" rx="2" fill="none" stroke-width="2.2"/><circle cx="29" cy="31" r="4" fill="none" stroke-width="2"/></symbol>
<symbol id="ic-check" viewBox="0 0 48 48"><path d="M8 25l10 10L40 12" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="ic-report" viewBox="0 0 48 48"><rect x="10" y="6" width="28" height="36" rx="2" fill="none" stroke-width="2.2"/><path d="M17 26l5-6 4 4 6-8" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 34h14" stroke-width="2" stroke-linecap="round"/></symbol>
<symbol id="ic-mega" viewBox="0 0 48 48"><path d="M6 20v8l8 2v-12z" fill="none" stroke-width="2.2" stroke-linejoin="round"/><path d="M14 18l20-9v30l-20-9" fill="none" stroke-width="2.2" stroke-linejoin="round"/><path d="M14 30l3 9h5l-2-8" fill="none" stroke-width="2" stroke-linejoin="round"/><path d="M38 20a5 5 0 010 8" fill="none" stroke-width="2.2" stroke-linecap="round"/></symbol>
<symbol id="ic-store" viewBox="0 0 48 48"><path d="M6 16l3-9h30l3 9" fill="none" stroke-width="2.2" stroke-linejoin="round"/><path d="M7 16v4a5 5 0 0010 0 5 5 0 0010 0 5 5 0 0010 0 5 5 0 0010 0v-4" fill="none" stroke-width="2.2" stroke-linejoin="round"/><path d="M9 20v20h30V20" fill="none" stroke-width="2.2"/><path d="M20 40V29h8v11" fill="none" stroke-width="2.2" stroke-linejoin="round"/></symbol>
<symbol id="ic-door" viewBox="0 0 48 48"><path d="M8 42h30" stroke-width="2.1" stroke-linecap="round"/><path d="M10 42V7h18v35" fill="none" stroke-width="2.1" stroke-linejoin="round"/><path d="M10 7l12 4v34l-12-3" fill="none" stroke-width="2.1" stroke-linejoin="round"/><circle cx="18.5" cy="26" r="1.6" fill="currentColor"/><circle cx="37" cy="22" r="4.5" fill="none" stroke-width="2"/><path d="M32.5 22H26M28.5 22v3" fill="none" stroke-width="2" stroke-linecap="round"/></symbol>
<symbol id="ic-badge" viewBox="0 0 48 48"><circle cx="24" cy="18" r="10" fill="none" stroke-width="2.2"/><path d="M18 26l-4 16 10-5 10 5-4-16" fill="none" stroke-width="2.2" stroke-linejoin="round"/><path d="M19 18l3.5 3.5L30 14" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="ic-wa" viewBox="0 0 32 32"><path d="M16 3C9 3 3.3 8.6 3.3 15.5c0 2.6.8 5 2.1 7L3 29l6.7-2.3c2 1.1 4.3 1.7 6.3 1.7 7 0 12.7-5.6 12.7-12.5S23 3 16 3zm0 22.7c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4 1.4 1.3-3.9-.3-.4a10.2 10.2 0 01-2-6.1C5.2 9.4 10 4.7 16 4.7s10.8 4.7 10.8 10.8S22 25.7 16 25.7z"/><path d="M21.6 18.1c-.3-.2-1.8-.9-2-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.6 8.6 0 01-2.5-1.5 9.4 9.4 0 01-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.7.8.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4z"/></symbol>
<symbol id="ic-phone" viewBox="0 0 24 24"><path d="M5 3.5h3.2l1.6 4-2 1.3a11 11 0 006.4 6.4l1.3-2 4 1.6V18a2.5 2.5 0 01-2.5 2.5A15.5 15.5 0 012.5 6 2.5 2.5 0 015 3.5z"/></symbol>
<symbol id="ic-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/></symbol>
<symbol id="ic-ig"viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18a5.5 5.5 0 010-11zm0 2A3.5 3.5 0 1012 15a3.5 3.5 0 000-7zm5.7-3.2a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z"/></symbol>
<symbol id="ic-tt" viewBox="0 0 24 24"><path d="M16 2c.4 2.3 1.9 3.9 4.3 4.1v2.7c-1.5.1-2.9-.3-4.3-1.2v6.7a5.7 5.7 0 11-5-5.6v2.8a3 3 0 102.4 2.9V2z"/></symbol>
<symbol id="ic-li" viewBox="0 0 24 24"><path d="M4.98 3.5A2.5 2.5 0 100 3.5a2.5 2.5 0 004.98 0zM.5 8.5h4.9V23H.5V8.5zM9 8.5h4.7v2h.1c.65-1.2 2.25-2.5 4.6-2.5 4.9 0 5.8 3.2 5.8 7.4V23h-4.9v-6.7c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6V23H9V8.5z"/></symbol>
</defs></svg>`;

/* ---------- encabezado ---------- */
function renderHeader(page) {
  const act = p => (p === page ? ' class="active" aria-current="page"' : '');
  return `
<header class="site-header">
  <div class="nav">
    <a href="inicio.html" class="brand" aria-label="Conceptual · Soluciones Integrales, ir a Inicio"><span class="logo-img" role="img" aria-label="Conceptual · Soluciones Integrales"></span></a>
    <nav class="links" id="navLinks" aria-label="Principal">
      <a href="inicio.html"${act('inicio')}>Inicio</a>
      <a href="adn.html"${act('adn')}>Conócenos</a>
      <a href="servicios.html"${act('servicios')}>Servicios</a>
      <a href="#contacto" class="nav-cta"><svg viewBox="0 0 32 32" aria-hidden="true"><use href="#ic-wa"/></svg>Agendar cita</a>
    </nav>
    <button class="burger" id="burgerBtn" aria-label="Abrir menú" aria-expanded="false" aria-controls="navLinks"><span></span></button>
  </div>
</header>`;
}

/* ---------- llamada a la acción final ---------- */
function renderCta(extra) {
  return `
<section class="final-cta" id="contacto">
  <div class="wrap">
    <h2>Llevemos su negocio al siguiente nivel</h2>
    <p>Inicie hoy la optimización estratégica de su operación con el respaldo de expertos en rentabilidad gastronómica.${extra ? '<br><br>' + extra : ''}</p>
    <a class="wa-btn" href="${CONTACTO.whatsapp}" target="_blank" rel="noopener">
      <span class="wa-ic"><svg viewBox="0 0 32 32" aria-hidden="true"><use href="#ic-wa"/></svg></span>
      Agenda tu cita a través de WhatsApp
    </a>
    <p class="wa-note">Al escribirnos por WhatsApp, teléfono o correo, usamos tus datos solo para responder tu consulta y coordinar la cita. Más detalles en nuestra <a href="privacidad.html">Política de privacidad</a>.</p>
  </div>
</section>`;
}

/* ---------- pie de página ---------- */
function renderFooter() {
  const redes = [['instagram', 'Instagram', 'ic-ig'], ['tiktok', 'TikTok', 'ic-tt'], ['linkedin', 'LinkedIn', 'ic-li']]
    .filter(([k]) => CONTACTO[k] && CONTACTO[k] !== '#')
    .map(([k, nombre, ic]) => `<a href="${CONTACTO[k]}" target="_blank" rel="noopener" aria-label="${nombre} (se abre en otra pestaña)"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#${ic}"/></svg></a>`)
    .join('');
  return `
<footer class="site-footer">
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand">
        <span class="logo-img" role="img" aria-label="Conceptual · Soluciones Integrales"></span>
        <p>Consultoría estratégica para restaurantes, bares y cocinas profesionales.</p>
      </div>
      <div class="foot-col">
        <h6>Contacto</h6>
        <div class="contact-list">
          <a class="contact-item" href="${CONTACTO.telefonoHref}">
            <span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-phone"/></svg></span>
            <span><span class="lbl">TELÉFONO</span><span class="val">${CONTACTO.telefono}</span></span>
          </a>
          <a class="contact-item" href="mailto:${CONTACTO.email}">
            <span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-mail"/></svg></span>
            <span><span class="lbl">CORREO</span><span class="val">${CONTACTO.email}</span></span>
          </a>
        </div>
      </div>
      ${redes ? `<div class="foot-col">
        <h6>Síguenos</h6>
        <div class="soc-row">${redes}</div>
      </div>` : ''}
    </div>
    <div class="foot-legal">
      <p class="biz"><b data-negocio="razonSocial"></b> · RUC <span data-negocio="ruc"></span><br><span data-negocio="direccion"></span></p>
      <nav aria-label="Información legal">
        <a href="privacidad.html">Política de privacidad</a>
        <a href="cookies.html">Política de cookies</a>
        <a href="terminos.html">Términos y condiciones</a>
      </nav>
    </div>
    <div class="foot-bottom">© ${new Date().getFullYear()} CONCEPTUAL, Soluciones Integrales. Todos los derechos reservados.</div>
  </div>
</footer>`;
}

/* ---------- montaje ---------- */
const page = document.body.dataset.page || '';
document.body.insertAdjacentHTML('afterbegin', ICONOS);
document.querySelectorAll('[data-include="header"]').forEach(el => { el.outerHTML = renderHeader(page); });
document.querySelectorAll('[data-include="cta"]').forEach(el => { el.outerHTML = renderCta(el.dataset.extra); });
document.querySelectorAll('[data-include="footer"]').forEach(el => { el.outerHTML = renderFooter(); });

/* ---------- saltar al contenido (teclado y lectores de pantalla) ---------- */
const mainEl = document.querySelector('main');
if (mainEl) {
  mainEl.id = mainEl.id || 'contenido';
  mainEl.setAttribute('tabindex', '-1');
  document.body.insertAdjacentHTML('afterbegin', `<a class="skip-link" href="#${mainEl.id}">Saltar al contenido</a>`);
}
document.querySelectorAll('[data-negocio]').forEach(el => {
  el.textContent = NEGOCIO[el.dataset.negocio] || '';
  el.classList.toggle('todo', el.textContent.includes('['));   // resalta los datos aún sin completar
});

/* ---------- menú móvil ---------- */
const burger = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  const setOpen = open => {
    navLinks.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };
  burger.addEventListener('click', () => setOpen(!navLinks.classList.contains('open')));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
}

/* ---------- enfoque 360 ---------- */
const focusBtns = document.querySelectorAll('.focus-btn');
focusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    focusBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    document.querySelectorAll('.focus-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
    document.getElementById('focus-' + btn.dataset.focus).classList.add('active');
  });
});

/* ---------- aparición al hacer scroll ---------- */
const revealSingles = ['.section-head', '.method-quote', '.stat-row', '.split > *', '.mission-panel', '.founder', '.focus',
  '.callout', '.tl-step', '.tl-final', '.final-cta .wrap > *'];
const revealGroups = ['.problem-grid', '.steps', '.values-grid', '.chart-grid', '.hex-row', '.feat-grid',
  '.audit-grid', '.service-grid'];
document.querySelectorAll(revealSingles.join(',')).forEach(el => el.classList.add('reveal'));
document.querySelectorAll(revealGroups.join(',')).forEach(group => {
  [...group.children].forEach(el => el.classList.add('reveal'));
});
if ('IntersectionObserver' in window) {
  // los elementos que entran juntos aparecen en cascada, en orden de lectura
  // (arriba→abajo, izquierda→derecha), siempre con el mismo intervalo
  const STEP = 0.12;
  const revealObs = new IntersectionObserver(entries => {
    const batch = entries.filter(e => e.isIntersecting).map(e => e.target);
    batch.sort((a, b) => {
      const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      return Math.abs(ra.top - rb.top) > 8 ? ra.top - rb.top : ra.left - rb.left;
    });
    batch.forEach((el, i) => {
      el.style.setProperty('--d', Math.min(i, 6) * STEP + 's');
      el.classList.add('in');
      revealObs.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -12% 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

/* ---------- transición suave entre páginas ---------- */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href$=".html"]');
  if (!a || a.target || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  document.body.classList.add('leaving');
  setTimeout(() => { window.location.href = a.href; }, 260);
});
window.addEventListener('pageshow', e => { if (e.persisted) document.body.classList.remove('leaving'); });

/* =========================================================
   GRÁFICAS (SVG, sin librerías)
   ========================================================= */
const SVGNS = 'http://www.w3.org/2000/svg';
const fmt = (v, unit) => (Number.isInteger(v) ? v : v.toFixed(1)) + (unit || '');

function svgEl(tag, attrs, parent) {
  const el = document.createElementNS(SVGNS, tag);
  for (const k in attrs) el.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(el);
  return el;
}

function makeTip(host) {
  const tip = document.createElement('div');
  tip.className = 'chart-tip';
  tip.setAttribute('aria-hidden', 'true');
  host.appendChild(tip);
  return {
    show(html, xPx, yPx) {
      tip.innerHTML = html;
      tip.classList.add('show');
      const w = tip.offsetWidth, hostW = host.clientWidth;
      let left = xPx + 14;
      if (left + w > hostW) left = xPx - w - 14;
      tip.style.left = Math.max(0, left) + 'px';
      tip.style.top = Math.max(0, yPx - tip.offsetHeight / 2) + 'px';
    },
    hide() { tip.classList.remove('show'); }
  };
}

function tipRows(rows, unit) {
  return rows.map(r => `<div class="t-row"><span><i class="${r.key}"></i>${r.name}</span><b>${fmt(r.value, unit)}</b></div>`).join('');
}

function dataTable(host, caption, head, rows) {
  const t = document.createElement('table');
  t.className = 'sr-only';
  t.innerHTML = `<caption>${caption}</caption><thead><tr>${head.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead>` +
    `<tbody>${rows.map(r => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>`;
  host.appendChild(t);
}

/* ancho de dibujo = ancho real disponible, para que el texto se vea a su tamaño en celular */
const chartWidth = host => Math.round(Math.max(300, Math.min(520, host.clientWidth || 520)));

/* anima la gráfica de 0 a 1 cuando entra en pantalla */
const easeOut = t => 1 - Math.pow(1 - t, 3);   // misma curva que las apariciones (--ease)
const CHART_DUR = 1800;   // misma duración para todas las gráficas
const menosMovimiento = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
function animateOnView(host, render, duration = CHART_DUR) {
  render(0);
  if (menosMovimiento || !('IntersectionObserver' in window)) { render(1); return; }
  const io = new IntersectionObserver(entries => {
    if (!entries.some(e => e.isIntersecting)) return;
    io.disconnect();
    setTimeout(() => {
      const t0 = performance.now();
      const step = now => {
        const t = Math.min(1, (now - t0) / duration);
        render(easeOut(t));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, 250);
  }, { threshold: 0.45 });
  io.observe(host);
}
let clipCount = 0;

/* ---- líneas (con área opcional para la serie principal) ---- */
function lineChart(host, cfg) {
  const W = chartWidth(host), H = W < 460 ? 230 : 250, m = { l: 38, r: 56, t: 14, b: 30 };
  const n = cfg.labels.length;
  const x = i => m.l + i * (W - m.l - m.r) / (n - 1);
  const y = v => m.t + (1 - (v - cfg.yMin) / (cfg.yMax - cfg.yMin)) * (H - m.t - m.b);
  const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': cfg.title, tabindex: 0 });

  const grid = svgEl('g', { class: 'grid' }, svg);
  const axis = svgEl('g', { class: 'axis' }, svg);
  cfg.yTicks.forEach(v => {
    svgEl('line', { x1: m.l, x2: W - m.r, y1: y(v), y2: y(v) }, grid);
    svgEl('text', { x: m.l - 10, y: y(v) + 4, 'text-anchor': 'end' }, axis).textContent = v + (cfg.unit || '');
  });
  // en celular se usan etiquetas cortas (si existen) para que no se encimen
  const axisLabels = W < 460 && cfg.shortLabels ? cfg.shortLabels : cfg.labels;
  axisLabels.forEach((lab, i) => {
    const anchor = cfg.shortLabels && axisLabels === cfg.shortLabels ? 'middle' : i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle';
    svgEl('text', { x: x(i), y: H - 8, 'text-anchor': anchor }, axis).textContent = lab;
  });

  // la línea se revela de izquierda a derecha con un recorte animado
  const clipId = 'chart-clip-' + (++clipCount);
  const clipRect = svgEl('rect', { x: m.l - 6, y: 0, width: 0, height: H }, svgEl('clipPath', { id: clipId }, svgEl('defs', {}, svg)));
  const plot = svgEl('g', { 'clip-path': `url(#${clipId})` }, svg);
  cfg.series.forEach(s => {
    const pts = s.values.map((v, i) => `${x(i)},${y(v)}`);
    if (s.area) svgEl('path', { class: 'area-con', d: `M${x(0)},${y(cfg.yMin)} L${pts.join(' L')} L${x(n - 1)},${y(cfg.yMin)} Z` }, plot);
  });
  // la serie de referencia se dibuja primero para que la principal quede encima
  [...cfg.series].reverse().forEach(s => {
    svgEl('polyline', { class: 's-' + s.key, points: s.values.map((v, i) => `${x(i)},${y(v)}`).join(' ') }, plot);
  });

  // punto y valor que viajan en la punta de cada línea (al final quedan como etiqueta directa)
  const tips = cfg.series.map(s => ({
    s,
    dot: svgEl('circle', { class: 'dot-' + s.key, r: 4.5 }, svg),
    label: svgEl('text', { class: 'end-label ' + s.key }, svg)
  }));
  const renderLine = p => {
    const xEnd = m.l + p * (W - m.l - m.r);
    clipRect.setAttribute('width', Math.max(0, xEnd - (m.l - 6) + 1));
    const pos = p * (n - 1), i0 = Math.min(n - 2, Math.floor(pos)), f = pos - i0;
    const cur = tips.map(t => {
      const v = t.s.values[i0] + (t.s.values[i0 + 1] - t.s.values[i0]) * f;
      return { t, v, yy: y(v), ly: y(v) };
    });
    if (cur.length === 2 && Math.abs(cur[0].yy - cur[1].yy) < 16) {
      const mid = (cur[0].yy + cur[1].yy) / 2, up = cur[0].yy < cur[1].yy ? 0 : 1;
      cur[up].ly = mid - 9; cur[1 - up].ly = mid + 9;
    }
    cur.forEach(({ t, v, yy, ly }) => {
      t.dot.setAttribute('cx', xEnd); t.dot.setAttribute('cy', yy);
      t.label.setAttribute('x', xEnd + 10); t.label.setAttribute('y', ly + 4);
      t.label.textContent = p === 1 ? fmt(t.s.values[n - 1], cfg.unit) : Math.round(v) + (cfg.unit || '');
      t.dot.style.opacity = t.label.style.opacity = p > 0 ? 1 : 0;
    });
  };

  // capa de interacción
  const cross = svgEl('line', { class: 'crosshair', y1: m.t, y2: H - m.b }, svg);
  const hovers = cfg.series.map(s => svgEl('circle', { class: 'hover-dot dot-' + s.key, r: 5 }, svg));
  const hit = svgEl('rect', { class: 'hit', x: m.l - 10, y: 0, width: W - m.l - m.r + 20, height: H - m.b }, svg);

  host.appendChild(svg);
  const tip = makeTip(host);
  let idx = n - 1;
  const show = i => {
    idx = i;
    const cx = x(i);
    cross.setAttribute('x1', cx); cross.setAttribute('x2', cx);
    hovers.forEach((h, k) => { h.setAttribute('cx', cx); h.setAttribute('cy', y(cfg.series[k].values[i])); });
    host.classList.add('hovering');
    const scale = svg.getBoundingClientRect().width / W;
    const topY = Math.min(...cfg.series.map(s => y(s.values[i])));
    tip.show(`<div class="t-head">${cfg.labels[i]}</div>` +
      tipRows(cfg.series.map(s => ({ key: s.key, name: s.name, value: s.values[i] })), cfg.unit), cx * scale, topY * scale);
  };
  const hide = () => { host.classList.remove('hovering'); tip.hide(); };
  hit.addEventListener('pointermove', e => {
    const r = svg.getBoundingClientRect();
    const px = (e.clientX - r.left) * W / r.width;
    show(Math.max(0, Math.min(n - 1, Math.round((px - m.l) / ((W - m.l - m.r) / (n - 1))))));
  });
  hit.addEventListener('pointerleave', hide);
  svg.addEventListener('focus', () => show(idx));
  svg.addEventListener('blur', hide);
  svg.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); show(Math.min(n - 1, idx + 1)); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(Math.max(0, idx - 1)); }
  });

  dataTable(host, cfg.title, ['', ...cfg.series.map(s => s.name)],
    cfg.labels.map((l, i) => [l, ...cfg.series.map(s => fmt(s.values[i], cfg.unit))]));
  animateOnView(host, renderLine);
}

/* ---- barras horizontales comparativas ---- */
function barChart(host, cfg) {
  const W = chartWidth(host), rowH = 64, top = 6, labelW = 0, valW = 52;
  const H = top + cfg.items.length * rowH;
  const maxW = W - labelW - valW;
  const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': cfg.title });
  const g = svgEl('g', {}, svg);
  const bars = cfg.items.map((it, i) => {
    const y0 = top + i * rowH, bh = 14, by = y0 + 26;
    svgEl('text', { class: 'bar-label', x: 0, y: y0 + 16 }, g).textContent = it.name;
    svgEl('rect', { class: 'bar-track', x: 0, y: by, width: maxW, height: bh, rx: 2 }, g);
    return {
      it, by, bh,
      bar: svgEl('path', { class: 'bar-' + it.key }, g),
      value: svgEl('text', { class: 'bar-value', x: maxW + 12, y: by + 12 }, g)
    };
  });
  const renderBars = p => {
    bars.forEach(({ it, by, bh, bar, value }) => {
      const bw = maxW * it.value / cfg.max * p, r = Math.min(4, bw);
      bar.setAttribute('d', bw <= 0 ? '' :
        `M0,${by} H${bw - r} Q${bw},${by} ${bw},${by + r} V${by + bh - r} Q${bw},${by + bh} ${bw - r},${by + bh} H0 Z`);
      value.textContent = p === 1 ? fmt(it.value, cfg.unit) : Math.round(it.value * p) + (cfg.unit || '');
    });
  };
  host.appendChild(svg);
  dataTable(host, cfg.title, ['', 'Valor'], cfg.items.map(it => [it.name, fmt(it.value, cfg.unit)]));
  animateOnView(host, renderBars);
}

/* ---- radar ---- */
function radarChart(host, cfg) {
  const W = chartWidth(host), small = W < 460, n = cfg.axes.length;
  const H = small ? Math.round(W * 0.95) : 370, cx = W / 2, cy = H / 2 + 6, R = small ? W * 0.25 : 134;
  const ang = i => -Math.PI / 2 + i * 2 * Math.PI / n;
  const pt = (i, v) => [cx + Math.cos(ang(i)) * R * v / cfg.max, cy + Math.sin(ang(i)) * R * v / cfg.max];
  const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': cfg.title });

  const grid = svgEl('g', {}, svg);
  cfg.rings.forEach(v => {
    svgEl('polygon', { class: 'radar-ring', points: cfg.axes.map((_, i) => pt(i, v).join(',')).join(' ') }, grid);
  });
  cfg.axes.forEach((a, i) => {
    const [x2, y2] = pt(i, cfg.max);
    svgEl('line', { class: 'radar-spoke', x1: cx, y1: cy, x2, y2 }, grid);
    const [lx, ly] = pt(i, cfg.max * 1.16);
    const c = Math.cos(ang(i));
    const anchor = Math.abs(c) < 0.2 ? 'middle' : c > 0 ? 'start' : 'end';
    // en pantallas chicas los nombres largos se parten en dos líneas
    const words = a.split(' ');
    const lines = small && a.length > 11 && words.length > 1
      ? [words.slice(0, Math.ceil(words.length / 2)).join(' '), words.slice(Math.ceil(words.length / 2)).join(' ')]
      : [a];
    const label = svgEl('text', { class: 'radar-label', x: lx, y: ly + 4 - (lines.length - 1) * 7, 'text-anchor': anchor }, grid);
    lines.forEach((t, k) => { svgEl('tspan', { x: lx, dy: k ? 14 : 0 }, label).textContent = t; });
  });

  // polígonos y vértices que se expanden desde el centro
  const plot = svgEl('g', {}, svg);
  const polys = [...cfg.series].reverse().map(s => ({ s, el: svgEl('polygon', { class: 'radar-' + s.key }, plot) }));
  const dots = svgEl('g', {}, svg);
  const vertices = cfg.series.map(s => ({ s, els: cfg.axes.map(() => svgEl('circle', { class: 'dot-' + s.key, r: 4.5 }, dots)) }));
  const renderRadar = p => {
    polys.forEach(({ s, el }) => el.setAttribute('points', s.values.map((v, i) => pt(i, v * p).join(',')).join(' ')));
    vertices.forEach(({ s, els }) => els.forEach((c, i) => {
      const [px, py] = pt(i, s.values[i] * p);
      c.setAttribute('cx', px); c.setAttribute('cy', py);
      c.style.opacity = p > 0 ? 1 : 0;
    }));
  };
  const tip = makeTip(host);
  host.appendChild(svg);
  cfg.axes.forEach((a, i) => {
    // zona de interacción amplia en cada eje
    const [hx, hy] = pt(i, cfg.max * 0.62);
    const hitC = svgEl('circle', { class: 'hit', cx: hx, cy: hy, r: 42, tabindex: 0, 'aria-label': a }, svg);
    const on = () => {
      const scale = svg.getBoundingClientRect().width / W;
      tip.show(`<div class="t-head">${a}</div>` + tipRows(cfg.series.map(s => ({ key: s.key, name: s.name, value: s.values[i] })), cfg.unitLabel), hx * scale, hy * scale);
    };
    hitC.addEventListener('pointerenter', on);
    hitC.addEventListener('focus', on);
    hitC.addEventListener('pointerleave', () => tip.hide());
    hitC.addEventListener('blur', () => tip.hide());
  });
  dataTable(host, cfg.title, ['Indicador', ...cfg.series.map(s => s.name)],
    cfg.axes.map((a, i) => [a, ...cfg.series.map(s => s.values[i] + cfg.unitLabel)]));
  animateOnView(host, renderRadar);
}

window.ConceptualCharts = { lineChart, barChart, radarChart };
