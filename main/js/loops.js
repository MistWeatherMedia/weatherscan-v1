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
var udlLength = 4000
async function getUdlData() {
  async function ccUDL() {
    var url = "https://api.weather.com/v3/wx/observations/current?icaoCode=" + systemSettings.upperDisplayCity.icaoCode + "&units=e&language=en-US&format=json&apiKey=" + api_key

    try {
      const data = await $.getJSON(url);

      udlData.currentConditions.locationName = systemSettings.upperDisplayCity.obsName
      udlData.currentConditions.noReport = false
      udlData.currentConditions.feelsLikeTitle = ((data.temperature > 65) ? "Heat Index" : "Wind Chill")
      udlData.currentConditions.feelsLike = ((data.temperatureFeelsLike == data.temperature) ? "none" : data.temperatureFeelsLike)
      udlData.currentConditions.condition = getCond(data.iconCodeExtend, "current").replaceAll("\n", " ")
      udlData.currentConditions.temperature = data.temperature
    } catch (error) {
      console.error(error)
      
      udlData.currentConditions.locationName = systemSettings.upperDisplayCity.obsName
      udlData.currentConditions.noReport = true
    }
  }
  await ccUDL()
  async function fctUDL() {
    var url = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=" + systemSettings.upperDisplayCity.lat + "," + systemSettings.upperDisplayCity.lon + "&format=json&units=e&language=en-US&apiKey=" + api_key
    
    try {
      const data = await $.getJSON(url);

      var li = 0
      if (data.daypart[0].dayOrNight[0] == null) {
        li = 1
      }

      udlData.forecast.locationName = systemSettings.upperDisplayCity.locationName
      udlData.forecast.noReport = false
      udlData.forecast.timeTitle = data.daypart[0].daypartName[li]
      udlData.forecast.condition = getCond(data.daypart[0].iconCodeExtend[li], "forecast").replaceAll("\n", " ")
      udlData.forecast.temperature = data.daypart[0].temperature[li]
      udlData.forecast.uvIndex = data.daypart[0].uvIndex[li]
      udlData.forecast.uvIndexWord = data.daypart[0].uvDescription[li]
      udlData.forecast.hiOrLow = data.daypart[0].dayOrNight[li] == "N" ? "Low" : "High"
    } catch (error) {
      console.error(error)
      
      udlData.forecast.locationName = systemSettings.upperDisplayCity.locationName
      udlData.forecast.timeTitle = udlGetOfflineTitle()
      udlData.forecast.noReport = true
    }
  }
  await fctUDL()
  
  reSetLineupUDL()
}
var udlLineup = []
function reSetLineupUDL() {
  var ccLineup = []
  if (udlData.currentConditions.noReport == true) {
    ccLineup = [
      { function: "ccName" },
      { function: "ccNoReport" },
    ]
  } else {
    ccLineup = [
  { function: "ccName" },
  { function: "ccCondition" },
  { function: "ccTemp" },
  { function: "ccHeatIndex" },
]
  }

  var fcstLineup = []
  if (udlData.forecast.noReport == true) {
    fcstLineup = [
      { function: "fctName" },
      { function: "fctNoReport" },
    ]
  } else {
    fcstLineup = [
  { function: "fctName" },
  { function: "fctCondition" },
  { function: "fctTemp" },
  { function: "fctUVIndex" },
]
  }
  udlLineup = [...ccLineup, ...fcstLineup]
}

var udlDisplays = {
  ccName() {
    $(".udl").html("Currently at  <em>" + udlData.currentConditions.locationName + "</em>")
    setTimeout(() => {
      udlCallBack()
    }, udlLength);
  },
  ccNoReport() {
    $(".udl").html("Currently  <em>No Report</em>")
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
  fctNoReport() {
    $(".udl").html(udlData.forecast.timeTitle + "  <em>Temporarily Unavailable</em>")
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
    if(udlData.forecast.timeTitle == "Tonight"){
      udlCallBack();
      return;
    }
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
  }
  showUDL(lidx)
}
function showUDL(which) {
  currentUDL = udlDisplays[udlLineup[which].function]
  currentUDL()
}