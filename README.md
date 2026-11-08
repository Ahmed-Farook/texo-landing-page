# texō — Official Landing Page

The official marketing and download website for **texō** — the calm, distraction-free cross-platform note-taking app.

Built with **React 18**, **Vite**, **Tailwind CSS**, and **TypeScript**. Styled with warm parchment (`#F5F0E6`) and deep indigo (`#263950`).

---

## 🚀 Moving to a New GitHub Repository

You can easily initialize this folder as its own standalone repository:

```bash
# 1. Copy or move this folder anywhere you like (e.g. to your Desktop)
cd landing

# 2. Initialize a fresh Git repository
git init
git add .
git commit -m "feat: initial texō landing page"

# 3. Connect to your new GitHub repository
git remote add origin https://github.com/Ahmed-Farook/texo-landing.git
git branch -M main
git push -u origin main
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server (runs at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 1-Click Deployment (Vercel / Netlify)

1. Connect your new `texo-landing` repository to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Framework preset will automatically detect **Vite**.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Click **Deploy**.

---

## 📦 Features Highlighted

- **Hero with Auto-OS Detection**: Direct download button dynamically shows macOS (`.dmg`), Windows (`.exe`), or Android (`.apk`) based on user agent.
- **Interactive App Mockup**: Live 3-pane preview with clickable checklist items and real-time site theme synchronization.
- **Bento Grid**: 0ms local speed, end-to-end encryption, distraction-free typography, and trash recovery.
- **Download Hub**: Clean cards for macOS, Windows, Android, and Web with direct links to GitHub Releases.
- **Security Breakdown**: Client-side AES-GCM and zero-telemetry architecture.
- **FAQ Accordion**: Common questions, including macOS Gatekeeper and Windows SmartScreen security tips.

