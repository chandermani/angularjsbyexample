'use strict';

angular.module('app')
  .controller('RootController', ['$scope', '$uibModal', 'ng2TranslateService', function ($scope, $modal, ng2TranslateService) {
      $scope.showWorkoutHistory = function () {
          var dailog = $modal.open({
              templateUrl: 'partials/workout/workout-history.html',
              controller: WorkoutHistoryController,
              size: 'lg'
          });
      };

      var WorkoutHistoryController = function ($scope, $modalInstance, workoutHistoryTracker) {
          $scope.search = {};
          $scope.search.completed = '';
          $scope.history = workoutHistoryTracker.getHistory();

          $scope.ok = function () {
              $modalInstance.close();
          };
      };
      WorkoutHistoryController['$inject'] = ['$scope', '$uibModalInstance', 'workoutHistoryTracker'];

      $scope.$on('$routeChangeSuccess', function (event, current, previous) {
          $scope.currentRoute = current;
          $scope.routeHasError = false;
      });

      $scope.$on('$routeChangeError', function (event, current, previous, error) {
          if (error.status === 404 && current.originalPath === "/builder/workouts/:id") {
              $scope.routeHasError = true;
              $scope.routeError = current.routeErrorMessage;
          }

      });

      $scope.setLanguage = function (languageKey) {
          ng2TranslateService.use(languageKey);
          $scope.language = languageKey;

      };

      ng2TranslateService.onLangChange.subscribe(function(event){
        $scope.language = event.lang;
      });
  }]);
