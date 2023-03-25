const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const launch = "17 oct 2024";

function countDown(){
  const dataLaunch = new Date(launch)
  const now = new Date.now()

  const totalSeconds = (dataLaunch - now)/1000;

  const days = Math.floor(totalSeconds / 60 / 60 / 24);

  const hours = Math.floor(totalSeconds / 60 / 60) % 24;

  const minutes = Math.floor(totalSeconds / 60) % 60;

  const seconds = Math.floor(totalSeconds) % 60;

  dia.innerHTML = days;
  hora.innerHTML = hours;
  minuto.innerHTML = minutes;
  segundo.innerHTML = seconds;
  
}

countDown();

setInterval(countDown, 1000)