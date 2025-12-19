# 🚀 Deployment Guide for Vercel & GitHub

This guide will help you deploy your URL Shortener project to Vercel and GitHub.

## ✅ Pre-Deployment Checklist

- [x] ✅ Environment files created (`backend/.env` and `frontend/.env`)
- [x] ✅ Database seeded with sample data
- [x] ✅ `.env.example` files created for reference
- [x] ✅ `.gitignore` configured to exclude `.env` files

## 📦 Step 1: Push to GitHub

### 1.1 Initialize Git Repository (if not already done)

```bash
# Navigate to project root
cd C:\Users\HP\Desktop\projects\URL-Shortener-main

# Initialize git
git init

# Add all files (excluding .env files which are in .gitignore)
git add .

# Commit changes
git commit -m "Initial commit: URL Shortener with environment setup and seeded database"
```

### 1.2 Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `URL-Shortener`)
3. **DO NOT** initialize with README, .gitignore, or license (we already have these)

### 1.3 Push to GitHub

```bash
# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🌐 Step 2: Deploy Backend to Vercel

### 2.1 Install Vercel CLI (Optional but Recommended)

```bash
npm install -g vercel
```

### 2.2 Deploy Backend via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `backend`
   - **Build Command**: Leave empty (or `npm install`)
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

### 2.3 Add Environment Variables for Backend

In Vercel project settings → Environment Variables, add:

```
MONGO_URI=mongodb+srv://maviral456_db_user:TpW1OKD7dimQKy1v@cluster0.kqkfbmf.mongodb.net/?appName=Cluster0
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-12345
CLIENT_URL=https://your-frontend-app.vercel.app
NODE_ENV=production
PORT=8080
LIMIT=10mb
```

**⚠️ Important**: 
- Replace `https://your-frontend-app.vercel.app` with your actual frontend Vercel URL (you'll get this after deploying the frontend)
- Use a strong, unique `JWT_SECRET` in production

### 2.4 Deploy

Click **"Deploy"** and wait for the deployment to complete. Note your backend URL (e.g., `https://your-backend-app.vercel.app`)

## 🎨 Step 3: Deploy Frontend to Vercel

### 3.1 Deploy Frontend via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import the same GitHub repository (or create a separate repo for frontend)
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `dist` (should auto-detect)
   - **Install Command**: `npm install`

### 3.2 Add Environment Variables for Frontend

In Vercel project settings → Environment Variables, add:

```
VITE_BACKEND_API_URL=https://your-backend-app.vercel.app/api/v1
VITE_BACKEND_URL=https://your-backend-app.vercel.app/
```

**⚠️ Important**: Replace `https://your-backend-app.vercel.app` with your actual backend Vercel URL from Step 2.4

### 3.3 Deploy

Click **"Deploy"** and wait for the deployment to complete. Note your frontend URL (e.g., `https://your-frontend-app.vercel.app`)

## 🔄 Step 4: Update Environment Variables

### 4.1 Update Backend CLIENT_URL

After deploying the frontend, go back to your backend Vercel project:

1. Go to **Settings** → **Environment Variables**
2. Update `CLIENT_URL` to your frontend URL:
   ```
   CLIENT_URL=https://your-frontend-app.vercel.app
   ```
3. **Redeploy** the backend for changes to take effect

### 4.2 Verify Frontend Environment Variables

Ensure your frontend environment variables are correctly set with the backend URL.

## 🧪 Step 5: Test Your Deployment

1. Visit your frontend URL
2. Try logging in with test credentials:
   - Email: `john.doe@example.com`
   - Password: `password123`
3. Test URL shortening functionality
4. Check if shortened URLs redirect correctly

## 📝 Test Credentials (From Seeded Database)

The database has been seeded with the following test users:

1. **John Doe**
   - Email: `john.doe@example.com`
   - Password: `password123`

2. **Jane Smith**
   - Email: `jane.smith@example.com`
   - Password: `password123`

3. **Bob Johnson**
   - Email: `bob.johnson@example.com`
   - Password: `password123`

## 🔧 Troubleshooting

### Backend Issues

- **MongoDB Connection Error**: 
  - Verify `MONGO_URI` is correct in Vercel environment variables
  - Check MongoDB Atlas Network Access allows all IPs (0.0.0.0/0) or Vercel IPs

- **CORS Errors**:
  - Ensure `CLIENT_URL` in backend matches your frontend URL exactly
  - Check that `credentials: true` is set in CORS config (already done in code)

### Frontend Issues

- **API Connection Errors**:
  - Verify `VITE_BACKEND_API_URL` is correct
  - Ensure backend is deployed and accessible
  - Check browser console for specific error messages

- **404 on Refresh**:
  - The `vercel.json` in frontend should handle this (already configured)

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/getting-started/)
- [GitHub Documentation](https://docs.github.com/)

## 🎉 Success!

Once deployed, you'll have:
- ✅ Backend API running on Vercel
- ✅ Frontend app running on Vercel
- ✅ Database seeded and ready
- ✅ Project accessible via public URLs

**Your project links:**
- Frontend: `https://your-frontend-app.vercel.app`
- Backend API: `https://your-backend-app.vercel.app/api/v1`

