import VideoPlayer from './Video.Player'

function (Player) {
        const iframe = document.querySelector('iframe');
        const player = new Player(iframe);

        player.on('play', function() {
            console.log('played the video!');
        });
    });