# Railway Deployment Guide for UPLIFT

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
   - `backend/` folder (with Dockerfile)
   - `*.html` files (home.html, chest.html, etc.)
   - `style.css`, `images/` folder
   - `railway.toml`
   - `README.md`
   - `.gitignore`

4. Scroll down and click **Commit changes**

### Step 3: Deploy on Railway
1. Go to https://railway.app
2. Click **Dashboard** (top right, may need to login)
3. Click **+ New Project**
4. Choose **Deploy from GitHub repo**
5. Select your `uplift` repo
6. Railway will auto-detect `Dockerfile` and start building
7. Wait 3-5 minutes for deployment

### Step 4: Access Your Live App
- Railway gives you a generated URL like `uplift-production-xxxx.up.railway.app`
- Click it to open your live app
- Share that URL anywhere!

## What's Already Configured
✅ Docker setup (backend/Dockerfile)
✅ Railway config (railway.toml)
✅ Dynamic port support (application.properties)
✅ All images in static folder
✅ Frontend built into backend service

## Troubleshooting
- **App crashes?** Check Railway logs (Deployments tab)
- **Images not showing?** Already fixed - they're in static/images/
- **Port error?** Already using dynamic PORT variable

---

**Your app is production-ready. Just follow Steps 1-4 above.**
