import { BookingInquiryForm } from "@/components/BookingInquiryForm";
import { RetroWaveHeroSection } from "@/components/RetroWaveHeroSection";
import {
  PixelBarberPole,
  PixelComb,
  PixelPalm,
  PixelScissors,
  PixelSunset,
  PixelSunglasses,
} from "@/components/pixel/PixelArt";

const phone = "+48 600 000 000";
const address = "ul. Ocean Drive 12, Miami Beach — Warszawa";
const hours = [
  { day: "Pon–Pt", time: "10:00–20:00" },
  { day: "Sob", time: "9:00–18:00" },
  { day: "Niedz", time: "Zamknięte" },
];

const services = [
  {
    name: "Strzyżenie",
    price: "od 80 zł",
    desc: "Klasyczne cięcie maszynką i nożyczkami, linie jak z lat 80.",
  },
  {
    name: "Broda",
    price: "od 50 zł",
    desc: "Kontur, modelowanie i finish — neonowo precyzyjnie.",
  },
  {
    name: "Combo Vice",
    price: "od 120 zł",
    desc: "Głowa + broda + chłodny kompres na koniec.",
  },
];

export function BarberLanding() {
  return (
    <div className="relative min-h-full overflow-x-hidden bg-[#0a0612] text-[#f0e6ff]">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #05d9e8 2px, #05d9e8 3px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(255,42,109,0.35),transparent_50%),radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(5,217,232,0.12),transparent_45%)]"
        aria-hidden
      />

      <header className="relative z-10 border-b border-[#ff2a6d]/30 bg-[#0a0612]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <a href="#" className="group flex items-center gap-3">
            <PixelBarberPole className="h-10 w-auto drop-shadow-[0_0_8px_rgba(255,42,109,0.8)]" />
            <div>
              <p className="font-display text-lg tracking-[0.2em] text-[#05d9e8] uppercase">
                Vice Cuts
              </p>
              <p className="font-pixel text-[10px] text-[#ff2a6d]/90">Barber · Miami mood</p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Nawigacja">
            <a
              href="#uslugi"
              className="text-[#f0e6ff]/80 transition hover:text-[#05d9e8]"
            >
              Usługi
            </a>
            <a
              href="#o-nas"
              className="text-[#f0e6ff]/80 transition hover:text-[#05d9e8]"
            >
              O nas
            </a>
            <a
              href="#wizyta"
              className="text-[#f0e6ff]/80 transition hover:text-[#05d9e8]"
            >
              Wizyta
            </a>
            <a
              href="#kontakt"
              className="text-[#f0e6ff]/80 transition hover:text-[#05d9e8]"
            >
              Kontakt
            </a>
          </nav>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="font-pixel shrink-0 rounded border-2 border-[#ff2a6d] bg-[#ff2a6d]/10 px-3 py-2 text-[10px] text-[#ff2a6d] shadow-[0_0_20px_rgba(255,42,109,0.35)] transition hover:bg-[#ff2a6d]/20 sm:text-xs"
          >
            Zadzwoń
          </a>
        </div>
      </header>

      <main>
        <RetroWaveHeroSection>
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
            <div className="drop-shadow-[0_2px_24px_rgba(10,6,18,0.85)]">
              <p className="font-pixel mb-4 text-[11px] tracking-widest text-[#05d9e8] drop-shadow-[0_0_12px_rgba(5,217,232,0.6)]">
                Neon · Ocean · Ostrze
              </p>
              <h1 className="font-display mb-6 text-4xl leading-tight tracking-tight text-white drop-shadow-[0_0_28px_rgba(5,217,232,0.45)] md:text-5xl lg:text-6xl">
                Fryzjerstwo
                <span className="block bg-linear-to-r from-[#ff2a6d] via-[#ffd60a] to-[#05d9e8] bg-clip-text text-transparent drop-shadow-none">
                  w rytmie Miami
                </span>
              </h1>
              <p className="mb-8 max-w-xl text-lg text-[#e8dff8] text-shadow-hero md:text-[#d8cce8]">
                Wyślij zapytanie o termin z formularza — wiadomość trafi prosto na skrzynkę
                salonu. Albo wpadnij, zadzwoń. Styl Vice, atmosfera jak z plaży o zachodzie.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#wizyta"
                  className="font-display rounded-sm border-2 border-[#ff2a6d] bg-[#ff2a6d]/20 px-6 py-3 text-sm tracking-wider text-[#ffd0dc] uppercase shadow-[0_0_24px_rgba(255,42,109,0.35)] backdrop-blur-sm transition hover:bg-[#ff2a6d]/30"
                >
                  Zapytaj o wizytę
                </a>
                <a
                  href="#kontakt"
                  className="font-display rounded-sm border-2 border-[#05d9e8] bg-[#05d9e8]/15 px-6 py-3 text-sm tracking-wider text-[#b8f7ff] uppercase shadow-[0_0_24px_rgba(5,217,232,0.3)] backdrop-blur-sm transition hover:bg-[#05d9e8]/25"
                >
                  Godziny i adres
                </a>
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-6 md:items-end">
              <div className="flex flex-wrap justify-center gap-6 md:justify-end">
                <div className="rounded border-2 border-[#c77dff]/50 bg-[#0a0612]/65 p-4 shadow-[0_0_30px_rgba(199,125,255,0.25)] backdrop-blur-sm">
                  <PixelSunset className="h-auto w-48 max-w-full md:w-56" />
                </div>
              </div>
              <div className="flex items-end gap-4">
                <PixelPalm className="h-20 w-auto drop-shadow-[0_0_12px_rgba(0,245,160,0.4)]" />
                <PixelScissors className="h-16 w-auto drop-shadow-[0_0_12px_rgba(5,217,232,0.5)]" />
                <PixelSunglasses className="h-10 w-auto opacity-90" />
              </div>
            </div>
          </div>
        </RetroWaveHeroSection>

        <section
          id="uslugi"
          className="relative z-10 border-y border-[#05d9e8]/20 bg-[#12081f]/60 px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl text-white md:text-4xl">Usługi</h2>
                <p className="font-pixel mt-2 text-[11px] text-[#ff2a6d]">
                  Ceny orientacyjne — szczegóły u barbera
                </p>
              </div>
              <PixelComb className="h-14 w-auto opacity-80" />
            </div>
            <ul className="grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <li
                  key={s.name}
                  className="group rounded border border-[#ff2a6d]/25 bg-linear-to-br from-[#1a0a2e]/90 to-[#0a0612] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-[#05d9e8]/50 hover:shadow-[0_0_28px_rgba(5,217,232,0.12)]"
                >
                  <p className="font-display text-xl text-[#05d9e8]">{s.name}</p>
                  <p className="font-pixel mt-2 text-sm text-[#ffd60a]">{s.price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#b8a9cc]">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="o-nas" className="relative z-10 px-6 py-20">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_200px] md:items-center">
            <div>
              <h2 className="font-display mb-4 text-3xl text-white md:text-4xl">O nas</h2>
              <p className="text-[#c4b5dc] leading-relaxed">
                Vice Cuts to jedno stanowisko z pasją do detalu i klasyki. Łączymy
                estetykę lat 80., czyste linie i luz plażowego wieczoru. Bez
                pośpiechu — każde cięcie ma swój beat.
              </p>
              <p className="mt-4 text-[#c4b5dc] leading-relaxed">
                Zapytanie o wizytę wyślesz z formularza w sekcji kontakt — wiadomość
                ląduje na skrzynce salonu. Telefon i social też są w grze.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="rounded border-2 border-dashed border-[#05d9e8]/40 p-6 text-center">
                <PixelBarberPole className="mx-auto h-24 w-auto" />
                <p className="font-pixel mt-4 text-[10px] text-[#05d9e8]/70">
                  Est. 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="kontakt"
          className="relative z-10 border-t border-[#ff2a6d]/20 bg-[#0d0618] px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display mb-10 text-3xl text-white md:text-4xl">
              Kontakt
            </h2>
            <div className="grid gap-10 lg:grid-cols-2">
              <BookingInquiryForm />
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <p className="font-pixel mb-2 text-[11px] text-[#ff2a6d]">Adres</p>
                  <p className="text-lg text-[#e8dff5]">{address}</p>
                  <p className="font-pixel mb-2 mt-8 text-[11px] text-[#05d9e8]">
                    Telefon
                  </p>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-xl text-[#05d9e8] underline decoration-[#ff2a6d]/50 underline-offset-4 hover:decoration-[#ff2a6d]"
                  >
                    {phone}
                  </a>
                </div>
                <div>
                  <p className="font-pixel mb-4 text-[11px] text-[#ffd60a]">
                    Godziny otwarcia
                  </p>
                  <ul className="space-y-3">
                    {hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex justify-between border-b border-white/10 pb-3 text-[#c4b5dc]"
                      >
                        <span>{h.day}</span>
                        <span className="font-mono text-[#05d9e8]">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#050308] px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center text-sm text-[#7a6b8f] md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Vice Cuts. Wszelkie prawa zastrzeżone.</p>
          <p className="font-pixel text-[10px]">
            IG: @vicecuts — wkrótce link
          </p>
        </div>
      </footer>
    </div>
  );
}
