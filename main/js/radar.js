/*
 * This is kinda a beta version of the script,
 * go ahead and play around with it.
 * If I change anything to it by the time the XL
 * is released, I'll make sure to send it to you.
 * -Jenson
 */
//hi jenson - joe

var satZoom = 5
var mapStyle = "mapbox://styles/colster/cmiccqynn00as01s4bt6501il"
var locradar,
satmap,
satAmenities,
locradarAmenities,
locradarAmenitiesTrans,
radarEchoes,
satEchoes,
  loctimestamps,
  regtimestamps,
  sattimestamps,
  radarAnimation;
mapboxgl.accessToken = "nada";

function initRadarMaps() {
  mapboxgl.accessToken = map_key
  locradar = new mapboxgl.Map({
      container: 'radar-basemap', // container id
      style: mapStyle,
      center: [0,0],
      zoom: 7.2,
      trackResize: false
  });
  locradar.on('load', function() {
    locradar.setLayoutProperty('background', 'visibility', 'visible');//ocean
    locradar.setLayoutProperty('hawaii local', 'visibility', 'visible');//alaska mercator
    locradar.setLayoutProperty('hawaii regional', 'visibility', 'visible');//hawaii lambert
    locradar.setLayoutProperty('alaska', 'visibility', 'visible');//alaska
    locradar.setLayoutProperty('conus merc', 'visibility', 'visible');//conus mercator
    locradar.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
    locradar.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'none');//county lines
    locradar.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'none');//state lines
    locradar.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'none');//coastlines
    locradar.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
    locradar.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'none');//gray roads
    locradar.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
    locradar.setLayoutProperty('place-label', 'visibility', 'none');
    locradar.setLayoutProperty('place-label copy', 'visibility', 'none');
    locradar.setLayoutProperty('airport-label', 'visibility', 'none');
    locradar.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
    locradar.setLayoutProperty('country-boundaries', 'visibility', 'none');
  });

  satmap = new mapboxgl.Map({
      container: 'sat-basemap', // container id
      style: mapStyle,
      center: [0,0],
      zoom: satZoom,
      trackResize: false,
      projection: {
        name: 'lambertConformalConic',
        center: [-100, 45],
        parallels: [30, 30]
      },
  });
  satmap.on('load', function() {
    satmap.setLayoutProperty('background', 'visibility', 'visible');//ocean
    satmap.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
    satmap.setLayoutProperty('hawaii regional', 'visibility', 'visible');//hawaii lambert
    satmap.setLayoutProperty('alaska', 'visibility', 'visible');//alaska
    satmap.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
    satmap.setLayoutProperty('conus sat', 'visibility', 'visible');//conus lambert
    satmap.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'none');//county lines
    satmap.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'none');//state lines
    satmap.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'none');//coastlines
    satmap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
    satmap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'none');//gray roads
    satmap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
    satmap.setLayoutProperty('place-label', 'visibility', 'none');
    satmap.setLayoutProperty('place-label copy', 'visibility', 'none');
    satmap.setLayoutProperty('airport-label', 'visibility', 'none');
    satmap.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
    satmap.setLayoutProperty('country-boundaries', 'visibility', 'none');
  });

  radarEchoes = new mapboxgl.Map({
      container: 'radar-echoes', // container id
      style: mapStyle,
      center: [0,0],
      zoom: 7.2,
      trackResize: false
  });
  radarEchoes.on('load', function() {
    radarEchoes.setLayoutProperty('background', 'visibility', 'none');//ocean
    radarEchoes.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
    radarEchoes.setLayoutProperty('hawaii regional', 'visibility', 'none');//hawaii lambert
    radarEchoes.setLayoutProperty('alaska', 'visibility', 'none');//alaska
    radarEchoes.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
    radarEchoes.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
    radarEchoes.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'none');//county lines
    radarEchoes.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'none');//state lines
    radarEchoes.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'none');//coastlines
    radarEchoes.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
    radarEchoes.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'none');//gray roads
    radarEchoes.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
    radarEchoes.setLayoutProperty('place-label', 'visibility', 'none');
    radarEchoes.setLayoutProperty('place-label copy', 'visibility', 'none');
    radarEchoes.setLayoutProperty('airport-label', 'visibility', 'none');
    radarEchoes.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
    radarEchoes.setLayoutProperty('country-boundaries', 'visibility', 'none');
  });

  satEchoes = new mapboxgl.Map({
      container: 'sat-echoes', // container id
      style: mapStyle,
      center: [0,0],
      zoom: satZoom,
      trackResize: false,
      projection: {
        name: 'lambertConformalConic',
        center: [-100, 45],
        parallels: [30, 30]
      },
  });
  satEchoes.on('load', function() {
    satEchoes.setLayoutProperty('background', 'visibility', 'none');//ocean
    satEchoes.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
    satEchoes.setLayoutProperty('hawaii regional', 'visibility', 'none');//hawaii lambert
    satEchoes.setLayoutProperty('alaska', 'visibility', 'none');//alaska
    satEchoes.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
    satEchoes.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
    satEchoes.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'none');//county lines
    satEchoes.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'none');//state lines
    satEchoes.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'none');//coastlines
    satEchoes.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
    satEchoes.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'none');//gray roads
    satEchoes.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
    satEchoes.setLayoutProperty('place-label', 'visibility', 'none');
    satEchoes.setLayoutProperty('place-label copy', 'visibility', 'none');
    satEchoes.setLayoutProperty('airport-label', 'visibility', 'none');
    satEchoes.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
    satEchoes.setLayoutProperty('country-boundaries', 'visibility', 'none');
  });

  satAmenities = new mapboxgl.Map({
      container: 'sat-amenities', // container id
      style: mapStyle,
      center: [0,0],
      zoom: satZoom,
      trackResize: false,
      projection: {
        name: 'lambertConformalConic',
        center: [-100, 45],
        parallels: [30, 30]
      },
  });

  satAmenities.on('load', function() {
    satAmenities.setLayoutProperty('background', 'visibility', 'none');//ocean
    satAmenities.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
    satAmenities.setLayoutProperty('hawaii regional', 'visibility', 'none');//hawaii lambert
    satAmenities.setLayoutProperty('alaska', 'visibility', 'none');//alaska
    satAmenities.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
    satAmenities.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
    satAmenities.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'none');//county lines
    satAmenities.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'visible');//state lines
    satAmenities.setPaintProperty('cb-2019-us-state-20m-nocoast-7m1rrd', "line-width", 4)
    satAmenities.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'visible');//coastlines
    satAmenities.setPaintProperty('i2-coastlines-conus-ak-hi-06wtga', "line-width", 4)
    satAmenities.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
    satAmenities.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'none');//gray roads
    satAmenities.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
    satAmenities.setLayoutProperty('place-label', 'visibility', 'none');
    satAmenities.setLayoutProperty('place-label copy', 'visibility', 'none');
    satAmenities.setLayoutProperty('airport-label', 'visibility', 'none');
    satAmenities.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
    satAmenities.setLayoutProperty('country-boundaries', 'visibility', 'visible');
    satAmenities.setPaintProperty('country-boundaries', "line-width", 4)
  });
  locradarAmenities = new mapboxgl.Map({
      container: 'radar-amenities', // container id
      style: mapStyle,
      center: [0,0],
      zoom: 7.2,
      trackResize: false
  });
  locradarAmenities.on('load', function() {
    locradarAmenities.setLayoutProperty('background', 'visibility', 'none');//ocean
    locradarAmenities.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
    locradarAmenities.setLayoutProperty('hawaii regional', 'visibility', 'none');//hawaii lambert
    locradarAmenities.setLayoutProperty('alaska', 'visibility', 'none');//alaska
    locradarAmenities.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
    locradarAmenities.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
    locradarAmenities.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'visible');//county lines
    locradarAmenities.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'visible');//state lines
    locradarAmenities.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'visible');//coastlines
    locradarAmenities.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'visible');//black roads
    locradarAmenities.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'visible');//gray roads
    locradarAmenities.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
    locradarAmenities.setLayoutProperty('place-label', 'visibility', 'none');
    locradarAmenities.setLayoutProperty('place-label copy', 'visibility', 'none');
    locradarAmenities.setLayoutProperty('airport-label', 'visibility', 'none');
    locradarAmenities.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
    locradarAmenities.setLayoutProperty('country-boundaries', 'visibility', 'visible');
    
    locradarAmenities.setPaintProperty('i2-coastlines-conus-ak-hi-06wtga', "line-width", 3)
    locradarAmenities.setPaintProperty('i2-county-lines-conus-ak-hi-81h5x4', "line-width", 3)
    locradarAmenities.setPaintProperty('cb-2019-us-state-20m-nocoast-7m1rrd', "line-width", 7)
    locradarAmenities.setPaintProperty('i2-road-vectors-conus-ak-hi-4r25d3', "line-width", 16)
    locradarAmenities.setPaintProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', "line-width", 6)
  });

  locradarAmenitiesTrans = new mapboxgl.Map({
      container: 'radar-amenities-trans', // container id
      style: mapStyle,
      center: [0,0],
      zoom: 7.2,
      trackResize: false
  });
  locradarAmenitiesTrans.on('load', function() {
    locradarAmenitiesTrans.setLayoutProperty('background', 'visibility', 'none');//ocean
    locradarAmenitiesTrans.setLayoutProperty('hawaii local', 'visibility', 'none');//alaska mercator
    locradarAmenitiesTrans.setLayoutProperty('hawaii regional', 'visibility', 'none');//hawaii lambert
    locradarAmenitiesTrans.setLayoutProperty('alaska', 'visibility', 'none');//alaska
    locradarAmenitiesTrans.setLayoutProperty('conus merc', 'visibility', 'none');//conus mercator
    locradarAmenitiesTrans.setLayoutProperty('conus sat', 'visibility', 'none');//conus lambert
    locradarAmenitiesTrans.setLayoutProperty('i2-county-lines-conus-ak-hi-81h5x4', 'visibility', 'visible');//county lines
    locradarAmenitiesTrans.setLayoutProperty('cb-2019-us-state-20m-nocoast-7m1rrd', 'visibility', 'visible');//state lines
    locradarAmenitiesTrans.setLayoutProperty('i2-coastlines-conus-ak-hi-06wtga', 'visibility', 'visible');//coastlines
    locradarAmenitiesTrans.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3', 'visibility', 'none');//black roads
    locradarAmenitiesTrans.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', 'visibility', 'visible');//gray roads
    locradarAmenitiesTrans.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (2)', 'visibility', 'none');
    locradarAmenitiesTrans.setLayoutProperty('place-label', 'visibility', 'none');
    locradarAmenitiesTrans.setLayoutProperty('place-label copy', 'visibility', 'none');
    locradarAmenitiesTrans.setLayoutProperty('airport-label', 'visibility', 'none');
    locradarAmenitiesTrans.setLayoutProperty('i2-road-vectors-conus-ak-hi-4r25d3 (4)', 'visibility', 'none');
    locradarAmenitiesTrans.setLayoutProperty('country-boundaries', 'visibility', 'visible');

    locradarAmenitiesTrans.setPaintProperty('i2-coastlines-conus-ak-hi-06wtga', "line-width", 3)
    locradarAmenitiesTrans.setPaintProperty('i2-county-lines-conus-ak-hi-81h5x4', "line-width", 3)
    locradarAmenitiesTrans.setPaintProperty('cb-2019-us-state-20m-nocoast-7m1rrd', "line-width", 7)
    locradarAmenitiesTrans.setPaintProperty('i2-road-vectors-conus-ak-hi-4r25d3 copy', "line-width", 6)
  });
}
//45 (30) frames local doppler
async function fetchRadarTimestamps(map, frameCount) {
  var timestamps = map === radarEchoes || map === locradarAmenities ? loctimestamps : sattimestamps;
  timestamps = [];
  var mapType = map === radarEchoes || map === locradarAmenities ? "twcRadarMosaic" : "satrad";
  try {
    const response = await fetch(
      `https://api.weather.com/v3/TileServer/series/productSet/PPAcore?filter=${mapType}&apiKey=${api_key}`
    );
    const data = await response.json();

    if (mapType === "twcRadarMosaic" && !data.seriesInfo?.twcRadarMosaic) {
      console.error("No radar series info found.");
      return [];
    }
    if (mapType === "satrad" && !data.seriesInfo?.satrad) {
      console.error("No radar series info found.");
      return [];
    }

    if (mapType === "satrad") {
      return (sortedTS = data.seriesInfo.satrad.series
        .sort((a, b) => a.ts - b.ts)
        .map((item) => item.ts)
        .slice(-frameCount));
    }
    return (sortedTS = data.seriesInfo.twcRadarMosaic.series
      .sort((a, b) => a.ts - b.ts)
      .map((item) => item.ts)
      .slice(-frameCount));
  } catch (error) {
    console.error("Failed to fetch radar timestamps:", error);
    return [];
  }
}

