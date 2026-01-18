# Deployment Guide

This guide explains how to deploy TechStore to production.

## Overview

TechStore consists of two separate applications:
1. **Frontend** - Next.js application (deploy to Vercel)
2. **Backend** - Express.js API server (deploy to Railway, Render, or Heroku)

## Prerequisites

- GitHub account
- Vercel account (for frontend)
- Railway/Render/Heroku account (for backend)
- Node.js installed locally

## Step 1: Deploy Backend API Server

### Option A: Railway (Recommended)

1. Go to [Railway](https://railway.app) and sign in with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will auto-detect Node.js
5. Set start command: `node server/index.js`
6. Add environment variable:
   - `FRONTEND_URL` = `https://your-vercel-app.vercel.app`
7. Railway will provide a URL like: `https://your-app.railway.app`
8. **Copy this URL** - you'll need it for the frontend

### Option B: Render

1. Go to [Render](https://render.com) and sign in
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** techstore-api
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node server/index.js`
   - **Environment Variables:**
     - `FRONTEND_URL` = `https://your-vercel-app.vercel.app`
5. Click "Create Web Service"
6. **Copy the service URL** (e.g., `https://techstore-api.onrender.com`)

### Update Backend CORS

After deploying your backend, update `server/index.js` to include your Vercel domain:

```javascript
const allowedOrigins = [
  'http://localhost:3000',
  'https://your-vercel-app.vercel.app',  // Add your Vercel URL here
  process.env.FRONTEND_URL
].filter(Boolean);
```

Commit and push these changes.

## Step 2: Deploy Frontend to Vercel

### Using Vercel Dashboard

1. Go to [Vercel](https://vercel.com) and sign in with GitHub
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
5. **Add Environment Variable:**
   - **Key:** `NEXT_PUBLIC_API_URL`
   - **Value:** Your backend URL from Step 1 (e.g., `https://your-app.railway.app`)
6. Click "Deploy"

### Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variable
vercel env add NEXT_PUBLIC_API_URL
# Enter your backend URL when prompted

# Redeploy with environment variable
vercel --prod
```

## Step 3: Update Backend with Production Frontend URL

After deploying the frontend, update your backend's `FRONTEND_URL` environment variable to your Vercel URL:

**Railway:**
1. Go to your project → Settings → Variables
2. Update `FRONTEND_URL` to your Vercel URL

**Render:**
1. Go to your service → Environment
2. Update `FRONTEND_URL` to your Vercel URL

## Step 4: Verify Deployment

1. **Test Frontend:**
   - Visit your Vercel URL
   - Check browser console for errors
   - Try logging in

2. **Test Backend:**
   - Visit `https://your-backend-url.com/api/items`
   - Should return JSON data

3. **Test Integration:**
   - Login should work
   - Products should load
   - Protected routes should work

## Environment Variables Summary

### Frontend (Vercel)
```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

### Backend (Railway/Render)
```
FRONTEND_URL=https://your-vercel-app.vercel.app
PORT=3001 (optional, auto-set by hosting)
```

## Troubleshooting

### CORS Errors

If you see CORS errors:
1. Ensure `FRONTEND_URL` is set correctly in backend
2. Check that your Vercel URL is in the `allowedOrigins` array in `server/index.js`
3. Restart your backend server

### API Not Working

1. Verify `NEXT_PUBLIC_API_URL` is set in Vercel
2. Check backend logs for errors
3. Ensure backend is running and accessible
4. Test backend URL directly in browser

### Login Not Working

1. Check browser console for errors
2. Verify cookies are being set (check browser DevTools → Application → Cookies)
3. Ensure `credentials: 'include'` is in API calls (already handled by our `api` utility)

## Custom Domain (Optional)

### Vercel Custom Domain
1. Go to Vercel project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Backend Custom Domain
Most hosting providers allow custom domains. Update your frontend's `NEXT_PUBLIC_API_URL` accordingly.

## Post-Deployment Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend deployed to Vercel
- [ ] Environment variables set correctly
- [ ] CORS configured properly
- [ ] Login functionality works
- [ ] Products load correctly
- [ ] Protected routes work
- [ ] No console errors
- [ ] Mobile responsive design works

## Maintenance

- **Backend Restarts:** Your backend may sleep after inactivity (on free tiers). First request may be slow.
- **Environment Variables:** Keep them secure and update if you change hosting providers
- **Logs:** Monitor both frontend (Vercel) and backend logs for errors

## Support

For issues, check:
1. Browser console for frontend errors
2. Backend server logs
3. Vercel deployment logs
4. Railway/Render service logs
