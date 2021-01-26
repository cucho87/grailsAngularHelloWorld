'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('myApp').
  component('socialMediaComponent', {
    templateUrl: '../assets/app/socialMediaComponent/socialMedia.template.html',
    controller: ['$scope', 'socialMediaService',

        function FirstComponentController($scope, socialMediaService) {
            $scope.posts = [];
            $scope.title = "Testing $HTTP";

            $scope.getPosts = function() {
                var tmp = socialMediaService.getPosts();
                tmp.then(function(response) {
                        $scope.posts = response;
                    }, function(reason){
                        $scope.posts = reason;
                    });
            };

            $scope.ngShowValidation = function(){
                var tmp = $scope.posts.length;
                return tmp == 0 ? false : true;
            }

        }

    ]
  });