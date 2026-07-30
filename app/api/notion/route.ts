// src/app/api/chat/route.js
// Server-side proxy to Amazon Bedrock (Claude). Uses the IAM role attached
// to the Amplify compute role — no API keys needed.
import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({ region: "us-east-1" });

const MODEL_ID = "us.anthropic.claude-sonnet-4-5-20250929-v1:0";

export async function POST(request) {
  try {
    const body = await request.json();

    const command = new InvokeModelCommand({
      modelId: MODEL_ID,
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: body.max_tokens || 1500,
        system: body.system,
        messages: body.messages,
        ...(body.tools ? { tools: body.tools } : {}),
      }),
    });

    const response = await client.send(command);
    const data = JSON.parse(new TextDecoder().decode(response.body));

    return Response.json(data);
  } catch (e) {
    return Response.json(
      { error: `Error en el proxy de Bedrock: ${e.message}` },
      { status: 500 }
    );
  }
}
