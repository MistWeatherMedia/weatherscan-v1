/*
// Make the COLSTER map usable script by PicelBoi

// XL Map definitions
var xlMapWidth = 4952;
var xlMapHeight = 2896;
var xlMapLeft = -128.225218;
var xlMapRight = -64.0593194;

//var xlMapLeft = -126.73410285179935;
//var xlMapRight = -63.618689263853;
//var xlMapBottom = 22.112791914850302;

var xlMapBottom = 21.1857919148503;

// Map's "resolution"
var screenWidth = 540;
var screenHeight = 360;

var regScreenWidth = 1620;
var regScreenHeight = 1080;

// Function to convert lat/lon to map x and y.
// from https://stackoverflow.com/questions/2103924/mercator-longitude-and-latitude-calculations-to-x-and-y-on-a-cropped-map-of-the
function convertGeoToPixel(
  latitude,
  longitude,
  mapWidth, // in pixels
  mapHeight, // in pixels
  mapLonLeft, // in degrees
  mapLonRight,
  mapLatBottom // in degrees
) {
  var mapLonDelta = mapLonRight - mapLonLeft;
  var mapLatBottomDegree = (mapLatBottom * Math.PI) / 180;
  var x = (longitude - mapLonLeft) * (mapWidth / mapLonDelta);

  latitude = (latitude * Math.PI) / 180;
  var worldMapWidth = ((mapWidth / mapLonDelta) * 360) / (2 * Math.PI);
  var mapOffsetY = (worldMapWidth / 2) * Math.log((1 + Math.sin(mapLatBottomDegree)) / (1 - Math.sin(mapLatBottomDegree)));
  var y = (mapHeight - ((worldMapWidth / 2) * Math.log((1 + Math.sin(latitude)) / (1 - Math.sin(latitude))) - mapOffsetY) - ((locationConfig.mainCity.lat - 40.6557)*5));

  return [x, y];
}

function centerBaseMap(lat, lon) {
  var xy = convertGeoToPixel(
    lat,
    lon,
    xlMapWidth,
    xlMapHeight,
    xlMapLeft,
    xlMapRight,
    xlMapBottom
  );

  var dopplerBaseMapElement = document.getElementById("radar-doppler-map");
  var dopplerBaseMapCityElement = document.getElementById(
    "radar-doppler-map-cities"
  );
  var thisShouldntExist = document.getElementById("radar-doppler-map-cities-1");

  var style = "left: " + -(xy[0] - screenWidth / 2) + "px; top: " + -(xy[1] - screenHeight / 2) + "px;";

  dopplerBaseMapElement.setAttribute("style", style);

  dopplerBaseMapCityElement.setAttribute("style", style);

  thisShouldntExist.setAttribute("style", style);
}

function centerBaseMapRegional(lat, lon) {
  var xy = convertGeoToPixel(
    lat,
    lon,
    xlMapWidth,
    xlMapHeight,
    xlMapLeft,
    xlMapRight,
    xlMapBottom
  );

  var regionalBaseMapElement = document.getElementById("radar-regional-map");
  var regionalBordersElement = document.getElementById("radar-regional-map-borders");
  var satBaseMapElement = document.getElementById("radar-sat-map");
  var satBordersElement = document.getElementById("radar-sat-map-borders");

  var style =
    "left: " +
    -(xy[0] - regScreenWidth / 2) +
    "px; top: " +
    -(xy[1] - regScreenHeight / 2) +
    "px;";

  regionalBaseMapElement.setAttribute("style", style);
  regionalBordersElement.setAttribute("style", style);
  satBaseMapElement.setAttribute("style", style);
  satBordersElement.setAttribute("style", style);
}

function mapSetBottom(bottom) {
  xlMapBottom = bottom;
  centerBaseMap(locationConfig.radar.localCoords.lat, locationConfig.radar.localCoords.lon);
  centerBaseMapRegional(
    locationConfig.radar.regionalCoords.lat,
    locationConfig.radar.regionalCoords.lon
  );
}

function mapSetLeft(left) {
  xlMapLeft = left;
  centerBaseMap(locationConfig.radar.localCoords.lat, locationConfig.radar.localCoords.lon);
  centerBaseMapRegional(
    locationConfig.radar.regionalCoords.lat,
    locationConfig.radar.regionalCoords.lon
  );
}

function mapSetRight(right) {
  xlMapRight = right;
  centerBaseMap(locationConfig.radar.localCoords.lat, locationConfig.radar.localCoords.lon);
  centerBaseMapRegional(
    locationConfig.radar.regionalCoords.lat,
    locationConfig.radar.regionalCoords.lon
  );
}

function mapPrintLoc() {
}*/
var trfMap
function initTrafficMap() {
    trfMap = tt.map({
        key: traf_key,
        container: 'trafmap',
        center: [systemSettings.traffic.lon, systemSettings.traffic.lat],
        doubleClickZoom: false,
        scrollZoom: false,
        dragPan: false,
        boxZoom: false,
        dragRotate: false,
        touchZoomRotate: false,
        touchPitch: false,
        pitchWithRotate: false,
        zoom: 0,
        style: "https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBAQW1IV1hMWktoeTllNUJYUjtmZTAyMzAwYy1iMjMzLTQ3NDktOTBiMC1mOGEyZGNhOWM5ZWM=.json?key=" + traf_key,
        stylesVisibility: {
            trafficFlow: true
        },
    });
}
function checkTrafMap() {
  $.getJSON("https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBAQW1IV1hMWktoeTllNUJYUjtmZTAyMzAwYy1iMjMzLTQ3NDktOTBiMC1mOGEyZGNhOWM5ZWM=.json?key=" + traf_key, function (data) {
    try {
      if (data.version) {
        weatherData.trafficMapUnavailable = false
        return false
      } else {
        weatherData.trafficMapUnavailable = true
        return true
      }
    } catch (error) {
      weatherData.trafficMapUnavailable = true
      return true
    }
  }).fail(function() {
    weatherData.trafficMapUnavailable = true
    return true
  })
}
function setTrafMap(unAvailable) {
  //console.log("map status", weatherData.trafficMapUnavailable)
  if (unAvailable == true || unAvailable == undefined) {
    if ($(".traffic-overview .trafmap-container #trafmap").length > 0) {
      $(".traffic-overview .trafmap-container #trafmap").remove()
    }
    if (trfMap) {
      trfMap = undefined
    }
  } else if (unAvailable == false) {
    if ($(".traffic-overview .trafmap-container #trafmap").length == 0) {
      var Tchild = document.createElement("div");
      Tchild.id = "trafmap";
      document.getElementsByClassName("trafmap-container")[0].appendChild(Tchild);
      initTrafficMap()
      return
    }
  }
}
function initTravelForecast() {
  var tfClass = document.getElementsByClassName("travel-forecast")[0]
  $(".travel-forecast .basemap").css({"background-position-y":systemSettings.travel.regionalMap.mapTop+"px", "background-position-x":systemSettings.travel.regionalMap.mapLeft+"px"})
  $(".travel-forecast .map-borders").css({"background-position-y":systemSettings.travel.regionalMap.mapTop+"px", "background-position-x":systemSettings.travel.regionalMap.mapLeft+"px"})
  if(systemSettings.travel.regionalMap.autoFind == true){
    $(".travel-forecast .cities").css({"top":systemSettings.travel.regionalMap.mapTop+"px", "left":systemSettings.travel.regionalMap.mapLeft+"px","position":"absolute"})
  }
  for (var i = 0; i < systemSettings.travel.regionalMap.cities.length; i++) {
    //console.log(i)
    //console.log(numToWord(i))
    var child = document.createElement("div")
    child.className = "city " + numToWord(i)
    tfClass.getElementsByClassName("cities")[0].appendChild(child)
    var cnChild = document.createElement("div")
    cnChild.className = "shrinkY cityname"
    tfClass.getElementsByClassName("cities")[0].getElementsByClassName("city " + numToWord(i))[0].appendChild(cnChild)
    var tChild = document.createElement("div")
    tChild.className = "shrinkY temperature"
    tfClass.getElementsByClassName("cities")[0].getElementsByClassName("city " + numToWord(i))[0].appendChild(tChild)
    var iChild = document.createElement("div")
    iChild.className = "mapicon icon"
    tfClass.getElementsByClassName("cities")[0].getElementsByClassName("city " + numToWord(i))[0].appendChild(iChild)
    $(".travel-forecast .cities .city." + numToWord(i)).css({"top":systemSettings.travel.regionalMap.cities[i].topPos+"px", "left":systemSettings.travel.regionalMap.cities[i].leftPos+"px"})
  }
}
function createRadarCities(type) {
  var header
  if (type == "main") {header = systemSettings.mainCity.radar} else if (type == "extra") {header = systemSettings.extraCity.cities[locationid].radar}
  var drClass = document.getElementsByClassName("doppler-radar")[0]
  for (var i = 0; i < header.radarCities.length; i++) {
    var child = document.createElement("div")
    child.className = "city " + numToWord(i)
    drClass.getElementsByClassName("cities")[0].appendChild(child)
    var dChild = document.createElement("div")
    dChild.className = "dot"
    drClass.getElementsByClassName("cities")[0].getElementsByClassName("city  " + numToWord(i))[0].appendChild(dChild)
    var doChild = document.createElement("div")
    doChild.className = "dot-outline"
    //drClass.getElementsByClassName("cities")[0].getElementsByClassName("city  " + numToWord(i))[0].appendChild(doChild)
    var nChild = document.createElement("div")
    nChild.className = "name shrinkY"
    drClass.getElementsByClassName("cities")[0].getElementsByClassName("city  " + numToWord(i))[0].appendChild(nChild)
    $(".doppler-radar .cities .city." + numToWord(i)).css({"top":header.radarCities[i].dotTopPos+"px", "left":header.radarCities[i].dotLeftPos+"px"})
    $(".doppler-radar .cities .city." + numToWord(i) + " .name").text(header.radarCities[i].locationName)
    $(".doppler-radar .cities .city." + numToWord(i) + " .name").css({"top":header.radarCities[i].nameTopMargin+"px", "left":header.radarCities[i].nameLeftMargin+"px"})
    var Tchild = document.createElement("div")
    Tchild.className = "city " + numToWord(i)
    drClass.getElementsByClassName("cities-trans")[0].appendChild(Tchild)
    var TdChild = document.createElement("div")
    TdChild.className = "dot-trans"
    drClass.getElementsByClassName("cities-trans")[0].getElementsByClassName("city  " + numToWord(i))[0].appendChild(TdChild)
    var TdoChild = document.createElement("div")
    TdoChild.className = "dot-outline"
    drClass.getElementsByClassName("cities-trans")[0].getElementsByClassName("city  " + numToWord(i))[0].appendChild(TdoChild)
    var TnChild = document.createElement("div")
    TnChild.className = "name-trans shrinkY"
    drClass.getElementsByClassName("cities-trans")[0].getElementsByClassName("city  " + numToWord(i))[0].appendChild(TnChild)
    //var TnoChild = document.createElement("div")
    //TnoChild.className = "name-outline shrinkY"
    //drClass.getElementsByClassName("cities-trans")[0].getElementsByClassName("city  " + numToWord(i))[0].appendChild(TnoChild)
    $(".doppler-radar .cities-trans .city." + numToWord(i)).css({"top":header.radarCities[i].dotTopPos+"px", "left":header.radarCities[i].dotLeftPos+"px"})
    $(".doppler-radar .cities-trans .city." + numToWord(i) + " .name-trans").text(header.radarCities[i].locationName)
    $(".doppler-radar .cities-trans .city." + numToWord(i) + " .name-trans").css({"top":header.radarCities[i].nameTopMargin+"px", "left":header.radarCities[i].nameLeftMargin+"px"})
    //$(".doppler-radar .cities-trans .city." + numToWord(i) + " .name-outline").text(header.radarCities[i].locationName)
    //$(".doppler-radar .cities-trans .city." + numToWord(i) + " .name-outline").css({"top":header.radarCities[i].nameTopMargin+"px", "left":header.radarCities[i].nameLeftMargin+"px"})
  }
}
function createRadarIcons(type) {
  var header
  if (type == "main") {header = systemSettings.mainCity.radar} else if (type == "extra") {header = systemSettings.extraCity.cities[locationid].radar}
  drClass = document.getElementsByClassName("doppler-radar")[0]
  for (var i = 0; i < header.radarIcons.length; i++) {
    var child = document.createElement("div")
    child.className = "icon " + numToWord(i)
    drClass.getElementsByClassName("icons")[0].appendChild(child)
    var iChild = document.createElement("div")
    iChild.className = "icon " + header.radarIcons[i].type
    drClass.getElementsByClassName("icons")[0].getElementsByClassName("icon  " + numToWord(i))[0].appendChild(iChild)
    var ioChild = document.createElement("div")
    ioChild.className = "icon-outline " + header.radarIcons[i].type
    //drClass.getElementsByClassName("icons")[0].getElementsByClassName("icon  " + numToWord(i))[0].appendChild(ioChild)
    var itChild = document.createElement("div")
    itChild.className = "text " + header.radarIcons[i].type
    drClass.getElementsByClassName("icons")[0].getElementsByClassName("icon  " + numToWord(i))[0].appendChild(itChild)

    var tchild = document.createElement("div")
    tchild.className = "icon " + numToWord(i)
    drClass.getElementsByClassName("icons-trans")[0].appendChild(tchild)
    var tiChild = document.createElement("div")
    tiChild.className = "icon " + header.radarIcons[i].type
    drClass.getElementsByClassName("icons-trans")[0].getElementsByClassName("icon  " + numToWord(i))[0].appendChild(tiChild)
    var tioChild = document.createElement("div")
    tioChild.className = "icon-outline " + header.radarIcons[i].type
    drClass.getElementsByClassName("icons-trans")[0].getElementsByClassName("icon  " + numToWord(i))[0].appendChild(tioChild)
    var titChild = document.createElement("div")
    titChild.className = "text " + header.radarIcons[i].type
    drClass.getElementsByClassName("icons-trans")[0].getElementsByClassName("icon  " + numToWord(i))[0].appendChild(titChild)

    $(".doppler-radar .icons .icon." + numToWord(i)).css({"top":header.radarIcons[i].topPos+"px", "left":header.radarIcons[i].leftPos+"px"})
    $(".doppler-radar .icons .icon." + numToWord(i) + " .text").text(header.radarIcons[i].text)
    $(".doppler-radar .icons-trans .icon." + numToWord(i)).css({"top":header.radarIcons[i].topPos+"px", "left":header.radarIcons[i].leftPos+"px"})
    $(".doppler-radar .icons-trans .icon." + numToWord(i) + " .text").text(header.radarIcons[i].text)
    if (Number(header.radarIcons[i].text) >= 100) {
      $(".doppler-radar .icons .icon." + numToWord(i) + " .text").css("font-size", "31px")
      $(".doppler-radar .icons-trans .icon." + numToWord(i) + " .text").css("font-size", "31px")
    }
  }
}
function deleteRadarCities() {
  var drClass = document.getElementsByClassName("doppler-radar")[0]
  const div = drClass.getElementsByClassName("cities")[0]
  while (div.firstChild) {
      div.removeChild(div.firstChild)
  }
  const tdiv = drClass.getElementsByClassName("cities-trans")[0]
  while (tdiv.firstChild) {
      tdiv.removeChild(tdiv.firstChild)
  }
}
function deleteRadarIcons() {
  var drClass = document.getElementsByClassName("doppler-radar")[0]
  const div = drClass.getElementsByClassName("icons")[0]
  while (div.firstChild) {
      div.removeChild(div.firstChild)
  }
  const tdiv = drClass.getElementsByClassName("icons-trans")[0]
  while (tdiv.firstChild) {
      tdiv.removeChild(tdiv.firstChild)
  }
}
function alignDataMaps() {
  $(".data-map").css({"scale":systemSettings.dataMaps.zoom, "top":systemSettings.dataMaps.topPos + "%", "left":systemSettings.dataMaps.leftPos + "%"})
}