import { useState, useEffect } from 'react';

export const GITHUB_REPO = 'Ahmed-Farook/notes-app';
export const CURRENT_RELEASE_VERSION = 'v0.2.25';

export type UserPlatform = 'mac' | 'windows' | 'android' | 'web';

export interface DownloadInfo {
  version: string;
  macDmgUrl: string;
  winExeUrl: string;
  androidApkUrl: string;
  webAppUrl: string;
  releasePageUrl: string;
}

export const getDownloadLinks = (tag: string = CURRENT_RELEASE_VERSION): DownloadInfo => {
  const cleanTag = tag.startsWith('v') ? tag : `v${tag}`;
  const versionNum = cleanTag.replace(/^v/, '');
  const baseUrl = `https://github.com/${GITHUB_REPO}/releases/download/${cleanTag}`;

  return {
    version: cleanTag,
    macDmgUrl: `${baseUrl}/texo-${versionNum}-arm64.dmg`,
    winExeUrl: `${baseUrl}/texo-Setup-${versionNum}.exe`,
    androidApkUrl: `${baseUrl}/texo-${versionNum}.apk`,
    webAppUrl: 'https://notes-app-nu-neon.vercel.app/',
    releasePageUrl: `https://github.com/${GITHUB_REPO}/releases/latest`,
  };
};

const CACHE_KEY = 'texo_latest_release_v3';
const REVALIDATE_INTERVAL_MS = 2 * 60 * 1000; // 2 minutes

interface CachedRelease {
  timestamp: number;
  data: DownloadInfo;
}

const getCachedRelease = (): CachedRelease | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed: CachedRelease = JSON.parse(raw);
    if (parsed?.data?.version) {
      return parsed;
    }
  } catch {
    // Ignore storage parse errors
  }
  return null;
};

const setCachedRelease = (data: DownloadInfo) => {
  if (typeof window === 'undefined') return;
  try {
    const item: CachedRelease = {
      timestamp: Date.now(),
      data,
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(item));
  } catch {
    // Ignore storage quota errors
  }
};

const findAssetUrl = (
  assets: Array<{ name?: string; browser_download_url?: string }>,
  ext: string,
  preferredPrefix: string = 'texo'
): string | undefined => {
  if (!Array.isArray(assets)) return undefined;

  // 1. Preferred asset matching prefix and extension (case-insensitive)
  const preferred = assets.find(
    (a) =>
      typeof a.name === 'string' &&
      a.name.toLowerCase().endsWith(ext.toLowerCase()) &&
      a.name.toLowerCase().includes(preferredPrefix.toLowerCase())
  );
  if (preferred?.browser_download_url) return preferred.browser_download_url;

  // 2. Any asset matching the extension
  const anyMatch = assets.find(
    (a) => typeof a.name === 'string' && a.name.toLowerCase().endsWith(ext.toLowerCase())
  );
  return anyMatch?.browser_download_url;
};

export const fetchLatestRelease = async (): Promise<DownloadInfo> => {
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!res.ok) {
      throw new Error(`GitHub API returned HTTP ${res.status}`);
    }

    const data = await res.json();
    const tag = (data.tag_name as string) || CURRENT_RELEASE_VERSION;
    const cleanTag = tag.startsWith('v') ? tag : `v${tag}`;
    const versionNum = cleanTag.replace(/^v/, '');
    const baseUrl = `https://github.com/${GITHUB_REPO}/releases/download/${cleanTag}`;

    const assets = Array.isArray(data.assets) ? data.assets : [];
    const macDmgUrl =
      findAssetUrl(assets, '.dmg', 'texo') ||
      `${baseUrl}/texo-${versionNum}-arm64.dmg`;

    const winExeUrl =
      findAssetUrl(assets, '.exe', 'texo') ||
      `${baseUrl}/texo-Setup-${versionNum}.exe`;

    const androidApkUrl =
      findAssetUrl(assets, '.apk', 'texo') ||
      `${baseUrl}/texo-${versionNum}.apk`;

    const releaseInfo: DownloadInfo = {
      version: cleanTag,
      macDmgUrl,
      winExeUrl,
      androidApkUrl,
      webAppUrl: 'https://notes-app-nu-neon.vercel.app/',
      releasePageUrl: (data.html_url as string) || `https://github.com/${GITHUB_REPO}/releases/latest`,
    };

    setCachedRelease(releaseInfo);
    return releaseInfo;
  } catch (err) {
    console.warn('[texō] Could not fetch latest release from GitHub API, using fallback:', err);
    return getDownloadLinks(CURRENT_RELEASE_VERSION);
  }
};

/**
 * Hook providing the latest live release data from GitHub with Stale-While-Revalidate caching.
 * Resolves synchronously to either cached data or fallback, then updates automatically if newer.
 */
export const useLatestRelease = (): DownloadInfo => {
  const [release, setRelease] = useState<DownloadInfo>(() => {
    const cached = getCachedRelease();
    return cached ? cached.data : getDownloadLinks(CURRENT_RELEASE_VERSION);
  });

  useEffect(() => {
    let isMounted = true;
    const cached = getCachedRelease();
    const now = Date.now();

    // If cache is fresh (less than REVALIDATE_INTERVAL_MS old), don't spam GitHub API
    if (cached && now - cached.timestamp < REVALIDATE_INTERVAL_MS) {
      return;
    }

    fetchLatestRelease().then((latest) => {
      if (isMounted) {
        setRelease(latest);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return release;
};

export const detectUserOS = (): UserPlatform => {
  if (typeof window === 'undefined') return 'web';
  const ua = navigator.userAgent.toLowerCase();

  if (/android/i.test(ua)) return 'android';
  if (/iphone|ipad|ipod/i.test(ua)) return 'web';
  if (/macintosh|mac os x/i.test(ua)) return 'mac';
  if (/windows/i.test(ua)) return 'windows';

  return 'web';
};

