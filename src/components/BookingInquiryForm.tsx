"use client";

import { useForm, ValidationError } from "@formspree/react";

const serviceOptions = [
  { value: "", label: "Dowolna / ustalimy na miejscu" },
  { value: "Strzyżenie", label: "Strzyżenie" },
  { value: "Broda", label: "Broda" },
  { value: "Combo Vice", label: "Combo Vice" },
];

export function BookingInquiryForm() {
  const [state, handleSubmit] = useForm("mgoprwbo");

  return (
    <div
      id="wizyta"
      className="scroll-mt-24 rounded border border-[#05d9e8]/30 bg-[#1a0a2e]/40 p-6 shadow-[0_0_32px_rgba(5,217,232,0.08)]"
    >
      <h3 className="font-display text-xl text-[#05d9e8] md:text-2xl">
        Zapytanie o wizytę
      </h3>
      <p className="mt-2 text-sm text-[#b8a9cc]">
        Wypełnij formularz — wiadomość trafi na skrzynkę salonu. Odpowiemy tak szybko,
        jak to możliwe.
      </p>

      {state.succeeded ? (
        <p
          className="font-pixel mt-6 rounded border border-[#00f5a0]/40 bg-[#00f5a0]/10 px-4 py-3 text-[10px] leading-relaxed text-[#7dffc0] sm:text-xs"
          role="status"
        >
          Wysłano! Dzięki — odezwiemy się wkrótce.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
            aria-hidden
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-pixel text-[10px] text-[#ff2a6d]">Imię *</span>
              <input
                name="name"
                required
                minLength={2}
                maxLength={120}
                autoComplete="name"
                className="mt-1 w-full rounded border border-white/15 bg-[#0a0612] px-3 py-2 text-[#f0e6ff] outline-none ring-[#05d9e8] focus:border-[#05d9e8] focus:ring-1"
              />
              <ValidationError prefix="Imię" field="name" errors={state.errors} />
            </label>
            <label className="block text-sm">
              <span className="font-pixel text-[10px] text-[#ff2a6d]">E-mail *</span>
              <input
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                className="mt-1 w-full rounded border border-white/15 bg-[#0a0612] px-3 py-2 text-[#f0e6ff] outline-none ring-[#05d9e8] focus:border-[#05d9e8] focus:ring-1"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-pixel text-[10px] text-[#05d9e8]">Telefon</span>
              <input
                name="phone"
                type="tel"
                maxLength={40}
                autoComplete="tel"
                className="mt-1 w-full rounded border border-white/15 bg-[#0a0612] px-3 py-2 text-[#f0e6ff] outline-none ring-[#05d9e8] focus:border-[#05d9e8] focus:ring-1"
              />
              <ValidationError prefix="Telefon" field="phone" errors={state.errors} />
            </label>
            <label className="block text-sm">
              <span className="font-pixel text-[10px] text-[#05d9e8]">Usługa</span>
              <select
                name="service"
                className="mt-1 w-full rounded border border-white/15 bg-[#0a0612] px-3 py-2 text-[#f0e6ff] outline-none ring-[#05d9e8] focus:border-[#05d9e8] focus:ring-1"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt.value || "any"} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ValidationError prefix="Usługa" field="service" errors={state.errors} />
            </label>
          </div>

          <label className="block text-sm">
            <span className="font-pixel text-[10px] text-[#ffd60a]">
              Preferowany termin
            </span>
            <input
              name="preferredSlot"
              maxLength={200}
              placeholder="np. wtorek po 17, weekend"
              className="mt-1 w-full rounded border border-white/15 bg-[#0a0612] px-3 py-2 text-[#f0e6ff] placeholder:text-[#5c4d78] outline-none ring-[#05d9e8] focus:border-[#05d9e8] focus:ring-1"
            />
            <ValidationError prefix="Preferowany termin" field="preferredSlot" errors={state.errors} />
          </label>

          <label className="block text-sm">
            <span className="font-pixel text-[10px] text-[#ffd60a]">Wiadomość</span>
            <textarea
              name="message"
              rows={4}
              maxLength={2000}
              className="mt-1 w-full resize-y rounded border border-white/15 bg-[#0a0612] px-3 py-2 text-[#f0e6ff] outline-none ring-[#05d9e8] focus:border-[#05d9e8] focus:ring-1"
            />
            <ValidationError prefix="Wiadomość" field="message" errors={state.errors} />
          </label>

          <button
            type="submit"
            disabled={state.submitting}
            className="font-display w-full rounded-sm border-2 border-[#ff2a6d] bg-[#ff2a6d]/20 py-3 text-sm tracking-wider text-[#ff2a6d] uppercase transition hover:bg-[#ff2a6d]/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
          >
            {state.submitting ? "Wysyłanie…" : "Wyślij zapytanie"}
          </button>
        </form>
      )}
    </div>
  );
}
