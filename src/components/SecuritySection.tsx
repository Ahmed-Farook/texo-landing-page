import React from 'react';
import { Key, EyeOff, ServerOff } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="py-14 sm:py-24 border-t border-[#E6E0D5] dark:border-[#223344] bg-[#FAF6EF]/40 dark:bg-[#101720]/40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#4C627E] dark:text-[#7EAAD0] bg-[#EAE2D2]/80 dark:bg-[#1C2733]">
            Zero-Knowledge Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#263950] dark:text-[#E8EEF3]">
            Your thoughts belong to you.<br />Not our servers.
          </h2>
          <p className="text-sm sm:text-base text-[#4C627E] dark:text-[#8AA0B4]">
            Notes often hold your most intimate reflections, financial plans, and creative secrets.
            texō is architected so nobody else can ever read them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* Item 1 */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF6EF] dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#223344] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Key size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#263950] dark:text-[#E8EEF3]">
              Client-Side Keys
            </h3>
            <p className="text-xs sm:text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
              Your encryption keys are derived on your device using PBKDF2 with SHA-256 and salted.
              The raw password is never transmitted across the network.
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF6EF] dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#223344] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#263950]/10 dark:bg-[#7EAAD0]/15 text-[#263950] dark:text-[#7EAAD0] flex items-center justify-center">
              <EyeOff size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#263950] dark:text-[#E8EEF3]">
              Zero Telemetry
            </h3>
            <p className="text-xs sm:text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
              No tracking pixels, no event loggers, and no third-party analytics scripts. Your
              writing habit is entirely private.
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF6EF] dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#223344] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <ServerOff size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#263950] dark:text-[#E8EEF3]">
              Full Offline Autonomy
            </h3>
            <p className="text-xs sm:text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
              texō does not require an account or internet connection to function. You can use it as a
              purely local application indefinitely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