async function addRadarLayers(map, timestamps) {
  for (const timestamp of timestamps) {
    const sourceId = map === radarEchoes ? `radar_${timestamp}` : `satrad_${timestamp}`;
    const layerId = map === radarEchoes ? `radarlayer_${timestamp}` : `satradlayer_${timestamp}`;
    const mapType = map === radarEchoes ? "twcRadarMosaic" : "satrad";

    if (!map.getSource(sourceId)) {
      // Add raster source for the timestamp
      map.addSource(sourceId, {
        type: "raster",
        tiles: [
          `https://api.weather.com/v3/TileServer/tile/${mapType}?ts=${timestamp}&xyz={x}:{y}:{z}&apiKey=${api_key}`,
        ],
        tileSize: 512,
        minzoom: 5,
        maxzoom: 12,
      });
    }

    if (!map.getLayer(layerId)) {
      map.addLayer({
        id: layerId,
        type: "raster",
        source: sourceId,
        layout: { visibility: "none" },
        paint: {
          "raster-opacity": 1,
          "raster-fade-duration": 0,
          "raster-brightness-max": 0.9,
        },
      });
    }
  }
}

function animateRadar(map, timestamps) {
  let interval = map == radarEchoes || map == locradarAmenities ? 90 : 80;
  const layerPrefix = map === radarEchoes ? "radarlayer_" : "satradlayer_";
  let currentIndex = 0;
  const validLayers = timestamps
    .map((ts) => `${layerPrefix}${ts}`)
    .filter((layerId) => map.getLayer(layerId));

  if (validLayers.length === 0) {
    console.error("No radar layers available for animation.");
    //weatherData.radarUnavailable = true
    return;
  } else {
    //weatherData.radarUnavailable = false
  }

  const setLayerVisibility = (layerId, visibility) => {
    if (map.getLayer(layerId)) {
      map.setLayoutProperty(layerId, "visibility", visibility);
    }
  };

  validLayers.forEach((layerId) => setLayerVisibility(layerId, "none"));
  setLayerVisibility(validLayers[0], "visible");

  var animationInterval = setInterval(() => {
    setLayerVisibility(validLayers[currentIndex], "none");
    currentIndex = (currentIndex + 1) % validLayers.length;
    setLayerVisibility(validLayers[currentIndex], "visible");
    if (currentIndex === validLayers.length - 1) {
      clearInterval(animationInterval);
    }
  }, interval);

  radarAnimation = setInterval(() => {
    animationInterval = setInterval(() => {
      setLayerVisibility(validLayers[currentIndex], "none");
      currentIndex = (currentIndex + 1) % validLayers.length;
      setLayerVisibility(validLayers[currentIndex], "visible");
      if (currentIndex === validLayers.length - 1) {
        clearInterval(animationInterval);
      }
    }, interval);
  }, interval * validLayers.length + 2000);
}

