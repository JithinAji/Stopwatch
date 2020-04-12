var h = 0;
var m = 0;
var s = 0;

console.log("hello");

var start = document.querySelector("#startpause");
var reset = document.querySelector("#reset");

var sec = document.querySelector("#sec");
var min = document.querySelector("#min");
var hour = document.querySelector("#hour");
var time;

start.addEventListener("click",function(){

    if(start.innerHTML === "Start"){
        start.innerHTML = "Pause";
        time = window.setInterval(startclock, 1000);
    }
    else{
        start.innerHTML = "Start";
        clearInterval(time);
    }
})

reset.addEventListener("click",function(){
    clearInterval(time);
    h=0;
    m=0;
    s=0;
    sec.innerHTML = formatted(s);
    min.innerHTML = formatted(m);
    hour.innerHTML = formatted(h);
    start.innerHTML = "Start";
})

var startclock = function(){
    s = s+1; 
    if(s<60){
        sec.innerHTML = formatted(s);
    }

    else{
        if(m<60){
            m=m+1;
            s=0;
            sec.innerHTML = formatted(s);
            min.innerHTML = formatted(m);
        }
        else{
            h=h+1;
            m=0;
            s=0;
            sec.innerHTML = formatted(s);
            min.innerHTML = formatted(m);
            hour.innerHTML = formatted(h);
        }
    }
}

var formatted = function(num){
    if(num<10){
        var str = "0" + num;
        return str;
    }
    else{
        return num;
    }
    
}
