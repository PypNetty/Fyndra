export function getPlatformFromUrl(url: string): string {
  return url.includes("welcometothejungle.com")
    ? "welcometothejungle"
    : "unknown";
}
