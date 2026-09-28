/* ============================================================
   BUSINESS ANALYST — Digital Harbor
   Hero + Why Join + Job Description + Responsibilities + Apply form
   ============================================================ */
const { useState: useStateBA, useEffect: useEffectBA, useRef: useRefBA } = React;

const APPLY_EMAIL = "kimsoraji@gmail.com";

/* ============================================================
   ENVÍO AUTOMÁTICO DE CORREO (con adjunto, sin abrir nada)
   ------------------------------------------------------------
   Pega aquí tu Access Key GRATUITA de Web3Forms:
     1. Entra a  https://web3forms.com
     2. Escribe tu correo (kimsoraji@gmail.com) y pulsa "Create Access Key"
     3. Te llega la key al correo. Pégala abajo entre las comillas.
   Eso es todo: el formulario enviará el correo con el CV adjunto
   automáticamente, sin abrir Gmail ni la app de escritorio.
   ============================================================ */
const WEB3FORMS_ACCESS_KEY = "8dd841d3-22b5-41fd-821b-05ef0e31187f";

/* ---------- scroll reveal hook ---------- */
function useReveal() {
  const ref = useRefBA(null);
  const [vis, setVis] = useStateBA(false);
  useEffectBA(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVis(true)),
      { threshold: 0.15 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, vis];
}

/* ---------- small icons ---------- */
const CheckGlowIcon = (props) =>
<svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;

const LocationPinIcon = (props) =>
<svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>;

const ExperienceIcon = (props) =>
<svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 13.5L7.5 21l4.5-2.5L16.5 21 15 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;

const LaptopIcon = (props) =>
<svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="5" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M2 20h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>;

const BriefcaseIcon = (props) =>
<svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>;

const XIcon = (props) =>
<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>;


/* ---------- ROOT ---------- */
function BusinessAnalystPage() {
  return (
    <div className="app">
      <CursorGlow />
      <Nav />

      {/* floating neon orbs */}
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "8%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(135,50,158,0.35), transparent 70%)", filter: "blur(40px)", animation: "float1 14s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: "55%", right: "6%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(43,80,255,0.28), transparent 70%)", filter: "blur(50px)", animation: "float2 18s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "8%", left: "35%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(63,240,255,0.18), transparent 70%)", filter: "blur(45px)", animation: "float3 16s ease-in-out infinite" }} />
      </div>

      <main style={{ paddingTop: 120, position: "relative", zIndex: 2 }}>
        {/* Hero */}
        <section className="container" style={{ paddingBottom: 36 }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 8 }}>
              <span className="text-grad">Business Analyst</span>
            </h1>
          </div>
        </section>

        {/* Quick job summary (chips) */}
        <section style={{ background: "transparent", padding: "0 0 60px", marginBottom: 0 }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, maxWidth: 760, margin: "0 auto" }}>
              {[
              { label: "Ubicación", value: "Bolivia", Icon: LocationPinIcon },
              { label: "Nivel", value: "Middle", Icon: ExperienceIcon },
              { label: "Vacantes", value: "2", Icon: BriefcaseIcon }].
              map((item, i) => {
                const Icon = item.Icon;
                return (
                  <div key={i} className="glass" style={{ padding: "14px 20px", borderRadius: 18, display: "inline-flex", alignItems: "center", gap: 12, border: "1px solid var(--line)" }}>
                    <span style={{ width: 34, height: 34, borderRadius: 10, flexShrink: 0, background: "linear-gradient(135deg, rgba(135,50,158,0.25), rgba(43,80,255,0.15))", display: "grid", placeItems: "center", color: i % 2 === 0 ? "var(--cyan)" : "var(--purple-2)" }}>
                      {Icon && <Icon style={{ width: 18, height: 18 }} />}
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
                      <span className="mono uppercase" style={{ fontSize: 9.5, letterSpacing: ".16em", color: "var(--muted)" }}>{item.label}</span>
                      <span style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 500, color: "var(--fg)" }}>{item.value}</span>
                    </span>
                  </div>);

              })}
            </div>
          </div>
        </section>

        <JobDetail />
        <ApplySection />
      </main>

      <Footer />
    </div>);

}

/* ---------- JOB DESCRIPTION + RESPONSIBILITIES ---------- */
const RESPONSIBILITIES = [
"2 años en análisis de negocio o de productos (entorno tecnológico).",
"Sólida mentalidad de producto y pensamiento analítico.",
"Capacidad para identificar y analizar casos de uso de nuevas funciones.",
"Experiencia en evaluación comparativa de competencia y análisis de usuarios.",
"Colaboración con equipos de PM , Desarrollo y QA para impulsar mejoras.",
"Nivel de inglés: B2 (intermedio)."];

