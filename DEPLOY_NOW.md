# 🚀 Deploy Your Frontend to GitHub Pages - RIGHT NOW!

Follow these **3 simple steps** to get your frontend live:

---

## ✅ Step 1: Enable GitHub Pages (2 minutes)

1. **Click this link**: https://github.com/AviralNITW/URL_shortner/settings/pages

2. Under **"Source"**, select: **`GitHub Actions`**

3. Click **"Save"**

✅ Done! GitHub Pages is now enabled.

---

## ✅ Step 2: Add Environment Variables (3 minutes)

Your frontend needs backend URLs. Add them as secrets:

1. **Click this link**: https://github.com/AviralNITW/URL_shortner/settings/secrets/actions

2. Click **"New repository secret"**

3. **Add Secret #1:**
   - **Name**: `VITE_BACKEND_API_URL`
   - **Value**: `http://localhost:8080/api/v1`
   - Click **"Add secret"**

4. Click **"New repository secret"** again

5. **Add Secret #2:**
   - **Name**: `VITE_BACKEND_URL`
   - **Value**: `http://localhost:8080/`
   - Click **"Add secret"**

✅ Done! Secrets are added. (You'll update these later with your backend URL)

---

## ✅ Step 3: Deploy! (1 minute)

1. **Click this link**: https://github.com/AviralNITW/URL_shortner/actions

2. You should see **"Deploy Frontend to GitHub Pages"** workflow

3. Click **"Run workflow"** button (top right)

4. Click **"Run workflow"** again in the popup

5. Wait 2-3 minutes for deployment to complete

✅ Done! Your frontend is deploying!

---

## 🎉 Step 4: Open Your Frontend!

Once the deployment is complete (you'll see a green checkmark):

**🔗 Your Frontend URL**: https://aviralnitw.github.io/URL_shortner/

**Click the link above to see your frontend!**

---

## 📊 Check Deployment Status

- **View deployment**: https://github.com/AviralNITW/URL_shortner/actions
- Look for a green checkmark ✅ next to the latest workflow run

---

## ⚠️ Troubleshooting

**If deployment fails:**
1. Check the Actions tab for error messages
2. Make sure both secrets are added correctly
3. Make sure GitHub Pages is enabled (Step 1)

**If you see a 404:**
- Wait a few minutes - GitHub Pages can take 2-5 minutes to go live
- Clear your browser cache and try again

**If the page loads but looks broken:**
- This is normal! The backend isn't deployed yet, so API calls will fail
- The frontend UI should still be visible

---

## 🎯 What's Next?

After your frontend is live:
1. Deploy your backend to Render or Vercel
2. Update the GitHub Secrets with your backend URL
3. Re-run the deployment workflow

See `DEPLOYMENT_COMPLETE.md` for backend deployment instructions.

---

**Your frontend will be live at**: https://aviralnitw.github.io/URL_shortner/ 🎉

