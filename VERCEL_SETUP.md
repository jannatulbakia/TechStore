# Quick Fix for Vercel Deployment

## Problem
The frontend was trying to connect to `localhost:3001`, which doesn't work in production.

## Solution Applied
✅ Created API utility (`lib/api.ts`) that uses environment variables  
✅ Updated all API calls to use the utility  
✅ Updated CORS configuration in backend  

## What You Need to Do Now

### Step 1: Deploy Your Backend API

You need to deploy your Express server separately. Here are quick options:

#### Option A: Railway (Easiest - Free tier available)
1. Go to https://railway.app
2. Sign in with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Node.js
6. Set **Start Command:** `node server/index.js`
7. Add environment variable:
   - Key: `FRONTEND_URL`
   - Value: `https://tech-store-ruby-eight.vercel.app`
8. Railway gives you a URL like: `https://your-app.up.railway.app`
9. **COPY THIS URL** - you need it for Step 2

#### Option B: Render (Free tier available)
1. Go to https://render.com
2. Sign in with GitHub
3. Click "New" → "Web Service"
4. Connect your repo
5. Configure:
   - Build Command: `npm install`
   - Start Command: `node server/index.js`
   - Add Environment Variable: `FRONTEND_URL=https://tech-store-ruby-eight.vercel.app`
6. **COPY THE URL** they give you

### Step 2: Update Vercel Environment Variable

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project: `tech-store-ruby-eight`
3. Go to **Settings** → **Environment Variables**
4. Add/Update:
   - **Key:** `NEXT_PUBLIC_API_URL`
   - **Value:** Your backend URL from Step 1 (e.g., `https://your-app.up.railway.app`)
   - **Environment:** Production, Preview, Development (select all)
5. Click **Save**

### Step 3: Redeploy Frontend

1. In Vercel, go to **Deployments** tab
2. Click the **3 dots** (⋮) on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

### Step 4: Verify It Works

1. Visit your Vercel URL: https://tech-store-ruby-eight.vercel.app
2. Open browser console (F12)
3. You should **NOT** see CORS errors anymore
4. Products should load
5. Login should work

## Quick Checklist

- [ ] Backend deployed (Railway/Render)
- [ ] Backend URL copied
- [ ] `NEXT_PUBLIC_API_URL` set in Vercel
- [ ] Frontend redeployed
- [ ] Tested - no CORS errors
- [ ] Tested - login works
- [ ] Tested - products load

## Still Having Issues?

### If you still see CORS errors:
1. Make sure `FRONTEND_URL` in backend matches your Vercel URL exactly
2. Check backend logs for errors
3. Restart your backend service

### If login doesn't work:
1. Check browser console for errors
2. Verify cookies are enabled
3. Check backend logs

### If products don't load:
1. Verify backend is accessible (try visiting backend URL directly)
2. Check `NEXT_PUBLIC_API_URL` is set correctly in Vercel
3. Make sure you redeployed after setting the variable

## Testing Backend Directly

Try visiting these URLs directly in your browser:
- `https://your-backend-url.com/api/items` - Should return JSON
- `https://your-backend-url.com/api/auth/status` - Should return `{"authenticated":false}`

If these don't work, your backend isn't deployed correctly.
