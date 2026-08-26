![](https://i.postimg.cc/j53NWQD0/wxscanv12.png)

------------

**Weatherscan v1 2.0** is a simulated recreation of "Weatherscan" by The Weather Channel in HTML/CSS/JS, as seen from 2003 to 2005, by ***mist weather media***

Online demo: [v1.weatherscan.net](https://v1.weatherscan.net)

## NATIONAL FORECAST MODE
Add " /?nationalForecast " at the end of the URL of the simulator's tab to access a rotating forecast for cities across the United States

© Mist Weather Media 2025.

## NOTE
To adjust location settings, edit main/configs/yourConfig.json

------------

**Special thanks to these talented minds who made this project possible!**

**Joe Molinelli (TheGoldDiamond9)** - Lead Developer  
**COLSTER** - Developer  
**JensonWX** - Developer  
**Miceoroni** - Map Developer  
**zachNet** - README

and the rest of the Mist Creative Team for their support!

------------

Need support beyond the scope of this README? Have any questions? Feel free to join our Discord for support!

[***mist weather media*** on Discord](https://discord.gg/hV2w5sZQxz)

# Initial Setup (Source code)

1. Install [node.js LTS](https://nodejs.org/en/).
2. Acquire *weather.com*, *mapbox.com*, and *HERE.com* . API keys. These are required for weather data, maps and radar frames, and traffic, respectively.
3. Go to `/main/configs` and open `yourConfig.json`.
4. Line 4 is where your *api.weather.com*  API key goes. Replace `"YOUR_API_KEY"` with your *weather.com* API key.
5. Line 5 is where your *mapbox.com*  API key goes. Replace `"YOUR_API_KEY"` with your *mapbox.com* API key.
6. Line 6 is where your *HERE.com*  API key goes. Replace `"YOUR_API_KEY"` with your *HERE.com* API key. (optional, only if you want traffic segment)
7. Save your changes to `yourConfig.json` and close it.
8. In terminal / command prompt within the main directory, run `npm install --production`. This will install all dependencies required to run.
9. In terminal / command prompt within the main directory, run `npm start`. This will start a local web server, which is required to run the sim.

------------

Enjoy the nostalgia! You're all set.

Many thanks for using our simulator! We hope you like it.
