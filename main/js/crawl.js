var crawlIndex = 0;
var alertCrawlActive = false
function adCrawl(crawlDuration, customCrawl, adIndex) {
    $("#crawl-main .crawl").marquee('destroy')
    $("#crawl-main").css({"opacity":"0"})
    $(".upnext-ticker").fadeIn(0)

    if (systemSettings.appearanceSettings.adMessage.length > 0) {
        $(".upnext-ticker").fadeOut(0)
        $("#crawl-main").css({"opacity":"1"})
    
        if(customCrawl == true && systemSettings.appearanceSettings.adImages[adIndex].adMessage != undefined){
            $("#crawl-main .crawl span").text(systemSettings.appearanceSettings.adImages[adIndex].adMessage);
        }else{
            $("#crawl-main .crawl span").text(systemSettings.appearanceSettings.adMessage[crawlIndex])
        }
        var crawlWidth = $("#crawl-main .crawl span").width();
        var crawlTime = (696 + crawlWidth)/189
        var repeat = Math.floor((crawlDuration/1000)/crawlTime)
        var crawlSpeed = (repeat * (696 + crawlWidth))/((crawlDuration+175)/1000)
        //console.log("crawl info")
        //console.log("crawlWidth", crawlWidth, "speed",crawlSpeed, "repeat", repeat, "crawlTime",crawlTime, "time",crawlDuration)
  	    $("#crawl-main .crawl").marquee({speed: crawlSpeed, pauseOnHover: false, gap:0, direction: 'left', delayBeforeStart: 0})
        crawlIndex++
        if (crawlIndex >= systemSettings.appearanceSettings.adMessage.length) {crawlIndex = 0}
    }
}
async function checkWarningCrawl() {
    await getCrawlAlerts()
    if (weatherData.crawlAlerts.warnings.length > 0) {
        const topWarning = weatherData.crawlAlerts.warnings[0];

        if ($("#crawl-severe .crawl").text() != topWarning.crawl) {
            $("#crawl-severe .crawl").marquee("destroy")
            $(".severe-lowerarea").fadeIn(0)
            $(".normal-lowerarea").fadeOut(0)
            //animation
            if (alertCrawlActive == false) {
                $("#twc-logo").fadeOut(250)
                $("#weatherscan-logo").animate({"right":"173px"}, {duration: 400, easing: "linear",})
                alertCrawlActive = true
            }
            
            //color
            $(".severe-lowerarea .banner").css({"background":"transparent url(images/assets/severe_banner_" + topWarning.color + ".png)", "background-size":"100%", "background-repeat":"no-repeat"})
            
            //beep if severe
            if (topWarning.severe == true) {
                audioPlayer.playWarningBeep()
                $("#crawl-severe .crawl").css("text-transform", "uppercase")
            } else {
                $("#crawl-severe .crawl").css("text-transform", "normal")
            }

            //set texts and destroy previous marquee
            $(".severe-lowerarea .alertheader").text(topWarning.event)
            $("#crawl-severe .crawl").text(topWarning.crawl)
            $("#crawl-severe .crawl").marquee({speed: 103, pauseOnHover: false, delayBeforeStart: 400})

            $("#crawl-severe .crawl").on("finished", () => {
                if (topWarning.severe == true) {
                    audioPlayer.playWarningBeep()
                }
            })
        }
    } else {
        //no warnings, end crawl
        if ($("#crawl-severe .crawl").text() != "") {
            //animation
            $("#twc-logo").fadeIn(250)
            $("#weatherscan-logo").animate({"right":"347px"}, {duration: 400, easing: "linear",})

            $(".severe-lowerarea").fadeOut(0)
            $(".normal-lowerarea").fadeIn(0)

            $("#crawl-severe .crawl").text("")
            $("#crawl-severe .crawl").marquee("destroy")
        }
    }
}
//this could be a setting to add to appearance settings
//like say someone wants to let the ad run for 5 minutes