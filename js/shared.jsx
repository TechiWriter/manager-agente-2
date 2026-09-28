/* ============================================================
   SHARED — Nav, Footer, CursorGlow (Digital Harbor)
   ============================================================ */
const { useState, useEffect, useRef } = React;

/* ---------- CURSOR GLOW ---------- */
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return <div ref={ref} className="cursor-glow" />;
}

/* ---------- helper: smooth scroll if anchor exists on this page ---------- */
function handleAnchor(e, href, after) {
  const hashIdx = href.indexOf("#");
  if (hashIdx >= 0) {
    const id = href.slice(hashIdx + 1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  if (after) after();
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    if (openDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [openDropdown]);

  const toggleDropdown = (id, e) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const navItems = [
  {
    id: "conoce",
    label: "NOSOTROS",
    dropdown: [
    { label: "Quiénes somos", href: "quienes-somos.html" },
    { label: "Historia", href: "historia-de-dh.html" },
    { label: "Cultura", href: "index.html#cultura" }]

  },
  { id: "blog", label: "PRODUCTOS",
    dropdown: [
    { label: "Tecnologías", href: "productos.html" },
    { label: "Productos", href: "productos.html" },
    { label: "Investigación & Desarrollo", href: "productos.html" }]

  },
  {
    id: "dhr",
    label: "POSTULACIÓN",
    dropdown: [
    { label: "Postulación Directa", href: "postulacion-directa.html" },
    { label: "Programa Talento DH", href: "programa-talento-dh.html" },
    { label: "Midpath Program", href: "postulacion-directa.html" }]

  }];


  return (
    <nav className={"top" + (scrolled ? " scrolled" : "")}>
      <div className="nav-inner">
        <a href="index.html" className="logo" style={{ cursor: "pointer", textDecoration: "none" }}>
          <div className="logo-mark">
            <span>DH</span>
          </div>
          <div className="logo-text">
            <b>Digital</b>Harbor
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navItems.map((item) =>
          <div key={item.id} style={{ position: "relative" }}>
              {item.dropdown ?
            <>
                  <a
                onClick={(e) => toggleDropdown(item.id, e)}
                style={{ display: "flex", alignItems: "center", gap: 6 }}>
                
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                style={{ transform: openDropdown === item.id ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                      <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  {openDropdown === item.id &&
              <div className="nav-dropdown">
                      {item.dropdown.map((subItem, idx) =>
                <a key={idx} href={subItem.href}
                onClick={(e) => handleAnchor(e, subItem.href, () => setOpenDropdown(null))}>
                          {subItem.label}
                        </a>
                )}
                    </div>
              }
                </> :

            <a href={item.href} onClick={(e) => handleAnchor(e, item.href)}>
                  {item.label}
                </a>
            }
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span style={{ display: "block", width: 20, height: 2, background: "#fff", transition: "all 0.3s", transform: mobileOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
          <span style={{ display: "block", width: 20, height: 2, background: "#fff", marginTop: 5, opacity: mobileOpen ? 0 : 1, transition: "all 0.3s" }} />
          <span style={{ display: "block", width: 20, height: 2, background: "#fff", marginTop: 5, transition: "all 0.3s", transform: mobileOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        {navItems.map((item) =>
        <div key={item.id} className="mobile-nav-item">
            {item.dropdown ?
          <>
                <a onClick={(e) => toggleDropdown(item.id, e)}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 10 10" fill="none"
              style={{ transform: openDropdown === item.id ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                    <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                {openDropdown === item.id &&
            <div className="mobile-dropdown">
                    {item.dropdown.map((subItem, idx) =>
              <a key={idx} href={subItem.href}
              onClick={(e) => handleAnchor(e, subItem.href, () => setMobileOpen(false))}>
                        {subItem.label}
                      </a>
              )}
                  </div>
            }
              </> :

          <a href={item.href} onClick={(e) => handleAnchor(e, item.href, () => setMobileOpen(false))}>
                {item.label}
              </a>
          }
          </div>
        )}
      </div>
    </nav>);

}

/* ---------- FOOTER ---------- */
function FootCol({ title, items }) {
  return (
    <div>
      <div className="mono uppercase" style={{ fontSize: 11, color: "var(--cyan)", marginBottom: 18 }}>
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((it, i) =>
        <a key={i} href={it.href}
        onClick={(e) => handleAnchor(e, it.href)}
        style={{ color: "var(--muted)", fontSize: 14, cursor: "pointer", transition: "color .2s", textDecoration: "none" }}>
            {it.label}
          </a>
        )}
      </div>
    </div>);

}

function Footer() {
  const socials = [
  { Icon: TikTokIcon, href: "https://www.tiktok.com/@digitalharborbolivia?_t=8c4TxzrKXLS&_r=1" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/digitalharborbolivia/" },
  { Icon: LinkedInIcon, href: "https://bo.linkedin.com/company/digitalharborbolivia" },
  { Icon: YouTubeIcon, href: "https://www.youtube.com/channel/UCR30LMHsZcHs1lFVjylUSEg" },
  { Icon: FacebookIcon, href: "https://www.facebook.com/digitalharborBO" }];

  return (
    <footer id="contacto" style={{ position: "relative", padding: "80px 0 30px", marginTop: 40, borderTop: "1px solid var(--line)", background: "linear-gradient(180deg, transparent, rgba(135,50,158,0.06))" }}>
      <div style={{ position: "absolute", top: -1, left: "10%", right: "10%", height: 1, background: "linear-gradient(90deg, transparent, var(--cyan), var(--purple-2), transparent)", filter: "blur(.4px)" }} />
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="index.html" className="logo" style={{ marginBottom: 18, textDecoration: "none" }}>
              <div className="logo-mark"><span>DH</span></div>
              <div className="logo-text"><b>Digital</b>Harbor</div>
            </a>
            <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6, maxWidth: 280 }}>Desde Bolivia diseñamos software que desafia las reglas y transforma empresas en todo el mundo.

            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
              {socials.map(({ Icon, href }, i) =>
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              style={{ width: 40, height: 40, borderRadius: 999, border: "1px solid var(--line-strong)", display: "grid", placeItems: "center", color: "var(--muted)", cursor: "pointer", transition: "all .25s" }}>
                  <Icon style={{ width: 18, height: 18 }} />
                </a>
              )}
            </div>
          </div>
          <FootCol title="NOSOTROS" items={[
          { label: "Quiénes somos", href: "index.html#top" },
          { label: "Productos", href: "productos.html" },
          { label: "Tecnologías", href: "productos.html" },
          { label: "Cultura WOW", href: "index.html#blog" }]
          } />
          <FootCol title="CONSTRUYE CON NOSOTROS" items={[
          { label: "Programa talento DH", href: "programa-talento-dh.html" },
          { label: "Postulacion directa", href: "postulacion-directa.html" }]
          } />
          <div>
            <div className="mono uppercase" style={{ fontSize: 11, color: "var(--cyan)", marginBottom: 18 }}>Contacto</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, color: "var(--muted)", fontSize: 14 }}>
              <a style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--muted)", cursor: "pointer" }}>
                <MailIcon style={{ width: 16, height: 16 }} /> talent.recruitment@dharbor.com
              </a>
              <a style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--muted)", cursor: "pointer" }}>
                <MailIcon style={{ width: 16, height: 16 }} /> recursos.humanos@dharbor.com
              </a>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 60, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <div className="mono" style={{ fontSize: 11, color: "var(--dim)", textAlign: "center" }}>
            2026 Digital Harbor Bolivia. All rights reserved.
          </div>
        </div>
      </div>
    </footer>);

}

/* ---------- Widget Q&A (chat flotante) ---------- */
const QA_ITEMS = [
{ q: "¿Cómo puedo trabajar con ustedes?", a: "Ingresa a la sección Postulación Directa, elige la vacante que se ajuste a tu perfil y envía tu CV. Nuestro equipo revisará tu aplicación y te contactará.", href: "postulacion-directa.html", cta: "Ir a Postulación" },
{ q: "Agendar una visita universitaria", a: "Llevamos charlas y talleres a tu universidad. Escríbenos y coordinamos una visita para conocer a Digital Harbor y el Programa Talento DH.", href: "mailto:contacto@digitalharborbolivia.com?subject=Visita%20universitaria", cta: "Solicitar visita" },
{ q: "Programa Talento Dev", a: "El bootcamp gratuito de 6 meses abrirá una nueva versión pronto. Anunciaremos las fechas en nuestras redes sociales.", href: "programa-talento-dh.html", cta: "Ver el programa" },
{ q: "Solicitar un espacio para MeetUp", intro: "¿Organizas un evento tech? Podemos apoyar con espacio y comunidad. Elige la ciudad:", cities: [
{ name: "Cochabamba", a: "El WowLounge está disponible en Cochabamba, en la Torre 51 (final Salamanca, Plazuela Quintanilla).\n\nPara reservarlo, envíanos tu solicitud con anticipación a nuestro correo. Si realizas publicaciones sobre tu evento, ¡nos encantará que nos menciones! 😊", href: "mailto:dhbolivia@gmail.com?subject=Espacio%20MeetUp%20-%20Cochabamba%20(WowLounge)", cta: "Enviar mail a dhbolivia@gmail.com" },
{ name: "La Paz", a: "El Auditorio está disponible en La Paz, en la Torre Azul (Sopocachi). Para reservarlo, envíanos tu solicitud con anticipación a nuestro correo.\n\nSi realizas publicaciones sobre tu evento, ¡nos encantará que nos menciones! 😊", href: "mailto:dhbolivia@gmail.com?subject=Espacio%20MeetUp%20-%20La%20Paz%20(Auditorio%20Torre%20Azul)", cta: "Enviar mail a dhbolivia@gmail.com" }] }];


function QABot({ small }) {
  const s = small ? 22 : 26;
  return (
    <span className="qa-bot" style={{ width: s, height: s }}>
      <svg viewBox="0 0 32 32" width={s} height={s} fill="none">
        <rect x="6" y="9" width="20" height="16" rx="7" fill="#0a1420" stroke="#3ff0ff" strokeWidth="1.6" />
        <path d="M16 4v4" stroke="#3ff0ff" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="16" cy="3" r="1.8" fill="#3ff0ff" />
        <circle className="qa-eye" cx="12.5" cy="17" r="2.1" fill="#3ff0ff" />
        <circle className="qa-eye" cx="19.5" cy="17" r="2.1" fill="#3ff0ff" />
      </svg>
    </span>);

}

function QAWidget() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(null);
  const [city, setCity] = React.useState(null);

  const goBack = () => { setActive(null); setCity(null); };

  return (
    <div className="qa-widget">
      {open &&
      <div className="qa-panel glass">
        <div className="qa-header">
          <div className="qa-header-id">
            <QABot small />
            <div>
              <div className="qa-header-name">Q&A · Harbot</div>
              <div className="qa-header-status"><span className="qa-dot" /> En órbita</div>
            </div>
          </div>
          <button className="qa-x" onClick={() => setOpen(false)} aria-label="Cerrar">×</button>
        </div>

        <div className="qa-body">
          <div className="qa-msg">¡Hola! Veo que estás explorando.<br />¿Qué te gustaría saber?</div>
          {active === null ?
          <div className="qa-options">
            {QA_ITEMS.map((it, i) =>
            <button key={i} className="qa-option" onClick={() => { setActive(i); setCity(null); }}>
                {it.q}
              </button>
            )}
          </div> :

          <div className="qa-answer-wrap">
            <div className="qa-bubble qa-bubble-user">{QA_ITEMS[active].q}</div>

            {QA_ITEMS[active].cities ?
            <>
              <div className="qa-bubble qa-bubble-bot">{QA_ITEMS[active].intro}</div>
              {city === null ?
              <div className="qa-options">
                {QA_ITEMS[active].cities.map((c, ci) =>
                <button key={ci} className="qa-option" onClick={() => setCity(ci)}>{c.name}</button>
                )}
              </div> :

              <>
                <div className="qa-bubble qa-bubble-user">{QA_ITEMS[active].cities[city].name}</div>
                <div className="qa-bubble qa-bubble-bot">
                  {QA_ITEMS[active].cities[city].a}
                  <a className="qa-cta" href={QA_ITEMS[active].cities[city].href}>{QA_ITEMS[active].cities[city].cta} →</a>
                </div>
                <button className="qa-back" onClick={() => setCity(null)}>← Elegir otra ciudad</button>
              </>
              }
            </> :

            <div className="qa-bubble qa-bubble-bot">
              {QA_ITEMS[active].a}
              <a className="qa-cta" href={QA_ITEMS[active].href}>{QA_ITEMS[active].cta} →</a>
            </div>
            }

            <button className="qa-back" onClick={goBack}>← Otras preguntas</button>
          </div>
          }
        </div>
      </div>
      }

      <button className={"qa-fab" + (open ? " is-open" : "")} onClick={() => setOpen((v) => !v)} aria-label="Abrir Q&A">
        <QABot />
        <span className="qa-fab-label">Q&A</span>
      </button>
    </div>);

}

Object.assign(window, { CursorGlow, Nav, Footer, FootCol, handleAnchor, QAWidget, QABot });

/* Auto-montaje del widget Q&A en todas las páginas */
(function mountQA() {
  if (document.getElementById("qa-root")) return;
  var el = document.createElement("div");
  el.id = "qa-root";
  document.body.appendChild(el);
  ReactDOM.createRoot(el).render(React.createElement(QAWidget));
})();