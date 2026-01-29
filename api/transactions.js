// api/transactions.js - Vercel Serverless Function
// API key is stored in Vercel Environment Variables (not in code)

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const { address } = req.query;
  
  if (!address || !address.match(/^0x[a-fA-F0-9]{40}$/)) {
    return res.status(400).json({ error: 'Invalid address' });
  }
  
  const API_KEY = process.env.BASESCAN_API_KEY;
  const BASE_CHAIN_ID = 8453;
  
  try {
    const response = await fetch(
      `https://api.etherscan.io/v2/api?chainid=${BASE_CHAIN_ID}&module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10000&sort=desc&apikey=${API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
}