function cleanupOldRadarLayers(map, timestamps) {
  const layerPrefix = map === radarEchoes ? "radarlayer_" : "satradlayer_";

  map
    .getStyle()
    .layers.filter((layer) => layer.id.startsWith(layerPrefix))
    .forEach((layer) => {
      const timestamp = layer.id.split("_")[1];
      if (!timestamps.includes(Number(timestamp))) {
        map.removeLayer(layer.id);
        map.removeSource(layer.source);
      }
    });
}
async function initializeRadar(map) {
  var timestamps = map === radarEchoes || map === locradarAmenities ? loctimestamps : sattimestamps;
  cleanupOldRadarLayers(map, timestamps);
  clearInterval(radarAnimation);
  if (map == radarEchoes || map == locradarAmenities) {
    loctimestamps = await fetchRadarTimestamps(map, 36);
    await addRadarLayers(map, loctimestamps);
  } else if (map == satEchoes) {
    sattimestamps = await fetchRadarTimestamps(map, 60);
    await addRadarLayers(map, sattimestamps);
  }
  //const animation = animateRadar(map, timestamps)
  //map.resize();
}

async function startRadar(map) {
  var timestamps = map === radarEchoes || map === locradarAmenities ? loctimestamps : sattimestamps;
  cleanupOldRadarLayers(map, timestamps)
  clearInterval(radarAnimation);
  if (map == radarEchoes || map == locradarAmenities) {
    loctimestamps = await fetchRadarTimestamps(map, 36);
    await addRadarLayers(map, loctimestamps);
  } else if (map == satEchoes) {
    sattimestamps = await fetchRadarTimestamps(map, 60);
    await addRadarLayers(map, sattimestamps);
  }
  // timestamps = await fetchRadarTimestamps(map, 36)
  // await addRadarLayers(map, timestamps)
  const animation = animateRadar(map, timestamps);
  //map.resize();
}/*
async function checkRadar(map) {
    var Checktimestamps = map === radarEchoes ? loctimestamps : sattimestamps;
    if (map == radarEchoes) {
      loctimestamps = await fetchRadarTimestamps(map, 36);
      await addRadarLayers(map, loctimestamps);
    }
    if (map === radarEchoes) {
      if (Checktimestamps == undefined) {weatherData.dopplerUnavailable = true} else {weatherData.dopplerUnavailable = false}
    }
}*/