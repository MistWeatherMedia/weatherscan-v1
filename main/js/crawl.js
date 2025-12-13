var crawlIndex = 0;
var whatNext = ""
var alertCrawlActive = false
function adCrawl() {
    if (whatNext == "crawl") {
        $("#crawl-main").fadeIn(0)
        $(".upnext-ticker").fadeOut(0)
        $("#crawl-main .crawl").text(systemSettings.appearanceSettings.adMessage[crawlIndex])
        $("#crawl-main .crawl").marquee({speed: 103, pauseOnHover: false}).on("finished", () => {
            $("#crawl-main .crawl").marquee("destroy");
            crawlIndex++
            if (crawlIndex > systemSettings.appearanceSettings.adMessage.length) {
                crawlIndex = 0
            }
            if (whatNext == "upnext") {
                crawlKickOff()
                $("#crawl-main").fadeOut(0)
                $(".upnext-ticker").fadeIn(0)
            } else if (whatNext == "crawl") {
                $("#crawl-main .crawl").text("")
                setTimeout(() => {
                    adCrawl()
                }, 500);
            }
        })
    }
}
function crawlKickOff() {
    if (systemSettings.appearanceSettings.crawlMode == "both") {
        $("#crawl-main").fadeOut(0)
        $(".upnext-ticker").fadeIn(0)
        whatNext = "crawl"
        setTimeout(() => {
            adCrawl()
            setTimeout(() => {
                whatNext = "upnext"
            }, 10);
        }, 15000);
    } else if (systemSettings.appearanceSettings.crawlMode == "crawl") {
        $("#crawl-main").fadeIn(0)
        $(".upnext-ticker").fadeOut(0)
        whatNext = "crawl"
        setTimeout(() => {
            adCrawl()
        }, 100);
    } else if (systemSettings.appearanceSettings.crawlMode == "upnext") {
        whatNext = "upnext"
        $("#crawl-main").fadeOut(0)
        $(".upnext-ticker").fadeIn(0)
    }
}
function checkWarningCrawl() {
    getAllAlerts()
    setTimeout(() => {
        //console.log(weatherData.crawlAlerts.alertsAmount)
        if (weatherData.crawlAlerts.alertsAmount > 0) {
            if ($("#crawl-severe .crawl").text() != weatherData.crawlAlerts.warnings[0].warningdesc) {
                if (alertCrawlActive == false) {
                    $("#twc-logo").fadeOut(250)
                    $("#weatherscan-logo").animate({"right":"173px"}, {duration: 400, easing: "linear",})
                    alertCrawlActive == true
                }
                $(".severe-lowerarea").fadeIn(0)
                $(".normal-lowerarea").fadeOut(0)
                $(".severe-lowerarea .alertheader").text(weatherData.crawlAlerts.warnings[0].warningtitle)
                $("#crawl-severe .crawl").text("")
                if (weatherData.crawlAlerts.warnings[0].severe == true) {
                    audioPlayer.playWarningBeep()
                }
                $(".severe-lowerarea .banner").css({"background":"transparent url(images/assets/severe_banner_" + weatherData.crawlAlerts.warnings[0].color + ".png)", "background-size":"100%", "background-repeat":"no-repeat"})
                //setTimeout(() => {
                    $("#crawl-severe .crawl").text(weatherData.crawlAlerts.warnings[0].warningdesc)
                    if (isSevere(weatherData.crawlAlerts.warnings[0].warningtitle) == true) {
                        $("#crawl-severe .crawl").css("text-transform", "uppercase")
                    } else {
                        $("#crawl-severe .crawl").css("text-transform", "normal")
                    }
                    $("#crawl-severe .crawl").marquee({speed: 103, pauseOnHover: false, delayBeforeStart: 400})
                    $("#crawl-severe .crawl").on("finished", () => {
                        if (weatherData.crawlAlerts.warnings[0].severe == true) {
                            audioPlayer.playWarningBeep()
                        }
                    })
                //}, 400);
            }
        } else {
            //if (orderidx == 0) {
                if ($("#crawl-severe .crawl").text() != "") {
                    $("#twc-logo").fadeIn(250)
                    $("#weatherscan-logo").animate({"right":"347px"}, {duration: 400, easing: "linear",})
                    $(".severe-lowerarea").fadeOut(0)
                    $(".normal-lowerarea").fadeIn(0)
                    if ($("#crawl-severe .crawl").text() != "") {
                        $("#crawl-severe .crawl").text("")
                        $("#crawl-severe .crawl").marquee("destroy")
                    } 
                }
            //}
        }
    }, 1000);
}
//this could be a setting to add to appearance settings
//like say someone wants to let the ad run for 5 minutes