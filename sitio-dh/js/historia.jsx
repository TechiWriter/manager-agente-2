/* ============================================================
   HISTORIA DE DH — Digital Harbor
   ============================================================ */
const HIST_MILESTONES = [
{
  year: "1997",
  title: "Nace Digital Harbor",
  place: "Estados Unidos",
  Icon: SparkIcon,
  desc: "Fundada en Estados Unidos como una compañía de aplicaciones compuestas, pionera en tecnología de fusión de datos y en la primera arquitectura SOA basada en modelos de la industria."
},
{
  year: "2003",
  title: "Llegada a Bolivia",
  place: "Cochabamba",
  Icon: RocketIcon,
  desc: "Se abre la filial en Cochabamba. La elección no fue casual: respondió al alto nivel profesional de los ingenieros y desarrolladores bolivianos y a la enorme cantidad y calidad de universidades del país formando talento en tecnología."
},
{
  year: "2004 – 2008",
  title: "Un equipo, tres países",
  place: "EE.UU. · India · Bolivia",
  Icon: TeamIcon,
  desc: "Digital Harbor integra un equipo de trabajo global entre Estados Unidos, India y Bolivia, desarrollando plataformas empresariales y soluciones de gestión de riesgos para el sector financiero."
},
{
  year: "2021",
  title: "Nuevas oficinas",
  place: "La Paz",
  Icon: ChartIcon,
  desc: "Se inauguran las nuevas oficinas en La Paz, apostando siempre por el talento local."
}];


const COCHABAMBA_REASONS = [
{ Icon: TeamIcon, title: "Talento que sobra", desc: "Cientos de ingenieros y desarrolladores se gradúan cada año de universidades cochabambinas con un nivel técnico que compite a escala global." },
{ Icon: TrophyIcon, title: "Cultura de excelencia", desc: "La reputación de Bolivia dentro de DH se construyó con trabajo: profesionales rigurosos, creativos y comprometidos con la calidad." },
{ Icon: RocketIcon, title: "Potencial sin explotar", desc: "Una nueva generación lista para construir tecnología de clase mundial sin salir del país. Esa energía es lo que mueve a una región hacia adelante." }];


