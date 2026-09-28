/* ============================================================
   POSTULACIÓN DIRECTA — Digital Harbor
   ============================================================ */
const { useState: useStateP, useEffect: useEffectP } = React;

const JOBS_P = [
{ title: "Business Analyst", count: 4, icon: "chart", location: "Base Bolivia", href: "business-analyst.html" },
{ title: "Pasante de Recursos Humanos", count: 1, icon: "team", location: "Base Cochabamba" },
{ title: "Auxiliar Contable", count: 1, icon: "pen", location: "Base Cochabamba" },
{ title: "Product Marketing Specialist", count: 3, icon: "spark", location: "Base Cochabamba" },
{ title: "QA Junior", count: 1, icon: "shield", location: "Base Bolivia" },
{ title: "Back End Developer", count: 1, icon: "code", location: "Base Bolivia" },
{ title: "Product Support", count: 1, icon: "pulse", location: "Base Bolivia" },
{ title: "Engineer Manager", count: 1, icon: "rocket", location: "Base Bolivia" }];


function PostulacionDirecta() {
  return (
    <div className="app">
      <CursorGlow />
      <Nav />

      <main style={{ paddingTop: 0 }}>
        {/* Hero con imagen de fondo */}
        <section style={{ position: "relative", overflow: "hidden", minHeight: "82vh", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: 'url("images/team-bg.jpg")', backgroundSize: "cover", backgroundPosition: "center right", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(4,4,15,0.92) 0%, rgba(4,4,15,0.72) 38%, rgba(4,4,15,0.25) 65%, transparent 100%)", zIndex: 1 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,4,15,0.55) 0%, transparent 25%, transparent 70%, rgba(4,4,15,0.65) 100%)", zIndex: 1 }} />
          <div className="container" style={{ position: "relative", zIndex: 2, padding: "150px 32px" }}>
            <div style={{ maxWidth: 640 }}>
              <h1 style={{ fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1.04, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", color: "#fff", textShadow: "0 6px 40px rgba(0,0,0,0.55)", margin: 0, marginBottom: 22 }}>
                {"Buscamos el mejor "}<span className="text-grad">talento</span>{""}
              </h1>
              <p style={{ fontSize: "clamp(18px, 2.2vw, 23px)", lineHeight: 1.55, color: "var(--fg)", fontWeight: 500, maxWidth: 560 }}>El talento que construye el futuro no trabaja en cualquier lugar. Construye con nosotros.



              </p>
            </div>
          </div>
        </section>

        <hr className="hr-glow" />

        {/* Descripción centrada */}
        <section className="container" style={{ padding: "80px 0 10px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 24 }}>
              {"¿Por qué unirte al "}<span className="text-grad">Harbor</span>{"?"}
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", maxWidth: 680, margin: "0 auto" }}>
              Impulsamos talento con oportunidades de crecimiento. En DH no solo trabajas en
              nuestros productos, también eres parte de la creación de nuevos productos para nuestros
              clientes activos en Estados Unidos.
            </p>
          </div>
        </section>

        {/* Why Join */}
        <section style={{ background: "transparent", padding: "70px 0 80px", marginBottom: 0 }}>
          <div className="container">
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, marginTop: 0 }}>
              {[
              { title: "Crecimiento acelerado", desc: "Desarrolla tus habilidades en un ambiente de alta exigencia", icon: "chart" },
              { title: "Flexibilidad", desc: "Modalidad remota con horarios adaptables a tus necesidades", icon: "cloud" },
              { title: "Stack moderno", desc: "Trabaja con las tecnologías más demandadas del mercado", icon: "code" },
              { title: "Cultura de equipo", desc: "Forma parte de un equipo colaborativo y apasionado", icon: "team" }].
              map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={i} className="glass" style={{ padding: 24, borderRadius: 12, minHeight: 140, display: "flex", flexDirection: "column", gap: 14, border: "1px solid var(--line)" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, rgba(135,50,158,0.25), rgba(43,80,255,0.15))", display: "grid", placeItems: "center", color: i % 2 === 0 ? "var(--cyan)" : "var(--purple-2)" }}>
                      {Icon && <Icon style={{ width: 24, height: 24 }} />}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-sora), Sora, sans-serif", fontSize: 16, fontWeight: 600, color: "#fff", margin: 0 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>);

              })}
            </div>
          </div>
        </section>

        <Jobs />
      </main>

      <Footer />
    </div>);

}

