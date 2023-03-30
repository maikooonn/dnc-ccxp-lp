const countdown = {
  dia: document.getElementById('dia'),
  hora: document.getElementById('hora'),
  minuto: document.getElementById('minuto'),
  segundo: document.getElementById('segundo'),
  launch: new Date('2023-07-17T00:00:00'),
  update() {
    const now = new Date();
    const totalSeconds = Math.floor((this.launch - now) / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor(totalSeconds % 86400 / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = Math.floor(totalSeconds % 60);
    this.dia.innerHTML = days+'D';
    this.hora.innerHTML = formatTime(hours)+'H';
    this.minuto.innerHTML = formatTime(minutes)+'M';
    this.segundo.innerHTML = formatTime(seconds)+'S';
  }
}

function formatTime(time) {
  return String(time).padStart(2, '0');
}

countdown.update();
setInterval(() => countdown.update(), 1000);