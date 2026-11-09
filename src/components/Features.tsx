import React from 'react';
import {
  Zap,
  Lock,
  Palette,
  CheckCircle2,
  Trash2,
  WifiOff,
} from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-14 sm:py-24 border-t border-[#E6E0D5] dark:border-[#223344] bg-[#FAF6EF]/60 dark:bg-[#101720]/40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#4C627E] dark:text-[#7EAAD0] bg-[#EAE2D2]/80 dark:bg-[#1C2733]">
            Engineered for clarity
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#263950] dark:text-[#E8EEF3]">
            Built with intention.<br />Down to every keystroke.
          </h2>
          <p className="text-sm sm:text-base text-[#4C627E] dark:text-[#8AA0B4]">
            Most note apps have become bloated mini-operating systems. texō focuses on speed,
            privacy, and the simple tactile joy of writing.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Bento Card 1 (Large - 2 cols on md) */}
          <div className="md:col-span-2 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FAF6EF] dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#223344] shadow-soft space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-[#263950]/10 dark:bg-[#7EAAD0]/15 text-[#263950] dark:text-[#7EAAD0] flex items-center justify-center">
              <Zap size={22} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#263950] dark:text-[#E8EEF3]">
              0ms Local Autosave
            </h3>
            <p className="text-sm sm:text-base text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
              Every character you type is saved directly to your device storage in real-time.
              You never have to wait for an internet request or fear losing thoughts during an offline
              train commute or flight.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-[#5A718C] dark:text-[#7A8F9F]">
              <span className="flex items-center space-x-1.5">
                <WifiOff size={13} />
                <span>100% Offline</span>
              </span>
              <span>•</span>
              <span>Instant startup</span>
              <span>•</span>
              <span>Zero telemetry</span>
            </div>
          </div>

          {/* Bento Card 2: Security */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FAF6EF] dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#223344] shadow-soft space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Lock size={22} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#263950] dark:text-[#E8EEF3]">
              Zero-Knowledge E2EE
            </h3>
            <p className="text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
              Your encryption password never touches the server. All note titles, bodies, and tags
              are encrypted locally on your device with AES-GCM before syncing.
            </p>
          </div>

          {/* Bento Card 3: Parchment & Indigo Palette */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FAF6EF] dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#223344] shadow-soft space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Palette size={22} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#263950] dark:text-[#E8EEF3]">
              Parchment &amp; Indigo
            </h3>
            <p className="text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
              Warm parchment (<code className="font-mono text-xs">#F5F0E6</code>) and deep
              indigo (<code className="font-mono text-xs">#263950</code>) crafted to minimize glare
              and eye strain during marathon writing sessions.
            </p>
          </div>

          {/* Bento Card 4: Apple-Inspired Checklists */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FAF6EF] dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#223344] shadow-soft space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <CheckCircle2 size={22} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#263950] dark:text-[#E8EEF3]">
              Apple-Inspired Checklists
            </h3>
            <p className="text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
              Inspired by Apple Notes—because they make genuinely great software, but keep it
              all to themselves. We brought that same tactile, circular checklist experience to
              everywhere you actually work: macOS, Windows, Android, and Web.
            </p>
          </div>

          {/* Bento Card 5: Soft Delete */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FAF6EF] dark:bg-[#1C2733] border border-[#E6E0D5] dark:border-[#223344] shadow-soft space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center">
              <Trash2 size={22} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#263950] dark:text-[#E8EEF3]">
              Recently Deleted Vault
            </h3>
            <p className="text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed">
              Deleted notes stay protected in your trash bin for 30 days. One-click restore or
              permanently erase whenever you choose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

