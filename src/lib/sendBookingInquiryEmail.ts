import nodemailer from "nodemailer";
import { escapeHtml } from "@/lib/escapeHtml";

export type BookingInquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  preferredSlot?: string;
  message?: string;
  service?: string;
};

function buildPlainText(p: BookingInquiryPayload): string {
  const lines = [
    `Nowe zapytanie o wizytę — Vice Cuts`,
    ``,
    `Imię: ${p.name}`,
    `E-mail: ${p.email}`,
    p.phone ? `Telefon: ${p.phone}` : null,
    p.service ? `Usługa: ${p.service}` : null,
    p.preferredSlot ? `Preferowany termin: ${p.preferredSlot}` : null,
    p.message ? `Wiadomość:\n${p.message}` : null,
  ].filter(Boolean) as string[];
  return lines.join("\n");
}

function buildHtml(p: BookingInquiryPayload): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#888;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`;
  const rows: string[] = [
    row("Imię", p.name),
    row("E-mail", p.email),
  ];
  if (p.phone) rows.push(row("Telefon", p.phone));
  if (p.service) rows.push(row("Usługa", p.service));
  if (p.preferredSlot) rows.push(row("Preferowany termin", p.preferredSlot));
  if (p.message) rows.push(row("Wiadomość", p.message));
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;background:#0a0612;color:#f0e6ff;padding:16px">
<p style="color:#05d9e8;font-weight:bold">Nowe zapytanie o wizytę</p>
<table style="border-collapse:collapse">${rows.join("")}</table>
</body></html>`;
}

export async function sendBookingInquiryEmail(
  payload: BookingInquiryPayload
): Promise<void> {
  const to = process.env.BOOKING_INBOX_EMAIL?.trim();
  if (!to) {
    throw new Error("Brak zmiennej BOOKING_INBOX_EMAIL.");
  }

  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD?.trim();
  const portRaw = process.env.SMTP_PORT?.trim();
  const port = portRaw ? Number.parseInt(portRaw, 10) : 587;

  if (!host || !user || !pass || Number.isNaN(port)) {
    throw new Error(
      "Brak konfiguracji SMTP (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD)."
    );
  }

  const from =
    process.env.MAIL_FROM?.trim() ||
    `Vice Cuts <${user}>`;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: `[Vice Cuts] Zapytanie o wizytę — ${payload.name}`,
    text: buildPlainText(payload),
    html: buildHtml(payload),
  });
}
