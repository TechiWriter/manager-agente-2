// src/app/api/chat/route.js
// Server-side proxy to the Anthropic API. Keeps your ANTHROPIC_API_KEY
// out of the browser entirely.

export async function POST(request) {
  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

  if (!ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "Falta ANTHROPIC_API_KEY en las variables de entorno." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: body.max_tokens || 1500,
        system: body.system,
        messages: body.messages,
        ...(body.tools ? { tools: body.tools } : {}),
      }),
    });

    const data = await anthropicRes.json();

    if (!anthropicRes.ok) {
      return Response.json(
        { error: data?.error?.message || `Anthropic API error ${anthropicRes.status}` },
        { status: anthropicRes.status }
      );
    }

    return Response.json(data);
  } catch (e) {
    return Response.json({ error: `Error en el proxy: ${e.message}` }, { status: 500 });
  }
}
