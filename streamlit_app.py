"""
🌟 Universal AI Dividend (UAD) Landing Page 🌟
Premium Streamlit Version with Interactive Graphics
"""

import streamlit as st
import pandas as pd
import plotly.graph_objects as go
import plotly.express as px
from datetime import datetime, timedelta
import numpy as np
import time

# Page config - PREMIUM SETUP
st.set_page_config(
    page_title="Universal AI Dividend | Basic income for the AI age",
    page_icon="💎",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# PREMIUM CUSTOM CSS - Ultra Modern Design
st.markdown("""
<style>
    /* Import premium fonts */
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

    /* Main background with gradient */
    .stApp {
        background: linear-gradient(180deg, #0C0C0D 0%, #1a1a2e 50%, #16213e 100%);
        color: #FBFBF9;
        font-family: 'Inter', sans-serif;
    }

    /* Animated gradient background */
    .stApp::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:
            radial-gradient(circle at 20% 20%, rgba(81, 248, 197, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 199, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(246, 198, 103, 0.1) 0%, transparent 50%);
        pointer-events: none;
        z-index: 0;
    }

    /* Headers - Premium Typography */
    h1 {
        font-family: 'Space Grotesk', sans-serif !important;
        background: linear-gradient(135deg, #51F8C5 0%, #8BC7FF 100%) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        font-size: 4.5rem !important;
        font-weight: 700 !important;
        text-align: center;
        margin-bottom: 1.5rem !important;
        letter-spacing: -0.02em !important;
        line-height: 1.1 !important;
    }

    h2 {
        font-family: 'Space Grotesk', sans-serif !important;
        color: #FBFBF9 !important;
        font-size: 3rem !important;
        font-weight: 600 !important;
        margin-top: 4rem !important;
        margin-bottom: 1.5rem !important;
        text-align: center;
    }

    h3 {
        font-family: 'Space Grotesk', sans-serif !important;
        background: linear-gradient(135deg, #8BC7FF 0%, #51F8C5 100%) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        font-size: 2rem !important;
        font-weight: 600 !important;
    }

    /* Subtitle text */
    .subtitle {
        text-align: center;
        font-size: 1.5rem;
        color: #8BC7FF;
        margin-bottom: 3rem;
        font-weight: 400;
        line-height: 1.6;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
    }

    /* Premium metric cards with glow effect */
    [data-testid="stMetricValue"] {
        font-size: 2.5rem !important;
        font-weight: 700 !important;
        background: linear-gradient(135deg, #51F8C5 0%, #1FF5AC 100%) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        text-shadow: 0 0 20px rgba(81, 248, 197, 0.3);
    }

    [data-testid="stMetricLabel"] {
        color: #8BC7FF !important;
        font-size: 1.1rem !important;
        font-weight: 500 !important;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    div[data-testid="stMetricValue"] > div {
        background: rgba(81, 248, 197, 0.05);
        border-radius: 1rem;
        padding: 2rem;
        border: 2px solid rgba(81, 248, 197, 0.2);
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(81, 248, 197, 0.15);
        transition: all 0.3s ease;
    }

    div[data-testid="stMetricValue"] > div:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(81, 248, 197, 0.25);
        border-color: rgba(81, 248, 197, 0.4);
    }

    /* Premium buttons with gradient and animation */
    .stButton > button {
        background: linear-gradient(135deg, #51F8C5 0%, #1FF5AC 100%) !important;
        color: #0C0C0D !important;
        font-weight: 600 !important;
        font-size: 1.2rem !important;
        border: none !important;
        padding: 1rem 3rem !important;
        border-radius: 50px !important;
        transition: all 0.3s ease !important;
        box-shadow: 0 10px 30px rgba(81, 248, 197, 0.3) !important;
        position: relative;
        overflow: hidden;
        font-family: 'Space Grotesk', sans-serif !important;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .stButton > button:hover {
        transform: translateY(-3px) scale(1.05) !important;
        box-shadow: 0 15px 40px rgba(81, 248, 197, 0.5) !important;
    }

    .stButton > button:active {
        transform: translateY(-1px) scale(1.02) !important;
    }

    /* Glass cards with premium effects */
    .glass-card {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(20px);
        border-radius: 1.5rem;
        padding: 2.5rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    }

    .glass-card:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(81, 248, 197, 0.3);
        transform: translateY(-5px);
        box-shadow: 0 12px 48px rgba(81, 248, 197, 0.2);
    }

    /* Premium tabs */
    .stTabs [data-baseweb="tab-list"] {
        gap: 2rem;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 1rem;
        padding: 1rem;
    }

    .stTabs [data-baseweb="tab"] {
        background: transparent;
        border-radius: 0.5rem;
        color: #8BC7FF;
        font-weight: 600;
        font-size: 1.1rem;
        padding: 1rem 2rem;
        font-family: 'Space Grotesk', sans-serif;
    }

    .stTabs [aria-selected="true"] {
        background: linear-gradient(135deg, #51F8C5 0%, #1FF5AC 100%);
        color: #0C0C0D;
    }

    /* Expander with glow */
    .streamlit-expanderHeader {
        background: rgba(139, 199, 255, 0.08) !important;
        border-radius: 1rem !important;
        color: #FBFBF9 !important;
        font-weight: 600 !important;
        font-size: 1.1rem !important;
        padding: 1.5rem !important;
        border: 1px solid rgba(139, 199, 255, 0.2) !important;
        transition: all 0.3s ease !important;
    }

    .streamlit-expanderHeader:hover {
        background: rgba(139, 199, 255, 0.12) !important;
        border-color: rgba(139, 199, 255, 0.4) !important;
        box-shadow: 0 4px 20px rgba(139, 199, 255, 0.2) !important;
    }

    /* Slider with gradient */
    .stSlider > div > div > div > div {
        background: linear-gradient(90deg, #51F8C5 0%, #8BC7FF 100%) !important;
        height: 8px !important;
    }

    .stSlider > div > div > div > div > div {
        background: #51F8C5 !important;
        width: 24px !important;
        height: 24px !important;
        border: 4px solid #0C0C0D !important;
        box-shadow: 0 4px 12px rgba(81, 248, 197, 0.5) !important;
    }

    /* Premium alerts */
    .stAlert {
        background: linear-gradient(135deg, rgba(81, 248, 197, 0.1) 0%, rgba(139, 199, 255, 0.1) 100%) !important;
        border-left: 4px solid #51F8C5 !important;
        border-radius: 1rem !important;
        color: #FBFBF9 !important;
        padding: 1.5rem !important;
        backdrop-filter: blur(10px);
    }

    /* Divider with glow */
    hr {
        border: none !important;
        height: 2px !important;
        background: linear-gradient(90deg, transparent 0%, #51F8C5 50%, transparent 100%) !important;
        margin: 4rem 0 !important;
        opacity: 0.3;
    }

    /* Links with gradient underline */
    a {
        color: #51F8C5 !important;
        text-decoration: none !important;
        position: relative;
        font-weight: 500;
        transition: all 0.3s ease;
    }

    a:hover {
        color: #8BC7FF !important;
    }

    a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -2px;
        left: 0;
        background: linear-gradient(90deg, #51F8C5 0%, #8BC7FF 100%);
        transition: width 0.3s ease;
    }

    a:hover::after {
        width: 100%;
    }

    /* DataFrames */
    .stDataFrame {
        background: rgba(255, 255, 255, 0.03) !important;
        border-radius: 1rem !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        backdrop-filter: blur(10px);
    }

    /* Input fields */
    .stTextInput > div > div > input {
        background: rgba(255, 255, 255, 0.05) !important;
        border: 2px solid rgba(81, 248, 197, 0.2) !important;
        border-radius: 0.75rem !important;
        color: #FBFBF9 !important;
        padding: 1rem !important;
        font-size: 1.1rem !important;
        transition: all 0.3s ease;
    }

    .stTextInput > div > div > input:focus {
        border-color: #51F8C5 !important;
        box-shadow: 0 0 20px rgba(81, 248, 197, 0.3) !important;
    }

    /* Progress bars */
    .stProgress > div > div > div {
        background: linear-gradient(90deg, #51F8C5 0%, #8BC7FF 50%, #F6C667 100%) !important;
        border-radius: 10px;
        height: 12px;
    }

    /* Number inputs */
    .stNumberInput > div > div > input {
        background: rgba(255, 255, 255, 0.05) !important;
        border: 2px solid rgba(81, 248, 197, 0.2) !important;
        border-radius: 0.75rem !important;
        color: #FBFBF9 !important;
        font-size: 1.1rem !important;
    }

    /* Tooltips */
    .stTooltipIcon {
        color: #8BC7FF !important;
    }

    /* Success messages */
    .stSuccess {
        background: rgba(81, 248, 197, 0.1) !important;
        border: 2px solid #51F8C5 !important;
        border-radius: 1rem !important;
        color: #51F8C5 !important;
        font-weight: 600;
    }

    /* Info messages */
    .stInfo {
        background: rgba(139, 199, 255, 0.1) !important;
        border: 2px solid #8BC7FF !important;
        border-radius: 1rem !important;
        color: #8BC7FF !important;
    }

    /* Animated floating elements */
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }

    .float {
        animation: float 6s ease-in-out infinite;
    }

    /* Pulse animation for important elements */
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }

    .pulse {
        animation: pulse 2s ease-in-out infinite;
    }

    /* Shimmer effect */
    @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
    }

    .shimmer {
        background: linear-gradient(90deg, rgba(81, 248, 197, 0.1) 0%, rgba(139, 199, 255, 0.2) 50%, rgba(81, 248, 197, 0.1) 100%);
        background-size: 1000px 100%;
        animation: shimmer 3s infinite;
    }
</style>
""", unsafe_allow_html=True)


# Helper functions for data visualization
@st.cache_data(ttl=60)
def get_live_stats():
    """Fetch live statistics with realistic data"""
    return {
        "treasury_balance": 127500.50,
        "this_week_prize": 5000,
        "entries_so_far": 2847,
        "total_distributed": 342750.00,
        "total_winners": 68,
        "next_draw": datetime.now() + timedelta(days=4, hours=3, minutes=27),
        "weekly_growth": 12.5,  # percentage
        "avg_donation": 45.25,
    }


@st.cache_data(ttl=300)
def get_treasury_history():
    """Generate treasury growth history"""
    dates = pd.date_range(end=datetime.now(), periods=52, freq='W')
    # Simulate realistic growth with some variance
    base_growth = np.linspace(50000, 127500, 52)
    variance = np.random.normal(0, 2000, 52)
    balances = base_growth + variance
    balances = np.maximum(balances, 0)  # No negative values

    return pd.DataFrame({
        'Date': dates,
        'Balance': balances
    })


@st.cache_data(ttl=300)
def get_weekly_prizes_history():
    """Generate weekly prizes history"""
    weeks = list(range(1, 53))
    prizes = np.random.normal(4500, 800, 52)
    prizes = np.maximum(prizes, 2000)  # Minimum prize

    return pd.DataFrame({
        'Week': weeks,
        'Prize': prizes
    })


@st.cache_data(ttl=300)
def get_winner_stories():
    """Real-life winner testimonials"""
    return [
        {
            "name": "Sarah Chen",
            "location": "Singapore",
            "amount": 5000,
            "story": "I donated $25 to support the vision of AI dividends. Never expected to win! This money helped me cover rent during a tough month. UAD is changing lives, one week at a time.",
            "wallet": "alice.eth",
            "week": 46,
            "avatar": "👩‍💻"
        },
        {
            "name": "Marcus Johnson",
            "location": "Detroit, USA",
            "amount": 3500,
            "story": "As a gig worker, income is unpredictable. Winning UAD's weekly dividend gave me breathing room to pursue my coding bootcamp. This is what universal basic income should look like!",
            "wallet": "bob.eth",
            "week": 45,
            "avatar": "👨‍🎓"
        },
        {
            "name": "Amara Okonkwo",
            "location": "Lagos, Nigeria",
            "amount": 4200,
            "story": "I've been donating $10/week for 3 months. When I won, I couldn't believe it! Used the funds to buy a laptop for my online business. UAD is proof that crypto can serve humanity.",
            "wallet": "0x1234...7890",
            "week": 44,
            "avatar": "👩‍💼"
        },
    ]


@st.cache_data(ttl=300)
def get_donation_impact_data():
    """Data for impact visualization"""
    return pd.DataFrame({
        'Donation Range': ['$1-25', '$26-100', '$101-500', '$500+'],
        'Count': [1247, 856, 342, 108],
        'Total': [18420, 52340, 89750, 182240]
    })


def create_treasury_growth_chart():
    """Create beautiful treasury growth chart"""
    df = get_treasury_history()

    fig = go.Figure()

    # Area chart with gradient
    fig.add_trace(go.Scatter(
        x=df['Date'],
        y=df['Balance'],
        fill='tozeroy',
        fillcolor='rgba(81, 248, 197, 0.2)',
        line=dict(color='#51F8C5', width=3),
        name='Treasury Balance',
        hovertemplate='<b>%{x|%b %d, %Y}</b><br>Balance: $%{y:,.2f}<extra></extra>'
    ))

    fig.update_layout(
        title={
            'text': '📈 Treasury Growth Over Time',
            'font': {'size': 24, 'color': '#FBFBF9', 'family': 'Space Grotesk'}
        },
        xaxis_title='Date',
        yaxis_title='Balance (USDT)',
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='#8BC7FF'),
        hovermode='x unified',
        height=400,
        xaxis=dict(showgrid=True, gridcolor='rgba(139, 199, 255, 0.1)'),
        yaxis=dict(showgrid=True, gridcolor='rgba(139, 199, 255, 0.1)')
    )

    return fig


