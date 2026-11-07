import React from 'react';
import { Logo } from './Logo';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E6E0D5] dark:border-[#223344] bg-[#FAF6EF]/60 dark:bg-[#101720]/80 py-12 px-4 sm:px-6 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#6E7E8E] dark:text-[#8AA0B4]">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <Logo size={24} />
          <span className="hidden sm:inline opacity-40">|</span>
          <p>
            One less thing to keep in your head. Released under MIT.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/Ahmed-Farook/notes-app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#263950] dark:hover:text-[#E8EEF3] flex items-center space-x-1.5 transition-colors"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>
          <a
            href="https://github.com/Ahmed-Farook/notes-app/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#263950] dark:hover:text-[#E8EEF3] transition-colors"
          >
            Releases
          </a>
          <a
            href="#platforms"
            className="hover:text-[#263950] dark:hover:text-[#E8EEF3] transition-colors"
          >
            Downloads
          </a>
        </div>
      </div>
    </footer>
  );
};

