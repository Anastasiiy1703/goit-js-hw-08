import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function (data) {
    player.getCurrentTime().then(function (seconds) {
         const currentTime = data.seconds;
         localStorage.setItem('videoplayer-current-time', currentTime.toString())
  })
    }, 1000)); 



