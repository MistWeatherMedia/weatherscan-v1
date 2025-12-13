class AudioManager {
    constructor() {
        this.playlist = []
        this.$players = $('<div id="players">')
        this.isMobile = false

        $('body').append(this.$players)

        this.initializeAudio = function () {
            //setTimeout(() => {
                if (systemSettings.audioSettings.enableMusic) {
                    this.buildPlaylist();
                    if (systemSettings.audioSettings.randomStart) {
                        this.shuffleStart()
                    }
                    if (systemSettings.audioSettings.shuffle) {
                        shuffle(this.playlist)
                    }
                }
            //}, 1000);
        }
    }

    shuffleStart() {
        var firstHalf = this.playlist
        var secondHalf = firstHalf.splice(Math.floor(Math.random() * firstHalf.length))
        this.playlist = [...secondHalf, ...firstHalf]
        //console.log(this.playlist);
    }

    playCC() {
        if(!systemSettings.audioSettings.narrations) return;
        this.startPlaying(['/narrations/Local-CurrentConditions_Default1.wav'], false)
    }

    playLF() {
        if(!systemSettings.audioSettings.narrations) return;
        this.startPlaying(['/narrations/Local-TextForecast_Default1.wav'], false)
    }

    playDP() {
        if(!systemSettings.audioSettings.narrations) return;
        this.startPlaying(['/narrations/Local-DaypartForecast_Default1.wav'], false)
    }

    playTrafficCond() {
        if(!systemSettings.audioSettings.narrations) return;
        this.startPlaying(['/narrations/Local-TrafficOverview_Default1.wav'], false)
    }
    playTrafficFlow() {
        if(!systemSettings.audioSettings.narrations) return;
        this.startPlaying(['/narrations/Local-TrafficFlow_Default1.wav'], false)
    }
    playRegionalForecast() {
        if(!systemSettings.audioSettings.narrations) return;
        this.startPlaying(['/narrations/Local-RegionalForecastConditions_Default1.wav'], false)
    }
    playPollenReport() {
        if(!systemSettings.audioSettings.narrations) return;
        this.startPlaying(['/narrations/Local-AllergyReport_Default1.wav'], false)
    }
    playWarningBeep() {
        this.$players.find('.music').jPlayer('volume', 0.0);
        this.startPlaying(['/narrations/beep.wav','/narrations/beep.wav','/narrations/beep.wav','/narrations/beep.wav','/narrations/beep.wav','/narrations/beep.wav','/narrations/beep.wav',], false);
        setTimeout(() => {
           this.$players.find('.music').jPlayer('volume', 0.8); 
        }, 5250);
    }
    playAirportConditions() {
        if(!systemSettings.audioSettings.narrations) return;
        this.startPlaying(['/narrations/Local-LocalAirportConditions_Default1.wav'], false)
    }
    playDopplerRadar() {
        if(!systemSettings.audioSettings.narrations) return;
        this.startPlaying(['/narrations/Local-LocalDoppler_Default1.wav'], false)
    }
//for (var i = 0; i < 7; i++) {
            //setTimeout(() => {
                //console.log(i+1)
                //731
            //}, i*731);
        //}
    buildPlaylist() {
        var musicPath = 'music/';
        systemSettings.audioSettings.order.forEach(order => {
            this.playlist.push(`${musicPath}Track ${order}.mp3`)
        }
        );
    }

    startPlaying(arr, loop) {
        var audioType = loop ? 'music' : 'voice'
        if (this.$players.find(`.${audioType}`).length > 0)
            return;

        var current = -1
        const len = arr.length;

        //functions built in with startPlaying
        const initPlayer = (id, audioType) => {
            var $div = $(`<div id="${id}" class="jplayer ${audioType}"></div>`);
            $div.jPlayer({
                swfPath: `${document.baseURI}jplayer`,
                preload: 'auto',
                ended: function () {
                    playNext()
                }
            });
            this.$players.append($div);
            return $div;
        }
        var $player = initPlayer('p1', audioType)
        var $preloader = initPlayer('p2', audioType)

        const playNext = () => {
            current = getNextIndex();

            if (getNextIndex() === null) {
                $preloader.off($.jPlayer.event.ended).on($.jPlayer.event.ended, () => {
                    this.$players.find('.music').jPlayer('volume', 0.8);
                    $player.remove();
                    $preloader.remove();
                }
                );
                switchAudio();
            } else {
                switchAudio();
                preloadTrack(arr[getNextIndex()]);
            }
        }
            ;

        const preloadTrack = (trackName) => {
            try {
                $preloader.jPlayer('setMedia', {
                    mp3: trackName
                }).jPlayer('play').jPlayer('stop');
            } catch (e) {
                setTimeout(() => preloadTrack(trackName), 500);
            }
        }
            ;

        const getNextIndex = () => {
            const nextIndex = current + 1;
            if (nextIndex < len) {
                return nextIndex;
            } else {
                return (loop ? 0 : null)
            }
        }
            ;

        const switchAudio = () => {
            var tempAudio = $player;
            var tempAudio2 = $preloader;
            $player = null,
                $preloader = null;
            $player = tempAudio2;
            $preloader = tempAudio;
            $player.jPlayer('play');

            $(document).on('mousedown', () => {
                if (!this.isMobile) {
                    $player.jPlayer('play');
                    this.isMobile = true;
                }
            }
            );

        }
            ;

        if (audioType != 'music') {
            this.$players.find('.music').jPlayer('volume', 0.3);
        }

        $preloader.jPlayer('setMedia', {
            mp3: arr[0]
        });
        playNext();
    }
    stopPlaying() {
        this.$players.find('.music').jPlayer('pause');
    }
    resumePlaying() {
        this.$players.find('#p2').jPlayer('play', 0);
    }
}
var audioPlayer