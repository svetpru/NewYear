

let music;

$(document).ready(function () {

    


    music = new Howl({
       src: ["img/1.mp3"],
       loop: true,
       volume: 0.75
    });
});

//Муз дерево
$("#tree>img").click(function(e){

    $("#tree>img").addClass("sharking");

    music.fade(1, 0, 1000, music);
    let name = e.target.id;

    if(name == "toy1"){
        $(e.target).removeClass("sharking");
        music.play();
    }
    else if(name == "toy2"){
        $(e.target).removeClass("sharking");
        music.play();
    }
    else if(name == "toy3"){
        $(e.target).removeClass("sharking");
        music.play();
    }
    $("#treeStar").click(function() {
        music.stop();
        });
});

//Анимация шляпы
$(".hat").click(function (e) {
    $(e.currentTarget).addClass("hatBounce");

    setTimeout(function(){
        $(e.currentTarget).removeClass("hatBounce");
    }, 1500);
});

//Анимация руки
setInterval(function(){

    $(".hand-r").addClass("hand-rSwing");

    setTimeout(function(){
        $(".hand-r").removeClass("hand-rSwing");
    }, 2500);
}, 3500);


// Телефон
//Муз дерево
$("#treeMobile>img").click(function(e){

    $("#treeMobile>img").addClass("sharking");

    music.fade(1, 0, 1000, music);
    let name = e.target.id;

    if(name == "toy1"){
        $(e.target).removeClass("sharking");
        music.play();
    }
    else if(name == "toy2"){
        $(e.target).removeClass("sharking");
        music.play();
    }
    else if(name == "toy3"){
        $(e.target).removeClass("sharking");
        music.play();
    }
    $("#treeMobile>#treeStar").click(function() {
        music.stop();
        });
});


// Отсчёт до нового года
setInterval(function(){
    // Время нового года
    let newYear = new Date("1 January 2021 00:00:00");  
    // Нынешнее время
    let now = new Date();
    // Разность дат
    let diff = newYear - now;

    // Проверяем что таймер не истёк
    if(diff > 0){
        let days = Math.floor( diff/(24*60*60*1000) );
        let hours = Math.floor( (diff%(24*60*60*1000)) / (60*60*1000) );
        let minutes = Math.floor( (diff%(60*60*1000)) / (60*1000));
        let seconds = Math.floor( (diff%(60*1000)) / 1000);

        $(".seconds").text(seconds);
        $(".minutes").text(minutes + ":");
        $(".hours").text(hours + ":");
        $(".days").text(days + ".");
    }
    else{
        $("#countdown p, #countdownMobile p").text("Новый Год Наступил!")
        $("#countdown, #countdownMobile").fadeOut(2000, function(){
            $(this).remove();
            $(".envlope-wrapper").fadeIn(1000).removeClass("d-none")
        });
    }
}, 1000)

// Открываем и закрываем открытку
$(".envlope-wrapper").click(function (e) { 
    $("#envelope").toggleClass("open");
    $("#envelope").toggleClass("close");
});