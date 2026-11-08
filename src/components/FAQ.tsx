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
    question: 'What should I do if macOS says the app is damaged or from an unidentified developer?',
    answer:
      'Apple displays this standard security warning (Gatekeeper) for open-source applications built by community developers who do not hold a paid annual Apple Developer license.\n\nTo open texō on macOS:\n• Method 1 (Quick): Right-click (or Control-click) texō in your Applications folder and select "Open", then confirm by clicking "Open" in the dialog.\n• Method 2 (Terminal): If macOS displays "texō is damaged and cannot be opened", open the Terminal app and run:\nxattr -cr /Applications/texō.app\nPress Enter, and the app will open immediately.',
  },
  {
    question: 'What should I do if Windows SmartScreen warns that the app is unrecognized or not safe?',
    answer:
      'Microsoft Defender SmartScreen displays a blue banner ("Windows protected your PC") on freshly published open-source releases that have not yet built up commercial download reputation.\n\nTo open texō on Windows:\n1. Click the "More info" link on the warning banner.\n2. Click the "Run anyway" button that appears at the bottom right.\n\ntexō is 100% open source under the MIT license, completely free of telemetry, tracking, or ads. You can inspect every line of source code on GitHub.',
  },
  {
    question: 'How do in-app updates work?',
    answer:
      'texō includes an automated updater that queries GitHub Releases. When an update is ready, clicking "Update Now" downloads and installs the new version in-place on macOS, Windows, and Android without manual file downloads.',
  },
  {
    question: 'What inspired the parchment and deep indigo design?',
    answer:
      'texō is styled with warm parchment (#F5F0E6) and deep indigo (#263950). Traditional pure white (#FFFFFF) causes retinal glare and eye fatigue over long writing sessions. Soft parchment tones provide a calm, tactile reading environment reminiscent of physical notebook paper, while maintaining crisp contrast.',
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
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#4C627E] dark:text-[#8AA0B4] leading-relaxed border-t border-[#E6E0D5]/60 dark:border-[#223344] pt-3 whitespace-pre-line font-normal">
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

