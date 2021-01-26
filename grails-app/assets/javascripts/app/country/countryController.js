'use strict'

angular.module('myApp', [])
.controller('countryController', function($scope) {
    
    $scope.helloCountryText = "Hello to the list of Countries";

    $scope.countriesList = [
        {name: 'Chile', lenguage: 'Espanol', population: '12345'},
        {name: 'Argentina', lenguage: 'Espanol', population: '67890'},
        {name: 'Brasil', lenguage: 'Portugues', population: '15937'}
    ];

});