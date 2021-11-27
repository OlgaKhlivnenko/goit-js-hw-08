import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
// const player = document.querySelector(`#vimeo-player`)
player.on('pause', function(data) {
    
    const timeupdate = data.seconds;
    console.log(timeupdate);
    localStorage.setItem(`pauseVideo`, timeupdate);
});

player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
}).catch(function(error) {
    // an error occurred
});
