export const GITHUB_REPO = 'Ahmed-Farook/notes-app';
export const CURRENT_RELEASE_VERSION = 'v0.2.21';

export type UserPlatform = 'mac' | 'windows' | 'android' | 'web';

export interface DownloadInfo {
  version: string;
  macDmgUrl: string;
  winExeUrl: string;
  androidApkUrl: string;
  webAppUrl: string;
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
    // Official web application URL
    webAppUrl: 'https://notes-app-nu-neon.vercel.app/',
  };
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