const PREFERRED = [
"Experiencia en SaaS B2B o software empresarial.",
"Familiaridad con investigación de usuarios (entrevistas, grupos focales, pruebas de usabilidad).",
"Formación en roles de MBA, Marketing o Producto."];


function JobDetail() {
  const [ref, vis] = useReveal();
  return (
    <section ref={ref} className={"container reveal" + (vis ? " in" : "")} style={{ padding: "20px 0 40px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
        {/* Job Description */}
        <div className="glass" style={{ padding: "40px 38px", borderRadius: 20 }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 22 }}>
            Job <span className="text-grad">Description</span>
          </h2>
          <div style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={{ margin: 0 }}>
              Buscamos un <strong style={{ color: "var(--fg)" }}>Business Analyst</strong> apasionado por entender
              problemas de negocio y convertirlos en soluciones de software de alto impacto.
            </p>
            <p style={{ margin: 0 }}>Trabajarás en un entorno colaborativo, dinámico y 100% orientado a resultados, participando en la definición de productos que están transformando el mercado estadounidense.



            </p>
          </div>
          <div style={{ height: 1, marginTop: 32, background: "linear-gradient(90deg, transparent, rgba(140,160,255,0.45), transparent)" }} />
        </div>

        {/* Key Responsibilities */}
        <div className="glass" style={{ padding: "40px 38px", borderRadius: 20 }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 26 }}>
            Requirements <span className="text-grad"></span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {RESPONSIBILITIES.map((r, i) => <RespItem key={i} text={r} />)}
          </div>
        </div>

        {/* Preferente */}
        <div className="glass" style={{ padding: "40px 38px", borderRadius: 20 }}>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", fontFamily: "var(--font-sora), Sora, sans-serif", marginBottom: 26 }}>
            <span className="text-grad">Preferente</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {PREFERRED.map((r, i) => <RespItem key={i} text={r} />)}
          </div>
        </div>
      </div>
    </section>);

}

function RespItem({ text, num }) {
  const [hover, setHover] = useStateBA(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "12px 4px", transition: "all .3s", transform: hover ? "translateX(6px)" : "none", cursor: "default" }}>
      {num ?
      <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 999, display: "grid", placeItems: "center", fontFamily: "var(--font-jetbrains), JetBrains Mono, monospace", fontSize: 12, fontWeight: 600, color: "var(--cyan)", border: "1px solid rgba(63,240,255,0.5)", background: "rgba(63,240,255,0.08)", boxShadow: hover ? "0 0 18px rgba(63,240,255,0.55)" : "0 0 8px rgba(63,240,255,0.2)", transition: "box-shadow .3s" }}>
        {num}
      </span> :
      <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 999, display: "grid", placeItems: "center", color: "var(--cyan)", border: "1px solid rgba(63,240,255,0.5)", background: "rgba(63,240,255,0.08)", boxShadow: hover ? "0 0 18px rgba(63,240,255,0.55)" : "0 0 8px rgba(63,240,255,0.2)", transition: "box-shadow .3s" }}>
        <CheckGlowIcon style={{ width: 16, height: 16 }} />
      </span>}
      <span style={{ color: hover ? "var(--fg)" : "var(--muted)", fontSize: 15.5, lineHeight: 1.6, transition: "color .3s", paddingTop: 4 }}>{text}</span>
    </div>);

}

/* ---------- APPLY NOW FORM ---------- */
function Field({ label, children }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span className="mono uppercase" style={{ fontSize: 10.5, letterSpacing: ".18em", color: "var(--muted)" }}>{label}</span>
      {children}
    </label>);

}

const inputBaseStyle = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: 10,
  background: "rgba(8,8,22,0.7)",
  border: "1px solid var(--line)",
  color: "var(--fg)",
  fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
  fontSize: 15,
  outline: "none",
  transition: "border-color .25s, box-shadow .25s",
  boxSizing: "border-box"
};

