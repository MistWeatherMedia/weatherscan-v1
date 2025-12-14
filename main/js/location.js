var newExtraCities = [];

var golfRegional = [
    { locationName: "Seattle", lat: 47.6062, lon: -122.3321, topPos: "", leftPos: "" },
    { locationName: "Spokane", lat: 47.6588, lon: -117.4260, topPos: "", leftPos: "" },
    { locationName: "Portland", lat: 45.5152, lon: -122.6784, topPos: "", leftPos: "" },
    { locationName: "Boise", lat: 43.6150, lon: -116.2023, topPos: "", leftPos: "" },
    { locationName: "Salt Lake City", lat: 40.7608, lon: -111.8910, topPos: "", leftPos: "" },
    { locationName: "San Francisco", lat: 37.7749, lon: -122.4194, topPos: "", leftPos: "" },
    { locationName: "Los Angeles", lat: 34.0522, lon: -118.2437, topPos: "", leftPos: "" },
    { locationName: "Phoenix", lat: 33.4484, lon: -112.0740, topPos: "", leftPos: "" },
    { locationName: "Denver", lat: 39.7392, lon: -104.9903, topPos: "", leftPos: "" },
    { locationName: "Cheyenne", lat: 41.1400, lon: -104.8202, topPos: "", leftPos: "" },
    { locationName: "Billings", lat: 45.7833, lon: -108.5007, topPos: "", leftPos: "" },
    { locationName: "Great Falls", lat: 47.4942, lon: -111.2833, topPos: "", leftPos: "" },
    { locationName: "Rapid City", lat: 44.0805, lon: -103.2310, topPos: "", leftPos: "" },
    { locationName: "Fargo", lat: 46.8772, lon: -96.7898, topPos: "", leftPos: "" },
    { locationName: "Minneapolis", lat: 44.9778, lon: -93.2650, topPos: "", leftPos: "" },
    { locationName: "Des Moines", lat: 41.5868, lon: -93.6250, topPos: "", leftPos: "" },
    { locationName: "Wichita", lat: 37.6872, lon: -97.3301, topPos: "", leftPos: "" },
    { locationName: "Oklahoma City", lat: 35.4676, lon: -97.5164, topPos: "", leftPos: "" },
    { locationName: "Dallas", lat: 32.7767, lon: -96.7970, topPos: "", leftPos: "" },
    { locationName: "Houston", lat: 29.7604, lon: -95.3698, topPos: "", leftPos: "" },
    { locationName: "Corpus Christi", lat: 27.8006, lon: -97.3964, topPos: "", leftPos: "" },
    { locationName: "Lubbock", lat: 33.5779, lon: -101.8552, topPos: "", leftPos: "" },
    { locationName: "El Paso", lat: 31.7619, lon: -106.4850, topPos: "", leftPos: "" },
    { locationName: "Phoenix", lat: 33.4484, lon: -112.0740, topPos: "", leftPos: "" },
    { locationName: "San Diego", lat: 32.7157, lon: -117.1611, topPos: "", leftPos: "" },
    { locationName: "Chicago", lat: 41.8781, lon: -87.6298, topPos: "", leftPos: "" },
    { locationName: "St. Louis", lat: 38.6270, lon: -90.1994, topPos: "", leftPos: "" },
    { locationName: "Memphis", lat: 35.1495, lon: -90.0490, topPos: "", leftPos: "" },
    { locationName: "New Orleans", lat: 29.9511, lon: -90.0715, topPos: "", leftPos: "" },
    { locationName: "Jackson", lat: 32.2988, lon: -90.1848, topPos: "", leftPos: "" },
    { locationName: "Atlanta", lat: 33.7490, lon: -84.3880, topPos: "", leftPos: "" },
    { locationName: "Charleston", lat: 32.7765, lon: -79.9311, topPos: "", leftPos: "" },
    { locationName: "Raleigh", lat: 35.7796, lon: -78.6382, topPos: "", leftPos: "" },
    { locationName: "Washington, DC", lat: 38.9072, lon: -77.0369, topPos: "", leftPos: "" },
    { locationName: "New York", lat: 40.7128, lon: -74.0060, topPos: "", leftPos: "" },
    { locationName: "Boston", lat: 42.3601, lon: -71.0589, topPos: "", leftPos: "" },
    { locationName: "Buffalo", lat: 42.8864, lon: -78.8784, topPos: "", leftPos: "" },
    { locationName: "Detroit", lat: 42.3314, lon: -83.0458, topPos: "", leftPos: "" },
    { locationName: "Miami", lat: 25.7617, lon: -80.1918, topPos: "", leftPos: "" },
    { locationName: "Orlando", lat: 28.5383, lon: -81.3792, topPos: "", leftPos: "" },
    { locationName: "Tallahassee", lat: 30.4383, lon: -84.2807, topPos: "", leftPos: "" },
    { locationName: "Nashville", lat: 36.1627, lon: -86.7816, topPos: "", leftPos: "" }
]

