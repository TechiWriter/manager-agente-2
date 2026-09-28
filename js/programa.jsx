/* ============================================================
   PROGRAMA TALENTO DH — Digital Harbor
   ============================================================ */
const BookIcon = (props) =>
<svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 6.5C10.5 5 8 4.5 4 5v13c4-.5 6.5 0 8 1.5 1.5-1.5 4-2 8-1.5V5c-4-.5-6.5 0-8 1.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M12 6.5v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>;

const MentorIcon = (props) =>
<svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 1.8l1.4 1.5L15.4 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;

const PortfolioIcon = (props) =>
<svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>;

const phases = [
{ num: "01", title: "Postulación", desc: "Envía tu aplicación con tu CV y datos personales" },
{ num: "02", title: "Evaluación", desc: "Completa las pruebas técnicas y de lógica" },
{ num: "03", title: "Entrevista", desc: "Entrevista de habilidades blandas con nuestro equipo" },
{ num: "04", title: "Resultados", desc: "Comunicación de los resultados de tu proceso" },
{ num: "05", title: "Contrato", desc: "Firma de contrato y documentación" },
{ num: "06", title: "Bienvenido", desc: "Inicio del programa ¡Bienvenido al equipo!" }];


const benefits = [
{ Icon: BookIcon, title: "Entrenamiento Práctico", desc: "100% práctico con problemas reales, dictado por ingenieros altamente calificados." },
{ Icon: MentorIcon, title: "Aprendizaje Autónomo", desc: "Desarrollarás la habilidad de aprender por tu propia cuenta." },
{ Icon: PortfolioIcon, title: "Mentoría Personalizada", desc: "Trainers que te explicarán con detalle, asignarán tareas y te guiarán en tu desarrollo." },
{ Icon: RocketIcon, title: "Oportunidad Laboral", desc: "Al terminar serás evaluado para recibir una oferta laboral como Ingeniero de Desarrollo." }];


