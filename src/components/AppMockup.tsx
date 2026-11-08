import React, { useState } from 'react';
import {
  Folder,
  FolderPlus,
  Trash2,
  Pin,
  Search,
  PanelLeft,
  Sun,
  Moon,
  Cloud,
  SquarePen,
  Check,
  List,
  ListOrdered,
  ListTodo,
  Quote,
  Code,
  Minus,
  Undo2,
  Redo2,
  LayoutGrid,
  ArrowDownToLine,
  Underline,
} from 'lucide-react';

export const AppMockup: React.FC = () => {
  // Independent mockup theme state (strictly decoupled from website theme)
  const [isMockupDark, setIsMockupDark] = useState<boolean>(false);

  // Mobile view tab: on small screens, users can flip between Note list and Editor
  const [mobileTab, setMobileTab] = useState<'editor' | 'list'>('editor');

  // Interactive checklist state
  const [checklist, setChecklist] = useState([
    { id: '1', text: 'Check off items on your to-do lists', checked: true },
    {
      id: '2',
      text: 'Create a fresh note with New Note (or press Cmd+N / Ctrl+N)',
      checked: false,
      hasKeycaps: true,
    },
    {
      id: '3',
      text: 'Organize your ideas into custom folders in the sidebar',
      checked: false,
    },
    {
      id: '4',
      text: 'Sign in to sync seamlessly between macOS, Windows, Android, and Web',
      checked: false,
    },
  ]);

  const toggleCheck = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-3 sm:px-6 pb-16 sm:pb-32">
      <div className="relative">
        {/* Floating Arrow Callout: Points to Dark/Light Mode Switcher */}
        <div className="hidden sm:flex items-center space-x-2 absolute -top-12 right-2 sm:right-6 pointer-events-none select-none z-30">
          <span
            className={`text-xs font-semibold tracking-tight transition-colors ${
              isMockupDark ? 'text-[#7EAAD0]' : 'text-[#263950]'
            }`}
          >
            Try switching themes!
          </span>
          {/* Hand-drawn style curved arrow swooping down to theme toggle */}
          <svg
            width="38"
            height="32"
            viewBox="0 0 38 32"
            fill="none"
            className={`transition-colors ${isMockupDark ? 'text-[#7EAAD0]' : 'text-[#263950]'}`}
            aria-hidden="true"
          >
            <path
              d="M4 4 C18 4 33 8 31 25"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M24 20 C27 23 30 26 31 26 C32 23 35 20 37 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Mobile Callout Bar (visible only on mobile) */}
        <div className="flex sm:hidden items-center justify-between px-1 pb-2.5 text-xs select-none">
          <div className="flex items-center space-x-1 font-semibold text-[#D4A359] dark:text-[#7EAAD0]">
            <span>Interactive Kyoto App</span>
          </div>
          <button
            type="button"
            onClick={() => setIsMockupDark(!isMockupDark)}
            className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all shadow-2xs ${
              isMockupDark
                ? 'bg-[#1C2733] border-[#2A3E52] text-[#7EAAD0]'
                : 'bg-[#FAF6EF] border-[#DFD3C0] text-[#263950]'
            }`}
          >
            {isMockupDark ? <Sun size={12} className="text-amber-400" /> : <Moon size={12} />}
            <span>{isMockupDark ? 'Switch to Light' : 'Switch to Dark'}</span>
          </button>
        </div>

        {/* Floating Mockup Window Container - strictly conditioned on isMockupDark, NOT global dark mode */}
        <div
          className={`rounded-2xl sm:rounded-3xl border shadow-xl sm:shadow-2xl overflow-hidden transition-colors duration-300 ${
            isMockupDark
              ? 'bg-[#121B24] border-[#223344] text-[#E8EEF3]'
              : 'bg-[#FAF5EF] border-[#DFD3C0] text-[#1C2B36]'
          }`}
        >
          {/* Top Titlebar */}
          <div
            className={`h-11 px-3 sm:px-3.5 border-b flex items-center justify-between transition-colors select-none ${
              isMockupDark
                ? 'bg-[#151E28] border-[#223344]'
                : 'bg-[#F3EDE1] border-[#DFD3C0]'
            }`}
          >
            {/* Left Controls: Traffic lights + Sidebar/View or Mobile Tabs */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* macOS Traffic Lights */}
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>

              {/* Desktop Sidebar & View Mode Toggles */}
              <div className="hidden sm:flex items-center space-x-1.5 pl-1">
                <button
                  type="button"
                  title="Toggle sidebar"
                  className={`p-1 rounded-md text-xs border transition-colors ${
                    isMockupDark
                      ? 'border-[#263747] text-[#8AA0B4] hover:bg-[#1C2733]'
                      : 'border-[#DFD3C0] text-[#4C627E] hover:bg-[#E5DCCB] bg-[#FAF5EF]'
                  }`}
                >
                  <PanelLeft size={14} />
                </button>

                <div
                  className={`flex items-center p-0.5 rounded-md border text-xs ${
                    isMockupDark
                      ? 'border-[#263747] bg-[#101822] text-[#8AA0B4]'
                      : 'border-[#DFD3C0] bg-[#FAF5EF] text-[#4C627E]'
                  }`}
                >
                  <button
                    type="button"
                    title="List view"
                    className={`p-1 rounded ${
                      isMockupDark ? 'bg-[#223344] text-[#E8EEF3]' : 'bg-[#E5DCCB] text-[#213A50]'
                    }`}
                  >
                    <List size={13} />
                  </button>
                  <button
                    type="button"
                    title="Gallery view"
                    className="p-1 rounded hover:opacity-80"
                  >
                    <LayoutGrid size={13} />
                  </button>
                </div>
              </div>

              {/* Mobile View Tab Switcher (Notes vs Editor) */}
              <div
                className={`flex sm:hidden items-center p-0.5 rounded-md border text-[11px] font-medium ${
                  isMockupDark
                    ? 'border-[#263747] bg-[#101822]'
                    : 'border-[#DFD3C0] bg-[#FAF5EF]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setMobileTab('editor')}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    mobileTab === 'editor'
                      ? isMockupDark
                        ? 'bg-[#253D56] text-white shadow-2xs'
                        : 'bg-[#213A50] text-white shadow-2xs'
                      : isMockupDark
                        ? 'text-[#8AA0B4]'
                        : 'text-[#4C627E]'
                  }`}
                >
                  Editor
                </button>
                <button
                  type="button"
                  onClick={() => setMobileTab('list')}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    mobileTab === 'list'
                      ? isMockupDark
                        ? 'bg-[#253D56] text-white shadow-2xs'
                        : 'bg-[#213A50] text-white shadow-2xs'
                      : isMockupDark
                        ? 'text-[#8AA0B4]'
                        : 'text-[#4C627E]'
                  }`}
                >
                  Notes (1)
                </button>
              </div>
            </div>

            {/* Center: Brand Glyph + "texō" */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                <img
                  src={isMockupDark ? '/texo-logo-light.png' : '/texo-logo.png'}
                  alt="texō"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                />
              </div>
              <span
                className={`font-semibold text-xs tracking-tight ${
                  isMockupDark ? 'text-[#E8EEF3]' : 'text-[#1C2B36]'
                }`}
              >
                texō
              </span>
            </div>

            {/* Right Controls: Updates tray, Cloud sync, Theme icon (WORKS), New Note button */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <button
                type="button"
                title="Software Updates"
                className={`hidden sm:inline-flex p-1 rounded hover:opacity-80 transition-opacity ${
                  isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'
                }`}
              >
                <ArrowDownToLine size={15} />
              </button>

              <button
                type="button"
                title="Cloud Sync"
                className={`hidden sm:inline-flex p-1 rounded hover:opacity-80 transition-opacity ${
                  isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'
                }`}
              >
                <Cloud size={15} />
              </button>

              {/* App Theme Toggle Icon (FUNCTIONAL & INDEPENDENT) */}
              <button
                type="button"
                onClick={() => setIsMockupDark(!isMockupDark)}
                title={isMockupDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className={`p-1.5 rounded-lg border transition-all active:scale-90 ${
                  isMockupDark
                    ? 'border-[#263747] bg-[#1C2733] text-amber-400 hover:text-amber-300'
                    : 'border-[#DFD3C0] bg-[#FAF5EF] text-[#213A50] hover:text-[#172A3C]'
                }`}
              >
                {isMockupDark ? <Sun size={14} /> : <Moon size={14} />}
              </button>

              {/* New Note Button */}
              <button
                type="button"
                title="New Note"
                className={`inline-flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-2.5 py-1 rounded-md text-xs font-semibold text-white shadow-xs transition-opacity ${
                  isMockupDark
                    ? 'bg-[#2A3E56] hover:bg-[#344D6A]'
                    : 'bg-[#213A50] hover:bg-[#1B2C40]'
                }`}
              >
                <SquarePen size={13} />
                <span className="hidden md:inline">New Note</span>
              </button>
            </div>
          </div>

          {/* Three-pane App Body */}
          <div className="grid grid-cols-12 min-h-[460px] sm:min-h-[540px]">
            {/* Pane 1: Left Sidebar (Desktop only) */}
            <div
              className={`hidden md:flex md:col-span-3 flex-col justify-between p-3 border-r transition-colors select-none text-xs ${
                isMockupDark
                  ? 'bg-[#0F1822] border-[#223344]'
                  : 'bg-[#F0E7D8] border-[#DFD3C0]'
              }`}
            >
              <div className="space-y-4">
                {/* NOTES section */}
                <div>
                  <div
                    className={`px-2 pb-1 text-[10px] font-semibold tracking-wider uppercase ${
                      isMockupDark ? 'text-[#6E8092]' : 'text-[#8A9BA8]'
                    }`}
                  >
                    Notes
                  </div>
                  <div>
                    {/* Active Notes Folder with count: 1 */}
                    <div
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md font-medium text-xs shadow-xs text-white ${
                        isMockupDark ? 'bg-[#24374A]' : 'bg-[#213A50]'
                      }`}
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <Folder size={14} className="text-white shrink-0" />
                        <span className="truncate">Notes</span>
                      </div>
                      <span className="text-[11px] font-mono text-white/80">1</span>
                    </div>
                  </div>
                </div>

                {/* FOLDERS section */}
                <div>
                  <div className="flex items-center justify-between px-2 pb-1">
                    <span
                      className={`text-[10px] font-semibold tracking-wider uppercase ${
                        isMockupDark ? 'text-[#6E8092]' : 'text-[#8A9BA8]'
                      }`}
                    >
                      Folders
                    </span>
                    <button
                      type="button"
                      title="New Folder"
                      className={`p-0.5 rounded hover:opacity-80 ${
                        isMockupDark ? 'text-[#6E8092]' : 'text-[#8A9BA8]'
                      }`}
                    >
                      <FolderPlus size={13} />
                    </button>
                  </div>

                  <div className="space-y-0.5">
                    {/* Work & Projects (0) */}
                    <div
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-md transition-colors ${
                        isMockupDark
                          ? 'text-[#CBD8E3] hover:bg-[#16222E]'
                          : 'text-[#2B3E4F] hover:bg-[#E5DCCB]'
                      }`}
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <Folder
                          size={14}
                          className={isMockupDark ? 'text-[#6E8092]' : 'text-[#5A6D7E]'}
                        />
                        <span className="truncate">Work &amp; Projects</span>
                      </div>
                      <span
                        className={`text-[11px] font-mono ${
                          isMockupDark ? 'text-[#6E8092]' : 'text-[#8A9BA8]'
                        }`}
                      >
                        0
                      </span>
                    </div>

                    {/* Personal & Ideas (0) */}
                    <div
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-md transition-colors ${
                        isMockupDark
                          ? 'text-[#CBD8E3] hover:bg-[#16222E]'
                          : 'text-[#2B3E4F] hover:bg-[#E5DCCB]'
                      }`}
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <Folder
                          size={14}
                          className={isMockupDark ? 'text-[#6E8092]' : 'text-[#5A6D7E]'}
                        />
                        <span className="truncate">Personal &amp; Ideas</span>
                      </div>
                      <span
                        className={`text-[11px] font-mono ${
                          isMockupDark ? 'text-[#6E8092]' : 'text-[#8A9BA8]'
                        }`}
                      >
                        0
                      </span>
                    </div>
                  </div>
                </div>

                {/* Recently Deleted (0) */}
                <div className="pt-2">
                  <div
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded-md transition-colors ${
                      isMockupDark
                        ? 'text-[#CBD8E3] hover:bg-[#16222E]'
                        : 'text-[#2B3E4F] hover:bg-[#E5DCCB]'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <Trash2
                        size={14}
                        className={isMockupDark ? 'text-[#6E8092]' : 'text-[#5A6D7E]'}
                      />
                      <span className="truncate">Recently Deleted</span>
                    </div>
                    <span
                      className={`text-[11px] font-mono ${
                        isMockupDark ? 'text-[#6E8092]' : 'text-[#8A9BA8]'
                      }`}
                    >
                      0
                    </span>
                  </div>
                </div>
              </div>

              <div />
            </div>

            {/* Pane 2: Middle Pane (Notes List - ONLY ONE NOTE) */}
            {/* On mobile: displayed only when mobileTab === 'list'; on sm+: always displayed */}
            <div
              className={`${
                mobileTab === 'list' ? 'col-span-12 flex' : 'hidden'
              } sm:flex sm:col-span-5 md:col-span-4 border-r flex-col transition-colors select-none ${
                isMockupDark
                  ? 'bg-[#16202A] border-[#223344]'
                  : 'bg-[#F6EFE4] border-[#DFD3C0]'
              }`}
            >
              {/* Header: Note count: 1 note & Select button */}
              <div
                className={`px-3.5 py-2 flex items-center justify-between border-b ${
                  isMockupDark
                    ? 'bg-[#141E28] border-[#223344]'
                    : 'bg-[#EFE7D8] border-[#DFD3C0]'
                }`}
              >
                <span
                  className={`text-xs font-medium ${
                    isMockupDark ? 'text-[#8AA0B4]' : 'text-[#6E7E8E]'
                  }`}
                >
                  1 note
                </span>
                <button
                  type="button"
                  className={`text-xs font-semibold ${
                    isMockupDark ? 'text-[#7EAAD0]' : 'text-[#213A50]'
                  }`}
                >
                  Select
                </button>
              </div>

              {/* Search Bar */}
              <div
                className={`p-2.5 border-b ${
                  isMockupDark ? 'border-[#223344]' : 'border-[#DFD3C0]'
                }`}
              >
                <div
                  className={`flex items-center w-full px-2.5 py-1.5 rounded-lg border text-xs ${
                    isMockupDark
                      ? 'bg-[#1C2733] border-[#263747] text-[#8AA0B4]'
                      : 'bg-[#EEE9E3] border-[#DFD3C0] text-[#6E7E8E]'
                  }`}
                >
                  <Search size={13} className="text-neutral-400 mr-2 shrink-0" />
                  <span className="text-neutral-400">Search all notes...</span>
                </div>
              </div>

              {/* Pinned section with the ONLY single note card */}
              <div className="p-2 space-y-2">
                <div
                  className={`px-2 text-[10px] font-semibold uppercase tracking-wider ${
                    isMockupDark ? 'text-[#6E8092]' : 'text-[#8A9BA8]'
                  }`}
                >
                  Pinned
                </div>

                {/* The single pinned note card */}
                <div
                  onClick={() => setMobileTab('editor')}
                  className={`p-3 rounded-xl border text-white shadow-xs cursor-pointer transition-transform active:scale-[0.99] ${
                    isMockupDark
                      ? 'bg-[#233853] border-[#2F4A6E]'
                      : 'bg-[#213A50] border-[#1B2F42]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-xs text-white truncate pr-2">
                      Welcome to notes-app
                    </h4>
                    <Pin size={12} className="rotate-45 fill-white text-white shrink-0" />
                  </div>
                  <p className="text-[11px] text-white/75 truncate leading-relaxed">
                    10:24 PM We&apos;re so glad you&apos;re here! This is ...
                  </p>
                </div>
              </div>
            </div>

            {/* Pane 3: Right Editor Pane */}
            {/* On mobile: displayed when mobileTab === 'editor'; on sm+: always displayed */}
            <div
              className={`${
                mobileTab === 'editor' ? 'col-span-12 flex' : 'hidden'
              } sm:flex sm:col-span-7 md:col-span-5 flex-col justify-between transition-colors overflow-hidden ${
                isMockupDark ? 'bg-[#121B24]' : 'bg-[#FAF5EF]'
              }`}
            >
              {/* Secondary Editor Formatting Toolbar */}
              <div
                className={`px-3 py-1.5 border-b flex items-center space-x-1.5 text-xs select-none sticky top-0 z-10 overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap ${
                  isMockupDark
                    ? 'bg-[#151E28] border-[#223344]'
                    : 'bg-[#F3EDE1] border-[#DFD3C0]'
                }`}
              >
                {/* Headings */}
                <span
                  className={`font-semibold text-[11px] px-1 shrink-0 ${
                    isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'
                  }`}
                >
                  H1
                </span>
                <span
                  className={`font-semibold text-[11px] px-1 shrink-0 ${
                    isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'
                  }`}
                >
                  H2
                </span>
                <span
                  className={`font-semibold text-[11px] px-1 shrink-0 ${
                    isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'
                  }`}
                >
                  H3
                </span>

                <div
                  className={`h-3 w-px mx-1 shrink-0 ${
                    isMockupDark ? 'bg-[#263747]' : 'bg-[#DFD3C0]'
                  }`}
                />

                {/* Text Styles */}
                <span
                  className={`font-bold text-[11px] px-1 shrink-0 ${
                    isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'
                  }`}
                >
                  B
                </span>
                <span
                  className={`italic font-serif text-[11px] px-1 shrink-0 ${
                    isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'
                  }`}
                >
                  I
                </span>
                <Underline
                  size={13}
                  className={`shrink-0 ${isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'}`}
                />
                <span
                  className={`line-through text-[11px] px-1 shrink-0 ${
                    isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'
                  }`}
                >
                  S
                </span>
                <span
                  className={`font-mono text-[11px] px-1 shrink-0 ${
                    isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'
                  }`}
                >
                  &amp;
                </span>

                <div
                  className={`h-3 w-px mx-1 shrink-0 ${
                    isMockupDark ? 'bg-[#263747]' : 'bg-[#DFD3C0]'
                  }`}
                />

                {/* Lists */}
                <ListTodo
                  size={13}
                  className={`shrink-0 ${isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'}`}
                />
                <List
                  size={13}
                  className={`shrink-0 ${isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'}`}
                />
                <ListOrdered
                  size={13}
                  className={`shrink-0 ${isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'}`}
                />

                <div
                  className={`h-3 w-px mx-1 shrink-0 ${
                    isMockupDark ? 'bg-[#263747]' : 'bg-[#DFD3C0]'
                  }`}
                />

                {/* Active Quote Button */}
                <div
                  className={`p-1 rounded text-xs shrink-0 ${
                    isMockupDark
                      ? 'bg-[#203448] text-[#7EAAD0]'
                      : 'bg-[#E5DCCB] text-[#213A50]'
                  }`}
                >
                  <Quote size={12} />
                </div>
                <Code
                  size={13}
                  className={`shrink-0 ${isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'}`}
                />
                <Minus
                  size={13}
                  className={`shrink-0 ${isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'}`}
                />

                <div
                  className={`h-3 w-px mx-1 shrink-0 ${
                    isMockupDark ? 'bg-[#263747]' : 'bg-[#DFD3C0]'
                  }`}
                />

                <Undo2
                  size={13}
                  className={`shrink-0 ${isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'}`}
                />
                <Redo2
                  size={13}
                  className={`shrink-0 ${isMockupDark ? 'text-[#8AA0B4]' : 'text-[#5A6D7E]'}`}
                />
              </div>

              {/* Note Content Area */}
              <div className="p-4 sm:p-7 space-y-3.5 sm:space-y-4 overflow-y-auto">
                {/* Centered Date header */}
                <div className="text-center pt-0.5 pb-1">
                  <span
                    className={`text-[10px] sm:text-[11px] font-medium ${
                      isMockupDark ? 'text-[#6E8092]' : 'text-[#8A9BA8]'
                    }`}
                  >
                    November 7, 2026 at 10:24 PM
                  </span>
                </div>

                {/* Title */}
                <h1
                  className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight ${
                    isMockupDark ? 'text-[#E8EEF3]' : 'text-[#1C2B36]'
                  }`}
                >
                  Welcome to notes-app 👋
                </h1>

                {/* Paragraph 1 */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    isMockupDark ? 'text-[#A0B2C4]' : 'text-[#3B4D5D]'
                  }`}
                >
                  We&apos;re so glad you&apos;re here! This is your clean, distraction-free space for
                  capturing quick thoughts, daily to-dos, and big ideas.
                </p>

                {/* Paragraph 2 */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    isMockupDark ? 'text-[#A0B2C4]' : 'text-[#3B4D5D]'
                  }`}
                >
                  Everything you write is saved automatically to your device with{' '}
                  <strong className={isMockupDark ? 'text-[#E8EEF3]' : 'text-[#1C2B36]'}>
                    0ms local speed
                  </strong>
                  , works completely offline, and can be synced across all your devices with{' '}
                  <strong className={isMockupDark ? 'text-[#E8EEF3]' : 'text-[#1C2B36]'}>
                    Zero-Knowledge End-to-End Encryption
                  </strong>
                  .
                </p>

                {/* Subtitle with Sparkles & Hand-Drawn Arrow Callout */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <h3
                    className={`text-xs sm:text-sm font-bold ${
                      isMockupDark ? 'text-[#E8EEF3]' : 'text-[#1C2B36]'
                    }`}
                  >
                    ✨ A few things to try:
                  </h3>

                  {/* Sketched Hand-Drawn Arrow pointing to Checkboxes */}
                  <div className="inline-flex items-center space-x-1.5 select-none animate-in fade-in duration-300">
                    <svg
                      width="34"
                      height="20"
                      viewBox="0 0 34 20"
                      fill="none"
                      className={`transition-colors shrink-0 ${
                        isMockupDark ? 'text-[#7EAAD0]' : 'text-[#263950]'
                      }`}
                      aria-hidden="true"
                    >
                      <path
                        d="M8 2 C5 6 2 8 1 9 C4 11 8 14 11 17"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 9 C12 6 22 6 32 15"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span
                      className={`text-[11px] sm:text-xs font-semibold tracking-tight ${
                        isMockupDark ? 'text-[#7EAAD0]' : 'text-[#263950]'
                      }`}
                    >
                      Click to check off!
                    </span>
                  </div>
                </div>

                {/* Interactive Checklists (FIXED: shrink-0 and aspect-square prevent oval distortion) */}
                <div className="space-y-2.5 pt-0.5 select-none">
                  {checklist.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className="flex items-start space-x-2.5 text-xs sm:text-sm cursor-pointer group"
                    >
                      {/* Checkbox circle: STRICTLY GUARANTEED to be a perfect 16px circle */}
                      <div
                        className={`shrink-0 w-4 h-4 rounded-full aspect-square mt-0.5 flex items-center justify-center transition-all ${
                          item.checked
                            ? isMockupDark
                              ? 'bg-[#2E4B6E] text-white border border-[#2E4B6E]'
                              : 'bg-[#213A50] text-white border border-[#213A50]'
                            : isMockupDark
                              ? 'border border-[#4C627E] bg-transparent'
                              : 'border border-[#9AA9B5] bg-transparent'
                        }`}
                        style={{ minWidth: '16px', minHeight: '16px', width: '16px', height: '16px' }}
                      >
                        {item.checked && <Check size={10} strokeWidth={3} className="shrink-0" />}
                      </div>

                      {/* Checkbox label */}
                      <div
                        className={`leading-relaxed transition-colors flex-1 ${
                          item.checked
                            ? isMockupDark
                              ? 'line-through text-[#6E8092]'
                              : 'line-through text-[#8A9BA8]'
                            : isMockupDark
                              ? 'text-[#E8EEF3]'
                              : 'text-[#1C2B36]'
                        }`}
                      >
                        {item.hasKeycaps ? (
                          <span>
                            Create a fresh note with <strong>New Note</strong> (or press{' '}
                            <span
                              className={`px-1 py-0.5 rounded font-mono text-[10px] ${
                                isMockupDark
                                  ? 'bg-[#1E2E3E] text-[#7EAAD0]'
                                  : 'bg-[#E8F1F7] text-[#213A50]'
                              }`}
                            >
                              Cmd+N
                            </span>{' '}
                            /{' '}
                            <span
                              className={`px-1 py-0.5 rounded font-mono text-[10px] ${
                                isMockupDark
                                  ? 'bg-[#1E2E3E] text-[#7EAAD0]'
                                  : 'bg-[#E8F1F7] text-[#213A50]'
                              }`}
                            >
                              Ctrl+N
                            </span>
                            )
                          </span>
                        ) : (
                          item.text
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Blockquote with vertical line */}
                <div
                  className={`border-l-[3px] pl-3 sm:pl-3.5 my-4 sm:my-6 italic text-xs sm:text-sm leading-relaxed ${
                    isMockupDark
                      ? 'border-[#3F586E] text-[#8AA0B4]'
                      : 'border-[#213A50] text-[#4C627E]'
                  }`}
                >
                  &ldquo;Simplicity is the ultimate sophistication.&rdquo; &mdash; Make yourself at
                  home and happy writing! 💛
                </div>
              </div>

              {/* Bottom spacing */}
              <div className="pb-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
