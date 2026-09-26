import { z } from "zod";
const schema = z.object({ email: z.string().trim().email().max(254), website: z.string().max(1000).optional().default("") });
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return Response.json({ error: "This request could not be accepted." }, { status: 403 });
  let data: unknown;
  try { const raw = await request.text(); if (raw.length > 4096) return Response.json({ error: "Please enter a valid email address." }, { status: 400 }); data = JSON.parse(raw); } catch { return Response.json({ error: "Please enter a valid email address." }, { status: 400 }); }
  const parsed = schema.safeParse(data);
  if (!parsed.success) return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (parsed.data.website) return Response.json({ ok: true });
  try {
    const endpoint = process.env.NEWSLETTER_WEBHOOK_URL;
    if (!endpoint) return Response.json({ error: "Newsletter signup is temporarily unavailable. Please email hello@apkina.pk." }, { status: 503 });
    if (new URL(endpoint).protocol !== "https:") throw new Error("HTTPS newsletter endpoint required");
    const result = await fetch(endpoint, {method:"POST",headers:{"Content-Type":"application/json",...(process.env.NEWSLETTER_WEBHOOK_TOKEN ? {Authorization:`Bearer ${process.env.NEWSLETTER_WEBHOOK_TOKEN}`} : {})},body:JSON.stringify({email:parsed.data.email.toLowerCase()}),signal:AbortSignal.timeout(10000)});
    if (!result.ok) throw new Error("Newsletter service rejected request");
    return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) { console.error("Newsletter subscription failed", error); return Response.json({ error: "We couldn't save your subscription. Please try again, or email hello@apkina.pk." }, { status: 503 }); }
}
