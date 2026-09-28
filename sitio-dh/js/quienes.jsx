/* ============================================================
   QUIÉNES SOMOS — Digital Harbor
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


function QuienesSomos() {
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
            <div style={{ maxWidth: 640, marginLeft: "-72px" }}>
              <h1 style={{ fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1.04, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", color: "#fff", textShadow: "0 6px 40px rgba(0,0,0,0.55)", marginBottom: 20, width: "640px", margin: "0px" }}>
                Creamos software <span className="text-grad">empresarial</span>
              </h1>
              <p style={{ fontSize: "clamp(18px, 2.2vw, 24px)", lineHeight: 1.5, color: "var(--fg)", fontWeight: 500, maxWidth: 520, marginTop: 20 }}>Más de 25 años desarrollando software que mueve al mundo.

              </p>
            </div>
          </div>
        </section>

        <hr className="hr-glow" />

        <div className="programa-flow">
        {/* ¿A quienes está dirigido? */}
        <section className="container" style={{ padding: "90px 0 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 24 }}>
              {"¿Quiénes "}<span className="text-grad">somos</span>{"?"}
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", maxWidth: 680, margin: "0 auto" }}>Digital Harbor nació en 1997 en Estados Unidos como una compañía de aplicaciones compuestas, luego se expandió a India y Bolivia y formó un equipo de trabajo integrado por los tres países.
<br /><br />
En 2003 se abre la filial en Bolivia, una elección que se debió al nivel profesional de los ingenieros y desarrolladores de software del país y el potencial que ofrece la gran cantidad y calidad de universidades bolivianas que forman profesionales en el área de tecnología. Bolivia es parte de Digital Harbor gracias a la reputación que se construyó.
              </p>
          </div>
        </section>

        {/* What you'll learn */}
        <section style={{ background: "transparent", padding: "80px 0", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: "linear-gradient(90deg, transparent, var(--purple-2), var(--cyan), transparent)" }} />
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 50, alignItems: "start" }}>
              <div>
                <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 20 }}>
                  <span className="text-grad">Misión</span>
                </h2>
                <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7 }}>Transformar las aplicaciones de software empresariales y la gestión de datos en un entorno plenamente colaborativo, impulsando la próxima generación de desarrolladores para el mercado tecnológico internacional.</p>
              </div>
              <div>
                <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 20 }}>
                  <span className="text-grad">Visión</span>
                </h2>
                <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7 }}>Ser referentes en el desarrollo de software empresarial, creando productos propios de clase mundial desde Bolivia e impulsando el talento local hacia la industria tecnológica global.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Historia — línea de tiempo interactiva */}
        <HistoriaTimeline />
      </div>
      </main>

      <Footer />
    </div>);

}

/* ---------- HISTORIA (línea de tiempo interactiva) ---------- */
const HISTORY = [
{
  period: "1997 – 2003",
  title: "Proveedor de tecnología innovadora",
  points: [
  "Fundada como una empresa de aplicaciones compuestas.",
  "Lanzamiento de la primera plataforma comercial de fusión de datos para el sector de inteligencia.",
  "Desarrolló la primera tecnología Smart Client de la industria.",
  "Creó la primera tecnología SOA basada en modelos de la industria."]

},
{
  period: "2004 – 2008",
  title: "Enfoque en servicios financieros para la gestión de riesgos",
  points: [
  "Desarrolló la primera plataforma de aplicaciones compuestas de clase empresarial de la industria.",
  "Lanzamiento de Conozca a su Cliente (KYC): la solución de la industria bancaria para el cumplimiento de ATF/sanciones.",
  "Presentamos Know Your Fraud: la primera solución de fraude de canales cruzados de la industria bancaria.",
  "Gestión de casos de próxima generación para la gestión de investigaciones."]

},
{
  period: "2009 – Al presente",
  title: "Nos centramos en la atención médica y creación de nuevos productos",
  points: [
  "Know Your Costumer: primera solución de modelado predictivo para el fraude en el cuidado de la salud.",
  "Know Your Provider : la primera solución automatizada de prevención de fraudes de atención al cliente.",
  "La primera tecnología de formularios sociales de la industria."]

}];


