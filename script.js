

let music;

$(document).ready(function () {

    music = new Howl({
       src: ["img/1.mp3"],
       loop: true,
       volume: 0.75
    });
});

$("#tree>img").click(function(e){

    $("#tree>img").addClass("sharking");

    music.fade(1, 0, 1000, music);
    let name = e.target.id;

    if(name == "toy1"){
        $(e.target).removeClass("sharking");
        music.play(0);
    }
    else if(name == "toy2"){
        $(e.target).removeClass("sharking");
        music.play(0);
    }
    else if(name == "toy3"){
        $(e.target).removeClass("sharking");
        music.play(0);
    }
});


//Интервал
let timer = setInterval(function(){
    //Время нового года
    let newYear = new Date("1 January 2021 00:00:00");
    //Нынешнее время
    let now = new Date();
    //Разность дат
    let diff = newYear - now;

    let days = Math.floor(diff/(24*60*60*1000));
    let hours = Math.floor(diff%(24*60*60*1000) / (60*60*1000));
    let minutes = Math.floor(diff%(60*60*1000) / (60*1000));
    let seconds = Math.floor(diff%(60*1000) / 1000);
    

    $("#seconds").text(seconds);
    $("#minutes").text(minutes + ":");
    $("#hours").text(hours + ":");
    $("#days").text(days);

}, 1000);