function DdMusicPlayer() {
    this.defaultVolume = 0.5;//默认音量
    this.defaultMusicName = "mizuki - ViEW";//默认播放的第一首歌曲
    this.defaultPlayState = "pause";//默认播放状态
    this.defalutPlayOrder = "single";//默认播放顺序
    this.playerJqObj =function(){return $("#ddMusicPlayer");};
    this.lyric= function(){return $("#lyric");};
    this.bgm=function(){return $("#bgm");};
    this.pauseBtn =function(){return $("#pause_btn");};
    this.playBtn =function(){return $("#play_btn");};
    this.preBtn =function(){return $("#pre_btn");};
    this.nextBtn =function(){return $("#next_btn");};
    this.bpBar =function(){return $("#bottom_progress_bar");};
    this.tpBar = function(){return $("#top_progress_bar");};
    this.muteBtn = function(){return $("#mute_btn");};
    this.soundBtn = function(){return $("#sound_btn");};
    this.bvBar = function(){return $("#bottom_volume_bar");};
    this.tvBar = function(){return $("#top_volume_bar");};
    this.singleBtn = function(){return $("#single_btn");};
    this.loopBtn = function(){return $("#loop_btn");};
    this.randomBtn = function(){return $("#random_btn");};
    this.musicListBtn = function(){return $("#music_list_btn");};
    this.musicList=function(){return $(".music");};
    this.currentMusic=function(){};
    this.lyricTime = new Array();//当前歌词时间数组
    this.lyricText = new Array();//当前歌词文本数组
    this.playOrder;
    this.playState;

    /*初始化播放器*/
    this.initialDdMusicPlayer = function () {
        this.initialPlayerHtml(this);
        this.loadDefaultSetting(this);
        this.loadPlayerEvent(this);
    };

    this.changeMusicById = function (player, musicId) {
        player.currentMusic=function(){return $(player.musicList()[Number(musicId) - 1]);}
        player.bgm().attr("src",player.currentMusic().attr("music_path"))
        player.musicList().removeAttr("style");
        player.currentMusic().css("color", "#FAFAFA");

        var lyricPath = player.currentMusic().attr("music_lyric_path");
        if (lyricPath == "" || lyricPath == undefined) {
            player.lyricTime = [0, 999999];
            player.lyricText = ["", ""];
        }
        var lines = decodeURIComponent(player.currentMusic().attr("lyric_content")).split("\n");
        for (var i = 0; i < lines.length; i++) {
            if (isNaN(lines[i].substr(1, 2)) == false) {
                player.lyricTime.push((Number(lines[i].substr(1, 2) * 60 + Number(lines[i].substr(4, 2)))));
                player.lyricText.push(lines[i].substr(10, lines[i].length - 10).replace("#", "————"));
            }
        }

        window.clearInterval(player.bgm().attr("lyric_intreval"));
        var lyric_interval = setInterval(function changeLyric() {
            for (var i = 0; i <= player.lyricTime.length; i++) {
                if (player.bgm()[0].currentTime.toFixed(0) < Number(player.lyricTime[0])) {
                    player.lyric().text("");
                }
                if (Number(player.lyricTime[i]) <= player.bgm()[0].currentTime.toFixed(0) && player.bgm()[0].currentTime.toFixed(0) <= Number(player.lyricTime[i + 1])) {
                    player.lyric().text(player.lyricText[i]);
                }
            }
        }, 1000)
        player.bgm().attr("lyric_intreval", lyric_interval);
    };

    /*通过歌曲名称更改歌曲*/
    this.changeMusicByName = function (player, musicName) {
        for (var i = 0; i < player.musicList().length; i++) {
            if ($(player.musicList()[i]).text() == musicName) {
                var musicId = $(player.musicList()[i]).attr("music_id");
                player.changeMusicById(player, musicId);
                break;
            }
        }
    };

    /*更改播放器音量*/
    this.changePlayerVolume = function (player, targetVolume) {
        if(targetVolume ==-1){
            player.muteBtn().show();
            player.soundBtn().hide();
            player.bgm()[0].muted = true;
        }
        else if(targetVolume >= 0) {
            player.muteBtn().hide();
            player.soundBtn().show();
            player.bgm()[0].muted = false;
            player.bgm()[0].volume=targetVolume;
            player.tvBar().attr("width","");
            console.log(player.bvBar().css("width"));
            player.tvBar().width(Number(player.bgm()[0].volume) * Number(player.bvBar().width()));
        }
    };

    /*更改播放器播放状态*/
    this.changePlayState = function (player, targetPlayState) {
        player.playState = targetPlayState;
        if (player.playState == "play") {
            player.pauseBtn().show();
            player.playBtn().hide();
            player.bgm()[0].play();
        }
        else if (player.playState == "pause") {
            player.pauseBtn().hide();
            player.playBtn().show();
            player.bgm()[0].pause();
        }
    };

    /*更改播放器播放顺序*/
    this.changePlayOrder = function (player, targetPlayOrder) {
        player.playOrder = targetPlayOrder;
        if (player.playOrder == "single") {
            player.singleBtn().show();
            player.loopBtn().hide();
            player.randomBtn().hide();
            player.bgm().off("ended");
            player.bgm().on("ended", function () {
                player.bgm().currentTime=0;
                player.bgm()[0].play();
            });
        }
        else if (player.playOrder == "loop") {
            player.singleBtn().hide();
            player.loopBtn().show();
            player.randomBtn().hide();
            player.bgm().off("ended");
            player.bgm().on("ended", function () {
                var nextmusicId = Number(player.currentMusic().attr("music_id")) + 1;
                if (nextmusicId > player.musicList().length) {
                    nextmusicId = 1;
                }
                player.changeMusicById(player,nextmusicId);
                player.bgm()[0].play();
            });
        }
        else if (this.playOrder == "random") {
            player.singleBtn().hide();
            player.loopBtn().hide();
            player.randomBtn().show();
            player.bgm().off("ended");
            player.bgm().on("ended", function randomPlay() {
                var preMusicId = Math.floor(Math.random() * player.musicList().length + 1);
                player.changeMusicById(player,preMusicId);
                player.bgm()[0].play();
            });
        }
    };

    /*初始化播放器html内容*/
    this.initialPlayerHtml = function (player) {
        var audioHtml = "<audio id=\"bgm\"></audio>";
        var lyricHtml = "<div id=\"lyric\"></div>";
        var preBtnHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" class="player_btn" id="pre_btn">
        <path d="M 40 20 L 40 80"></path>
        <path d="M 40 50 L 80 20"></path>
        <path d="M 80 20 L 80 80"></path>
        <path d="M 80 80 L 40 50"></path>
        </svg>`;
        var pauseBtnHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" class="player_btn" id="pause_btn">
        <path d="M 30 25 L 30 75"></path>
        <path d="M 70 25 L 70 75"></path>
        </svg>`;
        var playBtnHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" class="player_btn" id="play_btn">
        <path d="M 30 20 L 30 80 "></path>
        <path d="M 30 20 L 70 50 "></path>
        <path d="M 30 80 L 70 50 "></path>
        </svg>`;
        var nextBtnHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" class="player_btn" id="next_btn">
        <path d="M 20 20 L 20 80"></path>
        <path d="M 20 20 L 60 50"></path>
        <path d="M 20 80 L 60 50"></path>
        <path d="M 60 20 L 60 80"></path>
        </svg>`;
        var bottomProgressBarHtml = `<div id="bottom_progress_bar" class="player_bar">
        <div id="top_progress_bar" class="player_bar"></div>
        </div>`;
        var soundBtnHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" class="player_btn" id="sound_btn">
        <path d="M 30 40 L 45 40 "></path>
        <path d="M 30 60 L 45 60 "></path>
        <path d="M 30 40 L 30 60 "></path>
        <path d="M 45 40 L 45 60 "></path>
        <path d="M 45 40 L 70 20 "></path>
        <path d="M 45 60 L 70 80 "></path>
        <path d="M 70 20 L 70 80 "></path>
        <path d="M 75 30 Q 85 50 75 70 "></path>
        <path d="M 80 20 Q 98 50 80 80 "></path>
        </svg>`;
        var muteBtnHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" class="player_btn" id="mute_btn">
        <path d="M 30 40 L 45 40 "></path>
        <path d="M 30 60 L 45 60 "></path>
        <path d="M 30 40 L 30 60 "></path>
        <path d="M 45 40 L 45 60 "></path>
        <path d="M 45 40 L 70 20 "></path>
        <path d="M 45 60 L 70 80 "></path>
        <path d="M 70 20 L 70 80 "></path>
        </svg>`;
        var bottomVolumeBarHtml = `<div id="bottom_volume_bar" class="player_bar">
        <div id="top_volume_bar" class="player_bar"></div>
        </div>`;
        var singleplayBtnHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" class="player_btn" id="single_btn">
        <path d="M 80 30 L 80 70 Q 80 80 70 80 L 30 80 Q 20 80 20 70 L 20 30 Q 20 20 30 20 L 80 20"></path>
        <polyline points="70,10 80,20 70,30"></polyline>
        <path d="M 40 50 L 50 40 L 50 70"></path>
        </svg>`;
        var loopplayBtnHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" class="player_btn" id="loop_btn">
        <path d="M 20 70 L 20 30 Q 20 20 30 20 L 80 20"></path>
        <path d="M 80 30 L 80 70 Q 80 80 70 80 L 20 80"></path>
        <polyline points="70,10 80,20 70,30"></polyline>
        <polyline points="30,70 30,90 20,80"></polyline>
        </svg>`;
        var randomplayBtnHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" class="player_btn" id="random_btn">
        <path d="M 10 20 Q 90 50 10 80 "></path>
        <path d="M 90 20 Q 10 50 90 80 "></path>
        <polygon points="80,70 90 80,80 90"></polygon>
        <polygon points="80,10 90 20,80 30"></polygon>
        </svg>`;
        var musicListBtnHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" class="player_btn" id="music_list_btn">
        <path d="M 20 25 L 80 25 "></path>
        <path d="M 20 50 L 80 50 "></path>
        <path d="M 20 75 L 80 75 "></path>
        </svg>`;
        var musicPlayerController = `<div id="player_controller">${preBtnHtml}${pauseBtnHtml}${playBtnHtml}${nextBtnHtml}
        ${bottomProgressBarHtml}${soundBtnHtml}${muteBtnHtml}${bottomVolumeBarHtml}${singleplayBtnHtml}${loopplayBtnHtml}
        ${randomplayBtnHtml}${musicListBtnHtml}</div>`;
        var musicListHtml = "<div id=\"music_list\"></div>";
        var musicPlayerHtml = audioHtml + lyricHtml + musicPlayerController + musicListHtml;
        player.playerJqObj().html(musicPlayerHtml);
    }

    /*初始化播放器事件*/
    this.loadPlayerEvent = function (player) {
        player.playBtn().on("click", function () {
            player.changePlayState(player, "play");
        });
        player.pauseBtn().on("click", function () {
            player.changePlayState(player, "pause");
        });
        player.preBtn().on("click", function () {
            if (player.playOrder!= "random") {
                var id = Number(player.currentMusic().attr("music_id")) - 1;
                if (id <= 0) {
                    id = player.musicList().length;
                }
            }
            else {
                var id = Math.floor(Math.random() * musicList.length + 1);
            }
            player.changeMusicById(player,id);
            player.changePlayState(player,"play");
        });
        player.nextBtn().on("click", function () {
            if (player.Order!= "random") {
                var id =Number(player.currentMusic().attr("music_id"))+1;
                if (id > player.musicList().length) {
                    id = 1;
                }
            }
            else {
                var id = Math.floor(Math.random() * player.musicList().length + 1);
            }
            player.changeMusicById(player,id);
            player.changePlayState(player,"play");
        });
        player.singleBtn().on("click", function () {
            player.changePlayOrder(player, "loop")
        });
        player.loopBtn().on("click", function () {
            player.changePlayOrder(player, "random")
        });
        player.randomBtn().on("click", function () {
            player.changePlayOrder(player, "single")
        });
        player.musicList().on("click", function () {
            var id = player.attr("music_id");
            player.changeMusicById(id);
            player.bgm()[0].play();
            player.pauseBtn().show();
            player.playBtn().hide();
        });
        player.musicListBtn().on("click", function () {
            player.musicList().toggle();
        });
        player.bpBar().on("click", function (e) {
            player.bgm()[0].currentTime = player.bgm()[0].duration * Number(e.offsetX) / Number(player.bpBar().width());
        });
        player.bvBar().on("click", function (e) {
            targetVolume = Math.round(Number(e.offsetX) / Number(player.bvBar().width()) * 10) / 10;
            player.changePlayerVolume(player, targetVolume);
        });
        player.muteBtn().on("click", function () {
            player.changePlayerVolume(player, player.bgm()[0].volume);
        });
        player.soundBtn().on("click", function () {
            player.changePlayerVolume(player, -1);
        });
        setInterval(function () {
            player.tpBar().width(Number(player.bgm()[0].currentTime) / Number(player.bgm()[0].duration) * player.bpBar().width());
        }, 100);
        //防止音量条因为窗体缩小而维持之前的绝对长度
        window.onresize = function(){
            player.tvBar().width(Number(player.bgm()[0].volume) * Number(player.bvBar().width()));
        }
    };

    /*加载播放器默认设置*/
    this.loadDefaultSetting = function (player) {
        player.changeMusicByName(player, player.defaultMusicName);
        player.changePlayState(player, player.defaultPlayState);
        player.changePlayOrder(player, player.defalutPlayOrder);
        player.changePlayerVolume(player, player.defaultVolume);
    };

};