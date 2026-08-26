var simId = "scanv!"
var packageLibrary = {
  "intro":introPackage,
  "forecast":forecastPackage,
  "minicoreone":miniPackageOne,
  "minicoretwo":miniPackageTwo,
  "extralocal":extraPackage,
  "spanish1":spanishPackageOne,
  "spanish2":spanishPackageTwo,
  "traffic":trafficPackage,
  "travel":travelPackage,
  "airport":airportPackage,
  "international":internationalPackage,
  "golf":golfPackage,
  "health":healthPackage,
  "garden":gardenPackage,
  "ski":skiPackage,
  "beach":beachPackage,
  "radar":radarPackage,
  "severeA":severePackageA,
  "severeB":severePackageB,
  "severe2":severePackageTwo,
}

async function startupAnimations() {
  setTimeout(() => {
    $("#startup #startup-weatherscan-logo").fadeIn(0)
    setTimeout(() => {
      $("#startup #startup-twc-logo").fadeIn(250)
    }, 400);
  }, 3000);
  //start spinning the logo
  //delay 3 seconds
}

var windowStatus = window.location.search ? window.location.search.split("?")[1] : undefined;
if (windowStatus == "nationalForecast") {
  $.getJSON("configs/national.json", function(data) {
    systemSettings = data.jsonSystemSettings
    //console.log("Updated location settings:", systemSettings);
    //console.log(slideSettings.order[0])
    api_key = systemSettings.apiKeys.api_key
    map_key = systemSettings.apiKeys.map_key
    traf_key = systemSettings.apiKeys.traf_key
  })
} else if (windowStatus == "debugJoeMist") {
  $.getJSON("configs/myConfig-joe.json", function(data) {
    systemSettings = data.jsonSystemSettings
    //console.log("Updated location settings:", systemSettings);
    //console.log(slideSettings.order[0])
    api_key = systemSettings.apiKeys.api_key
    map_key = systemSettings.apiKeys.map_key
    traf_key = systemSettings.apiKeys.traf_key
  })
} else if (windowStatus == "debugJensonMist") {
  $.getJSON("configs/myConfig-jenson.json", function(data) {
    systemSettings = data.jsonSystemSettings
    //console.log("Updated location settings:", systemSettings);
    //console.log(slideSettings.order[0])
    api_key = systemSettings.apiKeys.api_key
    map_key = systemSettings.apiKeys.map_key
    traf_key = systemSettings.apiKeys.traf_key
  })
} else if (windowStatus == "debugColsterMist") {
  //no more debug configs after this one i swear
  $.getJSON("configs/myConfig-colster.json", function(data) {
    systemSettings = data.jsonSystemSettings
    //console.log("Updated location settings:", systemSettings);
    //console.log(slideSettings.order[0])
    api_key = systemSettings.apiKeys.api_key
    map_key = systemSettings.apiKeys.map_key
    traf_key = systemSettings.apiKeys.traf_key
  })
} else {
  $.getJSON("configs/yourConfig.json", function(data) {
    systemSettings = data.jsonSystemSettings
    //console.log("Updated location settings:", systemSettings);
    //console.log(slideSettings.order[0])
    api_key = systemSettings.apiKeys.api_key
    map_key = systemSettings.apiKeys.map_key
    traf_key = systemSettings.apiKeys.traf_key

    //var q = window.location.search ? window.location.search.split("?")[1] : undefined;
    //if (q != "nationalForecast" /**temp code for now -> */ && q != "debugJoeMist" && q != "debugJensonMist" && q != "debugColsterMist") {
    //    locationJS()
    //}
  })
}

  
async function startSystem() {
  $("#startup .locationname").text(`location name: ${systemSettings.systemLocation}`);
  $("#startup .affiliatename").text(`affiliate name: ${systemSettings.appearanceSettings.providerName}`);

  $('#main').fadeIn(0);
  $("#startup").fadeIn(0);

    const logo = document.getElementsByClassName("intellistarlogo")[0];

// accumulated rotation (radians)
let rx = 0;
let ry = 0;
let rz = 0;

// radians per 33.33333 ms (exact RS intent)
const STEP_X = -0.9;
const STEP_Y = 0.8;
const STEP_Z = -0.7;

const BASE_DT = 1900;
const RAD_TO_DEG = 180 / Math.PI;

let lastTime = performance.now();

function animate(now) {
    const deltaMs = now - lastTime;
    lastTime = now;

    const scale = deltaMs / BASE_DT;

    rx += STEP_X * scale;
    ry += STEP_Y * scale;
    rz += STEP_Z * scale;

    /* Rotate order matches RS:
       Rotate(Z) → Rotate(Y) → Rotate(X)
    */
    logo.style.transform = `
        rotateZ(${rz * RAD_TO_DEG}deg)
        rotateY(${ry * RAD_TO_DEG}deg)
        rotateX(${rx * RAD_TO_DEG}deg)
    `;

    requestAnimationFrame(animate);
}

  requestAnimationFrame(animate);
      
  audioPlayer = new AudioManager();
  audioPlayer.initializeAudio()
  audioPlayer.startPlaying(audioPlayer.playlist, true);

  try {
    await locationJS();
  } catch (error) {
    console.error(error)
  }
  
  await startupAnimations()

   if (systemSettings.appearanceSettings.adMessage[0] == "network") {
    $.getJSON("https://mistwx.com/crawlnetwork.json", function(data) {
      systemSettings.appearanceSettings.adMessage = data.crawls.scanv1
    })
  }

  if (traf_key == "nada" || traf_key == "") {
    function fl(id) {
      return id != "traffic"
    }
    systemSettings.packageSettings = systemSettings.packageSettings.filter(fl)
  }

  for (var i = 0; i < systemSettings.extraCity.cities.length; i++) {
    for (var ii = 0; ii < eBaseLU.length; ii++) {
      //extraPackage.slides.push(eBaseLU[ii])
    }
  }
  
  for (var i = 0; i < systemSettings.packageSettings.length; i++) {
    slideSettings.order[0].slideLineup.push(packageLibrary[systemSettings.packageSettings[i]])
  }

  for (var i = 0; i < systemSettings.severePackageSettings.length; i++) {
    slideSettings.order[1].slideLineup.push(packageLibrary[systemSettings.severePackageSettings[i]])
  }

  //all starting data calls
  console.log("systemSettings", systemSettings)

  if (!systemSettings.appearanceSettings.nationalConfig) {
    try {
      await checkWarningCrawl()
    } catch (error) {
      console.error(error)
      weatherData.crawlAlerts = { locationname: systemSettings.mainCity.locationName, warnings: [] };
      weatherData.severemode = false;
    }
  }
  
  console.log("warning crawl data", weatherData.crawlAlerts)

  try {
    await allData();
  } catch (error) {
    console.error(error)
  }

  console.log("weatherData", weatherData)

  try {
    await getUdlData()
  } catch (error) {
    console.error(error)
  }

  console.log("UDL Data", udlData)
  
  await startPrograms()
}

