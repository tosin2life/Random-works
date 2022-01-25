const timer = document.querySelector(".container h1");
let timeSecond = 10;
setTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  setTime(timeSecond);
  if (timeSecond <= 0 || timeSecond < 1) {
      endTime();
    clearInterval(countDown);
  }
}, 1000);

function setTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timer.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}
function endTime(){
    timer.innerHTML = "TIME OUT"
}