# Weekly Workflow - Quick Reference

This is your checklist for each week to keep your portfolio updated.

## 📅 Every Week - Do This:

### 1️⃣ Build Your Components & Agent
- Create 2 new UI components
- Create 1 new AI agent
- Document your prompts (you'll need them!)

### 2️⃣ Update the Data Files

#### For Components (2 this week):

Open: `lib/data/components.ts`

Add this template for each component:
```typescript
{
  id: "X",                                        // Next available ID
  slug: "component-name",                         // lowercase-with-hyphens
  name: "Component Name",                         // Display name
  type: "button|card|input|form|etc",            // Component type
  description: "One-line description",            // Shown on card
  longDescription: "Full description here...",    // Detail page
  thumbnail: "/thumbnails/component-name.png",   // Optional
  createdDate: "YYYY-MM-DD",                      // This week's date
  prompt: "Your exact AI prompt here...",         // REQUIRED!
  codeLink: "https://github.com/...",             // Your GitHub
  liveLink: "https://yoursite.com/...",           // Optional
}
```

#### For Agents (1 this week):

Open: `lib/data/agents.ts`

Add this template:
```typescript
{
  id: "X",                                        // Next available ID
  slug: "agent-name",                             // lowercase-with-hyphens
  name: "Agent Name",                             // Display name
  category: "automation|development|data|etc",    // Category
  description: "One-line description",            // Shown on card
  longDescription: "Full description...",         // Detail page
  thumbnail: "/thumbnails/agent-name.png",       // Optional
  createdDate: "YYYY-MM-DD",                      // This week's date
  task: "What it automates",                      // The task
  prompt: "Your exact workflow/prompt...",        // REQUIRED!
  result: "What it produced",                     // Results
  toolsUsed: ["Tool1", "Tool2"],                  // Tools used
  codeLink: "https://github.com/...",             // Optional
}
```

### 3️⃣ Commit & Push

```bash
cd muntasir-portfolio

git add lib/data/
git commit -m "Add Week X components and agent"
git push origin main
```

**That's it!** Your site auto-updates on Vercel.

---

## 📋 Quick Tips

✅ **DO:**
- Use clear, descriptive names
- Include the exact AI prompt (don't paraphrase)
- Use consistent date format: `YYYY-MM-DD`
- Keep slugs lowercase with hyphens
- One submission = one entry in the data file

❌ **DON'T:**
- Skip the prompt field (required for submission!)
- Use duplicate component/agent names
- Forget to save before committing
- Use YYYY/MM/DD or other date formats

---

## 📊 Progress Tracking

Track your weekly submissions:

- **Week 1:** 2 components + 1 agent ✓
- **Week 2:** 2 components + 1 agent ✓
- **Week 3:** 2 components + 1 agent ✓
- ...
- **Week 13:** 4 components + 1 agent (final week)

**Total Target:** 30 components + 12 agents

---

## 🎯 Key Reminders

1. **Always include the prompt** - This is what makes your portfolio special
2. **Use unique names** - No duplicates allowed
3. **Test locally first** - Run `npm run dev` before pushing
4. **Check your URLs** - Make sure links work
5. **Keep it clean** - Add one entry, then commit

---

## 🚨 If Something Goes Wrong

**Error on deploy?**
- Check for typos in the data files
- Ensure all required fields are filled
- Test locally: `npm run dev`

**Component not showing?**
- Verify the `id` is unique
- Check the `slug` is lowercase
- Make sure `createdDate` is `YYYY-MM-DD` format

**Images not loading?**
- Place thumbnails in `public/thumbnails/`
- Name must match the path in data file

---

## 📞 Get Help

- See `PORTFOLIO_GUIDE.md` for detailed setup
- See `SETUP.md` for deployment help
- Check the component/agent data files for examples

You're set! Just follow this workflow each week, and your portfolio will grow to 30 amazing components and 12 AI agents. 🚀
