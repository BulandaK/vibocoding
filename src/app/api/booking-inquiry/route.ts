import { NextResponse } from "next/server";
import { sendBookingInquiryEmail } from "@/lib/sendBookingInquiryEmail";

const MAX_LEN = {
  name: 120,
  email: 254,
  phone: 40,
  preferredSlot: 200,
  message: 2000,
  service: 80,
} as const;

function trim(s: unknown, max: number): string {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

function isValidEmail(email: string): boolean {
  if (email.length < 3 || email.length > MAX_LEN.email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Brak danych." }, { status: 400 });
  }

  const o = body as Record<string, unknown>;

  // honeypot — wypełnione = bot
  const trap = trim(o.website, 200);
  if (trap.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = trim(o.name, MAX_LEN.name);
  const email = trim(o.email, MAX_LEN.email);
  const phone = trim(o.phone, MAX_LEN.phone);
  const preferredSlot = trim(o.preferredSlot, MAX_LEN.preferredSlot);
  const message = trim(o.message, MAX_LEN.message);
  const service = trim(o.service, MAX_LEN.service);

  if (name.length < 2) {
    return NextResponse.json({ error: "Podaj imię (min. 2 znaki)." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Podaj poprawny adres e-mail." }, { status: 400 });
  }

  try {
    await sendBookingInquiryEmail({
      name,
      email,
      phone: phone || undefined,
      preferredSlot: preferredSlot || undefined,
      message: message || undefined,
      service: service || undefined,
    });
  } catch (e) {
    console.error("[booking-inquiry]", e);
    const msg = e instanceof Error ? e.message : "Błąd wysyłki.";
    const isConfig =
      msg.includes("BOOKING_INBOX") || msg.includes("SMTP");
    return NextResponse.json(
      {
        error: isConfig
          ? "Serwer nie jest skonfigurowany do wysyłki e-maili."
          : "Nie udało się wysłać wiadomości. Spróbuj później lub zadzwoń.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}
