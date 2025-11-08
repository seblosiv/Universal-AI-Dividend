"""
Universal AI Dividend (UAD) Landing Page
Streamlit Version
"""

import streamlit as st
import pandas as pd
from datetime import datetime, timedelta
import time

# Page config
st.set_page_config(
    page_title="Universal AI Dividend | Basic income for the AI age",
    page_icon="💰",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Custom CSS for UAD branding
st.markdown("""
<style>
    /* UAD Brand Colors */
    :root {
        --jet: #0C0C0D;
        --mint: #51F8C5;
        --sky: #8BC7FF;
        --warm: #FBFBF9;
        --gold: #F6C667;
    }

    /* Main background */
    .stApp {
        background: linear-gradient(180deg, #0C0C0D 0%, #1a1a1c 100%);
        color: #FBFBF9;
    }

    /* Headers */
    h1 {
        color: #51F8C5 !important;
        font-size: 3.5rem !important;
        font-weight: 700 !important;
        text-align: center;
        margin-bottom: 1rem !important;
    }

    h2 {
        color: #FBFBF9 !important;
        font-size: 2.5rem !important;
        font-weight: 600 !important;
        margin-top: 3rem !important;
    }

    h3 {
        color: #8BC7FF !important;
        font-size: 1.8rem !important;
    }

    /* Metric cards */
    [data-testid="stMetricValue"] {
        font-size: 2rem !important;
        color: #51F8C5 !important;
    }

    [data-testid="stMetricLabel"] {
        color: #8BC7FF !important;
    }

    /* Buttons */
    .stButton > button {
        background: linear-gradient(135deg, #51F8C5 0%, #1FF5AC 100%) !important;
        color: #0C0C0D !important;
        font-weight: 600 !important;
        border: none !important;
        padding: 0.75rem 2rem !important;
        border-radius: 0.5rem !important;
        font-size: 1.1rem !important;
        transition: all 0.3s ease !important;
    }

    .stButton > button:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 10px 20px rgba(81, 248, 197, 0.3) !important;
    }

    /* Info boxes */
    .stAlert {
        background: rgba(81, 248, 197, 0.1) !important;
        border-left: 4px solid #51F8C5 !important;
        color: #FBFBF9 !important;
    }

    /* Expander */
    .streamlit-expanderHeader {
        background: rgba(139, 199, 255, 0.1) !important;
        border-radius: 0.5rem !important;
        color: #FBFBF9 !important;
    }

    /* Slider */
    .stSlider > div > div > div {
        background: #51F8C5 !important;
    }

    /* Divider */
    hr {
        border-color: rgba(139, 199, 255, 0.2) !important;
    }

    /* Links */
    a {
        color: #51F8C5 !important;
        text-decoration: none !important;
    }

    a:hover {
        color: #8BC7FF !important;
    }

    /* Glass effect cards */
    .glass-card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border-radius: 1rem;
        padding: 2rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin: 1rem 0;
    }
</style>
""", unsafe_allow_html=True)


# Mock data (replace with real API calls in production)
def get_live_stats():
    """Fetch live statistics"""
    return {
        "treasury_balance": 127500.50,
        "this_week_prize": 5000,
        "entries_so_far": 2847,
        "next_draw": datetime.now() + timedelta(days=4),
    }


def get_recent_winners():
    """Fetch recent winners"""
    return pd.DataFrame({
        "Week": [46, 45, 44, 43, 42],
        "Address": [
            "alice.eth",
            "bob.eth",
            "0x1234...7890",
            "crypto-enthusiast.eth",
            "0xaaaa...aaaa",
        ],
        "Amount": [5000, 3500, 4200, 6000, 3000],
        "Date": [
            (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d"),
            (datetime.now() - timedelta(days=14)).strftime("%Y-%m-%d"),
            (datetime.now() - timedelta(days=21)).strftime("%Y-%m-%d"),
            (datetime.now() - timedelta(days=28)).strftime("%Y-%m-%d"),
            (datetime.now() - timedelta(days=35)).strftime("%Y-%m-%d"),
        ],
    })


def calculate_odds(my_entries, total_entries):
    """Calculate winning odds"""
    if total_entries == 0:
        return 0
    return (my_entries / total_entries) * 100


# Hero Section
st.markdown("<h1>💰 Basic income for the AI age</h1>", unsafe_allow_html=True)
st.markdown("""
<p style='text-align: center; font-size: 1.3rem; color: #8BC7FF; margin-bottom: 2rem;'>
Donated today. Transparent on-chain. Weekly USDT dividends to real people.
</p>
""", unsafe_allow_html=True)

# Live Stats
stats = get_live_stats()

col1, col2, col3 = st.columns(3)
with col1:
    st.metric("💰 Treasury Balance", f"${stats['treasury_balance']:,.2f}")
with col2:
    st.metric("🎁 This Week's Prize", f"${stats['this_week_prize']:,.2f}")
with col3:
    st.metric("🎫 Entries So Far", f"{stats['entries_so_far']:,}")

# Trust badges
st.markdown("""
<div style='text-align: center; margin: 2rem 0; color: #8BC7FF;'>
🛡️ Chainlink VRF  •  💵 USDT  •  🔓 Open-Source  •  🏛️ Non-Profit
</div>
""", unsafe_allow_html=True)

# Primary CTAs
col1, col2, col3 = st.columns([1, 1, 1])
with col1:
    st.write("")
with col2:
    if st.button("🎟️ Enter This Week's Draw", use_container_width=True):
        st.info("🚧 Wallet connection coming soon! Connect your Web3 wallet to enter.")
    if st.button("💸 Donate USDT", use_container_width=True):
        st.info("🚧 Donation interface coming soon! You can donate directly to the treasury contract.")
with col3:
    st.write("")

st.divider()

# How It Works
st.markdown("## 📚 How It Works")

col1, col2, col3 = st.columns(3)
with col1:
    st.markdown("""
    ### 💵 Donate
    Anyone can donate USDT to the treasury. **100% goes to prizes.**

    ✓ Tax-deductible
    ✓ Transparent on-chain
    ✓ No platform fees
    """)

with col2:
    st.markdown("""
    ### 🎫 Enter
    Get weekly entries by donating or participating in the community.

    ✓ No purchase necessary
    ✓ Fair odds
    ✓ Verifiable draw process
    """)

with col3:
    st.markdown("""
    ### 🏆 Win
    Winners are chosen by Chainlink VRF every week. Instant USDT payout.

    ✓ Provably fair
    ✓ Automatic distribution
    ✓ Public verification
    """)

st.divider()

# Interactive Demos
st.markdown("## 🎯 Interactive Demos")

tab1, tab2, tab3 = st.tabs(["📊 Odds Calculator", "💰 Treasury Impact", "🔒 VRF Explainer"])

with tab1:
    st.markdown("### Calculate Your Winning Odds")

    col1, col2 = st.columns(2)
    with col1:
        my_entries = st.slider("Your Weekly Entries", 1, 15, 1, key="odds_my")
    with col2:
        total_entries = st.slider("Total Pool Entries", my_entries, 10000, 1000, step=100, key="odds_total")

    odds = calculate_odds(my_entries, total_entries)
    odds_ratio = total_entries / my_entries if my_entries > 0 else 0

    col1, col2, col3 = st.columns([1, 2, 1])
    with col2:
        st.markdown(f"""
        <div style='text-align: center; padding: 2rem; background: rgba(81, 248, 197, 0.1); border-radius: 1rem; border: 2px solid #51F8C5;'>
            <h2 style='color: #51F8C5; margin: 0;'>{odds:.2f}%</h2>
            <p style='color: #F6C667; font-size: 1.2rem; margin: 0.5rem 0;'>1 in {odds_ratio:,.0f} chance</p>
            <p style='color: #8BC7FF; font-size: 0.9rem;'>{'Great odds!' if odds > 10 else 'Good luck!' if odds > 1 else 'Every entry counts!'}</p>
        </div>
        """, unsafe_allow_html=True)

    st.caption("*Illustrative calculation based on current inputs. Actual odds vary by weekly participation.")

with tab2:
    st.markdown("### See Your Donation Impact")

    col1, col2, col3 = st.columns(3)
    with col1:
        if st.button("$25", use_container_width=True):
            donation = 25
    with col2:
        if st.button("$100", use_container_width=True):
            donation = 100
    with col3:
        if st.button("$500", use_container_width=True):
            donation = 500

    donation = st.number_input("Or enter custom amount ($)", min_value=1, max_value=100000, value=100)

    additional_entries = donation // 10  # Example: $10 = 1 entry
    treasury_boost = donation

    st.markdown(f"""
    <div style='padding: 1.5rem; background: linear-gradient(135deg, rgba(246, 198, 103, 0.1), rgba(81, 248, 197, 0.1)); border-radius: 1rem; border: 1px solid rgba(246, 198, 103, 0.3);'>
        <h4 style='color: #F6C667;'>Your Impact</h4>
        <p>📥 Additional entries: <strong style='color: #51F8C5;'>+{additional_entries}</strong></p>
        <p>💰 Treasury boost: <strong style='color: #8BC7FF;'>${treasury_boost:,.2f}</strong></p>
        <p>⚡ Accelerates payout by: <strong style='color: #F6C667;'>~{max(1, donation // 100)} days</strong></p>
    </div>
    """, unsafe_allow_html=True)

    st.caption("*Illustrative calculation. Actual impact depends on total community participation.")

with tab3:
    st.markdown("### Verifiable Random Number Generation")

    st.markdown("""
    The UAD draw process uses **Chainlink VRF** (Verifiable Random Function) to ensure fair, transparent winner selection:

    1. **🔒 Pool Locked** - Weekly draw period ends. Entry pool is frozen on-chain.
    2. **⚡ VRF Request** - Chainlink VRF requested for provably random winner selection.
    3. **✅ Proof Generated** - Cryptographic proof of randomness verified on-chain.
    4. **💸 Winner Paid** - USDT automatically transferred to winner's wallet.

    Every step is **verifiable on-chain**. No centralized control. No manipulation possible.
    """)

    st.link_button("Learn about Chainlink VRF", "https://chain.link/vrf")

st.divider()

# Transparency Panel
st.markdown("## 🔍 100% Transparent")

col1, col2 = st.columns(2)

with col1:
    st.markdown("### 💰 On-Chain Treasury")
    st.metric("Current Balance", f"${stats['treasury_balance']:,.2f}")
    st.metric("Protocol Fee", "0%", delta="→ 0.5% when AI dividends begin")
    st.metric("Weekly Inflow (avg)", "$8,250.75")

    st.markdown("#### Recent Transactions")
    st.markdown("""
    - ➕ $500 • 2 hours ago • [View](https://etherscan.io)
    - ➕ $1,000 • 5 hours ago • [View](https://etherscan.io)
    - ➖ $5,000 • 7 days ago (Payout) • [View](https://etherscan.io)
    """)

with col2:
    st.markdown("### 🎰 This Week's Draw")
    st.metric("Prize Pool", f"${stats['this_week_prize']:,.2f}")
    st.metric("Total Entries", f"{stats['entries_so_far']:,}")

    time_remaining = stats['next_draw'] - datetime.now()
    days = time_remaining.days
    hours = time_remaining.seconds // 3600
    st.metric("Draw Ends In", f"{days}d {hours}h")

    st.markdown(f"**Started**: {(datetime.now() - timedelta(days=3)).strftime('%Y-%m-%d')}")

    st.button("🎟️ Enter This Week's Draw", key="enter_transparency", use_container_width=True)

st.divider()

# Recent Winners
st.markdown("## 🏆 Recent Winners")

winners = get_recent_winners()
st.dataframe(
    winners,
    use_container_width=True,
    hide_index=True,
    column_config={
        "Week": st.column_config.NumberColumn("Week #", format="%d"),
        "Address": st.column_config.TextColumn("Winner"),
        "Amount": st.column_config.NumberColumn("Prize", format="$%d"),
        "Date": st.column_config.DateColumn("Date"),
    }
)

st.caption("All winners are verifiable on-chain. Click to view transaction proof.")

st.divider()

# Future Vision
st.markdown("## ✨ The Future: AI Dividends")

st.markdown("""
<div style='text-align: center; padding: 3rem 1rem;'>
    <h3 style='font-size: 2.5rem; color: #51F8C5;'>The moment AI pays society back.</h3>
    <p style='font-size: 1.2rem; color: #8BC7FF; max-width: 800px; margin: 1rem auto;'>
    As industries automate, UAD will route a share of corporate AI dividends to people who need it most.
    What starts as donations today becomes sustainable basic income tomorrow.
    </p>
</div>
""", unsafe_allow_html=True)

col1, col2, col3 = st.columns(3)
with col1:
    st.markdown("""
    #### 🏢 Corporate Automation
    Companies adopt AI to automate significant workforce functions.
    """)
with col2:
    st.markdown("""
    #### 📈 AI Dividend Agreements
    Corporations commit a portion of AI-driven profits to UAD.
    """)
with col3:
    st.markdown("""
    #### 🌍 Universal Distribution
    AI dividends flow to people globally, creating true basic income.
    """)

# Newsletter signup
st.markdown("### 📧 Stay Updated on AI Dividends")
email = st.text_input("Enter your email to get notified when AI dividends begin flowing:")
if st.button("Subscribe"):
    if email and "@" in email:
        st.success("✅ Subscribed! Check your email for confirmation.")
    else:
        st.error("Please enter a valid email address.")

st.divider()

# FAQ
st.markdown("## ❓ Frequently Asked Questions")

with st.expander("Is this legal in my country?"):
    st.write("""
    UAD operates as a donation-funded grant system, not a lottery or gambling service. However, legal frameworks vary by jurisdiction.
    We recommend consulting local laws regarding online grants and donations. UAD is structured as a non-profit foundation with transparent, verifiable payouts.
    """)

with st.expander("Is UAD a charity or non-profit?"):
    st.write("""
    Yes, UAD is structured as a non-profit foundation dedicated to distributing AI-driven wealth. 100% of donations currently go to prize pools.
    Once corporate AI dividends begin, a small protocol fee (0.5%) will cover operational costs, with the rest distributed to recipients.
    """)

with st.expander("Which blockchain networks are supported?"):
    st.write("""
    UAD currently operates on Ethereum mainnet using USDT (Tether) for maximum stability and global accessibility.
    We may expand to additional EVM-compatible chains in the future based on community demand and gas efficiency.
    """)

with st.expander("How are winners chosen?"):
    st.write("""
    Winners are selected using Chainlink VRF (Verifiable Random Function), a provably fair and transparent randomness solution.
    Every week, the entry pool is locked, VRF generates cryptographic proof of randomness, and the winner is automatically paid.
    All steps are verifiable on-chain.
    """)

with st.expander("Can I donate anonymously?"):
    st.write("""
    Yes! Blockchain transactions are pseudonymous. You can donate from any wallet without providing personal information.
    Your wallet address will be visible on-chain, but it is not directly linked to your identity unless you choose to share it.
    """)

with st.expander("When will AI dividends actually start?"):
    st.write("""
    AI dividends will begin when corporations commit to contributing a portion of their AI-driven profits.
    We are actively negotiating with potential partners and will announce updates as agreements are finalized.
    Subscribe to our newsletter to stay informed.
    """)

st.divider()

# Final CTA
st.markdown("""
<div style='text-align: center; padding: 3rem 1rem; background: linear-gradient(135deg, rgba(81, 248, 197, 0.1), rgba(139, 199, 255, 0.1)); border-radius: 1rem; margin: 2rem 0;'>
    <h2 style='color: #51F8C5; font-size: 2.5rem;'>Ready to join the future of income?</h2>
    <p style='font-size: 1.2rem; color: #8BC7FF; margin: 1rem 0;'>
    Whether you donate to build the treasury or enter to receive dividends,<br>
    every action brings us closer to universal AI-driven basic income.
    </p>
</div>
""", unsafe_allow_html=True)

col1, col2, col3 = st.columns([1, 1, 1])
with col1:
    st.write("")
with col2:
    st.button("🎁 Enter This Week's Draw", key="final_enter", use_container_width=True)
    st.button("💸 Donate USDT", key="final_donate", use_container_width=True)
with col3:
    st.write("")

st.markdown("""
<p style='text-align: center; color: #8BC7FF; margin-top: 1rem;'>
100% transparent • Provably fair • Open-source
</p>
""", unsafe_allow_html=True)

st.divider()

# Footer
st.markdown("""
<div style='text-align: center; padding: 2rem; color: #8BC7FF;'>
    <p><strong>Universal AI Dividend Foundation</strong></p>
    <p>
    <a href='#how-it-works'>How It Works</a> •
    <a href='#transparency'>Transparency</a> •
    <a href='#winners'>Winners</a> •
    <a href='#faq'>FAQ</a> •
    <a href='https://github.com/universal-ai-dividend'>GitHub</a> •
    <a href='https://twitter.com/UniversalAIDivd'>Twitter</a>
    </p>
    <p style='font-size: 0.9rem; color: #666;'>
    © 2024 Universal AI Dividend Foundation. All rights reserved.
    </p>
</div>
""", unsafe_allow_html=True)

# Analytics tracking (PostHog)
st.markdown("""
<script>
// PostHog analytics would go here in production
console.log('Page view tracked');
</script>
""", unsafe_allow_html=True)
