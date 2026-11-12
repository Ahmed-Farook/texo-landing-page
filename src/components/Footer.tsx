import React from 'react';
import { Logo } from './Logo';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E6E0D5] dark:border-[#223344] bg-[#FAF6EF]/60 dark:bg-[#101720]/80 py-12 px-4 sm:px-6 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#6E7E8E] dark:text-[#8AA0B4]">
        {/* Brand & Open-Source Attribution */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <Logo size={24} />
          <span className="hidden sm:inline opacity-40">|</span>
          <p>
            <strong className="font-semibold text-[#263950] dark:text-[#E8EEF3]">texō</strong> is
            free, open-source software licensed under the{' '}
            <a
              href="https://github.com/Ahmed-Farook/notes-app/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#263950] dark:hover:text-[#E8EEF3] transition-colors"
            >
              MIT License
            </a>
            .
          </p>
        </div>

        {/* Repository, License & Policy Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href="https://github.com/Ahmed-Farook/notes-app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#263950] dark:hover:text-[#E8EEF3] flex items-center space-x-1.5 transition-colors"
          >
            <GithubIcon size={14} />
            <span>GitHub Repository</span>
          </a>
          <a
            href="https://github.com/Ahmed-Farook/notes-app/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#263950] dark:hover:text-[#E8EEF3] transition-colors"
          >
            MIT License
          </a>
          <a
            href="https://github.com/Ahmed-Farook/notes-app#code-signing-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#263950] dark:hover:text-[#E8EEF3] transition-colors"
          >
            Code Signing Policy
          </a>
          <a
            href="#security"
            className="hover:text-[#263950] dark:hover:text-[#E8EEF3] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://github.com/Ahmed-Farook/notes-app/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#263950] dark:hover:text-[#E8EEF3] transition-colors"
          >
            Releases
          </a>
        </div>
      </div>
    </footer>
  );
};

