'use strict'

angular.module('myApp')
    .factory('socialMediaService',['$http', '$q', function($http, $q) {

        var baseUrl = 'https://jsonplaceholder.typicode.com/';

        var getPosts = function(){
            var deferred = $q.defer();
            var apiMethod = 'posts';
            
            $http.get(baseUrl+apiMethod)
                .then(function(response) {
                    deferred.resolve(response.data);
                });

            return deferred.promise;
        }

        return {
            getPosts : getPosts
        }
    } ]);