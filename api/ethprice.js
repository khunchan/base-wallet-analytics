// api/ethprice.js - Vercel Serverless Function
// API key is stored in Vercel Environment Variables (not in code)

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const API_KEY = process.env.BASESCAN_API_KEY;
  const BASE_CHAIN_ID = 8453;
  
  try {
    const response = await fetch(
      `https://api.etherscan.io/v2/api?chainid=${BASE_CHAIN_ID}&module=stats&action=ethprice&apikey=${API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ETH price' });
  }
}
