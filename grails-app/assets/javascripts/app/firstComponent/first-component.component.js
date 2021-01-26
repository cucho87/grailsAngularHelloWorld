'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('myApp').
  component('firstComponent', {
    templateUrl: '../assets/app/firstComponent/first-component.template.html',
    controller: ['$scope','peopleService', 'socialMediaService',

        function FirstComponentController($scope, peopleService, socialMediaService) {
            $scope.title = "Testing Component + Service";
            $scope.tstService = [];
            $scope.newPerson = {};

            $scope.addNewPerson = function() {
                peopleService.putPerson($scope.newPerson);
                $scope.tstService = peopleService.getPeople();
                $scope.newPerson = {};
            };

            this.$onInit = function(){
              var tmp = peopleService.getPeopleFromApi();
              tmp.then(function(response) {
                      $scope.tstService = response;
                  }, function(reason){
                      $scope.tstService = reason;
                  });
            }

        }

    ]
  });