export const buildInstagramProfileLink = (username: string) => {
  const isAndroid =
    typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);
  const isIOS =
    typeof navigator !== "undefined" && /iPhone|iPad|iPod/i.test(navigator.userAgent);

  // Prefer app deep links to avoid https://www.instagram.com blocks.
  if (isIOS) return `instagram://user?username=${encodeURIComponent(username)}`;

  // Android: use intent to open app directly
  if (isAndroid) {
    return `intent://instagram.com/_u/${encodeURIComponent(
      username
    )}#Intent;package=com.instagram.android;scheme=https;end`;
  }

  return `https://www.instagram.com/${encodeURIComponent(username)}/`;
};

export const buildInstagramWebLink = (url: string) => {
  const isAndroid =
    typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);
  const isIOS =
    typeof navigator !== "undefined" && /iPhone|iPad|iPod/i.test(navigator.userAgent);

  // On mobile, try to open the IG app via intent/scheme using the same path.
  try {
    const u = new URL(url);
    const path = u.pathname.replace(/^\//, "");

    if (isIOS) return `instagram://app/${path}`;
    if (isAndroid)
      return `intent://instagram.com/${path}#Intent;package=com.instagram.android;scheme=https;end`;
  } catch {
    // fall through
  }

  return url;
};
