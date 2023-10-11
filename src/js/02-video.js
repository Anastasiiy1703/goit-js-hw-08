import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function saveCurrentTime(currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime.toString());
}
const storedCurrentTime = parseFloat(localStorage.getItem('videoplayer-current-time')) || 0;
player.setCurrentTime(storedCurrentTime);
player.on('timeupdate', throttle(function (data) {
  const currentTime = data.seconds;
  saveCurrentTime(currentTime);
}, 1000));

