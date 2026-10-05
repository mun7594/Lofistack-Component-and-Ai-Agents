# 🚀 Portfolio Launch Checklist

Follow these steps in order to get your portfolio live and ready!

## ✅ Pre-Launch Setup

- [ ] **Profile Picture**
  - [ ] Have your profile image ready (JPG format recommended)
  - [ ] Place it in: `public/profile.jpg`
  - [ ] Verify it's named exactly: `profile.jpg`

- [ ] **Review Defaults**
  - [ ] Check hero section text makes sense
  - [ ] Review sample components & agents
  - [ ] Check all links in footer work

## ✅ Local Testing

- [ ] **Install Dependencies**
  ```bash
  cd muntasir-portfolio
  npm install
  ```

- [ ] **Run Locally**
  ```bash
  npm run dev
  ```
  - [ ] Site opens at `http://localhost:3000`
  - [ ] Homepage loads correctly
  - [ ] Navigation works
  - [ ] Components page loads
  - [ ] Agents page loads
  - [ ] Click on a component detail page
  - [ ] Click on an agent detail page
  - [ ] Footer links work
  - [ ] Mobile responsive looks good

- [ ] **Test Build**
  ```bash
  npm run build
  ```
  - [ ] Build completes without errors
  - [ ] No TypeScript errors

## ✅ GitHub Setup

- [ ] **Initialize Git**
  ```bash
  git init
  git add .
  git commit -m "Initial portfolio setup with sample components and agents"
  ```

- [ ] **Create Repository**
  - [ ] Go to https://github.com/new
  - [ ] Create repo: `muntasir-portfolio`
  - [ ] Set to **Public** (requirement for challenge)
  - [ ] Copy the repo URL

- [ ] **Push to GitHub**
  ```bash
  git remote add origin https://github.com/YOUR-USERNAME/muntasir-portfolio.git
  git branch -M main
  git push -u origin main
  ```

- [ ] **Verify on GitHub**
  - [ ] Go to your GitHub repo
  - [ ] All files are there
  - [ ] README shows correctly

## ✅ Vercel Deployment

- [ ] **Create Vercel Account**
  - [ ] Go to https://vercel.com
  - [ ] Sign up with GitHub
  - [ ] Authorize GitHub access

- [ ] **Deploy Project**
  - [ ] Click "Import Project"
  - [ ] Select `muntasir-portfolio` repo
  - [ ] Click "Deploy"
  - [ ] Wait for deployment (1-2 minutes)

- [ ] **Verify Live Site**
  - [ ] Check your Vercel dashboard
  - [ ] Copy the live URL
  - [ ] Open URL in browser
  - [ ] Homepage loads
  - [ ] Profile picture shows
  - [ ] Navigation works
  - [ ] Test a few pages
  - [ ] Mobile view looks good

## ✅ Sharing & Announcement

- [ ] **Post in Discord**
  - [ ] Go to #lofidb channel
  - [ ] Post your live URL
  - [ ] Include: "Week 1 portfolio ready with sample components"

- [ ] **Update Social (Optional)**
  - [ ] Share on Instagram stories
  - [ ] Share on Facebook
  - [ ] Update GitHub profile with portfolio link

## ✅ Ready for Week 1

Once you've checked everything above, you're ready to:

- [ ] Build your first 2 components
- [ ] Build your first 1 AI agent
- [ ] Add them to the data files (follow WEEKLY_WORKFLOW.md)
- [ ] Commit, push, and auto-deploy
- [ ] Share your progress

## 📋 Quick Links

- **Local:** http://localhost:3000
- **GitHub Repo:** https://github.com/mun7594/muntasir-portfolio
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Discord:** #lofidb channel

## 🎯 Success Criteria

Your portfolio is ready when:

✅ Site is live on Vercel
✅ Profile picture shows
✅ All pages load
✅ Site is responsive
✅ GitHub repo is public
✅ You can add new components easily
✅ You can add new agents easily

## 🚨 Troubleshooting

**Site won't deploy?**
- Check GitHub repo is public
- Make sure `npm run build` works locally
- Check Vercel build logs for errors

**Profile picture not showing?**
- Verify file is named `profile.jpg`
- Verify file is in `public/` folder
- Try clearing browser cache (Ctrl+F5)

**Data files have errors?**
- Check for missing commas
- Verify all required fields are filled
- Check date format: `YYYY-MM-DD`

---

## 🎉 You're All Set!

Once you complete this checklist, your portfolio is:
- ✨ Live and accessible globally
- 📱 Mobile responsive
- ⚡ Fast loading (Next.js optimized)
- 🚀 Auto-deploying with each push
- 📊 Ready for 30 components and 12 agents

Now go build amazing components and AI agents! 💪

**Questions?** Check:
1. `README.md` — Project overview
2. `SETUP.md` — Detailed setup guide
3. `PORTFOLIO_GUIDE.md` — How to add items
4. `WEEKLY_WORKFLOW.md` — Weekly checklist

Good luck with your 90-day challenge! 🚀
