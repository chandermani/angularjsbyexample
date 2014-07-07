'use strict';

angular.module('7minWorkout')
  .controller('WorkoutVideosController', ['$scope', '$modal', function ($scope, $modal) {
      $scope.searchResults = [];
      function YouTubeVideo(source) {
          this.id = source.id.videoId;
          this.thumbnail = source.thumbnails.high;
          this.description = source.snippet.description;
          this.publishedAt = source.snippet.publishedAt
      }
      $scope.findVideos = function () {
          $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=push+ups&key=AIzaSyCbX0oTRpY2BMLh1zPmfsyEAOQY31j2GPo').success(function (data) {
              $scope.searchResults.length = 0;
              angular.forEach(data.items, function (video) {
                  $scope.searchResults.push(new YouTubeVideo(video));
              });
          });
      };
      $scope.playVideo = function (videoId) {
          $scope.pauseResumeWorkout();
          var dailog = $modal.open({
              templateUrl: 'youtube-modal',
              controller: VideoPlayerController,
              resolve: {
                  video: function () {
                      return '//www.youtube.com/embed/' + videoId;
                  }
              },
              size: 'lg'
          }).result['finally'](function () {
              $scope.pauseResumeWorkout();
          });
      };

      var VideoPlayerController = function ($scope, $modalInstance, video) {
          $scope.video = video;
          $scope.ok = function () {
              $modalInstance.close();
          };
      };

      var init = function () {
      };
      init();
  }]);