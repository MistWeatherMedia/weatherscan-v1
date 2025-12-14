![](https://i.postimg.cc/j53NWQD0/wxscanv12.png)

------------

**Weatherscan v1 2.0** is a simulated recreation of "Weatherscan" by The Weather Channel in HTML/CSS/JS, by ***mist weather media***

Online demo: [v1.weatherscan.net](https://v1.weatherscan.net)

© Mist Weather Media 2025.

##NOTE
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
2. Acquire *weather.com* and *mapbox.com* API keys. These are required for weather data and radar frames respectively.
(Please note that you will have to install the Mapbox API key in two places.)
3. Go to `/webroot/js` and open `config.js`.
4. Line 1 is where your *weather.com*  API key goes. Replace `"YOUR_API_KEY"` with your *weather.com* API key.
5. Line 2 is where your *mapbox.com*  API key goes. Replace `"YOUR_API_KEY"` with your *mapbox.com* API key.
6. Save your changes to `config.js` and close out of it.
7. Now, open `radar.js` in the same folder.
8. Line 8, or wherever *mapboxgl.accessToken* is located, is the second place your *mapbox.com*  API key goes. Replace `"map_key"` with your *mapbox.com* API key.
9. Save your changes to `radar.js` and close out of it.
10. In terminal / command prompt within the webroot directory, run `npm install --production`. This will install all dependencies required to run.
11. In terminal / command prompt within the webroot directory, run `npm start`. This will start a local web server, which is required to run the sim.

------------

Enjoy the nostalgia! You're all set.

Many thanks for using our simulator! We hope you like it.
