// Cloudflare Pages Function — handles POST /api/contact from the /contact page form.
//
// Environment variables (Cloudflare Pages → Settings → Variables and Secrets,
// set on both Production and Preview):
//   RESEND_API_KEY        (secret, required) — from Mark's Resend account
//   TURNSTILE_SECRET_KEY  (secret) — Turnstile check is skipped until this is set
//   RESEND_FROM           (optional) — overrides FROM, e.g. "onboarding@resend.dev"
//                         for testing before heathautomotive.co.nz is verified in Resend
//   CONTACT_TO            (optional) — overrides RECIPIENT, so test sends can go to
//                         Lloyd instead of Mark. Delete it at go-live.
// See README.md.

const RECIPIENT = "mark@heathautomotive.co.nz";
const FROM = "Heath Automotive Website <website@heathautomotive.co.nz>";
const REDIRECT = "/contact";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Real visitors take at least this long to fill the form; scripted bots
// that fill it and submit in one shot land under this.
const MIN_FILL_MS = 3000;

async function verifyTurnstile(token, ip, secret) {
  if (!token) return false;
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set("remoteip", ip);
    const res = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

function redirect(query) {
  return new Response(null, { status: 303, headers: { Location: `${REDIRECT}?${query}#message` } });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function onRequestPost({ request, env }) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return redirect("error=true");
  }

  const honeypot = (form.get("website") || "").toString().trim();
  const ts = Number((form.get("ts") || "").toString().trim());
  const name = (form.get("name") || "").toString().trim();
  const contact = (form.get("contact") || "").toString().trim();
  const message = (form.get("message") || "").toString().trim();

  // Bots fill hidden fields, or submit faster than a human can type;
  // pretend success either way so they don't retry. A missing/invalid ts
  // (e.g. JS disabled) is not penalised on its own.
  const submittedTooFast = Number.isFinite(ts) && ts > 0 && Date.now() - ts < MIN_FILL_MS;
  if (honeypot || submittedTooFast) {
    return redirect("sent=true");
  }

  if (!name || !contact || !message) {
    return redirect("error=true");
  }

  if (env.TURNSTILE_SECRET_KEY) {
    const token = (form.get("cf-turnstile-response") || "").toString().trim();
    const ip = request.headers.get("CF-Connecting-IP");
    if (!(await verifyTurnstile(token, ip, env.TURNSTILE_SECRET_KEY))) {
      return redirect("error=true");
    }
  }

  // "Phone or email" is one field; only use it as reply-to when it's an email.
  const replyTo = EMAIL_RE.test(contact) ? contact : undefined;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.RESEND_FROM || FROM,
        to: [env.CONTACT_TO || RECIPIENT],
        ...(replyTo && { reply_to: replyTo }),
        subject: `Website enquiry from ${name}`,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Phone or email:</strong> ${escapeHtml(contact)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!res.ok) {
      return redirect("error=true");
    }
  } catch {
    return redirect("error=true");
  }

  return redirect("sent=true");
}

export async function onRequestGet() {
  return new Response(null, { status: 303, headers: { Location: REDIRECT } });
}
