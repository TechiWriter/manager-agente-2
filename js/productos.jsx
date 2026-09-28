/* ============================================================
   PRODUCTOS — Digital Harbor
   ============================================================ */
const PRODUCTS = [
{ title: "Know Your Customer (KYC)", count: 0, icon: "shield", location: "Cumplimiento ATF / sanciones" },
{ title: "Know Your Fraud", count: 0, icon: "pulse", location: "Fraude de canales cruzados" },
{ title: "Know Your Claim", count: 0, icon: "chart", location: "Modelado predictivo en salud" },
{ title: "Know Your Provider", count: 0, icon: "team", location: "Prevención de fraude" },
{ title: "Gestión de casos", count: 0, icon: "pen", location: "Investigaciones de próxima generación" },
{ title: "Plataforma de aplicaciones compuestas", count: 0, icon: "code", location: "Clase empresarial" },
{ title: "Smart Client", count: 0, icon: "spark", location: "Tecnología propietaria" },
{ title: "Formularios sociales", count: 0, icon: "cloud", location: "Primera tecnología de la industria" }];


function Productos() {
  return (
    <div className="app">
      <CursorGlow />
      <Nav />

      <main style={{ paddingTop: 0 }}>
        {/* Hero con imagen de fondo */}
        <section style={{ position: "relative", overflow: "hidden", minHeight: "82vh", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: 'url("images/hero-bg.jpg")', backgroundSize: "cover", backgroundPosition: "center right", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(4,4,15,0.92) 0%, rgba(4,4,15,0.72) 38%, rgba(4,4,15,0.25) 65%, transparent 100%)", zIndex: 1 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,4,15,0.55) 0%, transparent 25%, transparent 70%, rgba(4,4,15,0.65) 100%)", zIndex: 1 }} />
          <div className="container" style={{ position: "relative", zIndex: 2, padding: "150px 32px" }}>
            <div style={{ maxWidth: 640 }}>
              <h1 style={{ fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1.04, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", color: "#fff", textShadow: "0 6px 40px rgba(0,0,0,0.55)", margin: 0, marginBottom: 22 }}>
                {"Software creado para el "}<span className="text-grad">mundo</span>
              </h1>
              <p style={{ fontSize: "clamp(18px, 2.2vw, 23px)", lineHeight: 1.55, color: "var(--fg)", fontWeight: 500, maxWidth: 560 }}>
                No hacemos outsourcing. Construimos productos propios que resuelven los desafíos reales de la industria.
              </p>
            </div>
          </div>
        </section>

        <hr className="hr-glow" />

        {/* Descripción centrada */}
        <section className="container" style={{ padding: "80px 0 10px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 24 }}>
              {"¿Qué "}<span className="text-grad">construimos</span>{"?"}
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", maxWidth: 680, margin: "0 auto" }}>Desarrollamos tecnología propia alineada a las necesidades reales de las industrias. Desde Bolivia creamos productos de impacto para clientes activos en Estados Unidos.


            </p>
          </div>
        </section>

        <ProductsGrid />
      </main>

      <Footer />
    </div>);

}

/* Filas de "pills" para el carrusel (se repiten en bucle) */
const PILL_ROWS = [
[
{ label: "Innovación", variant: "dim" },
{ icon: "cloud", variant: "icon" },
{ label: "Know Your Customer", variant: "normal" },
{ label: "Optimización", variant: "filled" },
{ label: "Administración", variant: "normal" },
{ icon: "shield", variant: "icon" },
{ label: "Automatización", variant: "dim" }],

[
{ label: "Tecnología", variant: "filled" },
{ icon: "pulse", variant: "icon" },
{ label: "Funcionalidad", variant: "normal" },
{ label: "Know Your Fraud", variant: "dim" },
{ label: "Soluciones", variant: "normal" },
{ icon: "spark", variant: "icon" },
{ label: "Gestión", variant: "dim" }],

[
{ label: "Administración", variant: "normal" },
{ icon: "code", variant: "icon" },
{ label: "Know Your Claim", variant: "filled" },
{ label: "Productividad", variant: "dim" },
{ label: "Smart Client", variant: "normal" },
{ icon: "chart", variant: "icon" },
{ label: "Optimización", variant: "dim" }],

[
{ label: "Gestión de casos", variant: "normal" },
{ icon: "team", variant: "icon" },
{ label: "Automatización", variant: "filled" },
{ label: "Know Your Provider", variant: "normal" },
{ label: "Funcionalidad", variant: "dim" },
{ icon: "rocket", variant: "icon" },
{ label: "Formularios sociales", variant: "normal" }]];


function ProductsGrid() {
  return (
    <section className="block" id="productos" style={{ paddingBottom: 60 }}>
      <div className="pill-marquee">
        {PILL_ROWS.map((row, ri) =>
        <div className={"pill-row" + (ri % 2 === 1 ? " rev" : "")} key={ri} style={{ animationDuration: 34 + ri * 6 + "s" }}>
          {[...row, ...row].map((p, i) => <Pill key={i} p={p} />)}
        </div>
        )}
      </div>
    </section>);

}

function Pill({ p }) {
  const Icon = p.icon ? iconMap[p.icon] : null;
  if (p.variant === "icon") {
    return (
      <span className="pill pill-icon">
        {Icon && <Icon style={{ width: 18, height: 18 }} />}
      </span>);

  }
  return (
    <span className={"pill" + (p.variant === "filled" ? " filled" : p.variant === "dim" ? " dim" : "")}>
      {Icon && <Icon style={{ width: 17, height: 17, opacity: 0.85 }} />}
      {p.label}
    </span>);

}

function PostCard({ item }) {
  const [open, setOpen] = React.useState(false);
  return (
    <article
      className={"glass post-card" + (open ? " open" : "")}
      onClick={() => setOpen((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {if (e.key === "Enter" || e.key === " ") {e.preventDefault();setOpen((v) => !v);}}}>
      <header className="post-head">
        <span className="post-avatar">
          <img src="images/dh-avatar.png" alt="Digital Harbor" />
        </span>
        <span className="post-id">
          <span className="post-name">Digital Harbor</span>
          <span className="post-handle">@digitalharbor</span>
        </span>
        <span className="post-toggle" aria-hidden="true">{open ? "–" : "+"}</span>
      </header>
      {open && <p className="post-body">{item.text}</p>}
      <div className="post-date">{item.date}</div>
    </article>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<Productos />);