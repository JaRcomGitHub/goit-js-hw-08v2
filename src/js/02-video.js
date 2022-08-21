
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

restoreVideoPlayback();

player.on('timeupdate', throttle(savedVideoPlayback, 1000));

function savedVideoPlayback() {
  player.getCurrentTime().then(function (seconds) {
    // seconds = the current playback position
    localStorage.setItem(STORAGE_KEY, seconds);
  });
};

function restoreVideoPlayback() {
  const savedSeconds = localStorage.getItem(STORAGE_KEY);

  if (savedSeconds) {
    player.setCurrentTime(savedSeconds);
  }
};
