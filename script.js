const daysRemaining = document.getElementById("days");
const hoursRemaining = document.getElementById("hours");
const minsRemaining = document.getElementById("mins");
const secondsRemaining = document.getElementById("seconds");

const date = "4 Dec 2023";

function countdown() {
    const targetDate = new Date(date);
    const currentDate = new Date();

    const totalSeconds = (targetDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysRemaining.innerHTML = days;
    hoursRemaining.innerHTML = formatTime(hours);
    minsRemaining.innerHTML = formatTime(mins);
    secondsRemaining.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);