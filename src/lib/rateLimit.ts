// In-memory, per-IP sliding-window limiter. Good enough to stop a script from
// hammering /api/contact on a low-traffic single-instance deployment. It resets
// on cold start / redeploy — this is a deterrent, not a hard guarantee — so it
// deliberately stays paired with the honeypot, origin check, and Turnstile
// rather than being the only line of defense.

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(key, timestamps);

  // Bound memory: drop stale IPs occasionally instead of growing forever.
  if (hits.size > 5000) {
    for (const [ip, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(ip);
    }
  }

  return false;
}
