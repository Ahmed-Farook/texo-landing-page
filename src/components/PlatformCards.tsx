import React from 'react';
import {
  Apple,
  Monitor,
  Smartphone,
  Globe,
  Download,
  ExternalLink,
} from 'lucide-react';
import { getDownloadLinks } from '../utils/releaseLinks';

interface PlatformCardsProps {
  id?: string;
}

export const PlatformCards: React.FC<PlatformCardsProps> = ({ id = 'platforms' }) => {
  const links = getDownloadLinks();

  const platforms = [
    {
      name: 'macOS',
      arch: 'Apple Silicon & Intel',
      format: '.dmg',
      tag: 'Desktop',
      icon: Apple,
      url: links.macDmgUrl,
      requirements: 'macOS Monterey (12.0) or later',
      badge: 'Native Electron',
      primary: true,
    },
    {
      name: 'Windows',
      arch: '64-bit installer',
      format: '.exe',
      tag: 'Desktop',
      icon: Monitor,
      url: links.winExeUrl,
      requirements: 'Windows 10 / 11 64-bit',
      badge: 'NSIS Installer',
      primary: false,
    },
    {
      name: 'Android',
      arch: 'Direct APK package',
      format: '.apk',
      tag: 'Mobile',
      icon: Smartphone,
      url: links.androidApkUrl,
      requirements: 'Android 9.0 (Pie) or higher',
      badge: 'Capacitor Native',
      primary: false,
    },
    {
      name: 'Web Browser',
      arch: 'Any modern browser',
      format: 'PWA',
      tag: 'Cloud',
      icon: Globe,
      url: links.webAppUrl,
      requirements: 'Chrome, Safari, Firefox, Edge',
      badge: 'Zero Install',
      isWeb: true,
      primary: false,
    },
  ];

  return (
    <section id={id} className="py-14 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-16">
      <div className="max-w-2xl mx-auto text-center space-y-3">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#4C627E] dark:text-[#7EAAD0] bg-[#EAE2D2]/80 dark:bg-[#1C2733]">
          Universal Access
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#263950] dark:text-[#E8EEF3]">
          Download for your device.
        </h2>
        <p className="text-sm sm:text-base text-[#4C627E] dark:text-[#8AA0B4]">
          Independent, offline-ready binaries packaged directly from source.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {platforms.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.name}
              className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border flex flex-col justify-between transition-all hover:shadow-soft ${
                p.primary
                  ? 'bg-[#FAF6EF] dark:bg-[#1C2733] border-[#263950]/30 dark:border-[#7EAAD0]/40 shadow-xs'
                  : 'bg-[#FAF6EF]/60 dark:bg-[#16202A] border-[#E6E0D5] dark:border-[#223344]'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-[#EAE2D2] dark:bg-[#203448] text-[#263950] dark:text-[#7EAAD0] flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#EAE2D2]/60 dark:bg-[#1C2733] text-[#5A718C] dark:text-[#8AA0B4] border border-[#E6E0D5] dark:border-[#2A3E52]">
                    {p.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#263950] dark:text-[#E8EEF3]">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[#5A718C] dark:text-[#8AA0B4] mt-0.5">
                    {p.arch} • <span className="font-mono">{p.format}</span>
                  </p>
                </div>

                <div className="text-[11px] text-[#6E7E8E] dark:text-[#7A8F9F] pt-2 border-t border-[#E6E0D5]/70 dark:border-[#223344]">
                  Requires {p.requirements}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <a
                  href={p.url}
                  target={p.isWeb ? '_blank' : undefined}
                  rel={p.isWeb ? 'noopener noreferrer' : undefined}
                  className={`w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
                    p.primary
                      ? 'bg-[#263950] hover:bg-[#1B2C40] dark:bg-[#7EAAD0] dark:hover:bg-[#9DC3E6] text-white dark:text-[#131B24] shadow-xs'
                      : 'bg-[#EAE2D2] dark:bg-[#203448] hover:bg-[#DFD6C4] dark:hover:bg-[#2B425C] text-[#263950] dark:text-[#E8EEF3]'
                  }`}
                >
                  {p.isWeb ? <ExternalLink size={14} /> : <Download size={14} />}
                  <span>{p.isWeb ? 'Open Web App' : `Download ${p.format}`}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

