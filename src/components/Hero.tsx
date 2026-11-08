import React from 'react';
import {
  ExternalLink,
  ShieldCheck,
  Zap,
  Sparkles,
  Apple,
  Smartphone,
  Monitor,
  Globe,
} from 'lucide-react';
import { detectUserOS, getDownloadLinks, CURRENT_RELEASE_VERSION } from '../utils/releaseLinks';

interface HeroProps {
  onPlatformSelect: (platform: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlatformSelect }) => {
  const userOS = detectUserOS();
  const links = getDownloadLinks();

  const getPrimaryAction = () => {
    switch (userOS) {
      case 'mac':
        return {
          label: 'Download for macOS',
          sublabel: 'Apple Silicon (M1/M2/M3/M4) • .dmg',
          url: links.macDmgUrl,
          icon: Apple,
        };
      case 'windows':
        return {
          label: 'Download for Windows',
          sublabel: 'Windows 10 / 11 64-bit • .exe',
          url: links.winExeUrl,
          icon: Monitor,
        };
      case 'android':
        return {
          label: 'Download for Android',
          sublabel: 'Direct APK installation • .apk',
          url: links.androidApkUrl,
          icon: Smartphone,
        };
      default:
        return {
          label: 'Open Web App',
          sublabel: 'Instant browser access with cloud sync',
          url: links.webAppUrl,
          icon: Globe,
        };
    }
  };

  const primary = getPrimaryAction();
  const PrimaryIcon = primary.icon;

  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#263950]/5 via-[#4C627E]/10 to-transparent dark:from-[#7EAAD0]/10 dark:via-[#223344]/20 blur-3xl rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Release Announcement Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#EAE2D2]/80 dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#2A3E52] text-[#263950] dark:text-[#CBD8E3] shadow-2xs animate-in fade-in duration-300">
          <Sparkles size={13} className="text-amber-600 dark:text-amber-400" />
          <span>Release {CURRENT_RELEASE_VERSION} is out</span>
          <span className="text-[#818992] dark:text-[#6E8092]">•</span>
          <a
            href="#platforms"
            className="hover:underline font-semibold text-[#263950] dark:text-[#7EAAD0]"
          >
            See all builds ↗
          </a>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#263950] dark:text-[#E8EEF3] leading-[1.08]">
          One less thing <br />
          <span className="text-[#4C627E] dark:text-[#7EAAD0]">to keep in your head.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
          The calm, distraction-free note app crafted for clarity. 0ms local speed,
          zero-knowledge encryption, and thoughtful Kyoto aesthetics across every device.
        </p>

        {/* CTA Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xs sm:max-w-none mx-auto">
          {/* Smart Detected Download Button */}
          <a
            href={primary.url}
            className="w-full sm:w-[290px] h-[64px] inline-flex items-center justify-center space-x-3.5 px-6 rounded-2xl bg-[#263950] hover:bg-[#1B2C40] dark:bg-[#7EAAD0] dark:hover:bg-[#9DC3E6] text-white dark:text-[#131B24] font-semibold text-sm sm:text-base shadow-soft hover:shadow-elevation transition-all active:scale-[0.98]"
          >
            <PrimaryIcon size={26} className="shrink-0" />
            <div className="text-left">
              <div className="leading-tight">{primary.label}</div>
              <div className="text-[11px] font-normal opacity-80">{primary.sublabel}</div>
            </div>
          </a>

          {/* Web App Link */}
          <a
            href={links.webAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[290px] h-[64px] inline-flex items-center justify-center space-x-3.5 px-6 rounded-2xl bg-[#FAF6EF] dark:bg-[#1C2733] hover:bg-[#EAE2D2] dark:hover:bg-[#25394C] text-[#263950] dark:text-[#E8EEF3] border border-[#E6E0D5] dark:border-[#2A3E52] font-semibold text-sm sm:text-base shadow-soft hover:shadow-elevation transition-all active:scale-[0.98]"
          >
            <Globe size={26} className="shrink-0" />
            <div className="text-left">
              <div className="leading-tight flex items-center gap-1.5">
                <span>Open in Browser</span>
                <ExternalLink size={13} className="opacity-60 shrink-0" />
              </div>
              <div className="text-[11px] font-normal opacity-80">
                Instant web access • No install
              </div>
            </div>
          </a>
        </div>

        {/* Quick Platform Bar */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-[#5A718C] dark:text-[#7A8F9F]">
          <span className="mr-1 font-medium">Available for:</span>
          <button
            onClick={() => onPlatformSelect('mac')}
            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#EAE2D2]/60 dark:bg-[#1C2733]/60 hover:bg-[#EAE2D2] dark:hover:bg-[#25394C] border border-[#E6E0D5]/70 dark:border-[#2A3E52] transition-colors"
          >
            <Apple size={12} />
            <span>macOS</span>
          </button>
          <button
            onClick={() => onPlatformSelect('windows')}
            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#EAE2D2]/60 dark:bg-[#1C2733]/60 hover:bg-[#EAE2D2] dark:hover:bg-[#25394C] border border-[#E6E0D5]/70 dark:border-[#2A3E52] transition-colors"
          >
            <Monitor size={12} />
            <span>Windows</span>
          </button>
          <button
            onClick={() => onPlatformSelect('android')}
            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#EAE2D2]/60 dark:bg-[#1C2733]/60 hover:bg-[#EAE2D2] dark:hover:bg-[#25394C] border border-[#E6E0D5]/70 dark:border-[#2A3E52] transition-colors"
          >
            <Smartphone size={12} />
            <span>Android</span>
          </button>
          <button
            onClick={() => onPlatformSelect('web')}
            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#EAE2D2]/60 dark:bg-[#1C2733]/60 hover:bg-[#EAE2D2] dark:hover:bg-[#25394C] border border-[#E6E0D5]/70 dark:border-[#2A3E52] transition-colors"
          >
            <Globe size={12} />
            <span>Web</span>
          </button>
        </div>

        {/* Value Proposition Micro-badges */}
        <div className="pt-6 border-t border-[#E6E0D5]/80 dark:border-[#223344] max-w-xl mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#6E7E8E] dark:text-[#8AA0B4]">
          <div className="flex items-center space-x-1.5">
            <Zap size={14} className="text-amber-500" />
            <span>0ms Local Speed</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>End-to-End Encrypted</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#263950] dark:bg-[#7EAAD0]" />
            <span>100% Offline First</span>
          </div>
        </div>
      </div>
    </section>
  );
};

