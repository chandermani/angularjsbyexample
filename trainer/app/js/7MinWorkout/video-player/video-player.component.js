angular.module('7minWorkout')
    .component('videoPlayer', {
        templateUrl: 'js/7minworkout/video-player/video-player.html',
         bindings: {
            videos: '<'
        }
    });