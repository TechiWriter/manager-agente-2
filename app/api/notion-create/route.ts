// /api/notion-create
// Creates a new record in the Bow Tie Funnel database with Status "Not started"
// Called by the "¿Más contenido?" button on Mondays and Fridays only

export async function POST(request: Request) {
  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const NOTION_DB_ID = process.env.NOTION_DB_ID;

  if (!NOTION_TOKEN || !NOTION_DB_ID) {
    return Response.json({ error: 'Missing env vars' }, { status: 500 });
  }

  try {
    const { title, content } = await request.json();

    const res = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DB_ID },
        properties: {
          Content: {
            title: [{ text: { content: title } }]
          },
          Status: {
            status: { name: 'Not started' }
          },
          Format: {
            select: { name: 'Iniciative' }
          },
        },
        children: [
          {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              rich_text: [{ type: 'text', text: { content: content } }]
            }
          }
        ]
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return Response.json({ error: err?.message || `Notion error ${res.status}` }, { status: res.status });
    }

    const data = await res.json();
    return Response.json({ success: true, pageId: data.id });

  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
