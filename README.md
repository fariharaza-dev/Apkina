# Apkina website — GitHub + Vercel

Includes 32 supplied products, six categories, product detail pages, four sample blog posts, contact form, cart, and WhatsApp ordering to +923252849975.

## Deploy
1. Extract this ZIP. Upload its **contents** to a GitHub repository. `package.json` must be at the repository root. Upload the source files, not the ZIP itself.
2. Import that repository in Vercel. Framework: Next.js. Node.js: 22.x. Use the default install command and `npm run build`. No custom output directory.
3. Add `NEXT_PUBLIC_SITE_URL` in Vercel Environment Variables with your full site URL, without a trailing slash. Redeploy after setting it or adding a custom domain. This controls the product image/page links in WhatsApp drafts.
4. Deploy. No WhatsApp API key is required. Visitors review and send their message in WhatsApp.

## Newsletter
The original Sites newsletter uses its hosted database, which is not portable to Vercel. This export uses an optional server-side HTTPS webhook. Set `NEWSLETTER_WEBHOOK_URL` to your newsletter service or automation endpoint that accepts POST JSON `{ "email": "subscriber@example.com" }` and returns a successful HTTP response after saving it. Set `NEWSLETTER_WEBHOOK_TOKEN` if that endpoint expects a Bearer token. Without this integration, the form reports that signup is unavailable; it does not pretend to save subscribers. Existing subscriber records are not included.

The contact form prepares a WhatsApp message; it does not send email or store messages. Speedlights and Audio are restored categories awaiting product details; the 32 supplied products remain in their appropriate categories.

## Local development
Use Node.js 22.x, then `npm install` and `npm run dev`.
Production check: `npm run build`.
Edit products in `lib/catalog.ts`, blog posts in `lib/journal.ts`, and images in `public/assets/`.