function ProgramaTalentoDH() {
  const [showModal, setShowModal] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 160;
      if (nearBottom) setShowModal(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  const closeModal = () => { setShowModal(false); setDismissed(true); };

  return (
    <div className="app">
      <CursorGlow />
      <Nav />

      <main style={{ paddingTop: 0 }}>
        {/* Hero con imagen de fondo */}
        <section style={{ position: "relative", overflow: "hidden", minHeight: "82vh", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: 'url("images/talento-hero.jpg")', backgroundSize: "cover", backgroundPosition: "center right", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(4,4,15,0.92) 0%, rgba(4,4,15,0.72) 38%, rgba(4,4,15,0.25) 65%, transparent 100%)", zIndex: 1 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,4,15,0.55) 0%, transparent 25%, transparent 70%, rgba(4,4,15,0.65) 100%)", zIndex: 1 }} />
          <div className="container" style={{ position: "relative", zIndex: 2, padding: "150px 32px" }}>
            <div style={{ maxWidth: 640, marginLeft: "-72px" }}>
              <h1 style={{ fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1.04, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", color: "#fff", textShadow: "0 6px 40px rgba(0,0,0,0.55)", marginBottom: 20, height: "158px", width: "640px", margin: "0px" }}>
                Programa Talento <span className="text-grad">DH DEV</span>
              </h1>
              <p style={{ fontSize: "clamp(18px, 2.2vw, 24px)", lineHeight: 1.5, color: "var(--fg)", fontWeight: 500, maxWidth: 520 }}>Es un programa de entrenamiento 100% virtual y gratuito con una duración de 6 meses.

              </p>
            </div>
          </div>
        </section>

        <hr className="hr-glow" />

        <div className="programa-flow">
        {/* Descripción breve */}
        <section className="container" style={{ padding: "80px 0 20px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 24 }}>
              {"¿Qué es el "}<span className="text-grad">Programa Talento DH?</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", maxWidth: 680, margin: "0 auto" }}>
              Es un bootcamp de entrenamiento 100% virtual y gratuito, con una duración de 6 meses,
              diseñado para formar a la próxima generación de Ingenieros de Desarrollo de Software.
              Aprenderás de forma práctica trabajando con nuestros productos reales y serás guiado por
              ingenieros altamente calificados.
            </p>
          </div>
        </section>

        {/* ¿A quienes está dirigido? */}
        <section className="container" style={{ padding: "90px 0 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 24 }}>
              {"¿A quienes está "}<span className="text-grad">dirigido</span>{"?"}
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", maxWidth: 680, margin: "0 auto" }}>A estudiantes de últimos semestres o personas recién egresadas del sector de tecnología, con el fin de prepararlos para el ámbito laboral como Ingenieros de Desarrollo de Software.




              </p>
          </div>
        </section>

        {/* What you'll learn */}
        <section style={{ background: "transparent", padding: "80px 0", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: "linear-gradient(90deg, transparent, var(--purple-2), var(--cyan), transparent)" }} />
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40, alignItems: "center" }}>
              <div>
                <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 20 }}>
                  {"¿Qué "}<span className="text-grad">aprenderás</span>{"?"}
                </h2>
                <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7 }}>Dentro del programa podrás fortalecer tus conocimientos teóricos y llevarlos a la práctica debido a que el modelo de enseñanza tiene como base trabajar con nuestros productos.

Hacemos énfasis en desarrollar habilidades en Back End y Front End, para luego definir tu camino profesional en base a preferencias o habilidades.


                  </p>
              </div>
              <div className="glass-card" style={{ padding: 32, borderRadius: 20, background: "linear-gradient(135deg, rgba(20, 10, 40, 0.8), rgba(10, 5, 25, 0.9))", border: "1px solid rgba(180, 180, 255, 0.1)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, rgba(135,50,158,0.3), rgba(43,80,255,0.2))", display: "grid", placeItems: "center", color: "var(--cyan)" }}>
                      <CodeIcon style={{ width: 24, height: 24 }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 16 }}>Back End</div>
                      <div style={{ color: "var(--muted)", fontSize: 13 }}>APIs, bases de datos, arquitectura</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, rgba(135,50,158,0.3), rgba(43,80,255,0.2))", display: "grid", placeItems: "center", color: "var(--purple-2)" }}>
                      <ChartIcon style={{ width: 24, height: 24 }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 16 }}>Front End</div>
                      <div style={{ color: "var(--muted)", fontSize: 13 }}>Interfaces, UX, frameworks modernos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container" style={{ padding: "80px 0" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif" }}>
              {"¿Qué obtendrás del "}<span className="text-grad">Programa</span>{"?"}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {benefits.map((item, i) =>
              <div key={i} className="glass-card" style={{ padding: 28, borderRadius: 16, background: "linear-gradient(135deg, rgba(20, 10, 40, 0.7), rgba(10, 5, 25, 0.85))", border: "1px solid rgba(180, 180, 255, 0.08)", transition: "all 0.3s" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "linear-gradient(135deg, rgba(135,50,158,0.25), rgba(43,80,255,0.15))", display: "grid", placeItems: "center", color: i % 2 === 0 ? "var(--cyan)" : "var(--purple-2)", marginBottom: 20 }}>
                  <item.Icon style={{ width: 26, height: 26 }} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, fontFamily: "var(--font-sora), Sora, sans-serif" }}>{item.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
              )}
          </div>
        </section>

        {/* Timeline */}
        <section style={{ background: "transparent", padding: "80px 0", position: "relative" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif" }}>
                {"Fases del proceso de "}<span className="text-grad">aplicación</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, position: "relative" }}>
              {phases.map((phase, i) =>
                <div key={i} style={{ position: "relative", padding: 24, borderRadius: 16, background: "linear-gradient(135deg, rgba(20, 10, 40, 0.6), rgba(10, 5, 25, 0.8))", border: "1px solid rgba(180, 180, 255, 0.08)", textAlign: "center" }}>
                  <div style={{ fontSize: 36, fontWeight: 700, fontFamily: "var(--font-sora), Sora, sans-serif", background: "linear-gradient(135deg, var(--cyan), var(--purple-2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 12 }}>{phase.num}</div>
                  <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{phase.title}</h4>
                  <p style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.5 }}>{phase.desc}</p>
                </div>
                )}
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <Testimonios />

        {/* Brochure */}

        {/* Banner */}
      </div>
      </main>

      {showModal &&
      <div className="brochure-overlay" onClick={closeModal}>
        <div className="brochure-modal glass" onClick={(e) => e.stopPropagation()}>
          <button className="brochure-close" onClick={closeModal} aria-label="Cerrar">×</button>
          <div className="brochure-badge">
            <RocketIcon style={{ width: 26, height: 26 }} />
          </div>
          <h3 className="brochure-title text-grad">¡Próxima versión en camino!</h3>
          <p className="brochure-text">
            Pronto abriremos la siguiente versión, espera el anuncio en nuestras redes sociales.
          </p>
          <a className="btn btn-primary brochure-btn" href="brochure-digital-harbor.pdf" download>
            Descargar brochure <ArrowIcon style={{ width: 14, height: 14 }} />
          </a>
        </div>
      </div>
      }

      <Footer />
    </div>);

}

