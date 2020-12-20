

let music;

$(document).ready(function () {

    music = new Howl({
       src: ["img/Audio.mpeg"],
       loop: true,
       volume: 0.75
    });
});

$("#tree>img").click(function(e){
    let name = e.target.id;

    if(name == "toy1"){
        music.play(0);
    }
    else if(name == "toy2"){
        music.play(1);
    }
    else if(name == "toy3"){
        music.play(2);
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

    let seconds = Math.floor(diff/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);

    $("#seconds").text(seconds);
    $("#minutes").text(minutes + ":");
    $("#hours").text(hours + ":");
    $("#days").text(days);

}, 1000);