'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('myApp').
  component('ethosComponent', {
    templateUrl: '../assets/app/ethosComponent/ethos.template.html',
    controller: ['$scope', 'tokenService', 'ethosApiService',

        function EthosController($scope, tokenService, ethosApiService) {
            $scope.title = "Testing Ethos Component";
            $scope.tstService = [];
            $scope.newPerson = {};
            $scope.token;
            $scope.showToken = false;
            $scope.showStudent = false;
            $scope.studentInfo = {};

            $scope.ngShowToken = function() {
                $scope.token = tokenService.getToken();
                $scope.showToken = true;
            };

            $scope.ngHideTokenInfo = function(){
                $scope.showToken = false;
            }

            $scope.onClickGetStudent = function(){
                var tmpStudent = ethosApiService.getPersonById();
                tmpStudent.then(function(response) {
                    $scope.studentInfo = response;
                    console.log($scope.studentInfo.names[0]?.firstName);
                    $scope.showStudent = true;
                }, function(reason){
                    $scope.studentInfo = reason;
                });
            }

            $scope.onclickHideStudent = function(){
                $scope.showStudent=false;
            }

            this.$onInit = function(){
                tokenService.setToken();
            }

        }

    ]
  });