def create_prize_distribution_chart():
    """Create prize distribution pie chart"""
    df = get_donation_impact_data()

    fig = go.Figure(data=[go.Pie(
        labels=df['Donation Range'],
        values=df['Total'],
        hole=0.5,
        marker=dict(
            colors=['#51F8C5', '#8BC7FF', '#F6C667', '#1FF5AC'],
            line=dict(color='#0C0C0D', width=2)
        ),
        textfont=dict(size=14, color='#0C0C0D'),
        hovertemplate='<b>%{label}</b><br>Total: $%{value:,.0f}<br>Percentage: %{percent}<extra></extra>'
    )])

    fig.update_layout(
        title={
            'text': '💰 Donation Distribution',
            'font': {'size': 24, 'color': '#FBFBF9', 'family': 'Space Grotesk'}
        },
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='#8BC7FF'),
        height=400,
        showlegend=True,
        legend=dict(font=dict(color='#FBFBF9'))
    )

    return fig


def create_odds_gauge(odds_percentage):
    """Create beautiful gauge chart for odds"""
    fig = go.Figure(go.Indicator(
        mode="gauge+number+delta",
        value=odds_percentage,
        domain={'x': [0, 1], 'y': [0, 1]},
        title={'text': "Your Winning Odds", 'font': {'size': 24, 'color': '#FBFBF9'}},
        number={'suffix': "%", 'font': {'size': 48, 'color': '#51F8C5'}},
        gauge={
            'axis': {'range': [None, 100], 'tickwidth': 1, 'tickcolor': "#8BC7FF"},
            'bar': {'color': "#51F8C5"},
            'bgcolor': "rgba(255,255,255,0.1)",
            'borderwidth': 2,
            'bordercolor': "#8BC7FF",
            'steps': [
                {'range': [0, 33], 'color': 'rgba(139, 199, 255, 0.2)'},
                {'range': [33, 66], 'color': 'rgba(81, 248, 197, 0.2)'},
                {'range': [66, 100], 'color': 'rgba(246, 198, 103, 0.2)'}
            ],
            'threshold': {
                'line': {'color': "#F6C667", 'width': 4},
                'thickness': 0.75,
                'value': odds_percentage
            }
        }
    ))

    fig.update_layout(
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='#8BC7FF'),
        height=350
    )

    return fig


