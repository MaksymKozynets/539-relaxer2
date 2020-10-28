const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

// Countdown

const timeH = document.querySelector('h2');
const timeSecond = 70;

displayTime(timeSecond)

const countDown = setInterval (()=>{
  timeSecond--;
  displayTime(timeSecond);
    if(timeSecond <= 0 || timeSecond < 1){
      endTime();
      clearInterval(countDown);
    }
},1000)

function displayTime(second){
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10 ?'0': ''}${sec}`
}

 //не зупиняється??