# Manager Agente — Digital Harbor

Tu equipo de management personal: El Hustler, El Hacker y El Hipster, conectados a tu calendario de contenidos en Notion.

## ¿Por qué esta versión funciona donde el artifact no?

El artifact de Claude.ai corre en un sandbox de navegador sin servidor propio. Cuando intenta llamar directo a `api.notion.com`, el navegador bloquea la respuesta por política CORS (Notion no autoriza llamadas desde ese origen).

Esta versión es una app Next.js real con dos rutas de API que corren **en el servidor**, no en el navegador:

- `/api/notion` — consulta tu base de Notion server-side, sin restricción CORS
- `/api/chat` — hace de proxy hacia Claude, manteniendo tu API key de Anthropic fuera del navegador

El navegador del usuario solo habla con tu propio backend (Vercel), nunca directo con Notion o Anthropic.

## Cómo desplegar en Vercel (recomendado, gratis)

1. Sube esta carpeta a un repositorio de GitHub (o usa `vercel` CLI directo sin git).
2. Ve a [vercel.com/new](https://vercel.com/new) e importa el repo.
3. En "Environment Variables" agrega:
   - `NOTION_TOKEN` → tu token de integración (`ntn_...`)
   - `NOTION_DB_ID` → `35aa6664c20e81278a61d40f9cb57c25`
   - `ANTHROPIC_API_KEY` → tu API key de Anthropic (la consigues en [console.anthropic.com](https://console.anthropic.com/settings/keys))
4. Click "Deploy". En 1-2 minutos tienes una URL pública (`tu-proyecto.vercel.app`).

## Cómo correrlo localmente primero (opcional, para probar)

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. Asegúrate de que `.env.local` tenga tus 3 variables (ya viene con el token de Notion puesto — solo falta tu `ANTHROPIC_API_KEY`).

## Cómo conseguir tu ANTHROPIC_API_KEY

1. Ve a [console.anthropic.com](https://console.anthropic.com/settings/keys)
2. Crea una API key nueva
3. Pégala en `.env.local` (local) o en las Environment Variables de Vercel (producción)

Nota: esto consume créditos de tu cuenta de Anthropic por cada mensaje que el agente responda — es la API de pago, separada de tu cuenta de Claude.ai.

## Estructura del proyecto

```
src/app/
  page.js              ← la interfaz completa (3 personajes, chat, avatares)
  layout.js             ← layout raíz de Next.js
  api/notion/route.js   ← consulta Notion server-side
  api/chat/route.js     ← proxy a la API de Anthropic
public/avatars/         ← las 3 imágenes de personajes
```

## Seguridad

- `.env.local` está en `.gitignore` — nunca se sube a GitHub.
- Si despliegas en Vercel, las variables de entorno viven encriptadas en su plataforma, no en tu código.
- Tu integración de Notion debería tener permisos de **solo lectura** (Read content) si solo quieres analizar, no modificar, tu calendario.
