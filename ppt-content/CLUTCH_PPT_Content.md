# ⚡ CLUTCH — Complete PPT Content (Slide by Slide)

> **Project:** CLUTCH — Speed. Focus. Memory. One Platform.
> **Tagline:** *Speed. Focus. Memory. One platform.*
> **Team:** Mathely — 2510990211 | Keerat — 2510990189 | Chaitali — 2510990899
> **Submitted To:** Dr. Niket | Chitkara University
> **Total Slides:** 12

---

## 📑 SLIDE 1 — Title / Cover Slide

### Layout: Bold dark background, center-aligned

| Field | Content |
|---|---|
| **Main Title** | **CLUTCH** |
| **Subtitle** | *Speed. Focus. Memory. One platform.* |
| **Submitted To** | Dr. Niket |
| **Subject** | Front-End Engineering (FEE) |
| **Team Members** | Mathely — 2510990211 |
| | Keerat — 2510990189 |
| | Chaitali — 2510990899 |
| **University** | Chitkara University |
| **Logo** | Chitkara University logo (top-right corner) |

**Design Notes:**
- Background: Very dark, near-black
- Title: Massive, bold, uppercase (glitch/monospace font)
- Red header bar + red footer bar (matching reference PPT)
- Constellation dot animation aesthetic

---

## 📑 SLIDE 2 — Introduction

**Heading:** What is CLUTCH?

> CLUTCH is a full-stack cognitive performance platform that challenges users with a suite of brain-training mini-games designed to sharpen **speed**, **focus**, and **memory** — all in one place.

**Key Points:**
- 🧠 A gamified web platform for cognitive skill training
- Built with **React + Vite** as a Single Page Application
- Offers multiple mini-games, each targeting a different skill
- Persistent user dashboard with stats tracking
- Clean, dark, gaming-grade aesthetic UI
- Deployed on **Vercel** for instant global access

> *"Don't just browse the web. Train your brain on it."*

---

## 📑 SLIDE 3 — Problem Statement

**Left Side — Pain Points:**
- Spend hours on social media without any mental benefit
- Have no easy platform to track cognitive performance
- Can't measure improvements in speed, focus, or memory
- Find brain-training apps boring, ugly, and hard to use

**Right Side — Who Needs This?**
- 🎮 Gamers wanting sharper reaction time
- 📚 Students needing better focus and memory
- 💼 Professionals wanting to stay mentally sharp
- 🏆 Competitive types who want to rank on leaderboards

> *"CLUTCH turns idle screen time into focused brain training — competitive, measurable, and actually fun."*

---

## 📑 SLIDE 4 — Tech Stack Used

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React.js + Vite | UI framework and SPA routing |
| **Styling** | CSS + App.css | Custom dark-themed game UI |
| **Routing** | React Router DOM | Page navigation |
| **Icons** | Lucide React | UI icons |
| **Backend** | Node.js | Server-side logic |
| **Database** | Supabase | User data, scores, leaderboard storage |
| **Deployment** | Vercel | Frontend hosting + CI/CD |

---

## 📑 SLIDE 5 — Landing Page

**What's on the Landing Page:**
1. 🌌 **Constellation Grid Background** — Animated interactive dot grid, mouse-reactive
2. ⚡ **CLUTCH Title** — Large bold glitch-effect text with shadows and flicker animation
3. 🔴 **GET STARTED Button** — Navigates to /dashboard
4. 🎨 **Dark Aesthetic** — Full-screen dark background
5. **No Clutter** — Ultra-minimal, instant call to action

> *"From the moment you land — you know it's different."*

---

## 📑 SLIDE 6 — Dashboard

### Left Sidebar:
| Element | Detail |
|---|---|
| **Nav: DASHBOARD** | Active state |
| **Nav: MEMORY TYPING** | ⌨️ Launches typing game |
| **Nav: CPS KING** | 🖱️ Click speed game |
| **Nav: REACTION TIME** | ⏱️ Reaction game |
| **Nav: LEADERBOARDS** | 🏆 Global rankings |

### Stats Card:
| Stat | Value |
|---|---|
| PEAK SPEED | **148 WPM** |
| CLICK POWER | **14.2 CPS** |
| GLOBAL RANK | **442nd** |

### Active Modules Grid:
| Module | Status |
|---|---|
| **MEMORY TYPING** | ✅ LAUNCH |
| **CPS KING** | 🔒 COMING SOON |
| **COLOUR CLASH** | ✅ LAUNCH |
| **NUMBER RUSH** | 🔒 COMING SOON |
| **FLASH RECALL** | 🔒 COMING SOON |
| **DON'T CLICK** | 🔒 COMING SOON |
| **QUICK DRAW** | 🔒 COMING SOON |
| **REFLEX SWITCH** | 🔒 COMING SOON |

