/**
 * RaO Lead Source & Attribution Utility
 * Captures UTM parameters, landing page, and referrer without inventing fake parameters.
 * Preserves attribution across page transitions using sessionStorage.
 */

export interface LeadAttribution {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  landingPage?: string;
  referrer?: string;
  source?: string;
}

const STORAGE_KEY = "rao_lead_attribution";

export function storeCurrentAttribution(): LeadAttribution | null {
  if (typeof window === "undefined") return null;

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const utmSource = searchParams.get("utm_source") || searchParams.get("source") || undefined;
    const utmMedium = searchParams.get("utm_medium") || undefined;
    const utmCampaign = searchParams.get("utm_campaign") || undefined;
    const refParam = searchParams.get("ref") || undefined;

    const currentPath = window.location.pathname;
    const rawReferrer = document.referrer;

    let referrer: string | undefined = undefined;
    if (refParam) {
      referrer = refParam;
    } else if (rawReferrer) {
      try {
        const refUrl = new URL(rawReferrer);
        if (refUrl.hostname !== window.location.hostname) {
          referrer = rawReferrer;
        }
      } catch {
        referrer = rawReferrer;
      }
    } else {
      referrer = "Direct website";
    }

    // Detect platform if utmSource is missing but referrer indicates a social platform
    let inferredSource = utmSource;
    if (!inferredSource && rawReferrer) {
      if (rawReferrer.includes("instagram.com")) inferredSource = "instagram";
      else if (rawReferrer.includes("facebook.com") || rawReferrer.includes("fb.me")) inferredSource = "facebook";
      else if (rawReferrer.includes("google.")) inferredSource = "google";
    }

    const newAttribution: LeadAttribution = {
      utmSource: inferredSource,
      utmMedium,
      utmCampaign,
      landingPage: currentPath,
      referrer,
      source: inferredSource ? `CAMPAIGN_${inferredSource.toUpperCase()}` : undefined,
    };

    // If existing session storage has attribution, preserve original landingPage & UTMs if current has none
    const existingRaw = sessionStorage.getItem(STORAGE_KEY);
    if (existingRaw) {
      const existing: LeadAttribution = JSON.parse(existingRaw);
      const merged: LeadAttribution = {
        utmSource: newAttribution.utmSource || existing.utmSource,
        utmMedium: newAttribution.utmMedium || existing.utmMedium,
        utmCampaign: newAttribution.utmCampaign || existing.utmCampaign,
        landingPage: existing.landingPage || newAttribution.landingPage,
        referrer: existing.referrer || newAttribution.referrer,
        source: newAttribution.source || existing.source,
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return merged;
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newAttribution));
    return newAttribution;
  } catch {
    return null;
  }
}

export function getAttributionData(): LeadAttribution {
  if (typeof window === "undefined") return {};

  try {
    // Refresh / capture current before returning
    storeCurrentAttribution();
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Fallback if sessionStorage is restricted
  }
  return {};
}

/**
 * Appends active attribution params to outgoing links (e.g. from /private-trips to /plan)
 */
export function buildAttributionUrl(targetPath: string, extraParams: Record<string, string> = {}): string {
  if (typeof window === "undefined") return targetPath;

  try {
    const url = new URL(targetPath, window.location.origin);
    const attribution = getAttributionData();

    if (attribution.utmSource) url.searchParams.set("utm_source", attribution.utmSource);
    if (attribution.utmMedium) url.searchParams.set("utm_medium", attribution.utmMedium);
    if (attribution.utmCampaign) url.searchParams.set("utm_campaign", attribution.utmCampaign);

    Object.entries(extraParams).forEach(([k, v]) => {
      url.searchParams.set(k, v);
    });

    return url.pathname + url.search;
  } catch {
    return targetPath;
  }
}