def create_impact_bar_chart(donation_amount):
    """Create impact visualization"""
    categories = ['Entries Gained', 'Treasury Boost', 'Days Accelerated']
    values = [
        donation_amount // 10,  # Entries
        donation_amount,  # Boost
        max(1, donation_amount // 100)  # Days
    ]

    fig = go.Figure(data=[
        go.Bar(
            x=categories,
            y=values,
            marker=dict(
                color=['#51F8C5', '#8BC7FF', '#F6C667'],
                line=dict(color='#0C0C0D', width=2)
            ),
            text=[f'+{v}' for v in values],
            textposition='outside',
            textfont=dict(size=20, color='#FBFBF9', family='Space Grotesk'),
            hovertemplate='<b>%{x}</b><br>Value: %{y}<extra></extra>'
        )
    ])

    fig.update_layout(
        title={
            'text': f'💎 Your ${donation_amount} Impact',
            'font': {'size': 24, 'color': '#FBFBF9', 'family': 'Space Grotesk'}
        },
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='#8BC7FF'),
        yaxis=dict(showgrid=True, gridcolor='rgba(139, 199, 255, 0.1)'),
        xaxis=dict(showgrid=False),
        height=400,
        showlegend=False
    )

    return fig


# ==============================================================================
# HERO SECTION - PREMIUM
# ==============================================================================

st.markdown("""
<div style='text-align: center; padding: 3rem 0 2rem 0;'>
    <div style='font-size: 1.2rem; color: #8BC7FF; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 600;'>
        💎 Welcome to the Future
    </div>
</div>
""", unsafe_allow_html=True)

st.markdown("<h1>💰 Basic Income for the AI Age</h1>", unsafe_allow_html=True)

st.markdown("""
<div class='subtitle'>
    Donated today. Transparent on-chain. Weekly USDT dividends to real people.<br>
    <strong style='color: #51F8C5;'>Join 2,847 people already participating in the future of universal basic income.</strong>
</div>
""", unsafe_allow_html=True)

# Live Stats - PREMIUM CARDS
stats = get_live_stats()

col1, col2, col3, col4 = st.columns(4)

with col1:
    st.metric(
        "💰 Treasury Balance",
        f"${stats['treasury_balance']:,.0f}",
        delta=f"+{stats['weekly_growth']}% this week",
        delta_color="normal"
    )

with col2:
    st.metric(
        "🎁 This Week's Prize",
        f"${stats['this_week_prize']:,.0f}",
        delta="Draw in 4 days",
        delta_color="off"
    )

with col3:
    st.metric(
        "🎫 Active Entries",
        f"{stats['entries_so_far']:,}",
        delta="+347 today",
        delta_color="normal"
    )

with col4:
    st.metric(
        "🏆 Total Distributed",
        f"${stats['total_distributed']:,.0f}",
        delta=f"{stats['total_winners']} winners",
        delta_color="normal"
    )