setTimeout(() => {
  startSystem()
}, 1500);
function savePageSettings(page) {
  if (page == "appearance") {
    systemSettings.appearanceSettings.providerName = ((document.getElementById("provName").value == "") ? "Mist Digital Cable" : document.getElementById("provName").value)
    systemSettings.appearanceSettings.crawlMode = document.getElementById("crawlTypes").value
    systemSettings.appearanceSettings.providerType = document.getElementById("providerTypes").value
  }
}

function welcomefuncs(type) {
  if (type == "proceed") {
    $("#setup-welcome").fadeOut(0);
    $("#setup-mainloc").fadeIn(0);
  } else if (type == "skipall") {
    startButton();
  } else if (type == "json") {
    $("#setup-welcome").fadeOut(0);
    $("#setup-jsonconfig").fadeIn(0);
  }
}
function startButton() {
  $("#json-load").fadeOut(0)
  startSystem()
}
function jsonFuncs() {
  $('.json-valid').fadeOut(0)
  $('.json-warning').fadeOut(0)
  //credit: MapGuy
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  if (!file) {
    $('.json-warning').fadeIn(0)
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const json = JSON.parse(e.target.result);
      systemSettings = json.jsonSystemSettings
      //console.log("Updated location settings:", systemSettings);
      api_key = systemSettings.apiKeys.api_key
      map_key = systemSettings.apiKeys.map_key
      traf_key = systemSettings.apiKeys.traf_key
      HERE_key = systemSettings.apiKeys.HERE_key
      if (systemSettings.appearanceSettings.adMessage[0] == "network") {
        $.getJSON("https://mistwx.com/crawlnetwork.json", function(data) {
          systemSettings.appearanceSettings.adMessage = data.crawls.scanv1
        })
      }
      $('.json-valid').fadeIn(0)
      setTimeout(() => {
        startButton()
      }, 2000);
    } catch (err) {
      console.error("Error parsing JSON:", err);
      $('.json-warning').fadeIn(0)
    }
  };
  reader.readAsText(file);
}
function downloadTempJson() {
  let url = "configs/templateconfig.json"
  const a = document.createElement('a')
  a.href = url
  a.download = url.split('/').pop()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
function downloadExJson() {
  let url = "configs/Islip-config.json"
  const a = document.createElement('a')
  a.href = url
  a.download = url.split('/').pop()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
function jsonsaveButton() {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(systemSettings));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", "config.json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