/* posición de cada nodo sobre la curva (x %, y % top) y color de marca */
const TL_POS = [{ x: 14, y: 60 }, { x: 50, y: 33 }, { x: 86, y: 56 }];
const TL_COLORS = ["#7c6cff", "#b14fd3", "#e26ec0"];

function HistoriaTimeline() {
  const [active, setActive] = React.useState(0);
  const cur = HISTORY[active];
  return (
    <section style={{ background: "transparent", padding: "90px 0 70px", position: "relative" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif" }}>
            {"Nuestra "}<span className="text-grad">trayectoria</span>
          </h2>
        </div>

        {/* Track con curva animada + nodos */}
        <div className="tl-track">
          <svg className="tl-curve" viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="tlGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7c6cff" />
                <stop offset="50%" stopColor="#b14fd3" />
                <stop offset="100%" stopColor="#e26ec0" />
              </linearGradient>
            </defs>
            <path className="tl-path-base" d="M 0 22 C 5 20.5, 10 19.4, 14 19.2 C 27 18.8, 38 11.5, 50 10.6 C 62 9.7, 74 17.7, 86 17.9 C 91 18, 96 18.5, 100 19"
            fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2.4" strokeLinecap="round" />
            <path className="tl-path-draw" d="M 0 22 C 5 20.5, 10 19.4, 14 19.2 C 27 18.8, 38 11.5, 50 10.6 C 62 9.7, 74 17.7, 86 17.9 C 91 18, 96 18.5, 100 19"
            fill="none" stroke="url(#tlGrad)" strokeWidth="1.1" strokeLinecap="round" />
          </svg>

          {HISTORY.map((h, i) => {
            const on = active === i;
            const p = TL_POS[i];
            const col = TL_COLORS[i];
            return (
              <div className="tl-item" key={i}>
                <button
                  onClick={() => setActive(i)}
                  aria-label={h.period}
                  className={"tl-node" + (on ? " on" : "")}
                  style={{ left: p.x + "%", top: p.y + "%", borderColor: col, "--tl-col": col, boxShadow: on ? `0 0 0 5px ${col}26, 0 0 30px ${col}` : `0 0 16px ${col}80`, background: on ? col : "rgba(14,12,30,0.92)" }}>
                  <span style={{ width: 7, height: 7, borderRadius: 999, background: on ? "#fff" : col, display: "block" }} />
                </button>
                <button
                  onClick={() => setActive(i)}
                  className={"tl-label tl-label-" + i + (on ? " on" : "")}
                  style={{ left: p.x + "%", top: p.y + "%" }}>
                  <div className="tl-period" style={{ color: col }}>{h.period}</div>
                  <div className="tl-headline">{h.title}</div>
                </button>
              </div>);

          })}
        </div>

        {/* Panel de detalle */}
        <div key={active} className="rm-fade tl-detail" style={{ marginTop: 38, padding: "30px 34px", borderRadius: 18, background: "linear-gradient(135deg, rgba(20,10,40,0.86), rgba(10,5,25,0.94))", border: `1px solid ${TL_COLORS[active]}4d`, boxShadow: `0 0 50px -20px ${TL_COLORS[active]}`, maxWidth: 880, marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18, flexWrap: "wrap" }}>
            <span className="mono" style={{ fontSize: 13, letterSpacing: ".14em", padding: "7px 14px", borderRadius: 999, color: "#06080f", fontWeight: 700, background: TL_COLORS[active] }}>{cur.period}</span>
            <h3 style={{ fontSize: "clamp(18px, 2.2vw, 23px)", fontWeight: 700, fontFamily: "var(--font-sora), Sora, sans-serif", letterSpacing: "-0.01em", lineHeight: 1.25, margin: 0, flex: 1, minWidth: 220 }}>{cur.title}</h3>
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {cur.points.map((pt, i) =>
            <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "var(--muted)", fontSize: 15, lineHeight: 1.6 }}>
                <span style={{ flexShrink: 0, marginTop: 8, width: 7, height: 7, borderRadius: 999, background: TL_COLORS[active] }} />
                {pt}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<QuienesSomos />);