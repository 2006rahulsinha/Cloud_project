const monitor = require('../../integrate-with-existing-nextjs'); 
export default function handler(req, res) { 
  res.status(200).json(monitor.getMetrics()); 
} 
