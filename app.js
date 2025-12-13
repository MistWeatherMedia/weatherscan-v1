const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'main')));

app.listen(port, '0.0.0.0', () => {
    console.log("Weatherscan V1 by Mist Weather Media")
    console.log(`Main serving on http://127.0.0.1:${port}`);
  });

app.get('/airports', async (req, res) => {
    try {
        const response = await fetch('https://nasstatus.faa.gov/api/airport-events');
        const airportData = await response.json();
        res.json(airportData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch airport data' });
    }
})

//npm i http-proxy-middleware
//  ^ THIS IS IMPORTANT ^
app.use('/surf', createProxyMiddleware({
    target: 'https://www.ndbc.noaa.gov/data/latest_obs',
    changeOrigin: true,
    pathRewrite: {'^/latest_obs': '/surf/'},
}));
app.use('/coastalwaters', createProxyMiddleware({
    target: 'https://api.weather.gov/products/types/CWF/locations',
    changeOrigin: true,
    pathRewrite: {'^/locations': '/coastalwaters/'}
}));
app.use('/cwf', createProxyMiddleware({
    target: 'https://api.weather.gov/products',
    changeOrigin: true,
    pathRewrite: {'^/products':'/cwf/'}
}))