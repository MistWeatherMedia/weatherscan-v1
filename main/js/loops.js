var udlData = {
  currentConditions: {
    noReport: false,
    locationName:"",
    condition:"",
    temperature:"",
    feelsLike:"",
    feelsLikeTitle:"",
  },
  forecast: {
    noReport: false,
    locationName:"",
    timeTitle:"",
    condition:"",
    temperature:"",
    hiOrLow:"High",
    uvIndex:"",
    uvIndexWord:"",
  }
}
var currentUDL
var lidx = 0
var udlLength = 5000
function getUdlData() {
  function ccUDL() {
    var url = "https://api.weather.com/v3/wx/observations/current?icaoCode=" + systemSettings.upperDisplayCity.obsIcaoCode + "&units=e&language=en-US&format=json&apiKey=" + api_key
    $.getJSON(url, function(data) {
      udlData.currentConditions.locationName = systemSettings.upperDisplayCity.airportName
      udlData.currentConditions.noReport = false
      udlData.currentConditions.feelsLikeTitle = ((data.temperature > 65) ? "Heat Index" : "Wind Chill")
      udlData.currentConditions.feelsLike = ((data.temperatureFeelsLike == data.temperature) ? "none" : data.temperatureFeelsLike)
      udlData.currentConditions.condition = getCond(data.iconCodeExtend, "current").replaceAll("\n", " ")
      udlData.currentConditions.temperature = data.temperature
    }).fail(function() {
      udlData.currentConditions.locationName = systemSettings.upperDisplayCity.airportName
      udlData.currentConditions.noReport = true
    })
  }
  ccUDL()
  function fctUDL() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.upperDisplayCity.lat + "," + systemSettings.upperDisplayCity.lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    $.getJSON(url, function(data) {
      var li = 0
      if (data.daypart[0].dayOrNight[0] == null) {
        li = 2
      }
      udlData.forecast.locationName = systemSettings.upperDisplayCity.locationName
      udlData.forecast.noReport = false
      udlData.forecast.timeTitle = ((li == 2) ? "Tomorrow" : "Today")
      udlData.forecast.condition = getCond(data.daypart[0].iconCodeExtend[li], "forecast").replaceAll("\n", " ")
      udlData.forecast.temperature = data.daypart[0].temperature[li]
      udlData.forecast.uvIndex = data.daypart[0].uvIndex[li]
      udlData.forecast.uvIndexWord = data.daypart[0].uvDescription[li]
    }).fail(function() {
      udlData.forecast.locationName = systemSettings.upperDisplayCity.locationName
      udlData.forecast.noReport = false
    })
  }
  fctUDL()
}
var udlLineup = [
  { function: "ccName" },
  { function: "ccCondition" },
  { function: "ccTemp" },
  { function: "ccHeatIndex" },
  { function: "fctName" },
  { function: "fctCondition" },
  { function: "fctTemp" },
  { function: "fctUVIndex" },
]
var udlDisplays = {
  ccName() {
    $(".udl").html("Currently at  <em>" + udlData.currentConditions.locationName + "</em>")
    setTimeout(() => {
      udlCallBack()
    }, udlLength);
  },
  ccCondition() {
    $(".udl").html("Currently  <em>" + udlData.currentConditions.condition + "</em>")
    setTimeout(() => {
      udlCallBack()
    }, udlLength);
  },
  ccTemp() {
    $(".udl").html("Currently  <em>" + udlData.currentConditions.temperature + "°</em>")
    setTimeout(() => {
      udlCallBack()
    }, udlLength);
  },
  ccHeatIndex() {
    if (udlData.currentConditions.feelsLike != "none") {
      $(".udl").html("Current " + udlData.currentConditions.feelsLikeTitle + "  <em>" + udlData.currentConditions.feelsLike + "°</em>")
      setTimeout(() => {
        udlCallBack()
      }, udlLength);
    } else {
      udlCallBack()
    }
  },
  fctName() {
    $(".udl").html("Forecast for  <em>" + udlData.forecast.locationName + "</em>")
    setTimeout(() => {
      udlCallBack()
    }, udlLength);
  },
  fctCondition() {
    $(".udl").html(udlData.forecast.timeTitle + "  <em>" + udlData.forecast.condition + "</em>")
    setTimeout(() => {
      udlCallBack()
    }, udlLength);
  },
  fctTemp() {
    $(".udl").html(udlData.forecast.timeTitle + "'s " + udlData.forecast.hiOrLow + "  <em>" + udlData.forecast.temperature + "°</em>")
    setTimeout(() => {
      udlCallBack()
    }, udlLength);
  },
  fctUVIndex() {
    $(".udl").html(udlData.forecast.timeTitle + "'s UV Index  <em>" + udlData.forecast.uvIndex + " " + udlData.forecast.uvIndexWord + "</em>")
    setTimeout(() => {
      udlCallBack()
    }, udlLength);
  },
}
function udlCallBack() {
  lidx++;
  if (lidx >= udlLineup.length) {
    lidx = 0
    getUdlData()
  }
  showUDL(lidx)
}
function showUDL(which) {
  currentUDL = udlDisplays[udlLineup[which].function]
  currentUDL()
}