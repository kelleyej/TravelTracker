let countdownDate = new Date().setHours(new Date().getHours() + 24)
const minutesIndex = document.getElementById('minutes')
const hoursIndex = document.getElementById('hours')
const secondsIndex = document.getElementById('seconds')
let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
let minutes = Math.floor((difference % (60 * 60)) / 60);
let seconds = Math.floor(difference % 60);

function startCountdown(){
    const now = new Date().getTime();
    const countdown = new Date(countdownDate).getTime();
    const difference = (countdown - now)/1000

    let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((difference % (60 * 60)) / 60);
    let seconds = Math.floor(difference % 60);

    hoursIndex.innerHTML = formatTime(hours, "hour");
    minutesIndex.innerHTML = formatTime(minutes, "minute");
    secondsIndex.innerHTML = formatTime(seconds, "second");
}

const formatTime = (time, string) => {
    return time == 1 ? `${time} ${string}` : `${time} ${string}s`;
  };

  let timer; 

  window.addEventListener("load", () => {
    startCountdown();
    timerInterval = setInterval(startCountdown, 1000);
  });