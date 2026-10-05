# Portfolio Setup - Final Steps

Your portfolio site is **ready to go**! Follow these steps to finalize and deploy.

## 🖼️ Step 1: Add Your Profile Picture

Your profile picture needs to be placed in the `public/` folder:

1. **Get your image file** (the one you shared with me)
2. **Convert it to JPG format** (if not already) - recommended
3. **Name it exactly:** `profile.jpg`
4. **Place it in:** `muntasir-portfolio/public/profile.jpg`

The site is already configured to use `/public/profile.jpg`.

## 🚀 Step 2: Initialize Git & Push to GitHub

```bash
cd muntasir-portfolio

# Initialize git
git init
git add .
git commit -m "Initial portfolio setup with sample components and agents"

# Add your GitHub remote (replace USERNAME with your actual username)
git remote add origin https://github.com/mun7594/muntasir-portfolio.git
git branch -M main
git push -u origin main
```

## 🌐 Step 3: Deploy to Vercel

### Option A: Via GitHub (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Import Project"
4. Select `muntasir-portfolio` repo
5. Click "Deploy"
6. Your site will be live in ~1-2 minutes!

### Option B: Via CLI
```bash
npm install -g vercel
vercel login
vercel
```

## ✅ After Deployment

Once deployed, you'll get a URL like: `https://muntasir-portfolio-xxx.vercel.app`

Share this URL with your team in the Discord #lofidb channel!

## 📝 Making Your First Addition

### When you finish your first 2 components + 1 agent:

1. Open: `lib/data/components.ts`
2. Add your component data (see PORTFOLIO_GUIDE.md for format)
3. Do same for agents in: `lib/data/agents.ts`
4. Commit & push:
   ```bash
   git add lib/data/
   git commit -m "Add week 1 components and agent"
   git push
   ```
5. Vercel auto-deploys!
6. Your site updates instantly ✨

## 📚 Important Files to Know

- **Add components here:** `lib/data/components.ts`
- **Add agents here:** `lib/data/agents.ts`
- **Update guide:** `PORTFOLIO_GUIDE.md` (detailed instructions)
- **Profile picture:** `public/profile.jpg`
- **Site config:** Check `next.config.ts` if needed

## 🎨 Colors & Styling

The site uses a **clean white theme** with:
- Primary color: `gray-900` (dark gray/black)
- Accent colors: `blue-100/700` for agents
- All Tailwind CSS configured in `tailwind.config.ts`

You can tweak colors by editing the Tailwind config if needed.

## 🏃 Running Locally

To test locally before pushing:

```bash
cd muntasir-portfolio
npm run dev
```

Visit: `http://localhost:3000`

## ⚡ Next Steps

1. ✅ Add `profile.jpg` to `public/`
2. ✅ Push to GitHub
3. ✅ Deploy to Vercel
4. ✅ Build your first components
5. ✅ Add them via the data files
6. ✅ Share your live URL

---

**Questions?** Check `PORTFOLIO_GUIDE.md` for detailed component/agent add instructions, or reach out!

The portfolio is **lightweight, fast, and ready to scale** as you add 30 components and 12 agents over the 90 days. 🚀
