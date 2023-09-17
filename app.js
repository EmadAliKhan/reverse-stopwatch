var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var startBtn = document.getElementById("startBtn");
var setTimer = document.getElementById("setTimer");

var min;  // Set the initial minutes
var sec = 0;
var msec = 0;
var interval;

function startTimer() {
    interval = setInterval(startStopwatch, 10);
    startBtn.disabled = true;
}

function startStopwatch() {
    if (min === 0 && sec === 0 && msec === 0) {
        stopTimer();
        // You might want to add some behavior when the countdown reaches 00:00:00
    } else {
        if (msec === 0) {
            if (sec === 0) {
                min--;
                sec = 59;
            } else {
                sec--;
            }
            msec = 99;
        } else {
            msec--;
        }

        minHeading.innerHTML = formatValue(min);
        secHeading.innerHTML = formatValue(sec);
        msecHeading.innerHTML = formatValue(msec);
    }
}

function stopTimer() {
    clearInterval(interval);
    startBtn.disabled = false;
}

function resetTimer() {
    stopTimer();
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = formatValue(min);
    secHeading.innerHTML = formatValue(sec);
    msecHeading.innerHTML = formatValue(msec);
    startBtn.disabled = false;
}

function formatValue(value) {
    return value < 10 ? `0${value}` : value;
}
var setTimer = document.getElementById("setTimer");
function addVal(){
    min = setTimer.value;
    setTimer.value = "";
}