# ⚡ Quick Deployment Reference

## 🎯 Quick Steps

### Frontend (GitHub Pages)
1. Enable GitHub Pages: **Settings** → **Pages** → Source: **GitHub Actions**
2. Add Secrets: **Settings** → **Secrets** → Add `VITE_BACKEND_API_URL` and `VITE_BACKEND_URL`
3. Deploy: **Actions** → **Run workflow**

**Frontend URL**: https://aviralnitw.github.io/URL_shortner/

### Backend (Choose One)

#### Option 1: Render
1. Go to [render.com](https://render.com)
2. **New** → **Web Service** → Connect GitHub repo
3. Root Directory: `backend`
4. Build: `npm install`
5. Start: `npm start`
6. Add environment variables (see below)

#### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com)
2. **Add Project** → Import GitHub repo
3. Root Directory: `backend`
4. Framework: **Other**
5. Add environment variables (see below)

### Environment Variables (Backend)

```env
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-super-secret-jwt-key
CLIENT_URL=https://aviralnitw.github.io
NODE_ENV=production
PORT=8080
LIMIT=10mb
```

### Update Frontend After Backend Deployment

1. Update GitHub Secrets:
   - `VITE_BACKEND_API_URL` → `https://your-backend-url.com/api/v1`
   - `VITE_BACKEND_URL` → `https://your-backend-url.com/`
2. Re-run GitHub Actions workflow

---

📖 **Full Guide**: See [DEPLOYMENT_COMPLETE.md](./DEPLOYMENT_COMPLETE.md)

