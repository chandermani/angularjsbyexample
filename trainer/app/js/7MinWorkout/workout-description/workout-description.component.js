angular.module('7minWorkout')
    .component('workoutDescription', {
        templateUrl: 'js/7minworkout/workout-description/workout-description.html',
        bindings: {
            description: '<',
            procedure: '<'
        }
    });