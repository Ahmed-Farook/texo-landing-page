import React, { useState } from 'react';
import {
  Folder,
  FolderPlus,
  Trash2,
  Pin,
  Search,
  Check,
  PanelLeft,
  Sun,
  Moon,
  Cloud,
  SquarePen,
  Heading1,
  Heading2,
  Heading3,
  Bold,
  Italic,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  ListTodo,
  Quote,
  LayoutGrid,
} from 'lucide-react';

interface NoteItem {
  id: string;
  title: string;
  preview: string;
  date: string;
  isPinned?: boolean;
  folderId: string;
}

export const AppMockup: React.FC = () => {
  const [mockupDark, setMockupDark] = useState(false);
  const [activeFolder, setActiveFolder] = useState<string>('default');
  const [activeNoteId, setActiveNoteId] = useState<string>('note-welcome');
  const [checklist, setChecklist] = useState([
    { id: '1', text: 'Check off items on your to-do lists', checked: true },
    {
      id: '2',
      text: 'Create a fresh note with New Note (or press Cmd+N / Ctrl+N)',
      checked: false,
    },
    { id: '3', text: 'Organize your ideas into custom folders in the sidebar', checked: false },
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

  const completedCount = checklist.filter((item) => item.checked).length;

  const notes: NoteItem[] = [
    {
      id: 'note-welcome',
      title: 'Welcome to notes-app 👋',
      preview:
        "We're so glad you're here! This is your clean, distraction-free space for capturing quick thoughts, daily to-dos, and big ideas...",
      date: 'Today',
      isPinned: true,
      folderId: 'default',
    },
    {
      id: 'note-kyoto',
      title: 'Kyoto Aesthetic Guide',
      preview:
        'Parchment #F5F0E6 meets deep Kyoto indigo #263950. Tactile paper warmth with zero retinal glare for long writing sessions...',
      date: 'Yesterday',
      isPinned: false,
      folderId: 'default',
    },
    {
      id: 'note-roadmap',
      title: 'Architecture & E2EE Sync',
      preview:
        'PBKDF2 SHA-256 key derivation and AES-GCM client encryption. 0ms local speed on SQLite with automated cloud backup...',
      date: 'Nov 5',
      isPinned: false,
      folderId: 'default',
    },
  ];

  const pinnedNotes = notes.filter((n) => n.isPinned);
  const regularNotes = notes.filter((n) => !n.isPinned);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 sm:pb-32">
      <div className="relative">
        {/* Floating Mockup Container */}
        <div
          className={`rounded-2xl sm:rounded-3xl border shadow-2xl overflow-hidden transition-colors duration-300 ${
            mockupDark
              ? 'bg-[#131B24] border-[#223344] text-[#E8EEF3]'
              : 'bg-[#FAF6EF] border-[#DFD3C0] text-[#1C2B36]'
          }`}
        >
          {/* macOS App Header / Titlebar */}
          <div
            className={`h-12 px-4 border-b flex items-center justify-between transition-colors ${
              mockupDark
                ? 'bg-[#101720] border-[#223344]'
                : 'bg-[#EFE7D8] border-[#DFD3C0]'
            }`}
          >
            {/* Left Controls: Traffic lights + Pane actions */}
            <div className="flex items-center space-x-3">
              {/* Traffic Lights */}
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>

              <div className="hidden sm:flex items-center space-x-1 pl-2 border-l border-[#DFD3C0]/70 dark:border-[#223344]">
                <button
                  type="button"
                  title="Toggle sidebar"
                  className={`p-1.5 rounded-md text-xs transition-colors ${
                    mockupDark
                      ? 'text-[#8AA0B4] hover:bg-[#1C2733]'
                      : 'text-[#4C627E] hover:bg-[#E5DCCB]'
                  }`}
                >
                  <PanelLeft size={15} />
                </button>
                <button
                  type="button"
                  title="Gallery view"
                  className={`p-1.5 rounded-md text-xs transition-colors ${
                    mockupDark
                      ? 'text-[#8AA0B4] hover:bg-[#1C2733]'
                      : 'text-[#4C627E] hover:bg-[#E5DCCB]'
                  }`}
                >
                  <LayoutGrid size={15} />
                </button>
              </div>
            </div>

            {/* Center Brand Title & Cloud Status */}
            <div className="flex items-center space-x-2.5 text-xs font-semibold tracking-tight">
              <div className="relative w-4 h-4 shrink-0">
                <img
                  src="/texo-logo.png"
                  alt="texō"
                  className="dark:hidden w-full h-full object-contain"
                />
                <img
                  src="/texo-logo-light.png"
                  alt="texō"
                  className="hidden dark:block w-full h-full object-contain"
                />
              </div>
              <span className="text-[#1C2B36] dark:text-[#E8EEF3]">texō — Notes</span>
              <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                <Cloud size={11} className="text-emerald-600 dark:text-emerald-400" />
                <span className="hidden sm:inline">Synced</span>
              </span>
            </div>

            {/* Right Controls: Theme Toggle & New Note CTA */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setMockupDark(!mockupDark)}
                title="Toggle mockup Kyoto theme"
                className={`p-1.5 rounded-lg text-xs flex items-center space-x-1.5 px-2 font-medium transition-colors ${
                  mockupDark
                    ? 'bg-[#1C2733] text-[#7EAAD0] hover:bg-[#25394C]'
                    : 'bg-[#FAF6EF] text-[#263950] hover:bg-[#E5DCCB] border border-[#DFD3C0]'
                }`}
              >
                {mockupDark ? (
                  <Sun size={13} className="text-amber-400" />
                ) : (
                  <Moon size={13} className="text-[#263950]" />
                )}
                <span className="text-[11px] hidden md:inline">
                  {mockupDark ? 'Kyoto Dark' : 'Kyoto Light'}
                </span>
              </button>

              <button
                type="button"
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-xs transition-all active:scale-95 ${
                  mockupDark
                    ? 'bg-[#2C4A68] hover:bg-[#35587C]'
                    : 'bg-[#D4A359] hover:bg-[#C29348]'
                }`}
              >
                <SquarePen size={13} />
                <span className="hidden sm:inline">New Note</span>
              </button>
            </div>
          </div>

          {/* Three-pane App Body */}
          <div className="grid grid-cols-12 min-h-[480px] sm:min-h-[540px]">
            {/* Left Sidebar (Pane 1: Folders) */}
            <div
              className={`hidden md:flex md:col-span-3 flex-col justify-between p-3 border-r transition-colors text-xs select-none ${
                mockupDark
                  ? 'bg-[#101720] border-[#223344]'
                  : 'bg-[#EFE7D8] border-[#DFD3C0]'
              }`}
            >
              <div className="space-y-4">
                {/* Brand header */}
                <div className="px-2 pt-0.5 pb-2 flex items-center space-x-2 border-b border-[#DFD3C0]/60 dark:border-[#223344]/60">
                  <div className="w-4 h-4 shrink-0">
                    <img
                      src="/texo-logo.png"
                      alt="texō"
                      className="dark:hidden w-full h-full object-contain"
                    />
                    <img
                      src="/texo-logo-light.png"
                      alt="texō"
                      className="hidden dark:block w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-semibold text-sm tracking-tight text-[#1C2B36] dark:text-[#E8EEF3]">
                    texō
                  </span>
                </div>

                {/* Section: Notes */}
                <div>
                  <div className="px-2 pb-1 text-[11px] font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">
                    Notes
                  </div>
                  <div className="space-y-0.5">
                    <button
                      onClick={() => setActiveFolder('default')}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                        activeFolder === 'default'
                          ? 'bg-[#D4A359] dark:bg-[#253D56] text-white font-medium shadow-xs'
                          : 'text-[#1C2B36] dark:text-[#CBD8E3] hover:bg-[#E5DCCB] dark:hover:bg-[#1A2530]'
                      }`}
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <Folder
                          size={15}
                          className={
                            activeFolder === 'default'
                              ? 'text-white'
                              : 'text-[#395060] dark:text-[#7EAAD0]'
                          }
                        />
                        <span className="truncate">Notes</span>
                      </div>
                      <span
                        className={`text-[11px] font-mono ${
                          activeFolder === 'default'
                            ? 'text-white/80'
                            : 'text-[#8A9BA8] dark:text-[#6E8092]'
                        }`}
                      >
                        3
                      </span>
                    </button>
                  </div>
                </div>

                {/* Section: Folders */}
                <div>
                  <div className="flex items-center justify-between px-2 pb-1">
                    <span className="text-[11px] font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">
                      Folders
                    </span>
                    <button
                      type="button"
                      title="Add folder"
                      className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 p-0.5 rounded"
                    >
                      <FolderPlus size={13} />
                    </button>
                  </div>
                  <div className="space-y-0.5">
                    <button
                      onClick={() => setActiveFolder('work')}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                        activeFolder === 'work'
                          ? 'bg-[#D4A359] dark:bg-[#253D56] text-white font-medium shadow-xs'
                          : 'text-[#1C2B36] dark:text-[#CBD8E3] hover:bg-[#E5DCCB] dark:hover:bg-[#1A2530]'
                      }`}
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <Folder
                          size={15}
                          className={
                            activeFolder === 'work'
                              ? 'text-white'
                              : 'text-[#395060] dark:text-[#7EAAD0]'
                          }
                        />
                        <span className="truncate">Work &amp; Projects</span>
                      </div>
                      <span
                        className={`text-[11px] font-mono ${
                          activeFolder === 'work'
                            ? 'text-white/80'
                            : 'text-[#8A9BA8] dark:text-[#6E8092]'
                        }`}
                      >
                        2
                      </span>
                    </button>

                    <button
                      onClick={() => setActiveFolder('personal')}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                        activeFolder === 'personal'
                          ? 'bg-[#D4A359] dark:bg-[#253D56] text-white font-medium shadow-xs'
                          : 'text-[#1C2B36] dark:text-[#CBD8E3] hover:bg-[#E5DCCB] dark:hover:bg-[#1A2530]'
                      }`}
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <Folder
                          size={15}
                          className={
                            activeFolder === 'personal'
                              ? 'text-white'
                              : 'text-[#395060] dark:text-[#7EAAD0]'
                          }
                        />
                        <span className="truncate">Personal &amp; Ideas</span>
                      </div>
                      <span
                        className={`text-[11px] font-mono ${
                          activeFolder === 'personal'
                            ? 'text-white/80'
                            : 'text-[#8A9BA8] dark:text-[#6E8092]'
                        }`}
                      >
                        1
                      </span>
                    </button>
                  </div>
                </div>

                {/* Section: Trash */}
                <div className="pt-2 border-t border-[#DFD3C0]/60 dark:border-[#223344]/60">
                  <button
                    onClick={() => setActiveFolder('trash')}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                      activeFolder === 'trash'
                        ? 'bg-red-500/15 text-red-600 dark:text-red-400 font-medium'
                        : 'text-[#6E7E8E] dark:text-[#8AA0B4] hover:bg-[#E5DCCB] dark:hover:bg-[#1A2530]'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Trash2 size={14} className="text-red-500" />
                      <span>Recently Deleted</span>
                    </div>
                    <span className="text-[11px] font-mono opacity-60">0</span>
                  </button>
                </div>
              </div>

              {/* Version & Vault footer */}
              <div
                className={`p-2.5 rounded-xl text-[11px] flex items-center justify-between border ${
                  mockupDark
                    ? 'bg-[#131B24] border-[#223344] text-[#8AA0B4]'
                    : 'bg-[#FAF6EF] border-[#DFD3C0] text-[#6E7E8E]'
                }`}
              >
                <span>Offline Vault</span>
                <span className="font-mono text-[10px] font-semibold text-[#263950] dark:text-[#7EAAD0]">
                  v0.2.21
                </span>
              </div>
            </div>

            {/* Middle Pane (Pane 2: Notes List) */}
            <div
              className={`col-span-12 sm:col-span-5 md:col-span-4 border-r flex flex-col transition-colors select-none ${
                mockupDark
                  ? 'bg-[#16202A] border-[#223344]'
                  : 'bg-[#F6EFE4] border-[#DFD3C0]'
              }`}
            >
              {/* Header: Note count & Select */}
              <div
                className={`px-3.5 py-2 flex items-center justify-between border-b backdrop-blur-md ${
                  mockupDark
                    ? 'bg-[#131B24]/90 border-[#223344]'
                    : 'bg-[#EFE7D8]/90 border-[#DFD3C0]'
                }`}
              >
                <span className="text-xs font-medium text-[#6E7E8E] dark:text-[#8AA0B4]">
                  3 notes
                </span>
                <button
                  type="button"
                  className="text-xs font-semibold text-[#D4A359] dark:text-[#7EAAD0] hover:underline"
                >
                  Select
                </button>
              </div>

              {/* Search Bar */}
              <div
                className={`p-2.5 border-b ${
                  mockupDark ? 'border-[#223344]' : 'border-[#DFD3C0]'
                }`}
              >
                <div
                  className={`relative flex items-center w-full px-2.5 py-1.5 rounded-lg border text-xs ${
                    mockupDark
                      ? 'bg-[#1C2733] border-[#223344] text-[#8AA0B4]'
                      : 'bg-[#EFE7D8]/80 border-[#DFD3C0]/70 text-[#6E7E8E]'
                  }`}
                >
                  <Search size={13} className="text-neutral-400 mr-2 shrink-0" />
                  <span className="text-neutral-400">Search all notes...</span>
                </div>
              </div>

              {/* Notes List with Pinned and Regular sections */}
              <div className="p-2 space-y-3 overflow-y-auto">
                {/* Pinned section */}
                {pinnedNotes.length > 0 && (
                  <div className="space-y-1">
                    <div className="px-2 text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                      Pinned
                    </div>
                    {pinnedNotes.map((note) => {
                      const isSelected = activeNoteId === note.id;
                      return (
                        <div
                          key={note.id}
                          onClick={() => setActiveNoteId(note.id)}
                          className={`group relative p-3 rounded-xl border transition-all cursor-pointer shadow-xs ${
                            isSelected
                              ? 'border-2 border-[#D4A359] dark:border-[#7EAAD0] bg-[#FAF6EF] dark:bg-[#203448]'
                              : 'border-[#DFD3C0] dark:border-[#223344] bg-[#FAF6EF]/70 dark:bg-[#1C2733] hover:border-[#C2B5A1]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-xs text-neutral-900 dark:text-neutral-100 truncate pr-2">
                              {note.title}
                            </h4>
                            <Pin
                              size={12}
                              className="text-[#D4A359] fill-[#D4A359] dark:text-[#7EAAD0] dark:fill-[#7EAAD0] shrink-0"
                            />
                          </div>
                          <p className="text-[11px] text-neutral-500 dark:text-[#8AA0B4] line-clamp-2 leading-relaxed">
                            {note.preview}
                          </p>
                          <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#DFD3C0]/50 dark:border-[#223344] text-[10px] text-[#8A9BA8] dark:text-[#6E8092]">
                            <span>{note.date}</span>
                            <span className="font-mono">0ms autosave</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Notes section */}
                {regularNotes.length > 0 && (
                  <div className="space-y-1">
                    <div className="px-2 text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                      Notes
                    </div>
                    <div className="space-y-1.5">
                      {regularNotes.map((note) => {
                        const isSelected = activeNoteId === note.id;
                        return (
                          <div
                            key={note.id}
                            onClick={() => setActiveNoteId(note.id)}
                            className={`group relative p-3 rounded-xl border transition-all cursor-pointer ${
                              isSelected
                                ? 'border-2 border-[#D4A359] dark:border-[#7EAAD0] bg-[#FAF6EF] dark:bg-[#203448] shadow-xs'
                                : 'border-[#DFD3C0] dark:border-[#223344] bg-[#FAF6EF]/60 dark:bg-[#1C2733]/60 hover:bg-[#FAF6EF] dark:hover:bg-[#1C2733]'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-xs text-neutral-900 dark:text-neutral-100 truncate pr-2">
                                {note.title}
                              </h4>
                            </div>
                            <p className="text-[11px] text-neutral-500 dark:text-[#8AA0B4] line-clamp-2 leading-relaxed">
                              {note.preview}
                            </p>
                            <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#DFD3C0]/50 dark:border-[#223344] text-[10px] text-[#8A9BA8] dark:text-[#6E8092]">
                              <span>{note.date}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Pane (Pane 3: Live Rich Text Editor) */}
            <div
              className={`col-span-12 sm:col-span-7 md:col-span-5 flex flex-col justify-between transition-colors overflow-hidden ${
                mockupDark ? 'bg-[#131B24]' : 'bg-[#FAF6EF]'
              }`}
            >
              {/* Sticky Formatting Toolbar */}
              <div
                className={`px-3 py-1.5 border-b flex items-center space-x-1 overflow-x-auto text-xs select-none sticky top-0 z-10 backdrop-blur-md ${
                  mockupDark
                    ? 'bg-[#151E28]/95 border-[#223344]'
                    : 'bg-[#F2ECE0]/95 border-[#DFD3C0]'
                }`}
              >
                <button
                  type="button"
                  title="Title (H1)"
                  className="p-1 rounded bg-[#E5DCCB] dark:bg-[#203448] text-[#213A50] dark:text-[#7EAAD0]"
                >
                  <Heading1 size={14} />
                </button>
                <button
                  type="button"
                  title="Heading (H2)"
                  className="p-1 rounded text-[#5A6D7E] dark:text-[#8AA0B4] hover:bg-[#EBE2D3] dark:hover:bg-[#1C2733]"
                >
                  <Heading2 size={14} />
                </button>
                <button
                  type="button"
                  title="Subheading (H3)"
                  className="p-1 rounded text-[#5A6D7E] dark:text-[#8AA0B4] hover:bg-[#EBE2D3] dark:hover:bg-[#1C2733]"
                >
                  <Heading3 size={14} />
                </button>

                <div className="h-3.5 w-px bg-[#DFD3C0] dark:bg-[#223344] mx-1" />

                <button
                  type="button"
                  title="Bold"
                  className="p-1 rounded text-[#5A6D7E] dark:text-[#8AA0B4] hover:bg-[#EBE2D3] dark:hover:bg-[#1C2733]"
                >
                  <Bold size={14} />
                </button>
                <button
                  type="button"
                  title="Italic"
                  className="p-1 rounded text-[#5A6D7E] dark:text-[#8AA0B4] hover:bg-[#EBE2D3] dark:hover:bg-[#1C2733]"
                >
                  <Italic size={14} />
                </button>
                <button
                  type="button"
                  title="Strikethrough"
                  className="p-1 rounded text-[#5A6D7E] dark:text-[#8AA0B4] hover:bg-[#EBE2D3] dark:hover:bg-[#1C2733]"
                >
                  <Strikethrough size={14} />
                </button>
                <button
                  type="button"
                  title="Code"
                  className="p-1 rounded text-[#5A6D7E] dark:text-[#8AA0B4] hover:bg-[#EBE2D3] dark:hover:bg-[#1C2733]"
                >
                  <Code size={14} />
                </button>

                <div className="h-3.5 w-px bg-[#DFD3C0] dark:bg-[#223344] mx-1" />

                <button
                  type="button"
                  title="Bullet list"
                  className="p-1 rounded text-[#5A6D7E] dark:text-[#8AA0B4] hover:bg-[#EBE2D3] dark:hover:bg-[#1C2733]"
                >
                  <List size={14} />
                </button>
                <button
                  type="button"
                  title="Numbered list"
                  className="p-1 rounded text-[#5A6D7E] dark:text-[#8AA0B4] hover:bg-[#EBE2D3] dark:hover:bg-[#1C2733]"
                >
                  <ListOrdered size={14} />
                </button>
                <button
                  type="button"
                  title="Task list (active)"
                  className="p-1 rounded bg-[#E5DCCB] dark:bg-[#203448] text-[#213A50] dark:text-[#7EAAD0]"
                >
                  <ListTodo size={14} />
                </button>
                <button
                  type="button"
                  title="Quote"
                  className="p-1 rounded text-[#5A6D7E] dark:text-[#8AA0B4] hover:bg-[#EBE2D3] dark:hover:bg-[#1C2733]"
                >
                  <Quote size={14} />
                </button>
              </div>

              {/* Note Content Area */}
              <div className="p-5 sm:p-7 space-y-4 overflow-y-auto">
                {/* Date header */}
                <div className="text-center pb-1">
                  <span className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500">
                    Saturday, November 7, 2026 at 2:30 PM
                  </span>
                </div>

                {activeNoteId === 'note-welcome' && (
                  <>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C2B36] dark:text-[#E8EEF3]">
                      Welcome to notes-app 👋
                    </h1>

                    <p className="text-xs sm:text-sm leading-relaxed text-[#4C627E] dark:text-[#8AA0B4]">
                      We&apos;re so glad you&apos;re here! This is your clean, distraction-free space
                      for capturing quick thoughts, daily to-dos, and big ideas.
                    </p>

                    <p className="text-xs sm:text-sm leading-relaxed text-[#4C627E] dark:text-[#8AA0B4]">
                      Everything you write is saved automatically to your device with{' '}
                      <strong className="text-[#1C2B36] dark:text-[#E8EEF3]">0ms local speed</strong>
                      , works completely offline, and can be synced across all your devices with{' '}
                      <strong className="text-[#1C2B36] dark:text-[#E8EEF3]">
                        Zero-Knowledge End-to-End Encryption
                      </strong>
                      .
                    </p>

                    <h3 className="text-sm font-bold text-[#1C2B36] dark:text-[#E8EEF3] pt-1">
                      ✨ A few things to try:
                    </h3>

                    {/* Interactive Checklists */}
                    <div className="space-y-2 pt-0.5">
                      {checklist.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => toggleCheck(item.id)}
                          className="flex items-start space-x-2.5 text-xs sm:text-sm cursor-pointer select-none group"
                        >
                          <div
                            className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center border transition-all ${
                              item.checked
                                ? 'bg-[#D4A359] border-[#D4A359] dark:bg-[#7EAAD0] dark:border-[#7EAAD0] text-white dark:text-[#131B24]'
                                : 'border-[#8A9BA8] group-hover:border-[#D4A359] dark:group-hover:border-[#7EAAD0]'
                            }`}
                          >
                            {item.checked && <Check size={11} strokeWidth={3} />}
                          </div>
                          <span
                            className={`transition-colors leading-relaxed ${
                              item.checked
                                ? 'line-through text-[#8A9BA8] dark:text-[#6E8092]'
                                : 'text-[#1C2B36] dark:text-[#E8EEF3] font-medium'
                            }`}
                          >
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Blockquote */}
                    <blockquote className="mt-4 p-3 rounded-xl border-l-4 border-[#D4A359] dark:border-[#7EAAD0] bg-[#EFE7D8]/50 dark:bg-[#16202A]/80 text-xs text-[#4C627E] dark:text-[#8AA0B4] italic">
                      “Simplicity is the ultimate sophistication.” — Make yourself at home and happy
                      writing! 💛
                    </blockquote>
                  </>
                )}

                {activeNoteId === 'note-kyoto' && (
                  <>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C2B36] dark:text-[#E8EEF3]">
                      Kyoto Aesthetic Guide
                    </h1>

                    <p className="text-xs sm:text-sm leading-relaxed text-[#4C627E] dark:text-[#8AA0B4]">
                      Traditional stark white displays cause persistent ocular strain. The Kyoto
                      theme balances warm, handmade Japanese paper tones (<code className="font-mono text-xs">#F5F0E6</code>) with rich temple indigo (<code className="font-mono text-xs">#263950</code>).
                    </p>

                    <h3 className="text-sm font-bold text-[#1C2B36] dark:text-[#E8EEF3] pt-1">
                      Designed for Deep Thought
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed text-[#4C627E] dark:text-[#8AA0B4]">
                      Every element from the line spacing to subtle contrast curves prioritizes
                      calm immersion so your words take center stage.
                    </p>
                  </>
                )}

                {activeNoteId === 'note-roadmap' && (
                  <>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C2B36] dark:text-[#E8EEF3]">
                      Architecture &amp; E2EE Sync
                    </h1>

                    <p className="text-xs sm:text-sm leading-relaxed text-[#4C627E] dark:text-[#8AA0B4]">
                      Local-first SQLite storage guarantees keystrokes persist instantaneously
                      without web network latency.
                    </p>

                    <p className="text-xs sm:text-sm leading-relaxed text-[#4C627E] dark:text-[#8AA0B4]">
                      Encryption keys are derived client-side via PBKDF2 SHA-256 with 100,000
                      iterations. Cloud payloads are AES-GCM encrypted before upload.
                    </p>
                  </>
                )}
              </div>

              {/* Status Bar */}
              <div
                className={`px-5 py-2.5 border-t flex items-center justify-between text-[11px] font-mono ${
                  mockupDark
                    ? 'border-[#223344] bg-[#101720]/70 text-[#8AA0B4]'
                    : 'border-[#DFD3C0] bg-[#EFE7D8]/60 text-[#6E7E8E]'
                }`}
              >
                <div className="flex items-center space-x-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>0ms local speed</span>
                </div>
                <span>{completedCount} of 4 tasks complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Caption below mockup */}
        <p className="text-center text-xs text-[#6E7E8E] dark:text-[#8AA0B4] mt-4 font-mono">
          Interactive live mockup • Click notes, folders, or checklist items to experience the real
          app
        </p>
      </div>
    </section>
  );
};
