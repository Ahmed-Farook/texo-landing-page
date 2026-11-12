import React from 'react';
import { Key, EyeOff, ServerOff, Cloud, FileDown } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  return (
    <section
      id="security"
      className="scroll-mt-16 py-14 sm:py-24 border-t border-[#E6E0D5] dark:border-[#223344] bg-[#FAF6EF]/40 dark:bg-[#101720]/40 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#4C627E] dark:text-[#7EAAD0] bg-[#EAE2D2]/80 dark:bg-[#1C2733]">
            Security &amp; Privacy Policy
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#263950] dark:text-[#E8EEF3]">
            Your thoughts belong to you.<br />Not our servers.
          </h2>
          <p className="text-sm sm:text-base text-[#4C627E] dark:text-[#8AA0B4]">
            Notes often hold your most intimate reflections, financial plans, and creative secrets.
            texō is built from the ground up with zero-knowledge privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* Item 1: Offline-First Local Storage */}
          <div className="md:col-span-2 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF6EF] dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#223344] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <ServerOff size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#263950] dark:text-[#E8EEF3]">
              Offline-First Local Storage
            </h3>
            <p className="text-xs sm:text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
              When used without signing in, all notes, folders, and handwritten drawings stay locally
              on your device and zero data is sent to any server.
            </p>
          </div>

          {/* Item 2: Zero-Knowledge End-to-End Encryption */}
          <div className="md:col-span-2 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF6EF] dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#223344] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Key size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#263950] dark:text-[#E8EEF3]">
              Zero-Knowledge Encryption
            </h3>
            <p className="text-xs sm:text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
              Note titles, rich-text content, handwritten strokes, and custom folder names are
              encrypted client-side using your passphrase-derived AES-GCM key before leaving your
              device. Neither Supabase nor the maintainer can read your notes.
            </p>
          </div>

          {/* Item 3: Zero Ads or Trackers */}
          <div className="md:col-span-2 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF6EF] dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#223344] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#263950]/10 dark:bg-[#7EAAD0]/15 text-[#263950] dark:text-[#7EAAD0] flex items-center justify-center">
              <EyeOff size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#263950] dark:text-[#E8EEF3]">
              Zero Ads or Trackers
            </h3>
            <p className="text-xs sm:text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
              texō contains no advertising SDKs, telemetry, or third-party behavioral tracking. Your
              writing activity remains completely private.
            </p>
          </div>

          {/* Item 4: Optional Cloud Sync & Account Data */}
          <div className="md:col-span-3 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF6EF] dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#223344] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Cloud size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#263950] dark:text-[#E8EEF3]">
              Optional Cloud Sync &amp; Account Data
            </h3>
            <p className="text-xs sm:text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
              Cloud sync is completely optional. If you choose to sign in for cross-device sync,
              authentication is handled via Supabase using only your email address and password.
            </p>
          </div>

          {/* Item 5: Data Export & Deletion */}
          <div className="md:col-span-3 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF6EF] dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#223344] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#263950]/10 dark:bg-[#7EAAD0]/15 text-[#263950] dark:text-[#7EAAD0] flex items-center justify-center">
              <FileDown size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#263950] dark:text-[#E8EEF3]">
              Data Export &amp; Deletion
            </h3>
            <p className="text-xs sm:text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
              You retain full ownership of your data. Export all notes anytime in{' '}
              <code className="font-mono text-[11px]">.pdf</code>,{' '}
              <code className="font-mono text-[11px]">.md</code>,{' '}
              <code className="font-mono text-[11px]">.txt</code>,{' '}
              <code className="font-mono text-[11px]">.html</code>, or bulk{' '}
              <code className="font-mono text-[11px]">.zip</code> format, or contact the maintainer
              (Ahmed Farook &mdash;{' '}
              <a
                href="mailto:ahmedfarook470@gmail.com"
                className="font-semibold text-[#263950] dark:text-[#7EAAD0] underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                ahmedfarook470@gmail.com
              </a>
              ) for account deletion inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

