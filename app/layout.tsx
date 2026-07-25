export const metadata = {
  title: "Manager Agente — Digital Harbor",
  description: "Tu equipo de management personal conectado a Notion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: "#f5f5f5" }}>{children}</body>
    </html>
  );
}