var travelRegional = [
  { locationName: "Seattle", lat: 47.607, lon: -122.342, topPos: 600, leftPos: 830, type: ["pacific", "north"] },
  { locationName: "Yakima", lat: 46.602, lon: -120.505, topPos: 720, leftPos: 1110 },
  { locationName: "Spokane", lat: 47.659, lon: -117.429, topPos: 620, leftPos: 1360 },
  { locationName: "Portland", lat: 45.515, lon: -122.679, topPos: 900, leftPos: 830 },
  { locationName: "Walla Walla", lat: 46.065, lon: -118.343, topPos: 860, leftPos: 1410 },
  { locationName: "Kalispell", lat: 48.202, lon: -114.315, topPos: 560, leftPos: 1670 },
  { locationName: "Missoula", lat: 46.872, lon: -113.994, topPos: 770, leftPos: 1730 },
  { locationName: "Eugene", lat: 44.052, lon: -123.086, topPos: 1140, leftPos: 710 },
  { locationName: "Burns", lat: 43.586, lon: -119.054, topPos: 1180, leftPos: 1180 },
  { locationName: "Redding", lat: 40.586, lon: -122.392, topPos: 1450, leftPos: 900 },
  { locationName: "San Francisco", lat: 37.774, lon: -122.419, topPos: 1740, leftPos: 870 },
  { locationName: "Fresno", lat: 36.738, lon: -119.784, topPos: 1920, leftPos: 1170 },
  { locationName: "Los Angeles", lat: 34.054, lon: -118.244, topPos: 2140, leftPos: 1200 },
  { locationName: "San Diego", lat: 32.716, lon: -117.162, topPos: 2320, leftPos: 1400 },
  { locationName: "Elko", lat: 40.832, lon: -115.764, topPos: 1410, leftPos: 1550 },
  { locationName: "Tonopah", lat: 38.067, lon: -117.231, topPos: 1720, leftPos: 1400 },
  { locationName: "Cedar City", lat: 37.677, lon: -113.062, topPos: 1700, leftPos: 1950 },
  { locationName: "Salt Lake City", lat: 40.760, lon: -111.891, topPos: 1420, leftPos: 1970 },
  { locationName: "Las Vegas", lat: 36.171, lon: -115.140, topPos: 1950, leftPos: 1600 },
  { locationName: "Flagstaff", lat: 35.199, lon: -111.651, topPos: 1940, leftPos: 1980 },
  { locationName: "Yuma", lat: 32.693, lon: -114.627, topPos: 2300, leftPos: 1650 },
  { locationName: "Phoenix", lat: 33.448, lon: -112.074, topPos: 2130, leftPos: 1910 },
  { locationName: "Tucson", lat: 32.222, lon: -110.974, topPos: 2325, leftPos: 2100 },
  { locationName: "Las Cruces", lat: 32.319, lon: -106.763, topPos: 2300, leftPos: 2430 },
  { locationName: "Roswell", lat: 33.394, lon: -104.523, topPos: 2200, leftPos: 2690 },
  { locationName: "Boise", lat: 43.617, lon: -116.202, topPos: 1130, leftPos: 1550 },
  { locationName: "Pocatello", lat: 42.871, lon: -112.446, topPos: 1170, leftPos: 1860 },
  { locationName: "Helena", lat: 46.588, lon: -112.024, topPos: 800, leftPos: 2000 },
  { locationName: "Billings", lat: 45.783, lon: -108.501, topPos: 840, leftPos: 2380 },
  { locationName: "W Yellowstone", lat: 44.662, lon: -111.104, topPos: 1040, leftPos: 2100 },
  { locationName: "Sheridan", lat: 44.797, lon: -106.955, topPos: 1030, leftPos: 2600 },
  { locationName: "Casper", lat: 42.850, lon: -106.325, topPos: 1250, leftPos: 2550 },
  { locationName: "Glasgow", lat: 48.196, lon: -106.633, topPos: 540, leftPos: 2390 },
  { locationName: "Glendive", lat: 47.107, lon: -104.710, topPos: 720, leftPos: 2650 },
  { locationName: "Bismarck", lat: 46.808, lon: -100.784, topPos: 690, leftPos: 3100 },
  { locationName: "Grand Forks", lat: 47.925, lon: -97.032, topPos: 600, leftPos: 3460 },
  { locationName: "Houghton", lat: 47.121, lon: -88.569, topPos: 700, leftPos: 4360 },
  { locationName: "Sault Ste. Marie", lat: 46.495, lon: -84.345, topPos: 780, leftPos: 4700 },
  { locationName: "Duluth", lat: 46.786, lon: -92.100, topPos: 750, leftPos: 3970 },
  { locationName: "Minneapolis", lat: 44.978, lon: -93.265, topPos: 960, leftPos: 3780 },
  { locationName: "Madison", lat: 43.072, lon: -89.401, topPos: 1130, leftPos: 4220 },
  { locationName: "Green Bay", lat: 44.513, lon: -88.015, topPos: 950, leftPos: 4310 },
  { locationName: "Traverse City", lat: 44.763, lon: -85.622, topPos: 980, leftPos: 4640 },
  { locationName: "Grand Rpds.", lat: 42.963, lon: -85.668, topPos: 1175, leftPos: 4575 },
  { locationName: "Detroit", lat: 42.331, lon: -83.046, topPos: 1293, leftPos: 4860 },
  { locationName: "Aberdeen", lat: 45.464, lon: -98.486, topPos: 880, leftPos: 3270 },
  { locationName: "Pierre", lat: 44.368, lon: -100.351, topPos: 1030, leftPos: 3050 },
  { locationName: "Sioux Falls", lat: 43.547, lon: -96.729, topPos: 1080, leftPos: 3390 },
  { locationName: "North Platte", lat: 41.134, lon: -100.765, topPos: 1340, leftPos: 3170 },
  { locationName: "Hill City", lat: 39.366, lon: -99.845, topPos: 1580, leftPos: 3280 },
  { locationName: "Omaha", lat: 41.257, lon: -95.995, topPos: 1360, leftPos: 3500 },
  { locationName: "Des Moines", lat: 41.586, lon: -93.626, topPos: 1340, leftPos: 3790 },
  { locationName: "Waterloo", lat: 42.492, lon: -92.344, topPos: 1220, leftPos: 3930 },
  { locationName: "Chicago", lat: 41.878, lon: -87.629, topPos: 1330, leftPos: 4350 },
  { locationName: "Ft. Wayne", lat: 41.079, lon: -85.139, topPos: 1350, leftPos: 4610 },
  { locationName: "Indianapolis", lat: 39.768, lon: -86.158, topPos: 1545, leftPos: 4570 },
  { locationName: "Evansville", lat: 37.972, lon: -87.571, topPos: 1760, leftPos: 4470 },
  { locationName: "Lexington", lat: 38.040, lon: -84.503, topPos: 1750, leftPos: 4770 },
  { locationName: "Columbus", lat: 39.961, lon: -82.999, topPos: 1495, leftPos: 4915 },
  { locationName: "St. Louis", lat: 38.627, lon: -90.199, topPos: 1650, leftPos: 4080 },
  { locationName: "Springfield", lat: 39.801, lon: -89.646, topPos: 1530, leftPos: 4210 },
  { locationName: "Cape Girardeau", lat: 37.305, lon: -89.518, topPos: 1840, leftPos: 4100 },
  { locationName: "Tulsa", lat: 36.154, lon: -95.992, topPos: 1900, leftPos: 3610 },
  { locationName: "Oklahoma City", lat: 35.468, lon: -97.516, topPos: 2040, leftPos: 3420 },
  { locationName: "Wichita", lat: 37.687, lon: -97.330, topPos: 1780, leftPos: 3350 },
  { locationName: "Amarillo", lat: 35.222, lon: -101.831, topPos: 1990, leftPos: 3000 },
  { locationName: "Lubbock", lat: 33.578, lon: -101.855, topPos: 2190, leftPos: 3010 },
  { locationName: "Midland", lat: 31.997, lon: -102.078, topPos: 2370, leftPos: 3130 },
  { locationName: "Ft. Stockton", lat: 30.894, lon: -102.879, topPos: 2480, leftPos: 2850 },
  { locationName: "San Antonio", lat: 29.424, lon: -98.494, topPos: 2590, leftPos: 3330 },
  { locationName: "Houston", lat: 29.760, lon: -95.370, topPos: 2570, leftPos: 3640 },
  { locationName: "Dallas", lat: 32.777, lon: -96.797, topPos: 2280, leftPos: 3460 },
  { locationName: "Shreveport", lat: 32.525, lon: -93.750, topPos: 2310, leftPos: 3840 },
  { locationName: "New Orleans", lat: 29.951, lon: -90.072, topPos: 2550, leftPos: 4100 },
  { locationName: "Mobile", lat: 30.695, lon: -88.043, topPos: 2530, leftPos: 4400 },
  { locationName: "Tallahassee", lat: 30.438, lon: -84.281, topPos: 2500, leftPos: 4700 },
  { locationName: "Jacksonville", lat: 30.332, lon: -81.656, topPos: 2537, leftPos: 5080 },
  { locationName: "Orlando", lat: 28.538, lon: -81.379, topPos: 2730, leftPos: 5075 },
  { locationName: "Tampa", lat: 27.951, lon: -82.457, topPos: 2750, leftPos: 4850 },
  { locationName: "Fort Myers", lat: 26.640, lon: -81.872, topPos: 2955, leftPos: 4960 },
  { locationName: "Miami", lat: 25.761, lon: -80.191, topPos: 2970, leftPos: 5220 },
  { locationName: "Laredo", lat: 27.506, lon: -99.507, topPos: 2750, leftPos: 3150 },
  { locationName: "Brownsville", lat: 25.902, lon: -97.497, topPos: 2900, leftPos: 3450 },
  { locationName: "Atlanta", lat: 33.749, lon: -84.388, topPos: 2160, leftPos: 4760 },
  { locationName: "Birmingham", lat: 33.520, lon: -86.802, topPos: 2220, leftPos: 4460 },
  { locationName: "Jackson", lat: 32.299, lon: -90.185, topPos: 2280, leftPos: 4180 },
  { locationName: "Memphis", lat: 35.149, lon: -90.049, topPos: 2030, leftPos: 4180 },
  { locationName: "Nashville", lat: 36.162, lon: -86.781, topPos: 1970, leftPos: 4550 },
  { locationName: "Knoxville", lat: 35.961, lon: -83.921, topPos: 1950, leftPos: 4820 },
  { locationName: "Charlotte", lat: 35.227, lon: -80.843, topPos: 2080, leftPos: 5110 },
  { locationName: "Charleston", lat: 32.7765, lon: -79.9311, topPos: 2320, leftPos: 5150 },
  { locationName: "Charleston", lat: 38.350, lon: -81.639, topPos: 1690, leftPos: 5020 },
  { locationName: "Raleigh", lat: 35.779, lon: -78.639, topPos: 1960, leftPos: 5290 },
  { locationName: "Wilmington", lat: 34.225, lon: -77.944, topPos: 2180, leftPos: 5440 },
  { locationName: "Cape Hatteras", lat: 35.250, lon: -75.533, topPos: 2040, leftPos: 5660 },
  { locationName: "Richmond", lat: 37.540, lon: -77.436, topPos: 1770, leftPos: 5300 },
  { locationName: "Pittsburgh", lat: 40.440, lon: -79.996, topPos: 1450, leftPos: 5230 },
  { locationName: "Norfolk", lat: 36.851, lon: -76.286, topPos: 1850, leftPos: 5600 },
  { locationName: "Washington", lat: 38.907, lon: -77.037, topPos: 1645, leftPos: 5445 },
  { locationName: "Philadelphia", lat: 39.953, lon: -75.165, topPos: 1490, leftPos: 5580 },
  { locationName: "Atlantic City", lat: 39.364, lon: -74.422, topPos: 1690, leftPos: 5800, type: ["atlantic"] },
  { locationName: "New York", lat: 40.713, lon: -74.006, topPos: 1400, leftPos: 5840 },
  { locationName: "Burlington", lat: 44.476, lon: -73.214, topPos: 1005, leftPos: 5900 },
  { locationName: "Watertown", lat: 43.975, lon: -75.910, topPos: 1060, leftPos: 5605 },
  { locationName: "Buffalo", lat: 42.886, lon: -78.878, topPos: 1140, leftPos: 5220 },
  { locationName: "Binghamton", lat: 42.098, lon: -75.918, topPos: 1270, leftPos: 5530 },
  { locationName: "Boston", lat: 42.360, lon: -71.059, topPos: 1248, leftPos: 6126 },
  { locationName: "Bangor", lat: 44.802, lon: -68.771, topPos: 995, leftPos: 6335 },
  { locationName: "Millinocket", lat: 45.657, lon: -68.709, topPos: 790, leftPos: 6330 }
]


