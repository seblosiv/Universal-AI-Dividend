# Streamlit Deployment Guide

## 🎉 You're Ready to Deploy!

This repository now includes a **Streamlit version** of the Universal AI Dividend landing page.

---

## 🚀 Deploy to Streamlit Cloud

### Quick Deploy (3 minutes)

1. **Go to Streamlit Cloud**: https://share.streamlit.io/

2. **Sign in** with your GitHub account

3. **Click "New app"**

4. **Configure deployment**:
   - **Repository**: `seblosiv/Universal-AI-Dividend`
   - **Branch**: `claude/uad-landing-page-build-011CUwD2A5XZc54b8sD66kKG`
   - **Main file path**: `streamlit_app.py`
   - **App URL**: `universal-ai-dividend` (or your preferred name)

5. **Click "Deploy!"** 🎉

Your app will be live at: `https://universal-ai-dividend.streamlit.app`

---

## 📁 Streamlit Files in This Repo

- **`streamlit_app.py`** - Main application file
- **`requirements.txt`** - Python dependencies
- **`.streamlit/config.toml`** - Theme and configuration

---

## ✨ Features Included

The Streamlit version includes:

✅ Hero section with live stats
✅ Interactive odds calculator
✅ Treasury impact estimator
✅ VRF explainer
✅ Transparency panel
✅ Recent winners table
✅ Future vision section
✅ FAQ accordion
✅ Newsletter signup
✅ Custom UAD branding (mint/sky/gold colors)
✅ Responsive layout

---

## 🔄 Differences from Next.js Version

**What's Missing** (due to Streamlit limitations):
- ❌ Framer Motion animations
- ❌ Complex React components
- ❌ Client-side routing
- ❌ Advanced SEO features
- ❌ PostHog analytics integration
- ❌ Glassmorphism effects (limited)

**What's Included**:
- ✅ All core functionality
- ✅ Interactive calculators
- ✅ Live data display
- ✅ Custom branding
- ✅ Responsive layout
- ✅ FAQ and content sections

---

## 🔧 Local Development

Run locally before deploying:

```bash
# Install dependencies
pip install -r requirements.txt

# Run the app
streamlit run streamlit_app.py
```

Visit: http://localhost:8501

---

## 🌐 Environment Variables (Optional)

If you need to add secrets (API keys, etc.), use Streamlit secrets:

1. Go to your app dashboard on Streamlit Cloud
2. Click "⚙️ Settings" → "Secrets"
3. Add secrets in TOML format:

```toml
# Example secrets
POSTHOG_KEY = "your_key_here"
TREASURY_ADDRESS = "0x..."
RPC_URL = "https://..."
```

Access in code:
```python
import streamlit as st
posthog_key = st.secrets["POSTHOG_KEY"]
```

---

## 📊 Replacing Mock Data

The app currently uses mock data. To connect real data:

### 1. Blockchain Data

Install Web3.py:
```bash
pip install web3
```

Update `streamlit_app.py`:
```python
from web3 import Web3

@st.cache_data(ttl=60)  # Cache for 60 seconds
def get_treasury_balance():
    w3 = Web3(Web3.HTTPProvider(st.secrets["RPC_URL"]))
    contract = w3.eth.contract(address=st.secrets["TREASURY_ADDRESS"], abi=ABI)
    balance = contract.functions.balanceOf().call()
    return balance / 1e6  # Convert from wei to USDT
```

### 2. Database Integration

Install database library:
```bash
pip install psycopg2-binary  # PostgreSQL
# or
pip install pymongo  # MongoDB
```

Update `streamlit_app.py`:
```python
import psycopg2

@st.cache_data(ttl=300)  # Cache for 5 minutes
def get_recent_winners():
    conn = psycopg2.connect(st.secrets["DATABASE_URL"])
    query = "SELECT * FROM winners ORDER BY timestamp DESC LIMIT 10"
    df = pd.read_sql(query, conn)
    conn.close()
    return df
```

---

## 🎨 Customization

### Update Colors

Edit the CSS in `streamlit_app.py`:

```python
st.markdown("""
<style>
    :root {
        --mint: #51F8C5;  /* Change to your color */
        --sky: #8BC7FF;
        --gold: #F6C667;
    }
</style>
""", unsafe_allow_html=True)
```

### Update Content

All text is in `streamlit_app.py`. Simply edit the markdown strings.

### Update Theme

Edit `.streamlit/config.toml`:

```toml
[theme]
primaryColor = "#51F8C5"
backgroundColor = "#0C0C0D"
```

---

## 📱 Mobile Optimization

Streamlit is responsive by default. Test on mobile:

1. Deploy to Streamlit Cloud
2. Visit on your phone
3. Adjust column layouts if needed:

```python
# Desktop: 3 columns, Mobile: 1 column
col1, col2, col3 = st.columns([1, 1, 1])
```

---

## 🚨 Troubleshooting

### App won't deploy
- Check `requirements.txt` for typos
- Ensure `streamlit_app.py` exists in repo root
- Verify branch name is correct

### App is slow
- Add `@st.cache_data` to expensive functions
- Reduce API call frequency
- Use session state for persistence

### Styling issues
- Streamlit CSS is limited
- Use `st.markdown()` with `unsafe_allow_html=True`
- Test in incognito mode (clear cache)

---

## 📚 Resources

- Streamlit Docs: https://docs.streamlit.io
- Streamlit Cloud: https://streamlit.io/cloud
- Community Forum: https://discuss.streamlit.io

---

## 🎯 Next Steps

After deployment:

1. **Test the live app** on all devices
2. **Replace mock data** with real blockchain/database queries
3. **Add wallet connection** (via streamlit-web3)
4. **Set up monitoring** and analytics
5. **Share your app** with the community!

---

**Your Streamlit app is ready to deploy!** 🚀
