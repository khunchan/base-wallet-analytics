# 🔷 Base Wallet Analytics

A premium analytics dashboard for Base network wallets with Web3 paywall.

## 🚀 Get Access

**[👉 Unlock Analytics for $0.01](https://base-wallet-analytics.vercel.app/payment-page.html)**

One-time payment • 30 days access • Powered by Base network

---

## ✨ Features

### 🎭 Wallet Personality
Automatically determines wallet type based on behavior:
- 🎰 **Degen** - High-risk trader
- 🐋 **Whale** - Big player
- 💎 **Diamond Hands** - Patient holder
- 🦐 **Shrimp** - Small but active
- 🤖 **Bot Suspect** - Unusual patterns
- 🧭 **Explorer** - Tries many protocols

### 🏆 Achievement System
Unlock badges based on activity:
- 🎯 First Steps • 💯 Century Club • 🚀 Power User
- ⛽ Gas Burner • ❌ Fail Master • ✨ Perfectionist
- 🎖️ Veteran • 🧭 Explorer • 🏦 DeFi User

### 📊 Detailed Statistics
- Total transactions (sent/received)
- Success rate
- Gas spent (ETH & USD)
- Wallet age
- Unique contracts

### 📈 Activity Heatmap
GitHub-style heatmap showing transaction activity over 52 weeks

---

## 🛠️ Tech Stack

- HTML/CSS/JavaScript (Frontend)
- Vercel Serverless Functions (API)
- Basescan API (Data)
- Smart Contract Paywall on Base

---

## 💎 Smart Contract

**Paywall Contract:** [`0x5DCe73520367CfF8Cb6A8564954172a32Ac3aB7d`](https://basescan.org/address/0x5DCe73520367CfF8Cb6A8564954172a32Ac3aB7d)

---

## 🚀 Deploy Your Own

### 1. Fork this repo

### 2. Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### 3. Add Environment Variables
In Vercel Dashboard → Settings → Environment Variables:
```
BASESCAN_API_KEY=your_api_key_here
```

Get free API key at: https://basescan.org/apis

### 4. Done!
Your app is live at `https://your-project.vercel.app`

---

## 📁 Project Structure

```
base-wallet-analytics/
├── index.html          # Main dashboard
├── payment-page.html   # Payment page
├── api/
│   ├── balance.js      # Get wallet balance
│   ├── transactions.js # Get transactions
│   └── ethprice.js     # Get ETH price
├── vercel.json         # Vercel config
├── .env.example        # Environment variables template
└── .gitignore          # Git ignore rules
```

---

## 🔒 Security

- ✅ API keys stored in Vercel Environment Variables (not in code)
- ✅ Server-side API calls (keys never exposed to client)
- ✅ Smart contract paywall for access control

---

## 📝 License

MIT License

---

## 👤 Author

**khunchan**
- GitHub: [@khunchan](https://github.com/khunchan)

Built with 💙 for the Base ecosystem