function Jobs() {
  const [hover, setHover] = useStateP(null);
  const [counter, setCounter] = useStateP(0);
  useEffectP(() => {
    let i = 0;
    const t = setInterval(() => {i++;setCounter(i);if (i >= 8) clearInterval(t);}, 90);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="block" id="vacantes" style={{ paddingBottom: 60 }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 30, marginBottom: 10 }}>
          <div style={{ maxWidth: 580 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Se parte del equipo</div>
            <h2 style={{ fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: 1, textTransform: "uppercase" }}>
              Vacantes<br /><span className="text-grad">abiertas</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.6, marginTop: 22, maxWidth: 480 }}>El talento que construye el futuro no trabaja en cualquier lugar. Construye con nosotros.

            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="jobs-grid" style={{ marginTop: 50 }}>
          {JOBS_P.map((j, i) =>
          <JobCard key={i} j={j} hover={hover === i} setHover={() => setHover(i)} clearHover={() => setHover(null)} />
          )}
        </div>
      </div>
    </section>);

}

function JobCard({ j, hover, setHover, clearHover }) {
  const Icon = iconMap[j.icon];
  return (
    <a href={j.href || undefined} onMouseEnter={setHover} onMouseLeave={clearHover} className="glass job-card"
    style={{ padding: "26px 22px 22px", position: "relative", cursor: "pointer", transition: "transform .35s ease, box-shadow .35s ease, border-color .3s", transform: hover ? "translateY(-8px)" : "none", boxShadow: hover ? "0 30px 60px -20px rgba(63,240,255,0.4), 0 0 0 1px rgba(63,240,255,0.45) inset, 0 0 60px -20px rgba(135,50,158,0.5) inset" : "none", display: "flex", flexDirection: "column", gap: 18, minHeight: 200, textDecoration: "none", color: "inherit" }}>
      {hover &&
      <span style={{ position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", background: "linear-gradient(90deg, transparent, rgba(63,240,255,0.18), transparent)", backgroundSize: "200% 100%", animation: "shimmer 1.6s linear infinite", mixBlendMode: "screen" }} />
      }
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, border: "1px solid var(--line-strong)", display: "grid", placeItems: "center", color: "var(--cyan)", background: "rgba(63,240,255,0.05)", transition: "all .3s", boxShadow: hover ? "0 0 24px rgba(63,240,255,0.4)" : "none" }}>
          {Icon && <Icon style={{ width: 20, height: 20 }} />}
        </div>
        {j.count > 1 &&
        <div style={{ padding: "4px 10px", borderRadius: 999, border: "1px solid rgba(177,79,211,0.5)", background: "rgba(135,50,158,0.10)", color: "var(--purple-2)", fontFamily: "var(--font-jetbrains), JetBrains Mono, monospace", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase" }}>{j.count} vacantes</div>
        }
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "var(--font-sora), Sora, sans-serif", fontSize: 18, fontWeight: 600, letterSpacing: "-.005em", lineHeight: 1.2, color: "#fff" }}>{j.title}</div>
        <div className="mono" style={{ fontSize: 11, color: "var(--muted)", marginTop: 8, letterSpacing: ".06em", display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: 5, background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} />
          {j.location}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid var(--line)" }}>
        <span className="mono uppercase" style={{ fontSize: 10, letterSpacing: ".24em", color: hover ? "var(--cyan)" : "var(--muted)", transition: "color .3s" }}>Ver detalles</span>
        <span style={{ width: 30, height: 30, borderRadius: 999, display: "grid", placeItems: "center", background: hover ? "linear-gradient(120deg, var(--blue), var(--purple))" : "rgba(255,255,255,0.05)", border: "1px solid " + (hover ? "transparent" : "var(--line)"), color: "#fff", transition: "all .3s", transform: hover ? "translateX(3px)" : "none" }}>
          <ArrowIcon style={{ width: 12, height: 12 }} />
        </span>
      </div>
    </a>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<PostulacionDirecta />);