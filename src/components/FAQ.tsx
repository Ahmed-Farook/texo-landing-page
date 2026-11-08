import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is texō really free and open source?',
    answer:
      'Yes, 100%. texō is completely open source under the MIT License. The entire source code for the Web app, Electron desktop apps, and Android mobile app is public on GitHub.',
  },
  {
    question: 'Can I use texō without creating an account?',
    answer:
      'Absolutely. texō works right out of the box with 0ms local storage (SQLite on desktop/mobile and IndexedDB in browsers). An account is only needed if you want automatic real-time cloud sync across your devices.',
  },
  {
    question: 'How does end-to-end encryption work?',
    answer:
      'When you sign in, your device derives an encryption key from your password using PBKDF2 with SHA-256 and unique salt. Every note title and body is encrypted with AES-GCM before leaving your device. Nobody—including server hosts—can decrypt your notes.',
  },
  {
    question: 'Why does macOS say the app is damaged on first launch?',
    answer:
      'Apple displays this standard security warning for unnotarized open-source applications built by community developers without a paid annual Apple Developer license. To grant permission, open Terminal and run: xattr -cr "/Applications/texō.app".',
  },
  {
    question: 'How do in-app updates work?',
    answer:
      'texō includes an automated updater that queries GitHub Releases. When an update is ready, clicking "Update Now" downloads and installs the new version in-place on macOS, Windows, and Android without manual file downloads.',
  },
  {
    question: 'What inspired the Kyoto color theme?',
    answer:
      'texō is styled with warm Japanese parchment (#F5F0E6) and deep Kyoto indigo (#263950). Traditional pure white (#FFFFFF) causes retinal glare and eye fatigue over long writing sessions; Kyoto colors provide a calm, tactile reading environment.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
      <div className="text-center space-y-3">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#4C627E] dark:text-[#7EAAD0] bg-[#EAE2D2]/80 dark:bg-[#1C2733]">
          Got questions?
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#263950] dark:text-[#E8EEF3]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-xl sm:rounded-2xl border border-[#E6E0D5] dark:border-[#223344] bg-[#FAF6EF] dark:bg-[#1C2733] overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-[#263950] dark:text-[#E8EEF3] hover:opacity-90"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#6E7E8E] dark:text-[#8AA0B4] transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed border-t border-[#E6E0D5]/60 dark:border-[#223344] pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

