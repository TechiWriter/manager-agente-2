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
    { label: "Historia", href: "index.html#top" },
    { label: "Cultura", href: "index.html#cultura" }]

  },
  { id: "blog", label: "PRODUCTOS",
    dropdown: [
    { label: "Tecnologías", href: "index.html#blog" },
    { label: "Productos", href: "index.html#blog" },
    { label: "Investigación & Desarrollo", href: "index.html#blog" }]

  },
  {
    id: "dhr",
    label: "POSTULACIÓN",
    dropdown: [
    { label: "Postulación Directa", href: "postulacion-directa.html" },
    { label: "Programa Talento DH", href: "programa-talento-dh.html" },
    { label: "Midpath Program", href: "postulacion-directa.html" }]

  },
  { id: "contacto", label: "CONTACTO",
    dropdown: [
    { label: "Contacto", href: "index.html#contacto" },
    { label: "Q&A", href: "index.html#contacto" }]

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
          <FootCol title="NAVEGACIÓN" items={[
          { label: "Nosotros", href: "index.html#top" },
          { label: "Productos", href: "index.html#conoce" },
          { label: "Tecnologías", href: "postulacion-directa.html#vacantes" },
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

Object.assign(window, { CursorGlow, Nav, Footer, FootCol, handleAnchor });