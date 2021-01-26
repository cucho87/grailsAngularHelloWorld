angular.module('myApp')
    .factory('peopleService',['$http', '$q', function($http, $q) {
        
        var people = [];

        return { 
            getPeople : function() {
                return people;
            },
            putPerson : function(person) {
                people.push(person);
            },
            getPeopleFromApi : function (){
                var deferred = $q.defer();
                var apiMethod = 'posts';
                
                $http.get('http://localhost:8080/api/getSecondInfo')
                    .then(function(response) {
                        deferred.resolve(response.data);
                        people = response.data;
                    });

                return deferred.promise;
            }
        };
    }]);