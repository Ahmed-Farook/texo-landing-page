import React from 'react';
import { Download, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { GithubIcon } from './Icons';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onDownloadClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onDownloadClick,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F5F0E6]/85 dark:bg-[#131B24]/85 border-b border-[#E6E0D5] dark:border-[#223344] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center space-x-2 group">
          <Logo size={32} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-[#4C627E] dark:text-[#8AA0B4]">
          <a
            href="#features"
            className="hover:text-[#263950] dark:hover:text-[#E8EEF3] transition-colors"
          >
            Features
          </a>
          <a
            href="#platforms"
            className="hover:text-[#263950] dark:hover:text-[#E8EEF3] transition-colors"
          >
            Platforms
          </a>
          <a
            href="#security"
            className="hover:text-[#263950] dark:hover:text-[#E8EEF3] transition-colors"
          >
            Privacy
          </a>
          <a
            href="#faq"
            className="hover:text-[#263950] dark:hover:text-[#E8EEF3] transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl text-[#4C627E] dark:text-[#8AA0B4] hover:bg-[#EAE2D2] dark:hover:bg-[#1C2733] transition-colors"
          >
            {isDark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} />}
          </button>

          {/* GitHub Repo */}
          <a
            href="https://github.com/Ahmed-Farook/notes-app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#263950] dark:text-[#E8EEF3] bg-[#EAE2D2]/70 dark:bg-[#1C2733] hover:bg-[#DFD6C4] dark:hover:bg-[#25394C] border border-[#E6E0D5] dark:border-[#2A3E52] transition-colors"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
            <ArrowUpRight size={12} className="opacity-60" />
          </a>

          {/* Primary Download CTA */}
          <button
            onClick={onDownloadClick}
            className="inline-flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#263950] hover:bg-[#1B2C40] dark:bg-[#7EAAD0] dark:hover:bg-[#9DC3E6] dark:text-[#131B24] transition-all shadow-sm hover:shadow active:scale-95"
          >
            <Download size={15} />
            <span>Download</span>
          </button>
        </div>
      </div>
    </header>
  );
};