function ApplySection() {
  const [ref, vis] = useReveal();
  const [form, setForm] = useStateBA({ name: "", email: "", phone: "", portfolio: "", message: "" });
  const [file, setFile] = useStateBA(null);
  const [dragOver, setDragOver] = useStateBA(false);
  const [sending, setSending] = useStateBA(false);
  const [toast, setToast] = useStateBA(null); // {type:'success'|'error', msg}
  const [focusKey, setFocusKey] = useStateBA(null);
  const fileInputRef = useRefBA(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4500);
  };

  const validFile = (f) => {
    if (!f) return false;
    const ok = /\.(pdf|doc|docx)$/i.test(f.name);
    if (!ok) {showToast("error", "Formato no válido. Usa PDF, DOC o DOCX.");return false;}
    return true;
  };

  const onPickFile = (f) => {if (validFile(f)) setFile(f);};

  const onDrop = (e) => {
    e.preventDefault();setDragOver(false);
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) onPickFile(f);
  };

  const focusStyle = (key) => focusKey === key ?
  { borderColor: "var(--cyan)", boxShadow: "0 0 0 3px rgba(63,240,255,0.12)" } :
  {};

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      showToast("error", "Completa los campos obligatorios (nombre, email y teléfono).");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      showToast("error", "Ingresa un correo electrónico válido.");
      return;
    }
    if (!file) {
      showToast("error", "Adjunta tu CV / Resume (PDF, DOC o DOCX).");
      return;
    }
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "PEGA_TU_ACCESS_KEY_AQUI") {
      showToast("error", "Falta configurar la Access Key de Web3Forms (ver instrucciones en el código).");
      return;
    }
    setSending(true);

    // Envío automático real con adjunto — sin abrir Gmail ni la app de correo.
    const data = new FormData();
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "Aplicación — Business Analyst — " + form.name);
    data.append("from_name", form.name);
    data.append("replyto", form.email);
    data.append("Nombre completo", form.name);
    data.append("Email", form.email);
    data.append("Teléfono", form.phone);
    data.append("Portfolio / LinkedIn", form.portfolio || "—");
    data.append("Mensaje", form.message || "—");
    data.append("Vacante", "Business Analyst");
    data.append("attachment", file, file.name);

    fetch("https://api.web3forms.com/submit", { method: "POST", body: data }).
    then((r) => r.json()).
    then((res) => {
      setSending(false);
      if (res.success) {
        showToast("success", "¡Aplicación enviada correctamente! Te contactaremos pronto.");
        setForm({ name: "", email: "", phone: "", portfolio: "", message: "" });
        setFile(null);
      } else {
        showToast("error", res.message || "No se pudo enviar. Inténtalo de nuevo.");
      }
    }).
    catch(() => {
      setSending(false);
      showToast("error", "Error de conexión. Revisa tu internet e inténtalo otra vez.");
    });
  };

  const socials = [
  { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("https://digitalharbor.com") },
  { Icon: XIcon, label: "X", href: "https://twitter.com/intent/tweet?text=" + encodeURIComponent("Vacante Business Analyst en Digital Harbor") },
  { Icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent("https://digitalharbor.com") }];


  return (
    <section ref={ref} className={"container reveal" + (vis ? " in" : "")} style={{ padding: "40px 0 90px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
        {/* glow behind card */}
        <div aria-hidden="true" style={{ position: "absolute", inset: -2, borderRadius: 26, background: "linear-gradient(135deg, rgba(135,50,158,0.5), rgba(43,80,255,0.4), rgba(63,240,255,0.4))", filter: "blur(28px)", opacity: 0.55, zIndex: 0 }} />
        <form onSubmit={submit} className="glass" style={{ position: "relative", zIndex: 1, padding: "44px 42px", borderRadius: 24 }}>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", fontFamily: "var(--font-sora), Sora, sans-serif" }}>
              Apply <span className="text-grad">Now</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 15, marginTop: 10 }}>Completa el formulario y adjunta tu CV para postular.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            <Field label="Full Name *">
              <input type="text" value={form.name} onChange={set("name")} placeholder="Tu nombre completo"
              onFocus={() => setFocusKey("name")} onBlur={() => setFocusKey(null)}
              style={{ ...inputBaseStyle, ...focusStyle("name") }} />
            </Field>
            <Field label="Email Address *">
              <input type="email" value={form.email} onChange={set("email")} placeholder="tucorreo@email.com"
              onFocus={() => setFocusKey("email")} onBlur={() => setFocusKey(null)}
              style={{ ...inputBaseStyle, ...focusStyle("email") }} />
            </Field>
            <Field label="Phone Number *">
              <input type="tel" value={form.phone} onChange={set("phone")} placeholder="+591 ..."
              onFocus={() => setFocusKey("phone")} onBlur={() => setFocusKey(null)}
              style={{ ...inputBaseStyle, ...focusStyle("phone") }} />
            </Field>
            <Field label="Portfolio / LinkedIn URL">
              <input type="url" value={form.portfolio} onChange={set("portfolio")} placeholder="https://linkedin.com/in/..."
              onFocus={() => setFocusKey("portfolio")} onBlur={() => setFocusKey(null)}
              style={{ ...inputBaseStyle, ...focusStyle("portfolio") }} />
            </Field>
          </div>

          <div style={{ marginTop: 18 }}>
            <Field label="Message / Cover Letter">
              <textarea value={form.message} onChange={set("message")} rows={4} placeholder="Cuéntanos por qué eres ideal para el rol..."
              onFocus={() => setFocusKey("message")} onBlur={() => setFocusKey(null)}
              style={{ ...inputBaseStyle, ...focusStyle("message"), resize: "vertical", minHeight: 110, fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }} />
            </Field>
          </div>

          {/* Upload */}
          <div style={{ marginTop: 18 }}>
            <span className="mono uppercase" style={{ fontSize: 10.5, letterSpacing: ".18em", color: "var(--muted)", display: "block", marginBottom: 8 }}>Upload CV / Resume *</span>
            <div
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
              onDragOver={(e) => {e.preventDefault();setDragOver(true);}}
              onDragLeave={() => setDragOver(false)}
              onDrop={onDrop}
              style={{ cursor: "pointer", borderRadius: 14, padding: "26px 20px", textAlign: "center", border: "1.5px dashed " + (dragOver ? "var(--cyan)" : file ? "rgba(63,240,255,0.5)" : "var(--line-strong)"), background: dragOver ? "rgba(63,240,255,0.08)" : "rgba(8,8,22,0.5)", transition: "all .25s" }}>
              <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" style={{ display: "none" }}
              onChange={(e) => {const f = e.target.files && e.target.files[0];if (f) onPickFile(f);}} />
              <div style={{ width: 46, height: 46, margin: "0 auto 12px", borderRadius: 12, display: "grid", placeItems: "center", color: "var(--cyan)", border: "1px solid rgba(63,240,255,0.4)", background: "rgba(63,240,255,0.06)" }}>
                <svg viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22 }}>
                  <path d="M12 16V4m0 0L7 9m5-5l5 5M5 20h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {file ?
              <div style={{ color: "var(--cyan)", fontSize: 14.5, fontWeight: 600, wordBreak: "break-all" }}>{file.name}</div> :

              <div style={{ color: "var(--fg)", fontSize: 14.5, fontWeight: 600 }}>Arrastra tu archivo aquí o haz clic para subir</div>
              }
              <div className="mono" style={{ color: "var(--dim)", fontSize: 11, marginTop: 6, letterSpacing: ".1em" }}>PDF · DOC · DOCX</div>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" disabled={sending}
          style={{ marginTop: 26, width: "100%", padding: "16px 24px", borderRadius: 12, border: "none", cursor: sending ? "wait" : "pointer", color: "#fff", fontFamily: "var(--font-jetbrains), JetBrains Mono, monospace", fontSize: 13, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 600, background: "linear-gradient(120deg, var(--purple-2) 0%, var(--blue) 50%, var(--cyan) 100%)", boxShadow: "0 14px 40px -12px rgba(63,240,255,0.5)", opacity: sending ? 0.75 : 1, transition: "transform .2s, box-shadow .2s", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            {sending ?
            <>
                <span style={{ width: 16, height: 16, borderRadius: 999, border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", display: "inline-block", animation: "spinSlow .7s linear infinite" }} />
                Enviando...
              </> :

            <>Apply Job <ArrowIcon style={{ width: 14, height: 14 }} /></>
            }
          </button>

          {/* Social share */}
          <div style={{ marginTop: 30, paddingTop: 24, borderTop: "1px solid var(--line)", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <span className="mono uppercase" style={{ fontSize: 10.5, letterSpacing: ".2em", color: "var(--muted)" }}>Comparte esta vacante</span>
            <div style={{ display: "flex", gap: 12 }}>
              {socials.map(({ Icon, label, href }, i) =>
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="share-btn"
              style={{ width: 44, height: 44, borderRadius: 999, border: "1px solid var(--line-strong)", display: "grid", placeItems: "center", color: "var(--muted)", transition: "all .25s" }}>
                  <Icon style={{ width: 17, height: 17 }} />
                </a>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Toast */}
      {toast &&
      <div style={{ position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 200, padding: "15px 22px", borderRadius: 12, maxWidth: 420, display: "flex", alignItems: "center", gap: 12, backdropFilter: "blur(14px)", border: "1px solid " + (toast.type === "success" ? "rgba(63,240,255,0.5)" : "rgba(255,79,212,0.5)"), background: toast.type === "success" ? "linear-gradient(135deg, rgba(10,40,50,0.95), rgba(10,20,40,0.95))" : "linear-gradient(135deg, rgba(50,10,40,0.95), rgba(30,5,20,0.95))", boxShadow: "0 20px 50px rgba(0,0,0,0.5)", animation: "rise .35s ease" }}>
          <span style={{ width: 26, height: 26, flexShrink: 0, borderRadius: 999, display: "grid", placeItems: "center", color: toast.type === "success" ? "var(--cyan)" : "var(--magenta)", border: "1px solid currentColor" }}>
            {toast.type === "success" ? <CheckGlowIcon style={{ width: 14, height: 14 }} /> : <span style={{ fontWeight: 700, fontSize: 14 }}>!</span>}
          </span>
          <span style={{ color: "var(--fg)", fontSize: 14, lineHeight: 1.4 }}>{toast.msg}</span>
        </div>
      }
    </section>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<BusinessAnalystPage />);