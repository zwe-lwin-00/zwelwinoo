# 🚀 GitHub Pages Deployment Guide

## Step-by-Step Instructions to Host Your Portfolio on GitHub (FREE!)

### Prerequisites
- ✅ GitHub account (free)
- ✅ Git installed on your computer
- ✅ Your portfolio code ready

---

## 📋 Step 1: Create/Check Your GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Create a new repository** (or use existing):
   - Click the **"+"** icon → **"New repository"**
   - Repository name: `zwelwinoo.github.io` (or any name you prefer)
   - Make it **Public** (required for free GitHub Pages)
   - **Don't** initialize with README (we already have one)
   - Click **"Create repository"**

---

## 📤 Step 2: Push Your Code to GitHub

### Option A: If you haven't initialized Git yet

Open your terminal/command prompt in your project folder and run:

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit: VS Code themed portfolio"

# Add your GitHub repository (replace with your username)
git remote add origin https://github.com/YOUR_USERNAME/zwelwinoo.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: If Git is already initialized

```bash
# Add all files
git add .

# Commit changes
git commit -m "Ready for deployment"

# Push to GitHub
git push origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

---

## ⚙️ Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. Click on **"Settings"** tab (top menu)
3. Scroll down to **"Pages"** section (left sidebar)
4. Under **"Source"**, select:
   - **Source**: `GitHub Actions` (not "Deploy from a branch")
5. **Save** the settings

---

## 🔄 Step 4: Automatic Deployment

The GitHub Actions workflow I created will automatically:
- ✅ Build your React app
- ✅ Deploy it to GitHub Pages
- ✅ Update your site on every push to main branch

**First deployment:**
- Go to **"Actions"** tab in your repository
- You should see a workflow running
- Wait 2-3 minutes for it to complete
- Once it's done, you'll see a green checkmark ✅

---

## 🌐 Step 5: Access Your Live Portfolio

After deployment completes:

**Your portfolio will be live at:**
```
https://YOUR_USERNAME.github.io/zwelwinoo.github.io/
```

**Example:**
```
https://zwelwinoo.github.io/zwelwinoo.github.io/
```

---

## 🎯 Optional: Custom Domain (Root URL)

If you want your portfolio at `https://zwelwinoo.github.io` (without the subdirectory):

1. **Rename your repository** to just `zwelwinoo.github.io`:
   - Go to repository **Settings** → **General**
   - Scroll to **"Repository name"**
   - Change to: `zwelwinoo.github.io`
   - Click **"Rename"**

2. **Update vite.config.js** base path:
   ```js
   base: '/',
   ```

3. **Push the change:**
   ```bash
   git add vite.config.js
   git commit -m "Update base path for root domain"
   git push
   ```

4. Your site will be at: `https://zwelwinoo.github.io`

---

## 🔄 Updating Your Portfolio

Every time you make changes:

```bash
# Make your changes to files
# Then:

git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy your site! 🎉

---

## ❓ Troubleshooting

### Site not loading?
- Check **Actions** tab for errors
- Wait 2-3 minutes after pushing
- Clear browser cache (Ctrl+F5)

### 404 Error?
- Make sure GitHub Pages is enabled in Settings
- Check that the workflow completed successfully
- Verify the base path in vite.config.js matches your repo name

### Build fails?
- Check the **Actions** tab for error messages
- Make sure all dependencies are in package.json
- Verify node_modules is in .gitignore

---

## ✅ You're Done!

Your portfolio is now live on GitHub Pages - **completely FREE!** 🎊

**Remember:**
- ✅ Updates are automatic on every push
- ✅ No server costs
- ✅ Free SSL certificate (HTTPS)
- ✅ Fast CDN delivery worldwide

Enjoy your live portfolio! 🚀
