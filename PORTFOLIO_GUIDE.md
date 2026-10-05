# Portfolio Update Guide

This is a guide for updating your portfolio site each week when you create new components and agents.

## 📁 File Structure

```
src/
├── app/
│   ├── components/
│   │   ├── [slug]/
│   │   │   └── page.tsx (Individual component page)
│   │   └── page.tsx (All components page)
│   ├── agents/
│   │   ├── [slug]/
│   │   │   └── page.tsx (Individual agent page)
│   │   └── page.tsx (All agents page)
│   ├── layout.tsx
│   └── page.tsx (Homepage)
├── components/ (UI Components)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ComponentCard.tsx
│   ├── AgentCard.tsx
│   └── Footer.tsx
└── data/
    ├── components.ts (UPDATE THIS FOR NEW COMPONENTS)
    └── agents.ts (UPDATE THIS FOR NEW AGENTS)
public/
├── profile.jpg (Your profile picture)
└── thumbnails/ (Component/Agent preview images)
```

## 🚀 How to Add a New Component

Open `src/data/components.ts` and add a new object to the `components` array:

```typescript
{
  id: "6",                                    // Unique ID (increment from last)
  slug: "your-component-name",                // URL-friendly name
  name: "Your Component Name",                // Display name
  type: "button",                             // Type: button, card, input, form, modal, etc.
  description: "Short one-line description",  // Shown on cards
  longDescription: "Longer description...",   // Full description on detail page
  thumbnail: "/thumbnails/your-component.png", // Image path (we'll generate)
  createdDate: "2024-10-20",                  // Format: YYYY-MM-DD
  prompt: "Your AI prompt here...",           // The prompt you used
  codeLink: "https://github.com/mun7594/...", // Link to code
  liveLink: "https://...",                    // Optional: Live demo link
}
```

That's it! The site will automatically:
- Add it to the components page
- Sort it by date
- Create a unique detail page
- Show the latest 4 on homepage

## 🤖 How to Add a New Agent

Open `src/data/agents.ts` and add a new object to the `agents` array:

```typescript
{
  id: "6",                                    // Unique ID
  slug: "agent-slug",                         // URL-friendly name
  name: "Agent Name",                         // Display name
  category: "automation",                     // Category: automation, development, data, etc.
  description: "Short description",           // Card description
  longDescription: "Longer description...",   // Full description
  thumbnail: "/thumbnails/agent.png",         // Image path
  createdDate: "2024-10-20",                  // Format: YYYY-MM-DD
  task: "What task it handles",               // The task it automates
  prompt: "Your prompt/workflow",             // Exact prompt or workflow
  result: "What it produced",                 // Results/benefits
  toolsUsed: ["Claude API", "Node.js"],       // Tools used
  codeLink: "https://github.com/...",         // Optional: GitHub link
}
```

## 🖼️ Adding Thumbnails

Thumbnails are placeholder images in the cards. You can:
1. **Skip for now** - Default placeholder will show
2. **Add a real screenshot** - Save to `public/thumbnails/`
3. **Ask Claude to generate one** - I can create branded thumbnails

Format: PNG files work best
Place them in: `public/thumbnails/component-name.png` or `public/thumbnails/agent-name.png`

## 📝 Weekly Checklist

Each week, before you submit:

- [ ] Component 1 added to `src/data/components.ts`
- [ ] Component 2 added to `src/data/components.ts`
- [ ] Agent added to `src/data/agents.ts`
- [ ] All fields filled (especially `prompt` - required!)
- [ ] Dates are correct (YYYY-MM-DD format)
- [ ] Slugs are URL-friendly (lowercase, hyphens)
- [ ] Run `npm run build` locally to check for errors

## 🚢 Deploying to Vercel

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Add week X components and agents"
   git push origin main
   ```

2. Vercel auto-deploys on push
3. Your site updates instantly!

## 🔗 Important Links

- **GitHub Repo**: https://github.com/mun7594/muntasir-portfolio
- **Live Site**: Will be deployed to Vercel
- **Data Files**:
  - Components: `src/data/components.ts`
  - Agents: `src/data/agents.ts`

## ✨ Quick Tips

- **Slugs** should match your component name (lowercase, hyphens)
- **Dates** must be YYYY-MM-DD format
- **Prompts** are mandatory (it's what makes this special!)
- **Descriptions** should be clear and concise
- **URLs** can be updated later if needed

## ❓ Questions?

If you need help with:
- Adding thumbnails
- Changing colors/styling
- Adding new sections
- Fixing anything

Just tell me the week and what changed, I'll update it instantly!
