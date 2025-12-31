# 🚀 Get Your Frontend Link - 3 Simple Steps

Your frontend will be live at: **https://aviralnitw.github.io/URL_shortner/**

---

## Step 1: Enable GitHub Pages (Click the link below)

👉 **Click here**: https://github.com/AviralNITW/URL_shortner/settings/pages

**What to do:**
1. Scroll down to find **"Source"** section
2. Under **"Source"**, select: **`GitHub Actions`** (from the dropdown)
3. Click **"Save"** button

✅ Done! GitHub Pages is now enabled.

---

## Step 2: Add Required Secrets (Click the link below)

👉 **Click here**: https://github.com/AviralNITW/URL_shortner/settings/secrets/actions

**What to do:**

### Add First Secret:
1. Click **"New repository secret"** button
2. **Name**: Type exactly: `VITE_BACKEND_API_URL`
3. **Secret**: Type exactly: `http://localhost:8080/api/v1`
4. Click **"Add secret"**

### Add Second Secret:
1. Click **"New repository secret"** button again
2. **Name**: Type exactly: `VITE_BACKEND_URL`
3. **Secret**: Type exactly: `http://localhost:8080/`
4. Click **"Add secret"**

✅ Done! Both secrets are added.

---

## Step 3: Deploy Your Frontend (Click the link below)

👉 **Click here**: https://github.com/AviralNITW/URL_shortner/actions

**What to do:**
1. You'll see **"Deploy Frontend to GitHub Pages"** workflow
2. Click the **"Run workflow"** button (top right, blue button)
3. In the popup, click **"Run workflow"** again
4. Wait 2-3 minutes for the deployment to complete
5. You'll see a green checkmark ✅ when it's done

✅ Done! Your frontend is deploying!

---

## 🎉 Your Frontend Link

Once deployment completes (green checkmark ✅):

### **👉 https://aviralnitw.github.io/URL_shortner/**

**Click the link above to open your frontend!**

---

## 📊 Check Deployment Status

👉 **View deployment progress**: https://github.com/AviralNITW/URL_shortner/actions

- Look for the latest workflow run
- Green checkmark ✅ = Success!
- Red X ❌ = Check the error message

---

## ⚠️ Important Notes

1. **First deployment takes 2-5 minutes** - Be patient!
2. **The page might show errors** - This is normal! Your backend isn't deployed yet, so API calls will fail. But you'll see your frontend UI.
3. **After deploying backend** - Update the secrets with your backend URL and re-run the workflow.

---

## 🔄 Update Secrets After Backend Deployment

Once you deploy your backend to Render/Vercel:

1. Go back to: https://github.com/AviralNITW/URL_shortner/settings/secrets/actions
2. Click on `VITE_BACKEND_API_URL` → **Update** → Change to: `https://your-backend-url.com/api/v1`
3. Click on `VITE_BACKEND_URL` → **Update** → Change to: `https://your-backend-url.com/`
4. Go to Actions and run the workflow again

---

**That's it! Your frontend link is: https://aviralnitw.github.io/URL_shortner/**

