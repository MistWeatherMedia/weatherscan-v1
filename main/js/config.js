var api_key = "";
var map_key = "";
var traf_key = "";

var systemSettings = {}

var slideSettings = {
  order: [
    {slideLineup: []},
    {slideLineup: []},
  ],
};

var introPackage = {duration: 10000,
  group: "intro", slides: [
    {duration: 10000, function: "cityIntro" },
  ]
}
var severePackageA = {duration: 120000, group: "severeA", slides: []}
var severePackageB = {duration: 60000, group: "severeB", slides: []}
var severePackageTwo = {duration: 60000, group: "severe2", slides: []}
var forecastPackage = {duration: 120000, 
  group: "forecast", slides: [
    {duration: 10000,  function: "cityIntro" },
    //{duration: 8000,  function: "bulletin" },
    {duration: 12000,  function: "currentConditions" },
    {duration: 16000,  function: "nearbyCities" },
    {duration: 16000,  function: "radarChooser" },
    {duration: 42000,  function: "localForecast" },
    {duration: 14000,  function: "extendedForecast" },
    {duration: 10000,  function: "almanac" },
  ]
}
var miniPackageOne = {duration: 60000, 
  group: "minicoreone", slides: [
    //{duration: 8000,  function: "bulletin" },
    {duration: 14000,  function: "currentConditions" },
    {duration: 16000,  function: "radarChooser"},
    {duration: 14000,  function: "dayPart" },
    {duration: 16000,  function: "extendedForecast" },
  ]
}
var miniPackageTwo = {duration: 60000, 
  group: "minicoretwo", slides: [
    //{duration: 10000,  function: "bulletin" },
    {duration: 10000,  function: "currentConditions" },
    {duration: 15000,  function: "radarChooser" },
    {duration: 10000,  function: "localForecast" },
  ]
}
var radarPackage = {duration: 60000, group: "radar", slides: [
  {duration: 60000,  function: "dopplerRadar" },
]}
var eBaseLU = [
  //{duration: 10000,  function: "bulletin" },
  {duration: 14000,  function: "currentConditions" },
  {duration: 16000,  function: "radarChooser" },
  {duration: 14000,  function: "dayPart" },
  {duration: 16000,  function: "extendedForecast" },
  {function: "changeELoc" },
]
var extraPackage = {duration: 60000, /*times amount of cities*/ 
  group: "extralocal", slides: [
  ]
}
var spanishPackage = {duration: 60000, group: "spanish", slides: [
  {duration: 10000,  function: "currentConditions" },
  {duration: 15000,  function: "radarChooser" },
  {duration: 10000,  function: "dayPart" },
  {duration: 10000,  function: "extendedForecast" },
]}
var trafficPackage = {duration: 60000, group: "traffic", slides: [
  {duration: 5000,  function: "trafficIntro" },
  {duration: 10000,  function: "trafficOverview" },
  {duration: 10000,  function: "trafficReport" },
  {duration: 10000, function: "trafficFlow"}
]}
var travelPackage = {duration: 60000, group: "travel", slides: [
  {duration: 5000,  function: "travelIntro" },
  {duration: 10000,  function: "travelWeather" },
  {duration: 10000,  function: "travelForecast" },
  {duration: 10000,  function: "destinationForecast" },
]}
var airportPackage = {duration: 60000, group: "airport", slides: [
  {duration: 5000,  function: "airportIntro" },
  {duration: 10000,  function: "airportConditions" },
  {duration: 10000,  function: "nationalAirports" },
]}
var internationalPackage = {duration: 60000, group: "international", slides: [
  {duration: 5000,  function: "internationalIntro" },
  {duration: 10000,  function: "internationalMap" },
  {duration: 10000,  function: "internationalForecast" },
]}
var golfPackage  = {duration: 60000, group: "golf", slides: [
  {duration: 5000,  function: "golfIntro" },
  {duration: 10000,  function: "teeTime" },
  {duration: 10000,  function: "golfIndex" },
  {duration: 10000,  function: "courseForecast" },
  {duration: 5000,  function: "golfPromo" },
]}
var healthPackage = {duration: 60000, group: "health", slides: [
  {duration: 5000,  function: "healthIntro" },
  {duration: 10000,  function: "outdoorActivity" },
  {duration: 10000,  function: "allergyReport" },
  {duration: 10000,  function: "healthForecast" },
  {duration: 10000,  function: "airQuality" },
  {duration: 10000,  function: "uvIndex" },
  {duration: 10000,  function: "healthTip" },
  {duration: 10000,  function: "healthTip" },
  {duration: 5000,  function: "healthPromo" },
]}
var gardenPackage = {duration: 60000, group: "garden", slides: [
  {duration: 5000,  function: "gardenIntro" },
  {duration: 10000,  function: "gardenForecast" },
  {duration: 10000,  function: "estimatedPrecip" },
  {duration: 10000,  function: "precipForecast" },
  {duration: 10000,  function: "droughtMonitor" },
  //{duration: 10000,  function: "frostFreeze" },
  {duration: 5000,  function: "gardenPromo" },
]}
var skiPackage = {duration: 60000, group: "ski", slides: [
  {duration: 5000,  function: "skiIntro" },
  {duration: 10000,  function: "skiReport" },
  {duration: 10000,  function: "snowfallForecast" },
  {duration: 10000,  function: "skiTip" },
]}
var beachPackage = {duration: 60000, group: "beach", slides: [
  {duration: 5000,  function: "beachIntro" },
  {duration: 10000,  function: "surfReport" },
  {duration: 10000,  function: "waterTemps" },
  {duration: 10000,  function: "coastalForecast" },
  {duration: 10000,  function: "tides" },
]}