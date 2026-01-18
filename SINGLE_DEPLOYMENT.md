# Single Deployment Guide for Vercel

## ✅ Problem Solved

Your app is now configured for **single deployment** on Vercel. Both frontend and backend API are in the same Next.js application, so everything deploys together as one unit.

## 🔄 What Changed

### Before (Separate Servers)
- Frontend: Next.js app on Vercel
- Backend: Express server on Railway/Render
- Two separate deployments required

### After (Single Deployment)
- ✅ Frontend: Next.js app with pages
- ✅ Backend: Next.js API routes (`/app/api/`)
- ✅ **Single deployment on Vercel - everything works together!**

## 📁 New Structure

```
app/
├── api/                    # Backend API routes (replaces Express server)
│   ├── items/
│   │   ├── route.ts       # GET, POST /api/items
│   │   └── [id]/
│   │       └── route.ts   # GET /api/items/:id
│   ├── login/
│   │   └── route.ts       # POST /api/login
│   ├── logout/
│   │   └── route.ts       # POST /api/logout
│   └── auth/
│       └── status/
│           └── route.ts   # GET /api/auth/status
├── items/                  # Frontend pages
├── login/
└── ...
```

## 🚀 How to Deploy

### Step 1: Commit and Push Changes

```bash
git add .
git commit -m "Convert to single deployment with Next.js API routes"
git push
```

### Step 2: Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Your project should auto-deploy (if connected to GitHub)
3. Or click **"Deploy"** if needed
4. **That's it!** No environment variables needed - everything uses the same origin

### Step 3: Verify

1. Visit your Vercel URL
2. Open browser console - no CORS errors!
3. Products should load from `/api/items`
4. Login should work via `/api/login`

## 🔧 Local Development

### Run Everything Together

```bash
npm run dev
```

This starts:
- ✅ Frontend on `http://localhost:3000`
- ✅ API routes on `http://localhost:3000/api/*`

**No need to run a separate server!**

### Test API Routes Locally

Visit these URLs in your browser:
- `http://localhost:3000/api/items` - Should return JSON
- `http://localhost:3000/api/auth/status` - Should return `{"authenticated":false}`

## ✨ Benefits

1. **Single Deployment** - Everything in one place
2. **No CORS Issues** - Same origin for frontend and API
3. **Simpler Setup** - No environment variables needed
4. **Better Performance** - Same serverless functions
5. **Easier Maintenance** - One codebase, one deployment

## 🗑️ Old Files (Can Be Removed)

These are no longer needed but kept for reference:
- `server/index.js` - Replaced by Next.js API routes
- `package.json` - Removed "server" script (no longer needed)

You can delete the `server/` folder if you want, but it's fine to keep it.

## 📝 API Endpoints (Same as Before)

All endpoints work exactly the same:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/items` | GET | Get all items |
| `/api/items` | POST | Create item (protected) |
| `/api/items/[id]` | GET | Get single item |
| `/api/login` | POST | User login |
| `/api/logout` | POST | User logout |
| `/api/auth/status` | GET | Check auth status |

## 🔐 Authentication

Works exactly the same:
- Login sets cookie: `authToken=authenticated`
- Protected routes check cookie
- Logout clears cookie

## 🐛 Troubleshooting

### If API routes don't work:

1. **Check build logs** in Vercel
2. **Verify files exist** in `app/api/` folder
3. **Test locally first** with `npm run dev`
4. **Check browser console** for errors

### If login doesn't work:

1. **Clear browser cookies** and try again
2. **Check browser console** for errors
3. **Verify API route** exists: `/app/api/login/route.ts`

### If you see 404 errors:

1. Make sure route files are named `route.ts` (not `index.ts`)
2. Check folder structure matches exactly
3. Redeploy on Vercel

## 🎯 Next Steps

1. ✅ Deploy to Vercel
2. ✅ Test all functionality
3. ✅ Share your live URL!

Everything should work perfectly now as a single deployment! 🎉