function locationJS() {
    //document.addEventListener("DOMContentLoaded", () => {
        if (systemSettings.mainCity.autoFind == true) {
            grabMainCity();
        } else {
            //automatic location pulls based off of the main city config
        }
        
        //setTimeout(() => {
            if(systemSettings.travel.regionalMap.autoFind == true){
                initTravelMap();
            }
        //}, 1000);
    //})


    var mainquery = window.location.search == "" ? undefined : window.location.search.replaceAll("?", "").replaceAll("%20", " ");
    function grabMainCity() {
        mainquery = window.location.search == "" ? undefined : window.location.search.replaceAll("?", "").replaceAll("%20", " ");
        if (mainquery != undefined && mainquery != "nationalForecast") {
            $.getJSON("https://api.weather.com/v3/location/search?query=" + mainquery + "&language=en-US&format=json&apiKey=" + systemSettings.apiKeys.api_key, function (data) {
                //maincity
                systemSettings.mainCity.locationName = data.location.displayName[0].replaceAll("Township", "");
                systemSettings.mainCity.airportName = data.location.displayName[0];
                systemSettings.mainCity.bulletinName = data.location.displayName[0] + " Area";
                systemSettings.mainCity.almanacLocationName = data.location.displayName[0];
                systemSettings.mainCity.lat = data.location.latitude[0];
                systemSettings.mainCity.lon = data.location.longitude[0];
                systemSettings.mainCity.obsIcaoCode = data.location.icaoCode[0];
                centerDataMaps(data.location.adminDistrictCode[0]);
                systemSettings.mainCity.radar.lat = data.location.latitude[0];
                systemSettings.mainCity.radar.lon = data.location.longitude[0];
                if (systemSettings.mainCity.radar.auto) {
                    systemSettings.mainCity.radar.satCoords = [data.location.longitude[0], data.location.latitude[0]]
                    systemSettings.mainCity.radar.radarCities.push(
                        {locationName: data.location.displayName[0], dotTopPos: "518", dotLeftPos: "788", nameTopMargin:"-11", nameLeftMargin:"43"}
                    )
                }
                //lbar
                systemSettings.LBar.locationName = data.location.displayName[0].replaceAll("Township", "");
                systemSettings.LBar.airportName = data.location.displayName[0];
                systemSettings.LBar.lat = data.location.latitude[0];
                systemSettings.LBar.lon = data.location.longitude[0];
                systemSettings.LBar.obsIcaoCode = data.location.icaoCode[0];
                systemSettings.LBar.radar.lat = data.location.latitude[0];
                systemSettings.LBar.radar.lon = data.location.longitude[0];
                if (systemSettings.LBar.radar.auto) {
                    systemSettings.mainCity.radar.satCoords = [data.location.longitude[0], data.location.latitude[0]]
                    systemSettings.LBar.radar.radarCities.push(
                       {locationName: data.location.displayName[0], dotTopPos: "518", dotLeftPos: "788", nameTopMargin:"-11", nameLeftMargin:"43"}
                    )
                }
                setMainCityBackground(data.location.displayName[0].toLowerCase(), data.location.adminDistrictCode[0]);
                //system location (intro screen)
                systemSettings.systemLocation = data.location.displayName[0];

                if (systemSettings.upperDisplayCity.autoFind == true) {
                    systemSettings.upperDisplayCity.locationName = data.location.displayName[0].replaceAll("Township", "");
                    systemSettings.upperDisplayCity.airportName = data.location.displayName[0];
                    systemSettings.upperDisplayCity.lat = data.location.latitude[0];
                    systemSettings.upperDisplayCity.lon = data.location.longitude[0];
                    systemSettings.upperDisplayCity.obsIcaoCode = data.location.icaoCode[0];
                }
                if (systemSettings.health.autoFind == true) {
                    systemSettings.health.locationName = data.location.displayName[0];
                    systemSettings.health.airportName = data.location.displayName[0];
                    systemSettings.health.lat = data.location.latitude[0];
                    systemSettings.health.lon = data.location.longitude[0];
                    systemSettings.health.obsIcaoCode = data.location.icaoCode[0];
                }
                if (systemSettings.nearbyCities.autoFind == true) {
                    grabNearbyCities(data.location.icaoCode[0]);
                }
                if (systemSettings.golf.autoFind == true) {
                    systemSettings.golf.teeTime.locationName = data.location.displayName[0];
                    systemSettings.golf.teeTime.lat = data.location.latitude[0];
                    systemSettings.golf.teeTime.lon = data.location.longitude[0];
                }
                if (systemSettings.garden.autoFind == true) {
                    systemSettings.garden.locationName = data.location.displayName[0];
                    systemSettings.garden.lat = data.location.latitude[0];
                    systemSettings.garden.lon = data.location.longitude[0];
                }
                if (systemSettings.traffic.autoFind == true) {
                    systemSettings.traffic.locationName = data.location.displayName[0];
                    systemSettings.traffic.lat = data.location.latitude[0];
                    systemSettings.traffic.lon = data.location.longitude[0];
                }
                if (systemSettings.airport.autoFind == true) {
                    grabNearbyAirports(data.location.latitude[0], data.location.longitude[0]);
                }
                if (systemSettings.extraCity.autoFind == true) {
                    grabExtraCities(data.location.latitude[0], data.location.longitude[0], data.location.displayName[0]);
                }
            }).fail(function () {
                //CHAT ARE WE COOKING?!?!?!?!?
                console.error("Location search failed, defaulted to automatic pull.");
                mainquery = undefined;
                grabMainCity();
            })
        } else {
            $.getJSON("https://pro.ip-api.com/json/?key=AmUN9xAaQALVYu6&exposeDate=false", function (data) {
                //maincity
                systemSettings.mainCity.locationName = data.city;
                systemSettings.mainCity.airportName = data.city;
                systemSettings.mainCity.bulletinName = data.city + " Area";
                systemSettings.mainCity.almanacLocationName = data.city;
                systemSettings.mainCity.lat = data.lat;
                systemSettings.mainCity.lon = data.lon;
                centerDataMaps(data.region);
                systemSettings.mainCity.radar.lat = data.lat;
                systemSettings.mainCity.radar.lon = data.lon;
                if (systemSettings.mainCity.radar.auto) {
                    systemSettings.mainCity.radar.satCoords = [data.lon, data.lat]
                    systemSettings.mainCity.radar.radarCities.push(
                        {locationName: data.city, dotTopPos: "518", dotLeftPos: "788", nameTopMargin:"-11", nameLeftMargin:"43"}
                    )
                }
                //lbar
                systemSettings.LBar.locationName = data.city;
                systemSettings.LBar.airportName = data.city;
                systemSettings.LBar.lat = data.lat;
                systemSettings.LBar.lon = data.lon;
                systemSettings.LBar.radar.lat = data.lat;
                systemSettings.LBar.radar.lon = data.lon;
                if (systemSettings.LBar.radar.auto) {
                    systemSettings.LBar.radar.radarCities.push(
                        {locationName: data.city, dotTopPos: "518", dotLeftPos: "788", nameTopMargin:"-11", nameLeftMargin:"43"}
                    )
                }
                setMainCityBackground(data.city.toLowerCase(), data.region);
                //system location (intro screen)
                systemSettings.systemLocation = data.city;

                if (systemSettings.upperDisplayCity.autoFind == true) {
                    systemSettings.upperDisplayCity.locationName = data.city;
                    systemSettings.upperDisplayCity.airportName = data.city;
                    systemSettings.upperDisplayCity.lat = systemSettings.mainCity.lat;
                    systemSettings.upperDisplayCity.lon = systemSettings.mainCity.lon;
                }
                if (systemSettings.health.autoFind == true) {
                    systemSettings.health.locationName = data.city;
                    systemSettings.health.airportName = data.city;
                    systemSettings.health.lat = systemSettings.mainCity.lat;
                    systemSettings.health.lon = systemSettings.mainCity.lon;
                }
                if (systemSettings.golf.autoFind == true) {
                    systemSettings.golf.teeTime.locationName = data.city;
                    systemSettings.golf.teeTime.lat = data.lat;
                    systemSettings.golf.teeTime.lon = data.lon;
                }
                if (systemSettings.garden.autoFind == true) {
                    systemSettings.garden.locationName = data.city;
                    systemSettings.garden.lat = data.lat;
                    systemSettings.garden.lon = data.lon;
                }
                if (systemSettings.traffic.autoFind == true) {
                    systemSettings.traffic.locationName = data.city;
                    systemSettings.traffic.lat = data.lat;
                    systemSettings.traffic.lon = data.lon;
                }
                if (systemSettings.airport.autoFind == true) {
                    grabNearbyAirports(data.lat, data.lon);
                }
                if (systemSettings.extraCity.autoFind == true) {
                    grabExtraCities(data.lat, data.lon, data.city);
                }
                //pulling for icao code
                $.getJSON(`https://api.weather.com/v3/location/near?geocode=${data.lat},${data.lon}&product=observation&format=json&apiKey=${systemSettings.apiKeys.api_key}`, function (icaodata) {
                    systemSettings.mainCity.obsIcaoCode = icaodata.location.stationId[0];
                    systemSettings.LBar.obsIcaoCode = icaodata.location.stationId[0];
                    if (systemSettings.upperDisplayCity.autoFind == true) {
                        systemSettings.upperDisplayCity.obsIcaoCode = icaodata.location.stationId[0];
                    }
                    if (systemSettings.health.autoFind == true) {
                        systemSettings.health.obsIcaoCode = icaodata.location.stationId[0];
                    }
                    if (systemSettings.nearbyCities.autoFind == true) {
                        grabNearbyCities(icaodata.location.stationId[0]);
                    }
                })
            })
        }
    }

    let locationQueue = [], nearbyRound = 0, newCities = [];
    function grabNearbyCities(icao) {
        if (nearbyRound == 0) {
            locationQueue.push(icao);
        }
        if (nearbyRound >= 10) {
            systemSettings.nearbyCities.cities = newCities.sort((a, b) => a.locationName.localeCompare(b.locationName));
            console.warn("Nearby pull was cut off after 10 turns, location list may not be full.");
            return;
        }
        nearbyRound++;

        let locpull = locationQueue.shift();
        $.getJSON(`https://api.weather.com/v3/location/near?icaoCode=${locpull}&product=observation&format=json&apiKey=${systemSettings.apiKeys.api_key}`, function (data) {
            for (let i = 0; i < data.location.stationId.length; i++) {
                createNewNearbyCity(data.location.stationId[i]);
            }
        });
        setTimeout(() => {
            if (newCities.length >= 8) {
                systemSettings.nearbyCities.cities = newCities.sort((a, b) => a.locationName.localeCompare(b.locationName));
            } else {
                var newcity = newCities[newCities.length - 1].obsIcaoCode;
                if (newcity == undefined) { newcity = newCities[1].obsIcaoCode }
                locationQueue.push(newcity);
                grabNearbyCities();
            }
        }, 750);
    }
    function createNewNearbyCity(icao) {
        var locName, dontPush;
        $.getJSON(`https://api.weather.com/v3/location/point?icaoCode=${icao}&language=en-US&format=json&apiKey=${systemSettings.apiKeys.api_key}`, function (data) {
            locName = data.location.displayName;
        }).then(() => {
            var cityObj = { locationName: locName, obsIcaoCode: icao };
            for (let i = 0; i < newCities.length; i++) {
                if (cityObj.locationName == systemSettings.mainCity.locationName) { dontPush = true }
                if (cityObj.locationName == newCities[i].locationName) { dontPush = true }
                if (cityObj.obsIcaoCode == newCities[i].obsIcaoCode) { dontPush = true }
                if (newCities.length >= 8) { dontPush = true }
            }
            if (!dontPush) { newCities.push(cityObj) }
        })
    }
    function grabNearbyAirports(lat, lon) {
        var airportCount = 0;
        $.getJSON(`https://api.weather.com/v3/location/near?geocode=${lat},${lon}&product=airport&subproduct=major&format=json&apiKey=${systemSettings.apiKeys.api_key}`, function (data) {
            for (let i = 0; i < data.location.iataCode.length; i++) {
                if (airportCount == systemSettings.airport.main.length) return;
                if (data.location.iataCode[i] == null) continue;
                systemSettings.airport.main[airportCount].airportName = data.location.airportName[i];
                systemSettings.airport.main[airportCount].iataCode = data.location.iataCode[i];
                airportCount++;
            }
        })
    }
    function grabExtraCities(lat, lon) {
        $.getJSON(`https://api.weather.com/v3/location/near?geocode=${lat},${lon}&product=observation&format=json&apiKey=${systemSettings.apiKeys.api_key}`, function (data) {
            //console.log(data);
            for (let i = 0; i < data.location.stationId.length; i++) {
                createNewExtraCity(data.location.stationId[i], data.location.distanceMi[i]);
                if (i == data.location.stationId.length - 1) {
                    //console.log(newExtraCities);
                    setTimeout(addExtraCities, 250);
                }
            }
        })
    }
    function createNewExtraCity(icao, dist) {
        var extraCityObj, dontPush = false;
        $.getJSON(`https://api.weather.com/v3/location/point?icaoCode=${icao}&language=en-US&format=json&apiKey=${systemSettings.apiKeys.api_key}`, function (data) {
            if (data.location.displayName == systemSettings.mainCity.locationName) return;
            if (icao == systemSettings.mainCity.obsIcaoCode) return;
            extraCityObj = {
                locationName: data.location.displayName.replaceAll("Township", ""),
                bulletinName: data.location.displayName.replaceAll("Township", "") + " Area",
                lat: data.location.latitude,
                lon: data.location.longitude,
                airportName: data.location.displayName,
                obsIcaoCode: data.location.icaoCode,
                upNextBG: "city_bg",
                slidesBG: "core_bg",
                radar: {
                    lat: data.location.latitude, lon: data.location.longitude, auto: true, zoom: systemSettings.mainCity.radar.zoom,
                    satCoords: [data.location.longitude, data.location.latitude],
                    radarCities: [
                        {locationName: data.location.displayName.replaceAll("Township", ""), dotTopPos: "518", dotLeftPos: "788", nameTopMargin:"-11", nameLeftMargin:"43"}
                    ],
                    radarIcons: []
                },
                distance: dist
            }
            for (let i = 0; i < newExtraCities.length; i++) {
                if (extraCityObj.locationName == newExtraCities[i].locationName) {
                    dontPush = true;
                    continue;
                }
            }
            if (!dontPush) { newExtraCities.push(extraCityObj) }
            newExtraCities = newExtraCities.sort((a, b) => a.distance - b.distance);
        })
    }
    function addExtraCities() {
        for (let i = 0; i < systemSettings.extraCity.maxCities; i++) {
            var extraCityUpNextBG = ["city_bg", "forest_bg", "mountain_bg"][i % 3]
            newExtraCities[i].upNextBG = extraCityUpNextBG;
            systemSettings.extraCity.cities.push(newExtraCities[i]);
            //adding locations in the event that there are no golf courses automatically added
            //YES it's the boring "(city) golf courses" joe but do you really want to burn money on a google api key?
            if (systemSettings.golf.autoFind == true) {
                systemSettings.golf.courses.push({
                    courseName: newExtraCities[i].locationName + " Golf Courses",
                    lat: newExtraCities[i].lat,
                    lon: newExtraCities[i].lon
                });
            }
        }
    }

    //data maps will be done later so them georgians can enjoy a localized temp unavailable map
    function centerDataMaps(region) {
        switch (region) {
            case "ME", "VT", "NH", "MA", "CT", "RI", "NY", "NJ", "PA", "DE", "MD", "WV", "OH", "IN", "MI", "WI", "MN", "IA", "IL":
                systemSettings.dataMaps.topPos = 78
                systemSettings.dataMaps.leftPos = -30
                systemSettings.dataMaps.zoom = 3.3
                break;
            case "NC", "VA", "MO", "KY", "TN":
                systemSettings.dataMaps.leftPos = -35.8;
                systemSettings.dataMaps.topPos = 33.3;
                systemSettings.dataMaps.zoom = 4;
                break;
            case 'GA, "FL', "SC", "AR", "LA", "MS", "AL":
                systemSettings.dataMaps.leftPos = -35.8;
                systemSettings.dataMaps.topPos = 33.3;
                systemSettings.dataMaps.zoom = 4;
                break;
            case "WA", "ID", "MT", "ND", "SD", "WY", "OR":
                systemSettings.dataMaps.leftPos = 41;
                systemSettings.dataMaps.topPos = 107;
                systemSettings.dataMaps.zoom = 4;
                break;
            case "CA", "NV", "UT", "CO", "NE", "KS":
                systemSettings.dataMaps.leftPos = 34;
                systemSettings.dataMaps.topPos = 67;
                systemSettings.dataMaps.zoom = 3.7;
                break;
            case "TX", "OK":
                systemSettings.dataMaps.leftPos = 6;
                systemSettings.dataMaps.topPos = 26;
                systemSettings.dataMaps.zoom = 3.7;
                break;
            case "AZ", "NM":
                systemSettings.dataMaps.leftPos = 44;
                systemSettings.dataMaps.topPos = 53;
                systemSettings.dataMaps.zoom = 4.5;
                break;
            default:
                systemSettings.dataMaps.leftPos = 0;
                systemSettings.dataMaps.topPos = 18;
                systemSettings.dataMaps.zoom = 1.25;
        }
    }

    function distanceByDegrees(c1, c2) {
        var lat1 = parseFloat(c1.lat), lon1 = parseFloat(c1.lon),
            lat2 = parseFloat(c2.lat), lon2 = parseFloat(c2.lon),
            dLat = lat2 - lat1, dLon = lon2 - lon1;
        return [Math.sqrt(dLat ** 2 + dLon ** 2), dLat, dLon];
    }

    function getTravelMapLimits(type){
        if(type === undefined){
            return [225, -225, 685, -685];
        }
        if(type[0] == "pacific" && type[1] == "north"){
            return [120, -340, 310, -1050];
        }
        // if(type[0] == "atlantic" && type[1] == null){
        //     return [225, -225, 1085, -285]
        // }
    }

    function initTravelMap(){
        distances = [];
        for(var i = 0; i < travelRegional.length; i++){
            let d = distanceByDegrees(systemSettings.mainCity, travelRegional[i])
            var x = { distance: d[0], index: i, coords: [d[1], d[2]] }
            distances.push(x);
            //console.log(x);
        }
        distances.sort((a, b) => a.distance - b.distance);
        var sysMapLeft = -(travelRegional[distances[0].index].leftPos - 645) > -600 ? -600 : -(travelRegional[distances[0].index].leftPos - 645);
        systemSettings.travel.regionalMap.mapLeft = sysMapLeft;
        var sysMapTop = -(travelRegional[distances[0].index].topPos - 455) > -250 ? -250 : -(travelRegional[distances[0].index].topPos - 455);
        systemSettings.travel.regionalMap.mapTop = sysMapTop;
        //travelLimits key: 0 = top, 1 = bottom, 2 = left, 3 = right
        var travelLimits = getTravelMapLimits(travelRegional[distances[0].index].type);
        var travelCount = 0;
        for(let j = 0; j < distances.length; j++){
            if(travelCount >= 7){break;}
            var travelTopLimit = travelRegional[distances[0].index].topPos - travelRegional[distances[j].index].topPos;
            var travelLeftLimit = travelRegional[distances[0].index].leftPos - travelRegional[distances[j].index].leftPos;
            if(travelTopLimit > travelLimits[0] || travelTopLimit < travelLimits[1]){continue;}
            if(travelLeftLimit > travelLimits[2] || travelLeftLimit < travelLimits[3]){continue;}
            systemSettings.travel.regionalMap.cities[travelCount] = travelRegional[distances[j].index];
            travelCount++;
        }
    }
}
var q = window.location.search ? window.location.search.split("?")[1] : undefined;
if (q != "nationalForecast") {
    //locationJS()
}