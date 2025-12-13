var locationChoice = "main"
var weatherData = {
  alerts: {
    mainLoc: {
      locationName:"", 
      warnings:[]
    },
    extraLoc:[]
  },
  severeAlerts: {
    warnings:[]
  },
  crawlAlerts: {
    warnings:[]
  },
  currentConditions: {
    english: {
      mainLoc: {
        noReport:true,
        locationName:"",
        humidity:"",
        dewPoint:"",
        pressure:"",
        pressureTrend:"",
        wind:"",
        gusts:"",
        feelsLike:"",
        feelsLikeTitle:"",
        icon:"",
        condition:"",
        temperature:"",
      },
      extraLoc: []
    },
    spanish: {
      noReport:true,
      locationName:"",
      humidity:"",
      dewPoint:"",
      pressure:"",
      pressureTrend:"",
      wind:"",
      gusts:"",
      feelsLike:"",
      feelsLikeTitle:"",
      icon:"",
      condition:"",
      temperature:"",
    }
  },
  nearbyCities: {
    cities: [
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:""},
      {noReport:true, locationName:"", temperature:"", icon:"", wind:"",},
    ]
  },
  localForecast: {
    noReport: true,
    locationName:"",
    times: [
      {timetitle:"",forecast:""},
      {timetitle:"",forecast:""},
      {timetitle:"",forecast:""},
      {timetitle:"",forecast:""},
    ]
  },
  dayPart: {
    english: {
      mainLoc: {
        noReport: true,
        locationName:"",
        header:"",
        times: [
          {time:"", icon:"",condition:"",temperature:"",wind:""},
          {time:"", icon:"",condition:"",temperature:"",wind:""},
          {time:"", icon:"",condition:"",temperature:"",wind:""},
          {time:"", icon:"",condition:"",temperature:"",wind:""},
        ]
      },
      extraLoc: []
    },
    spanish: {
      noReport: true,
      locationName:"",
      header:"",
      times: [
        {time:"", icon:"",condition:"",temperature:"",wind:""},
        {time:"", icon:"",condition:"",temperature:"",wind:""},
        {time:"", icon:"",condition:"",temperature:"",wind:""},
        {time:"", icon:"",condition:"",temperature:"",wind:""},
      ]
    },
  },
  extendedForecast: {
    english: {
      mainLoc: {
        noReport: true,
        locationName:"",
        days:[
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
        ]
      },
      extraLoc: [],
    },
    spanish: {
      noReport: true,
        locationName:"",
        days:[
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
          {day:"",icon:"",condition:"",high:"",low:""},
        ]
    },
  },
  almanac: {
    noReport:true,
    locationName:"",
    day:"",
    averageHigh:"",
    averageLow:"",
    recordHigh:"",
    recordLow:"",
    highYear:"",
    lowYear:"",
    sunrise:"",
    sunset:"",
    moonphases:[
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
      {moon:"blank",date:""},
    ],
  },
  trafficReport: {
    locationName:"",
    noReport: true,
    incidents:[],
  },
  trafficFlow: {
    locationName:"",
    noReport: true,
    routes:[],
  },
  travelMapUnavailable: true,
  travelForecast: {
    dayName:["null","null",],
    cities:[],
  },
  destinationForecast: {
    dayName:["null","null","null",],
    cities:[],
  },
  outdoorActivity: {
    noReport: true,
    locationName: "",
    dayName:"",
    icon:"",
    high:"",
    low:"",
    precipChance:"",
    humidity:"",
    wind:"",
    feelsLike:"",
    feelsLikeNum:"",
  },
  pollen: {
    noReport: true,
    locationName: "",
    date:"",
    pollenCount:"",
    pollenCountCategory:"",
    indices: [],
    treeType:"",
  },
  achesBreathe: {
    locationName:"",
    dayName:"",
    achesIndex:"",
    achesWord:"",
    breatheIndex:"",
    breatheWord:"",
  },
  airQuality: {
    noReport: true,
    locationName:"",
    dayName:"",
    index:"",
    primaryPollutant:"",
    ozoneAction:false,
  },
  uvIndex: {
    locationname:"",
    current: {
      noReport: true,
      index:"",
      word:"",
    },
    forecast: {
      noReport: true,
      times: [
        {hour:"", day:"",index:"",word:""},
        {hour:"", day:"",index:"",word:""},
        {hour:"", day:"",index:"",word:""},
      ],
    },
  },
  airportDelayList: [],
  localAirportConditions: [],
  nationalAirportConditions: [],
  internationalMap: {
    canada: [],
    mexico: [],
    caribbean: [],
    southamerica: [],
    britain: [],
    europe: [],
    africa: [],
    india: [],
    eastasia: [],
    oceania: [],
    australia: [],
  },
  internationalForecast: {
    dayName: ["null", "null", "null"],
    cities: [],
  },
  teeTime: {
    noReport: true,
    locationName:"",
    times: [
      {time:"", icon:"",day:"",temperature:"",wind:""},
      {time:"", icon:"",day:"",temperature:"",wind:""},
      {time:"", icon:"",day:"",temperature:"",wind:""},
      {time:"", icon:"",day:"",temperature:"",wind:""},
      {time:"", icon:"",day:"",temperature:"",wind:""},
    ]
  },
  golfIndexUnavailable:true,
  courseForecast: [],
  gardeningIndex: {
    noReport: true,
    locationName: "",
    dayName:"",
    low:"",
    high:"",
    precipChance:"",
    cloudCover:"",
    wateringIndex:"",
    wateringIndexWord:"",
  },
  estimatedPrecipMapUnavailable: true,
  precipForecastMapUnavailable: true,
  droughtMonitorMapUnavailable: true,
  frostFreezeMapUnavailable: true,
  skiReport: {
    resorts:[]
  },
  snowfallForecastMapUnavailable: true,
  surfReport: {
    locationName:"",
    wind:"",
    wavePeriod:"",
    waterTemperature:"",
    waveHeight:"",
  },
  waterTempsMapUnavailable: true,
  marineAlerts: {
    warnings:[]
  },
  coastalForecast: {
    noReport: true,
    locationName:"",
    warnings:[],
    times: [
      {forecast:""},
      {forecast:""},
      {forecast:""},
    ]
  },
  tides: {
    stations: [
      {noReport: true, stationName:"",high:["",""],low:["",""]},
      {noReport: true, stationName:"",high:["",""],low:["",""]},
    ],
    almanacName:"",
    sunrise:"",
    sunset:"",
  },
  trafficMapUnavailable: true,
  satUnavailable: true,
  dopplerUnavailable: true,
  severemode: false,
}
function getAllAlerts() {
  function getAlerts() {
    var url = "https://api.weather.com/v3/alerts/headlines?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&language=en-US&apiKey=" + api_key
    try {
    $.getJSON(url, function(data) {
      weatherData.severemode = false
      weatherData.alerts.mainLoc = {locationName:((systemSettings.mainCity.bulletinName == "") ? systemSettings.mainCity.locationName + " Area": systemSettings.mainCity.bulletinName), warnings:[]}
      weatherData.marineAlerts = {locationName:((systemSettings.mainCity.bulletinName == "") ? systemSettings.mainCity.locationName + " Area" : systemSettings.mainCity.bulletinName), warnings:[]}
      weatherData.severeAlerts = {locationName:((systemSettings.mainCity.bulletinName == "") ? systemSettings.mainCity.locationName + " Area" : systemSettings.mainCity.bulletinName), warnings:[]}
      weatherData.crawlAlerts = {locationName:((systemSettings.mainCity.bulletinName == "") ? systemSettings.mainCity.locationName + " Area" : systemSettings.mainCity.bulletinName), warnings:[]}
      try {
        if (data != undefined) {
          var warnings = []
          for (var i = 0; i < data.alerts.length; i++) {
            warnings.push({key: data.alerts[i].detailKey, warningtitle:"", warningdesc:"",  alertType:"", headline:"", sortNum:"", severe:false, color:"", crawl:false, marine:false, })
            eachAlert(i)
          }
           async function eachAlert(i) {
            $.getJSON("https://api.weather.com/v3/alerts/detail?alertId=" + warnings[i].key + "&format=json&language=en-US&apiKey=" + api_key, function(data) {
              warnings[i].warningtitle = data.alertDetail.eventDescription
              if (data.alertDetail.eventDescription == "Ozone Action Day") {weatherData.airQuality.ozoneAction = true}
              warnings[i].warningdesc = data.alertDetail.texts[0].description
              warnings[i].alertType = data.alertDetail.messageType.replace("Cancel","Cancellation").replace("New","")
              warnings[i].headline = data.alertDetail.headlineText
              warnings[i].sortNum = warningSettings[data.alertDetail.eventDescription].priority
              warnings[i].severe = warningSettings[data.alertDetail.eventDescription].severe
              warnings[i].color = warningSettings[data.alertDetail.eventDescription].color
              warnings[i].crawl = warningSettings[data.alertDetail.eventDescription].included
              warnings[i].marine = warningSettings[data.alertDetail.eventDescription].marine
            })
            setTimeout(() => {
            //console.log(warnings[i])
            if (warnings[i].crawl == true) {
              weatherData.crawlAlerts.warnings.push(warnings[i])
            }
            if (warnings[i].marine == true) {
              weatherData.marineAlerts.warnings.push(warnings[i])
            } else {
              if (warnings[i].severe == true) {
                weatherData.severeAlerts.warnings.push(warnings[i])
                weatherData.severemode = true
              }
              weatherData.alerts.mainLoc.warnings.push(warnings[i])
            }
            
            for (ii = 0; ii < weatherData.alerts.mainLoc.warnings.length-1; ii++) {
              if (warnings[i].warningtitle == weatherData.alerts.mainLoc.warnings[ii]) {
                weatherData.alerts.mainLoc.warnings.pop()
                continue
              }
            }
            weatherData.alerts.mainLoc.alertsAmount = weatherData.alerts.mainLoc.warnings.length
            for (ii = 0; ii < weatherData.severeAlerts.warnings.length-1; ii++) {
              if (warnings[i].warningtitle == weatherData.severeAlerts.warnings[ii]) {
                weatherData.severeAlerts.warnings.pop()
                continue
              }
            }
            weatherData.severeAlerts.alertsAmount = weatherData.severeAlerts.warnings.length
            for (ii = 0; ii < weatherData.marineAlerts.warnings.length-1; ii++) {
              if (warnings[i].warningtitle == weatherData.marineAlerts.warnings[ii]) {
                weatherData.marineAlerts.warnings.pop()
                continue
              }
            }
            weatherData.marineAlerts.alertsAmount = weatherData.marineAlerts.warnings.length
            for (ii = 0; ii < weatherData.crawlAlerts.warnings.length-1; ii++) {
              if (warnings[i].warningtitle == weatherData.crawlAlerts.warnings[ii]) {
                weatherData.crawlAlerts.warnings.pop()
                continue
              }
            }
            weatherData.crawlAlerts.alertsAmount = weatherData.crawlAlerts.warnings.length
            }, 500);
            
          }
          setTimeout(() => {
            if (weatherData.alerts.mainLoc.warnings.length > 1) {
              weatherData.alerts.mainLoc.warnings.sort((a,b) => a.sortNum-b.sortNum)
            }
            if (weatherData.severeAlerts.warnings.length > 1) {
              weatherData.severeAlerts.warnings.sort((a,b) => a.sortNum-b.sortNum)
            }
            if (weatherData.marineAlerts.warnings.length > 1) {
              weatherData.marineAlerts.warnings.sort((a,b) => a.sortNum-b.sortNum)
            }
            if (weatherData.crawlAlerts.warnings.length > 1) {
              weatherData.crawlAlerts.warnings.sort((a,b) => a.sortNum-b.sortNum)
            }
          }, 750);
        } else {
          weatherData.severemode = false
          weatherData.alerts.mainLoc = {locationname:systemSettings.mainCity.locationName,warnings:[]}
          weatherData.alerts.mainLoc.alertsAmount = 0
          weatherData.severeAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
          weatherData.severeAlerts.alertsAmount = 0
          weatherData.marineAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
          weatherData.marineAlerts.alertsAmount = 0
          weatherData.crawlAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
          weatherData.crawlAlerts.alertsAmount = 0
        }
      } catch (error) {
        weatherData.severemode = false
        weatherData.alerts.mainLoc = {locationname:systemSettings.mainCity.locationName,warnings:[]}
        weatherData.alerts.mainLoc.alertsAmount = 0
        weatherData.severeAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
        weatherData.severeAlerts.alertsAmount = 0
        weatherData.marineAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
        weatherData.marineAlerts.alertsAmount = 0
        weatherData.crawlAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
        weatherData.crawlAlerts.alertsAmount = 0
      }
    }).fail(function() {
      weatherData.severemode = false
      weatherData.alerts.mainLoc = {locationname:systemSettings.mainCity.locationName,warnings:[]}
      weatherData.alerts.mainLoc.alertsAmount = 0
      weatherData.severeAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
      weatherData.severeAlerts.alertsAmount = 0
      weatherData.marineAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
      weatherData.marineAlerts.alertsAmount = 0
      weatherData.crawlAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
      weatherData.crawlAlerts.alertsAmount = 0
    })
    } catch (error) {
      weatherData.severemode = false
      weatherData.alerts.mainLoc = {locationname:systemSettings.mainCity.locationName,warnings:[]}
      weatherData.alerts.mainLoc.alertsAmount = 0
      weatherData.severeAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
      weatherData.severeAlerts.alertsAmount = 0
      weatherData.marineAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
      weatherData.marineAlerts.alertsAmount = 0
      weatherData.crawlAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
      weatherData.crawlAlerts.alertsAmount = 0
    }
  }
  getAlerts()
  /*function getCrawlAlerts() {
    var url = "https://api.weather.com/v3/alerts/headlines?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&language=en-US&apiKey=" + api_key
    try {
    $.getJSON(url, function(data) {
      weatherData.crawlAlerts = {locationName:systemSettings.mainCity.locationName, warnings:[]}
      try {
        if (data != undefined) {
          var warnings = []
          for (var i = 0; i < data.alerts.length; i++) {
            warnings.push({key: data.alerts[i].detailKey, warningtitle:"", warningdesc:"",  alertType:"", headline:"", sortNum:"", severe:false, color:"", crawl:false, marine:false, })
            eachAlert(i)
          }
          function eachAlert(i) {
            $.getJSON("https://api.weather.com/v3/alerts/detail?alertId=" + warnings[i].key + "&format=json&language=en-US&apiKey=" + api_key, function(data) {
              warnings[i].warningtitle = data.alertDetail.eventDescription
              warnings[i].warningdesc = data.alertDetail.texts[0].description
              warnings[i].alertType = data.alertDetail.messageType.replace("Cancel","Cancellation").replace("New","")
              warnings[i].headline = data.alertDetail.headlineText
              warnings[i].sortNum = warningSettings[data.alertDetail.eventDescription].priority
              warnings[i].severe = warningSettings[data.alertDetail.eventDescription].severe
              warnings[i].color = warningSettings[data.alertDetail.eventDescription].color
              warnings[i].crawl = warningSettings[data.alertDetail.eventDescription].included
              warnings[i].marine = warningSettings[data.alertDetail.eventDescription].marine
            })
            setTimeout(() => {
            if (warnings[i].crawl == true) {
              weatherData.crawlAlerts.warnings.push(warnings[i])
            }
            
            for (ii = 0; ii < weatherData.crawlAlerts.warnings.length-1; ii++) {
              if (warnings[i].warningtitle == weatherData.crawlAlerts.warnings[ii]) {
                weatherData.crawlAlerts.warnings.pop()
                continue
              }
            }
            weatherData.crawlAlerts.alertsAmount = weatherData.crawlAlerts.warnings.length
            }, 10);
          }
          setTimeout(() => {
            if (weatherData.crawlAlerts.warnings.length > 1) {
              weatherData.crawlAlerts.warnings.sort((a,b) => a.sortNum-b.sortNum)
            }
          }, 100);
        } else {
          weatherData.severemode = false
          weatherData.crawlAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
          weatherData.crawlAlerts.alertsAmount = 0
        }
      } catch (error) {
        weatherData.severemode = false
        weatherData.crawlAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
        weatherData.crawlAlerts.alertsAmount = 0
      }
    }).fail(function() {
      weatherData.severemode = false
      weatherData.crawlAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
      weatherData.crawlAlerts.alertsAmount = 0
    })
    } catch (error) {
      weatherData.severemode = false
      weatherData.crawlAlerts = {locationname:systemSettings.mainCity.locationName,warnings:[]}
      weatherData.crawlAlerts.alertsAmount = 0
    }
  }*/
  //getCrawlAlerts()
}
function getCoreData() {
  function getCurrent() {
    var url = "https://api.weather.com/v3/wx/observations/current?icaoCode=" + systemSettings.mainCity.obsIcaoCode + "&units=e&language=en-US&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      weatherData.currentConditions.english.mainLoc.locationName = systemSettings.mainCity.airportName
      weatherData.currentConditions.english.mainLoc.noReport = false
      weatherData.currentConditions.english.mainLoc.humidity = data.relativeHumidity + "%"
      weatherData.currentConditions.english.mainLoc.dewPoint = data.temperatureDewPoint
      weatherData.currentConditions.english.mainLoc.pressure = data.pressureAltimeter.toFixed(2)
      weatherData.currentConditions.english.mainLoc.pressureTrend = data.pressureTendencyCode
      weatherData.currentConditions.english.mainLoc.wind = ((data.windDirectionCardinal == "CALM" || data.windSpeed == 0) ? "Calm" : data.windDirectionCardinal + " " + data.windSpeed)
      weatherData.currentConditions.english.mainLoc.gusts = ((data.windGust != null) ? data.windGust + " mph" : "None")
      weatherData.currentConditions.english.mainLoc.feelsLikeTitle = ((data.temperature > 65) ? "Heat Index" : "Wind Chill")
      weatherData.currentConditions.english.mainLoc.feelsLike = ((data.temperatureFeelsLike == data.temperature) ? "none" : data.temperatureFeelsLike)
      weatherData.currentConditions.english.mainLoc.icon = data.iconCodeExtend
      weatherData.currentConditions.english.mainLoc.condition = getCond(data.iconCodeExtend, "current")
      weatherData.currentConditions.english.mainLoc.temperature = data.temperature
      weatherData.almanac.sunrise = dateFns.format(new Date(data.sunriseTimeLocal),"h:mm a")
      weatherData.almanac.sunset = dateFns.format(new Date(data.sunsetTimeLocal),"h:mm a")
    }).fail(function() {
      weatherData.currentConditions.english.mainLoc.locationName = systemSettings.mainCity.airportName
      weatherData.currentConditions.english.mainLoc.noReport = true
      weatherData.almanac.sunrise = ""
      weatherData.almanac.sunset = ""
    })
  }
  getCurrent()
  function getNearby(num) {
    var url = "https://api.weather.com/v3/wx/observations/current?icaoCode=" + systemSettings.nearbyCities.cities[num].obsIcaoCode + "&units=e&language=en-US&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      weatherData.nearbyCities.cities[num].noReport = false
      weatherData.nearbyCities.cities[num].locationName = systemSettings.nearbyCities.cities[num].locationName
      weatherData.nearbyCities.cities[num].icon = data.iconCodeExtend
      weatherData.nearbyCities.cities[num].temperature = data.temperature
      weatherData.nearbyCities.cities[num].wind = ((data.windDirectionCardinal == "CALM" || data.windSpeed == 0) ? "Calm" : data.windDirectionCardinal + " " + data.windSpeed)
    }).fail(function() {
      weatherData.nearbyCities.cities[num].noReport = true
      weatherData.nearbyCities.cities[num].locationName = systemSettings.nearbyCities.cities[num].locationName
      weatherData.nearbyCities.cities[num].icon = "blank"
      weatherData.nearbyCities.cities[num].temperature = ""
      weatherData.nearbyCities.cities[num].wind = ""
    })
  }
  for (var i = 0; i < systemSettings.nearbyCities.cities.length; i++) {
    getNearby(i)
  }
  function getLF() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      var ii = 0
      var ni = 0
      if (data.daypart[0].daypartName[0] == null) {
          ii = 1
          ni = 1
        }
        weatherData.localForecast.locationName = systemSettings.mainCity.locationName
        weatherData.localForecast.noReport = false
        for (var i = 0; i < weatherData.localForecast.times.length; i++, ii++) {
          /*if (data.daypart[0].daypartName[ii] == "Today" || data.daypart[0].daypartName[ii] == "Tonight") {
            if (data.daypart[0].daypartName[ii] == "Tonight") {
              ni++
            }
            weatherData.localForecast.times[i].timetitle = data.daypart[0].daypartName[ii]
          } else {
            if (data.daypart[0].dayOrNight[ii] == "N") {
              weatherData.localForecast.times[i].timetitle = data.dayOfWeek[ni] + " Night"
              ni++
            } else {
              weatherData.localForecast.times[i].timetitle = data.dayOfWeek[ni]
            }
          }*/
          weatherData.localForecast.times[i].timetitle = data.daypart[0].daypartName[ii].replaceAll(" night", " Night").replaceAll("Tomorrow", data.dayOfWeek[ni])
          weatherData.localForecast.times[i].forecast = data.daypart[0].narrative[ii]
        }
    }).fail(function() {
      weatherData.localForecast.locationName = systemSettings.mainCity.locationName
      weatherData.localForecast.noReport = true
    })
  }
  getLF()
  function getDayPart() {
    var url = "https://api.weather.com/v3/wx/forecast/hourly/2day?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var currenthr = dateFns.getHours(new Date());
    $.getJSON(url, function(data) {
      var targetHours
      function timeTitleCreate(time){
        var hour = dateFns.getHours(time);
        if (hour == 0) {
          return 'Midnight';
        } else if (hour == 12){
          return 'Noon';
        }
        return (dateFns.format(time,'h a')).replace(" ", "");
      }
      switch (true) {
        case (currenthr < 3):
          weatherData.dayPart.english.mainLoc.header = "Today's Forecast"
          targetHours = [6, 12, 15, 17];
        case (currenthr < 9):
          weatherData.dayPart.english.mainLoc.header = "Today's Forecast"
          targetHours = [12, 15, 17, 20]; break;
        case (currenthr < 12):
          weatherData.dayPart.english.mainLoc.header = "Tonight's Forecast"
          targetHours = [15, 17, 20, 0]; break;
        case (currenthr < 14):
          weatherData.dayPart.english.mainLoc.header = "Tonight's Forecast"
          targetHours = [17, 20, 0, 6]; break;
        case (currenthr < 17):
          weatherData.dayPart.english.mainLoc.header = "Tomorrow's Forecast"
          targetHours = [6, 12, 15, 17]; break;
        case (currenthr < 20):
          weatherData.dayPart.english.mainLoc.header = "Tomorrow's Forecast"
          targetHours = [6, 12, 15, 17]; break;
        default:
          weatherData.dayPart.english.mainLoc.header = "Today's Forecast"
          targetHours = [6, 12, 15, 17]
      }
     var ii = 0
      weatherData.dayPart.english.mainLoc.locationName = systemSettings.mainCity.locationName
      weatherData.dayPart.english.mainLoc.noReport = false
      for (var i = 0; i < data.validTimeLocal.length; i++) {
        if (ii < 4) {
          var dpTime = dateFns.getHours(data.validTimeLocal[i])
          if (dpTime == targetHours[ii]) {
            weatherData.dayPart.english.mainLoc.times[ii].time = timeTitleCreate(data.validTimeLocal[i])
            weatherData.dayPart.english.mainLoc.times[ii].icon = data.iconCodeExtend[i]
            weatherData.dayPart.english.mainLoc.times[ii].condition = getCond(data.iconCodeExtend[i], "daypart")
            weatherData.dayPart.english.mainLoc.times[ii].temperature = data.temperature[i]
            weatherData.dayPart.english.mainLoc.times[ii].wind = ((data.windDirectionCardinal[i] == "CALM" || data.windSpeed[i] == 0) ? "Calm" : data.windDirectionCardinal[i] + " " + data.windSpeed[i])
            ii++
          }
        } else {
          break
        }
      }
    }).fail(function() {
      switch (true) {
        case (currenthr < 3):
          weatherData.dayPart.english.mainLoc.header = "Today's Forecast"
        case (currenthr < 9):
          weatherData.dayPart.english.mainLoc.header = "Today's Forecast"
        case (currenthr < 12):
          weatherData.dayPart.english.mainLoc.header = "Tonight's Forecast"
        case (currenthr < 14):
          weatherData.dayPart.english.mainLoc.header = "Tonight's Forecast"
        case (currenthr < 17):
          weatherData.dayPart.english.mainLoc.header = "Tomorrow's Forecast"
        case (currenthr < 20):
          weatherData.dayPart.english.mainLoc.header = "Tomorrow's Forecast"
        default:
          weatherData.dayPart.english.mainLoc.header = "Today's Forecast"
      }
      weatherData.dayPart.english.mainLoc.locationName = systemSettings.mainCity.locationName
      weatherData.dayPart.english.mainLoc.noReport = true
    })
  }
  getDayPart()
  function getExtended() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      var today = longWeekDays[new Date().getDay()] 
      weatherData.extendedForecast.english.mainLoc.locationName = systemSettings.mainCity.locationName
      weatherData.extendedForecast.english.mainLoc.noReport = false
      var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        ii = 1
        dpi = 2
      }
      for (var i = 0; i < weatherData.extendedForecast.english.mainLoc.days.length; i++, ii++, dpi = dpi + 2) {
        weatherData.extendedForecast.english.mainLoc.days[i].day = data.dayOfWeek[ii].substring(0,3)
        weatherData.extendedForecast.english.mainLoc.days[i].icon = data.daypart[0].iconCodeExtend[dpi]
        weatherData.extendedForecast.english.mainLoc.days[i].condition = getCond(weatherData.extendedForecast.english.mainLoc.days[i].icon, "forecast")
        if (data.dayOfWeek[ii] == today) {
          weatherData.extendedForecast.english.mainLoc.days[i].low = ""
        } else {
          weatherData.extendedForecast.english.mainLoc.days[i].low = data.temperatureMin[ii]
        }
        weatherData.extendedForecast.english.mainLoc.days[i].high = data.temperatureMax[ii]
      }
    }).fail(function() {
      weatherData.extendedForecast.english.mainLoc.locationName = systemSettings.mainCity.locationName
      weatherData.extendedForecast.english.mainLoc.noReport = true
    })
  }
  getExtended()
  function getAlmanac() {
    var url = "https://api.weather.com/v3/wx/almanac/daily/5day?icaoCode=" + systemSettings.mainCity.obsIcaoCode + `&format=json&units=e&startDay=${dateFns.format(new Date(),"D")}&startMonth=${dateFns.format(new Date(),"M")}&apiKey=` + api_key
    $.getJSON(url, function(data) {
      weatherData.almanac.locationName = systemSettings.mainCity.almanacLocationName
      weatherData.almanac.noReport = false
      weatherData.almanac.day = dateFns.format(new Date(),"MMMM D")
      weatherData.almanac.averageHigh = data.temperatureAverageMax[0]
      weatherData.almanac.averageLow = data.temperatureAverageMin[0]
      weatherData.almanac.recordHigh = data.temperatureRecordMax[0]
      weatherData.almanac.recordLow = data.temperatureRecordMin[0]
      weatherData.almanac.highYear = data.almanacRecordYearMax[0]
      weatherData.almanac.lowYear = data.almanacRecordYearMin[0]
      function getMoons() {
        var ii = 0
        $.getJSON(`https://www.icalendar37.net/lunar/api/?lang=en&month=${dateFns.format(new Date(),"M")}&year=${dateFns.format(new Date(),"YYYY")}`, function(data) {
        for (phase in data.phase) {
          if (data.phase[phase].isPhaseLimit != false) {
            if(phase < new Date().getDate()){continue}
            weatherData.almanac.moonphases[ii].moon = {"New Moon": "NEW", "First quarter": "FIRST", "Full moon": "FULL", "Last quarter": "LAST"}[data.phase[phase].phaseName]
            weatherData.almanac.moonphases[ii].date = String(data.monthName).slice(0,3) + " " + phase
            weatherData.almanac.moonphases[ii].date =  ((phase.toString().length == 1) ? weatherData.almanac.moonphases[ii].date : weatherData.almanac.moonphases[ii].date)
            ii += 1;
          }
        }
        if (weatherData.almanac.moonphases[3].date == "") {
          setTimeout(() => {
            $.getJSON(`https://www.icalendar37.net/lunar/api/?lang=en&month=${dateFns.format((dateFns.addMonths(new Date(),1)),"M")}&year=${dateFns.format(dateFns.addMonths(new Date(),1),"YYYY")}`, function(data) {
              for (phase in data.phase) {
                if (data.phase[phase].isPhaseLimit != false) {
                  weatherData.almanac.moonphases[ii].moon = {"New Moon": "NEW", "First quarter": "FIRST", "Full moon": "FULL", "Last quarter": "LAST"}[data.phase[phase].phaseName]
                  weatherData.almanac.moonphases[ii].date = String(data.monthName).slice(0,3) + " " + phase
                  weatherData.almanac.moonphases[ii].date =  ((phase.toString().length == 1) ? weatherData.almanac.moonphases[ii].date : weatherData.almanac.moonphases[ii].date)
                  ii += 1;
                }
              }
            }).fail(function() {
              weatherData.almanac.locationName = systemSettings.mainCity.almanacLocationName
              weatherData.almanac.noReport = true
            })
          }, 500);
        }
      }).fail(function() {
        weatherData.almanac.locationName = systemSettings.mainCity.almanacLocationName
        weatherData.almanac.noReport = true
      })
      }
      getMoons()
    }).fail(function() {
      weatherData.almanac.locationName = systemSettings.mainCity.almanacLocationName
      weatherData.almanac.noReport = true
    })
  }
  getAlmanac()
}
function getExtraCore(locNum) {
  function getAlerts() {
    var url = "https://api.weather.com/v3/alerts/headlines?geocode=" + systemSettings.extraCity.cities[locNum].lat + "," + systemSettings.extraCity.cities[locNum].lon + "&format=json&language=en-US&apiKey=" + api_key
    try {
    $.getJSON(url, function(data) {
      weatherData.alerts.extraLoc[locNum] = {locationName:((systemSettings.extraCity.cities[locNum].bulletinName == "") ? systemSettings.extraCity.cities[locNum].locationName + " Area": systemSettings.extraCity.cities[locNum].bulletinName), warnings:[]}
      try {
        if (data != undefined) {
          var warnings = []
          for (var i = 0; i < data.alerts.length; i++) {
            warnings.push({key: data.alerts[i].detailKey, warningtitle:"", warningdesc:"",  alertType:"", headline:"", sortNum:"", severe:false, color:"", crawl:false, marine:false, })
            eachAlert(i)
          }
           async function eachAlert(i) {
            $.getJSON("https://api.weather.com/v3/alerts/detail?alertId=" + warnings[i].key + "&format=json&language=en-US&apiKey=" + api_key, function(data) {
              warnings[i].warningtitle = data.alertDetail.eventDescription
              warnings[i].warningdesc = data.alertDetail.texts[0].description
              warnings[i].alertType = data.alertDetail.messageType.replace("Cancel","Cancellation").replace("New","")
              warnings[i].headline = data.alertDetail.headlineText
              warnings[i].sortNum = warningSettings[data.alertDetail.eventDescription].priority
              warnings[i].severe = warningSettings[data.alertDetail.eventDescription].severe
              warnings[i].color = warningSettings[data.alertDetail.eventDescription].color
              warnings[i].crawl = warningSettings[data.alertDetail.eventDescription].included
              warnings[i].marine = warningSettings[data.alertDetail.eventDescription].marine
            })
            setTimeout(() => {
            weatherData.alerts.extraLoc[locNum].warnings.push(warnings[i])
            
            for (ii = 0; ii < weatherData.alerts.extraLoc[locNum].warnings.length-1; ii++) {
              if (warnings[i].warningtitle == weatherData.alerts.extraLoc[locNum].warnings[ii]) {
                weatherData.alerts.extraLoc[locNum].warnings.pop()
                continue
              }
            }
            weatherData.alerts.extraLoc[locNum].alertsAmount = weatherData.alerts.extraLoc[locNum].warnings.length
            }, 500);
          }
          setTimeout(() => {
            if (weatherData.alerts.extraLoc[locNum].warnings.length > 1) {
              weatherData.alerts.extraLoc[locNum].warnings.sort((a,b) => a.sortNum-b.sortNum)
            }
          }, 750);
        } else {
          weatherData.alerts.extraLoc[locNum] = {locationName:((systemSettings.extraCity.cities[locNum].bulletinName == "") ? systemSettings.extraCity.cities[locNum].locationName + " Area": systemSettings.extraCity.cities[locNum].bulletinName), warnings:[]}
          weatherData.alerts.extraLoc[locNum].alertsAmount = 0
        }
      } catch (error) {
        weatherData.alerts.extraLoc[locNum] = {locationName:((systemSettings.extraCity.cities[locNum].bulletinName == "") ? systemSettings.extraCity.cities[locNum].locationName + " Area": systemSettings.extraCity.cities[locNum].bulletinName), warnings:[]}
        weatherData.alerts.extraLoc[locNum].alertsAmount = 0
      }
    }).fail(function() {
      weatherData.alerts.extraLoc[locNum] = {locationName:((systemSettings.extraCity.cities[locNum].bulletinName == "") ? systemSettings.extraCity.cities[locNum].locationName + " Area": systemSettings.extraCity.cities[locNum].bulletinName), warnings:[]}
      weatherData.alerts.extraLoc[locNum].alertsAmount = 0
    })
    } catch (error) {
      weatherData.alerts.extraLoc[locNum] = {locationName:((systemSettings.extraCity.cities[locNum].bulletinName == "") ? systemSettings.extraCity.cities[locNum].locationName + " Area": systemSettings.extraCity.cities[locNum].bulletinName), warnings:[]}
      weatherData.alerts.extraLoc[locNum].alertsAmount = 0
    }
  }
  getAlerts()
  function getCurrent() {
    //weatherData.currentConditions.english.extraLoc[locNum] = {}
    var url = "https://api.weather.com/v3/wx/observations/current?icaoCode=" + systemSettings.extraCity.cities[locNum].obsIcaoCode + "&units=e&language=en-US&format=json&apiKey=" + api_key
    var eLocData = {noReport:true,locationName:"",humidity:"",dewPoint:"",pressure:"",pressureTrend:"",wind:"",gusts:"",feelsLike:"",feelsLikeTitle:"",icon:"",condition:"",temperature:"",}
    $.getJSON(url, function(data) {
      eLocData.locationName = systemSettings.extraCity.cities[locNum].airportName
      eLocData.noReport = false
      eLocData.humidity = data.relativeHumidity + "%"
      eLocData.dewPoint = data.temperatureDewPoint
      eLocData.pressure = data.pressureAltimeter.toFixed(2)
      eLocData.pressureTrend = data.pressureTendencyCode
      eLocData.wind = ((data.windDirectionCardinal == "CALM" || data.windSpeed == 0) ? "Calm" : data.windDirectionCardinal + " " + data.windSpeed)
      eLocData.gusts = ((data.windGust != null) ? data.windGust + " mph" : "None")
      eLocData.feelsLikeTitle = ((data.temperature > 65) ? "Heat Index" : "Wind Chill")
      eLocData.feelsLike = ((data.temperatureFeelsLike == data.temperature) ? "none" : data.temperatureFeelsLike)
      eLocData.icon = data.iconCodeExtend
      eLocData.condition = getCond(data.iconCodeExtend, "current")
      eLocData.temperature = data.temperature
    }).fail(function() {
      eLocData.locationName = systemSettings.mainCity.airportName
      eLocData.noReport = true
    })
    weatherData.currentConditions.english.extraLoc[locNum] = eLocData
  }
  getCurrent()
  function getDayPart() {
    //weatherData.dayPart.english.extraLoc[locNum] = {}
    var url = "https://api.weather.com/v3/wx/forecast/hourly/2day?geocode=" + systemSettings.extraCity.cities[locNum].lat + "," + systemSettings.extraCity.cities[locNum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var elocData = {noReport: true,locationName:"",header:"",times: [{time:"", icon:"",condition:"",temperature:"",wind:""},{time:"", icon:"",condition:"",temperature:"",wind:""},{time:"", icon:"",condition:"",temperature:"",wind:""},{time:"", icon:"",condition:"",temperature:"",wind:""},]}
    var currenthr = dateFns.getHours(new Date());
    $.getJSON(url, function(data) {
      var targetHours
      function timeTitleCreate(time){
        var hour = dateFns.getHours(time);
        if (hour == 0) {
          return 'Midnight';
        } else if (hour == 12){
          return 'Noon';
        }
        return (dateFns.format(time,'h a')).replace(" ", "");
      }
      switch (true) {
        case (currenthr < 3):
          elocData.header = "Today's Forecast"
          targetHours = [6, 12, 15, 17];
        case (currenthr < 9):
          elocData.header = "Today's Forecast"
          targetHours = [12, 15, 17, 20]; break;
        case (currenthr < 12):
          elocData.header = "Tonight's Forecast"
          targetHours = [15, 17, 20, 0]; break;
        case (currenthr < 14):
          elocData.header = "Tonight's Forecast"
          targetHours = [17, 20, 0, 6]; break;
        case (currenthr < 17):
          elocData.header = "Tomorrow's Forecast"
          targetHours = [6, 12, 15, 17]; break;
        case (currenthr < 20):
          elocData.header = "Tomorrow's Forecast"
          targetHours = [6, 12, 15, 17]; break;
        default:
          elocData.header = "Today's Forecast"
          targetHours = [6, 12, 15, 17]
      }
     var ii = 0
      elocData.locationName = systemSettings.extraCity.cities[locNum].locationName
      elocData.noReport = false
      for (var i = 0; i < data.validTimeLocal.length; i++) {
        if (ii < 4) {
          var dpTime = dateFns.getHours(data.validTimeLocal[i])
          if (dpTime == targetHours[ii]) {
            elocData.times[ii].time = timeTitleCreate(data.validTimeLocal[i])
            elocData.times[ii].icon = data.iconCodeExtend[i]
            elocData.times[ii].condition = getCond(data.iconCodeExtend[i], "daypart")
            elocData.times[ii].temperature = data.temperature[i]
            elocData.times[ii].wind = ((data.windDirectionCardinal[i] == "CALM" || data.windSpeed[i] == 0) ? "Calm" : data.windDirectionCardinal[i] + " " + data.windSpeed[i])
            ii++
          }
        } else {
          break
        }
      }
    }).fail(function() {
      switch (true) {
        case (currenthr < 3):
          elocData.header = "Today's Forecast"
        case (currenthr < 9):
          elocData.header = "Today's Forecast"
        case (currenthr < 12):
          elocData.header = "Tonight's Forecast"
        case (currenthr < 14):
          elocData.header = "Tonight's Forecast"
        case (currenthr < 17):
          elocData.header = "Tomorrow's Forecast"
        case (currenthr < 20):
          elocData.header = "Tomorrow's Forecast"
        default:
          elocData.header = "Today's Forecast"
      }
      elocData.locationName = systemSettings.extraCity.cities[locNum].locationName
      elocData.noReport = true
    })
    weatherData.dayPart.english.extraLoc[locNum] = elocData
  }
  getDayPart()
  function getExtended() {
    //weatherData.extendedForecast.english.extraLoc[locNum] = {}
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.extraCity.cities[locNum].lat + "," + systemSettings.extraCity.cities[locNum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var eLocData = {noReport: true,locationName:"",days:[{day:"",icon:"",condition:"",high:"",low:""},{day:"",icon:"",condition:"",high:"",low:""},{day:"",icon:"",condition:"",high:"",low:""},{day:"",icon:"",condition:"",high:"",low:""},{day:"",icon:"",condition:"",high:"",low:""},]}
    $.getJSON(url, function(data) {
      var today = longWeekDays[new Date().getDay()] 
      eLocData.locationName = systemSettings.extraCity.cities[locNum].locationName
      eLocData.noReport = false
      var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        ii = 1
        dpi = 2
      }
      for (var i = 0; i < eLocData.days.length; i++, ii++, dpi = dpi + 2) {
        eLocData.days[i].day = data.dayOfWeek[ii].substring(0,3)
        eLocData.days[i].icon = data.daypart[0].iconCodeExtend[dpi]
        eLocData.days[i].condition = getCond(eLocData.days[i].icon, "forecast")
        if (data.dayOfWeek[ii] == today) {
          eLocData.days[i].low = ""
        } else {
          eLocData.days[i].low = data.temperatureMin[ii]
        }
        eLocData.days[i].high = data.temperatureMax[ii]
      }
    }).fail(function() {
      eLocData.locationName = systemSettings.extraCity.cities[locNum].locationName
      eLocData.noReport = true
    })
    weatherData.extendedForecast.english.extraLoc[locNum] = eLocData
  }
  getExtended()
}
function getSpanishData() {
  function getCurrent() {
    var url = "https://api.weather.com/v3/wx/observations/current?icaoCode=" + systemSettings.mainCity.obsIcaoCode + "&units=e&language=es-US&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      weatherData.currentConditions.spanish.locationName = systemSettings.mainCity.airportName
      weatherData.currentConditions.spanish.noReport = false
      weatherData.currentConditions.spanish.humidity = data.relativeHumidity + "%"
      weatherData.currentConditions.spanish.dewPoint = data.temperatureDewPoint
      weatherData.currentConditions.spanish.pressure = data.pressureAltimeter.toFixed(2)
      weatherData.currentConditions.spanish.pressureTrend = data.pressureTendencyCode
      weatherData.currentConditions.spanish.wind = ((data.windDirectionCardinal == "CALM" || data.windSpeed == 0) ? "Calm" : data.windDirectionCardinal + " " + data.windSpeed)
      weatherData.currentConditions.spanish.gusts = ((data.windGust != null) ? data.windGust + " mph" : "None")
      weatherData.currentConditions.spanish.feelsLikeTitle = "Sensación téermica"
      weatherData.currentConditions.spanish.feelsLike = ((data.temperatureFeelsLike == data.temperature) ? "none" : data.temperatureFeelsLike)
      weatherData.currentConditions.spanish.icon = data.iconCodeExtend
      weatherData.currentConditions.spanish.condition = getCond(data.iconCodeExtend, "current", "spanish")
      weatherData.currentConditions.spanish.temperature = data.temperature
    }).fail(function() {
      weatherData.currentConditions.spanish.locationName = systemSettings.mainCity.airportName
      weatherData.currentConditions.spanish.noReport = true
    })
  }
  getCurrent()
  function getDayPart() {
    var url = "https://api.weather.com/v3/wx/forecast/hourly/2day?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&units=e&language=es-US&apiKey=" + api_key
    var currenthr = dateFns.getHours(new Date());
    $.getJSON(url, function(data) {
      var targetHours
      function timeTitleCreate(time){
        var hour = dateFns.getHours(time);
        if (hour == 0) {
          return 'Medionoche';
        } else if (hour == 12){
          return 'Mediodia';
        }
        return (dateFns.format(time,'h a')).replace(" ", "");
      }
      switch (true) {
        case (currenthr < 3):
          weatherData.dayPart.spanish.header = "Pronóstico de hoy"
          targetHours = [6, 12, 15, 17];
        case (currenthr < 9):
          weatherData.dayPart.spanish.header = "Pronóstico de hoy"
          targetHours = [12, 15, 17, 20]; break;
        case (currenthr < 12):
          weatherData.dayPart.spanish.header = "Pronóstico esta noche"
          targetHours = [15, 17, 20, 0]; break;
        case (currenthr < 14):
          weatherData.dayPart.spanish.header = "Pronóstico esta noche"
          targetHours = [17, 20, 0, 6]; break;
        case (currenthr < 17):
          weatherData.dayPart.spanish.header = "Pronóstico para mañana"
          targetHours = [6, 12, 15, 17]; break;
        case (currenthr < 20):
          weatherData.dayPart.spanish.header = "Pronóstico para mañana"
          targetHours = [6, 12, 15, 17]; break;
        default:
          weatherData.dayPart.spanish.header = "Pronóstico de hoy"
          targetHours = [6, 12, 15, 17]
      }
     var ii = 0
      weatherData.dayPart.spanish.locationName = systemSettings.mainCity.locationName
      weatherData.dayPart.spanish.noReport = false
      for (var i = 0; i < data.validTimeLocal.length; i++) {
        if (ii < 4) {
          var dpTime = dateFns.getHours(data.validTimeLocal[i])
          if (dpTime == targetHours[ii]) {
            weatherData.dayPart.spanish.times[ii].time = timeTitleCreate(data.validTimeLocal[i])
            weatherData.dayPart.spanish.times[ii].icon = data.iconCodeExtend[i]
            weatherData.dayPart.spanish.times[ii].condition = getCond(data.iconCodeExtend[i], "daypart", "spanish")
            weatherData.dayPart.spanish.times[ii].temperature = data.temperature[i]
            weatherData.dayPart.spanish.times[ii].wind = ((data.windDirectionCardinal[i] == "CALMA" || data.windSpeed[i] == 0) ? "Calma" : data.windDirectionCardinal[i] + " " + data.windSpeed[i])
            ii++
          }
        } else {
          break
        }
      }
    }).fail(function() {
      switch (true) {
        case (currenthr < 3):
          weatherData.dayPart.spanish.header = "Pronóstico de hoy"
        case (currenthr < 9):
          weatherData.dayPart.spanish.header = "Pronóstico de hoy"
        case (currenthr < 12):
          weatherData.dayPart.spanish.header = "Pronóstico esta noche"
        case (currenthr < 14):
          weatherData.dayPart.spanish.header = "Pronóstico esta noche"
        case (currenthr < 17):
          weatherData.dayPart.spanish.header = "Pronóstico para mañana"
        case (currenthr < 20):
          weatherData.dayPart.spanish.header = "Pronóstico para mañana"
        default:
          weatherData.dayPart.spanish.header = "Pronóstico de hoy"
      }
      weatherData.dayPart.spanish.locationName = systemSettings.mainCity.locationName
      weatherData.dayPart.spanish.noReport = true
    })
  }
  getDayPart()
  function getExtended() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.mainCity.lat + "," + systemSettings.mainCity.lon + "&format=json&units=e&language=es-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      var today = longWeekDays[new Date().getDay()] 
      weatherData.extendedForecast.spanish.locationName = systemSettings.mainCity.locationName
      weatherData.extendedForecast.spanish.noReport = false
      var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        ii = 1
        dpi = 2
      }
      for (var i = 0; i < weatherData.extendedForecast.spanish.days.length; i++, ii++, dpi = dpi + 2) {
        weatherData.extendedForecast.spanish.days[i].day = data.dayOfWeek[ii].substring(0,3).replaceAll("Vie", "Vier").replaceAll("Mié", "Miér")
        weatherData.extendedForecast.spanish.days[i].icon = data.daypart[0].iconCodeExtend[dpi]
        weatherData.extendedForecast.spanish.days[i].condition = getCond(weatherData.extendedForecast.spanish.days[i].icon, "forecast", "spanish")
        if (data.dayOfWeek[ii] == today) {
          weatherData.extendedForecast.spanish.days[i].low = ""
        } else {
          weatherData.extendedForecast.spanish.days[i].low = data.temperatureMin[ii]
        }
        weatherData.extendedForecast.spanish.days[i].high = data.temperatureMax[ii]
      }
    }).fail(function() {
      weatherData.extendedForecast.spanish.locationName = systemSettings.mainCity.locationName
      weatherData.extendedForecast.spanish.noReport = true
    })
  }
  getExtended()
}
function getTrafficData() {
  checkTrafMap()
  setTimeout(() => {
    //setTrafMap(weatherData.trafficMapUnavailable)
  }, 50);
  function getTrafficReport() {
    var trafficCoords = []
    trafficCoords.push(Number(Number(systemSettings.traffic.lon)) - 0.075)
    trafficCoords.push(Number(Number(systemSettings.traffic.lat)) - 0.075)
    trafficCoords.push(Number(Number(systemSettings.traffic.lon)) + 0.075)
    trafficCoords.push(Number(Number(systemSettings.traffic.lat)) + 0.075)
    var trafurl = "https://api.tomtom.com/traffic/services/5/incidentDetails?bbox=" + trafficCoords[0] + "%2C" + trafficCoords[1] + "%2C" + trafficCoords[2] + "%2C" + trafficCoords[3] + "&fields=%7Bincidents%7Btype%2Cgeometry%7Btype%7D%2Cproperties%7BiconCategory%2Cevents%7Bdescription%7D%2Cfrom%2Cto%2Ctmc%7Bdirection%7D%2CmagnitudeOfDelay%7D%7D%7D&language=en-US&categoryFilter=1%2C9&timeValidityFilter=present&key=" + traf_key
    //console.log(trafurl)
    $.getJSON(trafurl, function(data) {
      var spacer = {"LOW IMPACT":"                     ", "MEDIUM IMPACT":"                            ", "HIGH IMPACT":"                      "}
      weatherData.trafficReport.incidents = []
      weatherData.trafficReport.noReport = false
      weatherData.trafficReport.locationName = systemSettings.traffic.locationName
      var t = 0
      if (data.incidents.length > 0) {
        for (var i = 0; i < data.incidents.length; i++) {
          if (t < 6) {
            var trafficObj = {impact:"", desc:"", title:"", fulldesc:""}
            trafficObj.impact = ((data.incidents[i].properties.magnitudeOfDelay === 2) ? "MEDIUM IMPACT" : (data.incidents[i].properties.magnitudeOfDelay === 3) ? "HIGH IMPACT" : "LOW IMPACT")
            for (var p = 0; p < data.incidents[i].properties.events.length; p++) {
              trafficObj.desc += " - " + data.incidents[i].properties.events[p].description.toLowerCase()
            }
            trafficObj.title = ((data.incidents[i].properties.iconCategory == 9) ? "Construction" : "Incident") + ", " + data.incidents[i].properties.from
            trafficObj.fulldesc = spacer[((data.incidents[i].properties.magnitudeOfDelay === 2) ? "MEDIUM IMPACT" : (data.incidents[i].properties.magnitudeOfDelay === 3) ? "HIGH IMPACT" : "LOW IMPACT")] + "- from " + data.incidents[i].properties.from + " to " + data.incidents[i].properties.to + trafficObj.desc + "."
            weatherData.trafficReport.incidents.push(trafficObj)
            t++
          } else {
            break
          }
        }
      } else {
        weatherData.trafficReport.incidents = []
        weatherData.trafficReport.noReport = true
        weatherData.trafficReport.locationName = systemSettings.traffic.locationName
      }
    }).fail(function() {
      weatherData.trafficReport.incidents = []
      weatherData.trafficReport.noReport = true
      weatherData.trafficReport.locationName = systemSettings.traffic.locationName
    })
  }
  getTrafficReport()
  /*function getTrafficFlowOLD() {
    var url = "https://data.traffic.hereapi.com/v7/flow?locationReferencing=tmc&in=circle:" + systemSettings.traffic.lat + "," + systemSettings.traffic.lon + ";r=50000&functionalClasses=1&apiKey=" + HERE_key
    console.log(url)
    $.getJSON(url, function(data) {
      weatherData.trafficFlow.locationName = systemSettings.traffic.locationName
      weatherData.trafficFlow.noReport = false
      weatherData.trafficFlow.routes = []
      var t = 0
      if (data.results.length > 0) {
        for (var i = 0; i < data.results.length; i++) {
          if (t < 3 /*&& data.results[i].location.length > 1200*/ /*) {
            var flowObj = {from:"",to:"",speed:"",travelTime:"", color:"",routeIcon:""}
            flowObj.speed = ((data.results[i].currentFlow.freeflow == data.results[i].currentFlow.speed) ? "CLEAR" : metStoMPH(data.results[i].currentFlow.speed))
            flowObj.from = data.results[i].location.description
            flowObj.travelTime = Math.round((data.results[i].location.length / data.results[i].currentFlow.speed) / 60)
            flowObj.color = ((flowObj.speed > 49) ? "GREEN" : (flowObj.speed < 29) ? "YELLOW" : "RED")
            if (flowObj.speed == "CLEAR") {flowObj.color = "GREEN"}
            flowObj.routeIcon = "images/roadSigns/" + systemSettings.traffic.routes[t].route + ".png"
            weatherData.trafficFlow.routes.push(flowObj)
            t++
          } else {
            break
          }
        }
      } else {
        weatherData.trafficFlow.locationName = systemSettings.traffic.locationName
        weatherData.trafficFlow.noReport = true
        weatherData.trafficFlow.routes = []
      }
    }).fail(function() {
      weatherData.trafficFlow.locationName = systemSettings.traffic.locationName
      weatherData.trafficFlow.noReport = true
      weatherData.trafficFlow.routes = []
    })
  }*/
  //getTrafficFlowOLD()
  function getTrafficFlow(routenum) {
    var url = "https://router.hereapi.com/v8/routes?transportMode=car&origin=" + systemSettings.traffic.routes[routenum].from + "&destination=" + systemSettings.traffic.routes[routenum].to + "&return=summary,travelSummary,polyline&apiKey=" + HERE_key
    $.getJSON(url, function(data) {
      weatherData.trafficFlow.locationName = systemSettings.traffic.locationName
      weatherData.trafficFlow.noReport = false
      var flowObj = {routeIcon:"",from:"",to:"",speed:"",baseSpeed:"",travelTime:"",color:"",mph:""}
      flowObj.from = systemSettings.traffic.routes[routenum].fromStreet
      flowObj.to = systemSettings.traffic.routes[routenum].toStreet
      flowObj.baseSpeed = Math.round(metStoMPH(data.routes[0].sections[0].summary.length/data.routes[0].sections[0].summary.baseDuration))
      flowObj.mph = Math.round(metStoMPH(data.routes[0].sections[0].summary.length/data.routes[0].sections[0].summary.duration))
      flowObj.speed = ((flowObj.mph >= flowObj.baseSpeed) ? "CLEAR" : metStoMPH(data.routes[0].sections[0].summary.length/data.routes[0].sections[0].summary.duration))
      flowObj.travelTime = Math.round(data.routes[0].sections[0].summary.duration/60)
      flowObj.color = ((flowObj.speed == "CLEAR") ? "GREEN" : (flowObj.speed <= 25) ? "RED" : (flowObj.mph >= 40) ? "GREEN" : "YELLOW")
      flowObj.routeIcon = "images/roadSigns/" + systemSettings.traffic.routes[routenum].routeIcon + ".png"
      setTimeout(() => {
        weatherData.trafficFlow.routes[routenum] = flowObj
      }, 200);
    })
  }
  weatherData.trafficFlow.routes = []
  if (!systemSettings.traffic.autoFind && HERE_key != "nada" && HERE_key != "") {
    setTimeout(() => {
      for (var i = 0; i < systemSettings.traffic.routes.length; i++) {
        getTrafficFlow(i)
      }
    }, 250);
  }
}
function getTravelData() {
  function getTravelMapData(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.travel.regionalMap.cities[citynum].lat + "," + systemSettings.travel.regionalMap.cities[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var tfObj = {tfData: [
      {noReport:true,locationName:"",temperature:"",icon:""},
      {noReport:true,locationName:"",temperature:"",icon:""},
    ]}
    $.getJSON(url, function(data) {
      var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }
      for (var i = 0; i < tfObj.tfData.length; i++, ii++, dpi = dpi + 2) {
        tfObj.tfData[i].noReport = false
        weatherData.travelForecast.dayName[i] = ((weatherData.travelForecast.dayName[i] == "null") ? data.dayOfWeek[ii] : weatherData.travelForecast.dayName[i])
        tfObj.tfData[i].locationName = systemSettings.travel.regionalMap.cities[citynum].locationName
        tfObj.tfData[i].temperature = data.temperatureMax[ii]
        tfObj.tfData[i].icon = data.daypart[0].iconCodeExtend[dpi]
      }
    }).fail(function() {
      for (var i = 0; i < tfObj.tfData.length; i++) {
        tfObj.tfData[i].noReport = true
      }
    })
    weatherData.travelForecast.cities.push(tfObj)
  }
  weatherData.travelForecast.cities = []
  for (var i = 0; i < systemSettings.travel.regionalMap.cities.length; i++) {
    getTravelMapData(i)
  }
  function getDestinationData(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.travel.destinationForecast[citynum].lat + "," + systemSettings.travel.destinationForecast[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var dfObj = {noReport:true, locationName:"",days:[{high:"",low:"",icon:""},{high:"",low:"",icon:""},{high:"",low:"",icon:""}]}
    $.getJSON(url, function(data) {
      var today = longWeekDays[new Date().getDay()] 
      var ii = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 2 : 1;
      var dpi = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 4 : 2;
      /*ii = 0
      dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
      dfObj.noReport = false
      dfObj.locationName = systemSettings.travel.destinationForecast[citynum].locationName
      for (var i = 0; i < dfObj.days.length; i++, ii++, dpi = dpi + 2) {
        weatherData.destinationForecast.dayName[i] = ((weatherData.destinationForecast.dayName[i] == "null") ? data.dayOfWeek[ii].substring(0,3) : weatherData.destinationForecast.dayName[i])
        dfObj.days[i].high = data.temperatureMax[ii]
        if (data.dayOfWeek[ii] == today) {
          dfObj.days[i].low = ""
        } else {
          dfObj.days[i].low = data.temperatureMin[ii]
        }
        dfObj.days[i].icon = data.daypart[0].iconCodeExtend[dpi]
      }
    }).fail(function() {
      dfObj.noReport = false
      dfObj.locationName = systemSettings.travel.destinationForecast[citynum].locationName
    })
    weatherData.destinationForecast.cities.push(dfObj)
  }
  weatherData.destinationForecast.cities = []
  for (var i = 0; i < systemSettings.travel.destinationForecast.length; i++) {
    getDestinationData(i)
  }
}
function getHealthData() {
  function getOdActivityData() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.health.lat + "," + systemSettings.health.lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      var today = longWeekDays[new Date().getDay()] 
      var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }
      weatherData.outdoorActivity.noReport = false
      weatherData.outdoorActivity.locationName = systemSettings.health.locationName
      weatherData.outdoorActivity.dayName = data.dayOfWeek[ii]
      weatherData.outdoorActivity.icon = data.daypart[0].iconCodeExtend[dpi]
      weatherData.outdoorActivity.high = data.temperatureMax[ii]
      //WIND CHILLL / HEAT INDEX
      weatherData.outdoorActivity.low = ((data.dayOfWeek[ii] == today) ? "none" : data.temperatureMin[ii])
      weatherData.outdoorActivity.feelsLike = ((data.daypart[0].temperature[dpi] > 65) ? "Heat Index   " + data.daypart[0].temperatureHeatIndex[dpi] : "Wind Chill   " + data.daypart[0].temperatureWindChill[dpi])
      weatherData.outdoorActivity.feelsLikeNum = ((data.daypart[0].temperature[dpi] > 65) ? data.daypart[0].temperatureHeatIndex[dpi] : data.daypart[0].temperatureWindChill[dpi])
      weatherData.outdoorActivity.precipChance = data.daypart[0].precipChance[dpi] + "%"
      weatherData.outdoorActivity.humidity = data.daypart[0].relativeHumidity[dpi] + "%"
      weatherData.outdoorActivity.wind =  ((data.daypart[0].windDirectionCardinal[dpi] == "CALM" || data.daypart[0].windSpeed[dpi] == 0) ? "Calm" : data.daypart[0].windDirectionCardinal[dpi] + " " + data.daypart[0].windSpeed[dpi])
    }).fail(function() {
      weatherData.outdoorActivity.noReport = true
      weatherData.outdoorActivity.locationName = systemSettings.health.locationName
    })
  }
  getOdActivityData()
  function getPollenData() {
    var url = "https://api.weather.com/v1/geocode/" + systemSettings.health.lat + "/" + systemSettings.health.lon + "/observations/pollen.json?language=en-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      if (data.pollenobservations !== undefined) {
        if (data.pollenobservations[0].stn_cmnt_cd != "A" && data.pollenobservations[0].stn_cmnt_cd != "B" && data.pollenobservations[0].stn_cmnt_cd != "C" && data.pollenobservations[0].stn_cmnt_cd != "D") {
          weatherData.pollen.noReport = false
          weatherData.pollen.locationName = ((systemSettings.health.locationName == "") ? data.pollenobservations[0].loc_nm : systemSettings.health.locationName) 
          weatherData.pollen.date = dateFns.format(new Date(data.pollenobservations[0].rpt_dt), "MMM D")
          weatherData.pollen.pollenCount = ((data.pollenobservations[0].total_pollent_cnt == null) ? "" : data.pollenobservations[0].total_pollent_cnt)
          weatherData.pollen.pollenCountCategory = ((data.pollenobservations[0].total_pollent_cnt <= 0) ? "none" : (0 < data.pollenobservations[0].total_pollent_cnt <= 10) ? "Low" : (10 < data.pollenobservations[0].total_pollent_cnt <= 50) ? "Moderate" : (50 < data.pollenobservations[0].total_pollent_cnt <= 500) ? "High" : "Very High")
          weatherData.pollen.indices[0] = ((data.pollenobservations[0].pollenobservation[0].pollen_idx == 9) ? 0 : data.pollenobservations[0].pollenobservation[0].pollen_idx)
          weatherData.pollen.indices[1] = ((data.pollenobservations[0].pollenobservation[1].pollen_idx == 9) ? 0 : data.pollenobservations[0].pollenobservation[1].pollen_idx)
          weatherData.pollen.indices[2] = ((data.pollenobservations[0].pollenobservation[2].pollen_idx == 9) ? 0 : data.pollenobservations[0].pollenobservation[2].pollen_idx)
          weatherData.pollen.indices[3] = ((data.pollenobservations[0].pollenobservation[3].pollen_idx == 9) ? 0 : data.pollenobservations[0].pollenobservation[3].pollen_idx)
          weatherData.pollen.treeType = ((data.pollenobservations[0].treenames[0].tree_nm != "No Report") ? pollendata.pollenobservations[0].treenames[0].tree_nm : "")
        } else {
          weatherData.pollen.noReport = true
          weatherData.pollen.locationName = ""
        }
      } else {
        weatherData.pollen.noReport = true
        weatherData.pollen.locationName = ""
      }
    }).fail(function() {
      weatherData.pollen.noReport = true
      weatherData.pollen.locationName = ""
    })
  }
  getPollenData()
  function getAchesPains() {
    var achesurl = "https://api.weather.com/v2/indices/achePain/daypart/3day?geocode=" + systemSettings.health.lat + "," + systemSettings.health.lon + "&language=en-US&format=json&apiKey=" + api_key
    $.getJSON(achesurl, function(achesdata) {
      var ii = 0
      if (achesdata.achesPainsIndex12hour.dayInd[0] == "N") {
        ii = 1
      }
      weatherData.achesBreathe.locationName = systemSettings.health.locationName
      weatherData.achesBreathe.dayName = dateFns.format(new Date(achesdata.achesPainsIndex12hour.fcstValidLocal[ii]), "dddd")
      weatherData.achesBreathe.achesIndex = achesdata.achesPainsIndex12hour.achesPainsIndex[ii]
      weatherData.achesBreathe.achesWord = achesdata.achesPainsIndex12hour.achesPainsCategory[ii]
    }).fail(function() {
      weatherData.achesBreathe.achesIndex = "FAIL"
      weatherData.achesBreathe.locationName = systemSettings.health.locationName
    })
    var breathurl = "https://api.weather.com/v2/indices/breathing/daypart/3day?geocode=" + systemSettings.health.lat + "," + systemSettings.health.lon + "&language=en-US&format=json&apiKey=" + api_key
    $.getJSON(breathurl, function(breathdata) {
      var ii = 0
      if (breathdata.breathingIndex12hour.dayInd[0] == "N") {
        ii = 1
      }
      weatherData.achesBreathe.breatheIndex = breathdata.breathingIndex12hour.breathingIndex[ii]
      weatherData.achesBreathe.breatheWord = breathdata.breathingIndex12hour.breathingCategory[ii]
      weatherData.achesBreathe.dayName = dateFns.format(new Date(breathdata.breathingIndex12hour.fcstValidLocal[ii]), "dddd")
    }).fail(function() {
      weatherData.achesBreathe.breatheIndex = "FAIL"
      weatherData.achesBreathe.locationName = systemSettings.health.locationName
    })
  }
  getAchesPains()
  function getAirQuality() {
    var url = "https://api.weather.com/v3/wx/globalAirQuality?geocode=" + systemSettings.health.lat + "," + systemSettings.health.lon + "&language=en-US&scale=EPA&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      weatherData.airQuality.noReport = false
      weatherData.airQuality.locationName = systemSettings.health.locationName
      weatherData.airQuality.dayName = dateFns.format(new Date(data.globalairquality.expireTimeGmt * 1000), "dddd")
      weatherData.airQuality.index = Math.round(data.globalairquality.airQualityCategoryIndex/2)
      weatherData.airQuality.primaryPollutant = data.globalairquality.primaryPollutant.replace("CO","Ozone").replace("NO2","Ozone").replace("O3","Ozone").replace("PM10","Fine\nParticulates").replace("PM2.5","Fine\nParticulates").replace("SO2","Ozone")
    })
  }
  getAirQuality()
  function getUVData() {
    var currenturl = "https://api.weather.com/v3/wx/observations/current?icaoCode=" + systemSettings.health.obsIcaoCode + "&units=e&language=en-US&format=json&apiKey=" + api_key
    $.getJSON(currenturl, function(currentdata) {
      if (currentdata.uvIndex >= 0) {
        weatherData.uvIndex.locationName = systemSettings.health.locationName
        weatherData.uvIndex.current.noReport = false
        weatherData.uvIndex.current.index = ((currentdata.uvIndex > 10) ? 10 : currentdata.uvIndex)
        weatherData.uvIndex.current.word = currentdata.uvDescription
      } else {
        weatherData.uvIndex.current.noReport = true
      }
    }).fail(function() {
      weatherData.uvIndex.current.noReport = true
    })
    var forecasturl = "https://api.weather.com/v2/indices/uv/hourly/48hour?geocode=" + systemSettings.health.lat + "," + systemSettings.health.lon + "&language=en-US&format=json&apiKey=" + api_key
    var currenthr = dateFns.getHours(new Date())
    $.getJSON(forecasturl, function(forecastdata) {
      function timeTitleCreate(time){
        return (dateFns.format(time,'h a')).replace(" ", "");
      }
      var targetHours
      switch (true) {
        case (currenthr < 6):
          targetHours = [9, 12, 15]; break
        case (currenthr < 9):
          targetHours = [12, 15, 18]; break
        case (currenthr < 12):
          targetHours = [15, 18, 9]; break
        case (currenthr < 15):
          targetHours = [18, 9, 12]; break
        case (currenthr < 18):
          targetHours = [9, 12, 15]; break
        default:
          targetHours = [9, 12, 15]
      }
      var ii = 0
      weatherData.uvIndex.forecast.noReport = false
      weatherData.uvIndex.locationName = systemSettings.health.locationName
      for (var i = 0; i < forecastdata.uvIndex1hour.fcstValidLocal.length; i++) {
        if (ii < 3) {
          var uvTime = dateFns.getHours(forecastdata.uvIndex1hour.fcstValidLocal[i])
          if (uvTime == targetHours[ii]) {
            if (forecastdata.uvIndex1hour.uvIndex[i] >= 0) {
              weatherData.uvIndex.forecast.times[ii].hour = timeTitleCreate(forecastdata.uvIndex1hour.fcstValidLocal[i])
              weatherData.uvIndex.forecast.times[ii].day = forecastdata.uvIndex1hour.dow[i].substring(0, 3)
              weatherData.uvIndex.forecast.times[ii].index = ((forecastdata.uvIndex1hour.uvIndex[i] > 10) ? 10 : forecastdata.uvIndex1hour.uvIndex[i])
              weatherData.uvIndex.forecast.times[ii].word = forecastdata.uvIndex1hour.uvDesc[i]
              ii++
            } else {
              weatherData.uvIndex.forecast.noReport = true
              break
            }
          }
        } else {
          break
        }
      }
    }).fail(function() {
      weatherData.uvIndex.forecast.noReport = true
    })
  }
  getUVData()
}
function getAirporData() {
  function grabAirportDelays() {
    weatherData.airportDelayList = []//https://nasstatus.faa.gov/api/airport-events
    $.getJSON("/airports", function(eventdata) {
      for (const airportevent of eventdata) {
        var delay = {iataCode:"", arrivalDelay:0, arrivalDelayReason:"", departureDelay:0, departureDelayReason:"",closed:false}
        delay.iataCode = airportevent.airportId
        if (airportevent.groundStop != null) {
          if (delay.closed == false) {
            delay.departureDelay = ((differenceUTC(airportevent.groundStop.endTime) > delay.departureDelay) ? differenceUTC(airportevent.groundStop.endTime) : delay.departureDelay)
            delay.departureDelayReason = ((delay.departureDelayReason == "") ? airportevent.groundStop.impactingCondition: delay.departureDelayReason + ", " + airportevent.groundStop.impactingCondition)
          }
        }
        if (airportevent.groundDelay != null) {
          if (delay.closed == false) {
            delay.departureDelay = ((airportevent.groundDelay.avgDelay > delay.departureDelay) ? airportevent.groundDelay.avgDelay : delay.departureDelay)
            delay.departureDelayReason = ((delay.departureDelayReason == "") ? airportevent.groundDelay.impactingCondition: delay.departureDelayReason + ", " + airportevent.groundDelay.impactingCondition)
          }
        }
        if (airportevent.airportClosure != null) {
          delay.closed = true
          delay.departureDelay = "Closed"
          delay.departureDelayReason = ""
        }
        if (airportevent.arrivalDelay != null) {
          delay.arrivalDelay = ((airportevent.arrivalDelay.averageDelay > delay.arrivalDelay) ? airportevent.arrivalDelay.averageDelay : delay.arrivalDelay)
        }
        if (airportevent.departureDelay != null) {
          if (delay.closed == false) {
            delay.departureDelay = ((airportevent.departureDelay.averageDelay > delay.departureDelay) ? airportevent.departureDelay.averageDelay : delay.departureDelay)
          }
        }
        /*if (airportevent.deicing != null) {
          delay.arrivalDelay = ((differenceUTC(airportevent.deicing.expTime) > delay.arrivalDelay) ? differenceUTC(airportevent.deicing.expTime) : delay.arrivalDelay)
          delay.arrivalDelayReason = ((delay.arrivalDelayReason == "") ? "Deicing" : delay.arrivalDelayReason + ", " + "Deicing")
          if (delay.closed == false) {
            delay.departureDelay = ((differenceUTC(airportevent.deicing.expTime) > delay.departureDelay) ? differenceUTC(airportevent.deicing.expTime) : delay.departureDelay)
            delay.departureDelayReason = ((delay.departureDelayReason == "") ? "Deicing" : delay.departureDelayReason + ", " + "Deicing")
          }
        }*/
        weatherData.airportDelayList.push(delay)
      }
      for (var i = 0; i < weatherData.airportDelayList.length; i++) {
        if (weatherData.airportDelayList[i].arrivalDelay != "Closed") {
          if (weatherData.airportDelayList[i].arrivalDelay != 0) {
            weatherData.airportDelayList[i].arrivalDelay = weatherData.airportDelayList[i].arrivalDelay
            weatherData.airportDelayList[i].arrivalDelay = formatMinutes(weatherData.airportDelayList[i].arrivalDelay)
            var ogATime = weatherData.airportDelayList[i].arrivalDelay
            weatherData.airportDelayList[i].arrivalDelay = "<em>" + ogATime.replaceAll(" hr ", "</em> hr <em>").replaceAll(" min", "</em> min").replaceAll(" hrONLYH", "</em> hr")
          } else {
            weatherData.airportDelayList[i].arrivalDelay = "No Delay"
          }
        }
        if (weatherData.airportDelayList[i].departureDelay != "Closed") {
          if (weatherData.airportDelayList[i].departureDelay != 0) {
            weatherData.airportDelayList[i].departureDelay = weatherData.airportDelayList[i].departureDelay
            weatherData.airportDelayList[i].departureDelay = formatMinutes(weatherData.airportDelayList[i].departureDelay)
            var ogDTime = weatherData.airportDelayList[i].departureDelay
            weatherData.airportDelayList[i].departureDelay = "<em>" + ogDTime.replaceAll(" hr ", "</em> hr <em>").replaceAll(" min", "</em> min").replaceAll(" hrONLYH", "</em> hr")
          } else {
            weatherData.airportDelayList[i].departureDelay = "No Delay"
          }
        }
      }
    }).fail(function() {
      for (var i = 0; i < systemSettings.airport.main.length; i++) {
        var delay = {iataCode:"", arrivalDelay:"", arrivalDelayReason:"", departureDelay:"", departureDelayReason:"",closed:false}
        delay.arrivalDelay = "No Report"
        delay.departureDelay = "No Report"
        delay.iataCode = systemSettings.airport.main[i].iataCode
        weatherData.airportDelayList.push(delay)
      }
      for (var i = 0; i < systemSettings.airport.national.length; i++) {
        var delay = {iataCode:"", arrivalDelay:"", arrivalDelayReason:"", departureDelay:"", departureDelayReason:"",closed:false}
        delay.arrivalDelay = ""
        delay.departureDelay = ""
        delay.iataCode = systemSettings.airport.national[i].iataCode
        weatherData.airportDelayList.push(delay)
      }
    })
  }
  grabAirportDelays()
  function getLocalAirports(num) {
    var url = "https://api.weather.com/v3/wx/observations/current?iataCode=" + systemSettings.airport.main[num].iataCode + "&units=e&language=en-US&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      var airportObj = {noReport:true,iataCode:"",airportName:"",arrivalDelay:"",arrivalDelayReason:"",departureDelay:"",departureDelayReason:"",icon:"",condition:"",temperature:""}
      airportObj.noReport = false
      airportObj.airportName = systemSettings.airport.main[num].airportName
      airportObj.iataCode = systemSettings.airport.main[num].iataCode
      airportObj.icon = data.iconCodeExtend
      airportObj.condition = getCond(data.iconCodeExtend, "current")
      airportObj.temperature = data.temperature
      for (const delay of weatherData.airportDelayList) {
        if (delay.iataCode == airportObj.iataCode) {
          airportObj.arrivalDelay = delay.arrivalDelay
          airportObj.arrivalDelayReason = delay.arrivalDelayReason
          airportObj.departureDelay = delay.departureDelay
          airportObj.departureDelayReason = delay.departureDelayReason
        }
      }
      if (airportObj.arrivalDelay == "") {
        airportObj.arrivalDelay = "No Delay"
      }
      if (airportObj.departureDelay == "") {
        airportObj.departureDelay = "No Delay"
      }
      weatherData.localAirportConditions.push(airportObj)
    }).fail(function() {
      var airportObj = {noReport:true,iataCode:"",airportName:"",arrivalDelay:"No Report",arrivalDelayReason:"",departureDelay:"No Report",departureDelayReason:"",icon:"",condition:"",temperature:""}
      airportObj.airportName = systemSettings.airport.main[num].airportName
      airportObj.iataCode = systemSettings.airport.main[num].iataCode
      weatherData.localAirportConditions.push(airportObj)
    })
  }
  setTimeout(() => {
    weatherData.localAirportConditions = []
    for (var i = 0; i < systemSettings.airport.main.length; i++) {
      getLocalAirports(i)
    }
  }, 150);
  function getNatAirports(num) {
    var url = "https://api.weather.com/v3/wx/observations/current?iataCode=" + systemSettings.airport.national[num].iataCode + "&units=e&language=en-US&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      var airportObj = {noReport:true,iataCode:"",airportName:"",delay:"",delayReason:"",icon:"",temperature:""}
      airportObj.noReport = false
      airportObj.airportName = systemSettings.airport.national[num].airportName
      airportObj.iataCode = systemSettings.airport.national[num].iataCode
      airportObj.icon = data.iconCodeExtend
      airportObj.temperature = data.temperature
      for (const delay of weatherData.airportDelayList) {
        if (delay.iataCode == airportObj.iataCode) {
          airportObj.delay = delay.departureDelay
          airportObj.delayReason = delay.departureDelayReason
        }
      }
      if (airportObj.delay == "") {
        airportObj.delay = "No Delay"
      }
      setTimeout(() => {
        weatherData.nationalAirportConditions[num] = airportObj
      }, 200);
    }).fail(function() {
      var airportObj = {noReport:true,iataCode:"",airportName:"",delay:"",delayReason:"",icon:"",temperature:""}
      airportObj.airportName = systemSettings.airport.national[num].airportName
      airportObj.iataCode = systemSettings.airport.national[num].iataCode
      setTimeout(() => {
        weatherData.nationalAirportConditions[num] = airportObj
      }, 200);
    })
  }
  setTimeout(() => {
    weatherData.nationalAirportConditions = []
    for (var i = 0; i < systemSettings.airport.national.length; i++) {
      getNatAirports(i)
    }
  }, 150);
}
function getIntlData() {
  function getIntlMapDataCA(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.canada[citynum].lat + "," + systemSettings.international.map.canada[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:"", dayName:""}
    $.getJSON(url, function(data) {
      var ii = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 2 : 1;
      var dpi = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 4 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.canada[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    }).fail(function() {
        imObj.noReport = true
    })
    weatherData.internationalMap.canada.push(imObj)
  }
  weatherData.internationalMap.canada = []
  for (var i = 0; i < systemSettings.international.map.canada.length; i++) {
    getIntlMapDataCA(i)
  }
  function getIntlMapDataMX(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.mexico[citynum].lat + "," + systemSettings.international.map.mexico[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:""}
    $.getJSON(url, function(data) {
      var ii = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 2 : 1;
      var dpi = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 4 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.mexico[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    }).fail(function() {
        imObj.noReport = true
    })
    weatherData.internationalMap.mexico.push(imObj)
  }
  weatherData.internationalMap.mexico = []
  for (var i = 0; i < systemSettings.international.map.mexico.length; i++) {
    getIntlMapDataMX(i)
  }
  function getIntlMapDataCB(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.caribbean[citynum].lat + "," + systemSettings.international.map.caribbean[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:""}
    $.getJSON(url, function(data) {
      var ii = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 2 : 1;
      var dpi = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 4 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.caribbean[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    }).fail(function() {
        imObj.noReport = true
    })
    weatherData.internationalMap.caribbean.push(imObj)
  }
  weatherData.internationalMap.caribbean = []
  for (var i = 0; i < systemSettings.international.map.caribbean.length; i++) {
    getIntlMapDataCB(i)
  }
  function getIntlMapDataSA(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.southamerica[citynum].lat + "," + systemSettings.international.map.southamerica[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:""}
    $.getJSON(url, function(data) {
      var ii = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 2 : 1;
      var dpi = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 4 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.southamerica[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    }).fail(function() {
        imObj.noReport = true
    })
    weatherData.internationalMap.southamerica.push(imObj)
  }
  weatherData.internationalMap.southamerica = []
  for (var i = 0; i < systemSettings.international.map.southamerica.length; i++) {
    getIntlMapDataSA(i)
  }
  function getIntlMapDataGB(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.britain[citynum].lat + "," + systemSettings.international.map.britain[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:""}
    $.getJSON(url, function(data) {
      var ii = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 2 : 1;
      var dpi = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 4 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.britain[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    }).fail(function() {
        imObj.noReport = true
    })
    weatherData.internationalMap.britain.push(imObj)
  }
  weatherData.internationalMap.britain = []
  for (var i = 0; i < systemSettings.international.map.britain.length; i++) {
    getIntlMapDataGB(i)
  }
  function getIntlMapDataEU(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.europe[citynum].lat + "," + systemSettings.international.map.europe[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:""}
    $.getJSON(url, function(data) {
      var ii = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 2 : 1;
      var dpi = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 4 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.europe[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    }).fail(function() {
        imObj.noReport = true
    })
    weatherData.internationalMap.europe.push(imObj)
  }
  weatherData.internationalMap.europe = []
  for (var i = 0; i < systemSettings.international.map.europe.length; i++) {
    getIntlMapDataEU(i)
  }
  function getIntlMapDataAF(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.africa[citynum].lat + "," + systemSettings.international.map.africa[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:""}
    $.getJSON(url, function(data) {
      var ii = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 2 : 1;
      var dpi = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 4 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.africa[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    }).fail(function() {
        imObj.noReport = true
    })
    weatherData.internationalMap.africa.push(imObj)
  }
  weatherData.internationalMap.africa = []
  for (var i = 0; i < systemSettings.international.map.africa.length; i++) {
    getIntlMapDataAF(i)
  }
  function getIntlMapDataIN(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.india[citynum].lat + "," + systemSettings.international.map.india[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:""}
    $.getJSON(url, function(data) {
      var ii = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 2 : 1;
      var dpi = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 4 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.india[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    }).fail(function() {
        imObj.noReport = true
    })
    weatherData.internationalMap.india.push(imObj)
  }
  weatherData.internationalMap.india = []
  for (var i = 0; i < systemSettings.international.map.india.length; i++) {
    getIntlMapDataIN(i)
  }
  function getIntlMapDataEA(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.eastasia[citynum].lat + "," + systemSettings.international.map.eastasia[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:""}
    $.getJSON(url, function(data) {
      var ii = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 2 : 1;
      var dpi = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 4 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.eastasia[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    }).fail(function() {
        imObj.noReport = true
    })
    weatherData.internationalMap.eastasia.push(imObj)
  }
  weatherData.internationalMap.eastasia = []
  for (var i = 0; i < systemSettings.international.map.eastasia.length; i++) {
    getIntlMapDataEA(i)
  }
  function getIntlMapDataOC(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.oceania[citynum].lat + "," + systemSettings.international.map.oceania[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:""}
    $.getJSON(url, function(data) {
      var ii = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 2 : 1;
      var dpi = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 4 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.oceania[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    }).fail(function() {
        imObj.noReport = true
    })
    weatherData.internationalMap.oceania.push(imObj)
  }
  weatherData.internationalMap.oceania = []
  for (var i = 0; i < systemSettings.international.map.oceania.length; i++) {
    getIntlMapDataOC(i)
  }
  function getIntlMapDataAU(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.map.australia[citynum].lat + "," + systemSettings.international.map.australia[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var imObj = {noReport:true,locationName:"",temperature:"",icon:""}
    $.getJSON(url, function(data) {
      var ii = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 2 : 1;
      var dpi = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 4 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
        imObj.noReport = false
        imObj.dayName = data.dayOfWeek[ii]
        imObj.locationName = systemSettings.international.map.australia[citynum].locationName
        imObj.temperature = data.temperatureMax[ii]
        imObj.icon = data.daypart[0].iconCodeExtend[dpi]
    }).fail(function() {
        imObj.noReport = true
    })
    weatherData.internationalMap.australia.push(imObj)
  }
  weatherData.internationalMap.australia = []
  for (var i = 0; i < systemSettings.international.map.australia.length; i++) {
    getIntlMapDataAU(i)
  }
  function getIntlForecastData(citynum) {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.international.forecast[citynum].lat + "," + systemSettings.international.forecast[citynum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var ifObj = {noReport:true, locationName:"",days:[{high:"",low:"",icon:""},{high:"",low:"",icon:""},{high:"",low:"",icon:""}]}
    $.getJSON(url, function(data) {
      var today = longWeekDays[new Date().getDay()] 
      var ii = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 2 : 1;
      var dpi = new Date().getHours() >= 15 || new Date().getHours() <= 3 ? 4 : 2;
      /*var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }*/
      ifObj.noReport = false
      ifObj.locationName = systemSettings.international.forecast[citynum].locationName
      for (var i = 0; i < ifObj.days.length; i++, ii++, dpi = dpi + 2) {
        weatherData.internationalForecast.dayName[i] = ((weatherData.internationalForecast.dayName[i] == "null") ? data.dayOfWeek[ii].substring(0,3) : weatherData.internationalForecast.dayName[i])
        ifObj.days[i].high = data.temperatureMax[ii]
        if (data.dayOfWeek[ii] == today) {
          ifObj.days[i].low = ""
        } else {
          ifObj.days[i].low = data.temperatureMin[ii]
        }
        ifObj.days[i].icon = data.daypart[0].iconCodeExtend[dpi]
      }
    }).fail(function() {
      ifObj.noReport = false
      ifObj.locationName = systemSettings.international.forecast[citynum].locationName
    })
    weatherData.internationalForecast.cities.push(ifObj)
  }
  weatherData.internationalForecast.cities = []
  for (var i = 0; i < systemSettings.international.forecast.length; i++) {
    getIntlForecastData(i)
  }
}
function getGolfData() {
  function getTeeTimeData() {
    var url = "https://api.weather.com/v3/wx/forecast/hourly/2day?geocode=" + systemSettings.golf.teeTime.lat + "," + systemSettings.golf.teeTime.lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var currenthr = dateFns.getHours(new Date());
    $.getJSON(url, function(data) {
      var targetHours
      function timeTitleCreate(time){
        var hour = dateFns.getHours(time);
        if (hour == 0) {
          return 'Midnight';
        } else if (hour == 12){
          return 'Noon';
        }
        return (dateFns.format(time,'h a')).replace(" ", "");
      }
      switch (true) {
        case (currenthr < 6):
          targetHours = [6, 8, 10, 12, 14];
        case (currenthr < 8):
          targetHours = [8, 10, 12, 14, 16]; break;
        case (currenthr < 10):
          targetHours = [10, 12, 14, 16, 18]; break;
        case (currenthr < 12):
          targetHours = [12, 14, 16, 18, 20]; break;
        case (currenthr < 14):
          targetHours = [14, 16, 18, 20, 6]; break;
        case (currenthr < 16):
          targetHours = [16, 18, 20, 6, 8]; break;
        case (currenthr < 18):
          targetHours = [18, 20, 6, 8, 10]; break;
        case (currenthr < 20):
          targetHours = [20, 6, 8, 10, 12]; break;
        default:
          targetHours = [6, 8, 10, 12, 14];
      }
     var ii = 0
      weatherData.teeTime.locationName = systemSettings.mainCity.locationName
      weatherData.teeTime.noReport = false
      for (var i = 0; i < data.validTimeLocal.length; i++) {
        if (ii < 5) {
          var dpTime = dateFns.getHours(data.validTimeLocal[i])
          if (dpTime == targetHours[ii]) {
            weatherData.teeTime.times[ii].time = timeTitleCreate(data.validTimeLocal[i])
            weatherData.teeTime.times[ii].icon = data.iconCodeExtend[i]
            weatherData.teeTime.times[ii].day = data.dayOfWeek[i].substring(0,3)
            weatherData.teeTime.times[ii].temperature = data.temperature[i]
            weatherData.teeTime.times[ii].wind = ((data.windDirectionCardinal[i] == "CALM" || data.windSpeed[i] == 0) ? "Calm" : data.windDirectionCardinal[i] + " " + data.windSpeed[i])
            ii++
          }
        } else {
          break
        }
      }
    }).fail(function() {
      weatherData.teeTime.locationName = systemSettings.mainCity.locationName
      weatherData.teeTime.noReport = true
    })
  }
  getTeeTimeData()
  function getCourseData(coursenum) {
    var Furl = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.golf.courses[coursenum].lat + "," + systemSettings.golf.courses[coursenum].lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    var today = longWeekDays[new Date().getDay()] 
    var golfObj = {noReport: true, locationName:"", days:[{day:"",icon:"",high:"",low:"",wind:"", index:"", indexName:""},{day:"",icon:"",high:"",low:"",wind:"", index:"", indexName:""},{day:"",icon:"",high:"",low:"",wind:"", index:"", indexName:""}]}
    $.getJSON(Furl, function(data) {
      golfObj.noReport = false
      golfObj.locationName = systemSettings.golf.courses[coursenum].courseName
      var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        ii = 1
        dpi = 2
      }
      for (var i = 0; i < golfObj.days.length; i++, ii++, dpi = dpi + 2) {
        golfObj.days[i].day = data.dayOfWeek[ii]
        golfObj.days[i].high = data.temperatureMax[ii]
        if (data.dayOfWeek[ii] == today) {
          golfObj.days[i].low = ""
        } else {
          golfObj.days[i].low = data.temperatureMin[ii]
        }
        golfObj.days[i].icon = data.daypart[0].iconCodeExtend[dpi]
        golfObj.days[i].wind = ((data.daypart[0].windDirectionCardinal[dpi] == "CALM" || data.daypart[0].windSpeed[dpi] == 0) ? "Calm" : data.daypart[0].windDirectionCardinal[dpi] + " " + data.daypart[0].windSpeed[dpi])
      }
    }).fail(function() {
      golfObj.noReport = true
      golfObj.locationName = systemSettings.golf.courses[coursenum].courseName
    })
    var Iurl = "https://api.weather.com/v2/indices/golf/daypart/15day?geocode=" + systemSettings.golf.courses[coursenum].lat + "," + systemSettings.golf.courses[coursenum].lon + "&language=en-US&format=json&apiKey=" + api_key
    $.getJSON(Iurl, function(data) {
      var dpi = 0
      if (data.golfIndex12hour.dayInd[0] == "N") {
        dpi = 1
      }
      for (var i = 0; i < golfObj.days.length; i++, dpi = dpi + 2) {
        golfObj.days[i].index = data.golfIndex12hour.golfIndex[dpi]
        golfObj.days[i].indexName = ((data.golfIndex12hour.golfIndex[dpi] == 2 ) ? "Poor" : data.golfIndex12hour.golfCategory[dpi])
      }
    }).fail(function() {
      for (var i = 0; i < golfObj.days.length; i++) {
        golfObj.days[i].index = "FAIL"
        golfObj.days[i].indexName = ""
      }
    })
    weatherData.courseForecast.push(golfObj)
  }
  weatherData.courseForecast = []
  for (var i = 0; i < systemSettings.golf.courses.length; i++) {
    getCourseData(i)
  }
}
function getGardenData() {
  function getGardeningInfo() {
    var Furl = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.garden.lat + "," + systemSettings.garden.lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    $.getJSON(Furl, function(data) {
      var today = longWeekDays[new Date().getDay()] 
      var ii = 0
      var dpi = 0
      if (data.daypart[0].daypartName[0] == null) {
        dpi = 2
        ii = 1
      }
      weatherData.gardeningIndex.noReport = false
      weatherData.gardeningIndex.locationName = systemSettings.garden.locationName
      weatherData.gardeningIndex.dayName = data.dayOfWeek[ii]
      weatherData.gardeningIndex.icon = data.daypart[0].iconCodeExtend[dpi]
      weatherData.gardeningIndex.high = data.temperatureMax[ii]
      weatherData.gardeningIndex.low = ((data.dayOfWeek[ii] == today) ? "none" : data.temperatureMin[ii])
      weatherData.gardeningIndex.precipChance = data.daypart[0].precipChance[dpi] + "%"
      weatherData.gardeningIndex.cloudCover = data.daypart[0].cloudCover[dpi] + "%"
    }).fail(function() {
      weatherData.gardeningIndex.noReport = true
      weatherData.gardeningIndex.locationName = systemSettings.health.locationName
    })
    var Wurl = "https://api.weather.com/v2/indices/wateringNeeds/daypart/5day?geocode=" + systemSettings.garden.lat + "," + systemSettings.garden.lon + "&language=en-US&format=json&apiKey=" + api_key
    $.getJSON(Wurl, function(data) {
      var widxWords = ["Low", "Low", "Low", "Low", "Moderate", "Moderate", "Moderate", "Moderate", "High", "High", "High"]//0 and 1 are all the way to left, 10 is all the way to right
      var dpi = 0
      if (data.wateringNeedsIndex12hour.dayInd[0] == "N") {
        dpi = 1
      }
      weatherData.gardeningIndex.wateringIndex = 4//data.wateringNeedsIndex12hour.wateringNeedsIndex[dpi]
      weatherData.gardeningIndex.wateringIndexWord = "Moderate"//widxWords[data.wateringNeedsIndex12hour.wateringNeedsIndex[dpi]]
    }).fail(function() {
      weatherData.gardeningIndex.wateringIndex = "FAIL"
      weatherData.gardeningIndex.wateringIndexWord = ""
    })
  }
  getGardeningInfo()
}
function getSkiData() {
  function getSkiReport(resortnum) {
    var url = "https://feeds.snocountry.net/getSnowReport.php?apiKey=SnoCountry.example&ids=" + systemSettings.ski.resorts[resortnum].resortId
    $.getJSON(url, function(data) {
      var skiObj = {resortName:"", newSnow:"", baseSnowMin:"", baseSnowMax:"", surface:"", openPercent:"", timeReported:"", timeStamp:""}
      skiObj.resortName = systemSettings.ski.resorts[resortnum].displayName + ", " + systemSettings.ski.resorts[resortnum].state
      skiObj.newSnow = data.items[0].newSnowMin == "" ? "0\"" : data.items[0].newSnowMin + "\""
      skiObj.baseSnowMin = data.items[0].avgBaseDepthMin == "" ? "0 - " : data.items[0].avgBaseDepthMin + " - "
      skiObj.baseSnowMax = data.items[0].avgBaseDepthMax == "" ? "0\"" : data.items[0].avgBaseDepthMax + "\""
      skiObj.surface = data.items[0].primarySurfaceCondition == null ? "" : data.items[0].primarySurfaceCondition
      skiObj.openPercent = data.items[0].openDownHillTrails == "" ? "0% Open" : Math.round((Number(data.items[0].openDownHillTrails) / Number(data.items[0].maxOpenDownHillTrails)) * 100) + "% Open"
      skiObj.timeReported = getEpoch(data.items[0].reportDateTime)
      skiObj.timeStamp = makeTimetable(data.items[0].reportDateTime)
      weatherData.skiReport.resorts.push(skiObj)
    }).fail(function() {
      weatherData.skiReport.time = new Date().getHours() < 12 ? new Date().toLocaleDateString('en-US', { weekday: 'long' }) + " am" : new Date().toLocaleDateString('en-US', { weekday: 'long' }) + " pm"
      var skiObj = {resortName:systemSettings.ski.resorts[resortnum].displayName + ", " + systemSettings.ski.resorts[resortnum].state, newSnow:"", baseSnowMin:"No Report", baseSnowMax:"", surface:"", openPercent:"", timeReported:0, timeStamp:""}
      weatherData.skiReport.resorts.push(skiObj)
    })
  }
  weatherData.skiReport.resorts = []
  for (var i = 0; i < systemSettings.ski.resorts.length; i++) {
    getSkiReport(i)
  }
  setTimeout(() => {
    weatherData.skiReport.resorts.sort((a, b) => a.timeReported-b.timeReported)
  }, 500);
}
function getBeachData() {
  async function getSurfReport() {
    $.get('/surf/' + systemSettings.beach.surfReport.buoy + '.txt', function(data){
      var stringedData = data.replaceAll("Peak Period", "Peak WavePreiod").split(/\r?\n/)
      for (var i = 0; i < stringedData.length; i++) {
      }
      function getLineNo(arr, phrase, skipAmount) {
        var skipped = 0
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].includes(phrase)) {
            if (skipped == skipAmount) {
              return i
            } else {
              skipped++
            }
          }
        }
      }
      if (getLineNo(stringedData, "Wind:", 0) != undefined) {
        var cutWindSpeedStr = stringedData[getLineNo(stringedData, "Wind:", 0)].substring(stringedData[getLineNo(stringedData, "Wind:", 0)].indexOf(",")).replaceAll(", ", "").replaceAll(" kt", "")
        var cutWindDirStr = stringedData[getLineNo(stringedData, "Wind: ", 0)].substring(6)
        cutWindDirStr = cutWindDirStr.substring(0, cutWindDirStr.indexOf("("))
        if (cutWindDirStr == "CALM" || cutWindDirStr == "Calm" || Math.round(cutWindSpeedStr*1.151) == "0") {
          weatherData.surfReport.wind = "Calm"
        } else {
          cutWindSpeedStr = Math.round(cutWindSpeedStr*1.151) + " mph"
          weatherData.surfReport.wind = cutWindDirStr + cutWindSpeedStr
        }
      } else {
        weatherData.surfReport.wind  = ""
      }
      if (data.includes("Swell:") == true) {
        if (getLineNo(stringedData, "Period:", 1) != undefined) {
          var periodText = stringedData[getLineNo(stringedData, "Period:", 1)].substring(8).replaceAll(" sec", "")
          weatherData.surfReport.wavePeriod = Math.round(Number(periodText)) + " Seconds"
        } else {
          weatherData.surfReport.wavePeriod = ""
        }
      } else {
        if (getLineNo(stringedData, "Period:", 0) != undefined) {
          var periodText = stringedData[getLineNo(stringedData, "Period:", 0)].substring(8).replaceAll(" sec", "")
          weatherData.surfReport.wavePeriod = Math.round(Number(periodText)) + " Seconds"
        } else {
          weatherData.surfReport.wavePeriod = ""
        }
      }
      if (data.includes("Water Temp:")) {
        var tempText = stringedData[getLineNo(stringedData, "Water Temp:", 0)].substring(12).slice(0, -3).replaceAll(" °F", "")//
        weatherData.surfReport.waterTemperature = Math.round(Number(tempText))
      } else {
        weatherData.surfReport.waterTemperature = "FAIL"
      }
      if (data.includes("Wind Wave:")) {
        var waveText = stringedData[getLineNo(stringedData, "Wind Wave:", 0)].substring(11).replaceAll(" ft", "")
        weatherData.surfReport.waveHeight = Math.round(Number(waveText))
      } else {
        weatherData.surfReport.waveHeight = "NONE"
      }
      weatherData.surfReport.locationName = ((systemSettings.beach.surfReport.displayName != "") ? systemSettings.beach.surfReport.displayName : "DFLTNAME")
      weatherData.surfReport.noReport = false
    }).fail(function() {
      weatherData.surfReport.noReport = true
    })
  }
  try {
    getSurfReport()
  } catch (error) {
    weatherData.surfReport.noReport = true
  }
  function coastForecast() {
    $.get('/coastalwaters/' + systemSettings.beach.coastalForecast.office , function(data) {
      var id = data["@graph"][0].id;
      cwfId(id);
    }).fail(function() {
      weatherData.coastalForecast.noReport = true
    })
  }
  function cwfId(cwfid) {
    if (cwfid === undefined){
      weatherData.coastalForecast.noReport = true
    } else {
      $.get(`/cwf/${cwfid}`, function(data){
        weatherData.coastalForecast.noReport = false
        var stringedData = data.productText.replaceAll(".SUN", "X~Sunday").replaceAll(".MON", "X~Monday").replaceAll(".TUE", "X~Tuesday").replaceAll(".WED", "X~Wednesday").replaceAll(".THU", "X~Thursday").replaceAll(".FRI", "X~Friday").replaceAll(".SAT", "X~Saturday").replaceAll(".TODAY", "X~Today").replaceAll(".TONIGHT", "X~Tonight").replaceAll(".THIS AFTERNOON", "X~This Afternoon").replaceAll(".REST OF TODAY...", "X~Rest of Today").split(/\r?\n/)
        for (var i = 0; i < stringedData.length; i++) {
          //console.log(stringedData[i])
        }
        function getLineNo(arr, phrase, skipAmount) {
          var skipped = 0
          for (var i = 0; i < arr.length; i++) {
            if (arr[i].includes(phrase)) {
              if (skipped == skipAmount) {
                return i
              } else {
                skipped++
              }
            }
          }
        }
        weatherData.coastalForecast.warnings = []
        var lineBump = getLineNo(stringedData, systemSettings.beach.coastalForecast.zone, 0)
        weatherData.coastalForecast.locationName = ((systemSettings.beach.coastalForecast.zoneName == "") ? stringedData[lineBump+1] : systemSettings.beach.coastalForecast.zoneName)
        var fcstBumper = 4
        function isTime(text) {if (text.includes("X~")) {return true} else {return false}}
        function isAlert(text) {if (text.substring(0, 2) == "...") {return true} else {return false}}
        for (var i = 0; i < stringedData.length-lineBump; i++) {
          var cline = stringedData[lineBump + fcstBumper]
          if (!isTime(cline)) {
            fcstBumper++
            weatherData.coastalForecast.warnings.push(cline +" ")
          } else {
            if (weatherData.coastalForecast.warnings.length > 0) {
              if (weatherData.coastalForecast.warnings[0].substring(0, 3) == "...") {
                weatherData.coastalForecast.warnings[0] = weatherData.coastalForecast.warnings[0].substring(3)
              } else {
                weatherData.coastalForecast.warnings[0] = weatherData.coastalForecast.warnings[0]
              }
            }
            break
          }
        }
        for (var i = 0; i < 3; i++) {
          var cline = ""
          for (var ii = 0; ii < stringedData.length-lineBump; ii++) {
            if (ii == 0) {
              cline = cline + stringedData[lineBump + fcstBumper + ii] + " "
            } else {
              if (!isTime(stringedData[lineBump + fcstBumper + ii])) {
                cline = cline + stringedData[lineBump + fcstBumper + ii] + " "
              } else {
                fcstBumper = fcstBumper + ii
                break
              }
            }
          }
          weatherData.coastalForecast.times[i].forecast = cline.replaceAll("X~", "<em>").replaceAll("...", "</em><br>")
        }
      }).fail(function() {
        weatherData.coastalForecast.noReport = true
      })
    }
  }
  try {
    coastForecast()
  } catch (error) {
    weatherData.coastalForecast.noReport = true
  }
  function getTides(station) {
    cdate = new Date()
    var url = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=" + dateFns.format(new Date(),"YYYY") + dateFns.format(new Date(),"MM") + dateFns.format(new Date(),"DD") + "&end_date=" + dateFns.format((dateFns.addDays(new Date(), 4)),"YYYY") + dateFns.format((dateFns.addDays(new Date(), 4)),"MM") + dateFns.format((dateFns.addDays(new Date(), 4)),"DD") + "&station=" + systemSettings.beach.tides.stations[station].id + "&product=predictions&datum=MLLW&time_zone=lst_ldt&interval=hilo&units=english&application=DataAPI_Sample&format=json"
    $.getJSON(url, function(data) {
      weatherData.tides.stations[station].noReport = false
      weatherData.tides.stations[station].stationName = systemSettings.beach.tides.stations[station].name
      var li = 0
      var hi = 0
      var index = 0
      var tdone = false
      while (tdone == false) {
        if (data.predictions[index].type == "L") {
          if (new Date(data.predictions[index].t) > cdate) {
            weatherData.tides.stations[station].low[li] = dateFns.format(new Date(data.predictions[index].t), "h:mm a") + " " + shortWeekDays[new Date(data.predictions[index].t).getDay()]
            li++
          }
        } else if (data.predictions[index].type == "H") {
          if (new Date(data.predictions[index].t) > cdate) {
            weatherData.tides.stations[station].high[hi] = dateFns.format(new Date(data.predictions[index].t), "h:mm a") + " " + shortWeekDays[new Date(data.predictions[index].t).getDay()]
            hi++
          }
        }
        index++
        if (li >= 2 && hi >= 2) {
          tdone = true
        }
      }
    }).fail(function() {
      weatherData.tides.stations[station].noReport = true
      weatherData.tides.stations[station].stationName = systemSettings.beach.tides.stations[station].name
      weatherData.tides.stations[station].high[0] = ""
      weatherData.tides.stations[station].high[1] = ""
      weatherData.tides.stations[station].low[0] = ""
      weatherData.tides.stations[station].low[1] = ""
    })
    var Surl = "https://api.weather.com/v3/wx/forecast/daily/5day?icaoCode=" + systemSettings.beach.tides.almanac.icaoCode + "&units=e&language=en-US&format=json&apiKey=" + api_key
    $.getJSON(Surl, function(data) {
      weatherData.tides.almanacName = systemSettings.beach.tides.almanac.airportName
      var srid = 0
      var ssid = 0
      if (new Date(data.sunriseTimeLocal[srid]) < cdate) {{
        srid = 1
      }}
      if (new Date(data.sunsetTimeLocal[ssid]) < cdate) {{
        ssid = 1
      }}
      weatherData.tides.sunrise = dateFns.format(new Date(data.sunriseTimeLocal[srid]),"h:mm a") + " " + shortWeekDays[new Date(data.sunriseTimeLocal[srid]).getDay()]
      weatherData.tides.sunset = dateFns.format(new Date(data.sunsetTimeLocal[ssid]),"h:mm a") + " " + shortWeekDays[new Date(data.sunsetTimeLocal[ssid]).getDay()]
    }).fail(function() {
      weatherData.tides.almanacName = systemSettings.beach.tides.almanac.airportName
      weatherData.tides.sunrise = ""
      weatherData.tides.sunset = ""
    })
  }
  for (var i = 0; i < systemSettings.beach.tides.stations.length; i++) {
    getTides(i)
  }
}
function allData() {
  setTimeout(() => {
    if (systemSettings.packageSettings.includes("forecast") || systemSettings.packageSettings.includes("minicoreone") || systemSettings.packageSettings.includes("minicoretwo")) {
      getCoreData()
    }
    if (systemSettings.packageSettings.includes("extralocal")) {
      for (var i = 0; i < systemSettings.extraCity.cities.length; i++) {
        getExtraCore(i)
      }
    }
    if (systemSettings.packageSettings.includes("traffic")) {
      getTrafficData()
    }
    if (systemSettings.packageSettings.includes("travel")) {
      getTravelData()
    }
    if (systemSettings.packageSettings.includes("health")) {
      getHealthData()
    }
    if (systemSettings.packageSettings.includes("airport")) {
      getAirporData()
    }
    if (systemSettings.packageSettings.includes("international")) {
      getIntlData()
    }
    if (systemSettings.packageSettings.includes("golf")) {
      getGolfData()
    }
    if (systemSettings.packageSettings.includes("garden")) {
      getGardenData()
    }
    if (systemSettings.packageSettings.includes("ski")) {
      getSkiData()
    }
    if (systemSettings.packageSettings.includes("beach")) {
      getBeachData()
    }
    if (systemSettings.packageSettings.includes("spanish")) {
      getSpanishData()
    }
    //initializeRadar(locradar)
    //initializeRadar(satradar)
    //initializeRadar(regradar)
    setTimeout(() => {
      //console.log(weatherData)
    }, 2000);
  }, 5000);
}
function startPrograms() {
  slideKickOff();
  alignDataMaps()
  setTimeout(() => {
    //crawlCheck()
    //crawlKickOff()
    initializeRadar(radarEchoes)
    initializeRadar(satEchoes)
    //initializeRadar(satradar)
    //initializeRadar(regradar)
    initTrafficMap()
    //console.log("trafmap unavailable:", checkTrafMap())
    //setTrafMap(checkTrafMap())
  }, 1000);
  
  initTravelForecast()
  setTimeout(() => {
    $('#startup').fadeOut(0);
  }, 10);
}
function dataJS() {
  initRadarMaps()
  setInterval(function () {
    var today = new Date();
    var date = today.toString().replace('01', ' 1').replace('02', ' 2').replace('03', ' 3').replace('04', ' 4').replace('05', ' 5').replace('06', ' 6').replace('07', ' 7').replace('08', ' 8').replace('09', ' 9').slice(4,10).trimRight() 
    var time = today.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'}).replace(/ /g,' ').toLowerCase()
    var spacer = ((time.length > 7) ? " " : "  ")
    $('#date-time').text(date + spacer + time);
  }, 1000);
  setTimeout(function() {
    startPrograms()
    //setTimeout(() => {
    //  locradar.setCenter([locationConfig.radar.localCoords.lon, locationConfig.radar.localCoords.lat]);
    //  regradar.setCenter([locationConfig.radar.regionalCoords.lon, locationConfig.radar.regionalCoords.lat]);
    //  satradar.setCenter([locationConfig.radar.regionalCoords.lon, locationConfig.radar.regionalCoords.lat]);
    //}, 500);
  }, systemSettings.appearanceSettings.startupTime)
}
