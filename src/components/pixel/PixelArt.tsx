import type { ReactNode, SVGProps } from "react";

const pixel = "crisp-edges" as const;

type PixelSvgProps = SVGProps<SVGSVGElement> & { title?: string };

function wrap(
  title: string | undefined,
  children: ReactNode,
  svgProps: Omit<PixelSvgProps, "children">
) {
  const { className, ...rest } = svgProps;
  return (
    <svg
      role="img"
      aria-hidden={title ? undefined : true}
      aria-label={title}
      shapeRendering={pixel}
      className={["pixel-art", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

/** Słup barberski w pikselach */
export function PixelBarberPole({ title = "Słup barberski", ...p }: PixelSvgProps) {
  return wrap(
    title,
    <>
      <rect width="32" height="48" fill="#0c0c18" />
      <rect x="10" y="2" width="12" height="44" fill="#e8e8f0" />
      <rect x="10" y="2" width="12" height="6" fill="#ff2a6d" />
      <rect x="10" y="8" width="12" height="6" fill="#05d9e8" />
      <rect x="10" y="14" width="12" height="6" fill="#ff2a6d" />
      <rect x="10" y="20" width="12" height="6" fill="#05d9e8" />
      <rect x="10" y="26" width="12" height="6" fill="#ff2a6d" />
      <rect x="10" y="32" width="12" height="6" fill="#05d9e8" />
      <rect x="10" y="38" width="12" height="6" fill="#ff2a6d" />
      <rect x="8" y="0" width="16" height="4" fill="#ffd60a" />
      <rect x="13" y="46" width="6" height="2" fill="#1a1a2e" />
    </>,
    { viewBox: "0 0 32 48", ...p }
  );
}

/** Nożyczki */
export function PixelScissors({ title = "Nożyczki", ...p }: PixelSvgProps) {
  return wrap(
    title,
    <>
      <rect width="40" height="32" fill="transparent" />
      <rect x="4" y="8" width="8" height="4" fill="#c77dff" />
      <rect x="12" y="6" width="12" height="6" fill="#05d9e8" />
      <rect x="24" y="8" width="8" height="4" fill="#c77dff" />
      <rect x="6" y="12" width="6" height="10" fill="#ff2a6d" />
      <rect x="28" y="12" width="6" height="10" fill="#ff2a6d" />
      <rect x="8" y="20" width="4" height="8" fill="#ffd60a" />
      <rect x="28" y="20" width="4" height="8" fill="#ffd60a" />
      <rect x="18" y="14" width="4" height="6" fill="#e8e8f0" />
    </>,
    { viewBox: "0 0 40 32", ...p }
  );
}

/** Palma */
export function PixelPalm({ title = "Palma", ...p }: PixelSvgProps) {
  return wrap(
    title,
    <>
      <rect width="40" height="48" fill="transparent" />
      <rect x="18" y="20" width="4" height="26" fill="#8b4513" />
      <rect x="16" y="18" width="8" height="4" fill="#6d3610" />
      <rect x="8" y="12" width="6" height="4" fill="#00f5a0" />
      <rect x="6" y="8" width="8" height="6" fill="#00d084" />
      <rect x="26" y="10" width="8" height="6" fill="#00f5a0" />
      <rect x="30" y="6" width="6" height="6" fill="#00d084" />
      <rect x="14" y="4" width="10" height="8" fill="#00f5a0" />
      <rect x="20" y="2" width="8" height="8" fill="#00d084" />
      <rect x="2" y="14" width="8" height="4" fill="#00d084" />
    </>,
    { viewBox: "0 0 40 48", ...p }
  );
}

/** Okulary przeciwsłoneczne */
export function PixelSunglasses({ title = "Okulary", ...p }: PixelSvgProps) {
  return wrap(
    title,
    <>
      <rect width="48" height="24" fill="transparent" />
      <rect x="2" y="8" width="18" height="10" fill="#ff2a6d" />
      <rect x="28" y="8" width="18" height="10" fill="#ff2a6d" />
      <rect x="4" y="10" width="14" height="6" fill="#1a0a2e" />
      <rect x="30" y="10" width="14" height="6" fill="#1a0a2e" />
      <rect x="20" y="11" width="8" height="4" fill="#05d9e8" />
      <rect x="0" y="11" width="4" height="4" fill="#ffd60a" />
      <rect x="44" y="11" width="4" height="4" fill="#ffd60a" />
      <rect x="2" y="6" width="4" height="4" fill="#05d9e8" />
      <rect x="42" y="6" width="4" height="4" fill="#05d9e8" />
    </>,
    { viewBox: "0 0 48 24", ...p }
  );
}

/** Zachód słońca — pasek dekoracyjny */
export function PixelSunset({ title, ...p }: PixelSvgProps) {
  return wrap(
    title,
    <>
      <rect width="64" height="32" fill="#1a0a2e" />
      <rect y="20" width="64" height="4" fill="#ff6b35" />
      <rect y="24" width="64" height="4" fill="#ff2a6d" />
      <rect y="28" width="64" height="4" fill="#c77dff" />
      <rect x="24" y="8" width="16" height="16" fill="#ffd60a" />
      <rect x="28" y="4" width="8" height="8" fill="#ffed4e" />
    </>,
    { viewBox: "0 0 64 32", ...p }
  );
}

/** Grzebień */
export function PixelComb({ title = "Grzebień", ...p }: PixelSvgProps) {
  return wrap(
    title,
    <>
      <rect width="36" height="28" fill="transparent" />
      <rect x="4" y="4" width="28" height="8" fill="#05d9e8" />
      <rect x="6" y="12" width="24" height="4" fill="#e8e8f0" />
      <rect x="6" y="16" width="2" height="8" fill="#e8e8f0" />
      <rect x="12" y="16" width="2" height="8" fill="#e8e8f0" />
      <rect x="18" y="16" width="2" height="8" fill="#e8e8f0" />
      <rect x="24" y="16" width="2" height="8" fill="#e8e8f0" />
      <rect x="30" y="16" width="2" height="8" fill="#e8e8f0" />
    </>,
    { viewBox: "0 0 36 28", ...p }
  );
}
