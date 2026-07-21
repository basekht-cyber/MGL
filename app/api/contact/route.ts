import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Basic in-memory rate limiting (best-effort; resets on cold start).
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

const isEmail = (v: unknown): v is string =>
  typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const esc = (s: string) =>
  s.replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c] as string));

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    // Honeypot — bots fill hidden fields.
    if (typeof body.website_hp === "string" && body.website_hp.trim() !== "") {
      return NextResponse.json({ ok: true }); // silently accept, don't send
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    const company = String(body.company || "").trim();
    const budget = String(body.budget || "").trim();
    const service = String(body.service || "").trim();

    if (!name || name.length > 120) {
      return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!message || message.length > 5000) {
      return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO,
    } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error("SMTP is not configured. Set SMTP_* env vars.");
      return NextResponse.json(
        { error: "Email service is not configured yet. Please email us directly." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465),
      secure: SMTP_SECURE ? SMTP_SECURE === "true" : Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const to = CONTACT_TO || site.email;
    const rows: [string, string][] = [
      ["Name", name],
      ["Email", email],
      ["Company / Project", company || "—"],
      ["Service", service || "—"],
      ["Budget", budget || "—"],
    ];

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;background:#0c0718;color:#e2e8f0;padding:24px;border-radius:12px">
        <h2 style="color:#a855f7;margin:0 0 16px">New enquiry — ${site.name}</h2>
        <table style="border-collapse:collapse;width:100%">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:6px 12px 6px 0;color:#94a3b8;white-space:nowrap">${k}</td><td style="padding:6px 0">${esc(v)}</td></tr>`
            )
            .join("")}
        </table>
        <p style="margin:16px 0 6px;color:#94a3b8">Message</p>
        <p style="white-space:pre-wrap;line-height:1.6">${esc(message)}</p>
      </div>`;

    const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${message}`;

    await transporter.sendMail({
      from: `"${site.name} Website" <${SMTP_USER}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
