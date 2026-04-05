function hexToRgb(hex) {
  const cleaned = hex.replace("#", "").trim();
  const value = cleaned.length === 3
    ? cleaned.split("").map((ch) => ch + ch).join("")
    : cleaned;

  const int = Number.parseInt(value, 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
}

function srgbToLinear(channel) {
  const c = channel / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function luminance(rgb) {
  return (
    0.2126 * srgbToLinear(rgb.r) +
    0.7152 * srgbToLinear(rgb.g) +
    0.0722 * srgbToLinear(rgb.b)
  );
}

function contrastRatio(foreground, background) {
  const l1 = luminance(hexToRgb(foreground));
  const l2 = luminance(hexToRgb(background));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const checks = [
  {
    name: "Light body text on light background",
    fg: "#11211d",
    bg: "#f8f3ea",
    min: 4.5,
  },
  {
    name: "Light muted text on light surface",
    fg: "#4d625b",
    bg: "#fffaf1",
    min: 4.5,
  },
  {
    name: "Light active control text on accent",
    fg: "#ffffff",
    bg: "#126b63",
    min: 4.5,
  },
  {
    name: "Dark body text on dark background",
    fg: "#edf7f3",
    bg: "#11161f",
    min: 4.5,
  },
  {
    name: "Dark muted text on dark surface",
    fg: "#b6c7c3",
    bg: "#1d2632",
    min: 4.5,
  },
  {
    name: "Dark active control text on accent",
    fg: "#06211d",
    bg: "#5fd2c4",
    min: 4.5,
  },
];

let hasFailures = false;

console.log("WCAG contrast check report:\n");
for (const check of checks) {
  const ratio = contrastRatio(check.fg, check.bg);
  const ok = ratio >= check.min;
  const status = ok ? "PASS" : "FAIL";

  console.log(
    `${status.padEnd(5)} ${check.name} -> ${ratio.toFixed(2)}:1 (min ${check.min}:1)`
  );

  if (!ok) {
    hasFailures = true;
  }
}

if (hasFailures) {
  console.error("\nContrast validation failed. Please adjust theme colors.");
  process.exit(1);
}

console.log("\nContrast validation passed.");
