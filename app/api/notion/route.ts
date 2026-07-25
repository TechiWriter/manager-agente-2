// src/app/api/notion/route.js
// Server-side route — runs on Vercel's backend, never in the browser.
// This is why it doesn't hit the CORS wall the artifact did: server-to-server
// HTTP calls aren't subject to the browser's same-origin policy.

export async function POST(request) {
  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const NOTION_DB_ID = process.env.NOTION_DB_ID;

  if (!NOTION_TOKEN || !NOTION_DB_ID) {
    return Response.json(
      { error: "Faltan NOTION_TOKEN o NOTION_DB_ID en las variables de entorno." },
      { status: 500 }
    );
  }

  try {
    const notionRes = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NOTION_TOKEN}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page_size: 30,
        }),
      }
    );

    if (!notionRes.ok) {
      const errBody = await notionRes.json().catch(() => ({}));
      return Response.json(
        { error: errBody?.message || `Notion respondió con error ${notionRes.status}` },
        { status: notionRes.status }
      );
    }

    const data = await notionRes.json();
    const pages = data.results || [];

    const get = (props, key) => {
      const p = props[key];
      if (!p) return "—";
      switch (p.type) {
        case "title":
          return p.title?.map((t) => t.plain_text).join("") || "—";
        case "select":
          return p.select?.name || "—";
        case "multi_select":
          return p.multi_select?.map((s) => s.name).join(", ") || "—";
        case "date":
          return p.date?.start || "—";
        case "rich_text":
          return p.rich_text?.map((t) => t.plain_text).join("") || "—";
        case "checkbox":
          return p.checkbox ? "Sí" : "No";
        case "number":
          return p.number?.toString() || "—";
        case "status":
          return p.status?.name || "—";
        default:
          return "—";
      }
    };

    const items = pages.map((page) => {
      const props = page.properties || {};
      return {
        title:
          get(props, "Content") ||
          get(props, "Name") ||
          get(props, "Título") ||
          get(props, "Title"),
        status: get(props, "Status") || get(props, "Estado"),
        prioridad: get(props, "Prioridad") || get(props, "Priority"),
        ejecucion:
          get(props, "Día de ejecución") ||
          get(props, "Ejecución") ||
          get(props, "Execution"),
        publicacion:
          get(props, "Publication") ||
          get(props, "Publicación") ||
          get(props, "Publish"),
        format: get(props, "Format") || get(props, "Formato"),
        red: get(props, "Social Network") || get(props, "Red") || get(props, "Platform"),
        producto: get(props, "Product") || get(props, "Producto"),
        funnel: get(props, "Bow Tie Funnel") || get(props, "Funnel"),
      };
    });

    return Response.json({ items, count: items.length });
  } catch (e) {
    return Response.json(
      { error: `Error conectando con Notion: ${e.message}` },
      { status: 500 }
    );
  }
}
