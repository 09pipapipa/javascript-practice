let hourBox, minBox, secBox;
let timer;

function init() {
  hourBox = document.clockForm.hour;
  minBox = document.clockForm.minute;
  secBox = document.clockForm.sec;
  dClock();
}

function dClock() {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if (hour < 10 ) hour = "0" + hour;
  if (min < 10 ) min = "0" + min;
  if (sec < 10) sec = "0" + sec;
  hourBox.value = hour;
  minBox.value = min;
  secBox.value = sec;
  timer = setTimeout(dClock, 1000);
}

window.onload = init;