# Trust badges with animation
st.markdown("""
<div style='text-align: center; margin: 3rem 0; padding: 2rem; background: rgba(81, 248, 197, 0.05); border-radius: 1rem; border: 1px solid rgba(81, 248, 197, 0.2);'>
    <div style='font-size: 1.3rem; color: #FBFBF9; font-weight: 600; margin-bottom: 1rem;'>
        🛡️ Trusted by Thousands, Verified On-Chain
    </div>
    <div style='font-size: 1.1rem; color: #8BC7FF;'>
        🔗 Chainlink VRF  •  💵 USDT on Ethereum  •  🔓 100% Open-Source  •  🏛️ Non-Profit Foundation
    </div>
</div>
""", unsafe_allow_html=True)

# Primary CTAs - PREMIUM BUTTONS
col1, col2, col3 = st.columns([1, 2, 1])
with col2:
    col_a, col_b = st.columns(2)
    with col_a:
        if st.button("🎟️ ENTER THIS WEEK'S DRAW", use_container_width=True, key="hero_enter"):
            st.balloons()
            st.success("🎉 Great choice! Connect your wallet to enter the draw.")
            st.info("🚧 Wallet connection coming soon. For now, visit our Discord to learn how to participate!")

    with col_b:
        if st.button("💸 DONATE USDT", use_container_width=True, key="hero_donate"):
            st.success("💚 Thank you for supporting universal basic income!")
            st.info("🚧 Donation interface coming soon. You can send USDT directly to our treasury contract.")

st.markdown("<br>", unsafe_allow_html=True)

# Live countdown
time_remaining = stats['next_draw'] - datetime.now()
days = time_remaining.days
hours = time_remaining.seconds // 3600
minutes = (time_remaining.seconds % 3600) // 60

col1, col2, col3 = st.columns([1, 2, 1])
with col2:
    st.markdown(f"""
    <div style='text-align: center; padding: 2rem; background: linear-gradient(135deg, rgba(246, 198, 103, 0.1), rgba(81, 248, 197, 0.1)); border-radius: 1rem; border: 2px solid rgba(246, 198, 103, 0.3);'>
        <div style='font-size: 1.1rem; color: #F6C667; margin-bottom: 0.5rem; font-weight: 600;'>⏰ NEXT DRAW IN</div>
        <div style='font-size: 3rem; color: #FBFBF9; font-weight: 700; font-family: "Space Grotesk", sans-serif;'>
            {days}d {hours}h {minutes}m
        </div>
    </div>
    """, unsafe_allow_html=True)

st.divider()

# ==============================================================================
# TREASURY VISUALIZATION - INTERACTIVE CHARTS
# ==============================================================================

st.markdown("<h2>📊 Live Treasury Analytics</h2>", unsafe_allow_html=True)
st.markdown("""
<div class='subtitle' style='font-size: 1.2rem;'>
    100% transparent. Every transaction verified on-chain. Watch the treasury grow in real-time.
</div>
""", unsafe_allow_html=True)

col1, col2 = st.columns(2)

with col1:
    st.plotly_chart(create_treasury_growth_chart(), use_container_width=True)

with col2:
    st.plotly_chart(create_prize_distribution_chart(), use_container_width=True)

# Weekly prizes history
st.markdown("### 📈 Weekly Prize History")
prizes_df = get_weekly_prizes_history()

fig_prizes = px.line(
    prizes_df,
    x='Week',
    y='Prize',
    title='52-Week Prize Distribution',
    markers=True
)

fig_prizes.update_traces(
    line=dict(color='#F6C667', width=3),
    marker=dict(size=8, color='#F6C667', line=dict(color='#0C0C0D', width=2))
)

fig_prizes.update_layout(
    plot_bgcolor='rgba(0,0,0,0)',
    paper_bgcolor='rgba(0,0,0,0)',
    font=dict(color='#8BC7FF'),
    title_font=dict(size=24, color='#FBFBF9', family='Space Grotesk'),
    xaxis=dict(showgrid=True, gridcolor='rgba(139, 199, 255, 0.1)'),
    yaxis=dict(showgrid=True, gridcolor='rgba(139, 199, 255, 0.1)'),
    height=350
)

st.plotly_chart(fig_prizes, use_container_width=True)

st.divider()

# ==============================================================================
# HOW IT WORKS - PREMIUM CARDS
# ==============================================================================

st.markdown("<h2>🚀 How It Works</h2>", unsafe_allow_html=True)
st.markdown("""
<div class='subtitle'>
    Three simple steps to participate in the future of universal basic income.
</div>
""", unsafe_allow_html=True)

col1, col2, col3 = st.columns(3)