/* ---------- TESTIMONIOS (YouTube Shorts) ---------- */
const SHORTS = [
"8gJBBITPgt0",
"k86Rhqb2V6s",
"QimJ12N0YkU"];


function ShortCard({ id, i }) {
  const [playing, setPlaying] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  return (
    <div className="glass" style={{ position: "relative", borderRadius: 20, overflow: "hidden", aspectRatio: "9 / 16", background: "#0a0a1c" }}>
      {playing ?
      <React.Fragment>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
          title={`Testimonio ${id}`}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "0" }} />
        <a
          href={`https://www.youtube.com/shorts/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mono uppercase"
          style={{ position: "absolute", bottom: 10, right: 10, zIndex: 2, fontSize: 9, letterSpacing: ".14em", color: "rgba(255,255,255,0.7)", textDecoration: "none", background: "rgba(0,0,0,0.45)", padding: "5px 9px", borderRadius: 999, backdropFilter: "blur(4px)" }}>
          Ver en YouTube ↗
        </a>
      </React.Fragment> :


      <button
        onClick={() => setPlaying(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label="Reproducir video"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "0", cursor: "pointer", padding: 0, display: "grid", placeItems: "center", background: "#0a0a1c" }}>
          <img
          src={`https://i.ytimg.com/vi/${id}/oardefault.jpg`}
          onError={(e) => {e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;}}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />

          <span aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,4,15,0) 40%, rgba(4,4,15,0.35) 100%)" }} />
          <span style={{ position: "relative", width: 74, height: 74, borderRadius: 999, display: "grid", placeItems: "center", color: "#fff", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)", border: "2px solid rgba(255,255,255,0.85)", boxShadow: hover ? "0 0 36px rgba(255,255,255,0.45)" : "0 8px 30px -8px rgba(0,0,0,0.6)", transform: hover ? "scale(1.08)" : "scale(1)", transition: "all .3s" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 30, height: 30, marginLeft: 4 }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      }
    </div>);

}

function Testimonios() {
  return (
    <section className="container" style={{ padding: "70px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 50, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
        <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.12, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 18 }}>
          {"Conoce a quiénes ya dieron el "}<span className="text-grad">primer paso</span>
        </h2>
        <p style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.7, margin: 0 }}>
          Escucha las experiencias de quienes aceptaron el desafío, completaron el programa y comenzaron
          a abrirse camino en la industria del software.
        </p>
      </div>
      <div className="tiktok-grid">
        {SHORTS.map((id, i) => <ShortCard key={id} id={id} i={i} />)}
      </div>
    </section>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<ProgramaTalentoDH />);