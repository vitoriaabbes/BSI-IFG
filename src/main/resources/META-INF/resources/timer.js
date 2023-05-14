var sec = 0;
var min = 0;

function start(){
    time = setInterval(counter, 1000);
}

function pause(){
    clearInterval(time);
}

function stop(){
    clearInterval(time);
    sec = 0;
    min = 0;
    document.getElementById('play-time').innerText='00:00';
}

function formatTime(n){
    if(n < 10){
        return('0'+n)
    } else {
        return n;
    }
}

function counter(){
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
    }

    document.getElementById('play-time').innerText= formatTime(min)+':'+formatTime(sec);
}