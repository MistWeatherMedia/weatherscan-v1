var simId = "scanv!"
var packageLibrary = {
  "forecast":forecastPackage,
  "minicoreone":miniPackageOne,
  "minicoretwo":miniPackageTwo,
  "extralocal":extraPackage,
  "spanish":spanishPackage,
  "traffic":trafficPackage,
  "travel":travelPackage,
  "airport":airportPackage,
  "international":internationalPackage,
  "golf":golfPackage,
  "health":healthPackage,
  "garden":gardenPackage,
  "ski":skiPackage,
  "beach":beachPackage,
}
function startupAnimations() {
  //start spinning the logo
  //delay 3 seconds
  $("#startup #startup-weatherscan-logo").fadeIn(0)
  setTimeout(() => {
    $("#startup #startup-twc-logo").fadeIn(250)
  }, 400);
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
    HERE_key = systemSettings.apiKeys.HERE_key
  })
} else {
  $.getJSON("configs/yourConfig.json", function(data) {
    systemSettings = data.jsonSystemSettings
    //console.log("Updated location settings:", systemSettings);
    //console.log(slideSettings.order[0])
    api_key = systemSettings.apiKeys.api_key
    map_key = systemSettings.apiKeys.map_key
    traf_key = systemSettings.apiKeys.traf_key
    HERE_key = systemSettings.apiKeys.HERE_key
  })
}

  
function startSystem() {
  console.log(systemSettings)
  //api_key = systemSettings.apiKeys.api_key
  //map_key = systemSettings.apiKeys.map_key
  //traf_key = systemSettings.apiKeys.traf_key
  //HERE_key = systemSettings.apiKeys.HERE_key
  locationJS()
  setTimeout(() => {
    versionCheck(systemSettings.appearanceSettings.version)
    if (systemSettings.appearanceSettings.adMessage[0] == "network") {
      $.getJSON("https://mistwx.com/crawlnetwork.json", function(data) {
        systemSettings.appearanceSettings.adMessage = data.crawls.scanv1
      })
    }
    slideSettings.order[0].slideLineup.push(introPackage);

    if (!systemSettings.traffic.autoFind && HERE_key != "nada" && HERE_key != "") {
      trafficPackage.slides.push({function: "trafficFlow"})
    }
    for (var i = 0; i < systemSettings.extraCity.cities.length; i++) {
      for (var ii = 0; ii < eBaseLU.length; ii++) {
        extraPackage.slides.push(eBaseLU[ii])
      }
    }
  
    for (var i = 0; i < systemSettings.packageSettings.length; i++) {
      slideSettings.order[0].slideLineup.push(packageLibrary[systemSettings.packageSettings[i]])
    }
    //locationJS()
    $('#main').fadeIn(0);
    $("#startup").fadeIn(0);
    audioPlayer = new AudioManager();
    audioPlayer.initializeAudio()
    audioPlayer.startPlaying(audioPlayer.playlist, true);
    setTimeout(() => {
      //r = i1 logo
      /*Rotate(r, .7, xr=0, yr=0, zr=1)
      Rotate(r, .8, xr=0, yr=1, zr=0)
      Rotate(r, .9, xr=1, yr=0, zr=0)*/
      $('.intellistarlogo').css({
        transition: `transform ${(systemSettings.appearanceSettings.startupTime/1000)+1}s linear`,
        transform: `rotateX(-${Math.random()*(systemSettings.appearanceSettings.startupTime/10000)}turn) rotateY(-${Math.random()*(systemSettings.appearanceSettings.startupTime/10000)}turn) rotateZ(-${Math.random()*(systemSettings.appearanceSettings.startupTime/10000)}turn)`
      });
      $("#startup .locationname").text(`location name: ${systemSettings.systemLocation}`);
      $("#startup .affiliatename").text(`affiliate name: ${systemSettings.appearanceSettings.providerName}`);
    }, 5)
    dataJS();
    setTimeout(() => {
      console.log(systemSettings)
    }, 5000);
    setTimeout(() => {
      startupAnimations()
    }, 3000);
  }, 1000);
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