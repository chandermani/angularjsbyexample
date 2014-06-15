'use strict';

/* Filters */
angular.module('7minWorkout').filter('secondsToTime', function () {
    return function (input) {
        var sec = parseInt(input, 10);
        if (isNaN(sec)) return "00:00:00";

        var hours = Math.floor(sec / 3600);
        var minutes = Math.floor((sec - (hours * 3600)) / 60);
        var seconds = sec - (hours * 3600) - (minutes * 60);

        //if (hours < 10) { hours = "0" + hours; }
        //if (minutes < 10) { minutes = "0" + minutes; }
        //if (seconds < 10) { seconds = "0" + seconds; }
        //var time = hours + ':' + minutes + ':' + seconds;
        return ("0" + hours).substr(-2) + ':'
                + ("0" + minutes).substr(-2) + ':'
                + ("0" + seconds).substr(-2);
    }
});