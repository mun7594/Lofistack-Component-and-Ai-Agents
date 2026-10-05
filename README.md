# Muntasir Hasan - Portfolio & Components Gallery

A minimal, elegant portfolio showcasing UI components and AI agents built during the **LofiStack 90-Day Challenge**.

## 🎯 What's This?

This is a portfolio site where I showcase:
- **30 UI Components** — React components built with TypeScript and Tailwind CSS
- **12 AI Agents** — Automation solutions and AI-powered workflows
- **My Profile** — About me, social links, and contact info

Each component and agent has:
- **Live Demo** — See it working
- **Source Code** — Link to GitHub
- **Prompt Used** — The exact AI prompt that created it
- **Details** — Description and metadata

## 🚀 Features

- ✨ **Minimal Design** — Clean, white theme
- 📱 **Fully Responsive** — Works on mobile, tablet, desktop
- ⚡ **Lightning Fast** — Built with Next.js 14
- 🎨 **Styled with Tailwind CSS** — Modern CSS framework
- 🔗 **Easy Updates** — Just edit data files to add components/agents
- 📊 **Automatic Sorting** — Latest items shown first

## 📁 Project Structure

```
muntasir-portfolio/
├── app/                    # Next.js pages & routes
│   ├── components/         # Component pages
│   ├── agents/             # Agent pages
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── lib/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   ├── ComponentCard.tsx
│   │   └── AgentCard.tsx
│   └── data/               # Component & agent data
│       ├── components.ts   # All components
│       └── agents.ts       # All agents
├── public/
│   ├── profile.jpg         # Your profile picture
│   └── thumbnails/         # Component thumbnails
└── PORTFOLIO_GUIDE.md      # How to add items
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Repository:** GitHub (public)

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ installed
- Git configured
- GitHub account

### 2. Local Setup
```bash
# Clone the repo
git clone https://github.com/mun7594/muntasir-portfolio.git
cd muntasir-portfolio

# Install dependencies
npm install

# Add your profile picture
# Place your image as: public/profile.jpg

# Run locally
npm run dev

# Open http://localhost:3000
```

### 3. Deploy to Vercel
See `SETUP.md` for detailed deployment instructions.

## 📝 How to Use

### Add a Component

Edit `lib/data/components.ts` and add:

```typescript
{
  id: "6",
  slug: "your-component",
  name: "Your Component Name",
  type: "button",
  description: "Brief description",
  longDescription: "Longer description...",
  createdDate: "2024-10-20",
  prompt: "Your AI prompt here...",
  codeLink: "https://github.com/...",
}
```

### Add an Agent

Edit `lib/data/agents.ts` and add:

```typescript
{
  id: "6",
  slug: "your-agent",
  name: "Your Agent Name",
  category: "automation",
  description: "Brief description",
  createdDate: "2024-10-20",
  task: "What it automates",
  prompt: "Your workflow...",
  result: "What it produced",
  toolsUsed: ["Tool1", "Tool2"],
}
```

Commit and push — Vercel auto-deploys! ✨

## 📚 Documentation

- **`SETUP.md`** — Deployment & initial setup
- **`PORTFOLIO_GUIDE.md`** — Detailed guide for adding items
- **`WEEKLY_WORKFLOW.md`** — Quick reference for weekly updates

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change:
- Primary color (currently `gray-900`)
- Accent colors (currently `blue` for agents)

### Content
- **Hero section:** Edit `app/page.tsx`
- **Nav links:** Edit `lib/components/Navbar.tsx`
- **Footer:** Edit `lib/components/Footer.tsx`

### Images
Place thumbnails in `public/thumbnails/` with names matching your slugs.

## 📊 Gallery Pages

- **Components Page:** `yoursite.com/components` — Shows all components
- **Component Detail:** `yoursite.com/components/{slug}` — Individual component
- **Agents Page:** `yoursite.com/agents` — Shows all agents
- **Agent Detail:** `yoursite.com/agents/{slug}` — Individual agent

## ✅ 90-Day Challenge Progress

This portfolio tracks:
- **Components:** 2 per week × 13 weeks = **26 components** (target 30)
- **Agents:** 1 per week × 13 weeks = **13 agents** (target 12)

Each week, the latest items appear on the homepage automatically.

## 🔗 Links

- **Live Site:** [Deployed URL on Vercel]
- **GitHub:** https://github.com/mun7594/muntasir-portfolio
- **Author:** Muntasir Hasan
- **Email:** contact.muntasir@gmail.com

## 📞 Contact

- **Email:** contact.muntasir@gmail.com
- **GitHub:** https://github.com/mun7594
- **Facebook:** https://www.facebook.com/muntasir.tamim
- **Instagram:** https://www.instagram.com/muntasir__hasann/

## 📄 License

This portfolio is personal work. Feel free to use it as inspiration for your own portfolio!

---

**Built with ❤️ during the LofiStack 90-Day Challenge**

Want to learn more? Check out the docs in this repo:
- Start here: `SETUP.md`
- Learn the workflow: `WEEKLY_WORKFLOW.md`
- Detailed guide: `PORTFOLIO_GUIDE.md`
