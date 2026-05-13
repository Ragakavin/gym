# Vercel Deployment Guide for UPLIFT

## Quick Deploy (5 minutes)

### Step 1: Create GitHub Repo
1. Go to https://github.com/new
2. Enter repo name: `uplift`
3. Add description: `Fitness tracking and workout guidance platform`
4. Choose **Public**
5. Click **Create repository**

### Step 2: Upload Your Files to GitHub
1. On your new repo page, click **Add file** → **Upload files**
2. Drag and drop your entire `web tech` folder contents, or click to select files
3. Upload these key items:
   - `api/` folder
   - `*.html` files (home.html, chest.html, etc.)
   - `style.css`, `images/` folder
   - `.vercelignore`
   - `README.md`
   - `.gitignore`

4. Scroll down and click **Commit changes**

### Step 3: Deploy on Vercel
1. Go to https://vercel.com
2. Click **Add New...** → **Project**
3. Import your `uplift` GitHub repository
4. Framework Preset: **Other**
5. Root Directory: project root (`web tech`)
6. Click **Deploy**
7. Wait 1-3 minutes for deployment

### Step 4: Access Your Live App
- Vercel gives you a generated URL like `uplift-xxxx.vercel.app`
- Open the URL and test pages like `/chest.html`
- Share the URL anywhere

## What's Already Configured
✅ Vercel serverless APIs in `api/`
✅ Workout pages call relative API routes (`/api/...`)
✅ Static assets under `images/`
✅ Vercel deployment ignore file (`.vercelignore`)

## Troubleshooting
- **Workout cards empty?** Check `/api/health` first
- **Images not showing?** Ensure `images/` folder was uploaded
- **404 on page?** Open full route like `/home.html` or `/chest.html`

---

**Your app is production-ready. Just follow Steps 1-4 above.**
