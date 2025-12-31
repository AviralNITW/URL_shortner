# 📄 GitHub Pages Deployment Guide

This guide will help you deploy your frontend to GitHub Pages.

## ✅ Prerequisites

1. Your repository is already pushed to GitHub: `https://github.com/AviralNITW/URL_shortner`
2. GitHub Actions workflow is created (`.github/workflows/deploy-frontend.yml`)

## 🚀 Step-by-Step Deployment

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/AviralNITW/URL_shortner
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. Click **Save**

### Step 2: Add Environment Variables (Secrets)

Since your frontend needs backend API URLs, you need to add them as GitHub Secrets:

1. In your repository, go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add these secrets:

   **Secret 1:**
   - Name: `VITE_BACKEND_API_URL`
   - Value: `http://localhost:8080/api/v1` (for now, update later with your backend URL)
   
   **Secret 2:**
   - Name: `VITE_BACKEND_URL`
   - Value: `http://localhost:8080/` (for now, update later with your backend URL)

   ⚠️ **Note**: These are temporary values. Once you deploy your backend (to Vercel or another service), update these secrets with your production backend URLs.

### Step 3: Trigger Deployment

The workflow will automatically run when you push to the `main` branch. To trigger it manually:

1. Go to **Actions** tab in your repository
2. Select **Deploy Frontend to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

### Step 4: Access Your Deployed Site

Once deployment completes (check the Actions tab for status), your site will be available at:

**https://aviralnitw.github.io/URL_shortner/**

## 🔧 Important Notes

### Backend Deployment

⚠️ **GitHub Pages only hosts static files**. Your backend (Express.js) cannot run on GitHub Pages. You need to deploy it separately:

**Options for Backend Deployment:**
1. **Vercel** (Recommended) - Free, easy setup
2. **Render** - Free tier available
3. **Railway** - Free tier available
4. **Heroku** - Paid plans

### Update Environment Variables After Backend Deployment

Once your backend is deployed, update the GitHub Secrets:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Update `VITE_BACKEND_API_URL` with: `https://your-backend-app.vercel.app/api/v1`
3. Update `VITE_BACKEND_URL` with: `https://your-backend-app.vercel.app/`
4. Re-run the workflow to rebuild with new URLs

### Troubleshooting

- **404 Errors**: Make sure GitHub Pages is enabled and source is set to "GitHub Actions"
- **Build Failures**: Check the Actions tab for error details
- **API Not Working**: Ensure backend URLs in secrets are correct and backend is deployed
- **Routing Issues**: The `vite.config.js` is configured with base path `/URL_shortner/` for GitHub Pages

## 📝 Next Steps

1. ✅ Enable GitHub Pages (Step 1)
2. ✅ Add environment secrets (Step 2)
3. ✅ Push workflow file and trigger deployment
4. 🔄 Deploy backend to Vercel/Render
5. 🔄 Update GitHub Secrets with production backend URLs
6. 🔄 Re-deploy frontend

## 🔗 Useful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Base Path Configuration](https://vitejs.dev/config/shared-options.html#base)


