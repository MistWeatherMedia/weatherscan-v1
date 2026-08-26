function initTravelForecast() {
  var tfClass = document.getElementsByClassName("travel-forecast")[0]
  $(".travel-forecast .basemap").css({"background-position-y":systemSettings.travel.regionalMap.mapTop+"px", "background-position-x":systemSettings.travel.regionalMap.mapLeft+"px", "background-size":systemSettings.travel.regionalMap.mapScale})
  $(".travel-forecast .map-borders").css({"background-position-y":systemSettings.travel.regionalMap.mapTop+"px", "background-position-x":systemSettings.travel.regionalMap.mapLeft+"px", "background-size":systemSettings.travel.regionalMap.mapScale})
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
  if (type == "main" || type == "spanish") {header = systemSettings.mainCity.radar} else if (type == "extra") {header = systemSettings.extraCity.cities[locationid].radar}
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
  if (type == "main" || type == "spanish") {header = systemSettings.mainCity.radar} else if (type == "extra") {header = systemSettings.extraCity.cities[locationid].radar}
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

function createTrafficMapIcons(zoom) {
  var toClass = document.getElementsByClassName("traffic-overview")[0]
  var id = zoom == 0 ? systemSettings.traffic.mapIcons.zoomOut : systemSettings.traffic.mapIcons.zoomIn
  for (var i = 0; i < id.length; i++) {
    var child = document.createElement("div")
    child.className = "icon " + numToWord(i)
    toClass.getElementsByClassName("traffic-icons")[0].appendChild(child)

    $(".traffic-overview .traffic-icons .icon." + numToWord(i)).css({"top":id[i].topPos+"px", "left":id[i].leftPos+"px","background-image":"url(images/trafficMap/"+id[i].icon + ".png)","background-size":"100% 100%"})
  }
}
function deleteTrafficMapIcons() {
  var toClass = document.getElementsByClassName("traffic-overview")[0]
  const div = toClass.getElementsByClassName("traffic-icons")[0]
  while (div.firstChild) {
      div.removeChild(div.firstChild)
  }
}