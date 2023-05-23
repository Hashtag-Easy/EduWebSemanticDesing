document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const videos = document.querySelector("video");
const audios = document.querySelector("audio")

let players = [];

for (let i = 0; i < audios.clientHeight; i++) {
  players.push(audios[i])
}

for (let i = 0; i < videos.clientHeight; i++) {
  players.push(videos[i])
}

for (let i = 0; i < players.length; i++) {
  players[i].removeAttribute('controls')
}

function playerController(player, playPauseButton, stopButton, forwardButton, timeLabel) {
  this.player = player;
  this.playPauseButton = playPauseButton;
  this.stopButton = stopButton;
  this.forwardButton = forwardButton;
  this.timeLabel = timeLabel;
  this.interval;
  this.playPauseButton.onClick = function() {
    if (player.paused) {
      player.play();
    } else {
      player.pause();
      playPauseButton.textContent = "Play"
    }
  }
}














