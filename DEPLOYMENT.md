# Deployment Guide - Universal AI Dividend

## ⚠️ Important: This is a Next.js App

This application is built with **Next.js 14** (React/TypeScript) and **cannot be deployed on Streamlit Cloud**.

Streamlit is for Python apps only. This is a JavaScript/TypeScript application.

---

## 🚀 Recommended: Deploy to Vercel

Vercel is the creator of Next.js and offers the best deployment experience with zero configuration.

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**: https://vercel.com/new

2. **Import Git Repository**:
   - Click "Import Project"
   - Select "Import Git Repository"
   - Paste: `https://github.com/seblosiv/Universal-AI-Dividend`
   - Select branch: `claude/uad-landing-page-build-011CUwD2A5XZc54b8sD66kKG`

3. **Configure Project**:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Add Environment Variables** (Optional):
   ```
   NEXT_PUBLIC_BASE_URL=https://your-app.vercel.app
   NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
   NEXT_PUBLIC_TREASURY_ADDRESS=0x...
   ```

5. **Click "Deploy"** 🎉

Your app will be live at: `https://universal-ai-dividend.vercel.app` (or your custom domain)

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd /home/user/Universal-AI-Dividend
vercel

# Follow prompts:
# Set up and deploy? Yes
# Which scope? Your account
# Link to existing project? No
# What's your project's name? universal-ai-dividend
# In which directory is your code located? ./
# Want to override settings? No

# Deploy to production
vercel --prod
```

---

## 🌐 Alternative Deployment Platforms

### Netlify

1. Go to: https://app.netlify.com/start
2. Connect your GitHub repo
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Branch: `claude/uad-landing-page-build-011CUwD2A5XZc54b8sD66kKG`
4. Deploy

### Railway

1. Go to: https://railway.app/new
2. Deploy from GitHub repo
3. Select branch: `claude/uad-landing-page-build-011CUwD2A5XZc54b8sD66kKG`
4. Railway auto-detects Next.js

### Render

1. Go to: https://dashboard.render.com/
2. New → Web Service
3. Connect GitHub repo
4. Configure:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

---

## 📋 Pre-Deployment Checklist

- [ ] Set `NEXT_PUBLIC_BASE_URL` environment variable
- [ ] Configure PostHog analytics key (optional)
- [ ] Set up treasury contract address (when ready)
- [ ] Review and test all API endpoints
- [ ] Verify mobile responsiveness
- [ ] Test performance with Lighthouse
- [ ] Set up custom domain (optional)

---

## 🔧 Environment Variables for Production

Create these in your deployment platform:

```env
# Required
NEXT_PUBLIC_BASE_URL=https://your-domain.com

# Optional (for full functionality)
NEXT_PUBLIC_POSTHOG_KEY=phc_your_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
NEXT_PUBLIC_CHAIN_ID=1
NEXT_PUBLIC_TREASURY_ADDRESS=0x...
NEXT_PUBLIC_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/...

# Backend (when you add database)
DATABASE_URL=postgresql://...
RESEND_API_KEY=re_...
```

---

## ✅ Post-Deployment

After deployment:

1. **Test the live site**:
   - All sections load correctly
   - Interactive demos work
   - API endpoints return data
   - Mobile responsiveness
   - Page load speed

2. **Set up monitoring**:
   - Vercel Analytics (built-in)
   - PostHog (if configured)
   - Sentry for error tracking (optional)

3. **Configure custom domain** (optional):
   - Add domain in Vercel dashboard
   - Update DNS records
   - SSL auto-configured

4. **Update README** with live URL

---

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (18+ required)
- Verify all dependencies in package.json
- Check build logs for specific errors

### API Routes Not Working
- Ensure Next.js API routes are enabled
- Check serverless function logs
- Verify environment variables

### Slow Performance
- Enable Vercel Speed Insights
- Check image optimization
- Review bundle size with `npm run build`

---

## 📞 Need Help?

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- UAD Discord: https://discord.gg/uad

---

## 🚫 Why Not Streamlit?

**Streamlit Cloud requires**:
- Python application
- `streamlit_app.py` entry file
- Python dependencies in `requirements.txt`

**This app is**:
- JavaScript/TypeScript with React
- Next.js framework
- npm dependencies in `package.json`

**To use Streamlit**, you would need to completely rebuild the app in Python, which would:
- Lose all interactive React components
- Lose Framer Motion animations
- Lose modern web features
- Require complete rewrite (100+ hours of work)

**Not recommended.** Use Vercel instead.