function HistoriaDH() {
  return (
    <div className="app">
      <CursorGlow />
      <Nav />

      <main style={{ paddingTop: 0 }}>
        {/* Hero con imagen de fondo */}
        <section style={{ position: "relative", overflow: "hidden", minHeight: "82vh", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: 'url("images/quienes-hero.jpg")', backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(4,4,15,0.92) 0%, rgba(4,4,15,0.72) 38%, rgba(4,4,15,0.25) 65%, transparent 100%)", zIndex: 1 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,4,15,0.55) 0%, transparent 25%, transparent 70%, rgba(4,4,15,0.65) 100%)", zIndex: 1 }} />
          <div className="container" style={{ position: "relative", zIndex: 2, padding: "150px 32px" }}>
            <div style={{ maxWidth: 660 }}>
              <h1 style={{ fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1.04, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", color: "#fff", textShadow: "0 6px 40px rgba(0,0,0,0.55)", margin: 0, marginBottom: 22 }}>
                Historia de <span className="text-grad">DH</span>
              </h1>
              <p style={{ fontSize: "clamp(18px, 2.2vw, 24px)", lineHeight: 1.5, color: "var(--fg)", fontWeight: 500, maxWidth: 540 }}>El talento boliviano se volvió pieza clave de una empresa global.

              </p>
            </div>
          </div>
        </section>

        <hr className="hr-glow" />

        <div className="programa-flow">
        {/* Intro */}
        <section className="container" style={{ padding: "90px 0 40px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 50px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 24 }}>
              {"Una empresa global con "}<span className="text-grad">talento boliviano</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", maxWidth: 700, margin: "0 auto" }}>
              Digital Harbor nació en 1997 en Estados Unidos y, en su camino, encontró en Bolivia algo
              que pocos veían: un semillero de talento capaz de construir tecnología de primer nivel.
              Lo que empezó como una filial hoy es el motor creativo de productos que llegan al mundo.
            </p>
          </div>
        </section>

        {/* Cronología */}
        <section className="container" style={{ padding: "50px 0 80px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif" }}>
              {"Nuestra "}<span className="text-grad">cronología</span>
            </h2>
          </div>

          <div className="hist-timeline">
            <span className="hist-spine" aria-hidden="true" />
            {HIST_MILESTONES.map((m, i) => {
                const Icon = m.Icon;
                const col = i % 2 === 0 ? "var(--cyan)" : "var(--purple-2)";
                return (
                  <div className={"hist-row" + (i % 2 === 0 ? " left" : " right")} key={i}>
                  <div className="hist-card glass-card" style={{ padding: "26px 28px", borderRadius: 18, background: "linear-gradient(135deg, rgba(20,10,40,0.82), rgba(10,5,25,0.92))", border: "1px solid rgba(180,180,255,0.12)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>
                      <span style={{ width: 46, height: 46, borderRadius: 12, flexShrink: 0, display: "grid", placeItems: "center", color: col, border: `1px solid ${col}`, background: `color-mix(in oklab, ${col} 12%, transparent)` }}>
                        <Icon style={{ width: 24, height: 24 }} />
                      </span>
                      <div>
                        <div className="mono" style={{ fontSize: 13, letterSpacing: ".14em", color: col, fontWeight: 600 }}>{m.year}</div>
                        <h3 style={{ fontSize: 20, fontWeight: 700, fontFamily: "var(--font-sora), Sora, sans-serif", letterSpacing: "-0.01em", margin: 0 }}>{m.title}</h3>
                      </div>
                    </div>
                    <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".12em", color: "rgba(230,230,245,0.55)", marginBottom: 12, fontFamily: "var(--font-jetbrains), monospace" }}>{m.place}</div>
                    <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
                  </div>
                  <span className="hist-dot" style={{ background: col, boxShadow: `0 0 0 5px ${col}22, 0 0 22px ${col}` }} />
                </div>);

              })}
          </div>
        </section>

        {/* Cochabamba — Silicon Valley */}
        <section style={{ background: "transparent", padding: "90px 0", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: "linear-gradient(90deg, transparent, var(--purple-2), var(--cyan), transparent)" }} />
          <div className="container">
            <div style={{ maxWidth: 860, margin: "0 auto 56px", textAlign: "center" }}>
              <h2 style={{ fontSize: "clamp(30px, 4.2vw, 54px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 22 }}>
                {"Cochabamba, el "}<span className="text-grad">Silicon Valley</span>{" de Bolivia"}
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", maxWidth: 720, margin: "0 auto" }}>Cochabamba reúne las condiciones para convertirse en el polo tecnológico de la región por su talento, formación y una ambición. Apostamos por su gente porque creemos en su potencial.



                </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {COCHABAMBA_REASONS.map((r, i) => {
                  const Icon = r.Icon;
                  const col = i % 2 === 0 ? "var(--cyan)" : "var(--purple-2)";
                  return (
                    <div key={i} className="glass-card" style={{ padding: 30, borderRadius: 18, background: "linear-gradient(135deg, rgba(20,10,40,0.72), rgba(10,5,25,0.88))", border: "1px solid rgba(180,180,255,0.1)" }}>
                    <div style={{ width: 54, height: 54, borderRadius: 14, display: "grid", placeItems: "center", color: col, border: `1px solid ${col}`, background: `color-mix(in oklab, ${col} 10%, transparent)`, marginBottom: 20 }}>
                      <Icon style={{ width: 27, height: 27 }} />
                    </div>
                    <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, fontFamily: "var(--font-sora), Sora, sans-serif" }}>{r.title}</h3>
                    <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
                  </div>);

                })}
            </div>
          </div>
        </section>

        {/* Cierre */}
        <section className="container" style={{ padding: "30px 0 90px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", padding: "10px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
            <h2 style={{ fontSize: "clamp(26px, 3.4vw, 40px)", lineHeight: 1.15, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif" }}>
              <span className="text-grad">El futuro se construye desde aquí</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.7, maxWidth: 560 }}>
              ¿Quieres ser parte de esta historia? El talento que construye el futuro no trabaja en cualquier lugar.
            </p>
            <a className="btn btn-primary" href="postulacion-directa.html" style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
              Únete a DH <span className="arrow"><ArrowIcon style={{ width: 12, height: 12 }} /></span>
            </a>
          </div>
        </section>
        <Footer />
      </div>
      </main>
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<HistoriaDH />);