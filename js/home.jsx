/* ============================================================
   HOME — Digital Harbor (inicio)
   ============================================================ */
const { useState: useStateH, useEffect: useEffectH, useRef: useRefH } = React;

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="inicio" style={{ position: "relative", overflow: "hidden", minHeight: "78vh", display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: 'url("images/hero-bg.jpg")', backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, transparent 30%, transparent 70%, rgba(4,4,15,0.45) 100%)", zIndex: 1 }} />
      <div className="container" style={{ position: "relative", zIndex: 2, padding: "150px 32px" }}>
        <div style={{ maxWidth: 880, marginLeft: "-72px" }}>
          <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 1.05, fontWeight: 700, color: "#fff", textShadow: "0 6px 40px rgba(0,0,0,0.55)", letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif" }}>
            {"Software empresarial"}<br />
            {"para el"}<br />
            {""}<span className="text-grad">mundo</span>
          </h1>
        </div>
      </div>
    </section>);

}

/* ---------- ABOUT ---------- */
function About() {
  const ref = useRefH(null);
  const [vis, setVis] = useStateH(false);
  const [mx, setMx] = useStateH(0);
  const [my, setMy] = useStateH(0);

  useEffectH(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVis(true)),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const handle = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMx(((e.clientX - r.left) / r.width - 0.5) * 2);
    setMy(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const reset = () => {setMx(0);setMy(0);};

  return (
    <section ref={ref} className="block" id="conoce" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container about-grid">
        <div className={"reveal" + (vis ? " in" : "")}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>QUE HACEMOS </div>
          <h2 style={{ fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: 1.02, textTransform: "uppercase" }}>
            PRODUCTOS CON<br /><span className="text-grad">IMPACTO GLOBAL</span>
          </h2>
          <div style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7, marginTop: 30, maxWidth: 540 }}>
            <p>Desarrollamos <strong>productos de software desde Bolivia para industrias y organizaciones alrededor del mundo.</strong></p>
            <p>Combinamos investigación, diseño y desarrollo para transformar nuevas tecnologías en <strong>productos y soluciones con impacto</strong>.</p>
            <p><strong>No hacemos outsourcing,</strong> nuestro enfoque siempre fue resolver los desafíos actuales de <strong>la industria</strong>.</p>
            <p style={{ color: "var(--fg)" }}>Impulsamos una cultura donde la <strong>curiosidad</strong>, <strong>la experimentación y la innovación</strong> forman parte del trabajo <strong>diario</strong>.</p>
          </div>
          <div style={{ display: "none" }}>
            {[].map(([n, l], i) =>
            <div key={i}>
                <div style={{ fontFamily: "var(--font-sora), Sora, sans-serif", fontSize: 38, fontWeight: 700, background: "linear-gradient(180deg, #fff, #87329e)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{n}</div>
                <div className="mono uppercase" style={{ fontSize: 10, color: "var(--muted)", marginTop: 4 }}>{l}</div>
              </div>
            )}
          </div>
        </div>
        <div className="hero-visual" onMouseMove={handle} onMouseLeave={reset} style={{ position: "relative", height: 460, perspective: 1200, minWidth: 0 }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: 24, overflow: "hidden", border: "1px solid var(--line-strong)", boxShadow: "0 40px 80px -20px rgba(43,80,255,0.45), 0 0 0 1px rgba(140,160,255,0.18) inset" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: 'url("images/team-bg.jpg")', backgroundSize: "cover", backgroundPosition: "center", transform: `scale(1.05) translate(${mx * -8}px, ${my * -6}px)`, transition: "transform .4s ease" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,4,15,0.35) 0%, rgba(4,4,15,0.55) 100%), linear-gradient(135deg, rgba(43,80,255,0.18), rgba(135,50,158,0.18))" }} />
          </div>
          <div className="float-card" style={{ top: 24, right: -10, width: 200, transform: `translate(${mx * -14}px, ${my * -10}px)`, transition: "transform .3s ease" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
              <div><div style={{ fontFamily: "var(--font-sora), Sora, sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: "-.02em", textTransform: "uppercase" }}>INNOVACIÓN</div></div>
              <div style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--line-strong)", display: "grid", placeItems: "center", color: "var(--cyan)" }}><SparkIcon style={{ width: 18, height: 18 }} /></div>
            </div>
            <div style={{ marginTop: 8, fontSize: 12, color: "var(--muted)", lineHeight: 1.45 }}>Desafiamos la forma de crear software.</div>
          </div>
          <div className="float-card" style={{ top: 186, right: -30, width: 210, transform: `translate(${mx * -18}px, ${my * -8}px)`, transition: "transform .3s ease" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
              <div style={{ fontFamily: "var(--font-sora), Sora, sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: "-.02em", textTransform: "uppercase" }}>PASIÓN</div>
              <div style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid var(--line-strong)", display: "grid", placeItems: "center", color: "var(--purple-2)" }}><RocketIcon style={{ width: 16, height: 16 }} /></div>
            </div>
            <div style={{ marginTop: 6, fontSize: 12, color: "var(--muted)", lineHeight: 1.45 }}>Creamos tecnología para el mundo.</div>
          </div>
          <div className="float-card" style={{ bottom: 24, right: 10, width: 210, transform: `translate(${mx * -10}px, ${my * -14}px)`, transition: "transform .3s ease" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
              <div style={{ fontFamily: "var(--font-sora), Sora, sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: "-.02em", textTransform: "uppercase" }}>DETERMINACIÓN</div>
              <div style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid var(--line-strong)", display: "grid", placeItems: "center", color: "var(--cyan)" }}><TrophyIcon style={{ width: 16, height: 16 }} /></div>
            </div>
            <div style={{ marginTop: 6, fontSize: 12, color: "var(--muted)", lineHeight: 1.45 }}>Convertimos ideas ambiciosas en productos.</div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- JOBS ---------- */
const JOBS = [
{ title: "Business Analyst", count: 4, icon: "chart", location: "Base Bolivia", href: "business-analyst.html" },
{ title: "Pasante de Recursos Humanos", count: 1, icon: "team", location: "Base Cochabamba" },
{ title: "Auxiliar Contable", count: 1, icon: "pen", location: "Base Cochabamba" },
{ title: "Product Marketing Specialist", count: 3, icon: "spark", location: "Base Cochabamba" },
{ title: "QA Junior", count: 1, icon: "shield", location: "Base Bolivia" },
{ title: "Back End Developer", count: 1, icon: "code", location: "Base Bolivia" },
{ title: "Product Support", count: 1, icon: "pulse", location: "Base Bolivia" },
{ title: "Engineer Manager", count: 1, icon: "rocket", location: "Base Bolivia" }];


function Jobs() {
  const [hover, setHover] = useStateH(null);
  const [counter, setCounter] = useStateH(0);
  useEffectH(() => {
    let i = 0;
    const t = setInterval(() => {i++;setCounter(i);if (i >= 8) clearInterval(t);}, 90);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="block" id="dhr" style={{ paddingBottom: 60 }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 30, marginBottom: 10 }}>
          <div style={{ maxWidth: 580 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>POSTULACIÓN DIRECTA</div>
            <h2 style={{ fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: 1, textTransform: "uppercase" }}>
              Únete a<br /><span className="text-grad">QUIENES CREAN</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.6, marginTop: 22, maxWidth: 480 }}>
              El talento que construye el futuro no trabaja en cualquier lugar. Construye con nosotros.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="jobs-grid" style={{ marginTop: 50 }}>
          {JOBS.map((j, i) =>
          <JobCard key={i} j={j} hover={hover === i} setHover={() => setHover(i)} clearHover={() => setHover(null)} />
          )}
        </div>
      </div>
    </section>);

}

function JobCard({ j, hover, setHover, clearHover }) {
  const Icon = iconMap[j.icon];
  return (
    <a href={j.href || "postulacion-directa.html#vacantes"} onMouseEnter={setHover} onMouseLeave={clearHover} className="glass job-card"
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

/* ---------- CULTURA WOW ---------- */
const CULTURE = [
{ icon: "team", label: "Trabajamos con equipos colaborativos", desc: "Formarás parte de equipos multidisciplinarios donde cada voz cuenta y los resultados se construyen en conjunto.", img: "images/team-bg.jpg" },
{ icon: "rocket", label: "Otorgamos nuevas oportunidades", desc: "Abrimos puertas a nuevos retos, roles y proyectos que aceleran tu crecimiento profesional.", img: "images/team-bg.jpg" },
{ icon: "chart", label: "Potenciamos tu carrera", desc: "Diseñamos planes de desarrollo para que avances con dirección y propósito dentro de la industria.", img: "images/team-bg.jpg" },
{ icon: "trophy", label: "Formamos líderes en el sector", desc: "Desarrollamos las habilidades de liderazgo que el mercado tecnológico necesita hoy.", img: "images/team-bg.jpg" },
{ icon: "code", label: "Aprende de expertos de la industria", desc: "Aprendizaje 100% práctico con problemas reales y mentoría de ingenieros altamente calificados.", img: "images/team-bg.jpg" },
{ icon: "pulse", label: "Participa en la creación de nuestros productos", desc: "Trabaja en productos que están en producción y generan impacto real para nuestros clientes.", img: "images/team-bg.jpg" },
{ icon: "spark", label: "Aprende de expertos de la industria", desc: "Comparte el día a día con profesionales que construyen software a escala global.", img: "images/team-bg.jpg" }];


function Cultura() {
  const [active, setActive] = useStateH(0);
  const cur = CULTURE[active];
  return (
    <section className="block" id="cultura">
      <div className="container">
        <div className="cultura-grid">
          {/* Columna izquierda */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>PROGRAMAS DE CAPACITACIÓN</div>
            <h2 style={{ fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: 1.02, textTransform: "uppercase", marginBottom: 30 }}>
              Impulsamos<br /><span className="text-grad">TALENTOS</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {CULTURE.map((c, i) => <BenefitRow key={i} c={c} i={i} active={active === i} onActivate={() => setActive(i)} />)}
            </div>
            <a className="btn btn-primary" href="programa-talento-dh.html" style={{ marginTop: 30 }}>
              Postula ahora <span className="arrow"><ArrowIcon style={{ width: 12, height: 12 }} /></span>
            </a>
          </div>

          {/* Columna derecha — showcase */}
          <div className="culture-showcase" style={{ position: "relative", minWidth: 0 }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: -8, borderRadius: 28, background: "linear-gradient(135deg, rgba(135,50,158,0.55), rgba(43,80,255,0.45))", filter: "blur(40px)", opacity: 0.6, zIndex: 0 }} />
            <div className="glass" style={{ position: "relative", zIndex: 1, borderRadius: 22, overflow: "hidden", minHeight: 520, display: "flex", flexDirection: "column" }}>
              <div key={"img-" + active} className="showcase-fade" style={{ position: "relative", height: 360, overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: `url("${cur.img}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,4,15,0.15) 0%, rgba(4,4,15,0.55) 70%, rgba(8,8,20,0.92) 100%), linear-gradient(135deg, rgba(43,80,255,0.18), rgba(135,50,158,0.18))" }} />
              </div>
              <div key={"txt-" + active} className="showcase-fade" style={{ padding: "30px 34px 36px", flex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-sora), Sora, sans-serif", fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, textTransform: "uppercase", marginBottom: 14 }}>
                  {cur.label}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7, margin: 0, maxWidth: 520 }}>{cur.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function BenefitRow({ c, i, active, onActivate }) {
  const [hover, setHover] = useStateH(false);
  const Icon = iconMap[c.icon];
  const on = active || hover;
  const col = i % 2 === 0 ? "var(--cyan)" : "var(--purple-2)";
  return (
    <div
      onMouseEnter={() => {setHover(true);onActivate();}}
      onMouseLeave={() => setHover(false)}
      onClick={onActivate}
      style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 18px", borderRadius: 14, cursor: "pointer", transition: "all .3s ease", transform: on ? "translateX(6px)" : "none", border: "1px solid transparent", background: "transparent" }}>
      <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 12, display: "grid", placeItems: "center", color: col, border: `1px solid ${on ? col : "var(--line)"}`, background: on ? `color-mix(in oklab, ${col} 12%, transparent)` : "rgba(255,255,255,0.02)", boxShadow: active ? `0 0 22px ${col}` : "none", transition: "all .3s" }}>
        {Icon && <Icon style={{ width: 22, height: 22 }} />}
      </span>
      <span style={{ fontFamily: "var(--font-sora), Sora, sans-serif", fontSize: 15, fontWeight: 600, letterSpacing: ".01em", lineHeight: 1.3, color: on ? "var(--fg)" : "var(--muted)", transition: "color .3s" }}>{c.label}</span>
    </div>);

}

/* ---------- BLOG ---------- */
const POSTS = [
{ date: "15 MAY, 2025", title: "Las Olimpiadas Space Race: una competencia de equipos DH", tag: "EVENTO", img: "images/post-space-race.jpg" },
{ date: "08 MAY, 2025", title: "Innovation Talks: charlas que transforman nuestra cultura", tag: "INNOVACION", img: "images/post-innovation-talks.jpg" },
{ date: "01 MAY, 2025", title: "Paintball DH: trabajo en equipo fuera de la oficina", tag: "CULTURA", img: "images/post-paintball.jpg" }];


function Blog() {
  return (
    <section className="block" id="blog">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <div className="eyebrow">Ultimas noticias DH</div>
          <a style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--cyan)", fontFamily: "var(--font-jetbrains), JetBrains Mono, monospace", fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", cursor: "pointer" }}>
            Ver todas las noticias{" "}
            <span style={{ width: 30, height: 30, borderRadius: 999, border: "1px solid var(--cyan)", display: "grid", placeItems: "center" }}><ArrowIcon style={{ width: 12, height: 12 }} /></span>
          </a>
        </div>
        <div className="blog-grid">
          {POSTS.map((p, i) => <PostCard key={i} p={p} />)}
        </div>
      </div>
    </section>);

}

function PostCard({ p }) {
  const [hover, setHover] = useStateH(false);
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="glass"
    style={{ padding: 0, overflow: "hidden", cursor: "pointer", transition: "transform .35s ease", transform: hover ? "translateY(-6px)" : "none" }}>
      <div style={{ aspectRatio: "16/10", position: "relative", overflow: "hidden", background: "#0a0a1c" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url("${p.img}")`, backgroundSize: "cover", backgroundPosition: "center", transform: hover ? "scale(1.06)" : "scale(1.0)", transition: "transform .6s ease" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,4,15,0) 40%, rgba(4,4,15,0.65) 100%)" }} />
        <div style={{ position: "absolute", top: 14, left: 14, padding: "5px 11px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.35)", backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.45)", fontFamily: "var(--font-jetbrains), JetBrains Mono, monospace", fontSize: 10, letterSpacing: ".2em", color: "#fff" }}>{p.tag}</div>
      </div>
      <div style={{ padding: "22px 24px 26px" }}>
        <div className="mono uppercase" style={{ fontSize: 11, color: "var(--muted)" }}>{p.date}</div>
        <h3 style={{ fontFamily: "var(--font-sora), Sora, sans-serif", fontSize: 18, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".02em", marginTop: 10, lineHeight: 1.3 }}>{p.title}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 18, color: "var(--cyan)", fontFamily: "var(--font-jetbrains), JetBrains Mono, monospace", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase" }}>
          Ver noticia{" "}
          <span style={{ width: 24, height: 24, borderRadius: 999, border: "1px solid var(--cyan)", display: "grid", placeItems: "center" }}><ArrowIcon style={{ width: 10, height: 10 }} /></span>
        </div>
      </div>
    </article>);

}

/* ---------- ROOT ---------- */
function Home() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main>
        <span id="top" style={{ position: "absolute" }} />
        <Hero />
        <hr className="hr-glow" />
        <About />
        <hr className="hr-glow" />
        <Cultura />
        <hr className="hr-glow" />
        <Jobs />
        <Footer />
      </main>
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<Home />);