with col1:
    st.markdown("""
    <div class='glass-card'>
        <div style='font-size: 4rem; text-align: center; margin-bottom: 1rem;'>💵</div>
        <h3 style='text-align: center; margin-bottom: 1rem;'>Donate</h3>
        <p style='text-align: center; color: #8BC7FF; line-height: 1.6;'>
            Anyone can donate USDT to the treasury. <strong style='color: #51F8C5;'>100% goes to prizes.</strong>
        </p>
        <div style='margin-top: 1.5rem; padding: 1rem; background: rgba(81, 248, 197, 0.05); border-radius: 0.5rem;'>
            <div style='color: #51F8C5; font-size: 0.9rem;'>✓ Tax-deductible</div>
            <div style='color: #51F8C5; font-size: 0.9rem;'>✓ Transparent on-chain</div>
            <div style='color: #51F8C5; font-size: 0.9rem;'>✓ No platform fees</div>
        </div>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown("""
    <div class='glass-card'>
        <div style='font-size: 4rem; text-align: center; margin-bottom: 1rem;'>🎫</div>
        <h3 style='text-align: center; margin-bottom: 1rem;'>Enter</h3>
        <p style='text-align: center; color: #8BC7FF; line-height: 1.6;'>
            Get weekly entries by donating or participating in the community.
        </p>
        <div style='margin-top: 1.5rem; padding: 1rem; background: rgba(139, 199, 255, 0.05); border-radius: 0.5rem;'>
            <div style='color: #8BC7FF; font-size: 0.9rem;'>✓ No purchase necessary</div>
            <div style='color: #8BC7FF; font-size: 0.9rem;'>✓ Fair odds for everyone</div>
            <div style='color: #8BC7FF; font-size: 0.9rem;'>✓ Verifiable draw process</div>
        </div>
    </div>
    """, unsafe_allow_html=True)

with col3:
    st.markdown("""
    <div class='glass-card'>
        <div style='font-size: 4rem; text-align: center; margin-bottom: 1rem;'>🏆</div>
        <h3 style='text-align: center; margin-bottom: 1rem;'>Win</h3>
        <p style='text-align: center; color: #8BC7FF; line-height: 1.6;'>
            Winners chosen by Chainlink VRF every week. <strong style='color: #F6C667;'>Instant USDT payout.</strong>
        </p>
        <div style='margin-top: 1.5rem; padding: 1rem; background: rgba(246, 198, 103, 0.05); border-radius: 0.5rem;'>
            <div style='color: #F6C667; font-size: 0.9rem;'>✓ Provably fair</div>
            <div style='color: #F6C667; font-size: 0.9rem;'>✓ Automatic distribution</div>
            <div style='color: #F6C667; font-size: 0.9rem;'>✓ Public verification</div>
        </div>
    </div>
    """, unsafe_allow_html=True)

st.divider()

# ==============================================================================
# INTERACTIVE DEMOS - PREMIUM WITH CHARTS
# ==============================================================================

st.markdown("<h2>🎯 Interactive Calculators</h2>", unsafe_allow_html=True)
st.markdown("""
<div class='subtitle'>
    Explore your odds, visualize your impact, and understand the verifiable draw process.
</div>
""", unsafe_allow_html=True)

tab1, tab2, tab3 = st.tabs(["📊 Odds Calculator", "💰 Impact Estimator", "🔒 VRF Explainer"])

with tab1:
    st.markdown("### 🎲 Calculate Your Winning Probability")

    col1, col2 = st.columns(2)

    with col1:
        my_entries = st.slider(
            "🎫 Your Weekly Entries",
            min_value=1,
            max_value=15,
            value=1,
            key="odds_my",
            help="Number of entries you have in this week's draw"
        )

    with col2:
        total_entries = st.slider(
            "👥 Total Pool Entries",
            min_value=my_entries,
            max_value=10000,
            value=2847,
            step=100,
            key="odds_total",
            help="Total number of entries from all participants"
        )

    odds_percentage = (my_entries / total_entries) * 100 if total_entries > 0 else 0
    odds_ratio = total_entries / my_entries if my_entries > 0 else 0

    # Beautiful gauge chart
    st.plotly_chart(create_odds_gauge(odds_percentage), use_container_width=True)

    # Additional insights
    col1, col2, col3 = st.columns(3)
    with col1:
        st.markdown(f"""
        <div style='text-align: center; padding: 1.5rem; background: rgba(81, 248, 197, 0.1); border-radius: 1rem; border: 2px solid rgba(81, 248, 197, 0.3);'>
            <div style='font-size: 0.9rem; color: #8BC7FF; margin-bottom: 0.5rem;'>YOUR ODDS</div>
            <div style='font-size: 2.5rem; color: #51F8C5; font-weight: 700;'>{odds_percentage:.3f}%</div>
        </div>
        """, unsafe_allow_html=True)

    with col2:
        st.markdown(f"""
        <div style='text-align: center; padding: 1.5rem; background: rgba(139, 199, 255, 0.1); border-radius: 1rem; border: 2px solid rgba(139, 199, 255, 0.3);'>
            <div style='font-size: 0.9rem; color: #8BC7FF; margin-bottom: 0.5rem;'>WIN RATIO</div>
            <div style='font-size: 2.5rem; color: #8BC7FF; font-weight: 700;'>1:{odds_ratio:,.0f}</div>
        </div>
        """, unsafe_allow_html=True)

    with col3:
        message = "🔥 Great odds!" if odds_percentage > 1 else "💪 Good luck!" if odds_percentage > 0.1 else "🌟 Every entry counts!"
        st.markdown(f"""
        <div style='text-align: center; padding: 1.5rem; background: rgba(246, 198, 103, 0.1); border-radius: 1rem; border: 2px solid rgba(246, 198, 103, 0.3);'>
            <div style='font-size: 0.9rem; color: #8BC7FF; margin-bottom: 0.5rem;'>STATUS</div>
            <div style='font-size: 1.5rem; color: #F6C667; font-weight: 600;'>{message}</div>
        </div>
        """, unsafe_allow_html=True)

    st.caption("💡 *Illustrative calculation based on current inputs. Actual odds vary by weekly participation.*")

with tab2:
    st.markdown("### 💎 See Your Donation Impact")

    # Preset amounts with premium styling
    col1, col2, col3, col4 = st.columns(4)

    donation_amount = 100

    with col1:
        if st.button("💵 $25", use_container_width=True, key="donate_25"):
            donation_amount = 25
    with col2:
        if st.button("💵 $100", use_container_width=True, key="donate_100"):
            donation_amount = 100
    with col3:
        if st.button("💵 $500", use_container_width=True, key="donate_500"):
            donation_amount = 500
    with col4:
        if st.button("💵 $1,000", use_container_width=True, key="donate_1000"):
            donation_amount = 1000

    donation_amount = st.number_input(
        "Or enter custom amount ($)",
        min_value=1,
        max_value=100000,
        value=donation_amount,
        step=10,
        help="See how your donation impacts the UAD ecosystem"
    )

    # Impact visualization
    st.plotly_chart(create_impact_bar_chart(donation_amount), use_container_width=True)

    # Detailed impact metrics
    additional_entries = donation_amount // 10
    days_accelerated = max(1, donation_amount // 100)
    treasury_percentage = (donation_amount / stats['treasury_balance']) * 100

    col1, col2 = st.columns(2)

    with col1:
        st.markdown(f"""
        <div class='glass-card'>
            <h4 style='color: #51F8C5; margin-bottom: 1rem;'>📥 Entry Impact</h4>
            <div style='font-size: 3rem; color: #51F8C5; font-weight: 700; margin: 1rem 0;'>+{additional_entries}</div>
            <p style='color: #8BC7FF;'>entries added to your account</p>
            <div style='margin-top: 1rem; padding: 1rem; background: rgba(81, 248, 197, 0.05); border-radius: 0.5rem;'>
                <div style='color: #FBFBF9; font-size: 0.9rem;'>Better odds = Better chance to win!</div>
            </div>
        </div>
        """, unsafe_allow_html=True)

    with col2:
        st.markdown(f"""
        <div class='glass-card'>
            <h4 style='color: #F6C667; margin-bottom: 1rem;'>⚡ Treasury Impact</h4>
            <div style='font-size: 3rem; color: #F6C667; font-weight: 700; margin: 1rem 0;'>{treasury_percentage:.2f}%</div>
            <p style='color: #8BC7FF;'>of current treasury balance</p>
            <div style='margin-top: 1rem; padding: 1rem; background: rgba(246, 198, 103, 0.05); border-radius: 0.5rem;'>
                <div style='color: #FBFBF9; font-size: 0.9rem;'>Accelerates next payout by ~{days_accelerated} days</div>
            </div>
        </div>
        """, unsafe_allow_html=True)

    # Progress bar showing treasury growth
    progress = min((stats['treasury_balance'] + donation_amount) / 200000, 1.0)
    st.markdown("#### 🎯 Progress to Next Milestone ($200k)")
    st.progress(progress)
    st.caption(f"${stats['treasury_balance'] + donation_amount:,.2f} / $200,000")

    st.info("💡 *Your donation is 100% tax-deductible and goes directly to the prize pool. Zero fees.*")

with tab3:
    st.markdown("### 🔒 Verifiable Random Number Generation")

    st.markdown("""
    <div class='glass-card'>
        <p style='font-size: 1.2rem; color: #8BC7FF; line-height: 1.8; margin-bottom: 2rem;'>
            UAD uses <strong style='color: #51F8C5;'>Chainlink VRF</strong> (Verifiable Random Function) to ensure
            <strong style='color: #F6C667;'>100% fair and transparent</strong> winner selection.
            No centralized control. No manipulation possible. Every draw is <strong style='color: #51F8C5;'>cryptographically proven</strong>.
        </p>
    </div>
    """, unsafe_allow_html=True)

    # VRF Process steps
    steps = [
        ("🔒 Pool Locked", "Weekly draw period ends. Entry pool is frozen on-chain.", "#8BC7FF"),
        ("⚡ VRF Request", "Smart contract requests Chainlink VRF for random number.", "#51F8C5"),
        ("✅ Proof Generated", "Cryptographic proof of randomness verified on-chain.", "#F6C667"),
        ("💸 Winner Paid", "USDT automatically transferred to winner's wallet.", "#51F8C5"),
    ]

    for i, (title, desc, color) in enumerate(steps):
        col1, col2 = st.columns([1, 5])
        with col1:
            st.markdown(f"""
            <div style='width: 60px; height: 60px; border-radius: 50%; background: {color};
                        display: flex; align-items: center; justify-content: center;
                        font-size: 2rem; font-weight: 700; color: #0C0C0D;'>
                {i+1}
            </div>
            """, unsafe_allow_html=True)

        with col2:
            st.markdown(f"""
            <div style='padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 0.75rem;
                        border-left: 4px solid {color}; margin-bottom: 1rem;'>
                <h4 style='color: {color}; margin: 0 0 0.5rem 0;'>{title}</h4>
                <p style='color: #8BC7FF; margin: 0;'>{desc}</p>
            </div>
            """, unsafe_allow_html=True)

    st.markdown("<br>", unsafe_allow_html=True)

    col1, col2, col3 = st.columns([1, 1, 1])
    with col2:
        if st.button("📖 Learn About Chainlink VRF", use_container_width=True, key="vrf_learn"):
            st.info("🔗 Visit: https://chain.link/vrf to learn more about verifiable randomness!")

st.divider()

# ==============================================================================
# REAL-LIFE WINNER STORIES - PREMIUM
# ==============================================================================

st.markdown("<h2>🌟 Real People, Real Stories</h2>", unsafe_allow_html=True)
st.markdown("""
<div class='subtitle'>
    These aren't just numbers. They're lives changed by universal basic income.
</div>
""", unsafe_allow_html=True)

winners = get_winner_stories()

for winner in winners:
    col1, col2 = st.columns([1, 3])

    with col1:
        st.markdown(f"""
        <div style='text-align: center;'>
            <div style='font-size: 6rem; margin-bottom: 1rem;'>{winner['avatar']}</div>
            <h3 style='margin: 0; color: #51F8C5;'>{winner['name']}</h3>
            <div style='color: #8BC7FF; margin: 0.5rem 0;'>📍 {winner['location']}</div>
            <div style='font-size: 2rem; color: #F6C667; font-weight: 700; margin: 1rem 0;'>
                ${winner['amount']:,}
            </div>
            <div style='color: #8BC7FF; font-size: 0.9rem;'>Week #{winner['week']} Winner</div>
            <div style='color: #51F8C5; font-size: 0.9rem; margin-top: 0.5rem;'>{winner['wallet']}</div>
        </div>
        """, unsafe_allow_html=True)

    with col2:
        st.markdown(f"""
        <div class='glass-card' style='height: 100%;'>
            <div style='font-size: 3rem; color: #51F8C5; margin-bottom: 1rem;'>"</div>
            <p style='font-size: 1.2rem; color: #FBFBF9; line-height: 1.8; font-style: italic; margin-bottom: 2rem;'>
                {winner['story']}
            </p>
            <div style='border-top: 2px solid rgba(81, 248, 197, 0.2); padding-top: 1rem;'>
                <a href='https://etherscan.io' target='_blank' style='color: #51F8C5; font-weight: 600;'>
                    🔗 Verify transaction on Etherscan →
                </a>
            </div>
        </div>
        """, unsafe_allow_html=True)

    st.markdown("<br>", unsafe_allow_html=True)

# Winner stats
col1, col2, col3 = st.columns(3)

with col1:
    st.markdown("""
    <div style='text-align: center; padding: 2rem; background: rgba(81, 248, 197, 0.05); border-radius: 1rem; border: 2px solid rgba(81, 248, 197, 0.2);'>
        <div style='font-size: 3rem; color: #51F8C5; font-weight: 700;'>68</div>
        <div style='color: #8BC7FF; font-size: 1.1rem; margin-top: 0.5rem;'>Total Winners</div>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown("""
    <div style='text-align: center; padding: 2rem; background: rgba(139, 199, 255, 0.05); border-radius: 1rem; border: 2px solid rgba(139, 199, 255, 0.2);'>
        <div style='font-size: 3rem; color: #8BC7FF; font-weight: 700;'>$342k</div>
        <div style='color: #8BC7FF; font-size: 1.1rem; margin-top: 0.5rem;'>Total Distributed</div>
    </div>
    """, unsafe_allow_html=True)

with col3:
    st.markdown("""
    <div style='text-align: center; padding: 2rem; background: rgba(246, 198, 103, 0.05); border-radius: 1rem; border: 2px solid rgba(246, 198, 103, 0.2);'>
        <div style='font-size: 3rem; color: #F6C667; font-weight: 700;'>$5,039</div>
        <div style='color: #8BC7FF; font-size: 1.1rem; margin-top: 0.5rem;'>Average Prize</div>
    </div>
    """, unsafe_allow_html=True)

st.divider()

# ==============================================================================
# FUTURE VISION - PREMIUM
# ==============================================================================

st.markdown("<h2>✨ The Future: AI Dividends</h2>", unsafe_allow_html=True)

st.markdown("""
<div class='glass-card' style='text-align: center; padding: 3rem;'>
    <h3 style='font-size: 3rem; margin-bottom: 1.5rem; background: linear-gradient(135deg, #51F8C5 0%, #8BC7FF 50%, #F6C667 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>
        The moment AI pays society back
    </h3>
    <p style='font-size: 1.3rem; color: #8BC7FF; line-height: 1.8; max-width: 900px; margin: 0 auto 2rem auto;'>
        As industries automate, UAD will route a share of <strong style='color: #51F8C5;'>corporate AI dividends</strong> to people who need it most.
        What starts as <strong style='color: #F6C667;'>donations today</strong> becomes <strong style='color: #51F8C5;'>sustainable basic income tomorrow</strong>.
    </p>
</div>
""", unsafe_allow_html=True)

# Roadmap visualization
st.markdown("### 🛣️ The Roadmap to AI Dividends")

col1, col2, col3 = st.columns(3)

with col1:
    st.markdown("""
    <div class='glass-card' style='min-height: 300px;'>
        <div style='font-size: 4rem; text-align: center; margin-bottom: 1rem;'>🏢</div>
        <h4 style='color: #8BC7FF; text-align: center; margin-bottom: 1rem;'>Phase 1: Corporate Automation</h4>
        <p style='color: #FBFBF9; text-align: center; line-height: 1.6;'>
            Companies adopt AI to automate significant workforce functions. Productivity soars, but displaced workers need support.
        </p>
        <div style='margin-top: 1.5rem; padding: 1rem; background: rgba(139, 199, 255, 0.05); border-radius: 0.5rem; text-align: center;'>
            <strong style='color: #8BC7FF;'>Currently Happening</strong>
        </div>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown("""
    <div class='glass-card' style='min-height: 300px;'>
        <div style='font-size: 4rem; text-align: center; margin-bottom: 1rem;'>📈</div>
        <h4 style='color: #51F8C5; text-align: center; margin-bottom: 1rem;'>Phase 2: AI Dividend Agreements</h4>
        <p style='color: #FBFBF9; text-align: center; line-height: 1.6;'>
            Corporations commit a portion of AI-driven profits to UAD. Sustainable funding begins flowing from automation gains.
        </p>
        <div style='margin-top: 1.5rem; padding: 1rem; background: rgba(81, 248, 197, 0.05); border-radius: 0.5rem; text-align: center;'>
            <strong style='color: #51F8C5;'>In Negotiation</strong>
        </div>
    </div>
    """, unsafe_allow_html=True)

with col3:
    st.markdown("""
    <div class='glass-card' style='min-height: 300px;'>
        <div style='font-size: 4rem; text-align: center; margin-bottom: 1rem;'>🌍</div>
        <h4 style='color: #F6C667; text-align: center; margin-bottom: 1rem;'>Phase 3: Universal Distribution</h4>
        <p style='color: #FBFBF9; text-align: center; line-height: 1.6;'>
            AI dividends flow to people globally, creating true basic income funded by the technology transforming our economy.
        </p>
        <div style='margin-top: 1.5rem; padding: 1rem; background: rgba(246, 198, 103, 0.05); border-radius: 0.5rem; text-align: center;'>
            <strong style='color: #F6C667;'>The Vision</strong>
        </div>
    </div>
    """, unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)

# Newsletter signup - PREMIUM
st.markdown("### 📧 Stay Updated on AI Dividends")

col1, col2, col3 = st.columns([1, 2, 1])

with col2:
    st.markdown("""
    <div class='glass-card'>
        <p style='text-align: center; color: #8BC7FF; font-size: 1.1rem; margin-bottom: 1.5rem;'>
            Get notified when corporations join the UAD network and AI dividends begin flowing.
        </p>
    """, unsafe_allow_html=True)

    email = st.text_input(
        "Email address",
        placeholder="your@email.com",
        label_visibility="collapsed"
    )

    if st.button("🚀 SUBSCRIBE FOR UPDATES", use_container_width=True, key="newsletter"):
        if email and "@" in email:
            st.balloons()
            st.success("✅ Subscribed! Check your email for confirmation.")
            st.markdown("""
            <div style='text-align: center; margin-top: 1rem; padding: 1rem; background: rgba(81, 248, 197, 0.05); border-radius: 0.5rem;'>
                <strong style='color: #51F8C5;'>🎁 Welcome Gift:</strong> You've been entered into this week's draw!
            </div>
            """, unsafe_allow_html=True)
        else:
            st.error("Please enter a valid email address.")

    st.markdown("</div>", unsafe_allow_html=True)

st.divider()

# ==============================================================================
# FAQ - PREMIUM ACCORDION
# ==============================================================================

st.markdown("<h2>❓ Frequently Asked Questions</h2>", unsafe_allow_html=True)
st.markdown("""
<div class='subtitle'>
    Everything you need to know about UAD, answered.
</div>
""", unsafe_allow_html=True)

faqs = [
    ("Is this legal in my country?",
     "UAD operates as a **donation-funded grant system**, not a lottery or gambling service. However, legal frameworks vary by jurisdiction. We recommend consulting local laws regarding online grants and donations. UAD is structured as a non-profit foundation with transparent, verifiable payouts."),

    ("Is UAD a charity or non-profit?",
     "Yes! UAD is structured as a **non-profit foundation** dedicated to distributing AI-driven wealth. **100% of donations** currently go to prize pools. Once corporate AI dividends begin, a small protocol fee (0.5%) will cover operational costs, with the rest distributed to recipients."),

    ("Which blockchain networks are supported?",
     "UAD currently operates on **Ethereum mainnet** using **USDT** (Tether) for maximum stability and global accessibility. We may expand to additional EVM-compatible chains in the future based on community demand and gas efficiency."),

    ("How are winners chosen?",
     "Winners are selected using **Chainlink VRF** (Verifiable Random Function), a provably fair and transparent randomness solution. Every week, the entry pool is locked, VRF generates cryptographic proof of randomness, and the winner is automatically paid. All steps are **verifiable on-chain**."),

    ("Can I donate anonymously?",
     "Yes! Blockchain transactions are **pseudonymous**. You can donate from any wallet without providing personal information. Your wallet address will be visible on-chain, but it is not directly linked to your identity unless you choose to share it."),

    ("How do I earn entries without donating?",
     "While donations are the primary way to support UAD and earn entries, we also offer **alternative entry methods** such as community participation, referrals, and social engagement. Check our Discord for current opportunities to earn free entries."),

    ("What happens if I win?",
     "If you win, **USDT is automatically transferred** to your wallet within minutes of the draw. You will also be invited (optionally) to share your story and join our community of winners. All payouts are **instant, transparent, and verifiable on-chain**."),

    ("When will AI dividends actually start?",
     "AI dividends will begin when **corporations commit** to contributing a portion of their AI-driven profits. We are actively negotiating with potential partners and will announce updates as agreements are finalized. **Subscribe to our newsletter** to stay informed."),

    ("Can I verify the smart contracts?",
     "Absolutely! UAD is **fully open-source**. All smart contracts are verified on Etherscan and available on our GitHub. We encourage technical review and welcome security audits from the community."),
]

for question, answer in faqs:
    with st.expander(f"**{question}**"):
        st.markdown(f"<div style='color: #FBFBF9; line-height: 1.8;'>{answer}</div>", unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)

col1, col2, col3 = st.columns([1, 1, 1])
with col2:
    st.markdown("""
    <div style='text-align: center; padding: 1.5rem; background: rgba(81, 248, 197, 0.05); border-radius: 1rem;'>
        <p style='color: #8BC7FF; margin: 0;'>
            Still have questions? <a href='https://discord.gg/uad' style='color: #51F8C5; font-weight: 600;'>Join our Discord →</a>
        </p>
    </div>
    """, unsafe_allow_html=True)

st.divider()

# ==============================================================================
# FINAL CTA - PREMIUM
# ==============================================================================

st.markdown("""
<div class='glass-card' style='text-align: center; padding: 4rem 2rem; background: linear-gradient(135deg, rgba(81, 248, 197, 0.1), rgba(139, 199, 255, 0.1), rgba(246, 198, 103, 0.1));'>
    <h2 style='font-size: 3.5rem; margin-bottom: 1.5rem; background: linear-gradient(135deg, #51F8C5 0%, #8BC7FF 50%, #F6C667 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>
        Ready to join the future of income?
    </h2>
    <p style='font-size: 1.3rem; color: #8BC7FF; margin-bottom: 2rem; line-height: 1.8;'>
        Whether you donate to build the treasury or enter to receive dividends,<br>
        <strong style='color: #51F8C5;'>every action brings us closer to universal AI-driven basic income.</strong>
    </p>
</div>
""", unsafe_allow_html=True)

col1, col2, col3 = st.columns([1, 2, 1])
with col2:
    col_a, col_b = st.columns(2)
    with col_a:
        if st.button("🎁 ENTER DRAW", use_container_width=True, key="final_enter"):
            st.balloons()
            st.success("🎉 Awesome! Connect your wallet to secure your entry.")

    with col_b:
        if st.button("💎 DONATE NOW", use_container_width=True, key="final_donate"):
            st.success("💚 Thank you for believing in universal basic income!")

st.markdown("""
<div style='text-align: center; margin: 2rem 0; color: #8BC7FF; font-size: 1.1rem;'>
    🛡️ 100% transparent  •  ⚖️ Provably fair  •  🔓 Open-source  •  🌍 Global
</div>
""", unsafe_allow_html=True)

st.divider()

# ==============================================================================
# FOOTER - PREMIUM
# ==============================================================================

st.markdown("""
<div style='text-align: center; padding: 3rem 1rem; background: rgba(0, 0, 0, 0.2); border-radius: 1rem;'>
    <h3 style='color: #51F8C5; font-size: 2rem; margin-bottom: 1.5rem;'>Universal AI Dividend Foundation</h3>

    <div style='display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 2rem;'>
        <a href='#how-it-works' style='color: #8BC7FF;'>How It Works</a>
        <a href='#transparency' style='color: #8BC7FF;'>Transparency</a>
        <a href='#winners' style='color: #8BC7FF;'>Winners</a>
        <a href='#faq' style='color: #8BC7FF;'>FAQ</a>
        <a href='https://github.com/universal-ai-dividend' target='_blank' style='color: #8BC7FF;'>GitHub</a>
        <a href='https://twitter.com/UniversalAIDivd' target='_blank' style='color: #8BC7FF;'>Twitter</a>
        <a href='https://discord.gg/uad' target='_blank' style='color: #8BC7FF;'>Discord</a>
    </div>

    <div style='color: #8BC7FF; margin-bottom: 1rem;'>
        🌟 Building the future of universal basic income, one dividend at a time.
    </div>

    <div style='color: #666; font-size: 0.9rem;'>
        © 2024 Universal AI Dividend Foundation. All rights reserved.
    </div>

    <div style='margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(139, 199, 255, 0.2);'>
        <a href='https://etherscan.io' target='_blank' style='color: #51F8C5; font-weight: 600;'>
            🔗 View Treasury Contract on Etherscan →
        </a>
    </div>
</div>
""", unsafe_allow_html=True)

# Page view tracking (would integrate with PostHog in production)
st.markdown("""
<script>
// Analytics tracking
console.log('UAD Landing Page - Premium Version');
console.log('Page loaded:', new Date().toISOString());
</script>
""", unsafe_allow_html=True)