---

## 📑 SLIDE 7 — Key Features

| # | Feature | Description |
|---|---|---|
| 1 | ⚡ **Glitch Landing Title** | Animated glitch-effect CLUTCH title |
| 2 | 🌌 **Interactive Background** | Mouse-reactive constellation dot grid |
| 3 | 🗂️ **Unified Dashboard** | One command center for all modules |
| 4 | ⌨️ **Memory Typing** | Read → memorize → type |
| 5 | 🎨 **Colour Clash** | Stroop effect game |
| 6 | 🏆 **Stats Tracking** | WPM, CPS, Global Rank |
| 7 | 🔢 **8 Planned Modules** | Full roadmap of cognitive games |
| 8 | 🚀 **Deployed on Vercel** | Instantly accessible globally |

---

## 📑 SLIDE 8 — User Flow & System Architecture

**Main User Flow:**
```
[User visits site] → [Landing Page /] → [GET STARTED]
→ [Dashboard /dashboard] → [Memory Typing /memory-typing]
                         → [Colour Clash /color-clash]
```

**Memory Typing Flow:**
```
LAUNCH → SETUP (15s/30s/60s) → MEMORIZE (10s) → TYPING → RESULT
```

**Colour Clash Flow:**
```
START → 10 questions → Color mismatch → Timer → Score + Streak → Result
```

---

## 📑 SLIDE 9 — Future Scope

| Phase | Feature | Description |
|---|---|---|
| **v1.1** | 🖱️ CPS King | Live click-speed test |
| **v1.2** | ⏱️ Reaction Time | Visual reaction speed |
| **v1.3** | 🔢 Number Rush | Number memory challenges |
| **v2.0** | 🔐 Full Auth | Real user accounts with Supabase |
| **v2.0** | 🏆 Live Leaderboards | Real-time global rankings |
| **v2.1** | 📊 Analytics | Charts of improvement over time |
| **v2.2** | 🤝 Multiplayer | Race friends in real-time |
| **v3.0** | 🧠 AI Difficulty | AI adjusts based on performance |
| **v3.0** | 📱 Mobile App | Native iOS/Android version |

---

## 📑 SLIDE 10 — Conclusion

**What We Achieved:**
- ✅ Built a fully functional multi-page React SPA
- ✅ Designed and implemented **2 complete playable games** (Memory Typing + Colour Clash)
- ✅ Created a live **dashboard** with stats, module grid, sidebar navigation
- ✅ Built an immersive UI with glitch effects, constellation animation, dark aesthetic
- ✅ Deployed production-ready on Vercel with clean routing

> *"Speed. Focus. Memory. One Platform."*

`React` · `Vite` · `React Router` · `CSS` · `Lucide Icons` · `Node.js` · `Supabase` · `Vercel`

---

## 📑 SLIDE 11 — QR Code / Live Demo

- 🌐 **Live Site:** `[your Vercel URL]`
- 💻 **GitHub:** `[your GitHub repo URL]`
- QR Code → Live Vercel link

> *"Thank you for your time. We are open to questions!"*

---

## 📑 SLIDE 12 — Thank You

> **Thank You — Questions & Answers**

> Mathely — 2510990211 | Keerat — 2510990189 | Chaitali — 2510990899

> Dr. Niket | Front-End Engineering | Chitkara University

> *"CLUTCH — Speed. Focus. Memory. One Platform."*

---

## 🎨 Design Guidelines

| Element | Recommendation |
|---|---|
| **Background** | Deep black / dark grey |
| **Header Bar** | Bright red (#d0190f) |
| **Primary Text** | White |
| **Accent** | Orange (#ff8c00) for stats |
| **Font** | Bold uppercase sans-serif (Inter / Bebas Neue) |
| **Cards** | Dark rounded rectangles, subtle borders |

---

## 📋 Quick Reference — All 12 Slides

| Slide | Title | Core Content |
|---|---|---|
| 1 | **Title** | CLUTCH, tagline, team names, Dr. Niket |
| 2 | **Introduction** | What is CLUTCH, 6 bullets |
| 3 | **Problem Statement** | Screen time problem, who needs it |
| 4 | **Tech Stack** | React, Vite, Node.js, Supabase, Vercel |
| 5 | **Landing Page** | Glitch title, constellation bg, GET STARTED |
| 6 | **Dashboard** | Sidebar nav, stats card, 8 modules grid |
| 7 | **Key Features** | 8 feature cards |
| 8 | **User Flow** | Complete flow + architecture diagrams |
| 9 | **Future Scope** | Roadmap v1.1 → v3.0 |
| 10 | **Conclusion** | 5 achievements, closing tagline |
| 11 | **QR Code** | Live Vercel link, QR, GitHub |
| 12 | **Thank You** | Team credits, Q&A |
