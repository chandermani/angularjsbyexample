angular.module('WorkoutBuilder')
    .directive('workoutTile', function () {
        return {
            restrict:'EA',
            templateUrl:'/partials/workoutbuilder/workout-tile.html'
        }
    });